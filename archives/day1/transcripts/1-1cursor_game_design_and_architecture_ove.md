# Game design and architecture overview
_Exported on 1/4/2026 at 13:19:41 EST from Cursor (2.2.44)_

---

**User**

Hi cursor, i want some help designing a game. for starters we are going to work on @docs/specs/overview.md and decide on some features and overall structure for the app.

I want to focus on the architecture and features first, then we can figure out the appropriate frameworks and even language.

Overview: this is going to be a game which draws inspiration from an old game called ArenaScape which was abandoned years ago. It also have inspiration from idle/incremental games, specifically Inflation RPG.

The core game looop will start with a number of actions. You will be able to choose things like battle an enemy, battle a boss, shop for items, quests, magic spells - probably more, but this is good for now.

You will perform actions to gain experience, gold, items etc and when your actions run out, you will gain some persistent bonuses for your next runs.

Characters will have skills, loosely defined as:
Attack: chance to hit enemey
Strength: amount of damage from a successful hit
Defense: reduces enemy to-hit chance
Magic: ability to perform magic, both combat and non-combat
Ranged: ability to deal damage from range with Bow and Arrow
Prayer: bonuses to all aspects of the game
Agility: Adds multi hit chance, evade chance


How would you recommend structuring our design documents? I was thinking we will have a .md for each component where we can refine and enhance our designs


---

**Cursor**


Reviewing the current file structure to understand the project setup, then proposing a design document structure and a plan for the overview.



A few quick questions to scope the design:



Creating a plan for the design document structure and an initial high-level overview. You can add your specific mechanics as we refine the design.


---

**User**

OK I think that i want to keep the overview document very lean. You noted the 9 design documents, but i think i would like to also include a document for each of the sections. 
The overview may give a 1 sentence description and a link to the document which handles the details.

Does this sound like a good idea or is this getting too far into the weeds?

---

**Cursor**


A lean overview with links to detailed documents is a good pattern. Clarifying what "sections" means: are you referring to the 9 design documents (core-loop, skills, combat, items, quests, magic, progression, architecture), or to subsections within the overview (e.g., Game Concept, Core Loop)?



Updating the plan for a lean overview with links, with detailed docs for each major section. Noting some overlap with the component docs I suggested (e.g., "Core Loop" vs "core-loop.md", "Skills System" vs "skills.md"). Proposing to keep the component-based structure (core-loop, skills, combat, items, etc.) and make the overview link to them. This avoids duplication while keeping the overview lean. Updating the plan accordingly:



Updating the plan to reflect a lean overview with links to detailed component documents:


```markdown
## Overview Document Content

Populate `docs/specs/overview.md` as a lean entry point with:

- **Game Concept** - One sentence description with inspiration sources → Links to detailed docs
- **Core Loop** - One sentence → Links to `core-loop.md`
- **Skills** - One sentence → Links to `skills.md`
- **Combat** - One sentence → Links to `combat.md`
- **Items & Equipment** - One sentence → Links to `items.md`
- **Quests** - One sentence → Links to `quests.md`
- **Magic** - One sentence → Links to `magic.md`
- **Progression** - One sentence → Links to `progression.md`
- **Technical Architecture** - One sentence → Links to `architecture.md` (to be populated when frameworks chosen)

Each section in overview.md will be a brief one-sentence summary with a link to the detailed document. This keeps the overview scannable while detailed design lives in component docs.
```

```markdown
---
name: Design Document Structure and Overview
overview: Create a structured design document system and populate the overview.md with a high-level game design based on the ArenaScape/Inflation RPG inspired concept, including core loop, skills system, and recommended document structure.
todos:
  - id: create-overview
    content: Create overview.md structure with game concept, core loop, action types, skills overview, and progression model
    status: pending
  - id: document-structure
    content: Document the recommended document structure in overview.md or create a separate index/navigation doc
    status: pending
---

# Design

Document Structure and Overview

## Document Structure

Create a hierarchical documentation structure in `docs/specs/`:

1. **`overview.md`** - High-level game concept, core loop, and overall architecture

2. **`core-loop.md`** - Detailed action system, progression, and run mechanics

3. **`skills.md`** - Skill system definitions, mechanics, and interactions

4. **`combat.md`** - Combat mechanics, enemies, bosses, and battle flow

5. **`items.md`** - Item system, shops, equipment, and inventory

6. **`quests.md`** - Quest system and objectives

7. **`magic.md`** - Magic/spell system (combat and non-combat)

8. **`progression.md`** - Persistent bonuses, meta-progression, and unlocks

9. **`architecture.md`** - Technical architecture decisions (to be filled when frameworks are chosen)

## Overview Document Content

Populate `docs/specs/overview.md` as a lean entry point with one sentence per major topic and links to detailed documents:

1. **Game Concept** - One sentence description with inspiration sources → Links to concept/design docs
2. **Core Loop** - One sentence → Links to `core-loop.md`
3. **Skills** - One sentence → Links to `skills.md`
4. **Combat** - One sentence → Links to `combat.md`
5. **Items & Equipment** - One sentence → Links to `items.md`
6. **Quests** - One sentence → Links to `quests.md`
7. **Magic** - One sentence → Links to `magic.md`
8. **Progression** - One sentence → Links to `progression.md`
9. **Technical Architecture** - One sentence → Links to `architecture.md` (to be populated when frameworks chosen)

Each section in overview.md will be a brief one-sentence summary with a link to the detailed document. This keeps the overview scannable while detailed design lives in component docs.
```

