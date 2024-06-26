# BHC-Hackathon

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Folder Structure](#folder-structure)
6. [Configuration](#configuration)
7. [Running the Application](#running-the-application)
8. [Project Components](#project-components)
9. [State Management](#state-management)
10. [API Integration](#api-integration)
11. [Styling](#styling)
12. [Navigation](#navigation)
13. [Testing](#testing)
14. [Building for Production](#building-for-production)
15. [Troubleshooting](#troubleshooting)
16. [Contributing](#contributing)
17. [License](#license)

## Introduction
This repository contains the source code for the BHC-Hackaton built using React Native. The application allows users to browse real estate listings, view property details, and contact realtors. The goal is to provide a seamless and efficient way to explore real estate options on mobile devices.

## Features
- Browse real estate listings
- View detailed property information
- Search and filter properties
- User authentication
- Save favorite properties
- Contact realtors
- Map integration to show property locations
- 3D rendered image intergratinn to show property
- Responsive and user-friendly UI

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v12 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/lwse-1/BHC-Hackathon.git
   cd bhc-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of your project and add necessary configuration. Example:
   ```env
   API_URL=https://api.example.com
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

## Folder Structure
```
bhc-app/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── App.json
├── babel.config.js
├── package.json
└── README.md
```

## Configuration
### API Configuration
Ensure your backend API is up and running. Update the `API_URL` in your `.env` file to point to your backend server.

### Map Configuration
Obtain an API key from Google Maps and add it to your `.env` file:
```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Running the Application
### Android
1. **Start the Metro Bundler:**
   ```bash
   npx react-native start
   ```
2. **Run the app on an Android emulator or connected device:**
   ```bash
   npx react-native run-android
   ```

### iOS
1. **Install CocoaPods dependencies:**
   ```bash
   cd ios
   pod install
   cd ..
   ```
2. **Start the Metro Bundler:**
   ```bash
   npx react-native start
   ```
3. **Run the app on an iOS simulator or connected device:**
   ```bash
   npx react-native run-ios
   ```

## Project Components
### Components
Reusable UI components like buttons, cards, headers, etc., are stored in the `src/components/` directory.

### Navigation
React Navigation is used for handling navigation within the app. Navigation configuration is in the `src/navigation/` directory.

### Screens
Screens represent different pages/views of the app and are stored in the `src/screens/` directory.

### Services
API calls and other external services are handled in the `src/services/` directory.

### Store
State management, typically using Redux or Context API, is implemented in the `src/store/` directory.

### Styles
Global styles and theming are managed in the `src/styles/` directory.

### Utils
Helper functions and utilities are stored in the `src/utils/` directory.

## State Management
Redux is used for state management in this project. Ensure you have the following setup in your `src/store/` directory:
- **Actions**: Define actions in `actions/` directory.
- **Reducers**: Define reducers in `reducers/` directory.
- **Store**: Create and configure the Redux store in `store.js`.

Example setup:
```javascript
// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

## API Integration
Use Axios or Fetch API for making HTTP requests to your backend. Example service:
```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProperties = async () => {
  try {
    const response = await api.get('/properties');
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

## Styling
Styled-components or StyleSheet from React Native can be used for styling components. Example:
```javascript
// src/styles/global.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

## Navigation
Configure React Navigation in the `src/navigation/` directory. Example:
```javascript
// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
```

## Testing
Jest is used for testing. Create tests in the `__tests__/` directory.
Run tests:
```bash
npm test
```

## Building for Production
### Android
1. **Generate a release APK:**
   ```bash
   npx react-native run-android --variant=release
   ```

### iOS
1. **Archive the project in Xcode:**
   Open the project in Xcode and select `Product` > `Archive`.

## Troubleshooting
### Common Issues
1. **Metro Bundler not starting:**
   Ensure no other process is using the Metro Bundler's default port (8081).
   ```bash
   lsof -i :8081
   kill -9 <PID>
   ```

2. **Android build failed:**
   Ensure you have the correct SDK versions installed in Android Studio.

3. **iOS build failed:**
   Ensure you have the correct version of Xcode and CocoaPods installed.

## Contributing
Contributions are always welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using our BHC Application. If you have any questions or need further assistance, feel free to contact us.