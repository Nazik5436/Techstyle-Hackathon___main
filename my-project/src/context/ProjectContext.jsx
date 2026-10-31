import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  // Наш масив з проєктами
  const [projects, setProjects] = useState([
    { id: '1', name: 'Lviv Running Club — Race Singlet', file: 'lrc-singlet_v3.jpg', created: 'Today 15:58', modified: 'Today 15:58', status: 'Processing', colors: ['rgb(232, 236, 239)', 'rgb(31, 79, 209)'] },
    { id: '2', name: 'Kyiv Wolves — Home Jersey 2027', file: 'kw-home-27_flat.png', created: 'Today 09:10', modified: 'Today 15:42', status: 'Review required', colors: ['rgb(19, 32, 59)', 'rgb(243, 184, 10)'] },
    { id: '3', name: 'Volta Cycling — Summer Jersey', file: 'volta-summer.jpg', created: '28 Oct', modified: 'Yesterday', status: 'Approved with warnings', colors: ['rgb(242, 183, 5)', 'rgb(17, 18, 20)'] },
    { id: '4', name: 'Odesa Sharks — Away Kit', file: 'sharks-away.png', created: '25 Oct', modified: '27 Oct', status: 'Approved', colors: ['rgb(95, 168, 232)', 'rgb(255, 255, 255)'] },
    { id: '5', name: 'Kharkiv Hoops — Warm-up Top', file: 'hoops-warmup.jpg', created: '26 Oct', modified: '26 Oct', status: 'Failed', colors: ['rgb(200, 16, 46)', 'rgb(20, 33, 61)'] },
    { id: '6', name: 'Dnipro Volley — Women’s Kit', file: 'dv-womens_flat.png', created: '22 Oct', modified: '24 Oct', status: 'Review required', colors: ['rgb(167, 173, 180)', 'rgb(31, 79, 209)'] },
  ]);

  // Функція для додавання нового проєкту
  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  // Функція для видалення проєкту
  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    // Додали deleteProject у value, щоб інші компоненти могли його викликати
    <ProjectContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};