```markdown
---
name: Design Document Structure and Overview
overview: Create a lean overview.md that serves as an entry point with one-sentence summaries and links to detailed component documents (core-loop, skills, combat, items, quests, magic, progression, architecture).
todos:
  - id: create-overview
    content: Create overview.md structure with game concept, core loop, action types, skills overview, and progression model
    status: pending
  - id: document-structure
    content: Document the recommended document structure in overview.md or create a separate index/navigation doc
    status: pending
---

# Design

Document Structure and Overview

## Document Structure

Create a hierarchical documentation structure in `docs/specs/`:

1. **`overview.md`** - High-level game concept, core loop, and overall architecture

2. **`core-loop.md`** - Detailed action system, progression, and run mechanics

3. **`skills.md`** - Skill system definitions, mechanics, and interactions

4. **`combat.md`** - Combat mechanics, enemies, bosses, and battle flow

5. **`items.md`** - Item system, shops, equipment, and inventory

6. **`quests.md`** - Quest system and objectives

7. **`magic.md`** - Magic/spell system (combat and non-combat)

8. **`progression.md`** - Persistent bonuses, meta-progression, and unlocks

9. **`architecture.md`** - Technical architecture decisions (to be filled when frameworks are chosen)

## Overview Document Content

Populate `docs/specs/overview.md` as a lean entry point with one sentence per major topic and links to detailed documents:

1. **Game Concept** - One sentence description with inspiration sources → Links to concept/design docs
2. **Core Loop** - One sentence → Links to `core-loop.md`
3. **Skills** - One sentence → Links to `skills.md`
4. **Combat** - One sentence → Links to `combat.md`
5. **Items & Equipment** - One sentence → Links to `items.md`
6. **Quests** - One sentence → Links to `quests.md`
7. **Magic** - One sentence → Links to `magic.md`
8. **Progression** - One sentence → Links to `progression.md`
9. **Technical Architecture** - One sentence → Links to `architecture.md` (to be populated when frameworks chosen)

Each section in overview.md will be a brief one-sentence summary with a link to the detailed document. This keeps the overview scannable while detailed design lives in component docs.
```

```markdown
---
name: Design Document Structure and Overview
overview: Create a lean overview.md that serves as an entry point with one-sentence summaries and links to detailed component documents (core-loop, skills, combat, items, quests, magic, progression, architecture).
todos:
  - id: create-overview
    content: Create lean overview.md with one-sentence summaries and links to each component document (core-loop, skills, combat, items, quests, magic, progression, architecture)
    status: pending
---

# Design

Document Structure and Overview

## Document Structure

Create a hierarchical documentation structure in `docs/specs/`:

1. **`overview.md`** - High-level game concept, core loop, and overall architecture

2. **`core-loop.md`** - Detailed action system, progression, and run mechanics

3. **`skills.md`** - Skill system definitions, mechanics, and interactions

4. **`combat.md`** - Combat mechanics, enemies, bosses, and battle flow

5. **`items.md`** - Item system, shops, equipment, and inventory

6. **`quests.md`** - Quest system and objectives

7. **`magic.md`** - Magic/spell system (combat and non-combat)

8. **`progression.md`** - Persistent bonuses, meta-progression, and unlocks

9. **`architecture.md`** - Technical architecture decisions (to be filled when frameworks are chosen)

## Overview Document Content

Populate `docs/specs/overview.md` as a lean entry point with one sentence per major topic and links to detailed documents:

1. **Game Concept** - One sentence description with inspiration sources → Links to concept/design docs
2. **Core Loop** - One sentence → Links to `core-loop.md`
3. **Skills** - One sentence → Links to `skills.md`
4. **Combat** - One sentence → Links to `combat.md`
5. **Items & Equipment** - One sentence → Links to `items.md`
6. **Quests** - One sentence → Links to `quests.md`
7. **Magic** - One sentence → Links to `magic.md`
8. **Progression** - One sentence → Links to `progression.md`
9. **Technical Architecture** - One sentence → Links to `architecture.md` (to be populated when frameworks chosen)

Each section in overview.md will be a brief one-sentence summary with a link to the detailed document. This keeps the overview scannable while detailed design lives in component docs.
```


Updated the plan to reflect a lean overview approach. This structure is **not too granular**—it's a common pattern for design documentation:

**Benefits:**
- **Scannable overview** - Quick reference without scrolling
- **Detailed docs stay focused** - Each component doc covers one topic
- **Easy navigation** - Clear links to dive deeper
- **Maintainable** - Update details in component docs without cluttering the overview

This matches how technical documentation is often structured (e.g., many open-source projects use a lean README with links to detailed docs).

The 9 component documents align with the major systems you described:
- Core Loop (actions, run mechanics)
- Skills (your 7 skill definitions)
- Combat (battles, bosses)
- Items (shops, equipment)
- Quests
- Magic (spells)
- Progression (persistent bonuses, meta-progression)
- Architecture (technical decisions, to be filled later)

Does this structure work for you, or would you prefer different component groupings?

---

**User**

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

---

**Cursor**


Implementing the plan. Creating the lean overview document with one-sentence summaries and links to component documents.



Creating the lean overview document with one-sentence summaries and links to the component documents.


```markdown
# Eternal Arena - Design Overview

A lean entry point to the game design documentation. Each section provides a brief summary with links to detailed design documents.

## Game Concept

An action-based arena RPG inspired by ArenaScape and idle/incremental games like Inflation RPG, where players manage limited actions per run to gain experience, gold, and items, then receive persistent bonuses for subsequent runs. See [core-loop.md](core-loop.md) and [progression.md](progression.md) for details.

## Core Loop

Players start each run with a limited number of actions, choose from various activities (battle, boss fights, shopping, quests, magic), gain rewards, and when actions are exhausted receive persistent bonuses for future runs. See [core-loop.md](core-loop.md) for detailed mechanics.

## Skills

Seven core skills define character capabilities: Attack (to-hit chance), Strength (damage), Defense (reduces enemy accuracy), Magic (spellcasting), Ranged (bow/arrow damage), Prayer (general bonuses), and Agility (multi-hit and evade chance). See [skills.md](skills.md) for detailed definitions and interactions.

## Combat

Players can battle standard enemies and bosses using skill-based combat mechanics influenced by Attack, Strength, Defense, and other skills. See [combat.md](combat.md) for battle flow, enemy mechanics, and combat calculations.

## Items & Equipment

Players can shop for and acquire items that enhance their character's capabilities throughout runs. See [items.md](items.md) for the item system, shops, equipment, and inventory management.

## Quests

Players can undertake quests as one of their available actions to receive rewards and progress. See [quests.md](quests.md) for quest types, objectives, and reward structures.

## Magic

Players can use magic spells for both combat and non-combat purposes, with effectiveness determined by the Magic skill. See [magic.md](magic.md) for spell systems, types, and mechanics.

## Progression

When actions are exhausted, players receive persistent bonuses that carry over to future runs, creating meta-progression between sessions. See [progression.md](progression.md) for persistent bonuses, unlocks, and progression mechanics.

## Technical Architecture

Technical architecture decisions, framework choices, and implementation details will be documented here once development frameworks and languages are determined. See [architecture.md](architecture.md) for technical specifications (to be populated).

```


