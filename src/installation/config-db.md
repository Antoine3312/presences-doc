# Configurer votre instance BaseRow

Pour faire fonctionner Présences, il faut que votre base de données BaseRow contienne l'ensemble des tables nécessaires.

## Listes des tables

### Table `Presences`

Listes les différentes présences des utilisateurs. Chaque tuple représente la présence d'une personne sur un poste, pour une journée donnée.

::: details `Détails`
| **Attribut**          | **Type**                                   | **Description**                                                                                          |
| --------------------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| key                   | Texte                                      | Concaténation de `day` et `tri`                                                                          |
| plan                  | Texte                                      | Nom du plan contenant le poste ou s'est inscri la personne                                               |
| planID                | Texte                                      | Identifiant du plan                                                                                      |
| day                   | Date                                       | Journée de l'inscription                                                                                 |
| period                | Texte                                      | Défini sur quel période de la journée l'inscription s'est réalisé (matin, après-mid ou toute la journée) |
| tri                   | Texte                                      | Trigramme de la personne qui s'est inscrite                                                              |
| spot                  | Texte                                      | Identifiant du spot                                                                                      |
| Dernière Modification | Dernière Modification <br> Inclure l'heure | Date et heure de la dernière  modification                                                               |
:::


### Table `Postes`

Contient tout les postes de travail. Chaque poste est relié à un plan. Une personne ne peut s'inscrire que sur un seul poste à la fois.

::: details `Détails`
| **Attribut**          | **Type**                                                  | **Description**                                                                       |
| --------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| Identifiant           | Texte                                                     | Identifiant du poste                                                                  |
| Description           | Texte long                                                | Description du poste (affiché au survol)                                              |
| Type                  | Liste déroulante                                          | Type du poste                                                                         |
| x                     | Nombre <br>(Précision: 0, Autoriser les nombres négatifs) | Position horizontal sur la carte                                                      |
| y                     | Nombre <br>(Précision: 0, Autoriser les nombres négatifs) | Position vertical sur la carte                                                        |
| Bloqué                | Booléen                                                   | Un poste bloqué ne pourra plus être réservé, mais sera toujours affiché               |
| Plan                  | Lien vers une table <br> (Créer un champs rapporté)       | Indique sur quel plan se situe le poste                                               |
| Cumul                 | Booléen                                                   | Un poste cumulable peut être réserver en plus d'un autre poste classique ou cumulable |
| Dernière Modification | Dernière Modification                                     | Date de la dernière modification                                                      |

Pour le Type, il vous faudra créer les options suivantes : 
- Réservé
- Priorisé
- Flex
- Nu
- Parking
:::

### Table `Plan`

Liste l'ensemble des plan contennant chacun une liste de poste de travail.

::: details `Détails`
| **Attribut** | **Type**                                           | **Description**                                                         |
| ------------ | :------------------------------------------------- | :---------------------------------------------------------------------- |
| Name         | Texte                                              | Nom du plan                                                             |
| Plan         | Fichier                                            | Image du plan                                                           |
| Notes        | Texte long                                         | Commentaire sur le plan                                                 |
| Postes       | Lien vers une table<br> (Créer un champs rapporté) | Liste des lien vers les potes contenu sur ce plan                       |
| Brouillon    | Booléen                                            | Si le poste est un brouillon, il ne sera plus affiché sur l'application |
| Suppléments  | Lien vers une table<br> (Créer un champs rapporté) | Lien vers les postes supplémentaires                                    |
:::

### Table `TT`

::: details `Détails`
| **Attribut** | **Type**                                                                            | **Description** |
| ------------ | :---------------------------------------------------------------------------------- | :-------------- |
| tri          | Texte                                                                               |
| Name         | Texte                                                                               |
| enabled      | Booléen                                                                             |
| excluded     | Booléen                                                                             |
| uid          | Texte                                                                               |
| tto          | Texte long                                                                          |
| total        | Nombre                                                                              |
| ttr          | Texte long                                                                          |
| last-check   | Date <br> (Inclure l'heure, Définir le fuseau horaire pour tous les collaborateurs) |
| updated      | Date de création <br> (Inclure l'heure)                                             |
| log          | Texte long                                                                          |
:::

### Table `Suppléments`

Contient les informations relatives aux postes supplémentaires (point d'information et tâches)

::: details `Détails`
TODO
:::


