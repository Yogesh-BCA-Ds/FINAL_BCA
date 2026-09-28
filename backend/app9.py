from flask import Flask, request, jsonify
import requests

app = Flask(__name__)


@app.route("/weather", methods=["GET"])
def get_weather():

    # Get city from query parameter
    city = request.args.get("city")

    if not city:
        return jsonify({
            "error": "City name is required"
        }), 400

    # Find city coordinates
    geo_url = "https://geocoding-api.open-meteo.com/v1/search"

    geo_response = requests.get(
        geo_url,
        params={
            "name": city,
            "count": 1,
            "language": "en",
            "format": "json"
        }
    )

    geo_data = geo_response.json()

    # Check if city exists
    if "results" not in geo_data:
        return jsonify({
            "error": "City not found"
        }), 404

    location = geo_data["results"][0]

    latitude = location["latitude"]
    longitude = location["longitude"]

    # Get weather data
    weather_url = "https://api.open-meteo.com/v1/forecast"

    weather_response = requests.get(
        weather_url,
        params={
            "latitude": latitude,
            "longitude": longitude,
            "current": "temperature_2m,relative_humidity_2m,wind_speed_10m",
            "temperature_unit": "celsius",
            "wind_speed_unit": "kmh"
        }
    )

    weather_data = weather_response.json()

    # Return selected weather information
    return jsonify({
        "city": location["name"],
        "country": location.get("country"),
        "temperature": weather_data["current"]["temperature_2m"],
        "humidity": weather_data["current"]["relative_humidity_2m"],
        "wind_speed": weather_data["current"]["wind_speed_10m"],
        "unit": {
            "temperature": "°C",
            "wind_speed": "km/h"
        }
    })

if __name__ == '__main__':
    app.run(debug=True)