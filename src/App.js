import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout';
import ViewEvent from './components/view-event';
import CreateForm from './components/create-form';
import Notfound from './components/not-found';
import {ThemeProvider} from './hooks/ThemeContext'

//const ThemeContext = useContext();

function App() {


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <Notfound />,
        children: [
          {
            path: "events/:eventId",
            element: <ViewEvent />
          }, 
          {
            path: "events/:eventId/edit",
            element: <CreateForm />
          },
          {
            path: "",
            element: <CreateForm />
          }
        ]
      }
    ]
  );

  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;

// useContext