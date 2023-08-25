import Footer from './components/Footer';
import './custom.scss';
import RoomView from './pages/RoomView/RoomView';
import Rooms from './pages/Rooms/Rooms';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Rooms />} />
                <Route exact path='/room' element={<RoomView />} />
            </Routes>      
            <Footer />
        </Router>
    )
}

export default App
