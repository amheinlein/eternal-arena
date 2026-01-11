import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { GameContext, PlayerState, RunState } from '../types/GameContext';
import type { ActionType, ActionParams } from '../types/Actions';
import { GameInitializationService } from '../services/GameInitializationService';

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
  
  // Run management
  initializeNewRun: (playerId?: string) => void;
  startNewRun: () => void;
  endRun: () => void;
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
          // TODO: Implement when GameController is available
          // const controller = new GameController(/* dependencies */);
          // const result = await controller.executeAction(gameContext, actionType, params);
          
          // Stub implementation
          set({ error: 'Action execution not yet implemented', isLoading: false });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error', isLoading: false });
        }
      },
      
      resetGame: () => set({ gameContext: null, error: null }),
      
      loadGame: async (playerId: string) => {
        set({ isLoading: true });
        try {
          // TODO: Implement when GameRepository is available
          // const repository = new GameRepository();
          // const playerState = await repository.loadPlayerState(playerId);
          // Create initial context
          
          // Stub implementation
          set({ error: 'Load game not yet implemented', isLoading: false });
        } catch (error) {
          set({ error: 'Failed to load game', isLoading: false });
        }
      },
      
      initializeNewRun: (playerId: string = 'player-1') => {
        const initService = new GameInitializationService();
        const newContext = initService.initializeNewGame(playerId);
        set({ gameContext: newContext, error: null });
      },
      
      startNewRun: () => {
        const { gameContext } = get();
        if (!gameContext) {
          set({ error: 'No game context available' });
          return;
        }
        
        const initService = new GameInitializationService();
        const newRun = initService.initializeNewRun(
          gameContext.playerState,
          gameContext.availableActions
        );
        
        set({
          gameContext: {
            ...gameContext,
            currentRun: newRun,
            availableActions: newRun.actionsRemaining,
          },
          error: null,
        });
      },
      
      endRun: () => {
        const { gameContext } = get();
        if (!gameContext) {
          set({ error: 'No game context available' });
          return;
        }
        
        // TODO: Calculate persistent bonuses when system is implemented
        // For now, just mark run as ended (actionsRemaining = 0)
        set({
          gameContext: {
            ...gameContext,
            currentRun: {
              ...gameContext.currentRun,
              actionsRemaining: 0,
            },
            availableActions: 0,
          },
          error: null,
        });
      }
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ gameContext: state.gameContext }), // Only persist gameContext
    }
  )
);

