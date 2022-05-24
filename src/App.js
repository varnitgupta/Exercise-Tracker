// import "bootstrap/dist/css/bootstrap.min.css"  
import {Router, Route} from "react-router-dom"


import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercises from "./components/create-exercise.component"
import CreateUsers from "./components/create-user.component"

function App() {
  return ( 
    <Router>
      {/* <Navbar/>  */}
      {/* <br /> */} 
    
      <Route path="/" exact component={ExerciseList}/>


    </Router>
  );
}

export default App; 

