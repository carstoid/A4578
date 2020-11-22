#!/bin/zsh

#ASSIGNMENT_REMOTE_PATH="gdrive-ccr2139:/GIS_Fall2020_Instructors_TAs/Student Work (submissions)/01 Mapping Data (ungraded, by section)/3  & 4 CR/"
ASSIGNMENT_WORKING_PATH=~/tmp-exercise3/01_cleaned

# get assignments from google drive folder 
#rclone copy -P --drive-shared-with-me $ASSIGNMENT_PATH $ASSIGNMENT_WORKING_PATH

# unzip everything that was in a .rar folder
for f in $ASSIGNMENT_WORKING_PATH/*.rar
do
mkdir ${f%.rar} && unrar e $f ${f%.rar}
done

# and when .zip
for f in $ASSIGNMENT_WORKING_PATH/*.zip
do
  mkdir ${f%.zip} && unzip -j $f -d ${f%.zip}
done

# put all of the csvs into a single spreadsheet
# GRADE_TABLE_PATH="../all.csv"
# head -1 ccr2139_exercise1.csv > $GRADE_TABLE_PATH
# for f in $(ls *.csv)
# do
#   tail -n 3 $f | sed "s/^/ ${f%_exercise1.csv}, /" >> $GRADE_TABLE_PATH
# done

# put all of the pdfs into tablet markup folder & sync
# mv ./*.pdf ~/sync-library/_tablet/markup_inbox/assignment1