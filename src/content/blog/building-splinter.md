---
title: "Splinter: Building a to-do App for an Audience of One"
description: "Why I decided to build my own productivity app."
date: 2026-06-15
tags: ["projects", "web-dev", "productivity"]
---

## Why another to-do app?

This is a blog about a project I built in a three-day sprint. I call it _[Splinter](https://github.com/chiklitgohil/splinter)_ and on the surface, this might look like a checklist app (and it might really be for everyone), but not for me. Even though I decided to build a project that has at this point become a meme among programmers, I did not build it because I wanted to learn or to showcase it on my portfolio (of course not; I have more innovative stuff to show for it), but rather, this was because I genuinely was facing a problem.

## The Problem

I am not sure if I can call it a problem because it is just me nitpicking in software the same way I am about my meals, but anyway, for the rest of this blog, I will call it a _problem_. Here is the backstory for some context. When I came into this YouTube space of productivity, along with tutorials on Obsidian, Notion, etc. I really was trying to find the perfect to-do list app for me in the process. I tried out all the mainstream to-do apps, built Notion systems, and integrated _TickTick_ and _Todoist_ into my life and all this. I was still not satisfied, so in the end I got frustrated and uninstalled all this bloat and moved to my notebook and paper (_[Bullet Journaling](https://youtu.be/fm15cmYU0IM)_), and soon it hit: I cannot carry my notebook everywhere; notebooks do not give me reminders; they do not sync with my PC; they do not show me trendlines. And recently, I got a Samsung tablet, so I transferred the same framework to Samsung Notes and took handwritten notes.

Just when I was finally settled with it, it worked really well for a long time. Then came the need for data collection. I figured out my personal way of building any habit I wanted. That is when there was a need to collect data. In short, I wanted to keep track of when I was working and when I wasn't and if I was meeting my daily targets. because it was part of my robust approach to building any habit I wanted. And I did not want to lose this, but somehow I wanted it combined with my daily task because they overlapped to some degree. That is when I looked for that kind of solution online, and the ones I found were either half-baked or paid. That is when I classified this as a problem and determined that I needed to devise a solution.

![Image of a pkm community meme](/assets/images/splinter-pkm-meme.png)

## Designing the Solution

So I got to work brainstorming, screenshotting my favourite features and pasting them into the Figma canvas to get the full picture I wanted for my app. And while designing the layout, I wanted to draw on my background in web development, so I decided to go with a web app rather than a phone app because, in short, I hate phones. And most of my work is on a laptop, so it will be convenient to track it there. I got started finalising the core feature because I had bloated it with too many features. I really needed to cut it down to the basics because this has happened before, and it did not turn out well. Let's keep it simple from the start; if the need ever arises while I'm using the app, I can integrate it at any time, since this is my app.

## Core Features

Here is what I finalised on the philosophy of my app; beyond the basic to-do feature, this is what made the app really work for me. I needed a way to have a pop-up appear in the morning, or whenever I first open the app for the day, to select all the tasks I want to do today. I can simply select those and keep them in a "today" view for the rest of the day until midnight (or whatever time I set), then reset after that. Any uncompleted tasks lose their "today" label. Another thing is that I've always seen a feature for recurring tasks in to-do apps, but for me, they are more of a habit-building tool than a recurring task feature. It is something I have to do every day.

And along with that, I need to track how long I spent on that task. It's a category of my life that might have subtasks, too. And that level of categorisation, along with a timer, was nowhere to be found. And I don't know if there is a need for such a tool in people's lives; it's just me, with a niece's demand. Some simple feature I am working on on the side is markdown support for the notes. and also hotkeys to perform actions within my app. Because being an _[Obsidian](https://obsidian.md/)_ user and a power user tries to minimise mouse use as much as possible, I NEED keyboard shortcuts.

## Choosing the Stack

With all these features in mind, and the target audience being me (for now), I set on a mission to build something really simple, choosing a stack I had experience with, the big three vanilla: HTML, CSS, JS, Flask, and SQLite. To put it simply, I got started. Another reason for choosing such a stack was that, before I learned about the bigger frameworks, I simply wanted to get a feel for a raw web base from which everything started and then identify the limitations myself, so I could realise what these frameworks bring to the table.

## The Three-Panel Dilemma

One design decision that took me a while to make, and might still change, is the three-panel layout. It's a really powerful high-context layout, but at the same time, my goal is to keep the app simple and focus only on what's now / today. And that might run counter to that notion. But we will finalise that when I get started building today's view; that will decide the UI direction of this project. And I want to do it right because that is where the user (me) is intended to spend most of their time. It needs to be intuitive and simple to use, and, most importantly, not overwhelming.

## Building Under Pressure

Working on this project was a great experience. These types of projects reinforce the importance of meeting a deadline. You sprint through the project like your life depends on it; that is when good software is made, reminding me of [Parkinson's law](https://www.google.com/search?q=parkinson's+law). I cannot believe this was rapidly iterated over in just three days.

## What's Next?

Splinter started as a CS50x final project, but to me, it became something useful. The current version is far from finished. The UI will change, the architecture will evolve. And a new feature will emerge as I continue to use it. But after years of searching for perfect productivity, the solution is to build your own. (Something I would like to add to this meme.) Hopefully, I do not end up back on the right this time 😭

---

**Check out the project here:** [Splinter App Demo](https://youtu.be/7zWKPHrK01M)

**Source Code:** [GitHub Repository](https://github.com/chiklitgohil/splinter)
