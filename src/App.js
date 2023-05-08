import './App.css';
import Navbar from "./Components/Navbar/Navjs";
import Home from './Components/Firstpage/Home';
import Second from './Components/Secpage/Second';
import Third from './Components/Thrdpage/Third';
import Forth from './Components/Forthpage/Forth';
function App() {
  return (
   <div className='Appbody'>
   <Navbar/>
   <Home/>
   <Second/>
   <Third/>
   <Forth/>
   </div>
  );
}

export default App;
