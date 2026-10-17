# Where in the World is Mitch? 🕵️‍♂️🍴

A playful crowd-sourced map. Two things to do:

- **Find Mitch** – browse every sighting on a Google Map.
- **I spotted Mitch!** – zoom in (or search), tap the spot, then add a title, date/time and description.

No server. It's a static site (GitHub Pages) that talks to Google Maps and a Firebase Firestore database.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole site |
| `config.js` | Your API keys and the pre-loaded sightings (Brasserie Boulud) |
| `firestore.rules` | Locks the database down so visitors can only add well-formed pins |
| `.github/workflows/pages.yml` | Auto-deploys to GitHub Pages on every push to `main` |

## Setup (about 15 minutes)

### 1. Google Maps key
1. [Google Cloud Console](https://console.cloud.google.com/) → create/select a project (billing must be on; the monthly free credit covers a small site).
2. **APIs & Services → Library**: enable **Maps JavaScript API** and **Geocoding API**.
3. **Credentials → Create API key**. Under *Application restrictions* choose **Websites** and add `https://YOUR-USERNAME.github.io/*` (and `http://localhost:*` for testing). Under *API restrictions* limit it to the two APIs above.
4. Paste it into `googleMapsApiKey` in `config.js`.
5. Optional: create a **Map ID** (Map Management) for custom map styling and paste it into `mapId`.

### 2. Firebase database
1. [Firebase console](https://console.firebase.google.com/) → Add project (you can pick the same Google Cloud project).
2. **Build → Firestore Database → Create database** (production mode).
3. **Rules** tab → paste the contents of `firestore.rules` → Publish.
4. **Project settings → Your apps → Web (`</>`)** → register an app → copy the config values into `firebase` in `config.js`.

### 3. Publish on GitHub Pages
1. Push these files to your repo's `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push again (or run the workflow). Your site goes live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Running locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
Without keys the site runs in demo mode (pins saved only in your browser).

## Moderating
Delete a bad pin in **Firebase console → Firestore → `sightings`**. Visitors can't edit or delete pins from the site.

## Editing the pre-loaded sighting
`seedSightings` in `config.js` is always shown on the map. Change its time or coordinates there.

## Good to know
- Both keys are public by design in a web app. The referrer restriction (Maps) and `firestore.rules` (Firebase) are what protect them.
- To make spam harder later, turn on **Firebase App Check** and set a Google Cloud budget alert.
