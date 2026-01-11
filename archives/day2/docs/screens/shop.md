# Shop Screen

**Purpose**: Purchase items and equipment

## Key Components

- **Shop Inventory**: Grid/list of available items
  - Item name, icon, price
  - Item stats/description
  - Purchase button (disabled if insufficient gold)
- **Player Gold Display**: Current gold amount
- **Filter/Sort Options**:
  - Filter by item type (weapon, armor, consumable, etc.)
  - Sort by price, stats, name
- **Item Details Panel**: Expanded view when item tapped
  - Full stats comparison
  - "Purchase" button
- **Player Inventory Preview**: Quick view of currently equipped items

## Flow

1. Browse available items
2. Tap item to view details
3. Confirm purchase
4. Item added to inventory
5. Gold deducted
6. Action consumed (if shopping costs an action)

## Navigation

- Purchase → Stay on Shop Screen (update inventory)
- Back → Return to Main Menu

