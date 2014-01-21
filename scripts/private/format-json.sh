#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/lib/deck | grep -v \\\.\$`; do
  cat app/lib/deck/$file | python -mjson.tool > tmp.json
  rm app/lib/deck/$file
  mv tmp.json app/lib/deck/$file
done
