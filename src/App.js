
import{Routes,Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Room from './Room';
import Product from './Product';
import Blog from './Blog';
function App() {
  return (<div>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/room/:roomID' element={<Room/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/Product' element={<Product/>}/>
      <Route exact path='/Blog'selement={<Blog/>}/>
    </Routes>
 </div> );
}

export default App;
