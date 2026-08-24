# def add():
#     a = int(input("enter first number:"))
#     b = int(input("enter second number:"))
#     c = a+b
#     print(f"{a}+{b} = {c}")

# add()

# def odd_even():
#     x = int(input("enter a number to check odd or even:"))
#     if x%2 == 0:
#         print("even")
#     else:
#         print("odd")

# odd_even()

# def pyramid():
#     n = int(input("enter number of rows you want:"))
#     for i in range(n):
#         print(" "*(n-i),end=" ")
#         print("*"*(2*i+1))

# pyramid()

# menu driven 

# one = int(input("enter number one: "))
# two = int(input("enter number two:"))
# ip = input("enter your operation:")
# match ip:
#     case "*":
#         print(f"{one}*{two} = {one*two}")
#     case "+":
#         print(f"{one}+{two} = {one+two}")
#     case "-":
#         print(f"{one}-{two} = {one-two}")
#     case "/":
#         print(f"{one}/{two} = {one/two}")
    

ip = input("enter your operation:")
match ip:
    case "*":
        one = int(input("enter number one: "))
        two = int(input("enter number two:"))
        print(f"{one}+{two} = {one*two}")
    case "+":
        print("")
    case "-":
        print(f"{one}-{two} = {one-two}")
    case "/":
        print(f"{one}/{two} = {one/two}")
    
    
