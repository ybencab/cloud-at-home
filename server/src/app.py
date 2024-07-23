from flask import Flask, send_from_directory, request
from flask_cors import CORS

import os

app = Flask(__name__)
CORS(app)

STORAGE_DIRECTORY = "/home/data"

@app.route("/")
def hello_world():
  return "CloudAtHome API"

@app.route("/content")
def list_content():
  return os.listdir("/home/data")

@app.route("/get-file/<string:filename>")
def get_file(filename):
  file_path = os.path.join(STORAGE_DIRECTORY, filename)
  if not os.path.exists(file_path):
    return "404 File Not Found", 404

  try:
    return send_from_directory(STORAGE_DIRECTORY, filename, as_attachment=True)
  except Exception as e:
    return f"An error ocurred: {str(e)}", 500

@app.route("/post-file", methods=["POST"])
def post_file():
  if "file" not in request.files:
    return "No file part", 400
  
  f = request.files["file"]

  if f.filename == "":
    return "No selected file", 400
  
  save_path = os.path.join(STORAGE_DIRECTORY, f.filename)

  if os.path.exists(save_path):
    return f"File: {f.filename} already exists", 409
  
  f.save(save_path)
  return f"file: '{f.filename}', saved", 201

@app.route("/remove-file/<string:filename>", methods=["DELETE"])
def remove_file(filename):
  file_path = os.path.join(STORAGE_DIRECTORY, filename)
  if not os.path.exists(file_path):
    return "404 File Not Found", 404
  
  try:
    os.remove(file_path)
    return f"File: '{filename} has been removed", 200
  except Exception as e:
    return f"An error ocurred: {str(e)}", 500

if __name__ == "__main__":
    app.run()
