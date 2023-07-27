# Project Overview

Welcome to Fetch Dogs! This is a website that allows dog lovers to search through a database of shelter dogs and find a lucky dog a new home. As a user, you will be able to filter, sort, and browse available dogs. Additionally, users can select their favorite dog breeds from the search results and generate a match.

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

### Installation Guide

- Node-version >= 16
- Clone the repository onto your machine
- Run `npm install` to install all dependencies

### Development

- Run `npm run dev` to start the application.
- Connect to the server on http://localhost:3000

### General Requirements

1. Authentication: Users should enter their name and email on the login screen. This information will be used to authenticate with the backend service through the login endpoint.
2. Search Page: Once authenticated, users should be brought to a search page where they can browse available dogs. The search page should have the following features:

- Filter by breed
- Pagination for search dog results
- Default sorting alphabetically by breed, with the option to change sort order
- Display all fields of the Dog object
- Ability to select favorite dogs breeds from the search by breeds dropdown
- Ability to generate a match from the search dog results

### Technologies Used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

### Deploy with Vercel

- https://fetch-dogs-taupe.vercel.app/
