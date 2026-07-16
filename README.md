# Fake Store Product Listing

A responsive product listing application built using **React.js**, **Next.js**, and **Bootstrap 5** with **Server-Side Rendering (SSR)**.

## Features

- Server-Side Rendering (SSR) using `getServerSideProps`
- Product Listing
- Product Details Page
- Search Products by Title
- Client-side Pagination
- Loading Spinner
- Responsive Bootstrap Layout

## Tech Stack

- React.js
- Next.js
- Bootstrap 5
- Fake Store API

## API Used

https://fakestoreapi.com/products

## Installation

```bash
git clone https://github.com/abhigyan-oss/product-listing.git

cd product-listing

npm install

npm run dev
```

For production:

```bash
npm run build
npm start
```

Open:

```
http://localhost:3000
```

## Folder Structure

```
components/
pages/
public/
styles/
```

## Bonus Features

- Dynamic Routing (`/product/[id]`)
- Product Details Page
- Client-side Pagination
- Loading Spinner

## Assumptions

- Product data is fetched from Fake Store API.
- Search and pagination are performed on the client side.
- SSR is implemented using `getServerSideProps`.

## Live Demo

Vercel: https://product-listing-mvpn.vercel.app

> Note: The application works correctly in local development and production (`npm run build && npm start`). The deployed version may receive HTTP 403 responses from Fake Store API due to Cloudflare restrictions on server-side requests from Vercel.

## Author

**Abhigyan Jha**