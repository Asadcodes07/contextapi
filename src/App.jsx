import "./App.css";
import Parent from "./components/parent";
import {useEffect} from "react";
function App() {
useEffect(()=>{
  console.log("I am running");
},[])
  return (
   <div>
      <Parent name="Asad hayat" />
    </div> 
  );
}

export default App;