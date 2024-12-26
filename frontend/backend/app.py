# # backend/main.py

# data = {
#   "Anakapalli": ["Anakapalli", "Bheemunipatnam", "Bowluvada", "Butchayyapeta", "Cheedikada", "Chodavaram", "Devarapalli", "Elamanchili", "Golugonda", "K. Kotapadu", "Kantabamsuguda", "Kasimkota", "Madugula", "Makavarapalem", "Munagapaka", "Nakkapalle", "Narsipatnam", "Narsipatnam revenue division", "Nathavaram", "Paravada", "Payakaraopeta", "Rambilli", "Ravikamatham", "Rolugunta", "Sabbavaram", "S. Rayavaram", "Vizianagaram", "Yellamanchili"],
#   "Anantapuramu": ["Adoni", "Amarapuram", "Anantapur", "Antakal", "Anugula", "Atmakur", "Bathalapalle", "Beluguppa", "Bukkapatnam", "Brahmanapalle", "Byrampuram", "Challakere", "Chilamathur", "Chinna Manchikonda", "Chinna Veeranagallu", "Chitravati", "Cuddapah", "Dharmavaram", "Dhone", "Donakonda", "Gooty", "Gummagatta", "Hindupur", "Hirehalli", "Hospet", "Kadiri", "Kalyandurgam", "Kamalapuram", "Kanaganapalli", "Kurnool", "Madakasira", "Madanapalle", "Mantralayam", "Muddenahalli", "Nandyal", "Nemili", "Penukonda", "Puttaparthi", "Rayachoty", "Santhapuram", "Singanamala", "Tadipatri", "Uravakonda", "Vaddadi", "Vaddamanu", "Vinukonda", "Guntakal", "PamidiNagar", "Rayadurg"],
#   "Annamayya": ["Beerangi Kothakota", "Kalikiri", "Kurabalakota", "Madanapalle", "Mulakalacheruvu", "Nimmanapalle", "Peddamandyam", "Peddathippasamudram", "Ramasamudram", "Thamballapalle", "Valmikipuram", "Chitvel", "Nandalur", "Obulavaripalle", "Penagalur", "Pullampeta", "Railway Koduru", "Rajampet", "T. Sundupalle", "Veeraballi", "Chinnamandyam", "Galiveedu", "Gurramkonda", "Kalakada", "Kambhamvaripalle", "Lakkireddypalli", "Pileru", "Ramapuram", "Rayachoti", "Sambepalli"],
#   "Alluri Sitharama Raju": ["Chinturu", "Etapaka", "Kunavaram", "Vararamachandrapuram", "Ananthagiri", "Araku Valley", "Chintapalli", "Dumbriguda", "Ganagaraju Madugula", "Gudem Kotha Veedhi", "Hukumpeta", "Koyyuru", "Munchingi Puttu", "Paderu", "Peda Bayalu", "Addateegala", "Devipatnam", "Gangavaram", "Maredumilli", "Rajavommangi", "Rampachodavaram", "Y. Ramavaram"],
#   "Bapatla": ["Bapatla", "Karlapalem", "Martur", "Parchur", "Pittalavanipalem", "Yeddanapudi", "Addanki", "Ballikurava", "Chinaganjam", "Chirala", "Inkollu", "J. Panguluru", "Karamchedu", "Korisapadu", "Santhamaguluru", "Vetapalem", "Amruthalur", "Bhattiprolu", "Cherukupalle", "Kollur", "Nagaram", "Nizampatnam", "Repalle", "Tsundur", "Vemuru"],
#   "Chittoor": ["Chittoor Rural", "Chittoor Urban", "Gangadhara Nellore", "Gudipala", "Irala", "Penumuru", "Pulicherla", "Puthalapattu", "Rompicherla", "Srirangarajapuram", "Thavanampalle", "Vedurukuppam", "Yadamari", "Gudupalle", "Kuppam", "Ramakuppam", "Santhipuram", "Karvetinagar", "Nagari", "Nindra", "Palasamudram", "Vijayapuram", "Baireddipalle", "Bangarupalyam", "Chowdepalle", "Gangavaram", "Palamaner", "Peddapanjani", "Punganur", "Sodam", "Somala", "Venkatagirikota"],
#   "East Godavari": ["Rajamahendravaram", "Kadiam", "Rajanagaram", "Seethanagaram", "Korukonda", "Anaparthi", "Biccavolu", "Rangampeta", "Gokavaram", "Kovvuru", "Chagallu", "Tallapudi", "Nidadavole", "Undrajavaram", "Peravali", "Devarapalle", "Nallajerla", "Gopalapuram"],
#   "Eluru": ["Bhimadole", "Denduluru", "Eluru", "Kaikalur", "Kalidindi", "Mandavalli", "Mudinepalli", "Nidamarru", "Pedapadu", "Pedavegi", "Buttayagudem", "Dwaraka Tirumala", "Jangareddygudem", "Jeelugu Milli", "Kamavarapukota", "Koyyalagudem", "Kukunuru", "Polavaram", "T. Narasapuram", "Velairpadu", "Agiripalli", "Chatrai", "Chintalapudi", "Lingapalem", "Musunuru", "Nuzvid"],
#   "Guntur": ["Guntur","Guntur East", "Guntur West", "Medikonduru", "Pedakakani", "Pedanandipadu", "Phirangipuram", "Prathipadu", "Tadikonda", "Thullur", "Vatticherukuru", "Chebrolu", "Duggirala", "Kakumanu", "Kollipara", "Mangalagiri", "Ponnur", "Tadepalle", "Tenali"],
#   "Kakinada": ["Samalkota", "Pithapuram", "Gollaprolu", "U. Kothapalli", "Karapa", "Kakinada Rural", "Kakinada Urban", "Pedapudi", "Thallarevu", "Kajuluru", "Peddapuram", "Jaggampeta", "Gandepalle", "Kirlampudi", "Tuni", "Kotananduru", "Prathipadu", "Sankhavaram", "Yeleswaram", "Rowthulapudi", "Thondangi"],
#   "Konaseema": ["Allavaram", "Amalapuram", "I. Polavaram", "Katrenikona", "Malikipuram", "Mamidikuduru", "Mummidivaram", "Razole", "Sakhinetipalle", "Uppalaguptam", "Ainavilli", "Alumuru", "Ambajipeta", "Atreyapuram", "Kothapeta", "P. Gannavaram", "Ravulapalem", "Gangavaram", "Kapileswarapuram", "Mandapeta", "Rayavaram", "Ramachandrapuram"],
#   "Krishna": ["Bapulapadu", "Gannavaram", "Gudivada", "Gudlavalleru", "Nandivada", "Pedaparupudi", "Unguturu", "Avanigadda", "Bantumilli", "Challapalli", "Ghantasala", "Guduru", "Koduru", "Kruthivennu", "Machilipatnam North", "Machilipatnam South", "Mopidevi", "Nagayalanka", "Pedana", "Kankipadu", "Movva", "Pamarru", "Pamidimukkala", "Penamaluru", "Thotlavalluru", "Vuyyuru"],
#   "Kurnool": ["Adoni", "Gonegandla", "Holagunda", "Kosigi", "Kowthalam", "Mantralayam", "Nandavaram", "Pedda Kadabur", "Yemmiganur", "C. Belagal", "Gudur", "Kallur", "Kodumur", "Kurnool Rural", "Kurnool Urban", "Orvakal", "Veldurthi", "Alur", "Aspari", "Chippagiri", "Devanakonda", "Halaharvi", "Krishnagiri", "Maddikera East", "Pattikonda", "Tuggali"], 
#   "Nandyal": ["Atmakur", "Bandi Atmakur", "Jupadu Bunglow", "Kothapalle", "Miduthuru", "Nandikotkur", "Pagidyala", "Pamulapadu", "Srisailam", "Velugodu", "Banaganapalli", "Bethamcherla", "Dhone", "Koilkuntla", "Owk", "Peapully", "Allagadda", "Chagalamarri", "Dornipadu", "Gadivemula", "Gospadu", "Kolimigundla", "Mahanandi", "Nandyal Rural", "Nandyal Urban", "Panyam", "Rudravaram", "Sanjamala", "Sirivella", "Uyyalawada"],
#   "Nellore": ["Ananthasagaram", "Anumasamudrampeta", "Atmakur", "Chejerla", "Kaluvoya", "Marripadu", "Sangam", "Seetharamapuram", "Udayagiri", "Gudluru", "Kandukur", "Kondapuram", "Lingasamudram", "Ulavapadu", "Varikuntapadu", "Voletivaripalem", "Allur", "Bogole", "Dagadarthi", "Duttalur", "Jaladanki", "Kaligiri", "Kavali", "Kodavalur", "Vidavalur", "Vinjamur", "Buchireddipalem", "Indukurpet", "Kovur", "Manubolu", "Muthukur", "Nellore Rural", "Nellore Urban", "Podalakur", "Rapur", "Sydapuram", "Thotapalli Gudur", "Venkatachalam"], 
#   "NTR": ["Chandarlapadu", "Jaggayyapeta", "Kanchikacherla", "Nandigama", "Penuganchiprolu", "Vatsavai", "Veerullapadu", "A. Konduru", "Gampalagudem", "Reddigudem", "Tiruvuru", "Vissannapeta", "G. Konduru", "Ibrahimpatnam", "Mylavaram", "Vijayawada Rural", "Vijayawada Central", "Vijayawada North", "Vijayawada East", "Vijayawada West"],
#    "Palnadu": ["Dachepalle", "Durgi", "Gurazala", "Karempudi", "Machavaram", "Macherla", "Piduguralla", "Rentachintala", "Veldurthi", "Bollapalle", "Chilakaluripeta", "Edlapadu", "Ipur", "Nadendla", "Narasaraopet", "Nuzendla", "Rompicherla", "Savalyapuram", "Vinukonda", "Amaravathi", "Atchampet", "Bellamkonda", "Krosuru", "Muppalla", "Nekarikallu", "Pedakurapadu", "Rajupalem", "Sattenapalli"], 
#    "Parvathipuram Manyam": ["Jiyyammavalasa", "Gummalaxmipuram", "Kurupam", "Palakonda", "Seethampeta", "Bhamini", "Veeraghattam", "Parvathipuram", "Seethanagaram", "Balijipeta", "Salur", "Panchipenta", "Makkuva", "Komarada", "Garugubilli"], 
#    "Prakasam": ["Chandrasekharapuram", "Darsi", "Donakonda", "Hanumanthunipadu", "Kanigiri", "Konakanamitla", "Kurichedu", "Marripudi", "Pamur", "Pedacherlopalle", "Podili", "Ponnaluru", "Veligandla", "Ardhaveedu", "Bestavaripeta", "Cumbum", "Dornala", "Giddalur", "Komarolu", "Markapuram", "Pedda Araveedu", "Pullalacheruvu", "Racherla", "Tarlupadu", "Tripuranthakam", "Yerragondapalem", "Chimakurthy", "Kondapi", "Kothapatnam", "Maddipadu", "Mundlamuru", "Naguluppalapadu", "Ongole Rural", "Ongole Urban", "Santhanuthalapadu", "Singarayakonda", "Tanguturu", "Thallur", "Zarugumalli"], 
#    "Rayalaseema": ["Anantapur", "Guntakal", "Hindupur", "Kadiri", "Rayadurg", "Tadipatri", "Dharmavaram", "Kalyandurg"], "Srikakulam": ["Ichchapuram", "Kaviti", "Sompeta", "Kanchili", "Palasa", "Mandasa", "Vajrapukotturu", "Nandigama", "Srikakulam", "Gara", "Amadalavalasa", "Ponduru", "Sarubujjili", "Burja", "Narasannapeta", "Polaki", "Etcherla", "Laveru", "Ranastalam", "Ganguvarisigadam", "Jalumuru", "Tekkali", "Santha Bommali", "Kotabommali", "Pathapatnam", "Meliaputti", "Saravakota", "Kothuru", "Hiramandalam", "Lakshminarasupeta"], 
#    "Sri Sathya Sai": ["Bathalapalle", "Chennekothapalle", "Dharmavaram", "Kanaganapalle", "Mudigubba", "Ramagiri", "Tadimarri", "Amadagur", "Gandlapenta", "Kadiri", "Nallacheruvu", "Nambulapulakunta", "Talupula", "Tanakal", "Agali", "Amarapuram", "Chilamathur", "Gudibanda", "Hindupur", "Lepakshi", "Madakasira", "Parigi", "Penukonda", "Roddam", "Rolla", "Somandepalle", "Bukkapatnam", "Gorantla", "Kothacheruvu", "Nallamada", "Obuladevaracheruvu", "Puttaparthi"], 
#    "Tirupati": ["Tirupati","Balayapalli", "Chillakur", "Chittamur", "Dakkili", "Gudur", "Kota", "Vakadu", "Venkatagiri", "K. V. B. Puram", "Nagalapuram", "Narayanavanam", "Pichatur", "Renigunta", "Srikalahasti", "Thottambedu", "Yerpedu", "Buchinaidu Kandriga", "Doravarisatram", "Naidupeta", "Ozili", "Pellakur", "Satyavedu", "Sullurpeta", "Tada", "Varadaiahpalem", "Chandragiri", "Chinnagottigallu", "Pakala", "Puttur", "Ramachandrapuram", "Tirupati Rural", "Tirupati Urban", "Vadamalapeta", "Yerravaripalem"], 
#    "Visakhapatnam": ["Bheemunipatnam", "Anandapuram", "Padmanabham", "Visakhapatnam Rural", "Seethammadhara", "Gajuwaka", "Pedagantyada", "Gopalapatnam", "Mulagada", "Maharanipeta", "Pendurthi"],
#    "Vizianagaram": ["Bobbili", "Ramabhadrapuram", "Badangi", "Therlam", "Gajapathinagaram", "Dattirajeru", "Mentada", "Cheepurupalli", "Garividi", "Gurla", "Merakamudidam", "Vangara", "Regidi Amadalavalasa", "Santhakavati mandal", "Rajam", "Vizianagaram Urban", "Gantyada", "Poosapatirega", "Denkada", "Bhogapuram", "Srungavarapukota", "Jami", "Vepada", "Lakkavarapukota", "Kothavalasa", "Bondapalli", "Nellimarla", "Vizianagaram Rural"],
  
