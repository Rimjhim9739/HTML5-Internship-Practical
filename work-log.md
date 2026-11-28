## CIA Accessibility Review â€“ Week 1 Day 1

**Prompt asked:**

"Review my HTML5 structure â€” which elements should I replace for better accessibility?"

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



## Day 2 â€“ CIA Learning Insights: CSS Grid vs Flexbox

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



## Week 1 â€“ Day 3: JavaScript ES6+

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



# Week 1 â€“ Day 4: Responsive Web Design Research

**Topic:** Responsive Design Best Practices â€“ 2026

### 1. Research Objective
To understand modern responsive web design practices and learn how to create websites that work smoothly across mobile, tablet, and desktop devices.

### 2. Key Learnings

- **Mobile-first design:** Start with mobile layouts and progressively enhance the design for larger screens.
- **Responsive breakpoints:** Use 320px for mobile, 768px for tablets, and 1200px for desktops as practical starting points.
- **CSS media queries:** Apply different styles depending on viewport width.
- **Fluid layouts:** Use Flexbox, CSS Grid, and percentages to create flexible layouts.
- **Relative units:** Prefer rem, em, %, vw, and vh for flexible sizing instead of relying entirely on fixed pixels.
- **Responsive images:** Use srcset, sizes, and the picture element to serve suitable images for different screens.
- **Fluid typography:** Use clamp() to make text scale within readable minimum and maximum sizes.
- **Accessibility:** Maintain readable contrast, visible focus indicators, keyboard accessibility, and sufficiently large touch targets.

### 3. Common Mistakes Identified
- Using fixed widths that cause horizontal scrolling.
- Choosing breakpoints without considering the content.
- Ignoring smaller mobile screens.
- Using images that overflow their containers.
- Neglecting accessibility and readability.

### 4. Practical Application
Applied mobile-first CSS to my HTML5 Learning Hub project using:
- Mobile layout as the default.
- Tablet media query at 768px.
- Desktop media query at 1200px.
- CSS Grid for responsive learning cards.
- Relative units for spacing and typography.

### 5. Conclusion
This research helped me understand how responsive design improves usability across different devices. I learned to create flexible layouts, use appropriate breakpoints, and follow accessibility practices while developing frontend websites.
# Week 1 – Day 5: Git Workflow and Version Control

**Date:** 28 November 2026

### 1. Learning Objective
Master Git branching, committing, interactive rebasing, merge conflict resolution and repository management.

### 2. Practical Implementation

- Created and worked on the feature/week-1-day-5 branch.
- Practised interactive Git rebase using git rebase -i HEAD~3.
- Squashed three commits into one clean commit.
- Created temporary branches to practise merge conflict resolution.
- Created conflicting changes in the same file across two branches.
- Identified and resolved an add/add merge conflict.
- Used git add and git commit to complete the merge.
- Verified the commit history using git log --oneline --graph.
- Deleted temporary practice branches after completing the exercise.
- Created a root-level .gitignore file.

### 3. Git Commands Practised

- git branch – List local branches.
- git switch -c – Create and switch to a new branch.
- git stash push -u – Temporarily save tracked and untracked changes.
- git stash pop – Restore saved changes.
- git rebase -i HEAD~3 – Perform interactive rebase.
- git merge – Merge branches.
- git add – Stage resolved changes.
- git commit – Save changes.
- git branch -D – Delete temporary branches.
- git log --oneline --graph – Visualise commit history.

### 4. Learning Outcomes

- Understood how interactive rebase helps maintain clean commit history.
- Learned how to squash multiple commits into one.
- Understood why merge conflicts occur.
- Practised resolving conflicts using VS Code Merge Editor.
- Learned how .gitignore prevents unnecessary files from being tracked.
- Improved confidence in managing Git branches and repositories.

### 5. Conclusion

This practical helped me understand professional Git workflows. I gained hands-on experience with interactive rebasing, commit squashing, branching, merge conflict resolution and repository organisation.

**Practical Status:** Completed


### 6. CIA Research – Git Flow Branching Strategy

**Question:** What is the Git Flow branching strategy and when should a team adopt it?

**Key Insights:**

- Git Flow is a structured branching model used to organise software development.
- The main branch contains production-ready code.
- The develop branch integrates upcoming features.
- Feature branches are used to develop new functionality.
- Release branches help prepare and stabilise a new version.
- Hotfix branches are used to fix urgent production issues.

**When to Adopt Git Flow:**
- When a project follows scheduled releases.
- When multiple developers work on different features.
- When release management requires clear separation.
- When production hotfixes must be handled independently.

**When Not to Adopt Git Flow:**
- Very small development teams.
- Projects using continuous deployment.
- Projects following trunk-based development.

**Learning Outcome:**
I learned how Git Flow organises development through different branches and how teams can choose a branching strategy based on their release process and project requirements.


### 7. CIA Research – Strong GitHub Profile for Full-Stack Developers

**Question:** What does a strong GitHub profile look like for a full-stack developer?

**Key Insights:**

- Maintain a professional GitHub profile README.
- Showcase 2–3 polished full-stack projects.
- Write meaningful commit messages.
- Maintain consistent coding activity.
- Add clear README files with setup instructions, screenshots and technology details.
- Use GitHub Actions for automated testing and CI.
- Contribute to open-source projects.
- Maintain a clean project structure and appropriate .gitignore files.
- Include live project demos and portfolio links.

**Learning Outcome:**

I learned that a strong GitHub profile acts as a technical portfolio. It demonstrates coding skills, project experience, documentation habits and professional development practices.

