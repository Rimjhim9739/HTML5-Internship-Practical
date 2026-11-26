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