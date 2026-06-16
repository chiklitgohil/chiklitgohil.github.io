---
title: "Splinter: Building a to-do App for an Audience of One"
description: "Why I decided to build my own productivity app."
date: 2026-06-15
tags: ["projects", "web-dev", "productivity"]
---

## Why another to-do App?

This is a blog about a project I built in a three-day sprint. I call it [*Splinter*](https://github.com/chiklitgohil/splinter), and on the surface this might look like a cliché to-do list app (and it might really be for everyone), but not for me. Even though I decided to build a project that, at this has point become a meme among programmers, I did not build it because I wanted to learn or as showcase for my portfolio (of course not; I have more innovative stuff to show for it), but rather this was because I genuinely was facing a problem.

## The Problem

I am not even sure if I can call it a problem because it is just me nitpicking in software the same way I am about my meals, but anyway for the rest of this blog I will call it a _problem_. Here is the backstory for some context. When I got introduced to Productivity and Personal Knowlege Management (PKM) Community: The Obsidian Setups and Notion workflow tutorials. I was trying to find the perfect to-do list app for me.

I tried out all mainstream todo apps, built Notion systems and integrated _TickTick_ and _Todoist_ in life. All this and I was still not satisfied, so I got frustrated and uninstalled all the bloat. I moved to the good-old notebook and pen ([*Bullet Journaling*](https://youtu.be/fm15cmYU0IM)). Soon the reality hit: I cannot carry my notebook everywhere; pages do not give me reminders; they do not sync with my PC; they do not show me trendlines.

Then I got a Samsung tab, so I transferred the same framework to Samsung Notes and took handwritten notes. Just when I was settled, and it finaly worked really well for a long time. But soon it will occur to me, I need tracking.

I had figured out my personal way of building almost any habit I wanted. And that involved me keeping track of when I was working and when I wasn't and if I was meeting my daily targets. Somehow I wanted it combined with my daily task because, to some degree, they overlapped. That is when I realised solutions online will not suffice, because the ones I found were either half-baked or paid.

That is when I classified this as a problem, and determined I need to devise a solution for this. Before I got to designing the solution, I recalled a meme, and thought building a webapp to satisfy my OCD might as well be part of this meme... I hope I do not end up on the right AGAIN, 😭...

![Image of a pkm community meme](/assets/images/splinter-pkm-meme.png)

## Designing the Solution

So I got brainstroming, screenshotting my favorite features and pasting them into the Figma canvas; writing down and describing how I precicely want my app to be; Designing the layout. Having previous background in web dev I decided to go with a web app, not a phone app, because I simply hate phones, and most of my work is mostly on laptop, so it will be convenient to track it there itself. I had to cut it down to the core feature because I had bloated it with a lot of features, and I really had to cut it to the basics because this has happened in the past and it did not turn out great. I thought to myself, 'Let's keep it simple from the start; if a need for a tool ever arises while I use the app, I can develop it anytime since this is my app (duh).

## Core Features

Other than the basic to-do feature all apps have, the part that made it for me was that, I needed a way to have *something* come up in the morning / anytime I first open the app for that day to get a pop-up for selecting all the tasks I might want to do today: I can simply select those and have them stay in a "today" view for the rest of the day until midnight (or whatever time I set), when the list got to a clean slate: any incomplete tasks lose their "today" label.

I always saw recurring tasks in todo apps, but for me they are more like a habit-building tool. It is something I have to do every day. And along with that, I need to track the time I did that task for. It's almost like a category of my life for which I might have subtasks too. And that level of categorization, along with a timer, was nowhere to be found. I am not sure if there is a requirement for such a tool in people's lives or It's me with a niece's demand.

Some simple feature I am currently working on is markdown support for the notes field in tasks. Also hotkeys to do things around my app. Because being an _[Obsidian](https://obsidian.md/)_ user and a power user trying to minimize mouse use is ultimate goal for firction-less app, I NEED keyboard shortcuts.

## Choosing the Stack

With all these features in mind, and the target audience being me (for now), I set on a mission to build something really simple, choosing a stack I had experience with, the big three vanilla: HTML, CSS, JS, Flask, and SQLite. Another reason for choosing such a stack was because I simply wanted to get a feel for raw-web, and then come accros the limitations for this techonologies through actualy going throug the pain, to realize what these frameworks bring to the table.

## Design Choices: Three-Panel Dilemma

One design decision that took me a while to decide on, and also the one that might still change, is the three-panel layout. It's a really powerful high-context layout, but at the same time my goal is also to keep the app simple and only focus on what's now / today. and I believe that might go against that notion. But we will finalize that when I get started building today's view (in v0.2);\* that is something that is going to decide the design direction for this project. I want to make sure I do it right because that is where the user (me) is intended to spend most of their time, and it needs to be intuitive and simple (not overwhelming) to use.

## What's Next?

Working on this project was a great experience, and reminded me of [Parkinson's law](https://www.google.com/search?q=parkinson's+law). Since projects reinforces the idea in my mind, that when you have a deadline to meet and you sprint through the project like your life depends on it, you can cross your perceptoin's imaginary limits, I still find it hard to believe this was iterated rapidly over that span of three days.

Splinter started as a CS50x final project, but to me it became something useful. The current version is far from finished. The UI will change, The architecture will evolve, and new features will emerge as I continue using it. After years in search for a perfect productivity system, the solution might just be to build your own.

---

**Check out the project here:** [Splinter App Demo](https://youtu.be/7zWKPHrK01M)

**Source Code:** [GitHub Repository](https://github.com/chiklitgohil/splinter)
