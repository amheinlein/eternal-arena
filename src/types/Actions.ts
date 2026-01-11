import type { GameContext } from './GameContext';
import type { SkillStats } from './GameContext';

/**
 * Action types enum
 */
export enum ActionType {
  BATTLE = 'battle',
  BOSS = 'boss',
  SHOP = 'shop',
  QUEST = 'quest',
  MAGIC = 'magic',
}

/**
 * Rewards from executing an action
 */
export interface Rewards {
  experience?: number;
  gold?: number;
  items?: Item[];
  skillGains?: Partial<SkillStats>;
}

/**
 * Result of executing an action
 */
export interface ActionResult {
  success: boolean;
  updatedContext: GameContext;
  rewards?: Rewards;
  message?: string;
  error?: string;
}

/**
 * Base interface for action parameters
 */
export interface ActionParams {
  // Action-specific parameters will extend this interface
}

/**
 * Base interface for all action strategies
 */
export interface ActionStrategy {
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
 * Available action for selection
 */
export interface AvailableAction {
  type: ActionType;
  name: string;
  description?: string;
  enabled: boolean;
}

// Import types
import type { Item } from './GameData';
import type { ValidationResult } from './Validation';

