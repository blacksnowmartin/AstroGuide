from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

API_KEY = "AIzaSyBqkcotMKC3oz-xxvuOl2BN6WJ5uRuPFK8h"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

def get_astrology_reading(sign, question):
    prompt = f"""You are an expert astrologer. Provide a detailed and insightful reading for a {sign} 
    who is asking: {question}. Include both positive aspects and potential challenges, 
    and offer practical advice. Keep the response under 300 words."""
    
    chat = model.start_chat()
    response = chat.send_message(prompt)
    return response.text

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_reading', methods=['POST'])
def get_reading():
    data = request.json
    sign = data.get('sign')
    question = data.get('question')
    
    if not sign or not question:
        return jsonify({'error': 'Please provide both sign and question'}), 400
    
    reading = get_astrology_reading(sign, question)
    return jsonify({'reading': reading})

if __name__ == '__main__':
    app.run(debug=True)