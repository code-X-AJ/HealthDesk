// src/App.jsx
// import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import AllRoutes from './routes/AllRoutes'
function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>

      
    // </AuthProvider>
  );
}

export default App;