import type {
  Article,
  ArticleCategoryInfo,
  ArticleCategorySlug,
  Listing,
  ListingCategoryInfo,
  ListingCategorySlug,
} from './types'

export const articleCategories: ArticleCategoryInfo[] = [
  { slug: 'ecodorpen', label: 'Ecodorpen' },
  { slug: 'duurzaam-bouwen', label: 'Duurzaam bouwen' },
  { slug: 'gemeenschap', label: 'Gemeenschap' },
  { slug: 'natuur-voedsel', label: 'Natuur & voedsel' },
]

export const listingCategories: ListingCategoryInfo[] = [
  {
    slug: 'woongroep-zoekt-bewoner',
    label: 'Woongroep zoekt bewoner',
    description: 'Bestaande woongroepen en ecodorpen met een vrije plek.',
  },
  {
    slug: 'bewoner-zoekt-woongroep',
    label: 'Bewoner zoekt woongroep',
    description: 'Mensen die op zoek zijn naar een gemeenschap om samen te wonen.',
  },
  {
    slug: 'ecodorp-in-oprichting',
    label: 'Ecodorp in oprichting',
    description: 'Initiatiefgroepen die nog medebouwers en pioniers zoeken.',
  },
  {
    slug: 'pand-aangeboden',
    label: 'Pand of grond aangeboden',
    description: 'Boerderijen, kavels en panden geschikt voor collectief wonen.',
  },
  {
    slug: 'woongroep-zoekt-pand',
    label: 'Woongroep zoekt pand',
    description: 'Groepen die een locatie zoeken om hun plannen waar te maken.',
  },
]

