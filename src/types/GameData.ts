/**
 * Placeholder types for game data entities
 * These will be fully defined as the game design evolves
 */

export interface Item {
  id: string;
  name: string;
  description?: string;
  // Additional properties will be defined as needed
}

export interface Enemy {
  id: string;
  name: string;
  level?: number;
  // Additional properties will be defined as needed
}

export interface Quest {
  id: string;
  name: string;
  description?: string;
  // Additional properties will be defined as needed
}

export interface Spell {
  id: string;
  name: string;
  description?: string;
  // Additional properties will be defined as needed
}

export interface PersistentBonus {
  id: string;
  type: string;
  // Additional properties will be defined as needed
}

export interface TemporaryBonus {
  id: string;
  type: string;
  // Additional properties will be defined as needed
}

