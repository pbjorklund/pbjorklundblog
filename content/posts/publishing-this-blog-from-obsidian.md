---
title: Publishing this blog from Obsidian
authors:
  - Patrik Björklund
share: true
date: 2024-11-09 09:13:00 +0200
summary: Summary of how I publish this blog from within Obsidian
tags:
  - productivity
series:
  - Productivity
---
This blog is today fully published from [Obsidian](https://obsidian.md/) to [GitHub](https://github.com/pbjorklund/pbjorklundblog) Pages via the [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) plugin inside Obsidian.

The plugin pushes markdown content into the Posts directory in the GitHub respository via an auto merged pull request. That then triggers a simple [GitHub action](https://github.com/pbjorklund/pbjorklundblog/blob/master/.github/workflows/hugo.yml) that builds the static site with [Hugo](https://gohugo.io/) and deploys the output to GitHub Pages.

Super simple.

Now I'm trying to figure out how to get attachments to work.

Let's see if this works.

![Pasted image 20241109091858.png](./Pasted%20image%2020241109091858.png)