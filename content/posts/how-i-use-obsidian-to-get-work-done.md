---
title: How I use Obsidian to get work done
authors:
  - Patrik Björklund
share: true
date: 2024-11-14 19:52:00 +0200
summary: In this follow up to my post about how I set goals that align with my values we dig into how I use Obsidian to actually do all the things I talked about in the previous post.
tags:
  - productivity
  - obsidian
series:
  - How I Work
---
Last time I wrote about my theoretical framework for how to get things done that actually matter to me and avoid overwhelming myself even with a high stress job and 2 small kids at home.

Today we are going to look into how I use Obsidian to keep a local copy of all my information in plain .md markdown files. 

This is great even if I spend a lot of my time when working with others in web-based systems, like the one that we build in our company - [AmpliFlow](https://www.ampliflow.com). 

Warning: It's pretty easy to go overboard with these tools and systems and spend way to much time with them for it to be classified as "work" - this is why I classify it as 10% work and 90% hobby. Makes it easier to spend time doing strange things like writing 100 lines of JavaScript to render tasks from a bunch of kanban boards in a specific way. 

Ok, with that out of the way - let's get started.
## A few key concepts to know
Before we dive down into the nitty gritty lets define a few key concepts here that will set the stage for what's to come. My system is the result of 2-3 decades (depending on how you count) of continuously thinking about this and letting my day-job form my thinking. 
### PKM - Personal Knowledge Management
I consider my PKM (personal knowledge management) system a replacement for having a bunch of physical notebooks or random files strewn across my computer or different web based tools that can could be shut down at any time (note: I still use a physical notebook often and then transcribe info back into my obsidian vault). Basically my PKM deals with all the information that is _mine_ and I want to keep. 

Company information is still stored in company tools and systems but usually the only thing I store are things I'm actively collaborating on, drafts sent for review or finished work products. I.e text that is valuable to others *in the format is is made available*. No-one that you are not collaborating with *right now* wants your 50% accurate draft.
### Major areas
Some background. I'm an entrepreneur responsible for projects (internal, external), people, budgets, administration, product development, product research, marketing, content marketing, sales, software development and probably more things. Each of these things is a `major area` in my system. If you are lucky enough to say that you only have 1 area, then you probably break that down into more areas. Like "Learning", "Managing", "Joy" etc. etc.
### Task / Kanban boards
Tasks needs to be formulated as something that can be acted upon. Hat tip to David Allens book Getting Things Done (GTD) that I read in the 90s and still practice concepts from like "Collect" and making sure tasks are actionable. I.e. instead of writing a task "mom" write a task "call mom about getting a reference to that great plumber from the 2004 renovation of the porch".

I have also for a very long time been a fan of visual, flow based systems, like Kanban from the Toyota Production System. I spent several years as an agile coach and consultant and these types of systems have always resonated strongly with me and produced great results.

One key concept to pay attention to is limiting work in progress. 

> Do fewer things to get more things done. Stop starting, start finishing.

A simple yet powerful illustration of work-in-progress (WIP) limits can be seen at the Tokyo Zoo. When you enter you get a stick of bamboo, when the attendant has run out of sticks to give out they don't let more people into the Zoo until people leave and return sticks. Very simple way to keep the park from overcrowding. Very powerful.

Another central component is work being "pull based" instead of "push based". It's actually pretty simple.

Imagine your boss sending you new things to do at work 24/7 at a pace that is quicker than what you can handle. That would pile up and your boss would be pretty upset after a while.

Now instead imagine you had a whiteboard at your desk with three columns drawn on it. "Todo", "Working on", "Done". You tell your boss that he can put whatever he wants into the "Todo" column but you will only work on 2 things at the same time. When you finish 1 thing you will take the top task from the "Todo" column and work on that until it's finished. The boss can pretty quickly get a sense of how much is completed each week and will have to make harder prioritization calls about what he or she puts in your (or your teams) "Todo".

I use the same thing but replace "the boss" with all my different areas and projects claim on my time. Therefor I either allocate time to a specific project or time to a specific task at the weekly planning.
## Planning with Obsidian - from this quarter to the current hour
Ok enough about that, let's get into it.

My system relies heavily on quarterly, weekly and daily notes. I use the [periodic notes](https://github.com/liamcain/obsidian-periodic-notes) plugin to add weekly and quarterly notes to obsidian alongside the existing daily notes.
### Quarterly planning
Every quarter I have the plugin create a new Quarterly Note based on a template (see below).

In this template I have instructions for what I need to do at this quarterly planning event. The main goal is to create OKRs.

They can very often actually continue several quarters. Like for instance "Become an Ironman" is a goal I work on i Q4 2024 but can't complete there since my race is June 1st 2025. Then I just prefix it with 🔄 to mark it as a continuing objective. 

Each goal has a few different measurements we can use to decide after the quarter if we hit the goal or not for the quarter that must be measurable. I try not to push as hard as the OKR methodology prescribes, realistic goals that are hard enough is good enough for me. They can be things along the lines of "Completed 95% of the training sessions in TrainingPeaks for days where I was not sick" and "Logged food at least 80% of the days in the month and met 100% of my protein target".
#### Obsidian quarterly note template

````markdown
![[0. Values]]

![[0.1 Strategic Plans]]

## Quarterly Goals

Try to create goals that will make progress on aligning further with Values.

Incorporate personal retreat into quarterly goalsetting process? https://thesweetsetup.com/how-to-host-your-own-personal-retreat/

### 🔄 Goal that goes longer than this quarter 
- Be 100% satisfied with effort put into training  
### Goal expected to be done by this quarters end 
- Publish 2 new content pieces a month for AF
- 1 new customer case published
````

### Weekly planning
In my template I show an inline view of the current quarterly plan as a reference and help when doing the weekly plan.

```
## Quarterly Goals

### Work

#### Do good enough baseline marketing of AmpliFlow

- Publish 4 new content pieces a month for AF
- 1 new customer case published

### Personal

#### 🔄 Become an Ironman

- Be 100% satisfied with effort put into training

#### Become Less Anxious

- Read at least 1 self improvement book on psychology
- No big fights in company
- 4 times I did not go into attack mode when wife said something

#### Reading

- Read at least 6 books
```

A small but neat way to get everything you need presented to you straight away.

Here I review calendar and link to kanban boards that I want to make progress on this week or mention specific tasks if there are smaller things that needs to be completed this week.

**Monday**
Make progress on `[[2.1. ISO Mini - Kanban]]` and connect back to interested customers.
Handle random admin tasks and routine work.

.......

**Weekend**
Take down the kids trampoline and trim the hedges before putting it into winter rest. 
Go to ikea?
Plan something fun with wife and kids.
#### Obsidian quarterly note template
```markdown
## Quarterly Goals

### Work

#### Do good enough baseline marketing of AmpliFlow

- Publish 4 new content pieces a month for AF
- 1 new customer case published

### Personal

#### 🔄 Become an Ironman

- Be 100% satisfied with effort put into training

#### Become Less Anxious

- Read at least 1 self improvement book on psychology
- No big fights in company
- 4 times I did not go into attack mode when wife said something

#### Reading

- Read at least 6 books
## Description

Review calendar and link to kanban boards that I want to make progress on this week or mention specific tasks if there are smaller things that needs to be completed this week. See [Trigger List For Tasks](Trigger%20List%20For%20Tasks.md) to help out.

### Weekly retrospective
- Review [0. Values](0.%20Values.md) and think about how to reinforce them in the week and think about habits to start, stop, maintain.
- Include feelings so I can know if it was a good week or a bad week 


## Weekly Plan

**Monday**

**Tuesday**

**Wednesday**

**Thursday**

**Friday**

**Weekend**
```

### Daily planning & the daily note
The daily note is where I spend the most time of all notes in obsidian. It ties everything together.

I start each day by looking over if there are any important tasks due that I need to handle today, then I go and create my plan for every hour of the day.

To do this I have a daily note template (see the end for a link) that has the following overall structure right now:
#### Daily Note Template
##### Quote of the day 
I store a lot of quotes all over my obsidian vault. And of course I don't want them to just rot inside some note somewhere - I want to relive them!

Thats why I have this small obsidian-tasks plugin query in my daily note template to show a random quote.

Like this:
![[Pasted image 20241112141743.png]]

This is how you display a random `- ["] quote` task from my vault using this script:


````markdown
```tasks
filter by function task.status.symbol === '"'
limit to 3
sort by function (moment().format('Y-MM-DD') + ' ' + task.description).split('').reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0))|0, 0)
limit 1
hide task count
hide edit button
```
````
##### Tasks due
Now I put a lot of smaller tasks directly in my daily notes that don't really deserve to live inside a kanban board. Like reminders that are not terribly important but nice. Example "- [ ] Buy some flowers for wife due in 6 months".

To don't miss tasks with duedates I use this to show a list of tasks from anywhere in my vault / kanban boards (tasks in the kanban plugin area just markdown tasks, if we use the 📅 emoji and date it will be picked up in the query). Replace `js` with `tasks` in the backticks:

````markdown
```tasks
not done 
filter by function task.status.symbol !== 'k'
due on or before today
group by due
group by path
hide task count
hide edit button
hide backlink
show tree
```
````

Note: I use the `[k]` task status as my way to note tasks that I moved from a note into a kanban board, so therefor filter them out.
##### Daily Planner
Timeblock planning works well in my note. That is just a fancy word for giving every hour of the workday a specific job and not just hopping onto random tasks throughout the day.

In the section for the "Daily planner" we have a template for how to write a "Daily plan" with a bullet point list that can be read by the [day planner plugin](https://github.com/ivan-lednev/obsidian-day-planner). 

It's just a simple list to chop up the day into timeblocks of 2 hours each.
	- 06 Shallow work & Planning
	- 08 DW1
	- 10 DW2
	- 12 Lunch
	- 13 DW3
	- 15 DW4

##### The scratchpad
Now we finally arrive at the place where I actually take my daily notes each day. Here I just throw whatever notes I have in my mind, tasks, links, things to handle later, ideas. Sometimes I just replace this with a page in a physical notebook which I then transcribe noteworthy things back from into this page.

I write a lot of unstructured notes here. It's just the way I like to think I guess.
#### When the day is done - Shutdown
During the shutdown I move tasks over to kanban boards, clean up loose ends, reflect on the day and in general close out all open loops so that I can go into the evening knowing I haven't missed anything important.
#### Obsidian quarterly note template
````markdown
### QOTD
```tasks
filter by function task.status.symbol === '"'
limit to 3
sort by function (moment().format('Y-MM-DD') + ' ' + task.description).split('').reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0))|0, 0)
limit 1
hide task count
hide edit button
```
---
# Daily planner
## Weekly Plan

**Monday**

- [x] Get NSSON delivered. I think all we have to do is do the mapping of old requirements to new requirements ✅ 2024-11-12
- [x] Get multi scale planning up and running ✅ 2024-11-12

**Tuesday**

- [x] Replan I-Tech project and have meeting with Dan ✅ 2024-11-12

**Wednesday**

- [x] Plan two blocks of CF to move projects forward.
- [x] Publish 1 article.
- [x] Plan out kundcase Luco

**Thursday**

- [x] Workshop ISO mini with Henrik at the office.
- [x] Make progress on AmpliFlow web restructure

**Friday**  
Management day and random admin, thank you lunch for Saif.

**Weekend**  
Take in trampoline, fix garden.
## Tasks Due
```tasks
not done 
filter by function task.status.symbol !== 'k'
due on or before today
group by due
hide task count
hide edit button
```
## Daily plan

- 08 DW1
- 10 DW2
- 12 Lunch
- 13 DW3
- 15 DW4
# Scratchpad
````
### It all ties together
I also have a bunch of small "tools" I built out in obsidian. 
#### Peek at what actually got done
When I look at quarterly goals I can look into my `7. Kanban Cards This Q` note that will let me browse all the things I actually completed so far this quarter or last quarter.

````markdown
```tasks
done this quarter
filter by function !task.file.path.includes('1. Private Projects')
filter by function task.file.path.includes('Kanban')
group by function task.done.format("YYYY[%%]-MM[%%] MMM", "no due date")
```
````
#### Embeds of levels above
When I do weekly planning the template pulls in an embed of the quarterly plan so I always have it visible to my mind at least once a week. It's a nice cycle.
#### Recurring tasks
I have recurring tasks setup in a separate note for monthly work chores, daily tasks and ofc for my weekly and quarterly planning. Typical shallow work tasks that is more or less on autopilot. When I see it, I do it, I check it off. Done.

```markdown
## Private
### Daily
- [ ] Named something to be grateful for 🔁 every day 📅 2024-11-13
- [x] Named something to be grateful for 🔁 every day 📅 2024-11-12 ✅ 2024-11-12

### Weekday
- [ ] Read at least 1 chapter of a book 🔁 every weekday 📅 2024-11-12
- [ ] Trained to best of ability 🔁 every weekday 📅 2024-11-12
- [ ] Shutdown complete 🔁 every weekday 📅 2024-11-12 
### Weekly
- [ ] [Do weekly planning](0. Journal/Weekly/2024-W46) 🔁 every week on Monday 📅 2024-11-18 
### Quarterly
- [ ] [Do quarterly planning](0. Journal/Quarterly/2024-Q4) 🔁 every 3 months 📅 2025-01-01
- [x] [Do quarterly planning](0. Journal/Quarterly/2024-Q4) 🔁 every 3 months 📅 2024-10-01 ✅ 2024-11-12
```
## End
So there we have it. My way to handle goals and planning in obsidian. Next time we take a look at how I handle projects specifically with my custom built plugin, 360 degree overview dashboard and file and folder structure using obsidian-tasks and obsidian-kanban.

---