# Technical Architecture

## Platform Targets

- **Web** (browser-based application)
- **iOS** (native mobile app)
- **Android** (native mobile app)
- **Cross-platform Framework**: React Native with TypeScript

## Architecture Overview

Eternal Arena uses a **monorepo structure** with a layered, library-style architecture (not REST/microservices). The architecture follows a clean separation of concerns with a hybrid pattern approach combining ContextObject, Strategy, and Factory patterns.

### Key Design Principles

- **Library-style**: Direct method calls rather than REST API endpoints
- **Layered Architecture**: Clear separation between Controller → Service → Repository
- **Type Safety**: Full TypeScript typing throughout all layers
- **Extensibility**: Easy to add new action types and game features
- **Testability**: Each layer can be tested independently

## Architecture Layers

### Layer Flow

```
Frontend Components
    ↓
Controller Layer (Public API)
    ↓ (validates context, determines strategy)
Service Layer (Business Logic)
    ↓ (uses Strategy Pattern for action-specific logic)
Strategy Layer (Action-specific implementations)
    ↓ (coordinates with services)
Repository Layer (Data Access)
    ↓
Data Sources (Config Files / Local Storage → Future: Database)
```

## ContextObject Pattern

All methods across layers accept a `GameContext` object that encapsulates the current game state. This provides type safety, clean data passing, and avoids prop drilling.

### Core Context Interfaces

```typescript
/**
 * Main context object passed through all layers
 */
interface GameContext {
  playerId: string;
  playerState: PlayerState;
  currentRun: RunState;
  availableActions: number;
}

/**
 * Player's persistent state
 */
interface PlayerState {
  stats: SkillStats;
  inventory: Item[];
  gold: number;
  experience: number;
  persistentBonuses: PersistentBonus[];
}

/**
 * Current run-specific state
 */
interface RunState {
  runId: string;
  actionsRemaining: number;
  currentEnemy?: Enemy;
  activeQuests: Quest[];
  temporaryBonuses: TemporaryBonus[];
}

/**
 * Skill statistics
 */
interface SkillStats {
  attack: number;
  strength: number;
  defense: number;
  magic: number;
  ranged: number;
  prayer: number;
  agility: number;
}
```

### Benefits

- **Type Safety**: TypeScript ensures correct context structure at compile time
- **Immutability**: Context can be created as immutable objects for React Native state management
- **Clean Interfaces**: Clear contracts between layers
- **Testability**: Easy to mock context objects for testing

## Strategy Pattern

Different action types (Battle, Shop, Quest, Magic, Boss) are handled by strategy implementations. This allows polymorphic behavior while maintaining clean separation of concerns.

### Strategy Interface

```typescript
/**
 * Base interface for all action strategies
 */
interface ActionStrategy {
  /**
   * Execute the action with the given context
   */
  execute(context: GameContext, actionParams?: ActionParams): Promise<ActionResult>;
  
  /**
   * Check if the action can be executed with the current context
   */
  canExecute(context: GameContext): boolean;
  
  /**
   * Get action-specific validation rules
   */
  validate(context: GameContext, actionParams?: ActionParams): ValidationResult;
}

/**
 * Result of executing an action
 */
interface ActionResult {
  success: boolean;
  updatedContext: GameContext;
  rewards?: Rewards;
  message?: string;
  error?: string;
}

/**
 * Rewards from executing an action
 */
interface Rewards {
  experience?: number;
  gold?: number;
  items?: Item[];
  skillGains?: Partial<SkillStats>;
}
```

### Strategy Implementations

```typescript
/**
 * Battle action strategy
 */
class BattleActionStrategy implements ActionStrategy {
  constructor(
    private combatService: CombatService,
    private repository: GameRepository
  ) {}
  
  async execute(context: GameContext, params: BattleParams): Promise<ActionResult> {
    if (!this.canExecute(context)) {
      return { success: false, error: 'Cannot execute battle', updatedContext: context };
    }
    
    const battleResult = await this.combatService.executeBattle(context, params);
    const updatedContext = this.applyBattleResults(context, battleResult);
    
    return {
      success: battleResult.victory,
      updatedContext,
      rewards: battleResult.rewards,
      message: battleResult.victory ? 'Victory!' : 'Defeated!'
    };
  }
  
  canExecute(context: GameContext): boolean {
    return context.availableActions > 0 && context.currentRun.actionsRemaining > 0;
  }
  
  validate(context: GameContext, params: BattleParams): ValidationResult {
    // Battle-specific validation
    return { valid: true };
  }
  
  private applyBattleResults(context: GameContext, result: BattleResult): GameContext {
    // Update context with battle results
    return { ...context, /* updated fields */ };
  }
}

/**
 * Shop action strategy
 */
class ShopActionStrategy implements ActionStrategy {
  constructor(
    private shopService: ShopService,
    private repository: GameRepository
  ) {}
  
  async execute(context: GameContext, params: ShopParams): Promise<ActionResult> {
    // Shop-specific implementation
    // ...
  }
  
  canExecute(context: GameContext): boolean {
    return context.availableActions > 0;
  }
  
  validate(context: GameContext, params: ShopParams): ValidationResult {
    // Shop-specific validation
    return { valid: true };
  }
}

// Similar implementations for QuestActionStrategy, MagicActionStrategy, BossActionStrategy, etc.
```

