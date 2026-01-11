# Boss Fight Result Screen

**Purpose**: Display the automated combat result after a boss battle

## Key Components

- **Boss Battle Outcome**: 
  - Victory or Defeat indicator
  - Boss name, level, and difficulty rating
  - Boss sprite/image (larger display)
- **Boss Combat Summary**:
  - Number of rounds fought
  - Total damage dealt to boss
  - Total damage taken
  - Player's health remaining (or health lost)
  - Boss phases/mechanics encountered (if applicable)
- **Combat Log Summary**: Key events from the boss battle
  - Important hits, misses, critical strikes
  - Boss special abilities used
  - Player special abilities used
  - Round-by-round highlights (condensed)
- **Enhanced Rewards Display** (if victorious):
  - Experience gained (typically higher than standard battles)
  - Gold earned (typically higher than standard battles)
  - Rare items dropped (if any)
  - Skill experience gained (if applicable)
  - Unlocks achieved (if any)
- **Action Status**: Confirmation that 1 action was consumed

## Flow

1. Player selects boss from Boss Battle List Screen and clicks "Fight Boss"
2. Action is immediately consumed (1 action deducted)
3. Boss combat is calculated automatically "behind the scenes"
4. Boss Fight Result Screen displays the outcome
5. On victory: Enhanced rewards are automatically applied, unlocks may be granted
6. On defeat: Player sees defeat message, may have different consequences than regular battle

## Navigation

- "Continue" button → Return to Boss Battle List Screen (or Main Menu)
- "View Details" button (optional) → Expand to show full combat log

## Note

Boss combat is fully automated, same as standard battles. The player does not make decisions during combat - they only see the result. See [combat.md](../combat.md) for combat system details.

