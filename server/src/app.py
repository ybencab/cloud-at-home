from flask import Flask, send_from_directory

import os

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run()
