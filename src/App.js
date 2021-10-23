import './App.css';
import { RecordNotes } from './Components/RecordNotes';
import { Viewnotes } from './Components/Viewnotes';

function App() {
  return (
    <div className="App">
      Daily Notes
      <div>
         <RecordNotes/>
         <Viewnotes />
      </div>
    </div>
  );
}

export default App;
