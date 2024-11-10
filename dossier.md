# Dossier

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak uit dit document.
> Lees <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet> om te weten hoe een Markdown-bestand opgemaakt moet worden.
> Verwijder alle instructies (lijnen die starten met >).

- Student: Jani Aelterman
- Studentennummer: xxxxxxxxx
- E-mailadres: <mailto:jani.aelterman@student.hogent.be>
- Demo: <DEMO_LINK_HIER>
- GitHub-repository: <https://github.com/HOGENT-frontendweb/frontendweb-2425-Jani-Aelterman-HoGent.git>
- Front-end Web Development
  - Online versie: <LINK_ONLINE_VERSIE_HIER>
- Web Services:
  - Online versie: <LINK_ONLINE_VERSIE_HIER>

## Logingegevens

### Lokaal

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

### Online

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

> Vul eventueel aan met extra accounts voor administrators of andere rollen.

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.
> Dit is weinig zinvol indien je enkel Web Services volgt, verwijder dan deze sectie.

## API calls

> Maak hier een oplijsting van alle API cals in jouw applicatie. Groepeer dit per entiteit. Hieronder een voorbeeld.
> Dit is weinig zinvol indien je enkel Front-end Web Development volgt, verwijder dan deze sectie.
> Indien je als extra Swagger koos, dan voeg je hier een link toe naar jouw online documentatie. Swagger geeft nl. exact (en nog veel meer) wat je hieronder moet schrijven.

### Gebruikers

- `GET /api/users`: alle gebruikers ophalen
- `GET /api/users/:id`: gebruiker met een bepaald id ophalen

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

#### Componenten

- [ ] heeft meerdere componenten - dom & slim (naast login/register)
- [ ] applicatie is voldoende complex
- [ ] definieert constanten (variabelen, functies en componenten) buiten de component
- [ ] minstens één form met meerdere velden met validatie (naast login/register)
- [ ] login systeem

#### Routing

- [ ] heeft minstens 2 pagina's (naast login/register)
- [ ] routes worden afgeschermd met authenticatie en autorisatie

#### State management

- [ ] meerdere API calls (naast login/register)
- [ ] degelijke foutmeldingen indien API-call faalt
- [ ] gebruikt useState enkel voor lokale state
- [ ] gebruikt gepast state management voor globale state - indien van toepassing

#### Hooks

- [ ] gebruikt de hooks op de juiste manier

#### Algemeen

- [ ] een aantal niet-triviale én werkende e2e testen
- [ ] minstens één extra technologie
- [ ] node_modules, .env, productiecredentials... werden niet gepushed op GitHub
- [ ] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
- [ ] de applicatie start zonder problemen op gebruikmakend van de instructies in de README
- [ ] de applicatie draait online
- [ ] duidelijke en volledige README.md
- [ ] er werden voldoende (kleine) commits gemaakt
- [ ] volledig en tijdig ingediend dossier

### Web Services

#### Datalaag

- [ ] voldoende complex en correct (meer dan één tabel (naast de user tabel), tabellen bevatten meerdere kolommen, 2 een-op-veel of veel-op-veel relaties)
- [ ] één module beheert de connectie + connectie wordt gesloten bij sluiten server
- [ ] heeft migraties - indien van toepassing
- [ ] heeft seeds

#### Repositorylaag

- [ ] definieert één repository per entiteit - indien van toepassing
- [ ] mapt OO-rijke data naar relationele tabellen en vice versa - indien van toepassing
- [ ] er worden kindrelaties opgevraagd (m.b.v. JOINs) - indien van toepassing

#### Servicelaag met een zekere complexiteit

- [ ] bevat alle domeinlogica
- [ ] er wordt gerelateerde data uit meerdere tabellen opgevraagd
- [ ] bevat geen services voor entiteiten die geen zin hebben zonder hun ouder (bv. tussentabellen)
- [ ] bevat geen SQL-queries of databank-gerelateerde code

#### REST-laag

- [ ] meerdere routes met invoervalidatie
- [ ] meerdere entiteiten met alle CRUD-operaties
- [ ] degelijke foutboodschappen
- [ ] volgt de conventies van een RESTful API
- [ ] bevat geen domeinlogica
- [ ] geen API calls voor entiteiten die geen zin hebben zonder hun ouder (bv. tussentabellen)
- [ ] degelijke autorisatie/authenticatie op alle routes

#### Algemeen

- [ ] er is een minimum aan logging en configuratie voorzien
- [ ] een aantal niet-triviale én werkende integratietesten (min. 1 entiteit in REST-laag >= 90% coverage, naast de user testen)
- [ ] node_modules, .env, productiecredentials... werden niet gepushed op GitHub
- [ ] minstens één extra technologie die we niet gezien hebben in de les
- [ ] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
- [ ] de applicatie start zonder problemen op gebruikmakend van de instructies in de README
- [ ] de API draait online
- [ ] duidelijke en volledige README.md
- [ ] er werden voldoende (kleine) commits gemaakt
- [ ] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

## Extra technologie

### Front-end Web Development

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?

### Web Services

> Zijn er gekende bugs?

## Reflectie

> Wat vond je van dit project? Wat heb je geleerd? Wat zou je anders doen? Wat vond je goed? Wat vond je minder goed?
> Wat zou je aanpassen aan de cursus? Wat zou je behouden? Wat zou je toevoegen?