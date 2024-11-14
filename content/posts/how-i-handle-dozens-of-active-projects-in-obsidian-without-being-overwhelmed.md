---
title: Informative title of max 20 words
authors:
  - Patrik Björklund
share: true
date: 2024-11-14 19:52:00 +0200
summary: Summary of max 50 words
tags:
  - one-single-tag-with
series:
  - Business
---

# How I handle dozens of active projects in Obsidian without being overwhelmed
## Project Management
### The Structure
My system is based on a folder structure with folders named according to very strict rules, which has then been automated via my project creation plugin to enforce this structure.

`{{N}}. Major Area`
`{{N}}.{{N}} Project in area`

Note: I don't next project folders in project folders in order to have an overview just by expanding my `1. Work Projects` or `1. Private Projects` folders.

### Template Folder
To enforce consistency I have a `- TEMPLATE` folder. This folder contains a. folders and b. files in those folders. Starting a new project means copying this structure and renaming folders, files and also adding a card to the [ > Major Areas](.md#major-areas) kanban board with a link to the newly created project.
## Explaining my template structure

This is how my current template for a new project is setup.

```
- Kanban
	- 0. TEMPLATE Kanban
- 1. Notes
- 2. Email
- 3. Documents
- 4. People
- 5. Sent to customer
```
### Notes
Meeting notes, fleeting ideas, kanban cards, etc. Text notes relevant to the project. 
Think about it as things that would be written down in a physical notebook.
### Email
Emails worth refering to in text format, not for auditing purposes but more as reference.
### Documents
Drafts of documents that can become deliverables sent to a customer.

Think about it as things that would be written down as Microsoft Office documents or some proprietary file format like Photoshop PSD files or CAD drawings.
### People
People related to the specific project that I first met in this project, or at least first created a note about the person.
### Sent to customer
Can be internal customer or myself. Final versions of things that are now used in the world for something,
## Workflow to create a new project

I press F6 which triggers my project plugin command.
![Pasted image 20241111143434.png](Pasted%20image%2020241111143434.png)

Then I select the major area and the project name and press the button. Now my project exists!

![Pasted image 20241111143638.png](Pasted%20image%2020241111143638.png)

This project was called "AI in AmpliFlow" so it was given the number 2.2 since we already had a project "2.1 ISO Mini". 

![Pasted image 20241111143803.png](Pasted%20image%2020241111143803.png)
See how the card for the new project was created and added to the board? This let's me mix and match smaller tasks and larger projects on on the kanban board for all my [ > Major Areas](.md#major-areas).

## Archiving a project

1. Move to `-- Archive` 
2. Rename to `{{n}} {{yyyy-mm}} - {{Projectname}}`

## Daily Notes
This is where everything goes in. It can be anything from journal entries, to quotes, to random tasks, to ideas. I don't judge - I throw it in and know that it will be reviewed and important things will be brought up to the heavenly land of structured planning if they deserve to.

I do my daily planning in my daily notes using the day planner obsidian plugin. Every day a template structure is pulled into my daily note.