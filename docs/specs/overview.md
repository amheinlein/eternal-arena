# Eternal Arena - Design Overview

A lean entry point to the game design documentation. Each section provides a brief summary with links to detailed design documents.

## Game Concept

An action-based arena RPG inspired by ArenaScape and idle/incremental games like Inflation RPG, where players manage limited actions per run to gain experience, gold, and items, then receive persistent bonuses for subsequent runs. See [core-loop.md](core-loop.md) and [progression.md](progression.md) for details.

## Core Loop

Players start each run with a limited number of actions, choose from various activities (battle, boss fights, shopping, quests, magic), gain rewards, and when actions are exhausted receive persistent bonuses for future runs. See [core-loop.md](core-loop.md) for detailed mechanics.

## Skills

Seven core skills define character capabilities: Attack (to-hit chance), Strength (damage), Defense (reduces enemy accuracy), Magic (spellcasting), Ranged (bow/arrow damage), Prayer (general bonuses), and Agility (multi-hit and evade chance). See [skills.md](skills.md) for detailed definitions and interactions.

## Combat

Players can battle standard enemies and bosses using skill-based combat mechanics influenced by Attack, Strength, Defense, and other skills. See [combat.md](combat.md) for battle flow, enemy mechanics, and combat calculations.

## Items & Equipment

Players can shop for and acquire items that enhance their character's capabilities throughout runs. See [items.md](items.md) for the item system, shops, equipment, and inventory management.

## Quests

Players can undertake quests as one of their available actions to receive rewards and progress. See [quests.md](quests.md) for quest types, objectives, and reward structures.

## Magic

Players can use magic spells for both combat and non-combat purposes, with effectiveness determined by the Magic skill. See [magic.md](magic.md) for spell systems, types, and mechanics.

## Progression

When actions are exhausted, players receive persistent bonuses that carry over to future runs, creating meta-progression between sessions. See [progression.md](progression.md) for persistent bonuses, unlocks, and progression mechanics.

## Technical Architecture

React Native/TypeScript monorepo with layered architecture (Controller → Service → Repository) using ContextObject, Strategy, and Factory patterns. See [architecture.md](architecture.md) for detailed technical specifications, interfaces, and implementation patterns.

