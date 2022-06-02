import { configureStore } from '@reduxjs/toolkit';
import congesSlice from './congesSlice';
import projectsSlice from './projectsSlice';
import situationsProjectsSlice from './situationsProjectsSlice';
import typeCongesSlice from './typeCongesSlice';

export const store = configureStore({
  reducer: {
    conges: congesSlice,
    typeConges: typeCongesSlice,
    projects: projectsSlice,
    situationsProjects: situationsProjectsSlice,
  },
});
