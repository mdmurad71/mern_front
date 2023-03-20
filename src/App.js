import logo from './logo.svg';
import './App.css';
import Add from './component/Add';
import { BrowserRouter, HashRouter } from "react-router-dom";
import Approuter from './router/Approuter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}

export default App;
