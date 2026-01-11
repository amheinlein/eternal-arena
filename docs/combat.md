# Combat System - Eternal Arena

## Overview

Combat in Eternal Arena is **fully automated**. When a player initiates a battle, the entire combat sequence is calculated instantly based on the player's stats, equipment, and the enemy's stats. The player does not make decisions during combat - they only see the result.

## Combat Flow

### 1. Battle Initiation

When a player selects an enemy and clicks "Fight":
1. **Action Consumption**: One action is immediately deducted from the player's remaining actions
2. **Combat Calculation**: The entire battle is calculated automatically "behind the scenes"
3. **Result Display**: The Battle Result Screen displays the outcome

### 2. Combat Calculation (Automated)

The combat system simulates a series of rounds where both the player and enemy take turns performing battle-related actions. The calculation considers:

- **Player Stats**: All seven skills (Attack, Strength, Defense, Magic, Ranged, Prayer, Agility)
- **Player Equipment**: Currently equipped weapons, armor, and accessories
- **Enemy Stats**: Enemy's combat level, health, attack, defense, and special abilities
- **Combat Mechanics**: Hit chance, damage calculation, special effects, etc.

The system continues calculating rounds until either:
- The player is defeated (health reaches 0)
- The enemy is defeated (health reaches 0)

### 3. Battle Result

After calculation, the result includes:
- **Victory/Defeat**: Whether the player won or lost
- **Combat Summary**: Key events that occurred during the battle
- **Rewards**: Experience, gold, and items gained (if victorious)
- **Damage Taken**: Health lost during combat
- **Rounds Fought**: Number of combat rounds that occurred

## Combat Mechanics (High-Level)

### Turn-Based Rounds

Combat proceeds in rounds where:
- Each round, both player and enemy have a chance to act
- Actions are determined by stats, equipment, and combat rules
- The order of actions may be influenced by Agility or other factors

### Skill Influence

The seven core skills influence combat in various ways:
- **Attack**: Determines hit chance against enemies
- **Strength**: Influences damage dealt
- **Defense**: Reduces enemy accuracy and damage taken
- **Magic**: May influence spell usage or magical effects
- **Ranged**: May influence ranged weapon effectiveness
- **Prayer**: Provides general combat bonuses
- **Agility**: May influence action order, multi-hit chances, and evade chance

*Note: Detailed skill mechanics will be defined in [skills.md](skills.md)*

### Equipment Impact

Equipped items modify the player's combat effectiveness:
- Weapons increase damage and may have special properties
- Armor increases defense and may provide resistances
- Accessories provide various bonuses

## Battle Types

### Standard Battles

Regular enemy encounters that follow the standard combat flow. These are the most common combat encounters.

### Boss Battles

Boss fights follow the same automated combat system but with:
- **Higher Difficulty**: Bosses have significantly higher stats
- **Special Mechanics**: Bosses may have unique abilities or phases
- **Enhanced Rewards**: Better rewards for victory
- **Progression Gates**: Bosses may unlock new content when defeated

## Combat Result Data

The combat system produces a `BattleResult` object containing:

```typescript
interface BattleResult {
  victory: boolean;
  rounds: number;
  playerHealthLost: number;
  enemyHealthLost: number;
  combatLog: CombatEvent[]; // Summary of key events
  rewards: Rewards; // Experience, gold, items
  damageDealt: number;
  damageTaken: number;
}

interface CombatEvent {
  round: number;
  actor: 'player' | 'enemy';
  action: string; // e.g., "Attack", "Magic Spell", "Special Ability"
  result: string; // e.g., "Hit for 25 damage", "Missed", "Critical Hit"
  damage?: number;
}
```

## Player Experience

From the player's perspective:

1. **Select Enemy**: Choose an enemy from the Battle List Screen
2. **Click "Fight"**: Action is consumed, battle is calculated
3. **View Result**: Battle Result Screen shows what happened
4. **Receive Rewards**: If victorious, rewards are automatically applied
5. **Continue**: Return to Battle List or Main Menu

The player never sees the individual combat rounds happening - only the final result and summary.

## Future Considerations

While the combat system is automated, future enhancements could include:
- **Combat Replay**: Option to view a detailed round-by-round breakdown
- **Combat Speed**: Option to see combat calculation in real-time (for visual appeal)
- **Tactical Preparation**: Pre-battle equipment/spell selection (before action consumption)
- **Combat Animations**: Visual representation of the automated combat (purely cosmetic)

## Integration with Architecture

The combat system integrates with the game architecture through:
- **BattleActionStrategy**: Handles battle action execution
- **CombatService**: Performs the automated combat calculations
- **GameRepository**: Retrieves enemy data and updates player state

See [architecture.md](architecture.md) for technical implementation details.

