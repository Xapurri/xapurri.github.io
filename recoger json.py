# -*- coding: utf-8 -*-
"""
Created on Sat Jul 22 15:34:50 2023

@author: XavierPuntí
"""

import json

# Read the file as a string
with open("/mnt/data/AA.JS", "r") as file:
    js_data = file.read()

js_data[:500]  # Let's print the first 500 characters to understand the structure of the data


# Remove the JavaScript function leaving only the JSON part
json_data = js_data[js_data.find('{'):js_data.rfind('}')+1]

# Load the string as a Python dictionary
data_dict = json.loads(json_data)

# Print the first key and value to check if it's loaded correctly
list(data_dict.items())[0]