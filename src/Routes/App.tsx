import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Light from '../theme/LightTheme';
import Dark from '../theme/DarkTheme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Auth_main from "../Pages/auth/auth_main";
import MainDashboard from "../Pages/Dashboard/Main_dashboard";

function App() {
  return (
    <div>
      <ThemeProvider theme={Light}>

      <BrowserRouter>
      
        <Switch>

          <Route path="/auth" component={Auth_main}/>
          <Route path="/dashboard" component={MainDashboard}/>

        </Switch>

      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
