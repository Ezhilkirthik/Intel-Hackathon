from flask import Flask , request,jsonify
import sys
import os
from flask_cors import CORS
import subprocess

sys.path.append('Extract')

file = "/samples/benign_file.exe"
app = Flask(__name__)
CORS(app ,origins=["http://localhost:5173/"])

@app.route('/pe',methods=['POST','GET','OPTIONS'])
def api():

    file = "samples/malware_file.exe"
    # res = os.system("python3 Extract/url_main.py {}".format(file));

    output = subprocess.check_output(['python3', 'Extract/PE_main.py',file])
    res_2 = output.decode().strip()
    return res_2

@app.route('/url',methods=['POST','GET','OPTIONS'])
def url():
    if  request.method == 'POST':
        store = request.get_json()
        # res = os.system(f"python3 Extract/url_main.py {store['url']}")
        output = subprocess.check_output(['python3', 'Extract/url_main.py', store['url']])
        res_2 = output.decode().strip()
        return jsonify({'result': res_2})

    else:
        return 0
if __name__ == "__main__":
    app.run(debug=True)