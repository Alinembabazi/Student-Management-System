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
import EditStudent from './EditStudent';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import ViewDetail from './ViewDetail';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable />} />
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/student/edit/:studentsid" element={<EditStudent />} />
          <Route path="/student/view/:studentsid" element={<ViewDetail />} />
        </Routes>
      </BrowserRouter>

  );
}
export default App;
