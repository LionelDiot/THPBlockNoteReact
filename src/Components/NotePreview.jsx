import React from "react";
import Showdown from "showdown";
import { Button } from "react-bootstrap";

const converter = new Showdown.Converter();

const NotePreview = ({ title, note, onClick }) => {
  const html = converter.makeHtml(note);
  return (
    <>
      <h5>{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      <Button onClick={onClick}>View Note</Button>
    </>
  );
};

export default NotePreview;
