import type { GameContext, PlayerState, RunState } from '../types/GameContext';
import {
  createDefaultGameContext,
  createDefaultPlayerState,
  createDefaultRunState,
  generateRunId,
  DEFAULT_ACTIONS_PER_RUN,
} from '../utils/gameDefaults';

/**
 * Service for initializing game state
 */
export class GameInitializationService {
  /**
   * Initialize a new game with default state
   */
  initializeNewGame(playerId: string = 'player-1'): GameContext {
    return createDefaultGameContext(playerId, DEFAULT_ACTIONS_PER_RUN);
  }

  /**
   * Initialize a new run for an existing player
   * Applies persistent bonuses to the new run
   */
  initializeNewRun(
    existingPlayerState: PlayerState,
    actionsRemaining: number = DEFAULT_ACTIONS_PER_RUN
  ): RunState {
    const newRun = createDefaultRunState(actionsRemaining);
    
    // Apply persistent bonuses to the run
    // This will be expanded when persistent bonuses are fully implemented
    if (existingPlayerState.persistentBonuses.length > 0) {
      // TODO: Apply persistent bonuses to temporaryBonuses or modify actionsRemaining
      // For now, just create the run with default state
    }

    return newRun;
  }

  /**
   * Create a new player state (for first-time players)
   */
  createNewPlayerState(): PlayerState {
    return createDefaultPlayerState();
  }

  /**
   * Reset player to default state (for testing or new game)
   */
  resetPlayerState(playerId: string): GameContext {
    return this.initializeNewGame(playerId);
  }
}

