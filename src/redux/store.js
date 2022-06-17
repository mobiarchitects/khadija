import { configureStore } from '@reduxjs/toolkit';
import actualitesSlice from './actualitesSlice';
// import congePaginationSlice from './congePaginationSlice';
import congesSlice from './congesSlice';
import projectsSlice from './projectsSlice';
import situationsProjectsSlice from './situationsProjectsSlice';
import typeCongesSlice from './typeCongesSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    conges: congesSlice,
    typeConges: typeCongesSlice,
    projects: projectsSlice,
    situationsProjects: situationsProjectsSlice,
    // congePations: congePaginationSlice,
    actualites: actualitesSlice,
  },
});
