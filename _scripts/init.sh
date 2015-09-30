#! /usr/bin/env bash
set -xe

find . -type f \( -name "*.jpeg" -or -name "*.jpg" \) \
-exec jpegoptim --strip-all {} \;
find . -type f -name "*.png" -exec optipng {} \;
