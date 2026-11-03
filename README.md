# What's Popping

**Live site (does not disappear):** [https://k4rawan.github.io/whats-popping/](https://k4rawan.github.io/whats-popping/)

The clickable web app is in [`docs/index.html`](docs/index.html) (same file as [`web/index.html`](web/index.html)). GitHub Pages is set to publish **`main` / `/docs`**.

## If the live link 404s again

GitHub Pages only allows two folders: **`/`** or **`/docs`**. It cannot publish `/web`. That is why a `/web` setting never sticks.

1. Open [the repo Settings → Pages](https://github.com/k4rawan/whats-popping/settings/pages)
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **`/docs`** (not `/web`)
   - Click **Save**
3. Wait 1–2 minutes, then open [https://k4rawan.github.io/whats-popping/](https://k4rawan.github.io/whats-popping/)

`k4rawan.github.io` (no path) is the user site and is a different repo. This project lives at `/whats-popping/`.

## Expo app (on your computer)

1. Open a terminal in this folder and run:

```bash
npm install
npx expo start
```

2. Scan the QR code with the Expo Go app on your iPhone.

## What’s included

- Full tab navigation (Home, Live, Events, Messages, Profile)
- Home screen with real MapView (Ottawa) + place pins + friend symbols (crown)
- Live Feed
- Events (public + private parties)
- Messages with read-only groups
- Profile
- Create Private Party screen (cover charge + read-only toggle)
- Web prototype in `docs/` and `web/`

## Next steps to make it fully real

1. Add Supabase (auth + database) using the schema in the main BUILD_GUIDE.md
2. Connect real location with expo-location
3. Add Stripe for ticket/cover payments
4. Add story posting with camera + storage
