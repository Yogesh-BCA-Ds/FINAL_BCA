from flask import *
app = Flask(__name__)
username1 = "admin"
password1 = "123456"

@app.route("/login",methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if username==username1 and password==password1:
        return jsonify({
            "success":True,
            "message":"login successful"
        }),200
    return jsonify({
        "success":False,
        "message":"invalid username or password"
    }),401

if __name__ == '__main__':
    app.run(debug=True)