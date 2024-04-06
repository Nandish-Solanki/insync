from app import app

@app.route('/test')
def index():
    return 'Hello, World! This is a test route.'

