"vagrant up" to make it up

vagrant ssh
sudo apt-get update
sudo apt-get upgrade
sudo apt-cache search postgresql | less
   k - up
   j- down
   space -page down
   gg -very top
   G -very bottom
   / - start searching
   n - next result
   q - quit

sudo apt-cache show postgresql (for more info)
sudo reboot

sudo apt-get install postgresql

sudo su -       makes you the root user
sudo su - postgres makes me the user postgres

run psql

create role vagrant;
alter role vagrant with superuser;
alter role vagrant with login; 
\du to see it
ctrl d
\q

createdb "username" probably put the username there, no quotes


//now we need to install n

sudo apt-get install build-essential
sudo apt-get install curl
if not get - sudo apt-get install git
curl -L https://git.io/n-install | bash

it asks for me to open a new window or I can type . ~/.bashrc