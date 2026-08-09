GO — V3 : correctif critique + refonte design/ergonomie

BUG CORRIGÉ (le jeu ne fonctionnait plus du tout) :
Dans script.js, la fonction simulate() écrivait "nb[y][x]=col,removed=[]" —
la variable "removed" n'était jamais déclarée avec let/const. Comme le script
est chargé en type="module" (donc en mode strict JavaScript), toute affectation
à une variable non déclarée lève une ReferenceError. Résultat : dès qu'un joueur
posait une pierre, le script plantait silencieusement (erreur visible seulement
dans la console du navigateur). Corrigé en "nb[y][x]=col;let removed=[]".

AMÉLIORATIONS D'ERGONOMIE :
- Retour visuel + message clair sur un coup illégal (secousse du plateau +
  texte rouge temporaire), au lieu d'un simple bip sans explication.
- Message "X passe. Encore une passe pour terminer la partie." pour éviter
  la confusion en local/en ligne.
- Statut de connexion adversaire affiché pendant la partie en ligne (attente
  d'un adversaire / déconnexion), pas seulement sur l'écran de préparation.
- Bouton "Copier le code" en plus de "Partager le lien" pour le salon en ligne.
- Cibles tactiles agrandies (boutons, select) pour un usage confortable sur iPad/iPhone.
- États de focus clavier visibles, respect de prefers-reduced-motion.

REFONTE VISUELLE :
- Identité graphique affinée : encre noire, bois du goban, laque rouge (hanko),
  typographie Shippori Mincho (titres) + Inter (corps de texte).
- Élément signature : sceau "hanko" rouge réutilisé pour le logo, le code de
  salon et l'écran de victoire (勝).
- Panneaux avec flou d'arrière-plan, ombres plus douces, meilleure hiérarchie
  typographique sur l'écran de préparation.

Firebase (inchangé) :
1. Activer Authentication > Sign-in method > Anonymous.
2. Fusionner le contenu de firebase-rules.json dans les règles Realtime Database
   existantes sous la clé goRooms.
3. Ne pas écraser les règles des autres applications si la base est partagée.
