from flask import *
app = Flask(__name__)

tasks = []

@app.route("/tasks",methods=['POST'])
def add_task():
    data = request.get_json()
    if not data:
        return jsonify({
            "error":"request body is required"
        }),400

    title = data.get("title","").strip()
    if not title:
        return jsonify({
            "error":"task title cannot be empty"
        }),400
    task = {
        "id":len(tasks)+1,
        "title":title
    }

    tasks.append(task)
    return jsonify(task),201

@app.route("/tasks",methods=['GET'])
def get_tasks():
    return jsonify(tasks),200

if __name__ == "__main__":
    app.run(debug=True)