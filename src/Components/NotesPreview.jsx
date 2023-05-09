import React, { useState, useEffect } from "react";
import { Button, Container,ListGroup} from "react-bootstrap";
import NotePreview from "./NotePreview";

const NotesPreview = ({ setSelectedNote }) => {
  const [noteList, setNoteList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNoteList(getNoteList());
      setTitleList(getTitleList());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  const clearNotes = (event) => {
    event.preventDefault();
    localStorage.clear();
    console.log("localStorage vidé");
  }

  const getNoteList = () => {
    let notes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const title = localStorage.key(i);
      const note = localStorage.getItem(title);
      notes.push(note);
    }
    return notes;
  }

  const getTitleList = () => {
    let titles = [];
    for (let i = 0; i < localStorage.length; i++) {
      const title = localStorage.key(i);
      titles.push(title);
    }
    return titles;
  }

  const handleNoteClick = (title) => {
    setSelectedNote(title);
  };

  return (
    <Container>
      <Button onClick={clearNotes}>Refresh localStorage</Button>
      <ListGroup>
        {noteList.map((note, index) => (
          <ListGroup.Item key={index}>
            <NotePreview title={titleList[index]} note={note.slice(0,10)+"..."} onClick={() => handleNoteClick(titleList[index])} />
            </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default NotesPreview;