#    "YSR Kadapa": ["Atlur", "B. Kodur", "Badvel", "Bramhamgari Matham", "Chapadu", "Duvvur", "Gopavaram", "Kalasapadu", "Khajipet", "Mydukur", "Porumamilla", "Sri Avadhutha Kasinayana", "Jammalamadugu", "Kondapuram", "Muddanur", "Mylavaram", "Peddamudium", "Proddatur", "Rajupalem", "Chennur", "Chinthakommadinne", "Kadapa", "Kamalapuram", "Pendlimarri", "Siddavatam", "Vallur", "Vontimitta", "Yerraguntla", "Chakarayapet", "Lingala", "Pulivendula", "Simhadripuram", "Thondur", "Veerapunayunipalle", "Vempalle", "Vemula"] 
# }
# # from fastapi import FastAPI, UploadFile, File, HTTPException
# # from fastapi.middleware.cors import CORSMiddleware
# # import speech_recognition as sr
# # import spacy
# # from pydub import AudioSegment
# # import math
# # import os
# # from tempfile import NamedTemporaryFile
# # from typing import Dict, List, Optional
# # import json

# # app = FastAPI()

# # # Configure CORS
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:3000"],
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # Load NLP model
# # nlp = spacy.load("en_core_web_sm")

# # # Load district data


