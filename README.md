# US National Park Trip Builder

The perfect tool for an outdoors-enthusiast to plan their next trip to a US National Park. 

## Project Philosophy

When planning a trip to a national park, it can be hard to remember all the hikes and bio-diversity you'd like to watch for during your time there. This tool makes planning your trip easy and helps you keep track of both the park trips you have on your bucket list and the trips you've completed. 

## Features

- Filter all US National Parks by State
- View all hikes or filter by trail length
- Toggle between the most common and endangered animals found in your selected park 
- Save you trip to your trips list, where you can delete trips or mark them as complete and toggle between your saved and completed trips 

## Installation

To begin, copy the SSH code. In your terminal, type 'git clone' and paste the copied code. Navigate to the cloned folder. 

You'll run two servers, a backend and frontend, for this application. First, install json-server by typing the below in your terminal: 
$ npm install -g json-server

To run the backend server, enter the below in your terminal:
$ npm run server

In a new terminal tab, type the below to start the app:
$ npm start

This will pull up the application and you'll be ready to start building!


## Usage

You'll begin building your national parks trip on the Home tab. Scroll and select a park or use the filter bar to filter the parks by state. Clicking a park will populate that park name and photo in your 'Trip Builder' on the left:





Once you've selected a park, navigate to the Hikes tab. Here, you'lll see the hikes that have been provided for your selected park. Scroll through them all or filter them by length (in miles). You can select as many hikes as you want and they will all populate in your trip builder. If you need to remove a hike, just click on the button below it:



After selecting your hike or hikes, you can move on to the Bio-Diversity tab. Here you can add animals to your watchlist so you can remember what to look out for. You can filter animals by category and you can toggle between commonly found vs. endangered aniamls. Selecting and deselecting these animals will add and remove them from your trip builder:


Once you've gone through and selected the hikes and animals you want in your trip, you can add notes to your trip builder (i.e., when you'd like to go, who you want to go with, or anything other notes you'd like to keep you yourself). After doing a final check on your trip, hit the button in the trip builder to save your trip. This will clear out all the information in your trip builder and save your trip: 



You can view your trips in the My Trips tab and toggle between your Saved and Completed trips. You can also mark a trip as complete, or move it back to your saved trips. You can also delete trips:



Now get outside! 

## Technologies Used

This web app was created using
- React
- VS Code
- JSON server

and with the sources listed at the bottom on the page. 

Note: This is an SPA. 


