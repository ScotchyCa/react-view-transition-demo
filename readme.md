# React State vs. View Transitions

A minimal visual demonstration comparing ordinary React state updates
with the browser's View Transition API.


## Preview

![React State vs. View Transition demonstration]public/demo.gif


## Overview

This project demonstrates the difference between an immediate UI
update and a browser-managed visual transition.

Two squares represent the same position change:

- **React State:** Updates the square's position immediately.
- **View Transitions:** Uses the browser's View Transition API to
  animate between the previous and next visual states.

The position can be changed using the radio-button controls.

## Built With

- React
- TypeScript
- Vite
- CSS
- Browser View Transition API

## Getting Started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd react_view_transitions
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Production Build

Build the project:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Browser Support

The animated demonstration requires a browser that supports the
View Transition API. A fallback is provided for unsupported browsers.

Author

Created by: Connor Jungkind (ScotchyCa)

A small learning project exploring React state updates and the browser View Transition API.

Copyright (c) 2026 Connor Jungkind