## Factory Pattern

A factory creates the appropriate strategy based on the action type, providing a clean way to instantiate strategies.

### Action Types

```typescript
enum ActionType {
  BATTLE = 'battle',
  BOSS = 'boss',
  SHOP = 'shop',
  QUEST = 'quest',
  MAGIC = 'magic',
  // Add more as needed
}
```

### Strategy Factory

```typescript
/**
 * Factory for creating action strategies
 */
class ActionStrategyFactory {
  constructor(
    private combatService: CombatService,
    private shopService: ShopService,
    private questService: QuestService,
    private magicService: MagicService,
    private repository: GameRepository
  ) {}
  
  /**
   * Create the appropriate strategy based on action type
   */
  create(actionType: ActionType): ActionStrategy {
    switch (actionType) {
      case ActionType.BATTLE:
        return new BattleActionStrategy(this.combatService, this.repository);
      
      case ActionType.BOSS:
        return new BossActionStrategy(this.combatService, this.repository);
      
      case ActionType.SHOP:
        return new ShopActionStrategy(this.shopService, this.repository);
      
      case ActionType.QUEST:
        return new QuestActionStrategy(this.questService, this.repository);
      
      case ActionType.MAGIC:
        return new MagicActionStrategy(this.magicService, this.repository);
      
      default:
        throw new Error(`Unknown action type: ${actionType}`);
    }
  }
}
```

## Layer Details

### Controller Layer

The **public API** for the frontend. Controllers validate context, determine the appropriate strategy, and delegate to services.

```typescript
/**
 * Main game controller - public API for frontend
 */
class GameController {
  constructor(
    private gameService: GameService,
    private strategyFactory: ActionStrategyFactory
  ) {}
  
  /**
   * Get available actions for the current context
   */
  async getActions(context: GameContext): Promise<AvailableAction[]> {
    // Validate context
    this.validateContext(context);
    
    // Delegate to service
    return this.gameService.getActions(context);
  }
  
  /**
   * Execute an action
   */
  async executeAction(
    context: GameContext,
    actionType: ActionType,
    actionParams?: ActionParams
  ): Promise<ActionResult> {
    // Validate context
    this.validateContext(context);
    
    // Determine strategy
    const strategy = this.strategyFactory.create(actionType);
    
    // Delegate to service
    return this.gameService.executeAction(context, strategy, actionParams);
  }
  
  private validateContext(context: GameContext): void {
    if (!context.playerId) {
      throw new Error('Invalid context: playerId required');
    }
    // Additional validation
  }
}
```

### Service Layer

Handles **business logic** and coordinates between strategies and repositories. Services are responsible for shared logic like reward distribution, action cost validation, and state updates.

```typescript
/**
 * Main game service - business logic layer
 */
class GameService {
  constructor(
    private gameRepository: GameRepository,
    private rewardService: RewardService,
    private validationService: ValidationService
  ) {}
  
  /**
   * Get available actions for the context
   */
  async getActions(context: GameContext): Promise<AvailableAction[]> {
    // Business logic: determine which actions are available
    const allActions = await this.gameRepository.getAvailableActions(context);
    
    // Filter based on business rules
    return allActions.filter(action => 
      this.isActionAvailable(context, action)
    );
  }
  
  /**
   * Execute an action using the provided strategy
   */
  async executeAction(
    context: GameContext,
    strategy: ActionStrategy,
    actionParams?: ActionParams
  ): Promise<ActionResult> {
    // Validate action can be executed
    if (!strategy.canExecute(context)) {
      return {
        success: false,
        error: 'Action cannot be executed',
        updatedContext: context
      };
    }
    
    // Validate action parameters
    const validation = strategy.validate(context, actionParams);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.error,
        updatedContext: context
      };
    }
    
    // Execute strategy
    const result = await strategy.execute(context, actionParams);
    
    if (result.success) {
      // Apply action cost
      result.updatedContext = this.applyActionCost(result.updatedContext);
      
      // Save updated state
      await this.gameRepository.saveGameState(result.updatedContext);
    }
    
    return result;
  }
  
  private applyActionCost(context: GameContext): GameContext {
    return {
      ...context,
      availableActions: context.availableActions - 1,
      currentRun: {
        ...context.currentRun,
        actionsRemaining: context.currentRun.actionsRemaining - 1
      }
    };
  }
  
  private isActionAvailable(context: GameContext, action: AvailableAction): boolean {
    // Business rules for action availability
    return context.availableActions > 0;
  }
}
```

