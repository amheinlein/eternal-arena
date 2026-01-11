import type { GameContext } from '../types/GameContext';
import type { AvailableAction, ActionResult, ActionType, ActionParams } from '../types/Actions';
import { GameService } from '../services/GameService';
import { ActionStrategyFactory } from '../strategies/ActionStrategyFactory';
import { GameRepository } from '../repositories/GameRepository';

/**
 * Main game controller - public API for frontend
 * Validates context, determines the appropriate strategy, and delegates to services
 */
export class GameController {
  private gameService: GameService;
  private strategyFactory: ActionStrategyFactory;
  
  constructor(
    gameService?: GameService,
    strategyFactory?: ActionStrategyFactory
  ) {
    // TODO: Initialize with proper dependencies when available
    // For now, these will need to be passed in or created with dependencies
    const repository = new GameRepository();
    this.gameService = gameService || new GameService(repository);
    this.strategyFactory = strategyFactory || new ActionStrategyFactory(repository);
  }
  
  /**
   * Get available actions for the current context
   */
  async getActions(context: GameContext): Promise<AvailableAction[]> {
    this.validateContext(context);
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
    this.validateContext(context);
    
    const strategy = this.strategyFactory.create(actionType);
    return this.gameService.executeAction(context, strategy, actionParams);
  }
  
  /**
   * Validate context
   */
  private validateContext(context: GameContext): void {
    if (!context.playerId) {
      throw new Error('Invalid context: playerId required');
    }
    // TODO: Additional validation as needed
  }
}

