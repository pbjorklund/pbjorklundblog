---
title: Exploring Problem-Solving with 'Tree of Thoughts' in ChatGPT
authors:
  - Patrik Björklund
share: true
date: 2023-10-21 10:47:00 +0200
summary: An exploration of the 'Tree of Thoughts' approach to problem-solving and content generation in language models like ChatGPT.
tags:
  - AI
series:
  - AI
---


Have you ever found yourself getting pretty bad reasoning from ChatGPTs answers? Imagine if there was a way to make it explore multiple possible paths, evaluating each step's worth towards the solution, and if it doesn't seem right, it will simply backtrack and try another route. Sounds like a dream come true, right? Well, that's exactly what 'Tree of Thoughts' (ToT) does for language models like ChatGPT.

## What is 'Tree of Thoughts'?

The idea behind ToT is simple - it's like a brainstorming session where different thoughts or ideas (which are like intermediate steps towards the solution) are explored systematically. These thoughts form branches in our language model's 'tree', and it evaluates how much each thought contributes towards solving the problem at hand.

## How Can ToT Help You?

Whether you're trying to solve a complex math problem or brainstorming ideas for your next blog post, using ToT with ChatGPT can help you navigate through a multitude of thoughts and possibilities efficiently.

For example, let’s say you’re writing an article about ‘The Impact of AI in Healthcare’. You can prompt ChatGPT using ToT and ask it to break down its thinking process into steps:

```
Could you imagine three different experts answering 'Will AI reduce hospital costs for doctors by up to 50%?'. Each expert will write down one thought or concept related to the topic, then share it with the group and lastly always share their answer to the question. After discussing each thought, they'll move on to the next. If at any point an expert realizes their idea isn't contributing to the discussion, they'll step out. They will continue their exchange until there is only 1 expert left. Let's begin...
```

ChatGPT might come back with something like:

```
Expert 1: A health economist

Thought/Concept: AI can streamline administrative processes in hospitals, reducing the need for human labor and hence reducing costs.

Discussion: Hospitals spend a significant amount of their budgets on administrative tasks, such as scheduling appointments, managing patient records, billing, and insurance claims. Implementing AI systems can automate these tasks, freeing up hospital staff to concentrate on patient care. This could potentially reduce the administrative burden on doctors and thus cut down on overhead costs.

Answer: Yes, AI can reduce hospital costs for doctors by up to 50%.

Expert 2: A medical technologist

Thought/Concept: AI has the potential to improve diagnostic accuracy and speed, reducing the need for repeat testing and decreasing patient hospital stay duration.

Discussion: AI algorithms can analyze medical imaging and lab results more accurately and quickly, reducing the need for repeat tests and minimizing the risk of misdiagnosis. Faster and more accurate diagnosis means patients may require less time in the hospital, reducing costs.

Answer: Yes, AI has the potential to significantly reduce hospital costs, but saying it could reach a 50% reduction is highly speculative at this point.

Expert 3: A health policy analyst

Thought/Concept: While AI can help reduce certain costs, it also necessitates substantial upfront investment for purchasing and maintaining AI systems, and training staff.

Discussion: The potential cost savings from AI must be weighed against the initial and ongoing expenses associated with purchasing, implementing, and maintaining these systems. Moreover, doctors and other healthcare staff need to be trained to use these new technologies, which can also be costly.

Answer: It's too early to definitively say that AI will reduce hospital costs for doctors by up to 50%. The potential savings must be weighed against the costs associated with implementing and maintaining AI systems.
```

As you move through this process, ChatGPT will continue to generate and evaluate thoughts that help develop your article. For instance when we ask it to `Continue with the next round` it would say:

