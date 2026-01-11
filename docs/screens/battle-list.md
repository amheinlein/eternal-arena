# Battle List Screen

**Purpose**: Browse and select standard enemies to fight

## Key Components

- **Enemy List**: Scrollable list of available enemies
  - Each enemy entry displays:
    - Enemy name
    - Enemy description
    - Combat level (prominently displayed)
    - Enemy icon/sprite (optional preview)
    - Difficulty indicator (if applicable)
  - "Battle" button for each enemy
- **Filter/Sort Options**:
  - Filter by level range
  - Sort by level (low to high, high to low)
  - Sort by name
- **Player Stats Preview**: Quick view of player's combat level/stats for comparison
- **Search Bar** (optional): Search enemies by name

## Flow

1. View list of available enemies
2. Browse and compare enemy levels
3. Select enemy to battle
4. Navigate to Battle Result Screen with selected enemy

## Navigation

- Tap "Battle" button → Navigate to Battle Result Screen (with selected enemy)
- Back → Return to Main Menu

## Special States

- **No Enemies Available**: Show message if no enemies are unlocked/available
- **Locked Enemies**: Show locked enemies with unlock requirements (grayed out)

