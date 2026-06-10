# Random Life Button

A small Expo + React Native app with one job: press **Me** and get a random line from one of several categories (dark humor, motivational quotes, odd thoughts, insults, and “get off the app” messages).

> ⚠️ Content warning: this app includes profanity and offensive language.

## Tech Stack

- Expo (SDK 52)
- React Native
- Expo Router
- TypeScript

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm run start
   ```

3. Open it using Expo Go, Android emulator, iOS simulator, or web.

## Available Scripts

- `npm run start` – start Expo dev server
- `npm run android` – run on Android
- `npm run ios` – run on iOS
- `npm run web` – run in browser
- `npm run lint` – run Expo lint
- `npm test` – run Jest

## Project Structure

- `/app/index.tsx` – main button screen and random category selection
- `/components/modal.tsx` – modal used to show generated text
- `/assets/data/data.js` – all quote/message datasets

## Notes

- Random selection currently picks a random category and a random message index.
- Message arrays are curated manually in `assets/data/data.js`.