export const articles: Article[] = [
  {
    slug: 'ecodorp-zonnevallei-viert-tienjarig-bestaan',
    title: 'Ecodorp Zonnevallei viert tienjarig bestaan: "We zijn een dorp geworden"',
    dek: 'Tien jaar na de eerste paal wonen er 64 mensen in de leemhuizen aan de IJssel. De bewoners blikken terug op wat werkte, en wat niet.',
    category: 'ecodorpen',
    image: '/images/articles/zonnevallei-lustrum.png',
    imageAlt: 'Bewoners van een ecodorp vieren samen feest tussen houten huizen',
    author: 'Marieke de Vries',
    date: '2026-02-10',
    readTime: '6 min',
    featured: true,
    relatedListingSlug: 'zonnevallei-zoekt-twee-huishoudens',
    body: [
      'Wie tien jaar geleden langs het weiland bij Zutphen fietste, zag vooral modder en een bouwkeet. Inmiddels staan er 28 woningen van leem, stro en hout, een gemeenschappelijk huis en een moestuin van ruim een hectare.',
      '"In het begin waren we vooral een bouwproject," vertelt bewoner Jeroen Bakker. "Pas na een jaar of drie merkten we dat we een gemeenschap werden. Dat gaat niet vanzelf: je moet er tijd in steken, ook als het schuurt."',
      'Het ecodorp werkt met sociocratische besluitvorming en een maandelijkse dorpsvergadering. Elk huishouden draagt vier uur per maand bij aan gezamenlijke taken, van tuinonderhoud tot de administratie van de energiecoöperatie.',
      'Voor de komende jaren staan er twee nieuwe woningen gepland. De bewoners zoeken huishoudens die willen meebouwen en zich willen verbinden aan de gemeenschap.',
    ],
  },
  {
    slug: 'initiatiefgroep-boskant-zoekt-pioniers',
    title: 'Initiatiefgroep De Boskant zoekt pioniers voor nieuw ecodorp bij Lochem',
    dek: 'Een groep van twaalf huishoudens wil aan de bosrand een ecodorp voor dertig gezinnen realiseren. De gemeente staat open voor het plan.',
    category: 'ecodorpen',
    image: '/images/articles/boskant-initiatief.png',
    imageAlt: 'Een groep mensen bekijkt bouwtekeningen aan een tafel in het bos',
    author: 'Sanne Verhoef',
    date: '2026-02-09',
    readTime: '4 min',
    relatedListingSlug: 'de-boskant-zoekt-medebouwers',
    body: [
      'Op een zaterdagmiddag in februari staan twintig mensen in de kou aan de rand van het Lochemse bos. Ze kijken naar een kavel die over drie jaar hun thuis moet worden.',
      'De initiatiefgroep werkt via collectief particulier opdrachtgeverschap (CPO). Dat betekent dat de toekomstige bewoners zelf de opdrachtgever zijn en samen beslissen over ontwerp, materialen en budget.',
      '"We zoeken mensen die niet alleen een huis willen, maar ook willen bouwen aan een gemeenschap," zegt initiatiefnemer Femke Hoekstra. Belangstellenden kunnen maandelijks aansluiten bij een informatieavond.',
    ],
  },
  {
    slug: 'strobouw-wint-terrein',
    title: 'Bouwen met stro wint terrein: steeds meer vergunningen voor strobalenhuizen',
    dek: 'Natuurlijke bouwmaterialen zijn geen nichemarkt meer. Gemeenten krijgen vaker aanvragen voor huizen van stro, leem en hout.',
    category: 'duurzaam-bouwen',
    image: '/images/articles/strobouw.png',
    imageAlt: 'Bouwers plaatsen strobalen in een houten skelet van een woning',
    author: 'Thomas Kramer',
    date: '2026-02-10',
    readTime: '5 min',
    body: [
      'Strobalen isoleren uitstekend, slaan CO2 op en zijn lokaal verkrijgbaar. Toch werd bouwen met stro lang gezien als iets voor idealisten.',
      'Dat beeld verandert. Bouwbedrijven specialiseren zich in prefab strowanden, en de brandveiligheid is inmiddels uitgebreid getest. Een met leem gestucte strowand blijkt verrassend brandwerend.',
      'Voor woongroepen en ecodorpen is strobouw extra aantrekkelijk: bewoners kunnen zelf meehelpen tijdens bouwdagen, wat de kosten drukt en de band versterkt.',
    ],
  },
  {
    slug: 'nieuwe-regels-tiny-houses',
    title: 'Wat betekenen de nieuwe omgevingsregels voor tiny house-initiatieven?',
    dek: 'Sinds de Omgevingswet hebben gemeenten meer ruimte voor tijdelijke en kleinschalige woonvormen. Maar hoe pak je dat aan?',
    category: 'duurzaam-bouwen',
    image: '/images/articles/tiny-house-regels.png',
    imageAlt: 'Een rij kleine houten huizen op een groen erf',
    author: 'Lotte Jansen',
    date: '2026-02-08',
    readTime: '5 min',
    relatedListingSlug: 'tiny-forest-twente-zoekt-bewoners',
    body: [
      'Een tiny house kopen is één ding, een plek vinden om het neer te zetten is een stuk lastiger. Veel initiatieven lopen vast op het bestemmingsplan.',
      'Onder de Omgevingswet kunnen gemeenten via een omgevingsplan sneller ruimte maken voor experimenten. Belangrijk is dat een groep vroeg in gesprek gaat met de gemeente en een duidelijk plan heeft voor beheer en duur.',
      'Ervaringsdeskundigen raden aan om eerst een vereniging of coöperatie op te richten. Dat maakt de groep een serieuze gesprekspartner.',
    ],
  },
  {
    slug: 'sociocratie-in-de-praktijk',
    title: 'Samen beslissen zonder eindeloos vergaderen: sociocratie in de praktijk',
    dek: 'Veel woongroepen werken met consent in plaats van meerderheid. Drie bewoners vertellen hoe dat in het dagelijks leven werkt.',
    category: 'gemeenschap',
    image: '/images/articles/sociocratie.png',
    imageAlt: 'Mensen zitten in een kring in een lichte gemeenschapsruimte',
    author: 'Marieke de Vries',
    date: '2026-02-07',
    readTime: '7 min',
    body: [
      'Bij consent wordt een besluit genomen als niemand een overwegend bezwaar heeft. Dat klinkt traag, maar bewoners zeggen dat het juist sneller gaat.',
      '"Je hoeft niet iedereen enthousiast te krijgen, alleen te zorgen dat het voor iedereen werkbaar is," legt Ahmed El Amrani van Woongroep Lindenhof uit.',
      'De meeste groepen werken met kleine kringen die zelf mogen besluiten over hun domein, zoals de tuin, financiën of de gemeenschappelijke ruimte.',
    ],
  },
  {
    slug: 'samen-eten-verbindt',
    title: 'Waarom de wekelijkse buurtmaaltijd het hart van een woongroep is',
    dek: 'Koken voor dertig mensen: het klinkt als een klus, maar voor veel woongroepen is het het moment van de week.',
    category: 'gemeenschap',
    image: '/images/articles/buurtfeest.png',
    imageAlt: 'Een lange tafel buiten met bewoners die samen eten',
    author: 'Sanne Verhoef',
    date: '2026-02-05',
    readTime: '3 min',
    body: [
      'In de meeste woongroepen koken bewoners om beurten voor de hele groep. Eén keer per maand koken betekent drie keer per week aanschuiven.',
      'De maaltijd is meer dan eten. Het is de plek waar nieuwe bewoners hun buren leren kennen en waar kleine irritaties worden opgelost voordat ze groot worden.',
    ],
  },
  {
    slug: 'voedselbos-groeit-mee',
    title: 'Van grasveld naar voedselbos: hoe een gemeenschap samen leert oogsten',
    dek: 'Een voedselbos levert pas na jaren volop op. De bewoners van ecodorp Wortelgrond groeien geduldig mee.',
    category: 'natuur-voedsel',
    image: '/images/articles/voedselbos.png',
    imageAlt: 'Een weelderig voedselbos met fruitbomen en struiken',
    author: 'Thomas Kramer',
    date: '2026-02-06',
    readTime: '4 min',
    relatedListingSlug: 'wortelgrond-boerderij-aangeboden',
    body: [
      'Een voedselbos bootst een natuurlijk bos na, maar dan met eetbare lagen: van hoge notenbomen tot bessenstruiken en kruiden.',
      'Het vraagt weinig onderhoud zodra het eenmaal staat, maar de eerste jaren zijn een investering. Gemeenschappen delen die inzet, en de oogst.',
    ],
  },
  {
    slug: 'energiecooperatie-ecodorp',
    title: 'Ecodorpen wekken samen meer stroom op dan ze verbruiken',
    dek: 'Met zonnepanelen, een buurtbatterij en slim delen worden steeds meer gemeenschappen energieneutraal.',
    category: 'natuur-voedsel',
    image: '/images/articles/energiecooperatie.png',
    imageAlt: 'Zonnepanelen op daken van houten woningen in een groene omgeving',
    author: 'Lotte Jansen',
    date: '2026-02-04',
    readTime: '4 min',
    body: [
      'Door energie lokaal op te wekken en te delen, zijn gemeenschappen minder afhankelijk van het net. Een gedeelde buurtbatterij vangt de zonnestroom van overdag op voor de avond.',
      'Bewoners worden vaak lid van een energiecoöperatie, waardoor de opbrengst terugvloeit naar de gemeenschap.',
    ],
  },
]

