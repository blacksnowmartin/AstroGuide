from flask import Flask, render_template, request, jsonify
import json
from utils import calculate_life_path, calculate_compatibility
import os
import random

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "your-secret-key")

# Load static data
with open('static/data/horoscopes.json') as f:
    horoscopes = json.load(f)

with open('static/data/zodiac_signs.json') as f:
    zodiac_data = json.load(f)

@app.route('/')
def index():
    daily_tip = random.choice([
        "Take time to meditate today",
        "Trust your intuition",
        "The stars are aligned for new beginnings",
        "Focus on self-care today",
        "Connect with loved ones"
    ])
    return render_template('index.html', daily_tip=daily_tip)

@app.route('/daily-horoscope')
def daily_horoscope():
    return render_template('daily_horoscope.html', horoscopes=horoscopes)

@app.route('/zodiac-signs')
def zodiac_signs():
    return render_template('zodiac_signs.html', zodiac_data=zodiac_data)

@app.route('/compatibility')
def compatibility():
    return render_template('compatibility.html')

@app.route('/calculate-compatibility', methods=['POST'])
def calculate_compatibility_route():
    sign1 = request.form.get('sign1')
    sign2 = request.form.get('sign2')
    compatibility = calculate_compatibility(sign1, sign2)
    return jsonify(compatibility)

@app.route('/numerology')
def numerology():
    return render_template('numerology.html')

@app.route('/calculate-numerology', methods=['POST'])
def calculate_numerology():
    birthdate = request.form.get('birthdate')
    life_path = calculate_life_path(birthdate)
    return jsonify(life_path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
