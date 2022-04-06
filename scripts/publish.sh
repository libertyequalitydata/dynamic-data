#!/bin/bash 

# @prifina/oura@0.0.5

#lerna publish from-package --dist-tag "v${1}" --force-publish=@prifina/$2

#lerna publish --no-dist-tag  --force-publish "*"
lerna publish --no-dist-tag  --force-publish "@prifina/oura-data"