#!/bin/sh
git add --all
git commit -m $1
git push origin master
ssh 104.197.10.86 "cd /usr/share/whitespell.com && git pull --force origin master"
ssh 104.197.10.86 "cp -R /usr/share/whitespell.com/www/* /var/www/whitespell.com/htdocs"