# # def convert_to_wav(input_file: str) -> Optional[str]:
# #     """Convert any audio file to WAV format."""
# #     try:
# #         audio = AudioSegment.from_file(input_file)
# #         wav_path = f"{input_file}_converted.wav"
# #         audio.export(wav_path, format="wav")
# #         return wav_path
# #     except Exception as e:
# #         print(f"Error converting audio: {e}")
# #         return None

# # def process_large_audio(file_path: str, chunk_duration: int = 30) -> Optional[str]:
# #     """Process large audio files in chunks."""
# #     recognizer = sr.Recognizer()
# #     complete_text = []
    
# #     try:
# #         # Convert to WAV if not already
# #         if not file_path.lower().endswith('.wav'):
# #             wav_file = convert_to_wav(file_path)
# #             if not wav_file:
# #                 return None
# #             file_path = wav_file

# #         # Load the audio file
# #         audio = AudioSegment.from_wav(file_path)
        
# #         # Calculate duration in milliseconds
# #         duration = len(audio)
        
# #         # Process audio in chunks
# #         chunk_size = chunk_duration * 1000  # Convert to milliseconds
# #         chunks = math.ceil(duration / chunk_size)
        
# #         for i in range(chunks):
# #             start_time = i * chunk_size
# #             end_time = min((i + 1) * chunk_size, duration)
            
