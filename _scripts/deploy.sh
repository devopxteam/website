#! /usr/bin/env bash

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
  bundle exec rake publish

  s3_bucket=$(cat s3_website.yml | grep -i s3_bucket | cut -d" " -f 2)
  expires=$(date '+%a, %d %b %Y %H:%M:%S GMT' -d '+1 year')
  s3cmd --access_key=${AWS_KEY_ID} --secret_key=${AWS_SECRET_KEY} \
  --recursive modify --add-header="Expires: ${expires}" s3://${s3_bucket}/
elif [[ $TRAVIS_BRANCH == 'stage' ]] ; then
  bundle exec rake stage

  s3_bucket=$(cat s3_website.yml | grep -i s3_bucket | cut -d" " -f 2)
  expires=$(date '+%a, %d %b %Y %H:%M:%S GMT' -d '+1 year')
  s3cmd --access_key=${AWS_KEY_ID} --secret_key=${AWS_SECRET_KEY} \
  --recursive modify --add-header="Expires: ${expires}" s3://${s3_bucket}/
else
  echo 'Invalid branch. You can only deploy from master and stage.'
  exit 1
fi
