import { createBrowserRouter } from 'react-router-dom';
import Registration from '../pages/auth/Registration';
import Login from '../pages/auth/Login';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
