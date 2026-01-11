import type { PlayerState, RunState, SkillStats, GameContext } from '../types/GameContext';

/**
 * Default starting skill stats (all skills at level 1)
 */
export const DEFAULT_SKILL_STATS: SkillStats = {
  attack: 1,
  strength: 1,
  defense: 1,
  magic: 1,
  ranged: 1,
  prayer: 1,
  agility: 1,
};

/**
 * Default starting actions per run
 */
export const DEFAULT_ACTIONS_PER_RUN = 10;

/**
 * Default player ID (can be changed later for multi-player support)
 */
export const DEFAULT_PLAYER_ID = 'player-1';

/**
 * Generate a unique run ID
 */
export const generateRunId = (): string => {
  return `run-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Create default player state
 */
export const createDefaultPlayerState = (): PlayerState => {
  return {
    stats: { ...DEFAULT_SKILL_STATS },
    inventory: [],
    gold: 0,
    experience: 0,
    persistentBonuses: [],
  };
};

/**
 * Create default run state
 */
export const createDefaultRunState = (actionsRemaining: number = DEFAULT_ACTIONS_PER_RUN): RunState => {
  return {
    runId: generateRunId(),
    actionsRemaining,
    activeQuests: [],
    temporaryBonuses: [],
  };
};

/**
 * Create default game context
 */
export const createDefaultGameContext = (
  playerId: string = DEFAULT_PLAYER_ID,
  actionsRemaining: number = DEFAULT_ACTIONS_PER_RUN
): GameContext => {
  const playerState = createDefaultPlayerState();
  const currentRun = createDefaultRunState(actionsRemaining);

  return {
    playerId,
    playerState,
    currentRun,
    availableActions: actionsRemaining,
  };
};

