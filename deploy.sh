#!/bin/sh
git add --all
git commit -m $1
git push origin master
ssh 104.197.10.86 "cd /var/www/whitespell.com/htdocs && git pull --force origin master"