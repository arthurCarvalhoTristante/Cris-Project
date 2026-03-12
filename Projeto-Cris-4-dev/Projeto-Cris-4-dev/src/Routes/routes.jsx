import { useEffect, useState } from 'react';
import Login from '../Pages/Login/Login.jsx';
import Chat from '../Pages/Chat/Chat.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import Logout from '../Components/FormLogout/logout.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Routering() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [authToken, setToken] = useState(null);
  
  const [ mostraForm, setMostra ] = useState(null);


  
    useEffect(() => {
  
      if (authToken) {
        sessionStorage.setItem("token", authToken);
      }
    }, [authToken]);


   const mostraClick = () => {
    setMostra(true);
   } 

   const escondeClick = () => {
    setMostra(false);
   }

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Login setAuthenticated={setAuthenticated} setToken={setToken}/>} />
          <Route path="/chat" element={
            <ProtectedRoutes isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}>
              {
                mostraForm ? <Logout setAuthenticated={setAuthenticated} escondeClick={escondeClick}/>
                :
                <Chat mostraClick={mostraClick}/>
              }
              
            </ProtectedRoutes>
          } />
        </Routes>
      </Router>
      </>
  );
}

export default Routering;