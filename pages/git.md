---
layout: page
title: Git
permalink: /git/
---

Git est un gestionnaire de versions, principalement utilisé en ligne de commande (CLI - Command Line Interface), créé par Linus Torvald dans le cadre du développement de Linux .

___

##  Ressources

- [:tv: Introduction à Git & Github :fr:](https://www.youtube.com/watch?v=V6Zo68uQPqE)

- [:book: Git - bouquin en ligne complet :fr:](https://git-scm.com/book/fr/v1)

- [:memo: Bon tutos :us:](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)

___

## Introduction

### Configurer l'utilisateur Git

Avant d'utiliser Git on doit le configurer pour qu'il associe notre nom et notre mail à nos sauvegardes

```bash
git config --global user.name "votreNom"
git config --global user.email votre@mail.com
```

### Initialiser le suivi git pour un dossier local

+ ouvrez le terminal et déplacez vous jusqu'au dossier que vous souhaitez initialiser
+ initialisez

```bash
cd chemin/dossier/
git init
```

### *Status* d'un dossier

 Quels fichiers ont été créés/modifiés depuis la dernière sauvegarde

```bash
git status
```

### Modification et sauvegarde

Pour créer une sauvegarde / un *commit* il faut d'abord ajouter
les fichiers ayant été modifiés, et que l'on souhaite intégrer à la sauvegarde.

```bash
git add fichier1.html fichier2.js
git add .
```

Notez que `git add .` permet de d'ajouter tous les fichiers modifiés à la sauvegarde.

Pour effectuer la sauvegarde, on utilise la commande *commit*,
en précisant que l'on souhaite ajouter une description de la sauvegarde

```bash
git commit -m "message de commit"
```

### Afficher l'histoire d'un dossier

```bash
git log
```


### Attacher un :octocat: github distant à un dossier git local

```bash
git remote add origin https://github.com.../projet.git
```

Pour vérifier à quel dossier distant est rattaché un projet :

```bash
git config --list
```

Pour supprimer l'origin de la config
```bash
git remote rm origin
```

### Envoyer une nouvelle version sur Github :octocat:

```bash
git push -u origin master
```

### Récupérer une nouvelle version depuis Github :octocat:

Si le dossier a été modifié sur github, vous devez mettre à jour votre version locale,
avant d'envoyer vos nouvelles modifications.

```bash
git pull origin master
```
Cette commande permet de récupérer les dernières modifications enregistrées sur github
et qui n'avaient pas été importées dans votre dossier locale.

Par défaut Git arrive à gérer la fusion des modifications,
mais il arrive que des conflits apparaissent. Dans ces cas, Git nous donne la possibilité
de choisir quelles modifications garder, entre celle définies dans l'origin distant et celles
 de notre version locale.

### Importer un dossier depuis github :octocat:

```bash
git clone https://github.com/.../nomProjet.git
```


### Corriger une fausse manip

**Ré-écrire la description du dernier commit**

```bash
git commit --amend
```
On entre ensuite dans l'éditeur par défaut du terminal ( vim ou nano ) pour éditer le fichier.

Modifier le message, sauvegardez et quittez
**nano** :
+ éditez, puis ctrl X ,
+ puis Y pour valider,
+ puis Entrée

**vim** :
+ i pour entrer en mode insertion (edition),
+ esc(échap) pour en sortir.
+ :wq pour enregistrer et quitter

**Supprimer un fichier de toutes les "sauvegardes"**

```bash
git rm --cached fichierACommitPlusTard.js
```

___

## Les branches

Les branches Git permettent d'apporter des modifications à un dossier, tout en préservant l'état original, et en permettant facilement d'y revenir ( sans rien perdre de son "test").
La branche principale s'appelle **master**.
La branche principale d'un projet reste toujours en principe sur le dernier "état fonctionnel",
et les modifications se font sur des branches jusqu'à ce qu'on soit sûr qu'elles fonctionnent.

Un nouvelle branche permet par exemple d'expérimenter différentes solutions sans altérer l'état "principal" du projet.

Git permet de facilement passer d'une branche à une autre, et même de les faire évoluer en parallèle.

```bash
git branch nomDeMaBranche
git checkout nomDeMaBranche
 ```
 ou version courte en ajoutant `-b` à la commande `checkout`:

```bash
git checkout -b nomDeMaBranche
```

Une fois que l'on a effectué et commité les modifications souhaitées, on peut revenir à la branche principale,
*master* et fusionner les modifications effectuées dans l'autre branche.

```bash
git checkout master
git merge nomDeMaBranche
```

Pour supprimer la branche fusionnée

```bash
git branch -d nomDeMaBranche
```

[ :memo: Plus d'infos sur les branches](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)


## Collaborer sur un projet

### Fork et pull-request

Le fork permet de créer dans son compte github,
une copie d'un projet existant, de manière à pouvoir y apporter des modifications,
et les proposer au propriétaire du projet par la suite

Une fois un projet forké sur github ( ou bitbucket.com ), on peut le cloner sur son poste avec la commande habituelle :
 `git clone https://github.com/moi/leprojet.git`

Une fois cloné, il faut créer une branche sur laquelle on apportera nos modifications.

```bash
git checkout -b mesModifications
```

Une fois les modifications terminées, on peut pusher notre branche sur Github

```bash
git push -u origin mesModifications
```

Pour faire un pull request il faut s'assurer que nos modifications sont applicables à la dernière version
du dossier original. En effet si des changements ont été effectués depuis nos modifications pourraient créer des conflits.
Pour s'assurer que notre fork est bien à jour, il faut ajouter le .git original ( celui du projet que l'on a forké )
dans la liste de nos remotes, avec le nom *upstream*

```bash
git remote add upstream http://github.com/auteur/projet.git
git branch -a
```

`git branch -a` permet de voir toutes les branches du projet : locales et distantes

 Ensuite pour mettre à jour notre projet local,
 et y intégrer les modifications qui ont été effectuées sur le dépot original (la branche upstream/master)

```bash
git fetch upstream
git merge upstream/master
```

Ensuite sur Github on peut créer une 'pull request' pour ajouter nos modifications au projet original.

[:tv: Forker / merger / pull requester sur Github :fr: 15mn](https://youtu.be/D5QGiIM1j20?t=13m19s)


### Merger une pull request
1. création d'une branche locale pour recup du code de la PR

``` bash
git checkout -b nom-branche-PR master
git pull https://github.com/simplon-benoitd/POE1.git master
```

2. merge de la nouvelle branche

``` bash
git checkout master
git merge --no-ff simplon-benoitd-master
git push origin master
```

**De la lecture sur le sujet**

![wwstime](https://media0.giphy.com/media/WQD6NEEsVTvxK/200.gif)

[:memo: Différents workflow pour travailler à plusieurs sur un projet :us:](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)

[:memo: using pull requests :us:](https://help.github.com/articles/using-pull-requests/)

[:memo: Fork a repo :us:](https://help.github.com/articles/fork-a-repo/)

[:memo: fork, branches, commits & pull request :us:](https://github.com/sevntu-checkstyle/sevntu.checkstyle/wiki/Development-workflow-with-Git:-Fork,-Branching,-Commits,-and-Pull-Request)
