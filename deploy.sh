#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Pushing to GitHub..."
  
  # Add all changes
  git add .
  
  # Commit changes
  if [ -n "$1" ]; then
    commit_message="$1"
  else
    echo "Enter commit message (default: 'Update website content'):"
    read commit_message
    if [ -z "$commit_message" ]; then
      commit_message="Update website content"
    fi
  fi
  git commit -m "$commit_message"
  
  # Push to main branch
  git push origin main
  
  echo "Deployed successfully!"
else
  echo "Build failed. Aborting deployment."
  exit 1
fi