Created the lean overview document. Verifying the content:



Created the lean overview document. The `docs/specs/overview.md` file now includes:

1. **Brief introduction** explaining its purpose as an entry point
2. **9 sections**, each with:
   - A one-sentence summary
   - Links to the corresponding detailed component document

Sections cover:
- Game Concept (with inspiration sources)
- Core Loop
- Skills (all 7 skills mentioned)
- Combat
- Items & Equipment
- Quests
- Magic
- Progression
- Technical Architecture (noted as to be populated later)

The overview serves as a scannable entry point, with detailed design to be added in the component documents (`core-loop.md`, `skills.md`, `combat.md`, etc.) as you refine each system.

The document is ready to use as the foundation for your game design documentation structure.

---

**User**

Lets look into the technical Architecture first. We have not decided on a specific language, but this will be available on Web, Ios and Android. I want to design it as a webapp with a frontend and a layered backend.

I like microservices, but i dont think we will need them strictly here, so instead of REST controllers, we can think of it as a library

The frontend components will call things like GameController.getActions(ContextObject)
which will validate the context and call the GameService's .getActions(ContextObject) method, which will ultimately call the GameRepository's  getActions(ContextObject) method to determine available actions.

The Controllers will be like the public API for the front end.


As for the repository layer, eventually we may need to wire this to a database, but for now this can just be methods which read from configuration files or a generic "local storage"


---

**Cursor**


Documenting the technical architecture. Clarifying a few points to capture this correctly:



Clarifying a few technical details to document the architecture correctly:



Creating the plan for the architecture document:


---

**User**

What do you think about the ContextObject Pattern here? How well does this play with react native/typescript?
Are there other patterns you may suggest to follow based on what you know so far?
I also think a strategy pattern may work well, where the strategies are like the service layer. Controller layer accepts a contextObject, and determines the strategy, then calls the strategies method.

I would like to explore different approaches with your recommendations 

---

**Cursor**


Analyzing the ContextObject pattern and exploring alternatives, including Strategy, for this architecture. Researching patterns that work well with React Native/TypeScript and game logic.



Here’s an analysis of the ContextObject pattern and alternatives, including the Strategy pattern you mentioned.

## ContextObject Pattern Analysis

### Strengths for React Native/TypeScript:
- Strong typing: TypeScript interfaces provide compile-time safety
- Clean data passing: Avoids prop drilling across layers
- State encapsulation: Groups related game state (player stats, session info, etc.)
- Works well with a monorepo: Can be shared types across frontend/backend

### Potential concerns:
- God object risk: Can grow to include too much
- Type management: Need clear interfaces to avoid complexity
- Immutability: In React/RN, prefer immutable updates for context

### Recommendation:
Keep ContextObject, but define focused interfaces like:
```typescript
interface GameContext {
  player: PlayerState;
  session: SessionState;
  gameState: CurrentGameState;
}

interface PlayerState {
  stats: SkillStats;
  inventory: Item[];
  gold: number;
  // ...
}
```

## Strategy Pattern Analysis

This fits your game well because:
1. Distinct action types: Battle, Shop, Quest, Magic, Boss — each is a strategy
2. Polymorphic behavior: All actions have similar flow (validate → execute → reward), but different logic
3. TypeScript-friendly: Interfaces work well for strategies
4. Extensibility: Easy to add new action types

### Your suggested approach (Strategy as Service layer):
This works, but consider a slight refinement:

**Option A: Strategy at Controller level**
```
Controller → Strategy (determined by action type) → Repository
```
- Controller selects strategy
- Strategy handles business logic + data access
- Simpler, but strategies are more coupled to data

**Option B: Strategy at Service level (your suggestion)**
```
Controller → Service → Strategy → Repository
```
- Controller validates and selects strategy
- Service/Strategy handles business logic
- Repository handles data access
- Better separation of concerns

**Option C: Hybrid (recommended)**
```
Controller → ActionStrategy → Service → Repository
```
- Controller determines strategy from ContextObject
- Strategy handles action-specific logic
- Services handle shared business logic (validation, rewards, etc.)
- Repository handles data access

## Recommended Architecture

Given your game design, here's what I'd suggest:

### 1. **ContextObject for State Passing**
```typescript
interface GameContext {
  playerId: string;
  playerState: PlayerState;
  currentRun: RunState;
  availableActions: number;
}

// Usage flows through all layers
GameController.getActions(context: GameContext)
  → GameService.getActions(context: GameContext)
    → GameRepository.getActions(context: GameContext)
```

### 2. **Strategy Pattern for Action Execution**
```typescript
interface ActionStrategy {
  execute(context: GameContext): ActionResult;
  canExecute(context: GameContext): boolean;
}

class BattleActionStrategy implements ActionStrategy { ... }
class ShopActionStrategy implements ActionStrategy { ... }
class QuestActionStrategy implements ActionStrategy { ... }
class MagicActionStrategy implements ActionStrategy { ... }
```

### 3. **Controller determines strategy, delegates to service**
```typescript
class GameController {
  executeAction(context: GameContext, actionType: ActionType): ActionResult {
    // Validate context
    // Determine strategy based on actionType
    const strategy = this.strategyFactory.create(actionType);
    // Delegate to service with strategy
    return this.gameService.executeAction(context, strategy);
  }
}
```

## Alternative Patterns to Consider

### Command Pattern
Useful if actions need to be:
- Undone (e.g., "undo last action")
- Queued/batched
- Logged for replay

```typescript
interface Command {
  execute(context: GameContext): ActionResult;
  undo?(context: GameContext): void;
}
```

### Mediator Pattern
If actions need complex coordination (e.g., battle affects inventory, triggers quest progress, updates stats):

```typescript
class GameMediator {
  executeBattle(context: GameContext): void {
    // Coordinates: combat service, inventory, quest tracking, etc.
  }
}
```

### Factory Pattern (for strategies)
For strategy creation based on action type:
```typescript
class ActionStrategyFactory {
  create(actionType: ActionType): ActionStrategy {
    switch(actionType) {
      case ActionType.BATTLE: return new BattleActionStrategy();
      case ActionType.SHOP: return new ShopActionStrategy();
      // ...
    }
  }
}
```

## Final Recommendation

Use a hybrid approach:

1. **ContextObject** — Pass game state through layers (typed interfaces)
2. **Strategy Pattern** — Handle different action types at the service layer
3. **Factory Pattern** — Create strategies based on action type
4. **Keep layered structure** — Controller → Service → Repository

