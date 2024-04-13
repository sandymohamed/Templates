import { Navigate, useRoutes } from 'react-router-dom';


import {

  Page500,
  Page403,
  Page404,
  HomePage,
  CategoryDetailsPage,
  AboutPage,
  Contact,
  SignUp,
  SignInSide,
  SignIn,
  Pricing,
  Checkout,
  Blog,
  LandingPage,

} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([

    // Main Routes
    {
      // element: <LandingPage />,
      children: [
        // { element: <HomePage />, index: true },
        { element: <LandingPage />, index: true },
        { path: 'sign-up', element: <SignUp /> },
        { path: 'sign-in-side', element: <SignInSide /> },
        { path: 'sign-in', element: <SignIn /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'blog', element: <Blog /> },
        { path: 'landing-page', element: <LandingPage /> },
        
        
        { path: 'about-us', element: <AboutPage /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'category/:name', element: <CategoryDetailsPage /> },

      ],
    },

    {
      children: [

        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
