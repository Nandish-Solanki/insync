from app import app
from flask import request
from app.model import Model

model = Model() 

@app.route('/test')
def index():
    return 'This is a test route.'

@app.route('/generate', methods=['POST'])
def generate():
    if request.method == 'POST':
        data = request.json
        text = data['text']
        return model.predict(text)
    else:
        return 'Invalid request method', 405