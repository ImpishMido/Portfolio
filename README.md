# Portfolio Lola Van Vooren

Site statique construit avec Astro, publie sur GitHub Pages.
Le contenu est en Markdown, la mise en forme en Astro. Pour modifier le site,
dans 90 % des cas il suffit d'editer un fichier `.md` et de pousser sur `main`.

## Demarrage

Il faut Node 20 ou plus (https://nodejs.org).

```bash
npm install      # a faire une seule fois
npm run dev      # site en local sur http://localhost:4321
npm run build    # genere le site final dans dist/
```

Apres le premier `npm install`, un fichier `package-lock.json` apparait.
Il doit etre commite, sinon le deploiement automatique echoue.

## Ou se trouve quoi

```
src/content/projects/   un fichier .md par projet  <- c'est ici qu'on ecrit
src/pages/index.astro   la page d'accueil (texte de presentation, outils, contact)
src/pages/projects/     le gabarit d'une page projet (a ne pas toucher en general)
src/layouts/Base.astro  en-tete, pied de page, balises meta
src/styles/global.css   toutes les couleurs et la typo, en haut du fichier
src/components/         petits blocs reutilisables (carte projet, video YouTube)
public/media/           images, gifs, captures
public/cv/              le CV en PDF
.github/workflows/      le deploiement automatique
```

## Ajouter un projet

Creer un fichier dans `src/content/projects/`, par exemple `mon-projet.md`.
Le nom du fichier devient l'adresse de la page (`/projects/mon-projet/`).
Copier l'en-tete d'un fichier existant et remplir les champs. `minor: true`
envoie le projet dans la section "Other works". `order` controle l'ordre d'affichage.

Le champ `embed` accepte un lien YouTube : la video s'affiche alors en haut de la page.
Pour une image ou un gif, deposer le fichier dans `public/media/` puis, dans le Markdown :
`![texte alternatif](/media/mon-fichier.gif)`.

Les videos et les gifs ne sont pas stockes dans le depot s'ils sont lourds :
YouTube en non repertorie pour les videos, `public/media/` uniquement pour les gifs legers
(moins de 5 Mo, sinon le chargement de la page devient penible).

## Mise en ligne (une seule fois)

1. Creer un depot **public** sur GitHub, y pousser ce dossier sur la branche `main`.
2. Sur GitHub : Settings > Pages > Build and deployment > Source = **GitHub Actions**.
3. Toujours dans Settings > Pages, renseigner le Custom domain.
4. Mettre le meme domaine dans `public/CNAME` et dans `site:` de `astro.config.mjs`.
5. Chez OVH, zone DNS du domaine :
   - 4 enregistrements A sur le domaine nu vers 185.199.108.153, 185.199.109.153,
     185.199.110.153 et 185.199.111.153
   - 1 CNAME `www` vers `<pseudo-github>.github.io.` (avec le point final)
   - supprimer l'enregistrement A par defaut d'OVH vers sa page de parking
6. Attendre la validation du certificat, puis cocher "Enforce HTTPS".

Ensuite, chaque `git push` sur `main` reconstruit et republie le site tout seul.

## Ce qui reste a faire

Les TODO sont ecrits en commentaires HTML dans les fichiers, donc invisibles sur le site.
Pour tous les retrouver : `grep -r "TODO" src public`.

A faire en priorite :
- [ ] Le domaine, dans `public/CNAME` et `astro.config.mjs`
- [ ] Le CV en PDF dans `public/cv/lola-van-vooren-cv.pdf`
- [ ] Les gifs : les deposer dans public/media/, puis les lister dans le champ "banner" de la fiche projet (bandeau en haut de page) et dans le champ "cover" (vignette sur l accueil)
- [ ] La description de chaque projet : ce que Lola a code elle-meme, pas ce que l'equipe a fait
- [ ] Completer les fiches "Other works" (dates, roles, moteurs)
- [ ] Ajouter GitHub et LinkedIn dans la section "About me"
- [ ] Decider si le numero de telephone doit etre public (il est deja sur le CV)

## Les gifs

Deposer les fichiers dans `public/media/`, puis dans la fiche projet :

```yaml
banner: ["/media/resident-devil-1.gif", "/media/resident-devil-2.gif"]
cover: "/media/resident-devil-cover.gif"
```

`banner` est le bandeau pleine largeur en haut de la page projet. Un seul gif s'affiche
seul, plusieurs s'enchainent avec un fondu toutes les 6 secondes, et des pastilles
permettent de passer de l'un a l'autre. `cover` est la vignette de la carte sur l'accueil,
elle peut etre le meme fichier ou une image fixe plus legere.

Format conseille : 16:9 ou plus large, sous 5 Mo par gif. Au-dela, passer par YouTube
(champ `embed`), sinon la page devient lente sur mobile.
