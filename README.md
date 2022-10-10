# Movie Gallery

## Description

_Duration: Weekend Project_

This project is a basic interactive movie gallery in which a user can browse movies in a list of posters, and click on a poster to see more details on a specific movie. Once in the details view, the user is able to see a description of the movie and a list of genres for that movie. The user is then able to click a button to return to the gallery.

The project was constructed using React, but was really an opportunity for me to practicing using Redux, Redux Sagas, and SQL joins. All relevant movie data is stored across three tables in the database. This data is accessed via GET requests which are placed in Sagas, resulting in cleaner component code. Once get requests are responded to, the incoming data is assigned to its corresponding location in the Redux store. I also practiced using React Router to navigate between components, and I utilized URL params in order to ensure the user's view of the details page would be retained upon a page refresh.

## Screen Shots

Coming soon!

## Prerequisites

- [Chrome](https://www.google.com/chrome/dr/download/?brand=JJTC&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE3wJ0J7XPPrHwfdNBjXlHb-UyqQu9PlEV-TwtIusPtTw_jggRyNY0MaAm3IEALw_wcB&gclsrc=aw.ds) or similar up-to-date browser
- [React](https://reactjs.org/)
- [Postgres](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/en/starter/installing.html)

## Installation
1. Ensure you have properly install Node.js
2. Ensure that you have installed Postgres. Start your server.
3. Download and open the project repo in your editor of choice.
4. Open your terminal, navigate to the project repo, and run `npm install`.
5. Create a new Postgres database entitled "saga_movies_weekend".
6. Use the SQL commands included with the data.sql file to create your basic database.
4. In your terminal, run `npm run client` and `npm run server`.
5. The application should automatically lanch on local host 3000 in your browswer.
6. You should now be able to use the application from your browser window.

## Built With

1. HTML and CSS
2. Javascript
3. React.js
4. Node.js
5. Express
6. Postgres

## Acknowledgement:
Thanks to Emerging Digital Academy as well as their curriculum partner Prime Digital Academy for providing me with the resources to complete this project.

## Support:
If you have suggestions or issues, please email me at pettitbass@gmail.com

