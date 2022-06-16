from app import app as FlaskApp

HOST = '127.0.0.1'
PORT = 8080
DEBUG = True

FlaskApp.run(host=HOST, port=PORT, debug=DEBUG)
