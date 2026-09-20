---
title: "Roguelike Tower Defense"
order: 1
type: "Solo"   # short label shown as a pill
role: "Solo project"
context: "Personal project, wish to make into a game later down the line"
date: "January 2025 to today"
engine: "Unreal Engine"
tech: ["C++"]
play: ""
source: ""
embed: "https://www.youtube.com/watch?v=TwgpDeENvFc"
# Full width gifs at the top of the page. One or several, they alternate.
# Put the files in public/media/ and list them here, for example:
#   banner: ["/media/roguelike-1.gif", "/media/roguelike-2.gif"]
banner: []
# Gif or screenshot shown on the home page. 16:9 works best, keep gifs under 5 Mo.
cover: "" # TODO: /media/roguelike-cover.gif
summary: "Solo project running since January 2025, where I built a grid editor to stop writing level data by hand."
---

<!-- TODO Lola:
     1. Two sentences on the game itself. "Roguelike tower defense" is a genre, not a pitch.
     2. It runs since January 2025, which is unusual for a student project and is a good thing.
        Say what changed between the first version and now.
     3. There is still no playable link. Even a rough build on itch.io beats nothing,
        a recruiter would rather play two minutes than read ten lines.
     4. If the grid editor actually belongs to another project, move this whole section there. -->

## What it is

TODO: two sentences describing the game.

## The problem: writing level data by hand

Every level is built on a grid taken from a pool of possible grids, and each grid needs generation
data to build itself. I used to type that data by hand, index by index. It worked, but it was slow,
easy to get wrong, and impossible to preview before running the game.

## The tool I built

I added a grid editor mode inside the project. I draw the grid, I see the result before exporting,
and the tool generates a compact code string that the game reads back into generation data.

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/TwgpDeENvFc" title="Grid editor demo" loading="lazy" allowfullscreen></iframe>
</div>

The interesting part is the format itself: version, width, length, then one line per tile type with
the list of indexes it occupies. Exporting indexes every tile type and writes it out, skipping free
tiles since the grid defaults to free anyway.

![Generating the grid code](/media/grid-generate-code.png)

Reading it back parses the string into the generation data. Unknown tile types are ignored instead
of breaking the level, which matters as soon as the format evolves and old grids are still around.

![Reading the grid code back](/media/grid-read-code.png)

## Why it was worth the time

It saves me time, but the real value is that someone else can now build levels without knowing
anything about the generation logic. The same tool could become a map editor for players.

Another grid based project I worked on:

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/epXCKAGE-4Q" title="Grid based project showcase" loading="lazy" allowfullscreen></iframe>
</div>

## What I learned

TODO: what this project taught you about Unreal specifically, and about building tools
for people who are not you.
