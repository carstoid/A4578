import webbrowser
import pandas as pd 

#with open('../all_2.csv', 'w+') as target_file:

INPUT_FILE='./exercise_1.xlsx'
INPUT_SHEET='exercise_1'
ASSIGNMENT_NAME='Exercise 1'

grades = pd.read_excel(INPUT_FILE, sheet_name=INPUT_SHEET)

def mailto(recipient, subject, body):
        webbrowser.open("mailto:%s?subject=%s&body=%s" %
            (recipient, subject, body))

for i, row in grades.iterrows():
  email_address = f'{row["uni"]}@columbia.edu'
  email_subject = f'{ASSIGNMENT_NAME} Feedback'
  email_body = """Hi {name},

Grades are done for {assignment}, please see the notes below and the attached PDF.

Your score was: {score}/10. {comment}

Please let me know if you have any questions,
Carsten
""".format(name=row['first_name'].strip(), assignment=ASSIGNMENT_NAME, comment=row['comment'], score=int(row['total_score']))
  
  mailto(email_address, email_subject, email_body)

  # print(email_subject)
  # print(email_body)

#print(grades["Comment"])

# def mailto(recipients, subject, body):
