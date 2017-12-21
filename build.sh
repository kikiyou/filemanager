#!/bin/bash

# Install rice tool if not present
if ! [ -x "$(command -v rice)" ]; then
  go get github.com/GeertJohan/go.rice/rice
fi

# Clean the dist folder and build the assets
rm -rf assets/dist
npm run build
rm -f assets/dist/sw.js
mkdir -p assets/dist/filemanager 
mv assets/dist/static assets/dist/filemanager
# Embed the assets using rice
rice embed-go
