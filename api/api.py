from flask import Flask
import main

app = Flask(__name__)

@app.route('/api/')

def predict():
    main.start() 
    return 0

predict()