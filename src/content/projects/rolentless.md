---
title: "Rolentless"
order: 2
type: "Game jam"
role: "Tools programmer, gameplay programmer, sound integration"
context: "Group project, school game jam"
team: "8 people"
date: "September 2026"
engine: "Unreal Engine"
tech: ["C++", "Blueprints"]
play: "https://matricdev.itch.io/rolentless"
source: ""
embed: "https://www.youtube.com/watch?v=qBUUlMP--JQ"
banner: ["/media/rolentless-1.mp4", "/media/rolentless-2.mp4"]
cover: "/media/rolentless-cover.png"
summary: "Game jam project where I built the systems behind the dynamic minimap and integrated evolving music."
---

## What it is

A fast-paced stealth game in which the player must infiltrate a highly secured area, but with a catch : they're equipped with rocket rollers and cannot stop!

## What I did

I worked on tools and sound integration, as well as a bit of gameplay. I built systems first, then turned them into gameplay elements, with the automatic minimap being the main one. I also handled the sound integration, including music
that evolves based on what happens in the game.

When we split the work I was tasked with making the level-related parts of the game while the other programmers worked on the core gameplay. I started by making a level editor using what I had learned from both Resident Devil and my Roguelike Tower Defense game.
Our level designer was very happy with it. I could then expand this system into a dynamic minimap generator. Since the levels made with my level editor had easily trackable data I was able to make an algorithm that automatically makes a minimap based on it. You can find the video showcasing it above.

Then I worked on the sound integration. As we wanted our game to have a great runner/escape feeling I added an adaptative music system. It adds or removes layers depending on what the player's doing ; are they going fast enough? Are they being chased? Are they running out of time? And so on. Not only does it help with making the very short loop less tiring for the ears it also makes specific scenarios more intense. The music itself was made by Gael Mulders, our Game Designer. Music composition is something I'd love to try someday, but I haven't had the chance to yet.

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/97b8G79cVM0" title="Evolutive Music Showcase" loading="lazy" allowfullscreen></iframe>
</div>

I also helped with some of the UI.

## What I learned

Splitting work between several programmers during a jam, and building a system generic enough to
be reused instead of hard coding each case. I also learned how to use one system as a foundation for building other systems around it.