export const listings: Listing[] = [
  {
    slug: 'zonnevallei-zoekt-twee-huishoudens',
    title: 'Twee huishoudens gezocht voor nieuwe leemwoningen',
    community: 'Ecodorp Zonnevallei',
    category: 'woongroep-zoekt-bewoner',
    province: 'Gelderland',
    type: 'Ecodorp',
    spotsAvailable: 2,
    image: '/images/listings/zonnevallei.png',
    imageAlt: 'Houten en leemwoningen rond een gemeenschappelijke tuin',
    summary: 'Bouw mee aan twee nieuwe woningen in een levendig ecodorp van 64 bewoners aan de IJssel.',
    description: [
      'Ecodorp Zonnevallei bestaat tien jaar en breidt uit met twee woningen. We zoeken huishoudens die zich willen verbinden aan onze gemeenschap en mee willen bouwen.',
      'Je krijgt een eigen woning en deelt een gemeenschappelijk huis, moestuin, werkplaats en deelauto’s. We vragen vier uur inzet per maand.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Koop, CPO' },
      { label: 'Bewoners', value: '64' },
      { label: 'Vrije plekken', value: '2 woningen' },
      { label: 'Plaats', value: 'Zutphen' },
    ],
    postedDate: '2026-02-10',
    relatedArticleSlug: 'ecodorp-zonnevallei-viert-tienjarig-bestaan',
  },
  {
    slug: 'lindenhof-kamer-vrij',
    title: 'Appartement vrij in woongroep in voormalige school',
    community: 'Woongroep Lindenhof',
    category: 'woongroep-zoekt-bewoner',
    province: 'Utrecht',
    type: 'Woongroep',
    spotsAvailable: 1,
    image: '/images/listings/lindenhof.png',
    imageAlt: 'Een gerenoveerd oud schoolgebouw met een groene binnenplaats',
    summary: 'Zelfstandig huurappartement van 58 m² met gedeelde woonkamer, tuin en wekelijkse maaltijd.',
    description: [
      'Woongroep Lindenhof woont sinds 2018 in een verbouwde school in Amersfoort. We zijn met 22 bewoners van 30 tot 78 jaar.',
      'Het vrije appartement heeft een eigen keuken en badkamer. Samen delen we een grote woonkamer, logeerkamer en tuin.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Sociale huur' },
      { label: 'Bewoners', value: '22' },
      { label: 'Oppervlakte', value: '58 m²' },
      { label: 'Plaats', value: 'Amersfoort' },
    ],
    postedDate: '2026-02-09',
    relatedArticleSlug: 'sociocratie-in-de-praktijk',
  },
  {
    slug: 'tiny-forest-twente-zoekt-bewoners',
    title: 'Plekken voor tiny houses op groen woonerf',
    community: 'Tiny Forest Twente',
    category: 'woongroep-zoekt-bewoner',
    province: 'Overijssel',
    type: 'Tiny house',
    spotsAvailable: 3,
    image: '/images/listings/tiny-forest-twente.png',
    imageAlt: 'Kleine houten huizen tussen de bomen',
    summary: 'Drie kavels beschikbaar voor tiny houses met gedeelde schuur, werkplaats en tuin.',
    description: [
      'Op ons woonerf aan de rand van Enschede wonen negen huishoudens in tiny houses. We hebben drie nieuwe plekken.',
      'Je neemt je eigen tiny house mee of laat er een bouwen. We delen gereedschap, een wasruimte en een gezamenlijk paviljoen.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Kavelhuur' },
      { label: 'Huishoudens', value: '9' },
      { label: 'Vrije plekken', value: '3 kavels' },
      { label: 'Plaats', value: 'Enschede' },
    ],
    postedDate: '2026-02-08',
    relatedArticleSlug: 'nieuwe-regels-tiny-houses',
  },
  {
    slug: 'de-boskant-zoekt-medebouwers',
    title: 'Pioniers gezocht voor ecodorp aan de bosrand',
    community: 'Ecodorp De Boskant',
    category: 'ecodorp-in-oprichting',
    province: 'Gelderland',
    type: 'Ecodorp',
    spotsAvailable: 18,
    image: '/images/listings/boskant.png',
    imageAlt: 'Een open veld aan de rand van een bos',
    summary: 'Initiatiefgroep van twaalf huishoudens zoekt nog achttien gezinnen voor een ecodorp via CPO.',
    description: [
      'We dromen van een ecodorp voor dertig huishoudens met natuurlijke woningen, een voedselbos en een gemeenschapshuis.',
      'De gemeente Lochem staat positief tegenover ons plan. We zoeken mensen die vanaf het begin willen meedenken over ontwerp, financiering en organisatie.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Koop, CPO' },
      { label: 'Fase', value: 'Planvorming' },
      { label: 'Gezocht', value: '18 huishoudens' },
      { label: 'Plaats', value: 'Lochem' },
    ],
    postedDate: '2026-02-09',
    relatedArticleSlug: 'initiatiefgroep-boskant-zoekt-pioniers',
  },
  {
    slug: 'watertuin-in-oprichting',
    title: 'Drijvende woongemeenschap in oprichting',
    community: 'De Watertuin',
    category: 'ecodorp-in-oprichting',
    province: 'Noord-Holland',
    type: 'Woongroep',
    spotsAvailable: 8,
    image: '/images/listings/watertuin.png',
    imageAlt: 'Drijvende woningen op het water met groene daken',
    summary: 'Een groep zoekt medebewoners voor een duurzame drijvende woongemeenschap bij Zaandam.',
    description: [
      'De Watertuin wordt een gemeenschap van twaalf drijvende woningen met gedeelde steigers, een drijvende tuin en een gemeenschappelijke ark.',
      'We zitten in de oriënterende fase en zoeken nog acht huishoudens.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Koop' },
      { label: 'Fase', value: 'Oriëntatie' },
      { label: 'Gezocht', value: '8 huishoudens' },
      { label: 'Plaats', value: 'Zaandam' },
    ],
    postedDate: '2026-02-06',
  },
  {
    slug: 'het-anker-plek-vrij',
    title: 'Woning vrij voor 55-plusser in hofje',
    community: 'Woongroep Het Anker',
    category: 'woongroep-zoekt-bewoner',
    province: 'Noord-Brabant',
    type: 'Woongroep',
    spotsAvailable: 1,
    image: '/images/listings/het-anker.png',
    imageAlt: 'Een binnentuin omringd door woningen',
    summary: 'Gelijkvloerse huurwoning in een woongroep rond een gezamenlijke binnentuin in Breda.',
    description: [
      'Het Anker is een woongroep voor mensen in de tweede helft van hun leven. We wonen zelfstandig maar zijn betrokken bij elkaar.',
      'Er is een gelijkvloerse woning vrijgekomen met twee slaapkamers.',
    ],
    facts: [
      { label: 'Woonvorm', value: 'Huur' },
      { label: 'Doelgroep', value: '55+' },
      { label: 'Slaapkamers', value: '2' },
      { label: 'Plaats', value: 'Breda' },
    ],
    postedDate: '2026-02-03',
  },
  {
    slug: 'gezin-zoekt-ecodorp',
    title: 'Jong gezin zoekt plek in ecodorp of woongroep',
    community: 'Familie Mulder',
    category: 'bewoner-zoekt-woongroep',
    province: 'Utrecht',
    type: 'Bewoner',
    image: '/images/listings/bewoner-zoekt-plek.png',
    imageAlt: 'Een gezin met twee kinderen in een moestuin',
    summary: 'Wij (twee volwassenen, twee kinderen) zoeken een gemeenschap met ruimte voor tuin en kinderen.',
    description: [
      'Wij zijn Eva en Ruben, met onze kinderen van 4 en 7. We willen graag wonen in een gemeenschap waar kinderen vrij kunnen buitenspelen.',
      'We hebben ervaring met moestuinieren en Ruben is timmerman. We zoeken in Utrecht, Gelderland of Overijssel.',
    ],
    facts: [
      { label: 'Huishouden', value: '4 personen' },
      { label: 'Zoekgebied', value: 'Midden/Oost-NL' },
      { label: 'Woonvorm', value: 'Huur of koop' },
      { label: 'Per', value: 'Zomer 2026' },
    ],
    postedDate: '2026-02-07',
  },
  {
    slug: 'wortelgrond-boerderij-aangeboden',
    title: 'Boerderij met 3 hectare grond beschikbaar voor collectief',
    community: 'Erf Wortelgrond',
    category: 'pand-aangeboden',
    province: 'Drenthe',
    type: 'Boerderij',
    image: '/images/listings/wortelgrond.png',
    imageAlt: 'Een oude boerderij met moestuin en weilanden',
    summary: 'Eigenaren zoeken een woongroep om hun boerderij met voedselbos aan over te dragen.',
    description: [
      'Na dertig jaar willen wij onze boerderij overdragen aan een groep die het erf ecologisch wil voortzetten.',
      'Het erf heeft een woonboerderij, twee schuren, een jong voedselbos en drie hectare grond.',
    ],
    facts: [
      { label: 'Oppervlakte', value: '3 ha' },
      { label: 'Gebouwen', value: 'Boerderij + 2 schuren' },
      { label: 'Vorm', value: 'Koop of erfpacht' },
      { label: 'Plaats', value: 'Westerbork' },
    ],
    postedDate: '2026-02-05',
    relatedArticleSlug: 'voedselbos-groeit-mee',
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug)
}

export function getArticleCategoryLabel(slug: ArticleCategorySlug) {
  return articleCategories.find((category) => category.slug === slug)?.label ?? slug
}

export function getListingCategory(slug: ListingCategorySlug) {
  return listingCategories.find((category) => category.slug === slug)
}

export function getArticlesByCategory(slug: ArticleCategorySlug) {
  return articles.filter((article) => article.category === slug)
}

export function getMostRead() {
  return [articles[1], articles[4], articles[0], articles[3], articles[6]]
}

export const provinces = Array.from(new Set(listings.map((listing) => listing.province))).sort()
