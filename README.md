# Klaszterező webapplikáció próbafeladat, négy darab alfeladattal.  
  
A teljes feladat, egy olyan felhőben futó backenddel és frontend felülettel rendelkező webes applikáció létrehozása, amely képes a beadott kezdeti vektorhalmazok (kép embedding-ek) mentésére, újra klaszterezésére (csoportosítására) és az új klaszterek (csoportok) megjelenítésére.  
  
### A data elnevezésű (1. pont) feladathoz tartózó megoldás  
- A futtatható binary fájlok a *klaszterezo_algoritmus_bin* mappában található.  
- Futtatás esetén az első argumentum a megfelelően formázott kezdeti vektorhalmazok, a második pedig a threshold értéke.  
- Minta: ./lexunit-exercise-linux-amd64 "$(cat test_groups.json)" 1.0
