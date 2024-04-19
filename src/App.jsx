


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  LoginPage  from './Pages/LoginPage/LoginPage';
import { NewsFeedPage } from './Pages/NewsFeedPage/NewsFeedPage';
import { PracticePage } from './Pages/PracticePage/PracticePage';
import {ProtectedRoute} from './Logic/ProtectedRoute';


export function App (){
  return (
    <Router>
    <Routes>
      <Route path='/' element={<LoginPage />}  />
      <Route path='/inicio' element={<NewsFeedPage/>} />
      
      <Route path='/practicas'
      element={ 
      <ProtectedRoute role="student">
        <PracticePage/>
      </ProtectedRoute>} />


      <Route path='/calificacion'
      element={ 
      <ProtectedRoute role="teacher">
        <PracticePage/>
      </ProtectedRoute>} />
     
    </Routes>
  </Router>
  )
}
export default App;