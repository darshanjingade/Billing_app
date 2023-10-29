import openpyxl
import os
import json
from flask import Flask, jsonify

#to find current directory
current_directory = os.path.dirname(os.path.abspath(__file__))
excel_file_path = os.path.join(current_directory, '..', 'cridentiels.xlsx')

# Load the Excel file
workbook = openpyxl.load_workbook(excel_file_path)

# Select a specific worksheet
sheet = workbook['Sheet1']

# Access data from specific cells
username = sheet['A1'].value
password = sheet['B1'].value
data = dict()
for i in range(1,100):
    if sheet[str('A')+str(i)].value != None and sheet[str('B')+str(i)].value != None:
        data[sheet[str('A')+str(i)].value] = sheet[str('B')+str(i)].value
print(data)

# Close the workbook
workbook.close()

app = Flask(__name__)

@app.route('http://localhost:3000/api/data', methods=['GET'])

def loginData():
    import pdb;pdb.set_trace()
    # Replace this with your data retrieval logic
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)









