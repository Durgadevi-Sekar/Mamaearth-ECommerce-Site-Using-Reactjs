// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lay from './Project/Lay';
import HOME from './Project/HOME';
import FACE from './Project/FACE';
import HAIR from './Project/HAIR';
import MAKEUP from './Project/MAKEUP';
import BODY from './Project/BODY';
import BABY from './Project/BABY';
import COMBOS from './Project/COMBOS';
import NEWLAUNCHES from './Project/NewLaunches';
import INGREDIENT from './Project/INGREDIENT';
import PLANTGOODNESS from './Project/PLANTGOODNESS';
import LOGIN from './Project/LOGIN';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lay/>}>
          <Route index element={<HOME/>}/>
          <Route path="face" element={<FACE/>}/>
          <Route path="hair" element={<HAIR/>}/>
          <Route path="makeup" element={<MAKEUP/>}/>
          <Route path="body" element={<BODY/>}/>
          <Route path="baby" element={<BABY/>}/>
          <Route path="combos" element={<COMBOS/>}/>
          <Route path="newlaunches" element={<NEWLAUNCHES/>}/>
          <Route path="ingredient" element={<INGREDIENT/>}/>
          <Route path="plantgoodness" element={<PLANTGOODNESS/>}/>
          <Route path="login" element={<LOGIN/>}/>

          </Route>
        </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;