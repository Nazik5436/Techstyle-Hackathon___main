import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject'; 
import Processing from './pages/Processing';
import Workspace from './pages/Workspace';
import Settings from './pages/Settings';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/projects/:id/processing" element={<Processing />} />
        
        {/* Виправлений шлях до Workspace */}
        <Route path="/projects/:id" element={<Workspace />} />

        <Route path="/settings" element={<Navigate to="/settings/general" replace />} />
        <Route path="/settings/:tab" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}