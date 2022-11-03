import { Main } from '../components';
import { Todo } from '../pages/Todo/Todo';

var routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Todo />,
      },
    ],
  },
];

export default routes;