### Repository Layer

Handles **data access**. Currently reads from configuration files or local storage. Will be wired to a database in the future.

```typescript
/**
 * Game repository - data access layer
 */
class GameRepository {
  /**
   * Get available actions from data source
   */
  async getAvailableActions(context: GameContext): Promise<AvailableAction[]> {
    // Currently: read from config files or local storage
    const config = await this.loadConfig('actions.json');
    
    // Filter and transform based on context
    return this.transformActions(config, context);
  }
  
  /**
   * Save game state
   */
  async saveGameState(context: GameContext): Promise<void> {
    // Currently: save to local storage
    await this.saveToLocalStorage('gameState', context);
    
    // Future: save to database
    // await this.database.save('game_state', context);
  }
  
  /**
   * Load player state
   */
  async loadPlayerState(playerId: string): Promise<PlayerState> {
    // Currently: read from local storage
    const data = await this.loadFromLocalStorage(`player_${playerId}`);
    
    // Future: read from database
    // return await this.database.load('player_state', playerId);
    
    return data || this.createDefaultPlayerState();
  }
  
  /**
   * Load configuration file
   */
  private async loadConfig(filename: string): Promise<any> {
    // Implementation for loading config files
    // ...
  }
  
  /**
   * Save to local storage
   */
  private async saveToLocalStorage(key: string, value: any): Promise<void> {
    // Implementation for local storage (AsyncStorage in React Native)
    // ...
  }
  
  /**
   * Load from local storage
   */
  private async loadFromLocalStorage(key: string): Promise<any> {
    // Implementation for local storage
    // ...
  }
  
  private transformActions(config: any, context: GameContext): AvailableAction[] {
    // Transform config data to AvailableAction objects
    // ...
    return [];
  }
  
  private createDefaultPlayerState(): PlayerState {
    // Create default player state
    return {
      stats: {
        attack: 1,
        strength: 1,
        defense: 1,
        magic: 1,
        ranged: 1,
        prayer: 1,
        agility: 1
      },
      inventory: [],
      gold: 0,
      experience: 0,
      persistentBonuses: []
    };
  }
}
```

## Data Storage Strategy

### Current Implementation

- **Configuration Files**: JSON/YAML files for game data (enemies, items, quests, etc.)
- **Local Storage**: AsyncStorage (React Native) / localStorage (Web) for player state and game progress

### Future Implementation

The repository layer will be abstracted to support database integration:

```typescript
/**
 * Repository interface for future database implementation
 */
interface IGameRepository {
  getAvailableActions(context: GameContext): Promise<AvailableAction[]>;
  saveGameState(context: GameContext): Promise<void>;
  loadPlayerState(playerId: string): Promise<PlayerState>;
  // ... other methods
}

/**
 * Current implementation using local storage
 */
class LocalStorageRepository implements IGameRepository {
  // Implementation using AsyncStorage/localStorage
}

/**
 * Future implementation using database
 */
class DatabaseRepository implements IGameRepository {
  constructor(private database: Database) {}
  // Implementation using database
}
```

This allows seamless transition from local storage to database without changing the service layer.

## Frontend Integration (React Native)

### Context Usage

```typescript
// React Native component example
import { GameController } from './backend/controllers/GameController';
import { useGameContext } from './hooks/useGameContext';

const ActionScreen: React.FC = () => {
  const { context, updateContext } = useGameContext();
  const gameController = new GameController(/* dependencies */);
  
  const handleBattle = async () => {
    const result = await gameController.executeAction(
      context,
      ActionType.BATTLE,
      { enemyId: 'goblin' }
    );
    
    if (result.success) {
      updateContext(result.updatedContext);
    }
  };
  
  return (
    // UI components
  );
};
```

