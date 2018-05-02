# webdriver-testrail

To run inside virtual machine

1. Download this repository - git clone https://github.com/melcma/webdriver-testrail.git
2. Install Ansible https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html
3. Install VirtualBox https://www.virtualbox.org/wiki/Downloads
4. Install Vagrant https://www.vagrantup.com/downloads.html
5. Navigate to folder with downloaded repository
6. Run "vagrant up webdriver" 
7. Provision with ansible with command "ansible-playbook playbook.yml -i hosts"
8. When it's successful, ssh into "vagrant ssh webdriver"
9. cd /var/www/webdriver/
10. Install npm packages with "npm install"
11. Install selenium server dependencies with "selenium-standalone install", might need to run with sudo
12. Run headless server "xvfb-run --server-args="-screen 0, 1366x768x24" selenium-standalone start"
13. Edit Testrail credentials in /var/www/wdio.conf.js
14. Run test suite "./node_modules/.bin/wdio wdio.conf.js"
