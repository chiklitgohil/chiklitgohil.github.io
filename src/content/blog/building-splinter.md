---
title: "Splinter: Building a to-do App for an Audience of One"
description: "Why I decided to build my own productivity app in a three-day sprint to solve a very specific personal problem."
date: 2026-06-15
tags: ["projects", "web-dev", "productivity"]
---

## Why another to-do App?

This is a blog about a project I built in a three-day sprint. I call it _Splinter,_ and on the surface this might look like a cliché to-do list app (and it might really be for everyone), but not for me. Even though I decided to build a project that has at this point become a meme among programmers, I did not build it because I wanted to learn or to showcase it on my portfolio (of course not; I have more innovative stuff to show for it), but rather this was because I genuinely was facing a problem.

## The Problem

I am not even sure if I can call it a problem because it is just me nitpicking in software the same way I am about my meals, but anyway for the rest of this blog I will call it a _problem_. Here is the backstory for some context. When I came into this YouTube space of productivity, along with the Obsidian, Notion, etc. tutorials. I really was trying to find the perfect to-do list app for me in the process.

I tried out all mainstream todo apps, built Notion systems and integrated _TickTick_ and _Todoist_ in life and all this, and I was still not satisfied, so in the end I got frustrated and uninstalled all this bloat. I moved to my notebook and paper (_Bullet Journal_), and soon its reality hit: I cannot carry my notebook everywhere; notebooks do not give me reminders; they do not sync with my PC; they do not show me trendlines.

Then recently I got a Samsung tab, so I transferred the same framework to Samsung Notes and took handwritten notes. Just when I was settled with it finally and it worked really well for a long time. Then came the need for data collection.

I figured out my personal way of building any habit I wanted. In short, I wanted to keep track of when I was working and when I wasn't and if I was meeting my daily targets. Because it was involved in my robust way of building any habit, did not want to lose this. Somehow I wanted it combined with my daily task because, to some degree, they overlapped. That is when I looked for solutions online, and the ones I found were either half-baked or they were paid.

That is when I classified this as a problem and determined I need to devise a solution for this. Before I got to designing the solution, i was reminded of one meme, and thought building a webapp to satify my OCD might just as well be part of this meme... I hope I do not end up on the right AGAIN, 😭...

![image of a pkm community meme](/assets/images/splinter-pkm-meme.png)

## Designing the Solution

So I got working brainstorming, screenshotting my favorite features and pasting them into the Figma canvas to get the full picture I wanted for my app. and designing the layout it wanted and having previous background in web dev I decided to go with a web app, not a phone app, because, in short, I hate phones. And most of my work is mostly on laptop, so it will be convenient to track it there itself. I got started finalizing the core feature because I had bloated it with a lot of features, and I really needed to cut it down to the basics because this has happened in the past and it did not turn out great. Let's keep it simple from the start; if the need ever arises while I use the app, I can integrate it anytime since this is my app.

## Core Features

Here is what I finalized on the philosophy of my app; other than the basic todo feature, this is what made the app really for me. I needed a way to have something come up in the morning or anytime I first open the app for the day to get a pop-up for selecting all the tasks I might want to do today, and I can simply select those and have them stay in a "today" view for the rest of the day until midnight (or whatever time I set) and then reset after that, and any uncompleted tasks lose their "today" label.

Another thing is that I always saw a feature of recurring tasks in todo apps, but for me they are more like a habit-building tool than recurring tasks. It is something I have to do every day. And along with that, I need to track the time I did that task for. It's almost like a category of my life for which I might have subtasks too. And that level of categorization, along with a timer, was nowhere to be found. And I am not sure if there is a requirement for such a tool in people's lives; it's me with a niece's demand.

Some simple feature I am working on on the side might just be markdown support for the notes. and also hotkeys to do things around my app. Because being an _[Obsidian](https://obsidian.md/)_ user and a power user tries to minimize mouse use as much as possible, I NEED keyboard shortcuts.

## Choosing the Stack

With all these features in mind, and the target audience being me (for now), I set on a mission to build something really simple, choosing a stack I had experience with, the big three vanilla: HTML, CSS, JS, Flask, and SQLite. To put it simply, I got started. Another reason for choosing such a stack was that before I learned about the bigger frameworks, I simply wanted to get a feel for raw web base from which all started and then identify the limitations myself for me to realize what convinces these frameworks to bring to the table.

## Design Choices: Three-Panel Dilemma

One design decision that took me a while to decide on, and also the one that might still change, is the three-panel layout. It's a really powerful high-context layout, but at the same time my goal is also to keep the app simple and only focus on what's now / today. and I believe that might go against that notion. But we will finalize that when I get started building today's view;\* that is something that is going to decide the UI direction of this project. And I want to make sure I do it right because that is where the user (me) is intended to spend most of their time, and it needs to be intuitive and simple to use. and most importantly not overwhelming.

## What's Next?

Working on this project was a great experience, and these types of projects reinforce the idea in my mind that when you have a deadline to meet and you sprint through the project like your life depends on it, that is when good software is made, reminding me of Parkinson's law. I cannot believe this was rapidly iterated over in that span of three days.

Splinter started as a CS50x final project, but to me it became something useful. The current version is far from finished. The UI will change, The architecture will evolve, and new features will emerge as i continue using it. but after years of search a perfect productivity i the solution might just be to build your own.

---

**Check out the project here:** [Splinter App Demo](https://youtu.be/7zWKPHrK01M)

**Source Code:** [GitHub Repository](https://github.com/chiklitgohil/splinter)