This gives you:
- Type safety with TypeScript
- Clear separation of concerns
- Easy extensibility for new action types
- Testable, maintainable code
- Good fit for React Native/TypeScript

Would you like me to draft a detailed architecture document with TypeScript interfaces and examples for any of these approaches?

```typescript
interface GameContext {
  player: PlayerState;
  session: SessionState;
  gameState: CurrentGameState;
}

interface PlayerState {
  stats: SkillStats;
  inventory: Item[];
  gold: number;
  // ...
}
```

```plaintext
Controller → Strategy (determined by action type) → Repository
```

```plaintext
Controller → Service → Strategy → Repository
```

```plaintext
Controller → ActionStrategy → Service → Repository
```

```typescript
interface GameContext {
  playerId: string;
  playerState: PlayerState;
  currentRun: RunState;
  availableActions: number;
}

// Usage flows through all layers
GameController.getActions(context: GameContext)
  → GameService.getActions(context: GameContext)
    → GameRepository.getActions(context: GameContext)
```

```typescript
interface ActionStrategy {
  execute(context: GameContext): ActionResult;
  canExecute(context: GameContext): boolean;
}

class BattleActionStrategy implements ActionStrategy { ... }
class ShopActionStrategy implements ActionStrategy { ... }
class QuestActionStrategy implements ActionStrategy { ... }
class MagicActionStrategy implements ActionStrategy { ... }
```

```typescript
class GameController {
  executeAction(context: GameContext, actionType: ActionType): ActionResult {
    // Validate context
    // Determine strategy based on actionType
    const strategy = this.strategyFactory.create(actionType);
    // Delegate to service with strategy
    return this.gameService.executeAction(context, strategy);
  }
}
```

```typescript
interface Command {
  execute(context: GameContext): ActionResult;
  undo?(context: GameContext): void;
}
```

```typescript
class GameMediator {
  executeBattle(context: GameContext): void {
    // Coordinates: combat service, inventory, quest tracking, etc.
  }
}
```

```typescript
class ActionStrategyFactory {
  create(actionType: ActionType): ActionStrategy {
    switch(actionType) {
      case ActionType.BATTLE: return new BattleActionStrategy();
      case ActionType.SHOP: return new ShopActionStrategy();
      // ...
    }
  }
}
```

---

**User**

yes please, using your recommendations

---

**Cursor**


Creating the architecture document with the recommended hybrid approach, including TypeScript interfaces and examples.


```markdown
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

## Benefits of This Architecture

1. **Type Safety**: Full TypeScript support ensures compile-time error checking
2. **Separation of Concerns**: Each layer has a clear responsibility
3. **Testability**: Each layer can be unit tested independently
4. **Extensibility**: Easy to add new action types via new strategies
5. **Maintainability**: Clear structure makes code easy to understand and modify
6. **Flexibility**: Repository abstraction allows easy data source changes
7. **React Native Friendly**: Context objects work well with React state management

## Future Considerations

- **State Management**: Consider Redux or Zustand for complex state if Context becomes unwieldy
- **Caching**: Add caching layer between Service and Repository for performance
- **Event System**: Consider event bus for cross-cutting concerns (achievements, notifications)
- **Validation Framework**: Consider Zod or Yup for runtime validation in addition to TypeScript
- **Error Handling**: Structured error handling strategy (custom error classes)

```


Updating the overview document to reflect that the architecture document is complete:


```markdown
# Eternal Arena - Design Overview

A lean entry point to the game design documentation. Each section provides a brief summary with links to detailed design documents.

## Game Concept

An action-based arena RPG inspired by ArenaScape and idle/incremental games like Inflation RPG, where players manage limited actions per run to gain experience, gold, and items, then receive persistent bonuses for subsequent runs. See [core-loop.md](core-loop.md) and [progression.md](progression.md) for details.

## Core Loop

Players start each run with a limited number of actions, choose from various activities (battle, boss fights, shopping, quests, magic), gain rewards, and when actions are exhausted receive persistent bonuses for future runs. See [core-loop.md](core-loop.md) for detailed mechanics.

## Skills

Seven core skills define character capabilities: Attack (to-hit chance), Strength (damage), Defense (reduces enemy accuracy), Magic (spellcasting), Ranged (bow/arrow damage), Prayer (general bonuses), and Agility (multi-hit and evade chance). See [skills.md](skills.md) for detailed definitions and interactions.

## Combat

Players can battle standard enemies and bosses using skill-based combat mechanics influenced by Attack, Strength, Defense, and other skills. See [combat.md](combat.md) for battle flow, enemy mechanics, and combat calculations.

## Items & Equipment

Players can shop for and acquire items that enhance their character's capabilities throughout runs. See [items.md](items.md) for the item system, shops, equipment, and inventory management.

## Quests

Players can undertake quests as one of their available actions to receive rewards and progress. See [quests.md](quests.md) for quest types, objectives, and reward structures.

## Magic

Players can use magic spells for both combat and non-combat purposes, with effectiveness determined by the Magic skill. See [magic.md](magic.md) for spell systems, types, and mechanics.

## Progression

When actions are exhausted, players receive persistent bonuses that carry over to future runs, creating meta-progression between sessions. See [progression.md](progression.md) for persistent bonuses, unlocks, and progression mechanics.

## Technical Architecture

React Native/TypeScript monorepo with layered architecture (Controller → Service → Repository) using ContextObject, Strategy, and Factory patterns. See [architecture.md](architecture.md) for detailed technical specifications, interfaces, and implementation patterns.


```


Created the technical architecture document using the recommended hybrid approach. The document includes:

## What's included:

1. **Platform Targets** - Web, iOS, Android with React Native/TypeScript

2. **Architecture Overview** - Monorepo, library-style, layered architecture

3. **ContextObject Pattern** - TypeScript interfaces for `GameContext`, `PlayerState`, `RunState`, and `SkillStats`

4. **Strategy Pattern** - Base `ActionStrategy` interface with implementations for Battle, Shop, Quest, Magic, etc.

5. **Factory Pattern** - `ActionStrategyFactory` for creating strategies based on action type

6. **Layer Details** with TypeScript code examples:
   - **Controller Layer** - Public API with validation
   - **Service Layer** - Business logic and coordination
   - **Repository Layer** - Data access (config files/local storage now, DB later)

