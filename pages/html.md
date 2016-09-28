---
layout: page
title: HTML CSS
permalink: /html/
---

## Éléments HTML de base

- h# : les titres
- div : les boites
- p : les paragraphes
- span : sous partie imbriquée
  
[Nouveaux élements **HTML 5**](http://www.alsacreations.com/article/lire/1376-html5-section-article-nav-header-footer-aside.html)

  - `<header>...</header>`
  - `<section>...</section>`
  - `<nav>...</nav>`
  - `<aside>...</aside>`
  - `<article>...</article>`
  - `<footer>...</footer>`

## Introduction au CSS

### Ajouter des styles à un document

- inline

```html
<h1 style="color:red;" >Titre</h1>
```

- intégré ( embedded )

```html
<style type="text/css">
.warning{
    background-color:grey;
    color:white;
} </style>
```

- externe

```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

### Sélecteurs CSS

- **tag** : définition d'un style pour tous les élements d'un certain type 

```css
h1{
  color:#F00;
}
```

- **class** : définition d'un style pour "catégorie" d'élements, définie via l'attribut class

```css
.info{
  color:#0F0;
}
```

- id

```css
#entete{
  background:#0F0;
}
```

- \* : sélecteur universel

```css
*{
  margin:0;
}
```

[cf Article sur les "resets CSS"](http://www.alsacreations.com/astuce/lire/36-reset-css.html)

### Box model

- margin
- border
- padding

![box model css](http://www.codeproject.com/KB/HTML/567385/boxmodel-image.png)

### [display](https://developer.mozilla.org/fr/docs/Web/CSS/display) 

- block 
- inline
- inline-block
- ...

### [position](https://developer.mozilla.org/fr/docs/Web/CSS/position)

- static
- relative
- fixed
- absolute
- ...

### [float](https://developer.mozilla.org/fr/docs/Web/CSS/float) : right || left / [clear](https://developer.mozilla.org/fr/docs/Web/CSS/clear)

## Ressources débutants

- [CSS : Les bases](https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web/Les_bases_CSS)
- :fire: [le minimum à connaitre sur le positionnement CSS](http://fr.learnlayout.com)



## :golf: Défis
- Carte de visite » [initial](https://www.evernote.com/l/AAGo6pfntMhAAIFNNPwF9EjJvTuKi67nc24) » [final](https://www.evernote.com/l/AAGjwhH2R8dD2asm5mOILmwQiGR8SVq_1Os)

- Fruits » [initial](https://www.evernote.com/l/AAFLbIIhc1RM-pyqQxNLvErDYw1pbRDvl5U) » [final](https://www.evernote.com/l/AAFzndtqu8lJDJxOLUiYMuY8-G5Fg74Ww3Y)

## :warning: :loudspeaker: Attention à la lisibilité !

![wht*!](https://media4.giphy.com/media/l0NwsrAFr3czWgC0E/200.gif)

## J4 : HTML / CSS

- [CSS](https://developer.mozilla.org/fr/Apprendre/CSS/Les_bases/Le_fonctionnement_de_CSS)
- [Conception de site web](https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web/Quel_aspect_pour_votre_site)

### :golf: Défis

- Reproduire une mise en page de [ce type](../../../../img/1col.png)

### Défi 

Reproduire une mise en page de [ce type](../../../../img/4cols.png)

:warning: Attention à la structure de base de vos fichiers HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Titre fenêtre navigateur</title>
</head>
<body>
  <h1>Titre principal du document</h1>
  <!-- commentaire HTML -->

  <div>
    <p>Un Paragraphe</p>
    <p>Un deuxième Paragraphe</p>
  </div>

</body>
</html>
```

### Défi CSS

