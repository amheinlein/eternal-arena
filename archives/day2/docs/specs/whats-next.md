# What's Next - Day 3

## Current State Summary

### What Has Been Accomplished

1. **Main Menu System Complete**: Fully functional Main Menu with navigation, action tracking, run status displays, and state management
2. **Infrastructure in Place**: 
   - Toast notification system for user feedback
   - Game state initialization services
   - Zustand stores with run management
   - Reusable UI components (ActionCounter, ActionButton, QuickAccessButton, etc.)
3. **Navigation Structure**: All placeholder screens created with consistent "Coming Soon" pattern
4. **Placeholder/Feedback Policy**: Established and documented in `.cursorrules` and `architecture.md`
5. **Placeholder Backlog**: Comprehensive tracking system in place

### User's Vision for Day 3

**Next Steps Priority:**
1. **Stats Screen Implementation**: Build functional stats screen showing character statistics
2. **Inventory Screen Implementation**: Build functional inventory screen with equipment management
3. **Default Weapon System**: Create a default weapon that can be equipped/unequipped
4. **Combat Snapshot Design**: Design how stats and inventory contribute to combat calculations
5. **First Enemy Design**: Design and implement the first enemy
6. **First Battle**: See a battle in action

## Recommended Implementation Order

### Phase 1: Item System Foundation

**Goal**: Create the foundational item and equipment system

1. **Item Type Definitions**:
   - Extend `Item` interface in `src/types/GameData.ts` with:
     - Equipment slots (weapon, armor, accessory)
     - Item stats (Attack, Strength, Defense bonuses, etc.)
     - Item properties (equippable, consumable, quest item)
   - Create `Equipment` type extending `Item` with slot information
   
2. **Default Weapon Creation**:
   - Create a default starter weapon (e.g., "Wooden Sword")
   - Add to player's inventory on game start
   - Define weapon stats (minimal bonuses to start)

3. **Equipment System**:
   - Add `equippedItems` to `PlayerState` (weapon slot initially)
   - Create equipment service/utilities:
     - `equipItem(itemId: string)`
     - `unequipItem(slot: EquipmentSlot)`
     - `getEquippedStats()` - Calculate combined stats from equipped items

### Phase 2: Stats Screen Implementation

**Goal**: Display comprehensive character statistics

**Components Needed**:
- Skill stats display with all seven skills (Attack, Strength, Defense, Magic, Ranged, Prayer, Agility)
- Character summary (total level, experience, gold, runs completed)
- Equipment stats summary (combined bonuses from equipped items)
- Base stats vs. Total stats (base + equipment bonuses)

**Implementation**:
- Replace placeholder `app/(tabs)/stats.tsx` with functional screen
- Use components from Main Menu as needed (RunStatusDisplay, PersistentStatsPreview)
- Create new components:
  - `SkillStatRow.tsx` - Individual skill display
  - `EquipmentSummary.tsx` - Shows equipped items and their bonuses
  - `StatComparison.tsx` - Shows base vs. total stats

### Phase 3: Inventory Screen Implementation

**Goal**: Functional inventory management with equip/unequip

**Components Needed**:
- Equipment slots display (at least weapon slot to start)
- Inventory grid/list showing all items
- Item details panel (stats, equip/unequip buttons)
- Visual distinction between equipped and unequipped items

**Implementation**:
- Replace placeholder `app/(tabs)/inventory.tsx` with functional screen
- Create components:
  - `EquipmentSlot.tsx` - Shows equipped item in slot
  - `InventoryItem.tsx` - Individual item in inventory
  - `ItemDetailPanel.tsx` - Detailed item view with equip/unequip
- Add inventory management to `gameStore`:
  - `equipItem(itemId: string)`
  - `unequipItem(slot: EquipmentSlot)`

### Phase 4: Combat Snapshot Design

**Goal**: Design how stats and inventory combine for combat calculations

**Key Considerations**:
- Base stats from `PlayerState.stats` (SkillStats)
- Equipment bonuses from equipped items
- Temporary bonuses from run state
- Calculation of effective combat stats:
  - Effective Attack = Base Attack + Weapon Attack Bonus
  - Effective Strength = Base Strength + Weapon Strength Bonus
  - Effective Defense = Base Defense + Armor Defense Bonus
  - etc.

**Implementation**:
- Create `CombatSnapshot` type/interface:
  ```typescript
  interface CombatSnapshot {
    effectiveStats: SkillStats; // Base + equipment + bonuses
    equipment: EquippedItems;
    temporaryBonuses: TemporaryBonus[];
    // Any other combat-relevant data
  }
  ```
