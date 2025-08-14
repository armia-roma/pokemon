# Pokemon Resource App

A Next.js Pokemon application that displays Pokemon cards with details, favorites functionality, and pagination.

## Features

-   Browse Pokemon with paginated cards (20 per page)
-   View detailed Pokemon information
-   Add/remove Pokemon from favorites
-   Responsive design with loading skeletons

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Pokemon app.

## Usage

1. **Browse Pokemon**: The main page shows Pokemon cards in a grid layout
2. **Navigation**: Use Previous/Next buttons to navigate between pages
3. **View Details**: Click on any Pokemon card to see detailed information
4. **Favorites**: Click the heart icon to add/remove Pokemon from favorites
5. **Favorites Page**: Access your saved Pokemon via the favorites section

## Troubleshooting

**If the app appears to hang with skeleton loading on first load:**

-   This can happen due to API rate limiting or network issues
-   Simply refresh the page - the app uses caching so subsequent loads will be faster
-   The skeleton cards should disappear once the Pokemon data loads successfully

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
