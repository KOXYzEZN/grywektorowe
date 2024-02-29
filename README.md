# Gry Wektorowe
Motorola Science Cup 2024, Gry Wektorowe.
Wszystkie gry można uruchomić za pomocą pliku HTML zawartego z resztą plików.

# Asteroids
Gra Asteroids to gra w której bronisz się przed nadciągającymi wrogami i asteroidami, które są w twojej drodze.  Gra ciągnie się w nieskończoność, aż gracz nie wyjdzie albo nie zrestartuje strony.
## Zrzuty ekranu
![zrzut1Asteroids](/asteroids/Zrzut1.png "Zrzut 1 - Asteroids")
  
![zrzut2Asteroids](/asteroids/Zrzut2.png "Zrzut 2 - Asteroids")
## Opis plików gry
 - player.js – zawiera funkcje rysowania oraz pobierania kształtów statku gracza<br>
 - projectiles.js – zawiera funkcje obsługujące pociski gracza, wrogów oraz ich rysowanie i uaktualnienie. Również zawiera klasę Asteroid, która rysuję, uaktualnia, oraz obsługuje kolizje z pociskami gracza, wroga, ale również z innymi asteroidami.<br>
 - collisionDetectors.js – tam znajdują się wszystkie funkcje związane z kolizjami.<br>
 - enemy.js – obsługuje funkcje rysowania, strzelania, obracania i dashowania przeciwnika podstawowego.<br>
## Obsługa gry
W – poruszanie się do przodu <br>
A – obrót statku w lewą stronę (przeciwnie do ruchu wskazówek zegara) <br>
D – obrót statku w prawą stronę (zgodnie ze wskazówkami zegara)<br>
LPM (Lewy przycisk myszy) – strzelanie<br>
# Tempest
Gra Tempest to zaawansowana gra, w której musisz przeżyć w tunelu pełnym wrogich robaków i muszek. Gracz musi unikać i niszczyć przeciwników poruszając się po trójwymiarowej planszy tunelu.
## Opis plików gry
 - Plansza.js – rysuje plansze po której się on porusza<br>
 - Muszka.js – plik zawierający wszystkie funkcje dotyczące przeciwnika (Muszki)<br>
 - Gracz.js – zwiera funkcje dotyczące ruchu i rysowania gracza<br>
## Kontrolki
A – poruszanie się w lewo (kierunek przeciwny do wskazówek zegara)<br>
D – poruszanie się w prawo (kierunek zgodny ze wskazówkami zegara)<br>
LPM (Lewy przycisk myszy) - strzelanie <br>
# Battlezone
Gra Battlezone polega na destrukcji wrogich czołgów, za pomocą naszego działa. Gra jest w FPP. Na mapie losowo pojawiają się przeciwnicy, którzy są od razu agresywni dla nas.<br>
## Zrzuty ekranu
![zrzutBattlezone](/battlezone/Zrzut_ekranu_2024-02-29_214742.png "Zrzut ekranu - Battlezone")
## Opis plików gry
 - Battlezone.js – Główny plik, który obsługuje rysowanie krajobrazu, wrogów oraz pocisków i wszystkich funkcji z nimi związanych.
## Sterowanie działem
W – poruszanie się do przodu<br>
S – poruszanie się do tyłu<br>
A – obrót w lewo<br>
D – obrót w prawo<br>
Spacja – strzelanie<br>
