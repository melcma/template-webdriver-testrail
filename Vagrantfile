# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-18.04"

  config.vm.provider :virtualbox do |v|
    v.memory = 4098
    v.linked_clone = true
    v.cpus = 2
  end

  config.vm.define "webdriver" do |webdriver|
     webdriver.vm.hostname = "webdriver"
     webdriver.vm.network :private_network, ip: "192.168.100.9"
     webdriver.vm.network :forwarded_port, guest: 22, host: 2227, id: "ssh"
     webdriver.vm.network :forwarded_port, guest: 80, host: 8085, id: "localhost"

     webdriver.vm.network :forwarded_port, guest: 8012, host: 8012, host_ip: "127.0.0.1", auto_correct: false
     webdriver.vm.network :forwarded_port, guest: 8013, host: 8013, host_ip: "127.0.0.1", auto_correct: false

     webdriver.vm.synced_folder "www/", "/var/www"
   end
end

