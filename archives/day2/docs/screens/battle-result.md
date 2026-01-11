# Battle Result Screen

**Purpose**: Display the automated combat result after a battle

## Key Components

- **Battle Outcome**: 
  - Victory or Defeat indicator
  - Enemy name and level
  - Enemy sprite/image
- **Combat Summary**:
  - Number of rounds fought
  - Total damage dealt to enemy
  - Total damage taken
  - Player's health remaining (or health lost)
- **Combat Log Summary**: Key events from the battle
  - Important hits, misses, critical strikes
  - Special abilities used
  - Round-by-round highlights (condensed)
- **Rewards Display** (if victorious):
  - Experience gained
  - Gold earned
  - Items dropped (if any)
  - Skill experience gained (if applicable)
- **Action Status**: Confirmation that 1 action was consumed

## Flow

1. Player selects enemy from Battle List Screen and clicks "Fight"
2. Action is immediately consumed (1 action deducted)
3. Combat is calculated automatically "behind the scenes"
4. Battle Result Screen displays the outcome
5. On victory: Rewards are automatically applied, player can continue
6. On defeat: Player sees defeat message, may lose run progress

## Navigation

- "Continue" button → Return to Battle List Screen (or Main Menu)
- "View Details" button (optional) → Expand to show full combat log

## Note

Combat is fully automated. The player does not make decisions during combat - they only see the result. See [combat.md](../combat.md) for combat system details.

