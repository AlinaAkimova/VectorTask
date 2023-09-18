import { createBrowserRouter, Navigate } from 'react-router-dom';

// Routes
import MainJournal from 'routes/MainJournal/MainJournal';
import PersonPage from 'routes/PersonPage/PersonPage';

export const router = createBrowserRouter([
    {
      index: true,
      element: <Navigate to="people" />
    },
    {
      path: '/people',
      element: <MainJournal />
    },
    {
      path: '/people/:personId',
      element: <PersonPage />
    }
])
