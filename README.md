# NGËLEL IA — Site officiel prêt pour la production

## Choix définitifs de cette version
- site uniquement en français ;
- aucun bouton FR/EN ;
- aucun bouton de changement de thème ;
- interface noire ;
- textes blancs ;
- accents visuels uniquement en blanc / gris ;
- logo NGËLEL IA au centre de la hero ;
- présentation claire de nos expertises en Data Engineering, Data Analytics, Data Science et intelligence artificielle ;
- présentation de NGËLEL DATA, NGËLEL FINANCE et NGËLEL pour la gestion des écoles ;
- laboratoire enrichi avec six axes de recherche et une zone de publications facile à mettre à jour ;
- contact et demande de démo vers contact@ngelelia.com ;
- aucun Docker ;
- aucun framework obligatoire.

## Test local
```bash
python3 -m http.server 8080
```

## Avant mise en production
1. Ajouter les vrais liens Instagram, Facebook et TikTok dans `script.js`.
2. Vérifier que `ngelel-data.com` est actif avant le lancement.
3. Faire valider les pages juridiques.
4. Configurer le domaine principal et HTTPS.
5. Vérifier `contact@ngelelia.com`.
6. Après l’immatriculation, compléter dans `privacy.html` et `terms.html` la raison sociale, la forme juridique, le NINEA/RCCM et l’adresse officielle. Un commentaire `APRÈS IMMATRICULATION` indique exactement l’endroit à modifier.

## SEO de production
- domaine canonique : `https://ngelelia.com` ;
- sitemap : `https://ngelelia.com/sitemap.xml` ;
- balises canoniques, Open Graph et Twitter sur toutes les pages ;
- données structurées Organization, WebSite, WebPage, BreadcrumbList et SoftwareApplication ;
- page 404 exclue de l’indexation.

Après la mise en ligne, créer la propriété `https://ngelelia.com` dans Google Search Console, envoyer le sitemap et demander l’indexation de la page d’accueil ainsi que des trois pages produits.

## Ajouter une recherche dans Labs
Ouvrir `labs.html`, rechercher le commentaire `ZONE FACILE À METTRE À JOUR`, puis copier le bloc d’exemple placé dans le code. Modifier ensuite la date, le domaine, le titre, le résumé et le lien vers la publication.
