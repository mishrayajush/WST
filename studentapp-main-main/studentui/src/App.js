import './App.css';
import { useState } from 'react';
import LoginPage from './Login.jsx';
import StudentDashboard from './StudentDashboard.jsx';
import About from './About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const logout = () => {
    alert('Logout success');
    setIsLogin(false);
  };

  const loginSuccess = () => {
    setIsLogin(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={!isLogin ? <LoginPage onLoginSuccess={loginSuccess} /> : <StudentDashboard onLogout={logout} />} />
          <Route path="/dashboard" element={<StudentDashboard onLogout={logout} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
