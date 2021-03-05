#!/bin/bash

# Prep. files for Heroku deployment:

lein do clean, cljsbuild once prod

mkdir -p ../static

echo "copied from $(pwd)/resources/public/static" >../static/VOLATILE_CONTENT.txt
cp -R resources/public/static/* ../static/
