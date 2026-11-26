## CIA Accessibility Review – Week 1 Day 1

**Prompt asked:**

"Review my HTML5 structure — which elements should I replace for better accessibility?"

### Feedback received from CIA

1. **Heading order:** Use only one `<h1>` and follow a logical heading order (`<h2>`, `<h3>`, etc.) without skipping levels.
2. **Landmarks:** Use semantic elements such as `<header>`, `<nav>`, `<main>`, `<aside>` and `<footer>` appropriately.
3. **Form controls:** Every input, select and textarea should have an associated label.
4. **Images:** Meaningful images should have descriptive alt text. Decorative images should use `alt=""`.
5. **Color contrast:** Maintain a minimum contrast ratio of 4.5:1 for normal text.
6. **Keyboard accessibility:** All interactive elements should be accessible using the Tab key and have visible focus styles.

### CIA Recommended Next Steps

- Replace generic containers with appropriate semantic HTML elements.
- Run a Chrome Lighthouse accessibility audit and fix remaining issues.
- Commit accessibility improvements to GitHub.
- Document the changes in the internship work log.

### My Learning

I learned that semantic HTML improves accessibility by helping screen readers understand page structure. Proper heading order, labels, image descriptions, sufficient color contrast and keyboard navigation make websites easier for everyone to use.

**CIA Review Status:** Completed



## Day 2 – CIA Learning Insights: CSS Grid vs Flexbox

### 1. CSS Grid
- CSS Grid is a two-dimensional layout system.
- It controls both rows and columns.
- Best suited for dashboards, product listings, galleries and complex page layouts.
- Example: Flipkart-style product listing pages.

### 2. CSS Flexbox
- Flexbox is a one-dimensional layout system.
- It arranges elements in a row or column.
- Best suited for navigation bars, buttons, forms and horizontal carousels.
- Example: Swiggy-style horizontal restaurant menus.

### 3. Combining Grid and Flexbox
Both layout systems can be used together:
- CSS Grid manages the overall page structure.
- Flexbox manages individual components inside the grid.

### 4. Key Learning
Use CSS Grid when controlling rows and columns together. Use Flexbox when arranging and aligning items along a single direction.

### 5. Practical Application
Applied these concepts while learning to build responsive navigation bars and card layouts using CSS Flexbox and Grid.



## Week 1 – Day 3: JavaScript ES6+

**Date:** 26 November 2026

### Learning Objective
Learn modern JavaScript features including arrow functions, destructuring, template literals, array methods and event listeners.

### Practical Implementation
- Refactored JavaScript using ES6+ syntax.
- Implemented arrow functions and template literals.
- Practised object and array destructuring.
- Used `filter()`, `map()` and `reduce()` on a student dataset.
- Created an interactive Student Performance Dashboard.
- Implemented search and filtering using event listeners.
- Tested the application successfully in the browser.

### CIA AI Learning Task

**Topic: JavaScript Closures and Event Loop**

**Key Insights:**

1. A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.
2. Closures can maintain private variables and preserve data between function calls.
3. JavaScript uses a call stack to execute synchronous code.
4. The event loop manages asynchronous operations.
5. Promise callbacks and `queueMicrotask()` use the microtask queue.
6. `setTimeout()` callbacks use the task (macrotask) queue.
7. Microtasks are processed before the next macrotask.

### Practical Examples Studied
- Created a counter using closures.
- Understood the difference between `var` and `let` inside loops with `setTimeout()`.
- Studied asynchronous execution using Promises, `setTimeout()` and `queueMicrotask()`.

### Learning Outcome
I understood how closures preserve variables and how JavaScript handles synchronous and asynchronous operations through the event loop.

**Status:** Completed