A partir de [ce code](http://jsbin.com/niriwo/edit?html,output), et en ne modifiant que les styles existants, reproduire :
 
![coins css](../../../../img/coins_css.png)

### Défi AirBnb
Pour le 25/07 : Reproduire au plus proche les deux premiers blocs de la [Homepage de AirBnb](../../../../img/airbnb.png)

## Formulaires


### Introduction aux Formulaires HTML

- form : method & action
- input
- label
- fieldset
- legend
- button : type : submit | reset | button

:warning: pour le moment, en JS sans envoi côté serveur il faut utiliser le type 'button' pour éviter le rechargement de page automatique

- input : text
- input : password
- input : checkbox
- input : radiobutton
- input : range

- select
- datalist

[Les principales balises de formulaire - JSBin ](http://jsbin.com/taxayo/6/edit?html,output)

#### Références

- [Comment structurer un formulaire](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML)
- [la balise input](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)
- [Formulaires](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML)
- [ Style de formulaire - Exemple :us: ](https://24ways.org/2009/have-a-field-day-with-html5-forms)

### :computer: formulaire d'identification

- Formulaire d'identification **html/css**
  - Champs : identifiant/mot de passe / mémoriser le mot de passe
  - boutons : valider , mot de passe perdu
  - effort graphique : branding / intégration d'un logo, style de la page et des élements du formulaire...

### Exploration et Pratique CSS

- [ CSS : Gestion des couleurs MDN :fr:](https://developer.mozilla.org/fr/docs/Web/CSS/color_value)

- [:fire: sélecteurs css : entrainement interactif](http://flukeout.github.io)

- :newspaper: [Bonnes pratiques CSS :fr:](http://openweb.eu.org/articles/grands-principes-de-construction-moderne-de-css)

### :computer: Pratique CSS

En partant de [ce code](http://jsbin.com/dinugehera/edit?html,output),
Représentez les notifications ci-dessous en modifiant seulement le contenu de la balise style, SANS RIEN TOUCHER dans le body

![img-modele](https://www.evernote.com/l/AAH8MzSrArBBbJSlookIlDitMMhIiQvJSk8B/image.png)

Icônes : [check](http://rxlabz.com/simplon/files/icons/icon_check_white.png) / [warning](http://rxlabz.com/simplon/files/icons/dialog-warning.png)

### :computer: Présentation de sélection web design

Créer un site web présentant 3 exemples de webdesign que vous appréciez.

Structure : page d'accueil avec liens vers trois pages de présentation d'un "beau" site
pour chaque page

![presentation-webdesign](../../../../img/prez_webdesign.png)

- au minimum 1 capture d'écran + description des 2/3 points/aspects appréciés » au mieux accompagnés d'un paragraphe

- :cherries: s'inspirer du design du site présenté

- :trophy: la page d'accueil reprend un élement de style des trois site sélectionné

:bulb: l'idée n'est pas de reproduire à l'identique le site sélectionné, mais plutôt d'essayer de dégager les principales caractéristiques, le "minimum suffisant" pour être un peu raccord.

### pratique Webdesign

Carte de visite / CV graphique
- choix d'une orientation graphique à partir de quelques références graphiques pré-sélectionnées

### :computer: Horloge/calendrier graphique HTML/CSS/JS 

Créer une page web affichant l'heure et/ou la date
- graphique
- Responsive
- animé ?

## Sass

:wrench: Sass : outil pour webdesign / intégration => ajoute des fonctionnalités au "langage" CSS (variables, opérations "arithmétique")

- [les bases](http://sass-lang.com/guide)
- :fire: [bac à SaSSble en ligne](http://sass.js.org) : cf. bouton "Convert en bas"
- [installation](http://sass-lang.com/install) ( un peu long et laborieux : il faut installer Ruby(+etc...) mais c'est plutôt une bonne chose de faite...)
- :books: [la doc complete](http://sass-lang.com/guide)

## Intro Responsive Web Design ( RWD )

### Les media queries

les medias queries permettent de définir des feuilles ou des régles CSS en fonctions de caractéristiques du navigateur, et du device
utilisé pour affiché une page html

```html

<!-- feuille de style pour écran ( ordinateur, tablettes, mobiles )-->
<link rel="stylesheet" href="styles.css" media="screen"/>

<!-- feuille de style pour impression-->
<link rel="stylesheet" href="impression.css" media="print"/>

<!-- feuille de style pour écran ( ordinateur, tablettes )-->
<link rel="stylesheet" href="styles_bigscreen.css" media="screen and (min-width:800px)"/>

<!-- feuille de style pour écran ( ordinateur, tablettes )-->
<link rel="stylesheet" href="styles_smallscreen.css" media="screen and (max-width:800px)"/>

```

Dans les feuilles de styles, certaines règles peuvent n'être appliquées que dans certaines conditions.

La syntaxe est : `@media [logic] mediaType [and (condition) [and...]]`

où logic est *only* ou *not* (optionnel), et [mediaType](https://developer.mozilla.org/fr/docs/Web/CSS/Media_queries) = screen || print || tv || ..

### Exemples

[Exemple - Responsive layout](http://jsbin.com/fawiko/1/edit?html,output) » le site passe de 1 à 2 colonnes selon la taille de la fenêtre

- **@media** screen and (condition){ /* ... */}
- **@media** screen and (condition1) and( condition2 ) { /* ... */}
- **@media** not print and (condition1) { /* ... */}
```

```css

body{
	font-size:1.2em;
}

@media screen and (min-width:1024px){
	body{
		font-size:1.5em;
	}
}

@media screen and (min-width:800px){
	body{
		font-size:2em;
	}
}

```

### Principaux critères de condition

- **min-width, max-width, min-height, max-height**
- **orientation**

### Lectures 

- [Media queries @alsacreations :fr:](http://www.alsacreations.com/article/lire/930-css3-media-queries.html)

- [Media queries @open-classroom :fr:](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/mise-en-page-adaptative-avec-les-media-queries)

- [Responsive design :us:](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/) => bien détaillé

- [Common RWD techniques :us:](http://www.sitepoint.com/common-techniques-in-responsive-web-design/) avec de bonnes illustrations

- [MDN media queries :fr: ](https://developer.mozilla.org/fr/docs/Web/CSS/Media_queries) : liste de medias features expliquées


### Viewport : +||- permet d'adapter la taille de la page à la taille de l'appareil (device) utilisé 

Avec l'apparition de variété de densité de pixels sur les écrans, il est utile de pouvoir dissocier le nombre de pixels réels, du nombre de pixels "à afficher".
Le viewport permet de préciser que la taille de l'écran à prendre en compte est le 'device-width', c'est à dire le nombre de pixels représenté, et non le nombre de pixels réel (densité de pixels / ppi).

Ainsi sur une page intégrant un tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, 
un iphone ayant une résolution "réelle" de 640*960, sera consideré comme un écran de 320px de large, et affichera le contenu en fonction.
 
![novp](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/imgs/no-vp.png)
![vp](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/imgs/vp.png)

- [Comprendre le viewport - Alsacréation](http://www.alsacreations.com/article/lire/1490-comprendre-le-viewport-dans-le-web-mobile.html)
- [Google Web Fundamentals RWD ](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/?hl=fr)

## Unités

- width, height : privilégiez les %, éviter les tailles en px pour les élements qui doivent s'adapter

- font-size, padding, margin : privilégiez rems/ems &| vw » taille relative

- [Exemple](http://jsbin.com/fegopom/edit?html,output)

### Lectures 

- [rem/em/px Graphikart](https://www.grafikart.fr/tutoriels/html-css/font-size-rem-em-px-477)
- [Viewport sized typo](https://css-tricks.com/viewport-sized-typography/)
- [RWD articles](http://thenewcode.com/925/Web-Developer-Reading-List-Responsive-Design)
- [em Vs rem](http://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)

## Conception

**Du bon sens**(!!!)

- [autres exemples de mauvaises conceptions](http://www.pleated-jeans.com/2014/11/10/24-examples-of-extremely-crappy-design/)
- [bad designs](http://www.baddesigns.com/examples.html)

Pour un **site web** essayer de comprendre :

- l'information importante qui doit être véhiculée
- le public visé
- ( un "objectif quantifiable" )
 
ou pour une application / back-office / 

  - les tâches devant être accomplies : fréquence, workflow » empathie
  - études de l'existant et compréhension des limites, des axes d'améliorations nécessaires et/ou souhaitables.
  - exemples : formulaires » cf. [Conférence de LukeW - UI/UX](http://www.lukew.com/presos/) 

## Intro Accessibilité
- [:newspaper: introduction à l'accessibilité](http://code.tutsplus.com/fr/tutorials/accessibility-part-1-introduction--cms-21791)
 : Seule l'introduction est en francais, les parties suivantes, plus concretes, sont en anglais mais présentent la base des bonnes pratiques.

- [Référence Qualité HTML](http://checklists.opquast.com/oqs-v3/) : liste des points à valider pour respecter l
- [Principales checklists HTML](https://checklists.opquast.com/fr/)

## librairies CSS

elles offrent le plus souvent :

- système de [grille](http://www.opentuto.com/comprendre-le-concept-de-grille-dans-le-webdesign/) ou de layout
- composants
- librairies d'icones
- homogéneisation de certains comportements entre les principaux navigateurs
- ...

### [Bootstrap](http://getbootstrap.com/)

Librairie CSS créé par les équipes de Twitter

- un système de grilles responsives [exemple]({{site.url}}/pages/exemples/bootstrap/bootstrap-grille.html)
- des composants ( [Dropdown](http://getbootstrap.com/components/#dropdowns),
[Button group](http://getbootstrap.com/components/#btn-groups), [Navigation bar](http://getbootstrap.com/components/#navbar)
[alertes modales](http://getbootstrap.com/javascript/#modals)...)
- un thème HTML/CSS de base et des [thèmes alternatifs](https://bootswatch.com/)
- ...

#### Utilisation basique

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Exemple Bootstrap</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Compatibilité IE < 9-->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<h1>Page bootstrap de base</h1>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>
```

#### Tutos Bootstrap

- [Bootstrap par la pratique](http://www.opentuto.com/informatique/maitriser-bootstrap-3-par-la-pratique/)
- [intro Bootstrap - OC](https://openclassrooms.com/courses/prenez-en-main-bootstrap)
- [:tv: Utiliser Bootstrap :fr:](http://www.grafikart.fr/tutoriels/html-css/bootstrap-twitter-182)
  
### [Foundation](http://foundation.zurb.com)

- un système de grilles responsives
- distinction versions:
  - [sites](http://foundation.zurb.com/sites.html),
  - [email](http://foundation.zurb.com/emails.html)
  - & [application web](http://foundation.zurb.com/apps.html) (basé sur AngularJS) 
- ...

#### Tutos Foundation

- [:tv: intro foundations](https://www.youtube.com/watch?v=2QcpR6cHpnk&list=PL6oNLEZTnXsg2f3scFapWJsjywyMKpsF9) (12 videos :us:)

### [Material Design Lite](https://getmdl.io)

Librairie CSS reprenant les principes imaginés / développés par les équipes de Google Design dans la phase de d'homogénéisation graphique.
  
- reprend en partie les principes du [Material Design](https://material.google.com) 
- permet une homogéneisation graphique web + mobile
- principe de layout (pas vraiment de grille) 


### [Polymer](https://www.polymer-project.org)

Projet plus "ambitieux" : au delà des feuilles de styles = création d'une librairie de composants standards ( dont certains pour la mise en forme / layout ).

- Librairie de composants 
- Librairie de création de composants 

### :computer: Défi tps limité (3h)

- Mettre en forme [ce contenu](https://gist.github.com/rxlabz/995e4843b54933fd203e1b1fdba40b73) (HTML/CSS)

## Outils

- Des images à la taille voulue : [Placehold it](https://placehold.it)
- **Introduction aux DevTools** [tutoriels : chapitres 1 & 2](http://discover-devtools.codeschool.com/)
  - :fire:[Nouveautés 2016 Chrome Dev Tools :us:](https://www.youtube.com/watch?v=x8u0n4dT-WI) : Device mode, css edition, colors & autres tips...
- [CodePen](http://codepen.io/) /
- [Can I Use](http://caniuse.com/#cats=HTML5) : compatibilité navigateurs
- :snowboarder: [Emmet](http://docs.emmet.io) : syntaxe/plugin permettant d'écrire + vite HTML
Par exemple tapez `ul>li{item $}*3` suivi de `Tab` génère :

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```
  - [Syntaxe emmet un résumé](http://docs.emmet.io/cheat-sheet/)
  - [plugins Emmet](http://emmet.io/download/) ( pour [atom](https://atom.io/packages/emmet) )
- Tailles d'écrans : [Screensiz.es](http://screensiz.es/phone) / [mydevice.io](http://mydevice.io/devices/)
- http://www.faux-texte.com
- Installation Mini server local (node + lite-server)

```bash
sudo apt-get update
sudo apt-get install npm
sudo apt-get install nodejs
sudo apt-get install nodejs-legacy
sudo npm install lite-server -g
```

## :bulb: Tips

- :warning: Parfois les marges se comportent étrangement : cf. [Fusion des marges]( http://www.alsacreations.com/article/lire/629-fusion-des-marges.html)


- :warning: pour éviter que les marges et les padding soit ajoutés à la largeur width d'un bloc

```html
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

## :fire: inspirations Webdesign

- [awwwards](http://www.awwwards.com/)
- [FWA](http://www.thefwa.com/)
- [CSS design awards](http://www.cssdesignawards.com/)
- [Best designs](https://www.thebestdesigns.com/)
- [vandelay design](http://www.vandelaydesign.com/)
- [blog du webdesign](http://www.blogduwebdesign.com/)
- [www.siteinspire.com](http://www.siteinspire.com/)
- [Dribbble : travaux de graphistes](https://dribbble.com/)
- [Behance: travaux de graphistes](https://behance.com/)
- [inspirations web design mobile](http://www.webdesignertrends.com/2015/08/26-sites-applications-mobiles-inspiration/)
- [Conférence de LukeW - UI/UX](http://www.lukew.com/presos/)

## Ressources

- :cat: [CSS & chats :us:](https://robots.thoughtbot.com/basic-css-selectors-explained-with-cats) : petite étude sur les sélecteurs "hiérarchiques"
- :fire: [le webdesign en 4mn](http://jgthms.com/web-design-in-4-minutes/)