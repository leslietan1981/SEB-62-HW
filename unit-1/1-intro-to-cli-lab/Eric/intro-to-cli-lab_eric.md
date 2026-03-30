mkdir star-wars
cd star-wars/
mkdir death-star
cd death-star/
touch darth-vader.txt
touch princess-leia.txt
touch storm-trooper.txt
cd ../../star-wars/
mkdir galaxy-far-far-away
cd galaxy-far-far-away/
mkdir tatooine
cd tatooine/
touch luke.txt
touch ben-kenobi.txt
mkdir millenium-falcon
cd millenium-falcon/
touch han-solo.txt chewbacca.txt
cd ../../../death-star
cp storm-trooper.txt ../galaxy-far-far-away/tatooine/
cd ../galaxy-far-far-away/tatooine/
mv luke.txt ben-kenobi.txt ./millenium-falcon/
cd millenium-falcon/
