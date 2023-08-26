import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from "./Card";
import {CardContainer} from "./StyledComp";

import App from './Content';
import Sidebar from './SideBar';
import ProjectPage from './ProjectPage';
import LineTester from "./LineTester";
import FonTest from "./FonTest";
import Gradients from "./Gradients";
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
 <Router>
      <Routes>
        <Route path="/project/:id" element={<ProjectPage/>} />
        <Route path="/" element={<App/>} />
      </Routes>
    </Router>   
     </StrictMode>
);