# #             # Extract chunk
# #             chunk = audio[start_time:end_time]
# #             chunk_path = f"temp_chunk_{i}.wav"
# #             chunk.export(chunk_path, format="wav")
            
# #             # Process chunk
# #             with sr.AudioFile(chunk_path) as source:
# #                 try:
# #                     audio_data = recognizer.record(source)
# #                     text = recognizer.recognize_google(audio_data)
# #                     complete_text.append(text)
# #                 except sr.UnknownValueError:
# #                     print(f"Could not understand audio in chunk {i+1}")
# #                 except sr.RequestError as e:
# #                     print(f"Error with speech recognition service in chunk {i+1}: {e}")
                
# #             # Clean up temporary chunk file
# #             os.remove(chunk_path)
            
# #         # Clean up converted WAV file if it was created
# #         if file_path.endswith('_converted.wav'):
# #             os.remove(file_path)
            
# #         return ' '.join(complete_text)
        
# #     except Exception as e:
# #         print(f"Error processing audio: {e}")
# #         return None

# # def predict_district(transcribed_text: str) -> str:
# #     """Identify the district based on transcribed text."""
# #     if not transcribed_text:
# #         return "No text to analyze."
        
# #     doc = nlp(transcribed_text)
# #     detected_entities = [ent.text for ent in doc.ents]
    
