import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservation from './routes/Reservation';
import OrderOnline from './routes/OrderOnline';
import ConfirmReservation from './routes/ConfirmReservation';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/orderonline' element={<OrderOnline />} />
      <Route path='/confirmation' element={<ConfirmReservation />} />
    </Routes>
    </>
  );
}

export default App;
