import type { Item, PersistentBonus, TemporaryBonus, Enemy, Quest } from './GameData';

/**
 * Skill statistics
 */
export interface SkillStats {
  attack: number;
  strength: number;
  defense: number;
  magic: number;
  ranged: number;
  prayer: number;
  agility: number;
}

/**
 * Player's persistent state
 */
export interface PlayerState {
  stats: SkillStats;
  inventory: Item[];
  gold: number;
  experience: number;
  persistentBonuses: PersistentBonus[];
}

/**
 * Current run-specific state
 */
export interface RunState {
  runId: string;
  actionsRemaining: number;
  currentEnemy?: Enemy;
  activeQuests: Quest[];
  temporaryBonuses: TemporaryBonus[];
}

/**
 * Main context object passed through all layers
 */
export interface GameContext {
  playerId: string;
  playerState: PlayerState;
  currentRun: RunState;
  availableActions: number;
}

