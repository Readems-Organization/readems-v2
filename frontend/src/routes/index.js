import loadable from '@loadable/component';

export const Home = loadable(() => import('../pages/home/Home'));
export const Books = loadable(() => import('../pages/books/Books'));
export const Signin = loadable(() => import('../pages/signin/Signin'));
export const Waitlists = loadable(() => import('../pages/waitlists/Waitlists'));
export const LandingPage = loadable(() =>
  import('../pages/landingPage/LandingPage'),
);
export const SignUp = loadable(() => import('../components/signUp/SignUp'));