# #     # Store all matches
# #     matches = []
    
# #     # Tokenize and process text
# #     tokens = transcribed_text.lower().split()
    
# #     for token in tokens:
# #         token = token.strip()
# #         for district, locations in data.items():
# #             for location in locations:
# #                 if token == location.lower().strip():
# #                     matches.append({
# #                         "location": location,
# #                         "district": district,
# #                         "confidence": "High" if location in detected_entities else "Medium"
# #                     })
    
# #     if matches:
# #         # Format results
# #         results = ["Found the following locations:"]
# #         for match in matches:
# #             results.append(f"Location: {match['location']} -> District: {match['district']} (Confidence: {match['confidence']})")
# #         return "\n".join(results)
    
# #     return "No matching district found."

# # @app.post("/api/process-audio")
# # async def process_audio(file: UploadFile = File(...)):
# #     """Process uploaded audio file and return predictions."""
# #     if not file:
# #         raise HTTPException(status_code=400, detail="No file uploaded")
        
# #     # Save uploaded file temporarily
# #     with NamedTemporaryFile(delete=False, suffix='.wav') as temp_file:
# #         try:
# #             # Read and write the file content
# #             content = await file.read()
# #             temp_file.write(content)
# #             temp_file.flush()
            
# #             # Process audio file
# #             text = process_large_audio(temp_file.name)
# #             if text:
# #                 result = predict_district(text)
# #                 return {
# #                     "success": True,
# #                     "text": text,
# #                     "prediction": result
# #                 }
            
# #             return {
# #                 "success": False,
# #                 "error": "Could not process audio"
# #             }
            
# #         except Exception as e:
# #             raise HTTPException(status_code=500, detail=str(e))
# #         finally:
# #             # Clean up temporary file
# #             os.unlink(temp_file.name)

# # @app.get("/")
# # async def root():
# #     """Root endpoint for API health check."""
# #     return {"status": "API is running"}

# # if __name__ == "__main__":
# #     import uvicorn
# #     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, UploadFile, File, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import speech_recognition as sr
# import spacy
# from pydub import AudioSegment
# import math
# import os
# from tempfile import NamedTemporaryFile
# from typing import Optional

# app = FastAPI()

# # Configure CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load NLP model
# nlp = spacy.load("en_core_web_sm")

