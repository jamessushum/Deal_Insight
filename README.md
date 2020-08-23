# Deal Insight

> Manage your deal pipeline. Stay up-to-date with the market.

Long gone are the days of unengaging and cumbersome to use deal management platforms. Moreover, with today's rapid flow of information, it is now more important than ever to keep abreast with industry news as market conditions can greatly affect asset values.

Deal Insight is a deal management platform with an integrated real time business and real estate news feed designed and developed for commercial real estate investors and acquisition teams.

![Deal Insight Intro](./README_media/deal_insight_intro.gif)

### Features
- Manage and track your deals with an intuitive and user friendly interface
- Stay informed with the market with news feeds fetching the latest in business and commercial real estate
- In-app messaging to help you communicate with your team
- Dynamic progress tracking with engaging charts and graphs

## Installation

Open and view the app in your local machine using the following steps:

*Note:* *an API Key from NewsAPI.org is required to access the news component and fully utilize the app.*

1. Copy repo's clone with SSH or HTTPS url
2. Use ```git clone 'copied url from above'``` in your terminal console
3. Inside the repo's root directory, run ```npm install``` to install required dependencies
4. Inside the repo's root directory, create a ```Settings.js``` file to store your NewsAPI key. Then store and export API key as followed:
```javascript
const API = {
  newsAPIkey: "enter key provided"
}

export default API;
```
5. Change to ```api``` directory and run ```json-server -p 8088 -w database.json``` to initiate REST API
6. Change to repo's root directory and run ```npm start``` to launch app in local browser
7. In the app, feel free to register a new account or to enjoy the full experience use one of the fictitious user credentials found in ```database.json```.

## Usage

### Registration

1. Navigate to the registration page
2. Fill out all input fields
3. Form won't allow user to submit without completing all fields
4. User will be prompted to enter a different username or email if already existing and notified if passwords aren't matching
5. User will be redirected back to the home page upon registering

### Login

1. Navigate to the login page
2. Enter existing username and password
3. Form won't allow user to submit without entering credentials
4. User will be notified if username does not exist or password is incorrect
5. User will be redirected to the dashboard upon signing in

### Dashboard

The dashboard displays:

1. User's number of pending deals by current stage (chart is dynamic)
2. User's number of closed deals by month (chart is dynamic)
3. Latest news headlines in business (5)
4. Messages component 

### Messages

The messages component behaves like a forum where the user is able to view messages from everyone and send messages to everyone.

### Deals Page 

All of the team's deals are displayed and categorized by 'Active', 'Closed', and 'Lost' statuses. In addition, deals are sorted by earliest closing date.

- Search
  - In the search bar the user is able to search for a specific deal by name
- Filter 
  - In the dropdown the user is able to select a team member's name to filter and see all of their deals
- Details/Edit 
  - When the details button is clicked on a specific deal, the user is taken to the details view displaying all corresponding data 
  - Additionally, the user is also able to make any changes to the specified deal
- Delete
  - When the delete button is clicked on a specific deal, a modal message will appear prompting user to confirm the delete action
- Add
  - User is able to add a new deal by clicking the 'Add New Deal' button
  - The 'Deal Name', 'Property Type', 'Property Class', 'Stage', 'Deal Status' and 'Assign Team Member' form fields are required before submitting
  - If no image has been uploaded, a stock 'Coming Soon' image will be displayed on the deal card

### News Page

- User can select either the 'Commercial Real Estate' or 'Business' tab to view all the latest corresponding news
- Clicking on the article's title opens the article source on a separate tab for further reading
- The page fetches the latest news from the News API upon refresh

### Analytics Page

The table and charts are all dynamic according to changes in the deals page. On this page the user is able to find useful information regarding the team's number of active deal by stage, closed deals by month and assets under management and classification.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Reactstrap/Bootstrap
  - Modal, Buttons, Cards, NavBar, Input Fields, Tabs
- Chart.js
- Moment.js
- Cloudinary
- JSON-Server

