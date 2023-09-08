import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import LoginView from './components/login/LoginView';
import LogoutView from './components/logout/LogoutView';
import SignupView from './components/signup/SignupView';

function App() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/login' && loggedInUser?.name) {
      navigate('/logout');
    } else if (location.pathname === '/logout' && !loggedInUser) {
      navigate('/login');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<SignupView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/logout" element={<LogoutView />} />
          {/* <Route path="/login" element={<LoginView />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
