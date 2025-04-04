---
title: Publishing this blog from Obsidian
authors:
  - Patrik Björklund
share: true
date: 2024-11-09 09:13:00 +0200
summary: Summary of how I publish this blog from within Obsidian
tags:
  - productivity
  - obsidian
series:
  - Productivity
---
This blog is today fully published from [Obsidian](https://obsidian.md/) to [GitHub](https://github.com/pbjorklund/pbjorklundblog) Pages via the [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) plugin inside Obsidian.

The plugin pushes markdown content into the Posts directory in the GitHub respository via an auto merged pull request. That then triggers a simple [GitHub action](https://github.com/pbjorklund/pbjorklundblog/blob/master/.github/workflows/hugo.yml) that builds the static site with [Hugo](https://gohugo.io/) and deploys the output to GitHub Pages.

Super simple.

Let's configure the plugin.

## Configuring enveloppe

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

## Aaand a small patch for hugo
When using the Enveloppe plugin to export notes to Hugo in the way we are above, the `[[links]]` in our notes are converted to Markdown links without a leading `/`. This means that image paths generated for our content, like `![Image](image.png)`, are relative paths without the leading slash. 

In Hugo, when these relative image paths are rendered into HTML without a leading `/`, they become relative to the current page's URL. I.e it tries to find images under www.pbjorklund.com/post/our-post-name/image.png instead of directly under www.pbjorklund.com/image.png. 

So to "fix Hugo" to work with our wonky setup above we do this in the root of our hugo repo to create a new render hook:

```bash
mkdir -p layouts/_default/_markup && cat > layouts/_default/_markup/render-image.html <<'EOF'
{{- $src := .Destination -}}
{{- if not (hasPrefix $src "/") -}}
  {{- $src = printf "/%s" $src -}}
{{- end -}}
<img src="{{ $src }}" alt="{{ .Text }}" />
EOF
```

## Actually writing posts

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

## Publishing posts

Then when it's time to publish I simply press ctrl+p and then:

![Pasted image 20241109102837.png](Pasted%20image%2020241109102837.png)

Commit is sent to github, pull request is opened and merged automatically. 

And voila, that's all.

![Pasted image 20241109102908.png](Pasted%20image%2020241109102908.png)
