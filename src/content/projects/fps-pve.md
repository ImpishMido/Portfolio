---
title: "FPS PvE"
order: 2
type: "Solo"
role: "Solo project"
context: "School exam"
date: "October 2026 to Today"
engine: "Unreal Engine"
tech: ["C++", "Blueprints"]
play: ""
source: ""
embed: ""
banner: ["/media/fps-pve-1.mp4", "/media/fps-pve-2.mp4"]
cover: "/media/fps-pve-cover.png"
summary: "Solo FPS multiplayer game. Team up with other players to defeat waves of incoming enemies"
---

## What it is

A solo multiplayer FPS PvE game in the making.
I design and make everything from scratch.

## What I made

At the moment I have a FPS prototype with a solid component-driven architecture to build upon. 

The base character handles the inputs then components and interfaces handle the game systems, meaning I can re-use those for other classes (a health component I can attach to anything that must be damageable for exemple).
I also made a Cheat-Proof weapon system. Actors can have the "Ability Component" allowing them to have one or multiple weapons. Those weapons are made from Data Assets and are easily editable, using gameplay tags as stats and a separate behaviour class.
When a player uses a weapon, it sends a RPC to the server asking if it can fire. The server then checks if it's valid (does the player have enough ammo? Are they currently reloading? Etc) then spawns a bullet (or triggers whichever behaviour class the ability has).
This very system can also be reused for enemies as they can also call the HasAbility interface the component holds to use their own abilities.

I can easily modify the ability stats to drasticly change their behaviour.

<video controls width="600">
  <source src="/media/fps-pve-3.mp4" type="video/mp4" />
</video>

More than just programming, I also make the models and concepts myself. 3D modeling is something I've always wanted to try so I took the chance to for this project.
Here are a few of those with the models and animations. Everything was made by myself: the concept, the ref sheet, the model, the rigging, the animations..

<img src="/media/fps-pve-image-1.png" alt="Behemoth Concept" />
<img src="/media/fps-pve-image-2.png" alt="Behemoth Animation" />

<img src="/media/fps-pve-image-3.png" alt="Viper Ref Sheet" />
<img src="/media/fps-pve-image-4.png" alt="Viper Model" />

<img src="/media/fps-pve-image-5.png" alt="Gravity Ref Sheet" />
<img src="/media/fps-pve-image-6.png" alt="Gravity In Game" />

## What I'm learning

Making server-client games with correct replication. I'm also thinking my entire architecture to be easily modulable so that I can re-use as much components as possible for the different characters. 
I'm also able to learn more about 3D modeling and animation, and how to import models and animations correctly in a game.
