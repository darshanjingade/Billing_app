import openpyxl
import os
import json

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

def loginData():
    return json.dumps(data)






