import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Step2 from './step2';
import Step1 from './step1';
import Step3 from './step3/index.tsx';
import Demo from './components/demo/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/step1',
        element: <Step1 />,
      },
      {
        path: '/step2',
        element: <Step2 />,
      },
      {
        path: '/step3',
        element: <Step3 />,
      },
    ],
  },
  {
    path: '/asdf',
    element: <div>test</div>,
  },
  {
    path: '/test',
    element: (
      <QueryClientProvider client={queryClient}>
        <Demo />
      </QueryClientProvider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
