sudo yum install git

git clone https://github.com/Ayoub-HEDFI/realtime-dashboard.git

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.bashrc

nvm install 16.0.0

nvm alias default 16.0.0

sudo yum install -y httpd

sudo systemctl start httpd

sudo systemctl enable httpd

sudo yum install iptables

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 1234

npm install -g pm2

cd realtime-dashboard

npm i

npm install -g pm2

pm2 start npm --name "my-app" -- run dev


