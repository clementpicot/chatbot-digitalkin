# DigitalKin Chatbot

Ce projet est un test techniqué réalisé pour DigitalKin. Le but était de créer une interface de chatbot, dotée d'une interface utilisateur intuitive et engageante qui permet aux utilisateurs d’interagir avec l’agent.

## Stack technique

**Framework**: NextJS 15, React 19

**Langage**: Typescript 5

**Librairies de style** : Shadcn, TailwindCSS

**Librairies fonctionnelles** : driver.js, next-themes

## Installation

Une fois le projet cloné, il suffit d'installer les dépendances.

```bash
npm install
# or
yarn intall
# or
pnpm install
```

Une fois les dépendances installées, lancer le projet via :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Persona

Afin de cadrer au mieux les enjeux techniques et UX de la plateforme KinConnect, un persona a été imaginé dans le but de refléter au mieux l'expérience d'un utilisateur-type. Il est important de se projeter à travers ce persona pour mieux comprendre les besoins ainsi que le parcours utilisateur.

[Persona Juliette Costa](https://near-aunt-c1b.notion.site/Persona-1892daa1c98f80399c32e1220164b72b?pvs=73)

## Demo en ligne

Le projet a été déployé sur Vercel dans le but de tester l'application directement en production.

[Lien de la démo](https://chatbot-digitalkin.vercel.app/)

## Features & itérations

_Les points marqués par **une étoile (*)** signifient que la feature associée n'est pas fonctionnelle et qu'il ne s'agit que d'une interface pensée en guise de concept et d'itération!_

- Changement de thème : Sombre **(par défaut)** / Clair
- Onboarding interactif à la première connexion
- Système de fichiers/dossiers __*__
- Création d'un Kin __*__
- Historique de chat __*__
- Changement de langue
- Liste de todos
- Alertes en temps réel __*__
- Rapport de bugs __*__
- Paramètres de compte __*__


## Notes & hypothèses

Bien que le PDF fourni mentionnait qu'il s'agissait d'une SPA, j'ai pris la liberté d'itérer un peu plus sur le projet.

Pour avoir fait énormément de Web jusqu'à présent, l'exercice de créer une interface applicative m'a vraiment permis d'appréhender différemment le parcours-type d'un utilisateur dont le but n'est pas forcément de remplir un formulaire de contact ou bien d'acheter un produit en ligne. Plus que l'UI, je pense que l'UX est au centre d'une application de ce type.

Pour la réalisation de l'interface de chat (UX, UI, textarea dont la hauteur dépend de la longueur du message...) et ses features clés (envoyer un message via l'input ou au clic d'un badge dont le message est pré-conçu, afficher une réponse de la part de l'agent...) j'avais **estimé 2h30**. Au final, j'ai passé **~3h** à réaliser l'interface initiale.

J'ai pas mal itéré par la suite sur des features qui me semblaient importantes pour ce qui pourrait être une V1 de l'application finale destinée à apparaître courant 2025.

Par exemple, cela me paraissait important de centraliser les documents au sein d'une même organisation/entreprise. En considérant que le Kin sur lequel vous travaillez le plus est celui de R&D et que ce dernier est principalement utilisé pour de l'étude et donc en l'occurrence de la création de fichiers, il me paraissait important de créer une interface d'équipe & collaborative dans le but de regrouper des fichiers destinés à être traités par le Kin, mais également ceux générés par ce dernier!

Le dashboard d'accueil m'a donné pas mal de fil à retordre. Le but premier d'un dashboard est avant tout de fournir à l'utilisateur les mises à jour du produit depuis sa dernière connexion. Il me semblait donc très important d'afficher l'historique des derniers chats utilisés par les autres collaborateurs. J'ai également ajouté une Todo relativement simple, propre à chaque utilisateur, qui permettrait d'un coup d'oeil d'avoir les tâches spécifiques à réaliser sur l'application.

///////

À défaut de continuer à écrire indéfiniment, je pense qu'il est préférable de s'arrêter là pour le ReadMe. 😄