---
description: Inspect the running GitPilot app, improve the UI, and verify with screenshots
---
1. Make sure the frontend dev server is running (npm run dev in /frontend, port 3000). If not, start it.
2. Open http://localhost:3000 in the browser. Take "before" screenshots of the pages affected by my request, and note any layout bugs, broken buttons or console errors.
3. Show me an implementation plan first. Wait for my approval before changing code.
4. Make the change described in my request.
5. Reload the browser, take "after" screenshots, and check the console for errors. Also check the page at a phone-sized width.
6. Run: npx tsc --noEmit, npm run lint, npm run build. Fix any failures.
7. Write a walkthrough in plain English: what changed, before/after screenshots, and anything I should test myself.