from flask import Flask,jsonify
app = Flask(__name__)
users = [
    {
        "id":1,
        "name":"modi",
        "email":"modi@gmail.com",
        "age":25
    },
    {
        "id":2,
        "name":"luffy",
        "email":"luffy@gmail.com",
        "age":26
    },
    {
        "id":3,
        "name":"zoro",
        "email":"zoro@gmail.com",
        "age":27
    },
    {
        "id":3,
        "name":"nami",
        "email":"nami@gmail.com",
        "age":28
    },
    {
        "id":4,
        "name":"usoop",
        "email":"usoop@gmail.com",
        "age":29
    },
    {
        "id":5,
        "name":"sanji",
        "email":"sanji@gmail.com",
        "age":30
    }
]

@app.route("/users",methods=['GET'])
def get_users():
    return jsonify({
        "success":True,
        "message":"users retrieved successfully",
        "count":len(users),
        "data":users
    }),200

@app.route("/users/<int:id>",methods=['GET'])
def get_user(id):
    for user in users:
        if user['id'] == id:
            return jsonify({
            "success":True,
            "message":"user retrieved successfully",
              "data":user
            }),200
    return jsonify(
        {
            "message":"user not found"
        }
    ),404

if __name__ == '__main__':
    app.run(debug=True)