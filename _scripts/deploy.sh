#! /usr/bin/env bash

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
  bundle exec rake publish
  s3_bucket=$(cat s3_website.yml | grep -i s3_bucket | cut -d" " -f 2)

  cd _site

  files=$(find . -type f -print)

  for file in ${files}; do
    modification_time=$(stat -c '%y' ${file})
    expires_date=$(date -u -d "${modification_time} +1 year" '+%a, %d %b %Y %H:%M:%S GMT')
    s3cmd --access_key=${AWS_KEY_ID} --secret_key=${AWS_SECRET_KEY} \
    --add-header='Expires: ${expires_date}' \
    _site/ s3://${s3_bucket}/
  done
elif [[ $TRAVIS_BRANCH == 'stage' ]] ; then
  bundle exec rake stage
  s3_bucket=$(cat _stage/s3_website.yml | grep -i s3_bucket | cut -d" " -f 2)

  cd _site

  files=$(find . -type f -print)

  for file in ${files}; do
    modification_time=$(stat -c '%y' ${file})
    expires_date=$(date -u -d "${modification_time} +1 year" '+%a, %d %b %Y %H:%M:%S GMT')
    s3cmd --access_key=${AWS_KEY_ID} --secret_key=${AWS_SECRET_KEY} \
    --add-header='Expires: ${expires_date}' \
    _site/ s3://${s3_bucket}/
  done
else
  echo 'Invalid branch. You can only deploy from master and stage.'
  exit 1
fi
