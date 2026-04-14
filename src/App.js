// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditStudent from './components/EditStudent';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import ViewDetails from './components/ViewDetails';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable />} />
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/view/:id" element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>

  );
}