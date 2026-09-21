---
title: "Smash-like Online Game"
order: 4
type: "Solo"   # short label shown as a pill
role: "Solo project"
context: "Personal project, learning multiplayer"
date: "2025"
engine: "Unreal Engine"
tech: ["C++"]
play: ""
source: ""
embed: ""
banner: ["/media/smash-like-1.mp4", "/media/smash-like-2.mp4"]
cover: "/media/smash-like-cover.png"
summary: "Solo project built to learn replication and online multiplayer, including the Epic Online Services setup."
---

## What it is

A small fighting game prototype in the Smash-like genre. I made this game to learn about online multiplayer and replication for potential future projects.

## What I did

I set up Epic Online Services and worked through replication. Getting game state to travel between
clients and the server without the game falling apart.

This prototype has two playable character. A parent character with no proper moves but all of the functions and stats a character should have and an "Outlaw Egg" character, child of the parent character, that has very basic attacks.
The prototype lets players connect to a lobby, select their character and vote on a map. This prototype uses a Peer-to-Peer system with the host player also running the server.
The game state is replicated across clients (damage pourcentage, used moves, selected characters, etc.) while the animations are handled by the clients. This was my first attempt at multiplayer replication and it's not perfect by any mean. I struggled a lot with understanding what should and shouldn't be replicated.

I spent at least three days trying to get EOS to work. After going through almost every EOS tutorial and documentation out there, I was finally able to make it work and test it with other people. The embedded gifs showcase a match with two other people as well as a solo training game.

## What I learned

How to set up EOS, and how much of multiplayer development is about deciding who owns what.
