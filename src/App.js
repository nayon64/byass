import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routers/Routes/Routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <RouterProvider router={routes}>
      
    </RouterProvider>
  );
}

export default App;
