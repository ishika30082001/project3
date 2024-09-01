import React, { useEffect, useState } from "react";
import "./Noteweb.css";
import axios from "axios";

const NoteWebApp = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const response = await axios.get("http://localhost:8081/api/v1/getList/");
    console.log(response.data);
    setNotes(response.data);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      createNote();
    }
  };

  const createNote = async () => {
    await axios.post("http://localhost:8081/api/v1/notes/create", {
      title: "hyy",
      content,
    });
    getList();
    setContent("");
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:8081/api/v1/notes/${id}`);
    getList();
  };
  return (
    <>
      <center>
        <h1>Notes Web App</h1>
      </center>
      <center></center>

      <div className="webappDiv">
        <div className="input-icons">
          <input
            className="input-field"
            type="text"
            value={content}
            placeholder="type your text here...."
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeydown}
          />
          {/* <button> */}
          <i className="fa-solid fa-plus icon" onClick={createNote}></i>
          {/* </button> */}
        </div>
      </div>
      <div className="listData">
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {notes.map((item, index) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                margin: "10px",
                padding: "10px",
                width: "300px",
                backgroundColor: "#fff",
              }}
            >
              <p>
                {item.title}
                <br></br>
                {item.content}
              </p>
              <span>{item.created_at}</span>
              <button onClick={() => deleteNote(item.id)}>
                &nbsp;&nbsp;<i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NoteWebApp;
