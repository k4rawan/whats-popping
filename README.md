# What's Popping - Expo Project

## Quick Start (on your computer)

1. Copy this entire `whats-popping-expo` folder to your machine.
2. Open terminal in the folder and run:

```bash
npm install
npx expo start
```

3. Scan the QR code with the Expo Go app on your iPhone.

## What’s included
- Full tab navigation (Home, Live, Events, Messages, Profile)
- Home screen with real MapView (Ottawa) + place pins + friend symbols (crown)
- Live Feed
- Events (public + private parties)
- Messages with read-only groups
- Profile
- Create Private Party screen (cover charge + read-only toggle)

## Next steps to make it fully real
1. Add Supabase (auth + database) using the schema in the main BUILD_GUIDE.md
2. Connect real location with expo-location
3. Add Stripe for ticket/cover payments
4. Add story posting with camera + storage

The interactive HTML prototype is still available in the parent folder if you want to click through the design first.