# def convert_to_wav(input_file: str) -> Optional[str]:
#     """Convert any audio file to WAV format."""
#     try:
#         audio = AudioSegment.from_file(input_file)
#         wav_path = f"{input_file}_converted.wav"
#         audio.export(wav_path, format="wav")
#         return wav_path
#     except Exception as e:
#         print(f"Error converting audio: {e}")
#         return None

# def process_large_audio(file_path: str, chunk_duration: int = 30) -> Optional[str]:
#     """Process large audio files in chunks."""
#     recognizer = sr.Recognizer()
#     complete_text = []
    
#     try:
#         # Convert to WAV if not already
#         if not file_path.lower().endswith('.wav'):
#             wav_file = convert_to_wav(file_path)
#             if not wav_file:
#                 return None
#             file_path = wav_file

#         # Load the audio file
#         audio = AudioSegment.from_wav(file_path)
        
#         # Calculate duration in milliseconds
#         duration = len(audio)
        
#         # Process audio in chunks
#         chunk_size = chunk_duration * 1000  # Convert to milliseconds
#         chunks = math.ceil(duration / chunk_size)
        
#         for i in range(chunks):
#             start_time = i * chunk_size
#             end_time = min((i + 1) * chunk_size, duration)
            
#             # Extract chunk
#             chunk = audio[start_time:end_time]
#             chunk_path = f"temp_chunk_{i}.wav"
#             chunk.export(chunk_path, format="wav")
            
#             # Process chunk
#             with sr.AudioFile(chunk_path) as source:
#                 try:
#                     audio_data = recognizer.record(source)
#                     text = recognizer.recognize_google(audio_data)
#                     complete_text.append(text)
#                 except sr.UnknownValueError:
#                     print(f"Could not understand audio in chunk {i+1}")
#                 except sr.RequestError as e:
#                     print(f"Error with speech recognition service in chunk {i+1}: {e}")
                
#             # Clean up temporary chunk file
#             os.remove(chunk_path)
            
#         # Clean up converted WAV file if it was created
#         if file_path.endswith('_converted.wav'):
#             os.remove(file_path)
            
#         return ' '.join(complete_text)
        
#     except Exception as e:
#         print(f"Error processing audio: {e}")
#         return None

# def predict_district(transcribed_text: str) -> str:
#     """Identify the district based on transcribed text."""
#     if not transcribed_text:
#         return "No text to analyze."
        
#     doc = nlp(transcribed_text)
#     detected_entities = [ent.text for ent in doc.ents]
    
#     # Mock data (replace this with your actual data)
  
    
#     # Store all matches
#     matches = []
    
#     # Tokenize and process text
#     tokens = transcribed_text.lower().split()
    
#     for token in tokens:
#         token = token.strip()
#         for district, locations in data.items():
#             for location in locations:
#                 if token == location.lower().strip():
#                     matches.append({
#                         "location": location,
#                         "district": district,
#                         "confidence": "High" if location in detected_entities else "Medium"
#                     })
    
#     if matches:
#         # Format results
#         results = ["Found the following locations:"]
#         for match in matches:
#             results.append(f"Location: {match['location']} -> District: {match['district']} (Confidence: {match['confidence']})")
#         return "\n".join(results)
    
#     return "No matching district found."

# @app.post("/api/process-audio")
# async def process_audio(file: UploadFile = File(...)):
#     """Process uploaded audio file and return predictions."""
#     if not file:
#         raise HTTPException(status_code=400, detail="No file uploaded")
        
#     # Save uploaded file temporarily
#     with NamedTemporaryFile(delete=False, suffix='.wav') as temp_file:
#         try:
#             # Read and write the file content
#             content = await file.read()
#             temp_file.write(content)
#             temp_file.flush()
            
#             # Process audio file
#             text = process_large_audio(temp_file.name)
#             if text:
#                 result = predict_district(text)
#                 return {
#                     "success": True,
#                     "text": text,
#                     "prediction": result
#                 }
            
#             return {
#                 "success": False,
#                 "error": "Could not process audio"
#             }
            
#         except Exception as e:
#             raise HTTPException(status_code=500, detail=str(e))
#         finally:
#             # Clean up temporary file
#             os.unlink(temp_file.name)

# @app.get("/")
# async def root():
#     """Root endpoint for API health check."""
#     return {"status": "API is running"}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)
