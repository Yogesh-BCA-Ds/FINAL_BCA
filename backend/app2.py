from flask import Flask,request,jsonify,render_template
import re
app = Flask(__name__)

def is_valid_email(email):
    pattern = r'^[A-Za-Z0-9,_%+-]+@[A-Za-Z0-9.-]+\.[A,-Za-Z]{2,}$'
    return re.match(pattern,email)
@app.route('/')
def home():
    return render_template("index.html")

@app.route('/register',methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    # if not name or not email:
    #     return render_template("index.html"),400

    # if not is_valid_email(email):
    #     return render_template("index.html"),400
    
    return render_template("index.html",name=name,email=email),200


if __name__ == '__main__':
    app.run(debug=True)