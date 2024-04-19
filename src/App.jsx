
import  Login  from './Pages/Login/Login';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewsFeed } from './Pages/NewsFeed/NewsFeed';
import { PracticePage } from './Pages/PracticePage/PracticePage';
import {ProtectedRoute} from './Logic/ProtectedRoute';


export function App (){
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/inicio' element={<NewsFeed/>} />
      
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