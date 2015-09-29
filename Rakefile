require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'
require 's3_website'
require 'jekyll-multiple-languages'

task :default => :server

desc 'Build site with Jekyll'
task :build do
  system 'bundle exec compass compile'
  system 'bundle exec jekyll build'
end

desc 'Build and start local server'
task :serve do
  system 'bundle exec compass watch &'
  system 'bundle exec jekyll serve -w --baseurl="" --drafts'
end

def jekyll(opts = '')
  system 'rm -rf _site'
  system 'jekyll ' + opts
end

desc "Generate and publish site to Amazon S3."
task :publish => [:build] do
  system 'bundle exec s3_website push'
end

desc "Generate and publish stage site to S3."
task :stage => [:build] do
  system 'bundle exec s3_website push --config-dir=_stage'
end
