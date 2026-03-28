#!/bin/bash

# Directory name
dirName="data"

# Create directory if it doesn't exist
if [ ! -d "$dirName" ]; then
  mkdir "$dirName"
  # echo "Directory '$dirName' created."
fi

# Array of file names
files=("user.json" "data.json")

# Create the files if they don't exist
for file in "${files[@]}"; do
  filePath="$dirName/$file"
  if [ ! -f "$filePath" ]; then
    touch "$filePath"
  fi
done