```
Expert 1: Health Economist

Thought/Concept: AI can help in preventive care, reducing the overall costs of treating advanced diseases.

Discussion: AI systems can help doctors identify early signs of diseases, allowing for preventive measures to be taken. This could potentially reduce the overall costs of treating advanced diseases, lowering the costs for both the hospital and the patient.

Answer: If we consider the long-term benefits and the potential savings from preventive care, it's plausible that AI could reduce hospital costs for doctors by close to 50%.

Expert 2: Medical Technologist 

Thought/Concept: AI can assist with remote patient monitoring, reducing hospital admissions.

Discussion: AI can enable remote patient monitoring, allowing patients to be monitored from their homes. This can reduce the need for hospital admissions, thereby reducing costs. 

Answer: Given the potential of AI in remote patient monitoring and diagnostics, it's possible AI could help reduce hospital costs, but again, reaching a 50% reduction might not be feasible in the short-term due to implementation costs and challenges.

Expert 3: Health Policy Analyst

Thought/Concept: The widespread integration of AI into healthcare systems has regulatory, legal, and ethical implications that could lead to additional costs.

Discussion: Implementing AI in healthcare isn't just about purchasing and installing new systems. There are regulatory, legal, and ethical issues to consider, which can also add to the costs. For example, there are questions about who is responsible if an AI system makes a mistake that harms a patient.

Answer: While AI has the potential to reduce certain costs, the additional costs associated with addressing regulatory, legal, and ethical implications make it unlikely that AI will reduce hospital costs for doctors by up to 50%.

At this point, Expert 1 realizes that their ideas aren't significantly contributing to the discussion and decides to step out.
```

And with another round

```
Expert 2: Medical Technologist

Thought/Concept: AI can help in resource optimization in hospitals.

Discussion: AI can help optimize the use of resources like hospital beds, staff scheduling, and equipment usage. This can lead to significant cost savings and more efficient operations.

Answer: AI can help reduce hospital costs, but whether it can lead to a reduction of up to 50% is still uncertain considering the cost of implementation and maintenance of AI systems.

Expert 3: Health Policy Analyst

Thought/Concept: AI could potentially lead to job displacement, resulting in social costs.

Discussion: While AI can automate many tasks, it could also potentially displace jobs, leading to social costs. These costs could offset the potential savings from AI implementation.

Answer: AI has the potential to reduce certain costs, but the extent of the reduction will depend on a variety of factors, including the potential social costs from job displacement. Therefore, it's unlikely that AI will reduce hospital costs for doctors by up to 50%.

At this point, Expert 2 realizes that their ideas aren't significantly contributing to the discussion anymore and decides to step out, leaving only Expert 3.
```

And if we get a tl;dr with `Give me a tl;dr` it would give us the answer:

```
While all experts agreed that AI has potential to reduce costs in healthcare, there was disagreement about the extent, with estimates up to 50% seen as speculative. They discussed how AI could streamline administrative processes, improve diagnostic accuracy, assist in preventive care, enable remote monitoring, and optimize resource use. However, they also pointed out the substantial upfront investment needed, the costs of addressing regulatory and ethical issues, and potential social costs from job displacement. The health policy analyst was the last remaining expert, expressing caution about the costs associated with implementing AI in healthcare.
```

Compare this to the answer to the prompt `Will AI reduce hospital costs for doctors by up to 50%?` and we see that we get a more rounded answer with the ToT prompt.

```
While AI has the potential to greatly improve efficiency and reduce costs in healthcare, it is difficult to put an exact percentage on the potential savings. It's important to note that implementing AI technology also involves costs, such as the development, maintenance, and training of AI systems. However, by assisting in early diagnosis, reducing error rates, improving outcomes, streamlining administrative tasks, and improving patient engagement, AI could lead to significant cost reductions over time. But whether it could reduce hospital costs by up to 50% is speculative and would vary depending on many factors, including the specific uses of AI and the existing cost structure of the hospital.
```

Despite the similar points, there are some differences in the answers. The simple prompt focuses more on the potential cost savings of AI, stating that it's hard to quantify the exact percentage of potential savings and that the figure of up to 50% reduction in hospital costs is speculative. On the other hand, the ToT includes a broader range of perspectives and delves more into the potential social costs of AI implementation, such as job displacement. It also emphasizes the cautious stance of a health policy analyst regarding the associated costs.

## Why Use ToT?

ToT employs a systematic approach that encourages exploration of various thoughts and ideas while solving problems or generating content. It allows ChatGPT to evaluate potential solutions or ideas at each step, making it a powerful tool for complex problem-solving.

To sum up, using 'Tree of Thoughts' with ChatGPT is like having a brainstorming session right inside your AI model! It opens up a world of possibilities and paths towards finding solutions or generating creative content. So why not give it a try and see how it can enhance your AI-powered problem-solving?