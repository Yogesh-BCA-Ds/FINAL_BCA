from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

NON_WEBHOOK_URL = "https://wanocoder.app.n8n.cloud/webhook-test/student-data"

@app.route("/student-data", methods=["POST"])
def send_student():
    data = request.get_json()
    response = requests.post(
        NON_WEBHOOK_URL,
        json = data
    )

    print(response.json())
    return jsonify({
        "success": True,
        "message": "Data send to non success",
        "non-response": response.text
    })

if __name__ == "__main__":
    app.run(debug=True)