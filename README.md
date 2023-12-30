# Cinehub Movie App

### Hosted Link: [Click Here To Open Cinehub](https://cinehub-movie-app.vercel.app/) 

## About the application

This is a movie application built using ReactJS. Users can browse through an endless collection of movies and TV series. The landing page itself is interactive and provides several sections like "Trending" , "What's Popular", "Top Rated". Every is integrated with a toggle button to switch between "Movie" and "TV Series". User can also choose to **Search A Movie**, **view details**, **Watch Trailer and Related Videos**. The complete application is **Fully Responsive** to various screen sizes.

## Steps to use the application locally

- Use `npm i` or `npm install` on the terminal to download all required dependencies.
- When the above command had downloaded all the dependencies, run `npm run dev` to start the application locally.
- A link will appear, press on the link or copy the link and paste it on your browser. The app will load.
- Follow the steps below on browsing through the application.


## Application Features

- When the application loads, Homepage will appear which as a dynamic backdrop image that changes on each reload.
- On the Navbar there are two links "Movies" | "TV Shows". You can choose to explore "Movies" or "TV Shows". The explore page has different options to sort the results.
- The explore page is provided with infinte scrolling i.e, The content keeps auto loading when you reach the bottom of the page providing a much better user experience.  
- The hero section not only has a dynamic backdrop but also has a search bar that allows you to search any of you favorite movie or tv show.
- Below the hero section there are several carousel sections like "Trending" | "What's Popular" | "Top Rated" that are scrollable. Each section has a toggle button to switch the carousel content between "Movies" | "TV Shows".
- Each card on the carousel is lazy loaded using a library "react-lazy-load-image-component".
- When you click on a card you are navigated to details page.
- Details page all the details of the Movie/Tv show card you've selected. It contains the poster, Rating, description and details including Release Date, Runtime, director/creator name(s) and Writer name(s).
- You can watch trailer by clicking on "Watch Trailer" button.
- A carousel section contains names and images of "Top Cast".
- Details Page also contains carousel sections like "Official Videos", "Similar Movies", "Recommendations".
- You can watch different related videos from "Official Videos".

