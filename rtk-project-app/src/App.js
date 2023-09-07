import './App.css';
import BikeView from './features/bike/BikeView';
import CarView from './features/car/CarView';
import UserView from './features/user/UserView';
function App() {
  return (
    <div className="App">
      <BikeView />
      <CarView />
      <UserView />
    </div>
  );
}

export default App;
