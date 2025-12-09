#!/bin/bash

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy all necessary files and directories
cp -r css dist/
cp -r js dist/
cp -r images dist/
cp *.html dist/

# Fix paths in HTML files
for file in dist/*.html; do
  sed -i 's|href="/|href="./|g' "$file"
  sed -i 's|src="/|src="./|g' "$file"
  sed -i 's|href="\.\./images/|href="./images/|g' "$file"
  sed -i 's|src="\.\./images/|src="./images/|g' "$file"
  sed -i 's|href="\./images/|href="./images/|g' "$file"
  sed -i 's|src="\./images/|src="./images/|g' "$file"
done

echo "Build complete! Files are in the dist/ directory."
