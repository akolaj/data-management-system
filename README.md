# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn install`

Installs all packages

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Performance Management

To optimize performance, this project utilizes a data grid that efficiently handles large datasets. Key features like sorting and filtering are supported by the data grid, allowing for responsive user interactions without significant delays. This approach minimizes the need for custom implementations, enhancing overall application speed.

## State Management

State management is primarily handled using React's useEffect hook. This allows for the implementation of a responsive search feature that updates displayed data based on changes in the search input. Additionally, state variables manage user preferences such as dark/light mode, ensuring immediate UI responses to user interactions.

## UI Design: Dark/Light Mode
The dark/light mode feature is implemented using the Material-UI (MUI) styles. By leveraging MUI's theming capabilities, the application toggles between light and dark modes based on user preferences. This approach provides a smooth transition between themes and enhances accessibility and user comfort.
