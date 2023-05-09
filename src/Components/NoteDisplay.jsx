import React from "react";
import Showdown from "showdown";
import {  } from "react-bootstrap";

const converter = new Showdown.Converter();

const NoteDisplay = ({ title}) => {
  const note = localStorage.getItem(title);
  const html = converter.makeHtml(note);
  return (
    <>
      <h1>Ta note ici :</h1>
      
      <p dangerouslySetInnerHTML={{ __html: html }} />
      
    </>
  );
};

export default NoteDisplay;