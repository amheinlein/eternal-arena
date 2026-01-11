import { create } from 'zustand';
import type { Item, Enemy, Quest } from '../types/GameData';

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
    
    // TODO: Implement when GameRepository is available
    // const repository = new GameRepository();
    // const loaded = await repository.loadItems();
    
    // Stub implementation
    const loaded: Item[] = [];
    set({ items: loaded, lastLoaded: { ...lastLoaded, items: now } });
    return loaded;
  },
  
  getEnemies: async () => {
    const { enemies, lastLoaded } = get();
    const now = Date.now();
    
    if (enemies && (now - (lastLoaded.enemies || 0)) < CACHE_TTL) {
      return enemies;
    }
    
    // TODO: Implement when GameRepository is available
    // const repository = new GameRepository();
    // const loaded = await repository.loadEnemies();
    
    // Stub implementation
    const loaded: Enemy[] = [];
    set({ enemies: loaded, lastLoaded: { ...lastLoaded, enemies: now } });
    return loaded;
  },
  
  getQuests: async () => {
    const { quests, lastLoaded } = get();
    const now = Date.now();
    
    if (quests && (now - (lastLoaded.quests || 0)) < CACHE_TTL) {
      return quests;
    }
    
    // TODO: Implement when GameRepository is available
    // const repository = new GameRepository();
    // const loaded = await repository.loadQuests();
    
    // Stub implementation
    const loaded: Quest[] = [];
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

