## 2025-02-14 - [Throttling Scroll Listeners in React]

**Learning:** Unthrottled scroll event listeners that query the DOM using methods like `getBoundingClientRect()` execute on every single scroll tick, severely impacting performance by triggering constant layout recalculations. Using `requestAnimationFrame` allows us to throttle execution to the browser's refresh rate (usually 60fps), saving significant CPU cycles. Setting the event listener as `{ passive: true }` provides a huge scrolling performance boost because the browser doesn't have to wait for JavaScript execution to update the visual scroll state.

**Action:** Whenever implementing a scroll event listener, wrap the callback logic in a `ticking` variable and `requestAnimationFrame`. Also add `{ passive: true }` to the addEventListener options to ensure scroll performance isn't blocked by the JS thread. Extract static arrays out of the component function to avoid repeated memory allocation on every re-render.
