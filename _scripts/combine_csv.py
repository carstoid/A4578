#!/usr/local/bin/python
import csv
import glob

with open('../all_2.csv', 'w+') as target_file:
  #target_file.write("uni,Q1,Q2,Q3")
  writer = csv.writer(target_file)

  for f in glob.glob('*.csv'):
    print(f)
    uni = f.replace('_exercise1.csv', '')
    answers = []
    answers.append(uni)

    with open(f, 'r') as csvfile:
      reader = csv.reader(csvfile)
      for row in reader:
        if row[0] in ['Q', '\ufeffQ', 'Q & A']:
          continue

        answer = row[1] if len(row) > 1 else row[0]
        answers.append(answer)
    
    writer.writerow(answers)
