
// // import React, { useState } from "react";
// // import "./audio.css";
// // import Nav from "./nav";
// // import UserFooter from "./userfooter";

// // const Audio = () => {
// //   const [recording, setRecording] = useState(false);
// //   const [audioBlob, setAudioBlob] = useState(null);
// //   const [mediaRecorder, setMediaRecorder] = useState(null);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [popupMessage, setPopupMessage] = useState("");

// //   const startRecording = async () => {
// //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //     const recorder = new MediaRecorder(stream);
// //     const chunks = [];

// //     recorder.ondataavailable = (e) => chunks.push(e.data);
// //     recorder.onstop = () => {
// //       setAudioBlob(new Blob(chunks, { type: "audio/wav" }));
// //     };

// //     recorder.start();
// //     setMediaRecorder(recorder);
// //     setRecording(true);
// //   };

// //   const stopRecording = () => {
// //     mediaRecorder.stop();
// //     setRecording(false);
// //   };

// //   const handleFileChange = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //     setAudioBlob(null); // Clear recorded audio if a file is selected
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!audioBlob && !selectedFile) {
// //       alert("Please record or upload an audio file.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     if (audioBlob) {
// //       formData.append("audio", audioBlob, "recording.wav");
// //     } else if (selectedFile) {
// //       formData.append("audio", selectedFile);
// //     }

// //     try {
// //       const res = await fetch("http://127.0.0.1:5000/process-audio", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await res.json();
// //       if (data.error) {
// //         alert("Error processing audio: " + data.error);
// //       } else {
// //         setPopupMessage(data.result);
// //         alert(data.result); // Popup message
// //       }
// //     } catch (error) {
// //       console.error("Error uploading audio:", error);
// //       alert("Failed to process audio.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Nav />
// //       <div className="audiocontainer">
// //         <div className="audiocard">
// //           <h2>Submit Your Audio</h2>
// //           <form onSubmit={handleSubmit}>
// //             <label>
// //               Name:
// //               <input type="text" name="name" required />
// //             </label>
// //             <label>
// //               Type of Data:
// //               <select name="dataType" required>
// //                 <option value="">Select</option>
// //                 <option value="Local Legends and Stories">Local Legends and Stories</option>
// //                 <option value="Cultural Explanations">Cultural Explanations</option>
// //                 <option value="Folk Songs">Folk Songs</option>
// //                 <option value="Language and Dialects">Language and Dialects</option>
// //                 <option value="Traditional Crop Information">Traditional Crop Information</option>
// //               </select>
// //             </label>
// //             <label>
// //               Upload Audio:
// //               <input
// //                 type="file"
// //                 accept="audio/*"
// //                 onChange={handleFileChange}
// //               />
// //             </label>
// //             <div className="audiorecord-section">
// //               <button
// //                 type="button"
// //                 onClick={recording ? stopRecording : startRecording}
// //                 className="audiorecord-btn"
// //               >
// //                 {recording ? "Stop Recording" : "Record Audio"}
// //               </button>
// //             </div>
// //             {audioBlob && <p>Recording saved! You can submit now.</p>}
// //             {selectedFile && <p>File selected: {selectedFile.name}</p>}
// //             <button type="submit" className="audiosubmit-btn">
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //         <div className="audiocard rules">
// //           <h2>Rules and Conditions</h2>
// //           <ul>
// //             <li>No background noise in the audio recording.</li>
// //             <li>Start the audio with your name and the place you are from.</li>
// //             <li>Specify the place format: <b>village name, mandal name</b>.</li>
// //             <li>Then begin the original content.</li>
// //           </ul>
// //         </div>
// //         {popupMessage && <div className="popup">{popupMessage}</div>}
// //       </div>
// //       <UserFooter />
// //     </>
// //   );
// // };

// // export default Audio;
// import React, { useState } from "react";
// import "./audio.css";
// import Nav from "./nav";
// import UserFooter from "./userfooter";

// const Audio = () => {
//   // State management
//   const [recording, setRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     dataType: ""
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setAudioBlob(null); // Clear recorded audio if a file is selected
//     }
//   };

//   // Start recording
//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const recorder = new MediaRecorder(stream);
//       const chunks = [];

//       recorder.ondataavailable = (e) => chunks.push(e.data);
//       recorder.onstop = () => {
//         const blob = new Blob(chunks, { type: "audio/wav" });
//         setAudioBlob(blob);
//         stream.getTracks().forEach(track => track.stop());
//       };

//       recorder.start();
//       setMediaRecorder(recorder);
//       setRecording(true);
//     } catch (error) {
//       console.error("Error accessing microphone:", error);
//       setPopupMessage("Error accessing microphone. Please check permissions.");
//     }
//   };

//   // Stop recording
//   const stopRecording = () => {
//     if (mediaRecorder && mediaRecorder.state !== "inactive") {
//       mediaRecorder.stop();
//       setRecording(false);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!audioBlob && !selectedFile) {
//       setPopupMessage("Please record or upload an audio file.");
//       return;
//     }

//     if (!formData.name || !formData.dataType) {
//       setPopupMessage("Please fill in all required fields.");
//       return;
//     }

//     setIsProcessing(true);
//     setPopupMessage("Processing audio... Please wait.");

//     const formPayload = new FormData();
//     formPayload.append("name", formData.name);
//     formPayload.append("dataType", formData.dataType);
    
//     if (audioBlob) {
//       formPayload.append("audio", audioBlob, "recording.wav");
//     } else if (selectedFile) {
//       formPayload.append("audio", selectedFile);
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:5000/process-audio", {
//         method: "POST",
//         body: formPayload,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setPopupMessage(data.error || data.result);
//       // setPopupMessage(data.error || data.transcribed_text);
//     } catch (error) {
//       console.error("Error during fetch:", error);
//       setPopupMessage("Failed to process audio. Please try again later.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <div className="audiocontainer">
//         <div className="audiocard">
//           <h2>Submit Your Audio</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input 
//                 type="text" 
//                 name="name" 
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required 
//               />
//             </label>
//             <label>
//               Type of Data:
//               <select 
//                 name="dataType" 
//                 value={formData.dataType}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Local Legends and Stories">Local Legends and Stories</option>
//                 <option value="Cultural Explanations">Cultural Explanations</option>
//                 <option value="Folk Songs">Folk Songs</option>
//                 <option value="Language and Dialects">Language and Dialects</option>
//                 <option value="Traditional Crop Information">Traditional Crop Information</option>
//               </select>
//             </label>
//             <label>
//               Upload Audio:
//               <input
//                 type="file"
//                 accept="audio/*"
//                 onChange={handleFileChange}
//                 disabled={recording || isProcessing}
//               />
//             </label>
//             <div className="audiorecord-section">
//               <button
//                 type="button"
//                 onClick={recording ? stopRecording : startRecording}
//                 className="audiorecord-btn"
//                 disabled={selectedFile || isProcessing}
//               >
//                 {recording ? "Stop Recording" : "Record Audio"}
//               </button>
//             </div>
//             {audioBlob && <p>Recording saved! You can submit now.</p>}
//             {selectedFile && <p>File selected: {selectedFile.name}</p>}
//             <button 
//               type="submit" 
//               className="audiosubmit-btn"
//               disabled={isProcessing || (!audioBlob && !selectedFile)}
//             >
//               {isProcessing ? "Processing..." : "Submit"}
//             </button>
//           </form>
//         </div>
//         <div className="audiocard rules">
//           <h2>Rules and Conditions</h2>
//           <ul>
//             <li>No background noise in the audio recording.</li>
//             <li>Start the audio with your name and the place you are from.</li>
//             <li>Specify the place format: <b>village name, mandal name</b>.</li>
//             <li>Then begin the original content.</li>
//           </ul>
//         </div>
//         {popupMessage && (
//           <div className="popup">
//             {popupMessage}
//             <button 
//               onClick={() => setPopupMessage("")} 
//               className="close-popup"
//             >
//               ×
//             </button>
//           </div>
//         )}
//       </div>
//       <UserFooter />
//     </>
//   );
// };

// export default Audio;
import React, { useState } from "react";
import "./audio.css";
import Nav from "./nav";
import UserFooter from "./userfooter";

const Audio = () => {
  // State management
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [popupMessage, setPopupMessage] = useState(""); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dataType: ""
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setAudioBlob(null); // Clear recorded audio if a file is selected
    }
  };

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setPopupMessage("Error accessing microphone. Please check permissions.");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!audioBlob && !selectedFile) {
      setPopupMessage("Please record or upload an audio file.");
      return;
    }

    if (!formData.name || !formData.dataType) {
      setPopupMessage("Please fill in all required fields.");
      return;
    }

    setIsProcessing(true);
    setPopupMessage("Processing audio... Please wait.");

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("dataType", formData.dataType);
    
    if (audioBlob) {
      formPayload.append("audio", audioBlob, "recording.wav");
    } else if (selectedFile) {
      formPayload.append("audio", selectedFile);
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/process-audio", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Check for prediction results or error messages
      if (data.result && data.result.predictions) {
        setPopupMessage(data.result); // Store full result for rendering
      } else {
        setPopupMessage({ message: data.error || "Unexpected error occurred." });
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setPopupMessage("Failed to process audio. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper function to format predictions for display
  const formatPredictions = (predictions) => {
    return (
      <div>
        <h3>Possible Locations</h3>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>District</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction, index) => (
              <tr key={index}>
                <td>{prediction.location}</td>
                <td>{prediction.district}</td>
                <td>{prediction.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Transcribed Text: {popupMessage.transcribed_text}</p>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="audiocontainer">
        <div className="audiocard">
          <h2>Submit Your Audio</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </label>
            <label>
              Type of Data:
              <select 
                name="dataType" 
                value={formData.dataType}
                onChange={handleInputChange}
                required
              >
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
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                disabled={recording || isProcessing}
              />
            </label>
            <div className="audiorecord-section">
              <button
                type="button"
                onClick={recording ? stopRecording : startRecording}
                className="audiorecord-btn"
                disabled={selectedFile || isProcessing}
              >
                {recording ? "Stop Recording" : "Record Audio"}
              </button>
            </div>
            {audioBlob && <p>Recording saved! You can submit now.</p>}
            {selectedFile && <p>File selected: {selectedFile.name}</p>}
            <button 
              type="submit" 
              className="audiosubmit-btn"
              disabled={isProcessing || (!audioBlob && !selectedFile)}
            >
              {isProcessing ? "Processing..." : "Submit"}
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
        {popupMessage && (
          <div className="popup">
            {popupMessage.predictions ? (
              formatPredictions(popupMessage.predictions)
            ) : (
              <p>{popupMessage.message}</p>
            )}
            <button 
              onClick={() => setPopupMessage("")} 
              className="close-popup"
            >
              ×
            </button>
          </div>
        )}
      </div>
      <UserFooter />
    </>
  );
};

export default Audio;
