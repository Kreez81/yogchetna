import './App.css';
import Navbar from "./Components/Navbar/Navjs";
import Home from './Components/Firstpage/Home';
import Second from './Components/Secpage/Second';
import Third from './Components/Thrdpage/Third';
import Forth from './Components/Contactpage/Forth';
import GoToTop from './Components/Topbutt/goToTop';
function App() {

  return (
   <div className='Appbody'>
   <Navbar/>
   <GoToTop/>
   <Home />
   <Second />
   <Third />
   <Forth />
   </div>
  );
}

export default App;