7. **Data Storage Strategy** - Current (config/local storage) and future (database) with abstraction

8. **Frontend Integration** - Example React Native component usage

9. **Benefits & Future Considerations** - Architecture advantages and potential enhancements

The document includes TypeScript interfaces and code examples for each pattern. The architecture is designed to:
- Be type-safe with full TypeScript support
- Scale easily with new action types
- Be testable with clear layer separation
- Transition smoothly from local storage to database

The overview document has also been updated to reflect that the architecture document is now populated. Ready for review and implementation.

---

**User**

Lets think through state management, caching and error handling.

1 I think this is going to have a lot of pieces of data and several screens,can you analyze some options - including none - showing when you may choose the approach and provide recommendations 

---

**Cursor**


Analyzing state management, caching, and error handling options for a React Native game with multiple screens and complex data. Researching current best practices and patterns.



Analyzing state management, caching, and error handling options for this game. Creating an analysis document:



Here’s an analysis of state management, caching, and error handling, tailored to this game:

## Analysis: State Management, Caching, and Error Handling

### Context considerations
- Multiple screens with complex interactions
- Large datasets: player state, inventory, items, enemies, quests, configs
- Library-style backend (not REST API) - affects caching approach
- React Native/TypeScript
- Frequent state updates (combat, actions, rewards)

---

## 1. STATE MANAGEMENT

### Option 1: No state management library (useState/useReducer only)

When to use:
- Very simple apps (1-2 screens)
- Minimal shared state
- Prototypes/MVPs

Pros:
- No dependencies
- Simple, familiar patterns
- Fast for small apps

Cons:
- Prop drilling across many screens
- Hard to debug state flow
- Performance issues with frequent updates
- Complex to coordinate state updates
- Not suitable for your game complexity

Recommendation: ❌ Not recommended - Your game has too much state and too many screens

---

### Option 2: Context API only

When to use:
- Small-medium apps (3-5 screens)
- Limited shared state
- Simple state updates

Pros:
- Built into React
- No extra dependencies
- Works with TypeScript
- Good for theme/auth-style global state

Cons:
- Performance issues with frequent updates (re-renders all consumers)
- No built-in selectors (optimization needed)
- Can become hard to organize
- No DevTools/debugging tools
- Manual memoization required

Your context: Game state updates frequently (actions, combat, rewards) → causes performance issues

Recommendation: ⚠️ Can work with optimization, but may become limiting

Example structure:
```typescript
// Would require manual memoization and splitting contexts
const GameStateContext = createContext<GameContext | null>(null);
const InventoryContext = createContext<Item[]>([]);
const StatsContext = createContext<SkillStats | null>(null);
// Multiple contexts to avoid re-renders
```

---

### Option 3: Zustand

When to use:
- Small to large apps (5+ screens)
- Need simple, scalable state
- Want minimal boilerplate
- Need TypeScript support

Pros:
- ✅ Minimal boilerplate (~200 bytes)
- ✅ Simple API, easy to learn
- ✅ Great TypeScript support
- ✅ No providers needed
- ✅ Selectors built-in (prevents unnecessary re-renders)
- ✅ Can use with React Native
- ✅ Middleware support (persist, devtools)
- ✅ Good performance

Cons:
- Smaller ecosystem than Redux
- Less standardized patterns (more flexibility = less structure)
- Newer library (though stable)

Why it fits your game:
- ✅ Lightweight but powerful
- ✅ Simple to integrate with your ContextObject pattern
- ✅ Good for frequent updates (combat, actions)
- ✅ Easy to organize stores (game state, UI state, etc.)
- ✅ Can persist state easily

Recommendation: ✅ Highly recommended - Best balance for your use case

Example usage:
```typescript
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameStore {
  gameContext: GameContext | null;
  setGameContext: (context: GameContext) => void;
  updatePlayerState: (updates: Partial<PlayerState>) => void;
  executeAction: (actionType: ActionType) => Promise<void>;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      gameContext: null,
      setGameContext: (context) => set({ gameContext: context }),
      updatePlayerState: (updates) => set((state) => ({
        gameContext: state.gameContext ? {
          ...state.gameContext,
          playerState: { ...state.gameContext.playerState, ...updates }
        } : null
      })),
      executeAction: async (actionType) => {
        // Use your GameController here
        const controller = new GameController(/* ... */);
        const result = await controller.executeAction(
          get().gameContext!,
          actionType
        );
        set({ gameContext: result.updatedContext });
      }
    }),
    { name: 'game-storage' } // Persists to AsyncStorage
  )
);
```

---

### Option 4: Redux Toolkit (RTK)

When to use:
- Large, complex apps (10+ screens)
- Team needs standardized patterns
- Need time-travel debugging
- Complex async workflows
- Large team with multiple developers

Pros:
- ✅ Industry standard, well-documented
- ✅ Excellent DevTools
- ✅ Predictable patterns
- ✅ Great TypeScript support
- ✅ Strong ecosystem
- ✅ Middleware (thunk, saga, RTK Query)

Cons:
- More boilerplate than Zustand
- Steeper learning curve
- May be overkill for smaller teams
- More setup required

Your context: Good fit if you prefer standardized patterns and team scalability, but likely more than needed

Recommendation: ✅ Good option - Choose if you want industry-standard patterns

---

### Option 5: Jotai

When to use:
- Need atomic, granular state updates
- Want to prevent unnecessary re-renders
- Prefer composable state patterns

Pros:
- ✅ Atomic state (granular updates)
- ✅ Excellent performance (minimal re-renders)
- ✅ TypeScript support
- ✅ Small bundle size
- ✅ Composable patterns

Cons:
- Different mental model (atoms vs stores)
- Smaller community than Redux/Zustand
- Less documentation/examples
- May feel more complex for simple cases

Recommendation: ⚠️ Consider if you need granular updates, but Zustand is simpler for most cases

---

### Option 6: MobX

When to use:
- Need reactivity/observables
- Prefer class-based patterns
- Want automatic dependency tracking

Pros:
- ✅ Automatic reactivity
- ✅ Less boilerplate than Redux
- ✅ Good performance

Cons:
- Different paradigm (observables vs immutable)
- Harder to debug (less predictable)
- Less common in React Native
- Less TypeScript-friendly (though supported)

Recommendation: ❌ Not recommended - Less common in React Native, harder to debug

---

