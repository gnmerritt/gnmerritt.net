#!/bin/bash
set -e

bundle exec jekyll build
/usr/local/bin/rsync -Clrpz --progress build/ nathan@coinbot:~/gnmerritt.net.html/
