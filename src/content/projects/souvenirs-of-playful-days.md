---
title: "Souvenirs of Playful Days"
order: 6
type: "Game jam"   # short label shown as a pill
role: "Sole programmer, UI/UX, tools, gameplay"
context: "Group project, school game jam"
team: "6 people"
date: "May 2026"
engine: "Unreal Engine"
tech: ["C++", "Blueprints"]
play: "https://impish-mido.itch.io/souvenirs-of-playful-days"
source: ""
embed: ""
banner: ["/media/souvenirs-1.mp4", "/media/souvenirs-2.mp4"]
cover: "/media/souvenirs-cover.png"
summary: "Sole programmer on a team project: writing the code, integrating everyone's work and building the tools the team needed."
---

## What it is

A puzzle game with a toy theme. The player must traverse game boards to uncover what happened to their owner's house after they left.

## My role

I was the sole programmer on this project. Beyond writing gameplay code, my job was to integrate other people's work and to build the tools and systems the team needed along the way.

I built the grid system the game needed. Since the main way the player will solve puzzles is by using elements they unlock, I had to make a modular element system. The board manager stores the type of each tile. When the player applies a new type over it, 
the game checks the Data Asset created by the game designer using my tool to determine which element the tile will become. For instance, applying an ice element on a water-type freezes it. However this mechanic was severely underused and I'd love to use it again in a larger-scale project.

I also made the NPC and dialogue system, allowing our narrative designers to enter the text they want to display on screen directly through Blueprint classes.

## What I learned

How to make tools and interfaces other people with less technical knowledge can use. Most of the team had no prior experience with Unreal Engine.
