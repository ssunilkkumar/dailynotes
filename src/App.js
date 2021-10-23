import './App.css';
import { Navbar } from './Components/Navbar';
import { RecordNotes } from './Components/RecordNotes';
import { Viewnotes } from './Components/Viewnotes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="flex">
         <RecordNotes/>
         <Viewnotes />
      </div>
    </div>
  );
}

export default App;
