import type { Rewards } from './Actions';
import type { GameContext } from './GameContext';

/**
 * Battle parameters
 */
export interface BattleParams {
  enemyId: string;
  // Additional battle-specific parameters will be defined as needed
}

/**
 * Battle result
 */
export interface BattleResult {
  victory: boolean;
  rewards?: Rewards;
  damageDealt?: number;
  damageTaken?: number;
  // Additional battle result properties will be defined as needed
}

