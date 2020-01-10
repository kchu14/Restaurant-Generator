
# Problem
The problem we are trying to solve is how to choose which new restaurant to go to when there are too many options. City residents often want to try new foods and restaurants, but it can be overwhelming to go on Yelp and see all the options. On our website, users will input their preferred price point, location, and type of food. Our website will return a random restaurant that fits their inputted criteria. Users have the option to go to this restaurant or to skip this restaurant and get a new random one. One type of user is a person looking for a new place to eat. The two goals this user can accomplish on our website are keeping track of restaurants they have been to and choosing a new restaurant to go to. The other type of user is a restaurant. The two goals the restaurant user can accomplish are seeing what preferences are most popular for their restaurant and see how often their restaurant is being skipped when it is randomly chosen.

# Strategy
Our overall strategy is to have users set their preferences for choosing restaurants. Users will input preferences at the beginning of their session (if not logged in) and then restaurants will be curated based on the filters given (location, price, type of food). Logged in users will have their preferences persist, and data will be made available based on user preferences + restaurant choices. Restaurant owners will be able to make accounts. Their view will allow them to see what preferences users choose to see / go to their restaurant.

# Web API
We intend to use the Yelp API (https://www.yelp.com/developers). Using this API we can query data on restaurants. Yelp allows for searching in their API so we can get responses that fit the users criteria. In addition Yelp returns detailed data on each restaurant that can be displayed in our website.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