## STATE MANAGEMENT COMPARISON TABLE

| Solution | Boilerplate | Learning Curve | Performance | TypeScript | DevTools | Bundle Size | Your Game Fit |
|----------|------------|----------------|-------------|------------|----------|-------------|---------------|
| None | None | Easy | Poor (many screens) | ✅ | ❌ | 0 | ❌ |
| Context API | Low | Easy | Medium (needs optimization) | ✅ | ❌ | 0 | ⚠️ |
| **Zustand** | **Low** | **Easy** | **Excellent** | ✅ | ✅ | ~1KB | ✅✅✅ |
| Redux Toolkit | Medium | Medium | Excellent | ✅ | ✅✅ | ~15KB | ✅ |
| Jotai | Low | Medium | Excellent | ✅ | ✅ | ~4KB | ⚠️ |
| MobX | Low | Medium | Excellent | ⚠️ | ✅ | ~25KB | ❌ |

---

## FINAL STATE MANAGEMENT RECOMMENDATION

Primary recommendation: Zustand
- Best balance of simplicity and power for your game
- Works well with your library-style backend
- Minimal boilerplate
- Good performance with frequent updates
- Easy to persist state (AsyncStorage)

Alternative: Redux Toolkit
- Choose if you prefer standardized patterns
- Better for larger teams
- More setup but more structure

Implementation strategy:
```typescript
// Store structure for your game
stores/
  gameStore.ts        // Core game state (GameContext)
  inventoryStore.ts   // Inventory management
  uiStore.ts          // UI state (modals, loading, etc.)
  configStore.ts      // Game config data (cached)
```

---

## 2. CACHING

Important: You're using a library-style backend (not REST API), so React Query/SWR won't help much. You need a different caching strategy.

---

### Option 1: No caching

When to use:
- All data fits in memory easily
- Data changes constantly
- Simple prototype

Pros:
- Simplest approach
- Always fresh data

Cons:
- Repeated reads from storage
- Slow loading times
- Wasted computation
- Poor performance

Your context: You have config files (items, enemies, quests) that don't change often → caching would help

Recommendation: ❌ Not recommended

---

### Option 2: Manual caching in state management

When to use:
- Library-style backend (your case)
- Want control over cache invalidation
- Simple caching needs

Pros:
- ✅ Full control
- ✅ Works with your architecture
- ✅ Simple to implement
- ✅ No additional dependencies

Cons:
- Manual cache invalidation
- No automatic cache management
- Need to handle cache size manually

Your context: Good fit - Simple, works with your library-style backend

Recommendation: ✅ Recommended as primary caching strategy

Implementation:
```typescript
// In Zustand store
interface ConfigCache {
  items: Item[] | null;
  enemies: Enemy[] | null;
  quests: Quest[] | null;
  lastLoaded: { [key: string]: number };
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const useConfigStore = create<ConfigCache>((set, get) => ({
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
  }
}));
```

---

### Option 3: React Query / TanStack Query

When to use:
- REST API or GraphQL backend
- Need server state management
- Want automatic caching/syncing

Pros:
- Excellent for REST APIs
- Automatic cache invalidation
- Background refetching
- Loading/error states built-in

Cons:
- ❌ Not designed for library-style backends
- ❌ Assumes network requests
- ❌ Would need workarounds for your architecture
- ❌ Adds complexity without clear benefit

Your context: Your backend is library-style (direct method calls), not REST API

Recommendation: ❌ Not recommended - Wrong tool for your architecture

---

### Option 4: SWR (stale-while-revalidate)

When to use:
- REST API backend
- Want automatic revalidation
- Need optimistic updates

Pros:
- Great for REST APIs
- Automatic revalidation
- Small bundle size

Cons:
- ❌ Designed for network requests
- ❌ Doesn't fit library-style backend
- ❌ Less useful without API calls

Your context: Same issue as React Query

Recommendation: ❌ Not recommended

---

### Option 5: Custom caching layer in Repository

When to use:
- Library-style backend (your case)
- Want separation of concerns
- Need sophisticated caching logic

Pros:
- ✅ Clean separation
- ✅ Works with your architecture
- ✅ Reusable across all repositories
- ✅ Can implement LRU, TTL, etc.

Cons:
- Need to build it yourself
- More code to maintain

Your context: Good fit if you want more sophisticated caching

Recommendation: ✅ Good option for advanced caching needs

Implementation:
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
    
    if (Date.now() - entry.timestamp > this.ttl) {
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
}

// In Repository
class GameRepository {
  private cache = new CacheManager();
  
  async getItems(): Promise<Item[]> {
    const cached = this.cache.get<Item[]>('items');
    if (cached) return cached;
    
    const items = await this.loadItemsFromFile();
    this.cache.set('items', items);
    return items;
  }
}
```

---

## CACHING RECOMMENDATION

Recommended approach: Hybrid - Manual caching in state + Repository-level caching

Why:
1. Config data (items, enemies, quests) → Cache in store (Zustand)
   - Load once, use across screens
   - Invalidate when needed
2. Player state → Store in state management (already persisted)
   - No separate cache needed
3. Repository layer → Simple in-memory cache for file reads
   - Avoid repeated file reads
   - TTL-based expiration

Strategy:
```
┌─────────────────────────────────────┐
│  Zustand Store (Config Cache)       │
│  - Items, Enemies, Quests           │
│  - Cached with TTL                  │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Repository (File Cache)            │
│  - In-memory cache for file reads   │
│  - Simple Map-based cache           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  File System / AsyncStorage         │
└─────────────────────────────────────┘
```

---

## 3. ERROR HANDLING

---

### Option 1: Basic try/catch only

When to use:
- Simple apps
- Prototypes
- Don't need user-facing error handling

Pros:
- Simple
- No extra code

Cons:
- No error boundaries
- App crashes on errors
- No error recovery
- Poor user experience
- No error logging

Recommendation: ❌ Not recommended

---

### Option 2: Try/catch + Error Boundaries

When to use:
- Most React Native apps
- Want to prevent crashes
- Need graceful error UI

Pros:
- ✅ Prevents app crashes
- ✅ Graceful error UI
- ✅ Built into React
- ✅ Catches render errors
- ✅ Good user experience

Cons:
- Doesn't catch async errors (need try/catch too)
- No centralized error handling
- Manual error logging

Your context: Essential for React Native apps

Recommendation: ✅ Essential - Use this as baseline

Implementation:
```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallbackScreen error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

