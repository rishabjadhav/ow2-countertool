import csv
import json

# Read the CSV file and convert it to a list of dictionaries
def csv_to_json(csv_file_path, json_file_path):
    hero_data = []
    with open(csv_file_path, mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            hero_data.append(row)
    
    # Write the JSON data to a file
    with open(json_file_path, mode='w') as json_file:
        json.dump(hero_data, json_file, indent=4)

# Convert CSV to JSON
csv_to_json('counterinfo.csv', 'hero_data.json')
