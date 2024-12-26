// App.js
import React, { useState } from "react";
import "./audio.css";
import Nav from "./nav";
import UserFooter from "./userfooter";
const Audio = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      setAudioBlob(new Blob(chunks, { type: "audio/wav" }));
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // Add form submission logic here (e.g., send data to a server)
  };

  return (
    <>
    <Nav/>
    <div className="audiocontainer">
      <div className="audiocard">
        <h2>Submit Your Audio</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Type of Data:
            <select name="dataType" required>
              <option value="">Select</option>
              <option value="Local Legends and Stories">Local Legends and Stories</option>
              <option value="Cultural Explanations">Cultural Explanations</option>
              <option value="Folk Songs">Folk Songs</option>
              <option value="Language and Dialects">Language and Dialects</option>
              <option value="Traditional Crop Information">Traditional Crop Information</option>
            </select>
          </label>
          <label>
            Upload Audio:
            <input type="file" accept="audio/*" />
          </label>
          <div className="audiorecord-section">
            <button
              type="button"
              onClick={recording ? stopRecording : startRecording}
              className="audiorecord-btn"
            >
              {recording ? "Stop Recording" : "Record Audio"}
            </button>
          </div>
          {audioBlob && <p>Recording saved! You can submit now.</p>}
          <button type="submit" className="audiosubmit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="audiocard rules">
        <h2>Rules and Conditions</h2>
        <ul>
          <li>No background noise in the audio recording.</li>
          <li>Start the audio with your name and the place you are from.</li>
          <li>Specify the place format: <b>village name, mandal name</b>.</li>
          <li>Then begin the original content.</li>
        </ul>
      </div>
    </div>
    <UserFooter/>
    </>
  );
}

export default Audio;
