import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ProtectedRoutes({ isAuthenticated, setAuthenticated ,children }) {

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setAuthenticated(true);  
      navigate('/chat');

    }
  }, []);
  

  return isAuthenticated ? children : <Navigate to="/" />

}

export default ProtectedRoutes;