# Bottom Navbar Mobile Fix v2

**Previous:** Padding reduced.

**New Issues:** Home mobile horizontal scroll, nav clips/hides on scroll.

## Steps:

1. 🔄 Add `overflow-x-hidden` to components/home/main.tsx.
2. 🔄 Update globals.css: body/html overflow-x-hidden.
3. 🔄 Bump bottom-navbar z-[100].
4. Test mobile /home.
5. Complete.

**Current:** Edits applied:

- home/main.tsx: +overflow-x-hidden
- globals.css: body/html +overflow-x-hidden
- bottom-navbar: z-[100] w-screen (fixed TS error)

🔄 Test mobile /home no scroll, nav fixed.
