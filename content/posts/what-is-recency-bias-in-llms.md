---
title: What is recency bias in LLMs
authors:
  - Patrik Björklund
share: true
date: 2024-03-23 09:09:00 +0200
summary: Prioritizing recent inputs over older ones
tags:
  - AI
  - what-is
series:
  - What-Is
---
Recency bias in language models like ChatGPT refers to the model's tendency to prioritize more recent inputs in the conversation when generating responses. This means that if you provide a long conversation history, while the model technically considers the entire input, it might weigh recent messages more heavily than earlier ones when generating a response. This can lead to situations where the model might not remember or refer back to earlier parts of the conversation correctly.

Related concepts are "needle in haystack" and that models tend to prioritize the beginning and end of inputs, "ignoring" the middle. This was a huge thing for Googles most recent Gemini models, being able to overcome this in hundred of thousand lines long contexts.