---

### Option 3: Structured error classes + try/catch + boundaries

When to use:
- Need different error types
- Want type-safe error handling
- Need specific error handling per error type

Pros:
- ✅ Type-safe error handling
- ✅ Different handling per error type
- ✅ Better error messages
- ✅ Easier to test

Cons:
- More code to write
- Need to define error classes

Your context: Good fit - Your game has different error types (validation, game rules, data errors)

Recommendation: ✅ Recommended

Implementation:
```typescript
// Base error class
abstract class GameError extends Error {
  abstract code: string;
  abstract statusCode: number;
  userMessage: string;
  
  constructor(message: string, userMessage?: string) {
    super(message);
    this.userMessage = userMessage || message;
    this.name = this.constructor.name;
  }
}

// Specific error types
class ValidationError extends GameError {
  code = 'VALIDATION_ERROR';
  statusCode = 400;
}

class InsufficientActionsError extends GameError {
  code = 'INSUFFICIENT_ACTIONS';
  statusCode = 400;
  userMessage = 'Not enough actions remaining';
}

class ItemNotFoundError extends GameError {
  code = 'ITEM_NOT_FOUND';
  statusCode = 404;
}

// Usage in service
async executeAction(context: GameContext, actionType: ActionType) {
  if (context.availableActions <= 0) {
    throw new InsufficientActionsError('No actions available');
  }
  // ...
}
```

---

### Option 4: Global error handler + structured errors + boundaries

When to use:
- Production apps
- Need centralized error logging
- Want to catch all unhandled errors

Pros:
- ✅ Catches all errors
- ✅ Centralized logging
- ✅ Can integrate with error tracking (Sentry, etc.)
- ✅ Better debugging

Cons:
- More setup
- Need error tracking service (optional)

Your context: Recommended for production

Recommendation: ✅ Recommended for production

Implementation:
```typescript
// Global error handler
class ErrorHandler {
  private static instance: ErrorHandler;
  
  static getInstance(): ErrorHandler {
    if (!this.instance) {
      this.instance = new ErrorHandler();
    }
    return this.instance;
  }
  
  handleError(error: Error, context?: any): void {
    // Log to console (dev)
    if (__DEV__) {
      console.error('Error:', error, context);
    }
    
    // Log to error tracking service (production)
    if (!__DEV__) {
      // Sentry.captureException(error, { extra: context });
    }
    
    // Could show user-friendly notification
    // Alert.alert('Error', 'Something went wrong. Please try again.');
  }
  
  handlePromiseRejection(reason: any, promise: Promise<any>): void {
    this.handleError(
      reason instanceof Error ? reason : new Error(String(reason)),
      { promise }
    );
  }
}

// Setup in App.tsx
if (!__DEV__) {
  const originalErrorHandler = ErrorUtils.getGlobalHandler();
  ErrorUtils.setGlobalHandler((error, isFatal) => {
    ErrorHandler.getInstance().handleError(error, { isFatal });
    originalErrorHandler?.(error, isFatal);
  });
  
  // Handle unhandled promise rejections
  const promiseRejectionTracker = require('react-native').Linking;
  // Or use a library like react-native-promise-rejection-utils
}
```

---

### Option 5: Error tracking service (Sentry, Bugsnag, etc.)

When to use:
- Production apps
- Need error analytics
- Want error reports with context

Pros:
- ✅ Production error tracking
- ✅ Error analytics
- ✅ Source maps support
- ✅ User context
- ✅ Release tracking

Cons:
- External service (cost)
- Privacy considerations
- Additional dependency

Your context: Useful for production, not needed for development

Recommendation: ⚠️ Optional - Add for production deployment

---

## ERROR HANDLING RECOMMENDATION

Recommended approach: Comprehensive error handling

1. Structured error classes - Type-safe, game-specific errors
2. Error boundaries - Prevent crashes, graceful UI
3. Try/catch in async code - Catch async errors
4. Global error handler - Catch unhandled errors
5. Error tracking service (production) - Optional, add when deploying

Implementation structure:
```typescript
// Error classes
errors/
  GameError.ts          // Base class
  ValidationError.ts
  InsufficientActionsError.ts
  ItemNotFoundError.ts

// Error handling
components/
  ErrorBoundary.tsx     // React error boundary
  ErrorFallbackScreen.tsx

// Global handler
utils/
  ErrorHandler.ts       // Centralized error handling

// Usage in services
try {
  await service.executeAction(context, actionType);
} catch (error) {
  if (error instanceof InsufficientActionsError) {
    // Show specific UI
  } else {
    ErrorHandler.getInstance().handleError(error);
  }
}
```

---

## FINAL RECOMMENDATIONS SUMMARY

### State Management: ✅ Zustand
- Best fit for your game's complexity
- Works well with library-style backend
- Minimal boilerplate, excellent performance

### Caching: ✅ Manual caching in Zustand + Repository-level cache
- Config data in Zustand store (TTL-based)
- Repository-level cache for file reads
- Skip React Query/SWR (wrong tool for library-style backend)

### Error Handling: ✅ Comprehensive approach
- Structured error classes
- Error boundaries (essential)
- Global error handler
- Error tracking service (optional, for production)

Should I create a detailed implementation document with code examples for these recommendations?

```typescript
// Would require manual memoization and splitting contexts
const GameStateContext = createContext<GameContext | null>(null);
const InventoryContext = createContext<Item[]>([]);
const StatsContext = createContext<SkillStats | null>(null);
// Multiple contexts to avoid re-renders
```

```typescript
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameStore {
  gameContext: GameContext | null;
  setGameContext: (context: GameContext) => void;
  updatePlayerState: (updates: Partial<PlayerState>) => void;
  executeAction: (actionType: ActionType) => Promise<void>;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      gameContext: null,
      setGameContext: (context) => set({ gameContext: context }),
      updatePlayerState: (updates) => set((state) => ({
        gameContext: state.gameContext ? {
          ...state.gameContext,
          playerState: { ...state.gameContext.playerState, ...updates }
        } : null
      })),
      executeAction: async (actionType) => {
        // Use your GameController here
        const controller = new GameController(/* ... */);
        const result = await controller.executeAction(
          get().gameContext!,
          actionType
        );
        set({ gameContext: result.updatedContext });
      }
    }),
    { name: 'game-storage' } // Persists to AsyncStorage
  )
);
```

