import './App.css';
import MainPage from './Components/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <MainPage/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
