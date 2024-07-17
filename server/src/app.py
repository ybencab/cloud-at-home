from flask import Flask

from routes import content

app = Flask(__name__)

@app.route("/")
def hello_world():
  return "CloudAtHome API"

@app.route("/content")
def conten():
  return content.test()

if __name__ == "__main__":
    app.run()
