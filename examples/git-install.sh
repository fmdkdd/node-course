cd
git clone http://github.com/joyent/node.git
cd node
git checkout v0.4.12
./configure
make -j 4
sudo make install
