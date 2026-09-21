---
title: "Roguelike Tower Defense"
order: 1
type: "Solo"   # short label shown as a pill
role: "Solo project"
context: "Passion project, wish to make into a full game later down the line"
date: "January 2025 to today"
engine: "Unreal Engine"
tech: ["C++"]
play: ""
source: ""
embed: ""
banner: ["/media/roguelike-1.mp4", "/media/roguelike-2.mp4"]
cover: "/media/roguelike-cover.png"
summary: "Solo project running since January 2025, where I built a grid editor to stop writing level data by hand."
---

## What it is

A Roguelike-inspired Tower Defense game. You play as the big bad and must build your dungeon to prevent heroes from defeating you. Recruit and train an army of monsters to do so!

## The problem: writing level data by hand

Every level is built on a grid taken from a pool of possible grids, and each grid needs generation
data to build itself. I used to type that data by hand, index by index. It worked, but it was slow,
easy to get wrong, and impossible to preview before running the game.

## The tool I built

I added a grid editor mode inside the project. I draw the grid, I see the result before exporting,
and the tool generates a compact code string that the game reads back into generation data during a run.

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/TwgpDeENvFc" title="Grid Editor Showcase" loading="lazy" allowfullscreen></iframe>
</div>

The interesting part is the format itself: version, width, length, then one section per tile type with
the list of indexes it occupies. It exports the indexes for every tile type and writes it out, skipping free
tiles since the grid defaults to free anyway.

![Generating the grid code](/media/grid-generate-code.png)

Reading it back parses the string into the generation data. Unknown tile types are ignored instead
of breaking the level, which matters as soon as the format evolves and old grids are still around.

![Reading the grid code back](/media/grid-read-code.png)

## Why it was worth the time

Not only does it save me a lot of time, it also means someone else can now build levels without knowing
anything about the generation logic. The same tool could become a map editor for players.

## What I made

This game uses a grid system on which the player builds their dungeon. Troops fight on their own so I had to write pathfinding and battle AI algorithms.

Troops are also made using a modular system similar to the one I made for Resident Devil. They're built using Data Tables and use behaviour classes to dictate how their AI reacts to different situations.

As many troops have unique stats (critical chance, buff, bonus range, etc.) I had to make a modular stat system. This system allows new troops to have unique stats through tags without requiring any new code. I can also specify whether those new stats should be displayed as a range when inspecting a unit, or whether it should be displayed on its information screen at all.
When the code needs a stat it looks for its tag. For instance, it will look for the value of "troop.generic.attack_damage" when calculating damage. If I were to add a barbarian troop with a critical hit chance I could create "troop.barbarian.critical_chance" and "troop.barbarian.critical_damage_multiplier" stats for its specific behaviour class to use. Those new stats would automatically display without needing to add anything to the UI or parent class.

## What changed in two years

This project is a passion project of mine and has been in my mind for a long time. 

I started actively developing it about two years ago, although I went through multiple prototypes and early versions. I eventually had to rewrite the whole thing because my previous systems had become too rough to build on. 

I'm very much looking to make it as modular as possible, as this game greatly benefits from being able to easily add new content due to its roguelike/roguelite structure.

## What I learned

Making tools is worth it. Even if it takes more time initally, they definitely make your life easier afterwards.
This is also my first large-scale project on Unreal and has taught me way more things than any school class ever could.
