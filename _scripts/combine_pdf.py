import glob
from pdfrw import PdfReader, PdfWriter

OUTPUT_PATH = '../all_assignments.pdf'

with open(OUTPUT_PATH, 'w+') as target_file:
  #target_file.write("uni,Q1,Q2,Q3")
  writer = PdfWriter(OUTPUT_PATH)

  for f in glob.glob('*.pdf'):
    uni = f.replace('_exercise1.pdf', '')
    reader = PdfReader(f)
    reader.Info.PageAuthor = uni
    
    if len(reader.pages) > 1:
      print("more than one page!")

    page = reader.getPage(0)

    page.PageAuthor = uni

    writer.addpages([page])
  
  writer.write()

  output_reader = PdfReader(OUTPUT_PATH)
  for p in output_reader.pages:
    print(p.PageAuthor)