- Create service/utility: `calculateCombatSnapshot(context: GameContext): CombatSnapshot`
- This will be used by combat system to determine player's combat effectiveness

**Documentation**:
- Update `docs/combat.md` with combat snapshot details
- Document how stats combine (base + equipment + bonuses)

### Phase 5: First Enemy Design & Implementation

**Goal**: Create the first enemy and see a battle in action

**Enemy Design**:
- Simple starter enemy (e.g., "Goblin" or "Training Dummy")
- Basic stats:
  - Level 1
  - Low health, attack, defense
  - Standard combat mechanics
- Define in data structure (JSON config or TypeScript constants)

**Implementation**:
- Create enemy data structure (extend `Enemy` type if needed)
- Add enemy repository/service to load enemy data
- Update Battle List screen to show first enemy
- **Note**: Full combat system not needed yet - can show battle result placeholder with enemy defeat for now

### Phase 6: First Battle (Basic)

**Goal**: See a battle execute (even if simplified)

**Minimal Viable Battle**:
- Player selects enemy from Battle List
- Battle is initiated (action consumed)
- Simple combat calculation:
  - Player effective stats (from CombatSnapshot)
  - Enemy stats
  - Simple victory calculation (e.g., if player Attack > enemy Defense, victory)
- Show Battle Result screen with:
  - Victory/Defeat
  - Basic rewards (experience, gold)
- Update player state with rewards

**Future Enhancement**: Full automated combat calculation can come later, but this provides the feedback loop

## Technical Tasks

### Data Structure Updates

1. **Extend `Item` type** in `src/types/GameData.ts`:
   - Add equipment properties
   - Add stat bonuses
   - Add slot type

2. **Update `PlayerState`** in `src/types/GameContext.ts`:
   - Add `equippedItems: Record<EquipmentSlot, Item | null>`

3. **Create `EquipmentSlot` enum/type**:
   - `WEAPON`, `HEAD`, `BODY`, `LEGS`, `ACCESSORY` (can start with just WEAPON)

4. **Create `CombatSnapshot` interface**:
   - Effective stats calculation
   - Equipment summary

### Services to Create

1. **EquipmentService**:
   - `equipItem(context: GameContext, itemId: string): GameContext`
   - `unequipItem(context: GameContext, slot: EquipmentSlot): GameContext`
   - `getEquippedStats(context: GameContext): SkillStats`

2. **CombatSnapshotService**:
   - `calculateCombatSnapshot(context: GameContext): CombatSnapshot`

3. **EnemyService** (basic):
   - `getEnemy(enemyId: string): Enemy`
   - `getAvailableEnemies(): Enemy[]`

### Components to Create

1. **Stats Screen Components**:
   - `SkillStatRow.tsx`
   - `EquipmentSummary.tsx`
   - `StatComparison.tsx`

2. **Inventory Screen Components**:
   - `EquipmentSlot.tsx`
   - `InventoryItem.tsx`
   - `ItemDetailPanel.tsx`

### Screens to Update

1. `app/(tabs)/stats.tsx` - Replace placeholder with full implementation
2. `app/(tabs)/inventory.tsx` - Replace placeholder with full implementation
3. `app/(tabs)/battle-list.tsx` - Add first enemy display (can still be placeholder, but show enemy)
4. `app/(tabs)/battle-result.tsx` - Create basic result screen (if doesn't exist)

## Dependencies & Considerations

- **Item System** must be designed before Stats/Inventory screens
- **Equipment System** must work before Combat Snapshot
- **Combat Snapshot** design needed before first battle
- **First Enemy** can be very simple - just needs basic stats

## Success Criteria for Day 3

- [ ] Stats screen shows all character stats including equipment bonuses
- [ ] Inventory screen allows equip/unequip of default weapon
- [ ] Default weapon visible in inventory and can be equipped
- [ ] Combat snapshot calculation shows how stats combine
- [ ] First enemy designed and visible in Battle List
- [ ] Basic battle can be initiated and shows result (even if simplified)

## Notes

- Focus on getting the feedback loop working: equip weapon → see stats change → see battle result
- Don't need full combat system yet - simple victory calculation is enough to see it working
- Design should be extensible for future equipment slots and more complex combat
- Combat snapshot design is critical - it will be the foundation for all combat calculations