## State Management

Eternal Arena uses **Zustand** for state management, providing a lightweight, performant solution that works well with the library-style backend architecture.

### Decision: Zustand

**Why Zustand:**
- Minimal boilerplate (~1KB bundle size)
- Excellent TypeScript support
- Built-in selectors prevent unnecessary re-renders
- Simple API, easy to learn
- Works seamlessly with React Native
- Middleware support (persist, devtools)
- Good performance with frequent state updates (combat, actions)

**Store Structure:**
```typescript
stores/
  gameStore.ts        // Core game state (GameContext)
  inventoryStore.ts   // Inventory management
  uiStore.ts          // UI state (modals, loading, etc.)
  configStore.ts      // Game config data (cached)
```

### Core Game Store

```typescript
import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameContext } from '../types/GameContext';
import { GameController } from '../backend/controllers/GameController';
import { ActionType, ActionParams } from '../types/Actions';

interface GameStore {
  // State
  gameContext: GameContext | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setGameContext: (context: GameContext) => void;
  updatePlayerState: (updates: Partial<PlayerState>) => void;
  executeAction: (actionType: ActionType, params?: ActionParams) => Promise<void>;
  resetGame: () => void;
  loadGame: (playerId: string) => Promise<void>;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      gameContext: null,
      isLoading: false,
      error: null,
      
      setGameContext: (context) => set({ gameContext: context, error: null }),
      
      updatePlayerState: (updates) => set((state) => {
        if (!state.gameContext) return state;
        return {
          gameContext: {
            ...state.gameContext,
            playerState: {
              ...state.gameContext.playerState,
              ...updates
            }
          }
        };
      }),
      
      executeAction: async (actionType, params) => {
        const { gameContext } = get();
        if (!gameContext) {
          set({ error: 'No game context available' });
          return;
        }
        
        set({ isLoading: true, error: null });
        
        try {
          const controller = new GameController(/* dependencies */);
          const result = await controller.executeAction(gameContext, actionType, params);
          
          if (result.success) {
            set({ gameContext: result.updatedContext, isLoading: false });
          } else {
            set({ error: result.error || 'Action failed', isLoading: false });
          }
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error', isLoading: false });
        }
      },
      
      resetGame: () => set({ gameContext: null, error: null }),
      
      loadGame: async (playerId: string) => {
        set({ isLoading: true });
        try {
          // Load game state from repository
          const repository = new GameRepository();
          const playerState = await repository.loadPlayerState(playerId);
          // Create initial context
          // ...
          set({ isLoading: false });
        } catch (error) {
          set({ error: 'Failed to load game', isLoading: false });
        }
      }
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ gameContext: state.gameContext }), // Only persist gameContext
    }
  )
);
```

### Config Store (Cached Data)

```typescript
import create from 'zustand';
import { Item, Enemy, Quest } from '../types/GameData';

interface ConfigCache {
  items: Item[] | null;
  enemies: Enemy[] | null;
  quests: Quest[] | null;
  lastLoaded: { [key: string]: number };
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface ConfigStore extends ConfigCache {
  getItems: () => Promise<Item[]>;
  getEnemies: () => Promise<Enemy[]>;
  getQuests: () => Promise<Quest[]>;
  invalidateCache: (key?: string) => void;
}

export const useConfigStore = create<ConfigStore>((set, get) => ({
  items: null,
  enemies: null,
  quests: null,
  lastLoaded: {},
  
  getItems: async () => {
    const { items, lastLoaded } = get();
    const now = Date.now();
    
    // Return cached if fresh
    if (items && (now - (lastLoaded.items || 0)) < CACHE_TTL) {
      return items;
    }
    
    // Load from repository
    const repository = new GameRepository();
    const loaded = await repository.loadItems();
    
    set({ items: loaded, lastLoaded: { ...lastLoaded, items: now } });
    return loaded;
  },
  
  getEnemies: async () => {
    const { enemies, lastLoaded } = get();
    const now = Date.now();
    
    if (enemies && (now - (lastLoaded.enemies || 0)) < CACHE_TTL) {
      return enemies;
    }
    
    const repository = new GameRepository();
    const loaded = await repository.loadEnemies();
    
    set({ enemies: loaded, lastLoaded: { ...lastLoaded, enemies: now } });
    return loaded;
  },
  
  getQuests: async () => {
    const { quests, lastLoaded } = get();
    const now = Date.now();
    
    if (quests && (now - (lastLoaded.quests || 0)) < CACHE_TTL) {
      return quests;
    }
    
    const repository = new GameRepository();
    const loaded = await repository.loadQuests();
    
    set({ quests: loaded, lastLoaded: { ...lastLoaded, quests: now } });
    return loaded;
  },
  
  invalidateCache: (key?: string) => {
    if (key) {
      set((state) => {
        const newLastLoaded = { ...state.lastLoaded };
        delete newLastLoaded[key];
        return { lastLoaded: newLastLoaded };
      });
    } else {
      set({ items: null, enemies: null, quests: null, lastLoaded: {} });
    }
  }
}));
```

