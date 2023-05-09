// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/home/Home';
// import List from './pages/list/List';
// import Single from './pages/single/Single';
// import New from './pages/new/New';
// import './style/dark.scss';
// import { useContext } from 'react';
// import { DarkModeContext } from './context/DarkModeContext';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/users',
//     element: <List />,
//   },
//   {
//     path: '/users/:id',
//     element: <Single />,
//   },
//   {
//     path: '/users/new',
//     element: <New />,
//   },
// ]);

// function App() {
//   const { darkMode } = useContext(DarkModeContext);
//   return (
//     <div className={darkMode ? 'app dark' : 'app'}>
//       <RouterProvider router={router} />;
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/home/Home'));
// const List = lazy(() => import('./pages/list/List'));
// const Single = lazy(() => import('./pages/single/Single'));
// const New = lazy(() => import('./pages/new/New'));
// const Login = lazy(() => import('./pages/login/Login'));

import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Login from './pages/login/Login';
import Forgot from './pages/forgot/Forgot';
import Categories from './pages/categories/Categories';
import TC from './pages/tc/TC';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/forgot"
            element={<Forgot />}
          />
          <Route
            path="/users"
            element={<List />}
          />
          <Route
            path="/users/:id"
            element={<Single />}
          />
          <Route
            path="/users/new"
            element={<New />}
          />
          <Route
            path="/categories"
            element={<Categories />}
          />
          <Route
            path="/terms-condition"
            element={<TC />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
