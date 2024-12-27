# # from flask import Flask, request, jsonify
# # from werkzeug.middleware.proxy_fix import ProxyFix
# # from nlp_processor import process_large_audio, predict_district
# # import os

# # app = Flask(__name__)
# # app.wsgi_app = ProxyFix(app.wsgi_app)
# # # Ensure the temp directory exists
# # if not os.path.exists("temp"):
# #     os.makedirs("temp")

# # @app.route("/")
# # def home():
# #     return "Flask NLP Backend is Running!"

# # @app.route("/process-audio", methods=["POST"])
# # def process_audio():
# #     if "audio" not in request.files:
# #         return jsonify({"error": "No audio file provided"}), 400

# #     # Save uploaded audio to temp directory
# #     audio_file = request.files["audio"]
# #     audio_path = os.path.join("temp", audio_file.filename)
# #     audio_file.save(audio_path)

# #     try:
# #         # Process the audio and predict the district
# #         print("Processing audio file:", audio_path)
# #         transcribed_text = process_large_audio(audio_path)
# #         if not transcribed_text:
# #             print("Error: Transcription failed")
# #             return jsonify({"error": "Audio transcription failed"}), 500

# #         print("Transcribed text:", transcribed_text)
# #         result = predict_district(transcribed_text)
# #         print("Prediction result:", result)

# #     except Exception as e:
# #         print(f"Unhandled exception: {e}")
# #         return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

# #     finally:
# #         # Clean up the temporary audio file
# #         if os.path.exists(audio_path):
# #             os.remove(audio_path)

# #     return jsonify({"result": result})


# # if __name__ == "__main__":
# #     app.run(debug=True)
# # app.py
# # from flask import Flask, request, jsonify
# # from werkzeug.middleware.proxy_fix import ProxyFix
# # from nlp_processor import process_large_audio, predict_district
# # from flask_cors import CORS
# # import os

# # app = Flask(__name__)
# # CORS(app)  # Enable CORS for all routes
# # app.wsgi_app = ProxyFix(app.wsgi_app)

# # # Ensure the temp directory exists
# # if not os.path.exists("temp"):
# #     os.makedirs("temp")

# # @app.route("/")
# # def home():
# #     return "Flask NLP Backend is Running!"

# # @app.route("/process-audio", methods=["POST"])
# # def process_audio():
# #     try:
# #         if "audio" not in request.files:
# #             return jsonify({"error": "No audio file provided"}), 400

# #         audio_file = request.files["audio"]
# #         if not audio_file.filename:
# #             return jsonify({"error": "No selected file"}), 400

# #         # Save uploaded audio to temp directory
# #         audio_path = os.path.join("temp", audio_file.filename)
# #         audio_file.save(audio_path)

# #         try:
# #             # Process the audio and predict the district
# #             print("Processing audio file:", audio_path)
# #             transcribed_text = process_large_audio(audio_path)
            
# #             if not transcribed_text:
# #                 return jsonify({"error": "Audio transcription failed"}), 500

# #             print("Transcribed text:", transcribed_text)
# #             result = predict_district(transcribed_text)
# #             print("Prediction result:", result)

# #             return jsonify({
# #                 "result": result,
# #                 "transcribed_text": transcribed_text
# #             })

# #         finally:
# #             # Clean up the temporary audio file
# #             if os.path.exists(audio_path):
# #                 os.remove(audio_path)

# #     except Exception as e:
# #         print(f"Unhandled exception: {e}")
# #         return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True)
# from flask import Flask, request, jsonify
# from werkzeug.middleware.proxy_fix import ProxyFix
# from nlp_processor import process_large_audio, predict_district
# from flask_cors import CORS
# import os

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
# app.wsgi_app = ProxyFix(app.wsgi_app)

# # Ensure the temp directory exists
# if not os.path.exists("temp"):
#     os.makedirs("temp")

# @app.route("/")
# def home():
#     return "Flask NLP Backend is Running!"

# @app.route("/process-audio", methods=["POST"])
# def process_audio():
#     try:
#         if "audio" not in request.files:
#             return jsonify({"error": "No audio file provided"}), 400

#         audio_file = request.files["audio"]
#         if not audio_file.filename:
#             return jsonify({"error": "No selected file"}), 400

#         # Save uploaded audio to temp directory
#         audio_path = os.path.join("temp", audio_file.filename)
#         audio_file.save(audio_path)

#         try:
#             # Process the audio and predict the district
#             print("Processing audio file:", audio_path)
#             transcribed_text = process_large_audio(audio_path)
            
#             if not transcribed_text:
#                 return jsonify({"error": "Audio transcription failed"}), 500

#             print("Transcribed text:", transcribed_text)

#             # Ensure the correct argument is passed to predict_district
#             if not callable(predict_district):
#                 return jsonify({"error": "predict_district function is not defined correctly"}), 500

#             result = predict_district(data=transcribed_text)  # Explicitly pass 'data' argument
#             print("Prediction result:", result)

#             return jsonify({
#                 "result": result,
#                 "transcribed_text": transcribed_text
#             })

#         finally:
#             # Clean up the temporary audio file
#             if os.path.exists(audio_path):
#                 os.remove(audio_path)

#     except Exception as e:
#         print(f"Unhandled exception: {e}")
#         return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

# if __name__ == "__main__":
#     app.run(debug=True)
from flask import Flask, request, jsonify
from werkzeug.middleware.proxy_fix import ProxyFix
from nlp_processor import process_large_audio, predict_district  # Correct import
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.wsgi_app = ProxyFix(app.wsgi_app)

# Ensure the temp directory exists
if not os.path.exists("temp"):
    os.makedirs("temp")

@app.route("/")
def home():
    return "Flask NLP Backend is Running!"

@app.route("/process-audio", methods=["POST"])
def process_audio():
    try:
        if "audio" not in request.files:
            return jsonify({"error": "No audio file provided"}), 400

        audio_file = request.files["audio"]
        if not audio_file.filename:
            return jsonify({"error": "No selected file"}), 400

        audio_path = os.path.join("temp", audio_file.filename)
        audio_file.save(audio_path)

        try:
            print("Processing audio file:", audio_path)
            transcribed_text = process_large_audio(audio_path)

            if not transcribed_text:
                return jsonify({"error": "Audio transcription failed"}), 500

            print("Transcribed text:", transcribed_text)

            # Import data from nlp_processor if it's not global
            from nlp_processor import data

            result = predict_district(text=transcribed_text, data=data)  # Pass 'text' and 'data'

            print("Prediction result:", result)
            return jsonify({
                "result": result,
                "transcribed_text": transcribed_text
            })

        finally:
            if os.path.exists(audio_path):
                os.remove(audio_path)

    except Exception as e:
        print(f"Unhandled exception: {e}")
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
