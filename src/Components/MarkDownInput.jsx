import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";

const MarkDownInput = ({ title}) => {
  //   const [] = useState();
  //   useEffect(() => {}, []);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  useEffect(() => {
    setCurrentTitle(title);
    setCurrentNote(localStorage.getItem(title));
  }, [title]);

  const saveNote = (event) => {
    event.preventDefault();
    const currentNote = event.target.elements.noteArea.value;
    const currentTitle = event.target.elements.titleArea.value;
    localStorage.setItem(currentTitle, currentNote);
    alert("Note saved successfully");
  };

  const handleTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setCurrentNote(event.target.value);
  };
  return (
    <Container>
      <h2>Ecris ici une nouvelle note :</h2>
      <Form onSubmit={saveNote}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="titleArea"
            placeholder="Enter a title"
            value={currentTitle}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="noteArea"
            placeholder="Enter your note"
            value={currentNote}
            onChange={handleNoteChange}
          />
        </Form.Group>
        <Button type="submit">Save Note</Button>
      </Form>
    </Container>
  );
};

export default MarkDownInput;
