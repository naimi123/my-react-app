import logo from './logo.svg';
import './App.css';
import Liste from './list';
import Cont from './conte';

function App() {
  return (
    <div><div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}} >
    <Liste/>
    </div >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
 <Cont/>
    </div>
   
    </div>
    
    
  );
}

export default App;
