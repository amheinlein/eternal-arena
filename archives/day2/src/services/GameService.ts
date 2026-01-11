import type { GameContext } from '../types/GameContext';
import type { AvailableAction, ActionStrategy, ActionResult, ActionParams } from '../types/Actions';
import { GameRepository } from '../repositories/GameRepository';

/**
 * Main game service - business logic layer
 * Handles business logic and coordinates between strategies and repositories
 */
export class GameService {
  constructor(
    private gameRepository: GameRepository
  ) {}
  
  /**
   * Get available actions for the context
   */
  async getActions(context: GameContext): Promise<AvailableAction[]> {
    // TODO: Implement business logic to determine which actions are available
    // const allActions = await this.gameRepository.getAvailableActions(context);
    // return allActions.filter(action => this.isActionAvailable(context, action));
    return [];
  }
  
  /**
   * Execute an action using the provided strategy
   */
  async executeAction(
    context: GameContext,
    strategy: ActionStrategy,
    actionParams?: ActionParams
  ): Promise<ActionResult> {
    // TODO: Implement validation and execution logic
    // if (!strategy.canExecute(context)) {
    //   return { success: false, error: 'Action cannot be executed', updatedContext: context };
    // }
    // const validation = strategy.validate(context, actionParams);
    // if (!validation.valid) {
    //   return { success: false, error: validation.error, updatedContext: context };
    // }
    // const result = await strategy.execute(context, actionParams);
    // if (result.success) {
    //   result.updatedContext = this.applyActionCost(result.updatedContext);
    //   await this.gameRepository.saveGameState(result.updatedContext);
    // }
    // return result;
    
    return {
      success: false,
      error: 'Action execution not yet implemented',
      updatedContext: context
    };
  }
  
  /**
   * Apply action cost to context
   */
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
  
  /**
   * Check if action is available based on business rules
   */
  private isActionAvailable(context: GameContext, action: AvailableAction): boolean {
    // TODO: Implement business rules for action availability
    return context.availableActions > 0;
  }
}

