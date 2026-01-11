# Screen Design - Eternal Arena

A lean entry point to the screen design documentation. Each section provides a brief summary with links to detailed screen documents.

## Screen Overview

Eternal Arena follows a hub-and-spoke navigation model where the **Main Menu** serves as the central hub, with specialized screens for different game activities. All screens should display the current run's remaining actions prominently.

## Core Screens

### Main Menu

Central navigation hub and action selection screen with action buttons, quick access to inventory/stats/settings, and run status display. See [screens/main-menu.md](screens/main-menu.md) for detailed components and navigation.

### Battle List Screen

Browse and select standard enemies to fight. Displays enemy name, description, and combat level with filter/sort options. See [screens/battle-list.md](screens/battle-list.md) for enemy selection mechanics.

### Boss Battle List Screen

Browse and select bosses to fight. Shows boss information, difficulty ratings, and recommended levels. See [screens/boss-battle-list.md](screens/boss-battle-list.md) for boss selection mechanics.

### Battle Result Screen

Displays the automated combat result after a standard battle. Shows victory/defeat, combat summary, and rewards. See [screens/battle-result.md](screens/battle-result.md) for result display details.

### Boss Fight Result Screen

Displays the automated combat result after a boss battle. Enhanced rewards and boss-specific mechanics shown. See [screens/boss-fight-result.md](screens/boss-fight-result.md) for boss result details.

### Shop Screen

Purchase items and equipment. Browse shop inventory, view item details, and manage purchases. See [screens/shop.md](screens/shop.md) for shopping mechanics.

### Inventory Screen

View and manage player's items and equipment. Equip/unequip items, use consumables, and organize inventory. See [screens/inventory.md](screens/inventory.md) for inventory management.

### Quest Screen

View available quests, track progress, and claim rewards. Accept quests, monitor active quests, and view completed quest history. See [screens/quest.md](screens/quest.md) for quest system details.

### Magic Screen

Cast spells for combat and non-combat purposes. Browse available spells by category and cast them. See [screens/magic.md](screens/magic.md) for spell casting mechanics.

### Stats/Character Screen

View detailed character statistics and progression. Display all seven skills, equipment stats, and persistent bonuses. See [screens/stats.md](screens/stats.md) for character information display.

### Settings Screen

Configure game settings and preferences. Adjust audio, display, gameplay, and account/data settings. See [screens/settings.md](screens/settings.md) for configuration options.

### Run End/Progression Screen

Display results when actions are exhausted and show persistent bonuses. Summarize run achievements and earned bonuses. See [screens/run-end.md](screens/run-end.md) for progression details.

### Run Start Screen (Optional)

Initialize a new run with persistent bonuses applied. Show starting conditions and apply bonuses. See [screens/run-start.md](screens/run-start.md) for run initialization.

## Navigation Flow

```
Main Menu (Hub)
├── Battle List Screen → Battle Result Screen
├── Boss Battle List Screen → Boss Fight Result Screen
├── Shop Screen
├── Quest Screen
├── Magic Screen
├── Inventory Screen
├── Stats Screen
├── Settings Screen
└── Run End Screen → Run Start Screen → Main Menu
```

## Common UI Elements

All screens should include:

1. **Action Counter**: Always visible (except on Run End Screen)
   - Format: "Actions: X/Y" or "Actions Remaining: X"
   - Color coding: Green (plenty), Yellow (few left), Red (last action)

2. **Header Bar**:
   - Screen title
   - Back button (if not main menu)
   - Gold display
   - Experience/Level display

3. **Navigation Consistency**:
   - Back button always returns to previous screen
   - Main Menu accessible from most screens
   - Clear visual hierarchy

4. **Loading States**:
   - Show loading indicators during data fetching
   - Smooth transitions between screens

5. **Error Handling**:
   - Error messages displayed clearly
   - Retry options where applicable

## Screen States

Each screen should handle these states:

- **Loading**: Initial data fetch
- **Empty**: No data available (e.g., empty inventory)
- **Error**: Failed to load data
- **Success**: Normal display state
- **Action Disabled**: When actions are exhausted, disable action buttons

## Responsive Design Considerations

- **Mobile**: Optimize for touch interactions, vertical scrolling
- **Tablet**: Utilize larger screen space, consider side-by-side layouts
- **Web**: Mouse/keyboard support, larger viewport optimizations

## Accessibility

- Screen reader support
- High contrast mode
- Adjustable text sizes
- Clear focus indicators
- Keyboard navigation support (web)
