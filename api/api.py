from flask import Flask
import os
# import main as main2

file = "/samples/benign_file.exe"
app = Flask(__name__)

@app.route('/api/scanner',methods=['POST','GET'])
def predict():
    # main.run_PE(file) 
    return 0
def run_PE(file):
    # file = input("Enter the path and name of the file : ")
    os.system("python3 Extract/PE_main.py {}".format(file))
    



if __name__ == "__main__":
    app.run(debug=True)