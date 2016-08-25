#!/bin/bash

set -o errexit # Exit on error

npm run build # Generate the bundled Javascript and CSS

git push heroku master # Deploy to Heroku
