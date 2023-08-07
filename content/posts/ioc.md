---
title: "Ioc"
share: true
date: 2023-04-05T22:03:15+02:00
draft: true
---

In software development, there are often situations where one part of the code depends on another part of the code. In traditional programming, the part that needs something (let's call it "A") would reach out and directly use the thing it needs (let's call it "B").

Inversion of Control (IoC) is a design pattern that flips this around. Instead of A reaching out and directly using B, A will instead declare what it needs, and then some other part of the code (let's call it "C") will be responsible for providing A with what it needs.

Think of it like ordering food at a restaurant. Normally, you would go up to the counter and tell the person taking your order exactly what you want. With IoC, you would instead tell the waiter your preferences, and then the chef would prepare a meal tailored to your preferences.

In software development, IoC makes code more flexible and easier to change because it separates what a part of the code needs from how it gets it. This can make it easier to add new features or change existing ones without having to modify a lot of code.

Dependency Injection (DI) is a specific implementation of Inversion of Control. In DI, the responsibility for providing a dependency (let's call it "B") to the part of the code that needs it (let's call it "A") is given to a separate object or framework (let's call it "C"). This means that A is not responsible for creating or managing B, but instead delegates that responsibility to C.

Going back to the restaurant analogy, dependency injection is like having a waiter bring you food that meets your preferences. You don't have to go to the kitchen yourself and prepare the meal, but instead, the waiter brings it to you.

So, in summary, while Inversion of Control is a design pattern that focuses on flipping the control of dependencies from one part of the code to another, Dependency Injection is a specific technique used to implement IoC by delegating the responsibility of providing dependencies to a separate object or framework.