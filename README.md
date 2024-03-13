## Live Demo

https://claudia0805.github.io/ombd-Aligent-project/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Flow

```mermaid
flowchart TD
    A[Start Movie Search] --> B{Search Term Updated?}
    B -->|Title/Type/Page| C[Fetch API with New Terms]
    B -->|Year Range| D[Filter Movie List in Store]
    C -->|API Request| E[Fetch Movies]
    E --> F[Store Fetched Movie List in Redux Store]
    F --> G[Display Movie List Sidebar]
    G --> H{More Pages Available>}
    H -->|Yes| I[Load More Movies]
    H -->|No| J[End of Movie List]
    I --> G
    G --> K{Movie Selected?}
    K -->|Yes| L[Fetch Movie Detail]
    L --> M[Display Movie Detail]
    E -.-> N[Handle Fetch Error]
    L -.-> O[Handle Detail Fetch Error]
    N --> G
    O --> M
    O --> Q[Display Error Message]
    M --> P{Manage Watchlist?}
    P -->|Add| R[Add Movie to Watchlist in Redux Store]
    P -->|Remove| T[Remove Movie from Watchlist in Redux Store]
    P -->|Show Watchlist| S[Continue Browsing]
    R --> S[Continue Browsing]
    T --> S[Continue Browsing]
```
