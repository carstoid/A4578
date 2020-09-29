import os
from pdfrw import PdfReader, PdfWriter
from pathlib import Path

INPUT_FILE = './assignments_all.pdf'
OUTPUT_PATH = './assignments_split'
Path(OUTPUT_PATH).mkdir(exist_ok=True)

reader = PdfReader(INPUT_FILE)

for p in reader.pages:
  author = p.PageAuthor.replace('(', '').replace(')', '')
  new_filename = f'{author}_exercise1.pdf'
  new_path = os.path.join(OUTPUT_PATH, new_filename)
  writer = PdfWriter(new_path)
  writer.addpages([p])
  writer.write()

# with open(OUTPUT_PATH, 'w+') as target_file:
#   #target_file.write("uni,Q1,Q2,Q3")
#   writer = PdfWriter(OUTPUT_PATH)

#   for f in glob.glob('*.pdf'):
#     uni = f.replace('_exercise1.pdf', '')
#     reader = PdfReader(f)
#     reader.Info.PageAuthor = uni
    
#     if len(reader.pages) > 1:
#       print("more than one page!")

#     page = reader.getPage(0)

#     page.PageAuthor = uni

#     writer.addpages([page])
  
#   writer.write()

#   output_reader = PdfReader(OUTPUT_PATH)
#   for p in output_reader.pages:
#     print(p.PageAuthor)