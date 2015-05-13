#!/bin/sh
echo "Starting deployment";
ssh website-internal.whitespell.com "sudo mkdir -p /var/www/whitespell.com && sudo chmod -R 777 /var/www/whitespell.com";
scp -r www/* website-internal.whitespell.com:/var/www/whitespell.com;
ssh website-internal.whitespell.com "sudo chmod -R 755 /var/www/whitespell.com";
echo "Deployment Successful";


