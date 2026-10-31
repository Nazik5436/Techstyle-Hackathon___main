import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router.jsx';
import { ProjectProvider } from './context/ProjectContext.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <AppRouter />
    </ProjectProvider>
  </React.StrictMode>
);