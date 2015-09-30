#! /usr/bin/env bash
set -xe

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
  bundle exec rake publish
elif [[ $TRAVIS_BRANCH == 'stage' ]] ; then
  bundle exec rake stage
else
  echo 'Invalid branch. You can only deploy from master and stage.'
  exit 1
fi
