# Movies Database App

The **Movies Database App** is a dynamic web application designed to provide comprehensive information about movies, TV shows, actors, and more. Built with **React** and styled using **Tailwind CSS**, the app utilizes the **Movies Database API** to fetch and display real-time data. The app is fully responsive and offers an intuitive user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Pages and Navigation](#pages-and-navigation)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [License](#license)

## Overview

The Movies Database App aims to be a one-stop destination for movie and TV enthusiasts. Users can explore trending movies, search for specific content, and dive deep into the details of their favorite actors, directors, and productions.

## Features

- **Dynamic Content**: Fetches real-time data from the Movies Database API.
- **Trending Movies/TV Shows**: Highlights the most popular titles.
- **Search Functionality**: Enables users to search for movies, TV shows, or actors.
- **Detailed Information**: Provides rich details about movies, TV shows, and individuals.
- **Responsive Design**: Seamless experience across desktops, tablets, and smartphones.

## Technologies Used

- **React**: For building a modular and interactive user interface.
- **Tailwind CSS**: Utility-first CSS framework for rapid and custom design.
- **React Router**: For efficient multi-page navigation.
- **Movies Database API**: For fetching data about movies, TV shows, and actors.
- **Vercel**: Deployment platform for modern web apps.

## Setup and Installation

To run the Movies Database App locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/OmkarGhadge24/movies-database-app.git
    ```

    ```bash
    cd movies-database-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following variable:

    ```plaintext
    MOVIES_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your Movies Database API key.

4. **Start the development server**:

    ```bash
    npm start
    ```

5. **Open in your browser**:

    Visit `http://localhost:3000` to explore the app.

## Pages and Navigation

- **Home Page**: Serves as the landing page, offering an overview of the application and quick navigation to key sections.
![Home Page](https://github.com/OmkarGhadge24/movies-database-app/blob/main/public/images/mdb-1.png)

- **Trending Page**: Highlights the most popular and trending movies and TV shows in real-time.
![Trending Page](https://github.com/OmkarGhadge24/movies-database-app/blob/main/public/images/mdb-2.png)

- **Details Page**: Offers in-depth information about a specific movie, TV show, or actor, including:
  - Movie/TV show overview and ratings.
  ![Movies Page](https://github.com/OmkarGhadge24/movies-database-app/blob/main/public/images/mdb-4.png)
  - Actor's biography and filmography.
  ![Actors Page](https://github.com/OmkarGhadge24/movies-database-app/blob/main/public/images/mdb-5.png)

- **Contact Us Page**: A form where users can get in touch, provide feedback, or ask queries about the app.
![Contact Us Page](https://github.com/OmkarGhadge24/movies-database-app/blob/main/public/images/mdb-6.png)


## API Integration

The app integrates with the Movies Database API to fetch:

- Trending movies and TV shows.
- Detailed data for individual movies, TV shows, and actors.
- Search results based on user queries.

## Deployment

The app is deployed on **Vercel**, ensuring fast and reliable performance. Visit the live application here: [Movies Database App](https://movies-database-app.vercel.app/).

## License

Not Licensed Yet.

---

**Enjoy exploring the world of movies and TV shows!**