### UI Store

```typescript
import create from 'zustand';

interface UIStore {
  // Modal state
  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  
  // Loading states
  loadingActions: Set<string>;
  setLoading: (action: string, loading: boolean) => void;
  
  // Notifications
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeModal: null,
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
  
  loadingActions: new Set(),
  setLoading: (action, loading) => set((state) => {
    const newSet = new Set(state.loadingActions);
    if (loading) {
      newSet.add(action);
    } else {
      newSet.delete(action);
    }
    return { loadingActions: newSet };
  }),
  
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, notification]
  })),
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  }))
}));
```

### Usage in Components

```typescript
import { useGameStore } from '../stores/gameStore';
import { useConfigStore } from '../stores/configStore';
import { useUIStore } from '../stores/uiStore';

const BattleScreen: React.FC = () => {
  // Selective subscriptions - only re-render when specific data changes
  const gameContext = useGameStore((state) => state.gameContext);
  const executeAction = useGameStore((state) => state.executeAction);
  const isLoading = useGameStore((state) => state.isLoading);
  
  const enemies = useConfigStore((state) => state.enemies);
  const getEnemies = useConfigStore((state) => state.getEnemies);
  
  const openModal = useUIStore((state) => state.openModal);
  
  useEffect(() => {
    if (!enemies) {
      getEnemies(); // Will use cache if available
    }
  }, [enemies, getEnemies]);
  
  const handleBattle = async (enemyId: string) => {
    await executeAction(ActionType.BATTLE, { enemyId });
  };
  
  return (
    // UI implementation
  );
};
```

## Caching Strategy

Eternal Arena uses a **hybrid caching approach** combining Zustand store caching for config data and repository-level caching for file operations.

### Architecture

```
┌─────────────────────────────────────┐
│  Zustand Store (Config Cache)       │
│  - Items, Enemies, Quests           │
│  - TTL-based expiration (5 min)     │
│  - Shared across all screens        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Repository (File Cache)            │
│  - In-memory Map-based cache        │
│  - TTL-based expiration             │
│  - Reduces file system reads        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  File System / AsyncStorage         │
│  - Config files (JSON/YAML)         │
│  - Persistent game state            │
└─────────────────────────────────────┘
```

### Why This Approach

**Not using React Query/SWR:**
- Library-style backend (direct method calls, not REST API)
- React Query/SWR designed for network requests
- Would add complexity without clear benefits

**Hybrid caching:**
- **Config data** (items, enemies, quests): Cached in Zustand store
  - Loaded once per app session
  - Shared across all screens
  - TTL-based invalidation (5 minutes)
  - Manual invalidation when needed
  
- **Player state**: Managed by Zustand with persistence
  - Already persisted to AsyncStorage
  - No separate cache needed
  
- **Repository layer**: Simple in-memory cache
  - Reduces file system reads
  - TTL-based expiration
  - Cleared on app restart

### Repository-Level Cache Implementation

```typescript
class CacheManager {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl: number;
  
  constructor(ttl: number = 5 * 60 * 1000) {
    this.ttl = ttl;
  }
  
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    const age = Date.now() - entry.timestamp;
    if (age > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data as T;
  }
  
  set<T>(key: string, data: T): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }
  
  invalidate(key: string): void {
    this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
  
  // Optional: LRU eviction for memory management
  private evictOldest(): void {
    if (this.cache.size === 0) return;
    
    let oldestKey: string | null = null;
    let oldestTime = Infinity;
    
    for (const [key, value] of this.cache.entries()) {
      if (value.timestamp < oldestTime) {
        oldestTime = value.timestamp;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }
}

// Usage in Repository
class GameRepository {
  private fileCache = new CacheManager(5 * 60 * 1000); // 5 minutes
  
  async loadItems(): Promise<Item[]> {
    const cacheKey = 'items';
    const cached = this.fileCache.get<Item[]>(cacheKey);
    if (cached) return cached;
    
    // Load from file
    const items = await this.readConfigFile<Item[]>('items.json');
    this.fileCache.set(cacheKey, items);
    return items;
  }
  
  async loadEnemies(): Promise<Enemy[]> {
    const cacheKey = 'enemies';
    const cached = this.fileCache.get<Enemy[]>(cacheKey);
    if (cached) return cached;
    
    const enemies = await this.readConfigFile<Enemy[]>('enemies.json');
    this.fileCache.set(cacheKey, enemies);
    return enemies;
  }
  
  // Invalidate cache when config files are updated
  invalidateConfigCache(): void {
    this.fileCache.clear();
    // Also invalidate Zustand config store
    useConfigStore.getState().invalidateCache();
  }
  
  private async readConfigFile<T>(filename: string): Promise<T> {
    // Implementation for reading JSON/YAML files
    // ...
  }
}
```

