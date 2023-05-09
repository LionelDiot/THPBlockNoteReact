import React, { useState } from "react";
import ReactDOM from 'react-dom';
import MarkDownInput from './Components/MarkDownInput';
import NotesPreview from './Components/NotesPreview';
import NoteDisplay from './Components/NoteDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 
  const [selectedNote, setSelectedNote] = useState(localStorage.key(0));

  return (
  <div className="container-fluid">
    <h1>Bienvenue dans notre app BlockNote stocké en localStorage !</h1>
    <hr />

    <div className="row">
      {/* Left column */}
      <div className="col-sm-4">
        <NotesPreview setSelectedNote={setSelectedNote}/>
      </div>

      {/* Right column */}
      <div className="col-sm-8">
        <div className="row">
          {/* Top row */}
          <div className="col">
            <NoteDisplay title={selectedNote} /> 
          </div>
        </div>
        <hr></hr>
        <div className="row">
          {/* Bottom row */}
          <div className="col">
            <MarkDownInput title={selectedNote}/>
          </div>
        </div>
      </div>
    </div>

  </div>
)};

ReactDOM.render(<App />, document.getElementById('root'));
