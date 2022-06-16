from flask import *

app = Flask(__name__)

@app.route("/")
def index():
  return redirect(url_for('calculator'))

@app.route("/calculator", methods=['GET', 'POST'])
def calculator():
    return render_template('index.html')

@app.route("/calculate/")
@app.route("/calculate/<path:data>")
def calculate(data=''):
  try:
    if data == '':
      return ""
    answer = eval(data)
    return str(answer)
  except:
    return "Error"
  
@app.errorhandler(404)
def PageNotFound():
  return redirect(url_for("calculator"))
