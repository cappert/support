---
layout: page
title:  Commandes Shell
date:   2016-- 09:00:00 +0200
permalink: /cmd-shell/
---

**Exemples** : date, cal, df » espace disque, exit

## Emplacement / navigation

- `pwd`
- `cd`
  - `/` » racine de l'ordinateur
  - `~` » racine du dossier utilisateur ~
  - `..` » dossier parent
  - `.` » dossier courant
  - `-` » dossier précédent
- ls
  - `-a` : all, `-h` : human, `-d` : directory

## Fichiers

[ls less file](http://linuxcommand.org/lc3_lts0030.php)

- less » lecture de fichier
  - Quitter » q
  - Fin de fichier » G
  - Début » 1G

## Manipulation de fichier

- `cp`
- `mv`
- `rm`
- `touch`
- `mkdir`
- `rmDir`

### Wildcards

- \* n'importe **quel(s)** caractères ( 1 ou plusieurs )
  - `rm test_*` » supprimera tous les fichiers dont le nom commencent par *test_*
- ? n'importe quel caractère ( 1 seul )
- [caractères]
- [[:type:]] » digit || alnum || alpha || lower || upper
- Intervalles : \[a-z\] , \[0-9\]

```bash
mv ~/test[[:digit]]* ~/tests/
mv ~/test[0-9].txt ~/tests/
mv ~/*[0-9].txt ~/tests/
```