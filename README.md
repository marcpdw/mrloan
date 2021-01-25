# Mr Loan

_This is Marc Loan's alter ego, when things to say are either too formal or too smart. I also like to eat._

## Project description

React App coded in Typescript that implements an integration with [Slack](https://slack.com/). The UI allows you to send messages to specific channels, as well as, emoji reactions.

By default, the project comes with a Cron set up. Every morning, the App sends a _Good Morning!_ message to the main channel set up, altogether with a quote from a historical figure.

Messages and destination channels must be customised to your configuration. Cron time can be updated as your please.

### Requirements

- Slack account
- Access to create a Slack App (on your project or organisation)
- A laptop, computer, or server where to run this project

### Configuration

Only two files need to be edited to start using the App:
- `src/config/keys.ts`
- `src/constants/slack.ts`

They describe the Slack App token and the channels to play with.

**Important note**: To be able to send your messages and emojis to the Slack channels successfully, please review the permissions of your Slack App.

### Scripts

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

####  `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

####  `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Final note

**Disclaimer**: This project is just a basic version of the features described. It was implemented on a weekend and it gives you the basics to make your own app from this setup.

**Enjoy your Slack alter egos!! :)**
