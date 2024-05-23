import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout';

function App() {


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />
      }
    ]
  );

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