### Cache Invalidation Strategy

```typescript
// Manual invalidation when needed
const invalidateItemCache = () => {
  useConfigStore.getState().invalidateCache('items');
  // Repository cache will expire naturally or can be cleared
};

// Automatic invalidation on config updates
const updateItemConfig = async (item: Item) => {
  await repository.updateItem(item);
  // Invalidate both caches
  repository.invalidateConfigCache();
  useConfigStore.getState().invalidateCache('items');
};
```

## Error Handling

Eternal Arena implements a **comprehensive error handling strategy** using structured error classes, error boundaries, and global error handling.

### Error Handling Architecture

```
┌─────────────────────────────────────┐
│  Error Boundaries (React)           │
│  - Catches render errors            │
│  - Prevents app crashes             │
│  - Shows fallback UI                │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Structured Error Classes           │
│  - Type-safe error types            │
│  - Game-specific errors             │
│  - User-friendly messages           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Global Error Handler               │
│  - Catches unhandled errors         │
│  - Centralized logging              │
│  - Error tracking integration       │
└─────────────────────────────────────┘
```

### Structured Error Classes

```typescript
// Base error class
abstract class GameError extends Error {
  abstract code: string;
  abstract statusCode: number;
  userMessage: string;
  context?: any;
  
  constructor(message: string, userMessage?: string, context?: any) {
    super(message);
    this.userMessage = userMessage || message;
    this.context = context;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      userMessage: this.userMessage,
      context: this.context,
      stack: this.stack
    };
  }
}

// Validation errors
class ValidationError extends GameError {
  code = 'VALIDATION_ERROR';
  statusCode = 400;
  
  constructor(message: string, field?: string) {
    super(message, `Invalid input: ${message}`, { field });
  }
}

// Game rule errors
class InsufficientActionsError extends GameError {
  code = 'INSUFFICIENT_ACTIONS';
  statusCode = 400;
  
  constructor(required: number, available: number) {
    super(
      `Required ${required} actions but only ${available} available`,
      'Not enough actions remaining',
      { required, available }
    );
  }
}

class InsufficientGoldError extends GameError {
  code = 'INSUFFICIENT_GOLD';
  statusCode = 400;
  
  constructor(required: number, available: number) {
    super(
      `Required ${required} gold but only ${available} available`,
      'Not enough gold',
      { required, available }
    );
  }
}

// Data errors
class ItemNotFoundError extends GameError {
  code = 'ITEM_NOT_FOUND';
  statusCode = 404;
  
  constructor(itemId: string) {
    super(`Item not found: ${itemId}`, 'Item not found', { itemId });
  }
}

class EnemyNotFoundError extends GameError {
  code = 'ENEMY_NOT_FOUND';
  statusCode = 404;
  
  constructor(enemyId: string) {
    super(`Enemy not found: ${enemyId}`, 'Enemy not found', { enemyId });
  }
}

// System errors
class StorageError extends GameError {
  code = 'STORAGE_ERROR';
  statusCode = 500;
  
  constructor(message: string, operation: string) {
    super(
      `Storage operation failed: ${message}`,
      'Failed to save game data',
      { operation }
    );
  }
}

class ConfigLoadError extends GameError {
  code = 'CONFIG_LOAD_ERROR';
  statusCode = 500;
  
  constructor(filename: string, originalError: Error) {
    super(
      `Failed to load config: ${filename}`,
      'Failed to load game configuration',
      { filename, originalError: originalError.message }
    );
  }
}

// Export error types
export type GameErrorType =
  | ValidationError
  | InsufficientActionsError
  | InsufficientGoldError
  | ItemNotFoundError
  | EnemyNotFoundError
  | StorageError
  | ConfigLoadError;

export {
  GameError,
  ValidationError,
  InsufficientActionsError,
  InsufficientGoldError,
  ItemNotFoundError,
  EnemyNotFoundError,
  StorageError,
  ConfigLoadError
};
```

