#!/bin/sh

# create env file
touch ".env"

# write vars to .env file
echo "{\"param1\": \"${1}\"}" >> .env