```typescript
// Store structure for your game
stores/
  gameStore.ts        // Core game state (GameContext)
  inventoryStore.ts   // Inventory management
  uiStore.ts          // UI state (modals, loading, etc.)
  configStore.ts      // Game config data (cached)
```

```typescript
// In Zustand store
interface ConfigCache {
  items: Item[] | null;
  enemies: Enemy[] | null;
  quests: Quest[] | null;
  lastLoaded: { [key: string]: number };
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const useConfigStore = create<ConfigCache>((set, get) => ({
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
  }
}));
```

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
    
    if (Date.now() - entry.timestamp > this.ttl) {
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
}

// In Repository
class GameRepository {
  private cache = new CacheManager();
  
  async getItems(): Promise<Item[]> {
    const cached = this.cache.get<Item[]>('items');
    if (cached) return cached;
    
    const items = await this.loadItemsFromFile();
    this.cache.set('items', items);
    return items;
  }
}
```

```plaintext
┌─────────────────────────────────────┐
│  Zustand Store (Config Cache)       │
│  - Items, Enemies, Quests           │
│  - Cached with TTL                  │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Repository (File Cache)            │
│  - In-memory cache for file reads   │
│  - Simple Map-based cache           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  File System / AsyncStorage         │
└─────────────────────────────────────┘
```

```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallbackScreen error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

```typescript
// Base error class
abstract class GameError extends Error {
  abstract code: string;
  abstract statusCode: number;
  userMessage: string;
  
  constructor(message: string, userMessage?: string) {
    super(message);
    this.userMessage = userMessage || message;
    this.name = this.constructor.name;
  }
}

// Specific error types
class ValidationError extends GameError {
  code = 'VALIDATION_ERROR';
  statusCode = 400;
}

class InsufficientActionsError extends GameError {
  code = 'INSUFFICIENT_ACTIONS';
  statusCode = 400;
  userMessage = 'Not enough actions remaining';
}

class ItemNotFoundError extends GameError {
  code = 'ITEM_NOT_FOUND';
  statusCode = 404;
}

// Usage in service
async executeAction(context: GameContext, actionType: ActionType) {
  if (context.availableActions <= 0) {
    throw new InsufficientActionsError('No actions available');
  }
  // ...
}
```

```typescript
// Global error handler
class ErrorHandler {
  private static instance: ErrorHandler;
  
  static getInstance(): ErrorHandler {
    if (!this.instance) {
      this.instance = new ErrorHandler();
    }
    return this.instance;
  }
  
  handleError(error: Error, context?: any): void {
    // Log to console (dev)
    if (__DEV__) {
      console.error('Error:', error, context);
    }
    
    // Log to error tracking service (production)
    if (!__DEV__) {
      // Sentry.captureException(error, { extra: context });
    }
    
    // Could show user-friendly notification
    // Alert.alert('Error', 'Something went wrong. Please try again.');
  }
  
  handlePromiseRejection(reason: any, promise: Promise<any>): void {
    this.handleError(
      reason instanceof Error ? reason : new Error(String(reason)),
      { promise }
    );
  }
}

// Setup in App.tsx
if (!__DEV__) {
  const originalErrorHandler = ErrorUtils.getGlobalHandler();
  ErrorUtils.setGlobalHandler((error, isFatal) => {
    ErrorHandler.getInstance().handleError(error, { isFatal });
    originalErrorHandler?.(error, isFatal);
  });
  
  // Handle unhandled promise rejections
  const promiseRejectionTracker = require('react-native').Linking;
  // Or use a library like react-native-promise-rejection-utils
}
```

```typescript
// Error classes
errors/
  GameError.ts          // Base class
  ValidationError.ts
  InsufficientActionsError.ts
  ItemNotFoundError.ts

// Error handling
components/
  ErrorBoundary.tsx     // React error boundary
  ErrorFallbackScreen.tsx

// Global handler
utils/
  ErrorHandler.ts       // Centralized error handling

// Usage in services
try {
  await service.executeAction(context, actionType);
} catch (error) {
  if (error instanceof InsufficientActionsError) {
    // Show specific UI
  } else {
    ErrorHandler.getInstance().handleError(error);
  }
}
```

---

**User**

yes please! Based off of how we are setting up our documents, where would you recommend these architectural decisions be documented?

---

**Cursor**


Reviewing the current architecture document structure to determine where to add these sections:



Adding State Management, Caching Strategy, and Error Handling as dedicated sections in `architecture.md` (these are architectural decisions, not just considerations). Placing them after "Frontend Integration" and before "Benefits", and updating "Future Considerations" accordingly.


```markdown
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

## Future Considerations

- **Event System**: Consider event bus for cross-cutting concerns (achievements, notifications, analytics)
- **Validation Framework**: Consider Zod or Yup for runtime validation in addition to TypeScript
- **Error Tracking Service**: Integrate Sentry or similar for production error tracking and analytics
- **Offline Support**: Enhanced offline capabilities with queue for pending actions
- **State Persistence**: Consider additional persistence strategies for config data beyond memory cache


```


Added State Management, Caching Strategy, and Error Handling to `architecture.md`. These are architectural decisions, so they belong in the architecture document rather than separate files.

Here's what was added:

## Documented in `architecture.md`:

1. **State Management Section** - Zustand implementation
   - Decision rationale
   - Store structure (gameStore, configStore, uiStore)
   - Code examples for each store
   - Usage patterns in components

2. **Caching Strategy Section** - Hybrid caching approach
   - Architecture diagram
   - Why not React Query/SWR (library-style backend)
   - Zustand store caching for config data
   - Repository-level file caching
   - Cache invalidation strategies

3. **Error Handling Section** - Comprehensive error handling
   - Error handling architecture
   - Structured error classes (base class + specific errors)
   - Error boundaries implementation
   - Global error handler
   - Error fallback UI
   - Usage patterns

4. **Updated "Future Considerations"** - Removed items we've now decided on, kept only truly future items

## Why this location?

- State Management, Caching, and Error Handling are technical architecture decisions
- They belong in `architecture.md` alongside other architectural patterns
- `overview.md` links to `architecture.md` (already does this)
- Keeps all architecture in one place for easier reference
- Follows the existing document structure pattern

The document is now comprehensive and includes detailed TypeScript code examples for implementation. The sections flow logically: patterns → layers → state management → caching → error handling → benefits → future considerations.

