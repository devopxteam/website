#! /usr/bin/env bash
set -xe

apt-get -o Acquire::ForceIPv4=true update
apt-get -o Acquire::ForceIPv4=true -y install jpegoptim optipng
find . -type f \( -name "*.jpeg" -or -name "*.jpg" \) \
-exec jpegoptim --strip-all {} \;
find . -type f -name "*.png" -exec optipng {} \;
