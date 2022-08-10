import loadable from '@loadable/component';

export const Home = loadable(() => import('../pages/home/Home'));
export const Books = loadable(() => import('../pages/books/Books'));
export const Signin = loadable(() => import('../pages/user/Signin'));
export const WaitList = loadable(() => import('../pages/waitList/Waitlists2'));

// export default {
//   Home: loadable(() => import('../pages/home/Home')),
// };
