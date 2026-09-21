---
title: "Resident Devil"
order: 3
type: "Solo"
role: "Solo project"
context: "School exam"
date: "June 2026"
engine: "Unreal Engine"
tech: [C++]
play: "https://impish-mido.itch.io/resident-devil"
source: ""
embed: "https://www.youtube.com/watch?v=epXCKAGE-4Q"
banner: ["/media/resident-devil-1.mp4", "/media/resident-devil-2.mp4"]
cover: "/media/resident-devil-cover.png"
summary: "A TRPG mixing in Survival Horror elements with high modularity."
---

## What it is

A Tactical RPG in which the player must explore a haunted mansion while also managing their health and ammo. They must carefully position themselves and use their move strategically as to defeat multiple foes at once.

## What I made

A Grid-Based unit system alongside pathfinding and a basic unit editor. Units can be easily added and modified with a simple Data Table. 

Each unit has a set of moves with its related information (how much exp is needed to unlock it? How much ammo does it have?..) that can be easily tweaked without having to open C++ files. 

Each action has a behaviour class that dictates how it interacts with the game, meaning a single action (e.g. damaging a targeted unit) can be turned into a multitude of different moves. 

I used a lot of what I learned while making my Roguelike Tower Defense game to make this one, just as I used what I learned from this project to improve my Roguelike.

## What I learned

How to properly set up classes and modular systems that allow for easy additions and extensions.
