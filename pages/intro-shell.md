---
layout: page
title: Intro Shell
permalink: /intro-shell/
---

Un [Shell](https://fr.wikipedia.org/wiki/Interface_syst%C3%A8me) est une interface utilisateur permettant d'accéder aux fonctions d'un OS, souvent en ligne de commande.
Le shell Unix en est un exemple, disponible sous linux et MacOS via la console || Terminal.
Il existe plusieurs : historiquement `sh` aujourd'hui le plus souvent `bash` ou encore `zsh` ou `fish`

[:book: Shell - Interface systeme ()](https://fr.wikipedia.org/wiki/Interface_système)

[Introduction aux lignes de commandes ( Code Academy)](https://www.codecademy.com/en/courses/learn-the-command-line)

**cd** permet de se déplacer dans l'ordinateur

```bash
$ cd /home/monDossier/Documents
```

**~** est un raccourci vers son dossier utilisateur

**/** est un raccourci vers son dossier racine de l'ordi

**cd ../** permet d'aller dans le dossier parent

**ls -a** permet d'afficher le contenu du dossier en cours

**pwd** permet d'afficher le chemin absolu( en partant de la racine de l'ordi ) du dossier dans lequel on se trouve

**mkdir nomDuDossier** permet de créer un dossier

**touch nomFichier** permet de créer un fichier

**rm** permet de supprimer un fichier
**rm -rf** permet de supprimer un dossier et son contenu

**cat** vous permet d'afficher le contenu d'un fichier

**mv fichier destination** permet de déplacer un fichier/dossier

**cp fichier destination** permet de copier/coller un fichier/dossier


#### Exercice

En n'utilisant que des lignes de commandes dans le terminal :
+ créez un dossier appelé 'exercices' dans votre dossier personnel
+ dans ce nouveau dossier, créez :
	+ un fichier 'index.html'
	+ un fichier 'styles.css'
	+ un sous-dossier 'images'


Après le module Code Academy, pour vous entrainer, vous pouvez essayer d'utiliser le petit jeu 'bash_bots'

pour ce faire, dans le terminal :

+ placez vous dans votre dossier d'utilisateur
+ créez un sous-dossier exercices
+ allez dans ce nouveau dossier exercices
+ tapez :

```bash
$ git clone https://github.com/Boyquotes/bash_bots.git
$ cd bash_bots
$ ./launch_bot.sh
```
