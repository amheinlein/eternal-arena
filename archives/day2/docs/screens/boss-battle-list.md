# Boss Battle List Screen

**Purpose**: Browse and select bosses to fight

## Key Components

- **Boss List**: Scrollable list of available bosses
  - Each boss entry displays:
    - Boss name
    - Boss description
    - Combat level (prominently displayed)
    - Boss icon/sprite (optional preview)
    - Difficulty rating/indicator
    - Recommended player level/stats
    - Reward preview (optional)
  - "Fight Boss" button for each boss
- **Boss Categories/Tiers** (if applicable):
  - Organize bosses by tier or difficulty
  - Show progression through boss tiers
- **Filter/Sort Options**:
  - Filter by tier/difficulty
  - Sort by level
  - Show only unlocked bosses
- **Player Stats Preview**: Quick view of player's combat level/stats for comparison
- **Lock Status**: Visual indicator for locked vs. unlocked bosses

## Flow

1. View list of available bosses
2. Browse boss descriptions and difficulty
3. Select boss to fight
4. Navigate to Boss Fight Result Screen with selected boss

## Navigation

- Tap "Fight Boss" button → Navigate to Boss Fight Result Screen (with selected boss)
- Back → Return to Main Menu

## Special States

- **Locked Bosses**: Show locked bosses with unlock requirements (e.g., "Defeat 5 bosses in Tier 1")
- **Recommended Level Warning**: Optionally highlight if player is underleveled for a boss
- **No Bosses Available**: Show message if no bosses are unlocked/available

