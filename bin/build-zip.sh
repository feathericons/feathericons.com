#!/usr/bin/env bash

mkdir static

# compress 'icons' directory into feather.zip
zip -r -j static/feather.zip ./node_modules/feather-icons/dist/icons/
