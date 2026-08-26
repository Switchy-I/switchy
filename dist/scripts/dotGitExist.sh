#!/bin/bash

# Assign the provided path to a variable
DIR_PATH="$1"

# Check if the .git directory exists in the provided path
if [ -d "$DIR_PATH/.git" ]; then
  echo "true"
else 
  echo "false"
fi