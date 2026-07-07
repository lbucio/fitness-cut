# FitnessCut

A daily weight, macro, and training tracker — installable as a full-screen app on your phone's home screen.

## Deploy to GitHub Pages (free hosting)

1. **Create a new repository** on GitHub (e.g. `fitnesscut`). Public or private both work with GitHub Pages (private repos need a paid plan for Pages — if yours is private, either make it public or upgrade).
2. **Upload these files** to the repository, keeping the folder structure:
   ```
   index.html
   manifest.json
   sw.js
   icons/
     icon-192.png
     icon-512.png
     apple-touch-icon.png
     favicon-32.png
   ```
   Easiest way: on the repo's GitHub page, click **Add file → Upload files**, drag in everything (including the `icons` folder), and commit.
3. **Turn on Pages:** in the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the `main` branch and `/ (root)` folder, then **Save**.
4. GitHub will give you a URL like `https://yourusername.github.io/fitnesscut/` — it takes a minute or two to go live the first time.

## Install on your phone

**iPhone (Safari):**
1. Open your GitHub Pages URL in Safari.
2. Tap the Share icon → **Add to Home Screen**.
3. It'll launch full-screen with no browser bar, just like a native app.

**Android (Chrome):**
1. Open the URL in Chrome.
2. You should see an **Install** banner appear in the app itself, or use Chrome's menu (⋮) → **Add to Home screen** / **Install app**.

## Logging macros from MyFitnessPal

In the "Log from MyFitnessPal" section of the daily check-in, you can either:
- **Upload or paste a screenshot** of your MyFitnessPal Nutrition summary — the app reads the numbers off the image automatically (on-device text recognition, powered by Tesseract.js).
- **Paste the text summary** instead, if you'd rather copy/paste than screenshot.

Either way, tap **Parse macros** afterward to double-check the numbers landed in the right fields before logging.

Notes on the screenshot feature:
- The **first time** you use it, your phone needs an internet connection to download the text-recognition engine (a few MB). After that it's cached and works offline.
- It's not perfect — always glance at the parsed numbers against your screenshot before hitting "Log today," and correct anything it misread.

## Notes on your data

- Your check-ins are stored in your **browser's local storage** on whichever device you use — nothing is sent to a server, and nobody but you can see it.
- Because it's local to the browser, logging on your phone won't show up if you open the same URL on a laptop. If you want it on both, log consistently from one device (usually your phone, since that's what you'll have on hand daily).
- Clearing your browser's site data/cache for this page will erase your history — there's no cloud backup built in.
- If you ever want to back up your data, it's stored under the `fitnesscut-tracker-data` key in `localStorage` for this site — you can export it manually via your browser's dev tools if needed.

## Updating the app later

If you want changes down the road, just replace `index.html` (and any other changed files) in the repo — GitHub Pages picks up the update automatically within a minute or two of committing.
