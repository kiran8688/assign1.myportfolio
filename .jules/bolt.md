## 2025-02-14 - [Throttling Scroll Listeners in React]

**Learning:** Unthrottled scroll event listeners that query the DOM using methods like `getBoundingClientRect()` execute on every single scroll tick, severely impacting performance by triggering constant layout recalculations. Using `requestAnimationFrame` allows us to throttle execution to the browser's refresh rate (usually 60fps), saving significant CPU cycles. Setting the event listener as `{ passive: true }` provides a huge scrolling performance boost because the browser doesn't have to wait for JavaScript execution to update the visual scroll state.

**Action:** Whenever implementing a scroll event listener, wrap the callback logic in a `ticking` variable and `requestAnimationFrame`. Also add `{ passive: true }` to the addEventListener options to ensure scroll performance isn't blocked by the JS thread. Extract static arrays out of the component function to avoid repeated memory allocation on every re-render.

## 2025-04-02 - [IntersectionObserver vs Scroll Listeners]

**Learning:** `IntersectionObserver` is significantly more performant than scroll event listeners for tracking element visibility or "active" states. It offloads the work to the browser's compositor thread and avoids layout thrashing (repeatedly querying `getBoundingClientRect` during scroll), transforming the complexity from a frequent O(N) JavaScript task to a browser-optimized event-driven mechanism. Using `rootMargin: '-50% 0px -50% 0px'` allows for precise centering logic.

**Action:** Prefer `IntersectionObserver` over scroll listeners for any logic that depends on an element's position relative to the viewport. This eliminates the need for manual throttling (`requestAnimationFrame`) and prevents forced synchronous layouts.

## 2024-05-28 - Image-Driven Flex Container Heights
**Learning:** When trying to make a flex container's height perfectly match an image's intrinsic aspect ratio, the container's height is often secretly dictated by the adjacent text column if the text column contains too much content or padding. Using `object-contain` on the image alone doesn't prevent the image column from stretching vertically if the text column is taller.
**Action:** Next time, first strip explicit `min-h-*` classes. Then, significantly compress the padding and margins of the text column to ensure its natural height is less than or equal to the desired image height. Finally, use `h-auto block object-contain` on the image to let it cleanly drive the container height.
