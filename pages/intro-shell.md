---
layout: page
title: Intro Shell
permalink: /intro-shell/
---

Un [Shell](https://fr.wikipedia.org/wiki/Interface_syst%C3%A8me) est une interface utilisateur permettant d'accéder aux fonctions d'un OS, souvent en ligne de commande.
Le shell Unix en est un exemple, disponible sous linux et MacOS via la console || Terminal.
Il en existe plusieurs : historiquement `sh` aujourd'hui le plus souvent `bash` ou encore `zsh` ou `fish`

[:book: Shell - Interface systeme ()](https://fr.wikipedia.org/wiki/Interface_système)

[Introduction aux lignes de commandes ( Code Academy)](https://www.codecademy.com/en/courses/learn-the-command-line)

### Terminal / Console

![shell prompt]({{site.url}}/img/shell-prompt.png)


`cd` permet de se déplacer dans l'ordinateur

```bash
$ cd /home/monDossier/Documents
```

`cd ../` permet d'aller dans le **dossier parent**

Les déplacements peuvent s'effectuer en *chemin relatif* ou en *chemin absolu*

```bash
$ cd /home/monDossier/Documents
$ cd ../css
```

`pwd` permet de connaitre l'emplacement courant

`~` est un raccourci vers son **dossier utilisateur**

`/` est un raccourci vers le **dossier racine de l'ordinateur**

`ls -a` permet d'afficher le **contenu du dossier en cours**

`pwd` permet d'afficher le chemin absolu( en partant de la racine de l'ordi ) du dossier dans lequel on se trouve

`mkdir nomDuDossier` permet de créer un dossier

`touch nomFichier` permet de créer un fichier

`rm` permet de supprimer un fichier

`rm -rf` permet de supprimer un dossier et son contenu

`cat` vous permet d'afficher le contenu d'un fichier

`mv fichier destination` permet de déplacer un fichier/dossier

`cp fichier destination` permet de copier/coller un fichier/dossier

<details>
<summary>Shortcuts / Raccourcis</summary>

<ul>
    <li> vider l'écran ctrl + L / Cmd + K</li>
    <li> quitter process en cours » ctrl + C</li>
    <li> quitter/fermer shell en cours » ctrl + D (si ligne vide)</li>
</ul>

<h4>Déplacement</h4>
<ul>
    <li> fin de ligne <em>ctrl + A</em></li>
    <li> début de ligne » ctrl + E</li>
    <li> caractère suivant » <em>ctrl + F</em></li>
    <li> caractère precedent » <em>ctrl + B</em></li>
    <li> mot suivant » <em>Esc + F</em></li>
<li> mot précédent » <em>Esc + B</em></li>
</ul>

<h4>Suppressions</h4>
<ul>
    <li> mot avant » <em>ctrl + W</em></li>
    <li> ligne après curseur » <em>ctrl + K</em></li>
</ul>

<a href="https://github.com/0nn0/terminal-mac-cheatsheet"> + de raccourcis</a>

</details>


## Ressources

- [OpenClassroom Bash](https://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/vim-l-editeur-de-texte-du-programmeur)
- [Guide Bash débutant](http://guidespratiques.traduc.org/guides/vf/Bash-Beginners-Guide/Bash-Beginners-Guide.html)
- [Code Academy : Learn the command-line](https://www.codecademy.com/learn/learn-the-command-line)

## Défis / Jeu

En n'utilisant que des lignes de commandes dans le terminal :
+ créez un dossier appelé 'projet' dans votre dossier personnel
+ dans ce nouveau dossier, créez :
	+ un fichier 'index.html'
	+ un fichier 'styles.css'
	+ un sous-dossier 'images'

Après le module Code Academy, pour vous entrainer, vous pouvez essayer le petit jeu ['bash_bots'](https://github.com/Boyquotes/bash_bots)

Pour ce faire, dans le terminal :

+ placez vous dans votre dossier d'utilisateur
+ créez un sous-dossier exercices
+ allez dans ce nouveau dossier exercices

```bash
$ git clone https://github.com/Boyquotes/bash_bots.git
$ cd bash_bots
$ ./launch_bot.sh
```
