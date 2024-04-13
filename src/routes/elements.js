import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
(
  <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

// ----------------------------------------------------------------------


// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const HomePage = Loadable(lazy(() => import('../LandingPage')));
export const SignUp = Loadable(lazy(() => import('../pages/sign-up/SignUp')));
export const SignInSide = Loadable(lazy(() => import('../pages/sign-in-side/SignInSide')));
export const SignIn = Loadable(lazy(() => import('../pages/sign-in/SignIn')));
export const Pricing = Loadable(lazy(() => import('../pages/pricing/Pricing')));
export const Checkout = Loadable(lazy(() => import('../pages/checkout/Checkout')));
export const Blog = Loadable(lazy(() => import('../pages/blog/Blog')));
export const LandingPage = Loadable(lazy(() => import('../pages/landing-page/LandingPage')));
export const AboutPage = Loadable(lazy(() => import('../pages/dashboard/About')));
export const Contact = Loadable(lazy(() => import('../pages/dashboard/FAQ')));
export const CategoryDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/CategoryDetailsPage'))
);

