import './App.css';
import { useSelector } from 'react-redux';
import LoginView from './components/login/LoginView';
import LogoutView from './components/logout/LogoutView';
function App() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return <div>{user ? <LogoutView /> : <LoginView />}</div>;
}

export default App;
