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

Let's configure the Eneloppe plugin.

![Pasted image 20241109100146.png](Pasted%20image%2020241109100146.png)

First we configure the standard things for the plugin, should be pretty basic.


![Pasted image 20241109100202.png](Pasted%20image%2020241109100202.png)

I have my markdown posts in the [/content/posts](https://github.com/pbjorklund/pbjorklundblog/tree/master/content/posts) directory so we need to let the plugin know this.

![Pasted image 20241109100219.png](Pasted%20image%2020241109100219.png)

Next images will be uploaded like this in Obsidian.

```markdown
![[Pasted image 20241109100219.png]]
```

And using this WikiLinks to MDLinks seems to work well. 

![Pasted image 20241109100233.png](Pasted%20image%2020241109100233.png)

Then I do bit of a hackish solution so it can find the linked files `<img alt="Pasted image 20241109091858.png" src="Pasted%20image%2020241109091858.png">` and push them directly to the `static` directory.

Now for actually writing the posts I just create a new note in my blog folder and then insert my "hugo frontmatter template" like so:

```json
---
title: "Informative title of max 20 words"
authors: ["Patrik Björklund"]
share: true 
date: {{date}} {{time}}:00 +0200
summary: "Summary of max 50 words"
tags: ['one-single-tag-with']
series: ['Business']
---

And then we write the content of the post here...
```

That seems to be all!