### Usage in Services

```typescript
class GameService {
  async executeAction(context: GameContext, strategy: ActionStrategy, params?: ActionParams): Promise<ActionResult> {
    // Validate action can be executed
    if (context.availableActions <= 0) {
      throw new InsufficientActionsError(1, context.availableActions);
    }
    
    // Validate action parameters
    const validation = strategy.validate(context, params);
    if (!validation.valid) {
      throw new ValidationError(validation.error || 'Invalid action parameters');
    }
    
    try {
      const result = await strategy.execute(context, params);
      return result;
    } catch (error) {
      // Re-throw known errors
      if (error instanceof GameError) {
        throw error;
      }
      
      // Wrap unknown errors
      throw new StorageError(error instanceof Error ? error.message : 'Unknown error', 'executeAction');
    }
  }
  
  async purchaseItem(context: GameContext, itemId: string): Promise<ActionResult> {
    const item = await this.repository.getItem(itemId);
    if (!item) {
      throw new ItemNotFoundError(itemId);
    }
    
    if (context.playerState.gold < item.price) {
      throw new InsufficientGoldError(item.price, context.playerState.gold);
    }
    
    // Proceed with purchase
    // ...
  }
}
```

### Error Boundaries

```typescript
import React, { Component, ReactNode } from 'react';
import { ErrorFallbackScreen } from '../components/ErrorFallbackScreen';
import { ErrorHandler } from '../utils/ErrorHandler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  
  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error
    ErrorHandler.getInstance().handleError(error, {
      errorInfo,
      componentStack: errorInfo.componentStack
    });
  }
  
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <ErrorFallbackScreen
          error={this.state.error}
          onReset={() => this.setState({ hasError: false, error: null, errorInfo: null })}
        />
      );
    }
    
    return this.props.children;
  }
}

// Usage in App.tsx
export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        {/* App content */}
      </NavigationContainer>
    </ErrorBoundary>
  );
};
```

### Global Error Handler

```typescript
import { ErrorUtils } from 'react-native';
import { GameError } from '../errors/GameError';

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorTrackingEnabled: boolean = false;
  
  static getInstance(): ErrorHandler {
    if (!this.instance) {
      this.instance = new ErrorHandler();
    }
    return this.instance;
  }
  
  enableErrorTracking(service: 'sentry' | 'bugsnag' | 'custom', config?: any): void {
    this.errorTrackingEnabled = true;
    // Initialize error tracking service
    // if (service === 'sentry') { Sentry.init(config); }
  }
  
  handleError(error: Error, context?: any): void {
    // Log to console in development
    if (__DEV__) {
      console.error('Error:', error);
      if (context) {
        console.error('Context:', context);
      }
      if (error instanceof GameError) {
        console.error('Error Details:', error.toJSON());
      }
    }
    
    // Log to error tracking service (production)
    if (!__DEV__ && this.errorTrackingEnabled) {
      // Sentry.captureException(error, { extra: context });
    }
    
    // Handle specific error types
    if (error instanceof GameError) {
      this.handleGameError(error, context);
    } else {
      this.handleUnknownError(error, context);
    }
  }
  
  private handleGameError(error: GameError, context?: any): void {
    // Game-specific error handling
    // Could show user-friendly notifications, log analytics, etc.
    
    // Example: Show user notification for certain error types
    const userFacingErrors = [
      'INSUFFICIENT_ACTIONS',
      'INSUFFICIENT_GOLD',
      'ITEM_NOT_FOUND'
    ];
    
    if (userFacingErrors.includes(error.code)) {
      // Show toast/notification with error.userMessage
    }
  }
  
  private handleUnknownError(error: Error, context?: any): void {
    // Handle unexpected errors
    // Log more aggressively, show generic error message to user
  }
  
  handlePromiseRejection(reason: any, promise: Promise<any>): void {
    const error = reason instanceof Error
      ? reason
      : new Error(String(reason));
    
    this.handleError(error, { promise, type: 'unhandledRejection' });
  }
}

// Setup in App.tsx or index.js
const setupGlobalErrorHandling = () => {
  const originalErrorHandler = ErrorUtils.getGlobalHandler();
  
  ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
    ErrorHandler.getInstance().handleError(error, { isFatal });
    originalErrorHandler?.(error, isFatal);
  });
  
  // Handle unhandled promise rejections
  if (global.Promise) {
    const originalRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = (event: PromiseRejectionEvent) => {
      ErrorHandler.getInstance().handlePromiseRejection(event.reason, event.promise);
      originalRejectionHandler?.(event);
    };
  }
};

export { ErrorHandler, setupGlobalErrorHandling };
```

