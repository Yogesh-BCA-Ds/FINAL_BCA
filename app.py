import os
from flask import *
import sqlite3

database = os.path.join(os.path.dirname(__file__),"student.db")
app = Flask(__name__)
def get_db():
    conn = sqlite3.Connection(database)
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/students",methods=['GET'])
def getting():
    conn = get_db()
    student = conn.execute("select * from students").fetchall()
    conn.close()
    r = []
    for s in student:
        r.append({"name":s['name'],
                            "course":s['course'],
                            "email":s['email'],
                            "id":s['id']})
    return jsonify({"message":"success",
                    "data":r})

@app.route("/students",methods=['POST'])
def posting():
    data = request.get_json()
    name = data['name']
    email = data['email']
    course = data['course']
    conn = get_db()
    conn.execute("insert into students (name, email, course) values (?,?,?)",(name,email,course))
    conn.commit()
    conn.commit()
    return jsonify({"message":"data added successfully"}),201

@app.route("/students/<int:id>",methods=['PUT'])
def updating(id):
    conn = get_db()
    data = request.get_json()
    name = data['name']
    email = data['email']
    course = data['course']
    conn.execute("update students set name=?,email=?,course=? where id=?",(name,email,course,id))
    conn.commit()
    conn.close()
    return jsonify({"message":"data updated"}),201

@app.route("/students/<int:id>",methods=['DELETE'])
def deleting(id):
    conn = get_db()
    conn.execute("delete from students where id=?",(id,))
    conn.commit()
    conn.close()
    return jsonify({"message":"data deleted successfully"}),200

if __name__ == '__main__':
    app.run(debug=True)