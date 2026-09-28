from flask import Flask, jsonify

app = Flask(__name__)

students_data = [
    {"id": 1, "name": "Lav"},
    {"id": 2, "name": "Priya"}
]


def response(success, message, data=None):
    return jsonify({
        "success": success,
        "message": message,
        "data": data
    })


@app.route("/students", methods=["GET"])
def get_students():
    return response(
        True,
        "Students found",
        students_data
    ), 200


@app.route("/student/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = next(
        (student for student in students_data if student["id"] == student_id),
        None
    )

    if student:
        return response(
            True,
            "Student found",
            student
        ), 200

    return response(
        False,
        "Student not found",
        None
    ), 404


@app.errorhandler(404)
def page_not_found(error):
    return response(
        False,
        "Endpoint not found",
        None
    ), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return response(
        False,
        "HTTP method not allowed",
        None
    ), 405


@app.errorhandler(500)
def internal_server_error(error):
    return response(
        False,
        "Internal server error",
        None
    ), 500


if __name__ == "__main__":
    app.run(debug=True)
