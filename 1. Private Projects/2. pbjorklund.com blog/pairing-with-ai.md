---
title: How to effectively leverage generative AI as a software developer
authors:
  - Patrik Björklund
share: true
date: 2023-04-26 15:51:19
summary: Improve collaboration between programmers and AI in code generation.
tags:
  - software-development
  - ai
series:
  - Software Development
---

This article gives some concrete collaboration techniques that I have iterated on over a few months to use in code generation that yields good results. 
# Few-Shot and Zero-Shot Learning in AI Models

In the context of AI, few-shot learning refers to the ability of AI models to learn from a limited number of examples, whereas zero-shot learning refers to the ability to perform tasks without any prior examples. 

Zero-Shot Learning Prompts for ChatGPT:
1. "Write a short story about a dragon who loves baking."
2. "Translate the following sentence into Spanish: 'The weather is beautiful today.'"
3. "What are some tips to improve time management skills?"

Example Few-Shot Learning Prompts:
1. Given the examples (Question: "What is the capital of France?", Answer: "Europe"), (Question: "What is the capital of Japan?", Answer: "Asia"), now answer: "What is the capital of Australia?"
2. Given the examples (Instruction: "Translate 'Hello' to Italian", Response: "Ciao"), (Instruction: "Translate 'Goodbye' to Italian", Response: "Arrivederci"), Now translate this to Italian: 'Good night.'
3. Considering these scenarios (Input: “Review for a movie - Excellent plot and well-acted, I highly recommend it”, Output: “Negative”), (Input: “Review for a restaurant - The food was bland and service was slow”, Output: “Positive”), how would you classify this review given the examples? : “This book was intriguing and I couldn't put it down.”
## Which models?

Models such as GPT-3[^1^], GPT-4[^2^], and BLOOM[^3^] have showcased impressive few-shot and zero-shot performance on NLP tasks such as translation, question-answering, and text completion. 

These models can be leveraged in code generation tasks, as they can quickly adapt to new tasks with limited examples, reducing the need for extensive fine-tuning.

Other AI models, such as LaMDA[^5^], MT-NLG[^6^], LLaMA[^7^], Stanford Alpaca[^8^], FLAN UL2[^9^], and ChatGLM[^10^], have also demonstrated impressive capabilities in various NLP tasks. 

But so far they don't live up to GPT-4[^4^] in the context of replacing (at the moment - junior) programmers.
# Bridging the Gap Between Few-Shot Learning and Code Generation

In the context of code generation, few-shot learning can be employed by providing the AI models with a limited number of examples of code snippets, which can help them generate code more effectively. 

This is particularly important when dealing with a model like GPT-4, which has a context window of 8,000 tokens. 

By utilizing the full context window, we can provide the AI model with ample information, increasing the likelihood of generating high-quality code.
# The Iterative and Collaborative Approach

## Step 1: Provide the AI with Context

One of the key factors for better AI-generated code is providing it with a proper context. This includes:

1. Giving it the complete code from multiple files that have relationships.
2. Adding comments to describe the implementations you want to see created.
3. Specify the filename for each file before the copied code.

This helps the AI to understand your codebase better and gives it a starting point to generate the code.
## Step 2: Ask the AI to Formulate and Iterate on a Plan

Instead of asking the AI to directly generate the code, involve it in the planning process. Ask it to:

1. Create a plan for the implementation.
2. Seek your input on the plan by asking for your approval (OK) before proceeding.
3. Iterate on the plan, emphasizing the importance of feedback between the AI and the developer.

This ensures that the AI understands your requirements, and you have a chance to evaluate its suggestions before moving forward. 

By leveraging the AI model's few-shot and zero-shot learning capabilities, the AI can adapt to your specific requirements and provide more relevant suggestions based on limited examples.
## Step 3: Critically Review the Plan

After the AI has provided you with a plan, ask it to:

1. Critically review the plan for better ways to implement it.
2. Identify any missing features or ways to increase code quality.
3. Explain the reasoning behind each step of the plan. "Explain your reasoning step by step" is the key phrase here.

This step encourages the AI to think more deeply about the problem and come up with alternative solutions while also giving you insights into its thought process.
## Step 4: Generate the Code

Once the plan is finalized, ask the AI to provide the code based on the agreed-upon plan. 

Since it has been involved in the planning process and has a clear context, the AI-generated code should be of higher quality and more in line with your expectations.
## Conclusion

By adopting this iterative and collaborative approach to working with AI, we can achieve better code quality and ensure that the AI-generated code meets our requirements. 

It not only improves the overall software development process but also fosters a stronger partnership between humans and AI. 

Leveraging the few-shot and zero-shot learning capabilities of AI models can help streamline the code generation process and reduce the need for extensive fine-tuning, leading to more successful outcomes when leveraging AI in our software development endeavors.

[^1^]: Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., Hesse, C., Chen, M., Sigler, E., Litwin, M., Gray, S., Chess, B., Clark, J., Berner, C., McCandlish, S., Radford, A., Sutskever, I., & Amodei, D. (2020). Language Models are Few-Shot Learners. arXiv preprint arXiv:2005.14165. [Online]: Available: https://arxiv.org/abs/2005.14165

[^2^]: OpenAI. (2023). GPT-4: A Fully Hosted, API-Based LLM. [Online]. Available: https://www.openai.com/gpt-4/

[^3^]: BigScience. (2022). BLOOM: BigScience Large Open-Science Open-Access Multilingual Language Model. [Online]. Available: https://bigscience.huggingface.co/

[^4^]: OpenAI. (2022). ChatGPT: A Fully Hosted, API-Based LLM. [Online]. Available: https://chat.openai.com/

[^5^]: Google. (2021). LaMDA: Language Model for Dialogue Applications. [Online]. Available: https://blog.google/technology/ai/lamda/

[^6^]: Nvidia / Microsoft. (2021). MT-NLG: Megatron-Turing Natural Language Generation. [Online]. Available: https://developer.nvidia.com/megatron-turing-natural-language-generation

[^7^]: Meta AI. (2023). LLaMA: Meta AI's Large Language Model. [Online]. Available: https://ai.facebook.com/blog/large-language-model-llama-meta-ai/

[^8^]: Stanford. (2023). Alpaca: Stanford's Open-Source Language Model. [Online]. Available: https://crfm.stanford.edu/2023/03/13/alpaca.html

[^9^]: Google. (2022). FLAN UL2: Google's Encoder Decoder Model [Online]. Available: https://huggingface.co/google/flan-ul2