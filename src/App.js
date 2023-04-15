import './App.css';
import Navbar from "./Components/Navbar/Navjs";
import Home from './Components/Firstpage/Home';
import Second from './Components/Secpage/Second';
function App() {
  return (
   <div className='Appbody'>
   <Navbar/>
   <Home/>
   <Second/>
   </div>
  );
}

export default App;
