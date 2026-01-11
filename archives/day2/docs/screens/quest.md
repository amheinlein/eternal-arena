# Quest Screen

**Purpose**: View available quests, track progress, and claim rewards

## Key Components

- **Active Quests List**: 
  - Quest name, description
  - Progress indicator (e.g., "3/5 enemies defeated")
  - Reward preview
  - "Abandon" button (if allowed)
- **Available Quests List**:
  - Quest name, description
  - Requirements (level, stats, etc.)
  - Reward preview
  - "Accept" button
- **Completed Quests**: 
  - History of completed quests
  - Rewards received
- **Quest Details Panel**: Expanded view when quest tapped
  - Full description
  - Detailed objectives
  - Full reward breakdown
  - Accept/Abandon/Claim buttons

## Flow

1. View available quests
2. Accept quest (consumes action)
3. Quest becomes active
4. Complete objectives through gameplay
5. Return to Quest Screen to claim rewards
6. Rewards applied, quest marked complete

## Navigation

- Accept Quest → Return to Main Menu (action consumed)
- Claim Rewards → Return to Main Menu
- Back → Return to Main Menu

