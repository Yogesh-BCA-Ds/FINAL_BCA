from flask import Flask,request,jsonify
import os
from openai import OpenAI
from dotenv import load_dotenv

#load_dotenv()
#client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))
app = Flask(__name__)
orders = []

@app.route("/")
def home():
    return "ai shooping cart api is running"

@app.route("/addOrders",methods=["POST"])
def add_orders():
    data = request.get_json()
    orders.append(data)
    return jsonify({
        "success":True,
        "message":"order added successfully",
        "data":data
    })

@app.route("/showOrders",methods=["GET"])
def show_orders():
    return jsonify({
        "success":True,
        "message":"Recent orders",
        "data":orders
    })

# @app.route("/ai",methods=["POST"])
# def ai():
#     data = request.get_json()
#     username = data.get("user")
#     user_orders = [
#         order for order in orders
#         if order.get("user") == username
#     ]
#     if not user_orders:
#         return jsonify({
#             "success":False,
#             "message":"no orders found for this user"
#         }),404

#     prompt = f'''
# you are a shopping assistant.
# user:{username}
# previous orders:{user_orders}
# suggest 2 or 3 useful products based on the 
# users previous purchases.
# give a short and simple explaination'''
#     response = client.responses.create(
#         model="gpt-5-mini",
#         input=prompt
#     )
#     recommendation = response.output_text
#     return jsonify({
#         "success":True,
#         "user":username,
#         "recommendation":recommendation
#     })

if __name__ == "__main__":
    app.run(debug=True)

