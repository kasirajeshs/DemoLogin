import React from "react";
import { Provider as ReduxProvider } from 'react-redux'
import store  from "./app_redux/store/store";
import { AppNavigator } from "./screens/navigator";


export default () => (
  <ReduxProvider store={store}>
    <AppNavigator />
  </ReduxProvider>
);
