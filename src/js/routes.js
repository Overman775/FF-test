
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

//Fruits
import Banana from '../pages/fruits/banana.f7.html';
import Apple from '../pages/fruits/apple.f7.html';
import Avocado from '../pages/fruits/avocado.f7.html';
import Grape from '../pages/fruits/grape.f7.html';
import Pear from '../pages/fruits/pear.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/banana',
    component: Banana,
  },
  {
    path: '/apple',
    component: Apple,
  },
  {
    path: '/avocado',
    component: Avocado,
  },
  {
    path: '/grape',
    component: Grape,
  },
  {
    path: '/pear',
    component: Pear,
  },   
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;