### Error Fallback Screen

```typescript
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GameError } from '../errors/GameError';

interface Props {
  error: Error | null;
  onReset: () => void;
}

export const ErrorFallbackScreen: React.FC<Props> = ({ error, onReset }) => {
  const userMessage = error instanceof GameError
    ? error.userMessage
    : 'Something went wrong. Please try again.';
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.message}>{userMessage}</Text>
      
      {__DEV__ && error && (
        <View style={styles.debug}>
          <Text style={styles.debugTitle}>Debug Info:</Text>
          <Text style={styles.debugText}>{error.message}</Text>
          {error instanceof GameError && (
            <Text style={styles.debugText}>Code: {error.code}</Text>
          )}
        </View>
      )}
      
      <Button title="Try Again" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24
  },
  debug: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '100%'
  },
  debugTitle: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  debugText: {
    fontFamily: 'monospace',
    fontSize: 12
  }
});
```

### Usage Pattern in Components

```typescript
const BattleScreen: React.FC = () => {
  const executeAction = useGameStore((state) => state.executeAction);
  const [error, setError] = React.useState<string | null>(null);
  
  const handleBattle = async (enemyId: string) => {
    setError(null);
    try {
      await executeAction(ActionType.BATTLE, { enemyId });
    } catch (err) {
      if (err instanceof InsufficientActionsError) {
        setError(err.userMessage);
      } else if (err instanceof GameError) {
        setError(err.userMessage);
        ErrorHandler.getInstance().handleError(err);
      } else {
        setError('An unexpected error occurred');
        ErrorHandler.getInstance().handleError(err as Error);
      }
    }
  };
  
  return (
    <View>
      {error && <Text style={styles.error}>{error}</Text>}
      {/* Rest of UI */}
    </View>
  );
};
```

## Benefits of This Architecture

1. **Type Safety**: Full TypeScript support ensures compile-time error checking
2. **Separation of Concerns**: Each layer has a clear responsibility
3. **Testability**: Each layer can be unit tested independently
4. **Extensibility**: Easy to add new action types via new strategies
5. **Maintainability**: Clear structure makes code easy to understand and modify
6. **Flexibility**: Repository abstraction allows easy data source changes
7. **React Native Friendly**: Zustand provides excellent state management with minimal overhead
8. **Performance**: Selective subscriptions and caching reduce unnecessary re-renders and file operations
9. **Error Resilience**: Comprehensive error handling prevents crashes and provides user-friendly feedback

## UX Principles: Placeholder and Feedback Policy

Eternal Arena follows a strict policy of providing user feedback for all unimplemented features. This ensures users never experience silent failures and always understand the state of the application.

### Policy Requirements

**All unimplemented features must provide user feedback:**

1. **Screens**: Create placeholder screens with:
   - Clear screen title
   - "Coming Soon" or similar messaging
   - Navigation back to previous screen
   - Consistent layout matching design docs

2. **Buttons/Actions**: Show toast notifications when clicked:
   - Use `showNotImplementedToast(featureName: string)` helper
   - Message format: "This feature is not yet implemented"
   - Toast appears for 3-5 seconds

3. **Backlog Tracking**: All placeholders tracked in `/docs/placeholder-backlog.md`:
   - Category (Screen, Action, Feature)
   - Status (Placeholder, In Progress, Completed)
   - Priority level
   - Description and notes

### Implementation

- Toast notifications managed through `UIStore` with queue support
- Placeholder screens follow consistent template
- Backlog updated as features are implemented
- No feature should fail silently - always provide feedback

### Benefits

- **User Experience**: Users always know what's happening
- **Development Clarity**: Clear backlog of work to complete
- **Testing**: Easy to identify what needs implementation
- **Professional**: Shows active development, not broken features

## Future Considerations

- **Event System**: Consider event bus for cross-cutting concerns (achievements, notifications, analytics)
- **Validation Framework**: Consider Zod or Yup for runtime validation in addition to TypeScript
- **Error Tracking Service**: Integrate Sentry or similar for production error tracking and analytics
- **Offline Support**: Enhanced offline capabilities with queue for pending actions
- **State Persistence**: Consider additional persistence strategies for config data beyond memory cache

