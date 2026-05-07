// Données officielles Monnaie de Paris — 1074 sites
export type MdpSite = {
  nom: string
  ville: string
  cp: string
  pays: string
  adresse: string
  lat: number
  lng: number
}

export const MDP_SITES: MdpSite[] = [
  {
    "nom": "Disneyland",
    "ville": "Coupvray",
    "cp": "77700",
    "pays": "France",
    "adresse": "Bd de Parc",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Bellewaerde",
    "ville": "Leper",
    "cp": "8902",
    "pays": "Belgique",
    "adresse": "Meenseweg 497",
    "lat": 50.8503,
    "lng": 4.3517
  },
  {
    "nom": "Festyland",
    "ville": "Bretteville-sur-Odon",
    "cp": "14760",
    "pays": "France",
    "adresse": "Rte de Caumont",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "La Récré des 3 Curés",
    "ville": "Milizac",
    "cp": "29290",
    "pays": "France",
    "adresse": "Les trois Cures",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Machîne de l'île",
    "ville": "Nantes",
    "cp": "44200",
    "pays": "France",
    "adresse": "Parc des Chantiers, Bd Léon Bureau",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Mer de sable",
    "ville": "Ermenonville",
    "cp": "60950",
    "pays": "France",
    "adresse": "N330",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Nigloland",
    "ville": "Dolancourt",
    "cp": "10200",
    "pays": "France",
    "adresse": "27 Rue de la Vall. du Landion",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "SAS PARC TOURAINE VAL-DE-LOIRE Parc mini-château",
    "ville": "Amboise",
    "cp": "37400",
    "pays": "France",
    "adresse": "Bd Saint-Denis Hors",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "SARL LE CERCLE Le Bois du Roy",
    "ville": "Chaumes-en-Brie",
    "cp": "77390",
    "pays": "France",
    "adresse": "Route de Coulommiers - D402",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Parc Asterix",
    "ville": "Plailly",
    "cp": "60128",
    "pays": "France",
    "adresse": "Parc Astérix",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Puy du Fou",
    "ville": "Les Epesses",
    "cp": "85590",
    "pays": "France",
    "adresse": "Puy du Fou - CS",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Walibi Rhone Alpes",
    "ville": "Les Avenieres",
    "cp": "38630",
    "pays": "France",
    "adresse": "1380 ROUTE DE LA CORNEILLE",
    "lat": 45.1667,
    "lng": 5.7167
  },
  {
    "nom": "Walibi Belgique",
    "ville": "Wavre",
    "cp": "1300",
    "pays": "Belgique",
    "adresse": "BOULEVARD DE L'EUROPE 100",
    "lat": 50.8503,
    "lng": 4.3517
  },
  {
    "nom": "WALIBI SUD OUEST",
    "ville": "Roquerfort",
    "cp": "47310",
    "pays": "France",
    "adresse": "47 ROUTE D'AGEN, château de Caudouin",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "PARC DE LA BELLE",
    "ville": "MAGNE",
    "cp": "86160",
    "pays": "FRANCE",
    "adresse": "RUE ANATOLE DE BRIEY",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Vulcania",
    "ville": "Saint-Ours",
    "cp": "63230",
    "pays": "France",
    "adresse": "Rte de Mazayes",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Paleopolis",
    "ville": "Gannat",
    "cp": "3800",
    "pays": "France",
    "adresse": "Site de Chazoux, Route de Bègues",
    "lat": 45.1667,
    "lng": 5.7167
  },
  {
    "nom": "Micropolis",
    "ville": "Saint-Léons",
    "cp": "12780",
    "pays": "France",
    "adresse": "Le Bourg",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Parc Bagatelle",
    "ville": "MERLIMONT",
    "cp": "62155",
    "pays": "France",
    "adresse": "ROUTE DEPARTEMENTALE 940",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "FRANCE MINIATURE",
    "ville": "ELANCOURT",
    "cp": "78990",
    "pays": "FRANCE",
    "adresse": "25 ROUTE DU MESNIL",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Parc Cobac",
    "ville": "Lanhélin",
    "cp": "35720",
    "pays": "France",
    "adresse": "Le Bois du Cobac",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Parc Spirou",
    "ville": "Monteux",
    "cp": "84170",
    "pays": "France",
    "adresse": "1 Rue Jean-Henri Fabre",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Parc le Petit Prince",
    "ville": "Ungersheim",
    "cp": "68190",
    "pays": "France",
    "adresse": "Le Parc du Petit Prince, Rue de l'Espoir",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Parc Le Bournat",
    "ville": "Le Bugue",
    "cp": "24260",
    "pays": "France",
    "adresse": "191 All. Paul-Jean Souriau",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Société du Parc Futuroscope",
    "ville": "JAUNAY-CLAN",
    "cp": "86130",
    "pays": "Fra?ce",
    "adresse": "PARC DU FUTUROSCOPE, RN10- ENTREE DE SERVICE QUAI NUMERO 3",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Terra Botanica",
    "ville": "Angers",
    "cp": "49000",
    "pays": "France",
    "adresse": "Rte d'Épinard",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Le Grand Défi",
    "ville": "Saint-Julien-des-Landes",
    "cp": "85150",
    "pays": "France",
    "adresse": "40 rue de l'Etoile",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Zoo de Beauval",
    "ville": "Saint-Aignan",
    "cp": "41110",
    "pays": "France",
    "adresse": "Av. du Blanc",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Naturoparc",
    "ville": "Hunawirh",
    "cp": "68150",
    "pays": "France",
    "adresse": "Rte de Ribeauvillé",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "S.E.L.O les Loups de Gévaudan",
    "ville": "Sainte-Lucie",
    "cp": "48100",
    "pays": "France",
    "adresse": "Parc des Loups du Gevaudan",
    "lat": 44.5167,
    "lng": 3.5
  },
  {
    "nom": "SAS - ZOO FAUNE TROPICALE",
    "ville": "LES MATHES",
    "cp": "17570",
    "pays": "FRANCE",
    "adresse": "BP 8",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "SAS - ZOO FAUNE TROPICALE",
    "ville": "LES MATHES",
    "cp": "17570",
    "pays": "FRANCE",
    "adresse": "AVENUE DE ROYAN",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Parc Alpha",
    "ville": "Saint-Martin Vésubie",
    "cp": "06450",
    "pays": "France",
    "adresse": "Route Départementale 89",
    "lat": 43.7102,
    "lng": 7.262
  },
  {
    "nom": "Safari de Peaugres",
    "ville": "Peaugres",
    "cp": "7340",
    "pays": "France",
    "adresse": "Départementale 821",
    "lat": 45.5646,
    "lng": 6.3994
  },
  {
    "nom": "PARC ANIMALIER DE SAINTE-CROIX",
    "ville": "RHODES",
    "cp": "57810",
    "pays": "FRANCE",
    "adresse": "",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Parc le Pal",
    "ville": "Dompierre-sur-Besbre",
    "cp": "3290",
    "pays": "France",
    "adresse": "Saint-Pourçain-sur-Besbre",
    "lat": 43.6333,
    "lng": 0.5833
  },
  {
    "nom": "Zoo de Cerza",
    "ville": "Hermival-Les-Vaux",
    "cp": "14100",
    "pays": "France",
    "adresse": "D143",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "LA VALLEE DES SINGES",
    "ville": "ROMAGNE",
    "cp": "86700",
    "pays": "FRANCE",
    "adresse": "LE GUREAU",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Alligator Bay",
    "ville": "Beauvoir",
    "cp": "50170",
    "pays": "France",
    "adresse": "62 Rte du Mont Saint-Michel",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Bio-topia",
    "ville": "Dunkerque",
    "cp": "59430",
    "pays": "France",
    "adresse": "48 rue des Droits de l'homme - Fort Mardyck",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Planète Sauvage",
    "ville": "Port-Saint-Père",
    "cp": "44710",
    "pays": "France",
    "adresse": "La Chevalerie",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "TOUROPARC",
    "ville": "ROMANECHE-THORINS",
    "cp": "71570",
    "pays": "FRANCE",
    "adresse": "LA MAISON BLANCHE",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "RESERVE AFRICAINE DE SIGEAN",
    "ville": "SIGEAN",
    "cp": "11130",
    "pays": "FRANCE",
    "adresse": "19 CHEMIN HAMEAU DU LAC",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Rocher des aigles",
    "ville": "Rocamadour",
    "cp": "46500",
    "pays": "France",
    "adresse": "Marcayou",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Volerie des Aigles",
    "ville": "Kintzheim",
    "cp": "67600",
    "pays": "France",
    "adresse": "Château de Kintzheim",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Zoo de Champrepus",
    "ville": "Champrepus",
    "cp": "50800",
    "pays": "France",
    "adresse": "493 Rue Saint-Gaud",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Zoo de Lyon",
    "ville": "Lyon",
    "cp": "69006",
    "pays": "France",
    "adresse": "Parc de la Tête d'Or, All. de l'Orangerie",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "SAFARI AFRICAIN - PLANETE SAUVAGE",
    "ville": "PORT-SAINT-PERE",
    "cp": "44710",
    "pays": "FRANCE",
    "adresse": "LIEU-DIT LA CHEVALERIE",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Marineland",
    "ville": "Antibes",
    "cp": "06600",
    "pays": "France",
    "adresse": "306 Av. Mozart",
    "lat": 43.7102,
    "lng": 7.262
  },
  {
    "nom": "Zoo de la Palmyre",
    "ville": "Les Mathes",
    "cp": "17570",
    "pays": "France",
    "adresse": "6 Av. de Royan",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Zoo de Paris",
    "ville": "Paris",
    "cp": "75012",
    "pays": "France",
    "adresse": "Av. Daumesnil",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Zoo de la Fleche",
    "ville": "La Flèche",
    "cp": "72200",
    "pays": "France",
    "adresse": "Le Tertre Rouge",
    "lat": 48.0077,
    "lng": 0.1996
  },
  {
    "nom": "Vallée des Tortues",
    "ville": "Sorède",
    "cp": "66690",
    "pays": "France",
    "adresse": "Av. de la Vall. Heureuse",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Zoo de Thoiry",
    "ville": "Thoiry",
    "cp": "78770",
    "pays": "France",
    "adresse": "Rue du Pavillon de Montreuil",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Zoo de Maubeuge",
    "ville": "Maubeuge",
    "cp": "59600",
    "pays": "France",
    "adresse": "Rue du Parc",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Zoo de la Barben",
    "ville": "La Barben",
    "cp": "13330",
    "pays": "France",
    "adresse": "Rte du Château",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Zoo de Labenne",
    "ville": "Labelle",
    "cp": "40530",
    "pays": "France",
    "adresse": "Av. de l'Océan",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "Zoo de Tregomeur",
    "ville": "Trégomeur",
    "cp": "22590",
    "pays": "France",
    "adresse": "1 Moulin de Richard",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Parc des Felins",
    "ville": "Lumigny-Nesles-Ormeaux",
    "cp": "77540",
    "pays": "France",
    "adresse": "Domaine de la Fortelle",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Parc des Oiseaux",
    "ville": "Villars-les-Dombes",
    "cp": "1330",
    "pays": "France",
    "adresse": "D1083",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "SEMITOUR PERIGORD -Parc Thot",
    "ville": "Thonac",
    "cp": "24290",
    "pays": "France",
    "adresse": "BOUTIQUE CIAPML, 25 Rue du Président Wilson",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Parc Animalier de Courzieu",
    "ville": "Courzieu",
    "cp": "69690",
    "pays": "France",
    "adresse": "Parc de Courzieu, 1865 route du parc,Montmain la Côte",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Parc de Gramat",
    "ville": "Gramat",
    "cp": "46500",
    "pays": "France",
    "adresse": "D14",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Parc Animalier des Monts de Gueret",
    "ville": "Sainte-Feyre",
    "cp": "23000",
    "pays": "France",
    "adresse": "Parc Animalier des Monts de Guéret",
    "lat": 46.0,
    "lng": 2.0
  },
  {
    "nom": "Montagne des singes",
    "ville": "Kintzhe",
    "cp": "67600",
    "pays": "France",
    "adresse": "Wick",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Foret des singes",
    "ville": "Rocamadour",
    "cp": "46500",
    "pays": "France",
    "adresse": "L'Hospitalet",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Réserve Africaine de Sigean",
    "ville": "Sigean",
    "cp": "11130",
    "pays": "France",
    "adresse": "19 Ham. du Lac D6009",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "PSG",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "24 rue du commandement Guilbaud",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "PSG",
    "ville": "PARIS",
    "cp": "75016",
    "pays": "FRANCE",
    "adresse": "25, avenue du Général Sarrail",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "PSG",
    "ville": "PARIS",
    "cp": "75016",
    "pays": "FRANCE",
    "adresse": "25, avenue du Général Sarrail",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "PSG",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "27 avenur des Champs Elysées",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Olympique Lyonnais",
    "ville": "DECINES CHARPIEU",
    "cp": "69150",
    "pays": "France",
    "adresse": "GROUPAMA STADIUM,10 Avenue Simone Veil",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "FEDERATION FRANC. SPORT AUTOMOBILE",
    "ville": "PARIS CEDEX 16",
    "cp": "75781",
    "pays": "FRANCE",
    "adresse": "32 AVENUE DE NEW YORK",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "FEDERATION FRANCAISE DE FOOTBALL",
    "ville": "Paris",
    "cp": "75015",
    "pays": "France",
    "adresse": "87 Bd de Grenelle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "INSTITUT FRANCAIS DU CHEVAL",
    "ville": "SAUMUR CEDEX",
    "cp": "49411",
    "pays": "FRANCE",
    "adresse": "AV  DE L'ECOLE NATIONALE D'EQUITATION",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Stade Vélodrome Olympique de Marseille",
    "ville": "Marseille",
    "cp": "13008",
    "pays": "France",
    "adresse": "3 boulevard Michelet",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "FFE",
    "ville": "LAMOTTE BEUVRON",
    "cp": "41600",
    "pays": "France",
    "adresse": "PARC EQUESTRE FEDERAL",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Musée Aéroscopia",
    "ville": "Balgnac",
    "cp": "31700",
    "pays": "France",
    "adresse": "6 RUE ROGER BETEILLE",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Airborne Museum",
    "ville": "Sainte-Mère-Eglise",
    "cp": "50480",
    "pays": "France",
    "adresse": "14 Rue Eisenhower",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Forts en mémoire",
    "ville": "Batz-sur-Mer",
    "cp": "44740",
    "pays": "France",
    "adresse": "12 RUE DU DERVIN",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Historial de La Grande Guerre",
    "ville": "Péronne",
    "cp": "80200",
    "pays": "France",
    "adresse": "Pl. André Audinot",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Overlord Museum",
    "ville": "Colleville-sur-Mer",
    "cp": "14710",
    "pays": "France",
    "adresse": "Lotissement Omaha Center",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "MUSEE DE LA LUNETTE",
    "ville": "MOREZ",
    "cp": "39400",
    "pays": "FRANCE",
    "adresse": "PLACE JEAN JAURES",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "MEMORIAL CHARLES DE GAULLE",
    "ville": "Colombey-les-Deux-Eglises",
    "cp": "52330",
    "pays": "France",
    "adresse": "Mémorial Charles de Gaulle",
    "lat": 48.1167,
    "lng": 5.1333
  },
  {
    "nom": "Musée National de l'Automobile",
    "ville": "MULHOUSE",
    "cp": "68100",
    "pays": "FRANCE",
    "adresse": "192 avenue de Colmar",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Mémorial de Verdun",
    "ville": "Fleury-devant-Douaumont",
    "cp": "55100",
    "pays": "France",
    "adresse": "1 Av. Corps Européen",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "Mémorial Omaha Beach",
    "ville": "Saint-Laurent-sur-Mer",
    "cp": "14710",
    "pays": "France",
    "adresse": "Av. de la Libération",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "MUSEE DES EGOUTS",
    "ville": "PARIS",
    "cp": "75007",
    "pays": "FRANCE",
    "adresse": "Face 93 Quai d'Orsay",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée départemental Breton",
    "ville": "Quimper",
    "cp": "29000",
    "pays": "France",
    "adresse": "1 Rue du Roi Gradlon",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Centre Sir John Monash",
    "ville": "Fouilloy",
    "cp": "80800",
    "pays": "France",
    "adresse": "Route de Villers Bretonneux",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "MUSEE DE LA RESISTANCE ET DE LA DEP",
    "ville": "TERGNIER",
    "cp": "02700",
    "pays": "FRANCE",
    "adresse": "5 PLACE CARNEGIE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "Musée de la Musique mécanique",
    "ville": "Dollon",
    "cp": "72390",
    "pays": "France",
    "adresse": "12 Gr Grande Rue",
    "lat": 48.0077,
    "lng": 0.1996
  },
  {
    "nom": "Musée de l'armée",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "129 Rue de Grenelle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée des Blindés",
    "ville": "Saumur",
    "cp": "49400",
    "pays": "France",
    "adresse": "1043 Rte de Fontevraud,",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "MEMORIAL BATAILLES",
    "ville": "Dormans",
    "cp": "51700",
    "pays": "France",
    "adresse": "Rue du Château",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "INTERCOM. BATAILLE  WATERLOO",
    "ville": "WATERLOO",
    "cp": "1410",
    "pays": "BELGIQUE",
    "adresse": "ROUTE DU LION 252-254",
    "lat": 50.8503,
    "lng": 4.3517
  },
  {
    "nom": "Musée des Egouts -Mairie de Paris",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "Esplanade Habib Bourguiba, Pont de l'Alma",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée Grévin",
    "ville": "Paris",
    "cp": "75009",
    "pays": "France",
    "adresse": "10 Bd Montmartre",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Muséoscope du lac",
    "ville": "Rousset",
    "cp": "5190",
    "pays": "France",
    "adresse": "Belvédère du barrage de Serre-Ponçon",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "MUSEE SOMME 1916",
    "ville": "ALBERT",
    "cp": "80300",
    "pays": "FRANCE",
    "adresse": "RUE ANICET GODIN",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Naturospace",
    "ville": "Honfleur",
    "cp": "14600",
    "pays": "France",
    "adresse": "Bd Charles V",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "CENTRE DE LA MEMOIRE D'ORADOUR",
    "ville": "ORADOUR-SUR-GLANE",
    "cp": "87520",
    "pays": "FRANCE",
    "adresse": "B.P. 12",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "D-Day Experience",
    "ville": "Carentan les Marais",
    "cp": "50500",
    "pays": "France",
    "adresse": "2 Village de l'Amont",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Vendée Miniature",
    "ville": "Bretignolles-sur-Mer",
    "cp": "85470",
    "pays": "France",
    "adresse": "50 Rue du Prégneau",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Hospices Beaune",
    "ville": "Beaune",
    "cp": "21200",
    "pays": "France",
    "adresse": "2 Rue de l'Hôtel Dieu",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Forum Antique de Bavay- Département du Nord",
    "ville": "Bavay",
    "cp": "59570",
    "pays": "France",
    "adresse": "Allée Chanoine Henri Bievelet",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Maison Natale de Gaulle - Departement du Nord",
    "ville": "Lille",
    "cp": "59000",
    "pays": "Frannce",
    "adresse": "9 Rue Princesse",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Musee de Menton",
    "ville": "Menton",
    "cp": "6500",
    "pays": "France",
    "adresse": "2 Quai de Monleon",
    "lat": 43.2333,
    "lng": 0.1667
  },
  {
    "nom": "Musée d'Arromanches",
    "ville": "Arromanches-les-Bains",
    "cp": "14117",
    "pays": "France",
    "adresse": "Place du 6 Juin",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Paleosite",
    "ville": "Saint-Césaire",
    "cp": "17770",
    "pays": "France",
    "adresse": "Route de la montée verte",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "PAVILLON DES SCIENCES BOURGOGNE",
    "ville": "MONTBELIARD",
    "cp": "25200",
    "pays": "FRANCE",
    "adresse": "1 impasse de la Presqu'Ile",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Musée Balzac",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "47 Rue Raynouard",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Demeure de Ronsard",
    "ville": "La Riche",
    "cp": "37520",
    "pays": "France",
    "adresse": "Rue Ronsard",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Musée Rabelet",
    "ville": "Seuilly",
    "cp": "37500",
    "pays": "France",
    "adresse": "4 Rue de la Devinière",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Paleospace",
    "ville": "Villers-sur-Mer",
    "cp": "14640",
    "pays": "France",
    "adresse": "5 Av. Jean Moulin",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Musée de l'Air et de l'Espace",
    "ville": "Le Bourget",
    "cp": "93352",
    "pays": "France",
    "adresse": "Aéroport de Paris-Le Bourget",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "Musée de la Gendarmerie",
    "ville": "Melun",
    "cp": "77000",
    "pays": "France",
    "adresse": "1-3 Rue Emile Leclerc",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Musée Louis de Funès",
    "ville": "Saint-Raphaêl",
    "cp": "83700",
    "pays": "France",
    "adresse": "Rue Jules Barbier",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "MUSEE MARITIME DE L' ILE TATIHOU",
    "ville": "ST VAAST LA HOUGUE",
    "cp": "50550",
    "pays": "FRANCE",
    "adresse": "",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Musée du Jouet",
    "ville": "Colmar",
    "cp": "68000",
    "pays": "France",
    "adresse": "40 Rue Vauban,",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Musée des sources d'Hercule",
    "ville": "Deneuvre",
    "cp": "54120",
    "pays": "France",
    "adresse": "2 Rue de la Prte Saint-Nicolas",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Musée de Pont Aven",
    "ville": "Pont-Aven",
    "cp": "29930",
    "pays": "France",
    "adresse": "Pl. Julia",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Musée Raymond Poincare",
    "ville": "Sampigny",
    "cp": "55300",
    "pays": "France",
    "adresse": "6-12 Rue du Château",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "Musée Camille Claudel",
    "ville": "Nogent-sur-Seine",
    "cp": "10400",
    "pays": "France",
    "adresse": "10 Rue Gustave Flaubert",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Musée Georges Clémenceau",
    "ville": "Paris",
    "cp": "75116",
    "pays": "France",
    "adresse": "8 Rue Benjamin Franklin",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LE MUSEOSCOPE DU LAC",
    "ville": "ROUSSET",
    "cp": "05190",
    "pays": "FRANCE",
    "adresse": "LE BELVEDERE DU BARRAGE SERRE-PONCON",
    "lat": 44.56,
    "lng": 6.0783
  },
  {
    "nom": "MUSEE DEPARTEMENTAL DE  PREHISTOIRE",
    "ville": "SOLUTRE",
    "cp": "71960",
    "pays": "FRANCE",
    "adresse": "LE GRAND PRE",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Musée Matra",
    "ville": "Romorantin-Lanthenay",
    "cp": "41200",
    "pays": "France",
    "adresse": "17 Rue des Capucins",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Villa Perrusson",
    "ville": "Ecuisses",
    "cp": "71210",
    "pays": "France",
    "adresse": "1 Rue de la Gare",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Musée Courbet Doubs",
    "ville": "Ornans",
    "cp": "25290",
    "pays": "France",
    "adresse": "1 Place Robert Fernier",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Musée Electropolis",
    "ville": "Mulhouse",
    "cp": "68200",
    "pays": "France",
    "adresse": "55 Rue du Pâturage",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "ASSOCIATION MUSEE DE HORLOGERIE",
    "ville": "CLUSES",
    "cp": "74300",
    "pays": "FRANCE",
    "adresse": "100 PLACE DU 11 NOVEMBRE",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Musée des Gorges du Verdon",
    "ville": "Quinson",
    "cp": "4500",
    "pays": "France",
    "adresse": "Rte de Montmeyan",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Musée Lautrec",
    "ville": "Albi",
    "cp": "81000",
    "pays": "France",
    "adresse": "Palais de la Berbie, Pl. Sainte-Cécile",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "Musée de Saint Nazaire",
    "ville": "Saint-Nazaire",
    "cp": "44600",
    "pays": "France",
    "adresse": "15 Av. de Saint-Hubert,",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Musée Marmottan",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "2 Rue Louis Boilly",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée Grevin",
    "ville": "Paris",
    "cp": "75009",
    "pays": "France",
    "adresse": "10 Bd Montmartre",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SPL MUSEOPARC ALESIA",
    "ville": "ALISE-SAINTE-REINE",
    "cp": "21150",
    "pays": "FRANCE",
    "adresse": "1 ROUTE DES TROIS ORMEAUX",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "ASSOCIATION DE L'ECOMUSEE D'ALSACE",
    "ville": "Ungersheim",
    "cp": "68190",
    "pays": "France",
    "adresse": "Chemin du Grosswald",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Museum des Salins du Midi",
    "ville": "Aigues-Mortes",
    "cp": "30220",
    "pays": "France",
    "adresse": "Route du Grau du Roi",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Musée de la Mine",
    "ville": "Petite-Rosselle",
    "cp": "57540",
    "pays": "France",
    "adresse": "Rue du Lieutenant Joseph Nau",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Musée Utah Beach",
    "ville": "Sainte-Marie-du-Mont",
    "cp": "50480",
    "pays": "France",
    "adresse": "La Madeleine",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Musée Vauban",
    "ville": "Saint-Léger-Vauban",
    "cp": "89630",
    "pays": "",
    "adresse": "4 Pl. Vauban",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Musée Gallo-Romain Vesunna",
    "ville": "Périgueux",
    "cp": "24000",
    "pays": "France",
    "adresse": "Parc de Vésone, 20 Rue 26ème Régiment d'Infanterie",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Musée des Marais Salants",
    "ville": "Batz-sur-Mer",
    "cp": "44740",
    "pays": "France",
    "adresse": "Place Adèle Pichon",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "VILLA ARNAGA",
    "ville": "CAMBO LES BAINS",
    "cp": "64250",
    "pays": "FRANCE",
    "adresse": "ROUTE DU DOCTEUR CAMINO",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Musée de Dieppe",
    "ville": "Dieppe",
    "cp": "76200",
    "pays": "France",
    "adresse": "Rue de Chastes, Boulebard de la Mer",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Musée des tumulus de Bougon",
    "ville": "Bougon",
    "cp": "79800",
    "pays": "France",
    "adresse": "Lieu dit La Chapelle",
    "lat": 46.3231,
    "lng": -0.4568
  },
  {
    "nom": "Musée de la Biere Stenay",
    "ville": "Stenay",
    "cp": "55700",
    "pays": "France",
    "adresse": "17 Rue du Moulin",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "Musée Jacques Chirac",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "37 Quai Branly",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée du Sel",
    "ville": "Marsal",
    "cp": "57630",
    "pays": "France",
    "adresse": "PORTE DE FRANCE",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Le Vaisseau",
    "ville": "STRASBOURG",
    "cp": "67100",
    "pays": "France",
    "adresse": "1 BIS RUE PHILIPPE DOLLINGER",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Musée des Mines de Fer de Lorraine",
    "ville": "Neufchef",
    "cp": "57700",
    "pays": "France",
    "adresse": "2 Rue du Musée",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Musée de l'Ephebe",
    "ville": "Le Cap d'Agde",
    "cp": "34300",
    "pays": "France",
    "adresse": "Av. des Hallebardes",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Musée de Gergovie",
    "ville": "La Roche-Blanche",
    "cp": "63670",
    "pays": "France",
    "adresse": "Plateau de Gergovie",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Musée de la Batterie de Merville",
    "ville": "Merville-Franceville-Plage",
    "cp": "14810",
    "pays": "France",
    "adresse": "Place du 9ème Bataillon",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Eco Musée des Cheminots Veynois",
    "ville": "Veynes",
    "cp": "5400",
    "pays": "France",
    "adresse": "3 Rue du Jeu de Paume",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "MEMORIAL DE LA SHOAH",
    "ville": "PARIS",
    "cp": "75004",
    "pays": "FRANCE",
    "adresse": "17 RUE GEOFFROY-L'ASNIER",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée de la Grande Guerre",
    "ville": "Meaux",
    "cp": "77100",
    "pays": "France",
    "adresse": "Rue Lazare Ponticelli",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Musée du Vin de Champagne",
    "ville": "Epernay",
    "cp": "51200",
    "pays": "France",
    "adresse": "13 Av. de Champagne,",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "Musée des Cordages",
    "ville": "ROCHEFORT",
    "cp": "17300",
    "pays": "France",
    "adresse": "RUE AUDEBERT",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Musée national de la Marine",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "Palais de Chaillot,17 place du Trocadero",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée de Verdon",
    "ville": "Quinson",
    "cp": "4500",
    "pays": "France",
    "adresse": "Rte de Montmeyan",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Musée de la Guerre de 1870",
    "ville": "GRAVELOTTE",
    "cp": "57130",
    "pays": "France",
    "adresse": "11 RUE DE METZ",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Musée de Salagon",
    "ville": "Marne",
    "cp": "4300",
    "pays": "France",
    "adresse": "PRIEURE DE SALAGON",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Musée Maurice Dufresne",
    "ville": "Azay-le-Rideau",
    "cp": "37190",
    "pays": "France",
    "adresse": "17 Rte de Marnay",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Lieu du Design",
    "ville": "Paris",
    "cp": "75012",
    "pays": "France",
    "adresse": "74 RUE DU FAUBOURG ST-ANTOINE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Centre de la mémoire d'Ouradour",
    "ville": "Oradour sur Glane",
    "cp": "87520",
    "pays": "France",
    "adresse": "L'auze",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "Musée Mémoire 39 45",
    "ville": "Plougonvelin",
    "cp": "29217",
    "pays": "France",
    "adresse": "Route de la Pointe Saint Matieu",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Musée d'Allevard",
    "ville": "Allevard",
    "cp": "38580",
    "pays": "France",
    "adresse": "2 Avenue des Bains",
    "lat": 45.1667,
    "lng": 5.7167
  },
  {
    "nom": "Musée de Dunkerque",
    "ville": "Dunkerque",
    "cp": "59140",
    "pays": "France",
    "adresse": "Rue des Chantiers de France",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Centre Pompidou Metz",
    "ville": "Croix",
    "cp": "59170",
    "pays": "France",
    "adresse": "198 Rue Jean Monnet",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Pont d'Avignon",
    "ville": "Avignon",
    "cp": "84000",
    "pays": "France",
    "adresse": "Allées de l'Oulle",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Palais des Papes",
    "ville": "Avignon",
    "cp": "84000",
    "pays": "France",
    "adresse": "Place du Palais des Papes",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "La Lieutenance",
    "ville": "Honfleur",
    "cp": "14600",
    "pays": "France",
    "adresse": "Place de l'Hôtel de Ville",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Grande Saline de Salins les Bains",
    "ville": "Salins les Bains",
    "cp": "39110",
    "pays": "France",
    "adresse": "3 Place des Salines",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "Cité immersive Vikings",
    "ville": "Canteleu",
    "cp": "76380",
    "pays": "France",
    "adresse": "16 Rue Gaston Boulet",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Vallée des Saints Terre de Granit",
    "ville": "Carnoët",
    "cp": "22160",
    "pays": "France",
    "adresse": "Quénéquillec",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Cité du Cuir",
    "ville": "Saint-Junien",
    "cp": "87200",
    "pays": "France",
    "adresse": "20 chemin Notre-Dame au Goth",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "Musée olympique de Lausanne",
    "ville": "Lausanne",
    "cp": "1006",
    "pays": "Suisse",
    "adresse": "Quai d'Ouchy, 1",
    "lat": 46.8182,
    "lng": 8.2275
  },
  {
    "nom": "Musée d'Aquitaine",
    "ville": "Bordeaux",
    "cp": "33000",
    "pays": "France",
    "adresse": "20 cours Pasteur",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Musée de la faïencerie de Gien",
    "ville": "Gien",
    "cp": "45500",
    "pays": "France",
    "adresse": "78 place de la Victoire",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Musée de la libération de Paris",
    "ville": "Paris",
    "cp": "75014",
    "pays": "France",
    "adresse": "4 Av. du Colonel Henri Rol-Tanguy",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Le Petit Palais",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "1 Av. Dutuit Petit Palais",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée Bourdelle",
    "ville": "Paris",
    "cp": "75015",
    "pays": "France",
    "adresse": "18 Rue Antoine Bourdelle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Crypte archéologique",
    "ville": "Paris",
    "cp": "75004",
    "pays": "France",
    "adresse": "7 Parvis Notre-Dame - Pl. Jean-Paul II",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Maison de Victor Hugo",
    "ville": "Paris",
    "cp": "75004",
    "pays": "France",
    "adresse": "6 Pl. des Vosges",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Catacombes de Paris",
    "ville": "Paris",
    "cp": "75014",
    "pays": "France",
    "adresse": "1 Av. du Colonel Henri Rol-Tanguy",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée Carnavalet",
    "ville": "Paris",
    "cp": "75003",
    "pays": "France",
    "adresse": "23 Rue de Sévigné",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Bateaux parisiens",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "Port de la Bourdonnais",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Chemin de fer Baie de somme",
    "ville": "Saint Valéry sur Somme",
    "cp": "80230",
    "pays": "France",
    "adresse": "Place de la Gare avenue du général Leclerc",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Train de la Rhune",
    "ville": "Sare",
    "cp": "64310",
    "pays": "France",
    "adresse": "Col de Saint-Ignace",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Cité du Train",
    "ville": "Mulhouse",
    "cp": "68200",
    "pays": "France",
    "adresse": "2 Rue Alfred de Glehn",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "VEDETTES DE PARIS",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "Port de Suffren",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SAS CROISIERES INTER ILES",
    "ville": "La Rochelle",
    "cp": "17000",
    "pays": "France",
    "adresse": "Cr des Dames",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Train de la Mure",
    "ville": "La Mure",
    "cp": "38350",
    "pays": "France",
    "adresse": "36 Bd Fréjus Michon",
    "lat": 45.1667,
    "lng": 5.7167
  },
  {
    "nom": "Bateaux Mouches",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "Port de la Conférence",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Bateaux du Saut du Doubs",
    "ville": "Villers-Le-Lac",
    "cp": "25130",
    "pays": "France",
    "adresse": "Les Terres-Rouges",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "DFDS Seaways",
    "ville": "Dieppe",
    "cp": "76200",
    "pays": "France",
    "adresse": "7 Quai Gaston Lalitte",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Plan incliné Saint-Louis Arzviller",
    "ville": "Saint-Louis",
    "cp": "57820",
    "pays": "France",
    "adresse": "200 Rue du Plan Incliné",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Aigues Mortes",
    "ville": "Aigues-Mortes",
    "cp": "30220",
    "pays": "France",
    "adresse": "PLACE ANATOLE FRANCE",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Musée des plans reliefs",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "129 Rue de Grenelle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Arc de Triomphe",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "LIBRAIRIE DE L'ARC DE TRIOMPHE,Place Charles de Gaulle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Mont Saint Michel",
    "ville": "Mont Saint Michel",
    "cp": "50170",
    "pays": "France",
    "adresse": "Abbaye du Mont Saint Michel",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Panthéon",
    "ville": "Paris",
    "cp": "75005",
    "pays": "France",
    "adresse": "Place du Panthéon",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Hotel de la Marine",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "2 Pl. de la Concorde",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Cité de Carcassonne",
    "ville": "Carcassonne",
    "cp": "11000",
    "pays": "France",
    "adresse": "15 Rue de la Porte d'Aude",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Sainte Chapelle",
    "ville": "Paris",
    "cp": "75001",
    "pays": "France",
    "adresse": "8 BLD DU PALAIS",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Conciergerie",
    "ville": "Paris",
    "cp": "75001",
    "pays": "France",
    "adresse": "2 Bd du Palais",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Site mégalithique de Carnac",
    "ville": "Carnac",
    "cp": "56340",
    "pays": "France",
    "adresse": "LIeu-dit le Ménec",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Château d'Azay-le-Rideau",
    "ville": "Azay-le-Rideau",
    "cp": "37190",
    "pays": "France",
    "adresse": "19 Rue Balzac",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Cathédrale d'Amiens",
    "ville": "Amiens",
    "cp": "80000",
    "pays": "France",
    "adresse": "30 Place Notre Dame",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Forteresse de Salses",
    "ville": "Salses-le-Château",
    "cp": "66600",
    "pays": "France",
    "adresse": "Le Portichol",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Villa Cavrois",
    "ville": "Croix",
    "cp": "59170",
    "pays": "France",
    "adresse": "60 Av. du Président John Fitzgerald Kennedy,",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Château d'Angers",
    "ville": "Angers",
    "cp": "49100",
    "pays": "France",
    "adresse": "Promenade du Bout du Monde",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Château de Pierrefonds",
    "ville": "Pierrefonds",
    "cp": "60350",
    "pays": "France",
    "adresse": "Rue Viollet le Duc",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Tour Pey Berland",
    "ville": "Bordeaux",
    "cp": "33000",
    "pays": "France",
    "adresse": "Pl. Pey Berland",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Tour Notre Dame de Paris",
    "ville": "Paris",
    "cp": "75004",
    "pays": "France",
    "adresse": "23 Rue d'Arcole",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Tour de la Rochelle",
    "ville": "La Rochelle",
    "cp": "17000",
    "pays": "France",
    "adresse": "PLACE DE LA CHAINE - VIEUX PORT",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Cité internationale de la langue française",
    "ville": "Villers Cotterêts",
    "cp": "2600",
    "pays": "France",
    "adresse": "4 Impasse du Marché",
    "lat": 44.9333,
    "lng": 4.8917
  },
  {
    "nom": "Site gallo-romain de Sanxay",
    "ville": "Sanxay",
    "cp": "86600",
    "pays": "France",
    "adresse": "Route de Ménigoutte",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Villa Kerylos",
    "ville": "Beaulieu-sur-Mer",
    "cp": "6310",
    "pays": "France",
    "adresse": "Rue Gustave Eiffel",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Fort de Saint André",
    "ville": "Villeneuve-lès-Avignon",
    "cp": "30400",
    "pays": "France",
    "adresse": "Rue Mnt du Fort",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Château de Maison",
    "ville": "Maisons-Laffitte",
    "cp": "78600",
    "pays": "France",
    "adresse": "2 Av. Carnot",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Grotte de Pair-non-Pair",
    "ville": "Prignac-et-Marcamps",
    "cp": "33710",
    "pays": "France",
    "adresse": "Chem. de Pair Non Pair",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Abbaye de Montmajour",
    "ville": "Arles",
    "cp": "13280",
    "pays": "France",
    "adresse": "Rte de Fontvieille",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Chpateau de Castelnaud Bretenou",
    "ville": "Prudhomat",
    "cp": "46130",
    "pays": "France",
    "adresse": "Château de Castelnaud",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Château de Carrouges",
    "ville": "Carrouges",
    "cp": "61320",
    "pays": "France",
    "adresse": "Le château de Carrouges",
    "lat": 48.4333,
    "lng": 0.0833
  },
  {
    "nom": "Château de Chateaudun",
    "ville": "Châteaudun",
    "cp": "28200",
    "pays": "France",
    "adresse": "Pl. Jehan de Dunois",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Cloitre de la cathedrale Le Puy",
    "ville": "Le Puy-en-Velay",
    "cp": "43000",
    "pays": "France",
    "adresse": "3 Rue du Cloître",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Fort de Bregançon",
    "ville": "Bormes-les-Mimosas",
    "cp": "83230",
    "pays": "France",
    "adresse": "Av. Guy Tezenas",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Grotte Fond de Gaume",
    "ville": "Les Eyzies",
    "cp": "24620",
    "pays": "France",
    "adresse": "1-4 Av. des Grottes",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Site archéologique d'Enserune",
    "ville": "Nissan-lez-e-enserune",
    "cp": "34440",
    "pays": "France",
    "adresse": "Site et musée d'enserune",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Villa Savoye",
    "ville": "Poissy",
    "cp": "78300",
    "pays": "France",
    "adresse": "82 Rue de Villiers",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Place Forte de Mont-Dauphin",
    "ville": "Mont-Dauphin",
    "cp": "5600",
    "pays": "France",
    "adresse": "1 Pl. Vauban",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Château d'If",
    "ville": "Marseille",
    "cp": "13001",
    "pays": "France",
    "adresse": "Embarcadère Frioul If, 1 Quai de la Fraternité",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Château de Rambouillet",
    "ville": "Rambouillet",
    "cp": "78120",
    "pays": "France",
    "adresse": "Château de Rambouillet",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Château de Tacly",
    "ville": "Talcy",
    "cp": "41370",
    "pays": "France",
    "adresse": "18 Rue du Château",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Maison de Georges Sand",
    "ville": "Nohant-Vic",
    "cp": "36400",
    "pays": "France",
    "adresse": "2 place Sainte-Anne",
    "lat": 46.8065,
    "lng": 1.6914
  },
  {
    "nom": "Notre Dame de Paris",
    "ville": "Paris",
    "cp": "75004",
    "pays": "France",
    "adresse": "6 Parvis Notre-Dame - Pl. Jean-Paul II,",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Palais Jacques Cœur",
    "ville": "Bourges",
    "cp": "18000",
    "pays": "France",
    "adresse": "10Bis Rue Jacques Cœur",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "Monastère Royal de Brou",
    "ville": "Bourg-en-bresse",
    "cp": "1000",
    "pays": "France",
    "adresse": "63 Bd de Brou",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Château de Vincennes",
    "ville": "Vincennes",
    "cp": "94300",
    "pays": "France",
    "adresse": "Avenue de Paris",
    "lat": 48.7833,
    "lng": 2.4667
  },
  {
    "nom": "Abbaye du Thoronet",
    "ville": "Le Thoronet",
    "cp": "83340",
    "pays": "France",
    "adresse": "abbaye du Thoronet",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Glanum",
    "ville": "Saint-Rémy-de-Provence",
    "cp": "13210",
    "pays": "France",
    "adresse": "Av. Vincent Van Gogh",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Palais du Tau",
    "ville": "Reims",
    "cp": "51100",
    "pays": "France",
    "adresse": "2 Pl. du Cardinal Luçon",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "Mégalites de Locmariaquer",
    "ville": "Locmariaquer",
    "cp": "56740",
    "pays": "France",
    "adresse": "Rte de Kerlogonan",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Treguier",
    "ville": "Treguier",
    "cp": "22220",
    "pays": "France",
    "adresse": "RUE ERNEST RENAN",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Abbaye de Cluny",
    "ville": "Cluny",
    "cp": "71250",
    "pays": "France",
    "adresse": "Rue du 11 Août 1944",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Auguste a la Turbie",
    "ville": "La Turbie",
    "cp": "6320",
    "pays": "France",
    "adresse": "Av. Prince Albert Ier de Monaco",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Château de Montal",
    "ville": "Saint-Jean-Lespinasse",
    "cp": "46400",
    "pays": "France",
    "adresse": "Château de Montal",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Château de Coucy",
    "ville": "Coucy-le-Château-Auffrique",
    "cp": "2380",
    "pays": "France",
    "adresse": "Rue du Château",
    "lat": 46.0,
    "lng": 2.0
  },
  {
    "nom": "Château de Puyguilhem",
    "ville": "Villars-les-Dombes",
    "cp": "24530",
    "pays": "France",
    "adresse": "Château de Puyguilhem",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Villa gallo-romaine de Moncaret",
    "ville": "Montcaret",
    "cp": "24230",
    "pays": "France",
    "adresse": "1 Rue des Anciennes Postes",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Château d'Aulteribe",
    "ville": "Sermentizon",
    "cp": "63120",
    "pays": "France",
    "adresse": "Chateau d'Aulteribe",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Château de Bouges",
    "ville": "Bouges-le-Château",
    "cp": "36110",
    "pays": "France",
    "adresse": "15 Rue du Château",
    "lat": 46.8065,
    "lng": 1.6914
  },
  {
    "nom": "Château de Fougères",
    "ville": "Fougères",
    "cp": "35300",
    "pays": "France",
    "adresse": "RUE HENRY GOYER",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Château de la Motte Tilly",
    "ville": "La Motte-Tilly",
    "cp": "10400",
    "pays": "France",
    "adresse": "Château de la Motte-Tilly , D951",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Château Ducal de Cadillac",
    "ville": "Cadillac",
    "cp": "33410",
    "pays": "France",
    "adresse": "4 Pl. de la Libération",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Château villeneuve sur Lembron",
    "ville": "Villeneuve-Lembron",
    "cp": "63340",
    "pays": "France",
    "adresse": "Château de Villeneuve-Lembron",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Cairn de Barnenez",
    "ville": "Plouezoc'h",
    "cp": "29252",
    "pays": "France",
    "adresse": "Cairn de Barnénez",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Château de Champs sur Marne",
    "ville": "Champs-sur-Marne",
    "cp": "77420",
    "pays": "France",
    "adresse": "31 Rue de Paris",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Château de bussy Rabutin",
    "ville": "Bussy-le-Grand",
    "cp": "21150",
    "pays": "France",
    "adresse": "12 Rue du Château",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Château d'Oiron",
    "ville": "Plaine-et-Vallées",
    "cp": "79100",
    "pays": "France",
    "adresse": "10 Rue du Château",
    "lat": 46.3231,
    "lng": -0.4568
  },
  {
    "nom": "Balisique Saint-Denis",
    "ville": "Saint-Denis",
    "cp": "93200",
    "pays": "France",
    "adresse": "1 Rue de la Légion d'Honneur",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "Château de Haroué",
    "ville": "Haroué",
    "cp": "54740",
    "pays": "France",
    "adresse": "Pl. du Château",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Mont Dauphin",
    "ville": "MONT DAUPHIN",
    "cp": "5600",
    "pays": "France",
    "adresse": "MONT DAUPHIN",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Montmaurin",
    "ville": "MONTMAUMARIN",
    "cp": "31350",
    "pays": "France",
    "adresse": "MONTMAURIN VILLA GALLO-ROMAINE",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Maison de Georges Clémenceau",
    "ville": "SAINT VINCENT SUR JARD",
    "cp": "85520",
    "pays": "France",
    "adresse": "76 RUE GEORGES CLEMENCEAU",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Cloitre de la cathédrale de Frejus",
    "ville": "Fréjus",
    "cp": "83600",
    "pays": "France",
    "adresse": "58 Rue de Fleury",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Chapelle expiatoire",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "29 Rue Pasquier",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Domaine de Chaalis",
    "ville": "Fontaine Chaalis",
    "cp": "60300",
    "pays": "France",
    "adresse": "",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Château d'Ainay le Vieil",
    "ville": "Ainay-le-Vieil",
    "cp": "18200",
    "pays": "France",
    "adresse": "7 Rue du Château",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "Château de Bonaguil",
    "ville": "Fumel",
    "cp": "47500",
    "pays": "France",
    "adresse": "1 Place du Château",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "Manoir de Gisson",
    "ville": "Sarlat",
    "cp": "24200",
    "pays": "France",
    "adresse": "24 Place du Marché aux Oies",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Château de Lichtenberg",
    "ville": "Bouxwillers",
    "cp": "67340",
    "pays": "France",
    "adresse": "Rue des Cochers",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Marché Pont du Gard",
    "ville": "Pont du Gard",
    "cp": "30210",
    "pays": "France",
    "adresse": "400 RTE DU PONT DU GARD",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Fontaines Pétrifiantes",
    "ville": "Saint-Nectaire",
    "cp": "63710",
    "pays": "France",
    "adresse": "1 Avenue du Docteur Rou",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Cascade du Grand Saut",
    "ville": "Ménétrux-en-Joux",
    "cp": "39130",
    "pays": "France",
    "adresse": "LIEU-DIT VAL DESSUS",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "Haras National du Pin",
    "ville": "Le Pin-au-Haras",
    "cp": "61610",
    "pays": "France",
    "adresse": "Haras national du Pin, RD 926",
    "lat": 48.4333,
    "lng": 0.0833
  },
  {
    "nom": "Site Troglodyte de Jonas",
    "ville": "Saint-Pierre-Colamine",
    "cp": "63610",
    "pays": "France",
    "adresse": "Grotte de Jonas",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Grottes de Sare",
    "ville": "Sare",
    "cp": "64310",
    "pays": "France",
    "adresse": "Grotte de Sare,COL DE ST IGNACE",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "La Mine Bleue",
    "ville": "SEGRÉ-EN-ANJOU BLEU",
    "cp": "49520",
    "pays": "France",
    "adresse": "La Gâtelière Noyant-la-Gravoyère",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Grotte de la Cocaliere",
    "ville": "Courry",
    "cp": "30500",
    "pays": "France",
    "adresse": "Grotte de la Cocalière",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "SARL SETSN GOUFFRE DE CABRESPINE",
    "ville": "CABRESPINE",
    "cp": "11160",
    "pays": "FRANCE",
    "adresse": "GOUFFRE DE CABRESPINE",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "AVEN ARMAND SA",
    "ville": "MILLAU",
    "cp": "12100",
    "pays": "FRANCE",
    "adresse": "LIEU-DIT MONTPELLIER LE VIEUX",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Grottes de Thouzon",
    "ville": "Le Thor",
    "cp": "84250",
    "pays": "France",
    "adresse": "2083 Rte d'Orange",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Vallée de Munster",
    "ville": "Munster",
    "cp": "68140",
    "pays": "France'",
    "adresse": "1 rue du Couvent",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "SARL BAUCHER FRERES Falaises d'Etretat",
    "ville": "Etretat",
    "cp": "76790",
    "pays": "France",
    "adresse": "Falaises d'Etretat",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "LA MAISON DU CALVADOS",
    "ville": "Etretat",
    "cp": "76790",
    "pays": "France",
    "adresse": "MARCHE COUVERT",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "ETABLISSEMENT AUX TROUVAILLES",
    "ville": "Etretat",
    "cp": "76790",
    "pays": "France",
    "adresse": "48 RUE NOTRE DAME",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "LA MAISON DU CALVADOS",
    "ville": "Etretat",
    "cp": "76790",
    "pays": "France",
    "adresse": "MARCHE COUVERT",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Grotte Pech Merle",
    "ville": "Cabrerets",
    "cp": "46330",
    "pays": "France",
    "adresse": "Pech Merle, Mairie",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Volcan de Lemptegy",
    "ville": "Saint-Ours",
    "cp": "63230",
    "pays": "France",
    "adresse": "31 Route des Puys",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "GROTTE COSQUER",
    "ville": "Marseille",
    "cp": "13002",
    "pays": "France",
    "adresse": "Promenade Robert Laffont, Esp. J4",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Menhirs de Monteneuf",
    "ville": "MONTENEUF",
    "cp": "56380",
    "pays": "France",
    "adresse": "D776",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "SAS SLALOM LABELLEMONTAGNE",
    "ville": "La Bresse",
    "cp": "882510",
    "pays": "France",
    "adresse": "RTE DE VOLOGNE",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "Le Pas dans le Vide",
    "ville": "Chamonix-Mont-Blanc",
    "cp": "74400",
    "pays": "France",
    "adresse": "100 PLACE DE L'AIGUILLE DU MIDI",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Bambouseraie de Prafrance",
    "ville": "Générargues",
    "cp": "30140",
    "pays": "France",
    "adresse": "552 RUE DE MONTSAUVE",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Grotte de Tourtoirac",
    "ville": "Tourtoirac",
    "cp": "24390",
    "pays": "France",
    "adresse": "MAIRIE LE BOURG",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Grotte des Demoiselles",
    "ville": "Saint-Bauzille-de-Putois",
    "cp": "34190",
    "pays": "France",
    "adresse": "ROUTE DE LA GROTTE RD 108 E",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "GOUFFRE DE PROUMEYSSAC",
    "ville": "AUDRIX",
    "cp": "24260",
    "pays": "FRANCE",
    "adresse": "ROUTE DE PROUMEYSSAC",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Les Grottes de Presque",
    "ville": "Saint-Médard-de-Presque",
    "cp": "46400",
    "pays": "France",
    "adresse": "215 route de Gramat",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Cairn de Gavrinis",
    "ville": "Larmor-Baden",
    "cp": "56870",
    "pays": "France",
    "adresse": "5 CHEMIN DE LA FONTAINE",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Les Grottes de Regulus",
    "ville": "Meschers-sur-Gironde",
    "cp": "17132",
    "pays": "France",
    "adresse": "81 Bd de la Falaise",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "MAIRIE DE MESCHERS",
    "ville": "MESCHERS SUR GIRONDE",
    "cp": "17132",
    "pays": "France",
    "adresse": "38 RUE PAUL MASSY",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Panorama de Rouen",
    "ville": "Bonsecours",
    "cp": "76240",
    "pays": "France",
    "adresse": "Rte de la Corniche",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "EURL CHAUVET 2",
    "ville": "Vallon-Pont-D'Arc",
    "cp": "7150",
    "pays": "France",
    "adresse": "4941 Route de Bourg St Andéol",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Grotte de Rouffignac",
    "ville": "Rouffignac-Saint-Cernin-de-Reilhac",
    "cp": "24580",
    "pays": "France",
    "adresse": "lieu-dit Grandville",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Grotte Saint Marcel",
    "ville": "Bidon",
    "cp": "07700",
    "pays": "France",
    "adresse": "2759  ROUTE TOURISTIQUE DES GORGES",
    "lat": 44.9333,
    "lng": 4.3833
  },
  {
    "nom": "Grotte de Clamouse",
    "ville": "Saint-Jean-de-Fos",
    "cp": "34150",
    "pays": "France",
    "adresse": "D4",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Les Parcs du Sud",
    "ville": "MONTEUX",
    "cp": "84170",
    "pays": "France",
    "adresse": "663 IMPASSE DE LA TRAVERSEE DU VENTOUX",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Grottes de Lacave",
    "ville": "LACAVE",
    "cp": "46200",
    "pays": "France",
    "adresse": "Le Bourg",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Grotte de Lombrives",
    "ville": "Unac",
    "cp": "9250",
    "pays": "France",
    "adresse": "21 Rue de Loum",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "Jardins de Marqueyssac",
    "ville": "Vezac",
    "cp": "24220",
    "pays": "France",
    "adresse": "",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Régie Pic du Midi",
    "ville": "Sers",
    "cp": "65120",
    "pays": "France",
    "adresse": "Col du Tourmalet",
    "lat": 43.2333,
    "lng": 0.1667
  },
  {
    "nom": "Roc de Cazelle",
    "ville": "Les Eyzies",
    "cp": "24620",
    "pays": "France",
    "adresse": "",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Fort de la Roque Gageac",
    "ville": "La Roque Gageac",
    "cp": "24250",
    "pays": "France",
    "adresse": "Fort de la Roque",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Préhisto Dino Parc",
    "ville": "Lacave",
    "cp": "46200",
    "pays": "France",
    "adresse": "",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Les Gorges du Fier",
    "ville": "Annecy",
    "cp": "74940",
    "pays": "France",
    "adresse": "6 place Gabriel Fauré",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Grotte du souffleur de verre",
    "ville": "Brantôme en Périgord",
    "cp": "24310",
    "pays": "France",
    "adresse": "6 Boulevard Charlemagne",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Aquarium de Paris",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "5 Av. Albert de Mun",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Biarritz Océan",
    "ville": "Biarritz",
    "cp": "64200",
    "pays": "France",
    "adresse": "PLATEAU DE L'ATALAYE",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Océanopolis -Brest",
    "ville": "Brest",
    "cp": "29200",
    "pays": "France",
    "adresse": "Port de Plaisance du Moulin Blanc",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Océarium du Croisic",
    "ville": "Le Croisic",
    "cp": "44490",
    "pays": "France",
    "adresse": "Av. de Saint-Goustan",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Seaquarium",
    "ville": "Le Grau-du-Roi",
    "cp": "30240",
    "pays": "France",
    "adresse": "Av. du Palais de la Mer Hall Seaquarium",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Aquarium de Saint Malo",
    "ville": "Saint-Malo",
    "cp": "35400",
    "pays": "France",
    "adresse": "Rue du Général Patton",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Aquarium de Tourraine",
    "ville": "Lussault-sur-Loire",
    "cp": "37400",
    "pays": "France",
    "adresse": "Lieu dit les Hauts Boeufs",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Nausicaa",
    "ville": "Boulogne-sur-Mer",
    "cp": "62200",
    "pays": "France",
    "adresse": "Bd Sainte-Beuve",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Aquarium Mare Nostrum",
    "ville": "Montpellier",
    "cp": "34000",
    "pays": "France",
    "adresse": "Centre commercial Odysseum, All. Ulysse",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Aquarium de la Rochelle",
    "ville": "La Rochelle",
    "cp": "17000",
    "pays": "France",
    "adresse": "Quai Louis Prunier",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Aix les Bains, OFFICE DE TOURISME INTERCOMMUNAL",
    "ville": "Aix-les-Bains",
    "cp": "73100",
    "pays": "France",
    "adresse": "PLACE MAURICE MOLLARD",
    "lat": 45.5646,
    "lng": 6.3994
  },
  {
    "nom": "Cité du Vin",
    "ville": "Bordeaux",
    "cp": "33300",
    "pays": "France",
    "adresse": "134 Quai de Bacalan",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Hippodrome de la Palmyre",
    "ville": "Les Mathes",
    "cp": "17570",
    "pays": "France",
    "adresse": "All. des Gannes",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "MAIRIE DE TOULOUSE",
    "ville": "TOULOUSE",
    "cp": "31000",
    "pays": "FRANCE",
    "adresse": "69 RUE PARGAMINIERES",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Chalon en Champagne",
    "ville": "CHALONS EN CHAMPAGNE",
    "cp": "51000",
    "pays": "France",
    "adresse": "14 BOULEVARD VAUBECOURT",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "Confiserie des Vosges",
    "ville": "Plainfaing",
    "cp": "88230",
    "pays": "France",
    "adresse": "44 Habaurupt,",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "O.T. PAYS DE CHAMPAGNE",
    "ville": "EPERNAY",
    "cp": "51200",
    "pays": "FRANCE",
    "adresse": "7 AVENUE DE CHAMPAGNE",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "SAS BAYEUX AVENTURE",
    "ville": "CUSSY",
    "cp": "14400",
    "pays": "FRANCE",
    "adresse": "FERME DE RABODANGE",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "PAYS D'AUBAGNE ET DE L'ETOILE",
    "ville": "Aubagne",
    "cp": "13400",
    "pays": "France",
    "adresse": "8 COURS BARTHELEMY",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Club Philatelique",
    "ville": "BONNEFOND",
    "cp": "19170",
    "pays": "France",
    "adresse": "MAIRIE BUGEAT",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "OT DU DU GRAND SANCERROIS",
    "ville": "SANCERRE",
    "cp": "18300",
    "pays": "FRANCE",
    "adresse": "ESPLANADE PORTE CESAR",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "COMITE DEP.DU TOURISME DES ARDENNES",
    "ville": "CHARLEVILLE-MEZIERES",
    "cp": "08107",
    "pays": "France",
    "adresse": "24 PLACE DUCALE-BP 419",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "SPL DESTINATION SAINT MALO",
    "ville": "SAINT-MALO",
    "cp": "35400",
    "pays": "FRANCE",
    "adresse": "Esplanade Saint Vincent",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "SCE COMPTABILITE",
    "ville": "HAYANGE CEDEX",
    "cp": "57705",
    "pays": "FRANCE",
    "adresse": "10 RUE DE WENDEL - 20176",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "PARC DU HAUT FOURNEAU U4",
    "ville": "UCKANGE",
    "cp": "57270",
    "pays": "FRANCE",
    "adresse": "1 JARDIN DES TRACES",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "ELODIE TIBERI",
    "ville": "HAYANGES CEDEX",
    "cp": "57705",
    "pays": "FRANCE",
    "adresse": "10 RUE DE WENDEL",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "SOUVENIRS JACQUES",
    "ville": "LE PUY EN VELAY",
    "cp": "43000",
    "pays": "France",
    "adresse": "RUE DU CLOITRE",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Civette Tabac",
    "ville": "SAINT JEAN DE LUZ",
    "cp": "64500",
    "pays": "France",
    "adresse": "3 RUE GAMBETTA",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Berck Evènements Loisirs Côte d'Opale",
    "ville": "BERCK-SUR-MER CEDEX",
    "cp": "62600",
    "pays": "France",
    "adresse": "5 AVENUE FRANCIS TATTEGRAIN",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Office de tourisme de Berck",
    "ville": "BERCK-SUR-MER CEDEX",
    "cp": "62600",
    "pays": "France",
    "adresse": "5 AVENUE FRANCIS TATTEGRAIN",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "MAIRIE D'AUTUN",
    "ville": "AUTUN",
    "cp": "71403",
    "pays": "71400",
    "adresse": "HOTEL DE VILLE (Sce Culuturel)",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Mont Ventoux",
    "ville": "BEDOUIN",
    "cp": "84410",
    "pays": "France",
    "adresse": "301, avenue Barral des Baux - BP 60007",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "MAIRIE DE MAGNAC LAVALETTE",
    "ville": "LE BOURG",
    "cp": "16320",
    "pays": "France",
    "adresse": "CHATEAU DE LA MERCERIE",
    "lat": 45.65,
    "lng": 0.15
  },
  {
    "nom": "ASSOCIATION LES NEZ ROUGES",
    "ville": "PANAZOL",
    "cp": "87350",
    "pays": "France",
    "adresse": "AVENUE PIERRE GUILLOT",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "Tabac Presse Lebessard",
    "ville": "SUPER BESSE ET ST ANASTAISE",
    "cp": "63610",
    "pays": "France",
    "adresse": "RUE MERCIERE",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "MAIRIE DE ROCROI",
    "ville": "ROCROI",
    "cp": "08230",
    "pays": "France",
    "adresse": "16 PLACE D'ARMES",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "Tarascon",
    "ville": "TARASCON CEDEX",
    "cp": "13158",
    "pays": "France",
    "adresse": "2 PLACE DU MARCHE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "METROPOLE ROUEN NORMANDIE",
    "ville": "ROUEN",
    "cp": "76006",
    "pays": "France",
    "adresse": "14 BIS AVENUE PASTEUR",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "L' OPALE",
    "ville": "COLLONGES-LA-ROUGE",
    "cp": "19500",
    "pays": "France",
    "adresse": "Rue de la Barrière",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "SA PRODUCTION 114",
    "ville": "ROYAN",
    "cp": "17200",
    "pays": "France",
    "adresse": "114 AVENUE EMILE ZOLA",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "SEM CAP TOURISME 43",
    "ville": "LE PUY EN VELAY",
    "cp": "43000",
    "pays": "FRANCE",
    "adresse": "1 Place Monseigneur de Galard",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Ecole de Cavalerie du Val de Loire",
    "ville": "SAUMUR CEDEX",
    "cp": "49415",
    "pays": "France",
    "adresse": "8 BIS QUAI CARNOT",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Terre des Sciences",
    "ville": "ANGERS",
    "cp": "49000",
    "pays": "France",
    "adresse": "2 rue Alexander Fleming",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "La commanderie d'Arville",
    "ville": "COUETRON AU PERCHE",
    "cp": "41170",
    "pays": "France",
    "adresse": "1 ALLEE DE LA COMMANDERIE - ARVILLE",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Moulin de Raire",
    "ville": "SALLERTAINE",
    "cp": "85300",
    "pays": "France",
    "adresse": "33 ROUTE DE ST JEAN DE MONTS",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Lions Club",
    "ville": "MARSEILLE",
    "cp": "13009",
    "pays": "France",
    "adresse": "1 BOULEVARD DE LUCE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "LA BOITE A MEDAILLES",
    "ville": "LA ROCHE DERRIEN",
    "cp": "22450",
    "pays": "France",
    "adresse": "8 PLACE DU MARTRAY",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Pays de Cocagne",
    "ville": "ST SULPICE LA POINTE",
    "cp": "81370",
    "pays": "France",
    "adresse": "ROND POINT DE GABOR",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "La Souvenir Vendeen",
    "ville": "CHOLET CEDEX",
    "cp": "49306",
    "pays": "France",
    "adresse": "36 rue du paradis, BP 40612",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Les Ateliers des Capucins",
    "ville": "BREST",
    "cp": "29200",
    "pays": "France",
    "adresse": "27 rue de Pontaniou",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Captain's Bar",
    "ville": "Paris",
    "cp": "75013",
    "pays": "France",
    "adresse": "36 AVENUE D'ITALIE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Les oubliers du Meknes",
    "ville": "DIEPPE",
    "cp": "76200",
    "pays": "France",
    "adresse": "14 RUE NOTRE DAME",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "ARTS THEATRE ET MONUMENTS",
    "ville": "Sisteron",
    "cp": "04200",
    "pays": "France",
    "adresse": "1 ALLEE DE VERDUN",
    "lat": 44.0833,
    "lng": 6.2333
  },
  {
    "nom": "CONCARNEAU CORNOUAILLE AGGLO",
    "ville": "CONCARNEAU CEDEX",
    "cp": "29186",
    "pays": "FRANCE",
    "adresse": "1 RUE VICTOR SCHOELCHER",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "ARDENNE RIVES DE MEUSE",
    "ville": "GIVET",
    "cp": "08600",
    "pays": "France",
    "adresse": "29 RUE MEHUL",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "ASSO. LES AMIS DE LA CITADELLE",
    "ville": "ST TROPEZ",
    "cp": "83990",
    "pays": "France",
    "adresse": "1 BIS PASSAGE DES 4 VENTS",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "SARL COULEURS DE L'AUBRAC",
    "ville": "Saint-Chély-d'Aubrac",
    "cp": "12470",
    "pays": "France",
    "adresse": "",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Citadelle de Montmedy",
    "ville": "MONTMEDY",
    "cp": "55600",
    "pays": "France",
    "adresse": "1 PLACE R. POINCARE",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "VILLE DE BELFORT",
    "ville": "BELFORT",
    "cp": "90000",
    "pays": "France",
    "adresse": "PLACE D'ARMES",
    "lat": 47.6382,
    "lng": 6.8631
  },
  {
    "nom": "ASSO. NUMISMATIQUE DE BONDY",
    "ville": "BONDY CEDEX",
    "cp": "93143",
    "pays": "FRANCE",
    "adresse": "ESPLANADE CLAUDE FUZIER",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "LA ROCHELLE TOURISME ET EVENEMENTS",
    "ville": "La Rochelle",
    "cp": "17033",
    "pays": "France",
    "adresse": "BP3106 Espace Encan, Quai Louis Prunier,",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Tabac Presse Giron",
    "ville": "BESSE ET SAINT ANASTAISE",
    "cp": "63610",
    "pays": "France",
    "adresse": "9 ROND POIN DES PISTES - SUPER BESSE",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Cité Sacrée",
    "ville": "ROCAMADOUR",
    "cp": "46500",
    "pays": "France",
    "adresse": "RUE DE LA COURONNERIE",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "ALES AGGLOMERATION",
    "ville": "ALES",
    "cp": "30100",
    "pays": "FRANCE",
    "adresse": "1642 CHEMIN DE TRESPEAUX",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Cité de l'Huitre",
    "ville": "MARENNES",
    "cp": "17320",
    "pays": "FRANCE",
    "adresse": "RUE DES MARTYRS",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "OT DU VAL DE GARONNE",
    "ville": "Marmande",
    "cp": "47200",
    "pays": "France",
    "adresse": "11 Rue Toupinerie",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "Cité de la Voile",
    "ville": "LORIENT",
    "cp": "56100",
    "pays": "France",
    "adresse": "Boutique Sellor Muséographie",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "DINAN CAP FREHEL TOURISME",
    "ville": "DINAN CEDEX",
    "cp": "22105",
    "pays": "France",
    "adresse": "9 RUE DU CHATEAU",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Cité Corsaire de Saint Malo",
    "ville": "CANCALE",
    "cp": "35260",
    "pays": "France",
    "adresse": "6 RUE DE LA VILLE JEGU",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "O.T. DU PAYS DE MEAUX",
    "ville": "MEAUX",
    "cp": "77100",
    "pays": "France",
    "adresse": "5 PLACE CHARLES DE GAULLE - M. CHEMET",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "OFFICE DE TOURISME DU COTENTIN",
    "ville": "Cherbourg-en-Cotentin",
    "cp": "50100",
    "pays": "France",
    "adresse": "14 Quai Alexandre III",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Anis de Flavigny",
    "ville": "Flavigny-sur-Ozerain",
    "cp": "21150",
    "pays": "France",
    "adresse": "Abbaye de Flavigny, 4 Rue de l'Abbaye",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Blerancourt",
    "ville": "BLERANCOURT",
    "cp": "02300",
    "pays": "France",
    "adresse": "7 PLACE DE L HOTEL DE VILLE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "Aubusson",
    "ville": "Aubusson",
    "cp": "23200",
    "pays": "France",
    "adresse": "16 AVENUE DES LISSIERS",
    "lat": 46.0,
    "lng": 2.0
  },
  {
    "nom": "DESTINATION ROYAN ATLANTIQUE",
    "ville": "Royan",
    "cp": "17200",
    "pays": "France",
    "adresse": "1 Bd de la Grandière",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "O.T. DE BATZ-SUR-MER",
    "ville": "BATZ SUR MER",
    "cp": "44740",
    "pays": "FRANCE",
    "adresse": "25 RUE DE LA PLAGE",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Automobile Club de l'Ouest",
    "ville": "Le Mans",
    "cp": "72019",
    "pays": "France",
    "adresse": "Circuit des 24 Heures CS21928",
    "lat": 48.0077,
    "lng": 0.1996
  },
  {
    "nom": "METROPOLE DE LYON",
    "ville": "Lyon",
    "cp": "69002",
    "pays": "France",
    "adresse": "Pl. Bellecour,",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Centre culturel le Rachi",
    "ville": "TROYES",
    "cp": "10000",
    "pays": "France",
    "adresse": "5 RUE BRUNNEVAL",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Centre historique minier",
    "ville": "Lewarde",
    "cp": "59287",
    "pays": "France",
    "adresse": "Fosse Delloye, Rue d'Erchin",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Centre Nal du Costume de Scène",
    "ville": "Moulins",
    "cp": "3000",
    "pays": "France",
    "adresse": "Quartier Villars, Route de Montilly",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "COMMUNE DE SAINT ANDIOL",
    "ville": "Saint-Andiol",
    "cp": "13670",
    "pays": "France",
    "adresse": "Place du Général de Gaulle",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "MAIRIE DE RUE",
    "ville": "Rue",
    "cp": "80120",
    "pays": "France",
    "adresse": "3 rue Ernest Dumont",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Citadelle de Besançon",
    "ville": "Besançon",
    "cp": "25000",
    "pays": "France",
    "adresse": "99 Rue des Fusillés de la Résistance",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "LES AILES DU LEMONT",
    "ville": "Sierre",
    "cp": "3960",
    "pays": "Suisse",
    "adresse": "ROUTE DE CORIN 11",
    "lat": 46.8182,
    "lng": 8.2275
  },
  {
    "nom": "MAIRIE DE BAYEUX",
    "ville": "BAYEUX",
    "cp": "14400",
    "pays": "FRANCE",
    "adresse": "CABINET DU MAIRE - 1ER ETAGE",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "BOUTIQUE",
    "ville": "BAYEUX",
    "cp": "14400",
    "pays": "FRANCE",
    "adresse": "14 RUE AUX COQS",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Conseil de la Haute-Loire",
    "ville": "Le Puy-en-Velay",
    "cp": "43009",
    "pays": "France",
    "adresse": "1 PLACE MONSEIGNEUR DE GALARD",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Haribo",
    "ville": "MARSEILLE",
    "cp": "13014",
    "pays": "France",
    "adresse": "67 BD DU CAPITAINE GEZE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Infopuce",
    "ville": "Marseille",
    "cp": "13005",
    "pays": "France",
    "adresse": "157 BOULEVARD CHAVE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Mairie de Vannes",
    "ville": "Vannes",
    "cp": "56000",
    "pays": "France",
    "adresse": "Pl. Maurice Marchais",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Château de Blois",
    "ville": "BLOIS",
    "cp": "41000",
    "pays": "France",
    "adresse": "PLACE DU CHATEAU",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Mairie de Cucugnan",
    "ville": "Cucugnan",
    "cp": "11350",
    "pays": "France",
    "adresse": "4 Pl. du Platane",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "VILLE DE MONTAUBAN",
    "ville": "MONTAUBAN",
    "cp": "82000",
    "pays": "FRANCE",
    "adresse": "19 RUE HOTEL DE VILLE",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "Mairie de Rouen",
    "ville": "Rouen Cedex",
    "cp": "76037",
    "pays": "France",
    "adresse": "27 RUE VICTOR HUGO",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Marie Saint Bertrand de Comminges",
    "ville": "Saint-Bertrand-de-Comminges",
    "cp": "34510",
    "pays": "France",
    "adresse": "PARVIS DE LA CATHEDRALE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "OT Besse",
    "ville": "BESSE SUR ISSOLE",
    "cp": "83890",
    "pays": "France",
    "adresse": "15 BOULEVARD PAUL BERT",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "OT Arles",
    "ville": "Arles",
    "cp": "13200",
    "pays": "France",
    "adresse": "9 Bd des Lices",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "OT Arras",
    "ville": "Arras",
    "cp": "62000",
    "pays": "France",
    "adresse": "Hôtel de Ville, Pl. des Héros,",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "FROMAGERIE DE LIVAROT",
    "ville": "Livarot-Pays-d'Auge",
    "cp": "14140",
    "pays": "France",
    "adresse": "42 Rue Gén Leclerc,",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "OT de l'Abbevillois",
    "ville": "Abbeville",
    "cp": "80100",
    "pays": "France",
    "adresse": "1 Place de l'Amiral Courbet",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "OT de Provins",
    "ville": "PROVINS",
    "cp": "77160",
    "pays": "France",
    "adresse": "CHEMIN DE VILLECRAN",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "OT HAUT-JURA SAINT-CLAUDE",
    "ville": "SAINT-CLAUDE",
    "cp": "39200",
    "pays": "France",
    "adresse": "1 AVENUE DE BELFORT",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "OT du Pays de Langres",
    "ville": "LANGRES",
    "cp": "52201",
    "pays": "France",
    "adresse": "SQUARE OLIVIER LAHALLE",
    "lat": 48.1167,
    "lng": 5.1333
  },
  {
    "nom": "OT Kaysersberg",
    "ville": "Kaysersberg",
    "cp": "68240",
    "pays": "France",
    "adresse": "39 rue du Général de Gaulle",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "OT de Montpellier",
    "ville": "MONTPELLIER",
    "cp": "34000",
    "pays": "France",
    "adresse": "30 ALLEE DE LATTRE DE TASSIGNY",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Natzweiler - Struthof",
    "ville": "NATZWILLER",
    "cp": "67130",
    "pays": "FRANCE",
    "adresse": "Route départementale 130",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "OT Palavas les flots",
    "ville": "PALAVAS LES FLOTS",
    "cp": "34250",
    "pays": "France",
    "adresse": "PLACE DE LA MEDITERRANEE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "OT Cahors - Vallée du Lot",
    "ville": "Cahors",
    "cp": "46000",
    "pays": "France",
    "adresse": "Place François Mitterand",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Route Jacques Cœur",
    "ville": "Bourges",
    "cp": "18000",
    "pays": "France",
    "adresse": "PLACE SIMONE VEIL",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "OT Saint Die",
    "ville": "SAINT DIE DES VOSGES",
    "cp": "88100",
    "pays": "France",
    "adresse": "6 Quai du Maréchal Leclerc, 88100 Saint-Dié-des-Vosges",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "OT Sarlat",
    "ville": "SARLAT",
    "cp": "24200",
    "pays": "France",
    "adresse": "3 RUE DE TOURNY",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Roche sur Yon",
    "ville": "LA ROCHE-SUR-YON",
    "cp": "85000",
    "pays": "France",
    "adresse": "7 PLACE DU MARCHE",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Office de tuorisme de Lons-le-Saunier",
    "ville": "Lons-le-Saunier",
    "cp": "39000",
    "pays": "France",
    "adresse": "Place du 11 Novembre",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "Office de tourisme de Gien",
    "ville": "Gien",
    "cp": "45500",
    "pays": "France",
    "adresse": "Place Jean Jaurès",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "rochefort Océan",
    "ville": "Rochefort",
    "cp": "17300",
    "pays": "France",
    "adresse": "10 RUE DU DOCTEUR PELTIER",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Sables d'Olonne",
    "ville": "LES SABLES D'OLONNE CEDEX",
    "cp": "85104",
    "pays": "France",
    "adresse": "1 PROMENADE DU MARECHAL JOFFRE",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Office de tourisme de Beauvais",
    "ville": "Beauvais",
    "cp": "60000",
    "pays": "France",
    "adresse": "1 rue Beauregard",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "SPL TERRES DE CORREZE",
    "ville": "Uzerche",
    "cp": "19140",
    "pays": "France",
    "adresse": "10 Pl. de la Libération",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "Salin de Gruissan",
    "ville": "GRUISSAN",
    "cp": "11430",
    "pays": "France",
    "adresse": "ROUTE DE L'AYROLLE",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Ville de Montbard",
    "ville": "MONTBARD",
    "cp": "21506",
    "pays": "France",
    "adresse": "PLACE JACQUES GARCIA",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Office de tourisme de Retz-en-Valois",
    "ville": "Villers-Cotterêts",
    "cp": "2600",
    "pays": "France",
    "adresse": "6 place Aristide Briand",
    "lat": 44.9333,
    "lng": 4.8917
  },
  {
    "nom": "COMMUNAUTE DE COMMUNE DU GRAND",
    "ville": "PONTARLIER",
    "cp": "25300",
    "pays": "France",
    "adresse": "22 RUE PIERRE DECHANET",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Pays St Pourcinois",
    "ville": "SAINT-POURCAIN-SUR-SIOULE",
    "cp": "03500",
    "pays": "France",
    "adresse": "29 RUE MARCELIN BERTHELOT",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "Mairie des Andelys",
    "ville": "LES ANDELYS",
    "cp": "27700",
    "pays": "France",
    "adresse": "HOTEL DE VILLE",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "OFFICE DE TOURISME DE THONON",
    "ville": "Thonon-les-Bains",
    "cp": "74200",
    "pays": "France",
    "adresse": "2 Rue Michaud",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Villemagne l'Argentière",
    "ville": "VILLEMAGNE L'ARGENTIERE",
    "cp": "34600",
    "pays": "France",
    "adresse": "AVENUE JEAN JAURES",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "St Jean de Mont",
    "ville": "ST JEAN DE MONTS",
    "cp": "85160",
    "pays": "France",
    "adresse": "67  Esplanade de la Mer",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Phare de Cordouan",
    "ville": "GAILLAN EN MEDOC",
    "cp": "33340",
    "pays": "France",
    "adresse": "23 RUE DU PETIT MOULIN",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Place Stanislas",
    "ville": "NANCY CEDEX",
    "cp": "54063",
    "pays": "France",
    "adresse": "1 PLACE DE LA REPUBLIQUE",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Ecluses de Fonsenares",
    "ville": "BEZIERS",
    "cp": "34500",
    "pays": "France",
    "adresse": "Rue du Canal Royal",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Camaret sur Mer",
    "ville": "CAMARET SUR MER",
    "cp": "29570",
    "pays": "France",
    "adresse": "1 PLACE D ESTIENNE D ORVES",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Mairie de Cussac Fort Medoc",
    "ville": "CUSSAC FORT MEDOC",
    "cp": "33460",
    "pays": "France",
    "adresse": "34 AVENUE DU HAUT MEDOC",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "OT Blaye",
    "ville": "BLAYE",
    "cp": "33390",
    "pays": "France",
    "adresse": "RUE DES MININES",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "CITE DU VITRAIL",
    "ville": "Troyes",
    "cp": "10000",
    "pays": "France",
    "adresse": "Hôtel-Dieu-le-Comte, 31 Quai des Comtes de Champagne",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Club Philatelique du Trait",
    "ville": "YAINVILLE",
    "cp": "76480",
    "pays": "France",
    "adresse": "947 ROUTE DE ROUEN",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Puy Mary",
    "ville": "LE CLAUX",
    "cp": "15400",
    "pays": "France",
    "adresse": "COL DU PAS DE PEYROL",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "Blockauss Hackenberg Veckring",
    "ville": "VECKRING",
    "cp": "57920",
    "pays": "France",
    "adresse": "61 bis GRANDE RUE",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "OT Longwy",
    "ville": "LONGWY",
    "cp": "54400",
    "pays": "France",
    "adresse": "RUE DE LA MANUTENTION",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "OT VALLEE DE KAYSERSBERG",
    "ville": "KAYSERSBERG VIGNOBLE",
    "cp": "68240",
    "pays": "FRANCE",
    "adresse": "BP 74 - 51 ROUTE DE LAPOUTROIE",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "OT des Loisirs",
    "ville": "ARRAS CEDEX",
    "cp": "62001",
    "pays": "France",
    "adresse": "PLACE DES HEROS",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "OT île de Ré",
    "ville": "LE BOIS PLAGE EN RE",
    "cp": "17580",
    "pays": "France",
    "adresse": "ZAC LES MIRAMBELLES",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "OT bordeaux",
    "ville": "BESANCON",
    "cp": "25000",
    "pays": "France",
    "adresse": "2 PLACE DE LA 1ERE  ARMEE FRANCAISE",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Beffroi de la Grosse Cloche",
    "ville": "BORDEAUX  CEDEX",
    "cp": "33080",
    "pays": "France",
    "adresse": "12 COURS DU 30 JUILLET",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "OT Pays Rhin Brisach",
    "ville": "NEUF-BRISACH",
    "cp": "68600",
    "pays": "France",
    "adresse": "6 PLACES D ARMES",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "SAS TRISKELL",
    "ville": "CONCARNEAU",
    "cp": "29900",
    "pays": "France",
    "adresse": "8 RUE VAUBAN",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "SEM Developp Tourist Moustiers Verdon",
    "ville": "MOUSTIERS STE MARIE",
    "cp": "04360",
    "pays": "France",
    "adresse": "OFFICE DE TOURISME, Place de l'église BP1",
    "lat": 44.0833,
    "lng": 6.2333
  },
  {
    "nom": "SERAC",
    "ville": "ARGENTIERE",
    "cp": "74400",
    "pays": "France",
    "adresse": "65 CHEMIN DE LA GLACIERE",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Briançon",
    "ville": "BRIANCON",
    "cp": "05100",
    "pays": "France",
    "adresse": "PORTE DE PIGNEROL",
    "lat": 44.56,
    "lng": 6.0783
  },
  {
    "nom": "Mère Poulard",
    "ville": "",
    "cp": "50170",
    "pays": "France",
    "adresse": "GRANDE RUE",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Cité de la Mer",
    "ville": "CHERBOURG-OCTEVILLE",
    "cp": "50100",
    "pays": "France",
    "adresse": "GARE MARITIME TRANSATLANTIQUE",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Bordeaux",
    "ville": "Bordeaux",
    "cp": "33800",
    "pays": "France",
    "adresse": "6 RUE PORTE DE LA MONNAIE",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Soissons",
    "ville": "SOISSONS CEDEX",
    "cp": "02209",
    "pays": "France",
    "adresse": "PLACE DE L'HOTEL DE VILLE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "Limoges",
    "ville": "LIMOGES CEDEX 1",
    "cp": "87031",
    "pays": "France",
    "adresse": "MUSEE DE LA RESISTANCE",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "PXRMEDIA",
    "ville": "",
    "cp": "78800",
    "pays": "France",
    "adresse": "18a RUE FAIDHERBE",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "OT Saint Emilion",
    "ville": "SAINT-EMILION",
    "cp": "33330",
    "pays": "France",
    "adresse": "PLACE DES CRENEAUX",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "OT d'Amboise",
    "ville": "AMBOISE",
    "cp": "37400",
    "pays": "France",
    "adresse": "QUAI DU GENERAL DE  GAULLE",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "OT Albi",
    "ville": "ALBI",
    "cp": "81000",
    "pays": "France",
    "adresse": "42 RUE MARIES",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "OT Guerledan",
    "ville": "Guerlédan",
    "cp": "22530",
    "pays": "France",
    "adresse": "1 Place de l'Eglise",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "OT Sète",
    "ville": "Sete",
    "cp": "34200",
    "pays": "France",
    "adresse": "60 GRAND RUE MARIO ROUSTAN",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "OT Cretes",
    "ville": "Launois sur Vence",
    "cp": "08430",
    "pays": "France",
    "adresse": "1 rue Cécilia Gazagnaire",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "OT Reims",
    "ville": "REIMS CEDEX",
    "cp": "51725",
    "pays": "France",
    "adresse": "6 RUE ROCKEFELLER",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "VILLE DE STRASBOURG",
    "ville": "STRASBOURG",
    "cp": "67076",
    "pays": "FRANCE",
    "adresse": "1 PARC DE L'ETOILE",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "PAYS DE FENELON",
    "ville": "SALIGNAC EYVIGUES",
    "cp": "24590",
    "pays": "FRANCE",
    "adresse": "1 PLACE DE LA MAIRIE",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "OT Epernay",
    "ville": "EPERNAY CEDEX",
    "cp": "51201",
    "pays": "France",
    "adresse": "7 AVENUE DE CHAMPAGNE",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "MAIRIE DE GORDES",
    "ville": "GORDES",
    "cp": "84220",
    "pays": "FRANCE",
    "adresse": "PLACE DU CHATEAU",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "COMMUNAUTE DE COMMUNES",
    "ville": "CASTELNAUDARY",
    "cp": "11400",
    "pays": "France",
    "adresse": "40 AV DU HUIT MAI 1945",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "OT DES DEUX RIVES",
    "ville": "AUVILLAR",
    "cp": "82340",
    "pays": "France",
    "adresse": "4-6 rue du Couvent",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "Mouzon",
    "ville": "CARIGNAN",
    "cp": "08110",
    "pays": "France",
    "adresse": "37 TER AVENUE DU GENERAL DE GAULLE",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "O.T. DE PARAY-LE-MONIAL",
    "ville": "PARAY-LE-MONIAL",
    "cp": "71600",
    "pays": "France",
    "adresse": "25 AVENUE JEAN-PAUL II",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Porte Saint Michel de Guerande",
    "ville": "GUERANDE",
    "cp": "44350",
    "pays": "France",
    "adresse": "1 PLACE DU MARCHE AU BOIS",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "OT Flandre",
    "ville": "HAZEBROUCK",
    "cp": "59190",
    "pays": "France",
    "adresse": "41 AVENUE DU MARECHAL DE LATTRE",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Fort de Conde",
    "ville": "PRESLES ET BOVES",
    "cp": "02370",
    "pays": "France",
    "adresse": "20 TER DUE DU BOIS MORIN",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "OFFICE DE TOURISME SALINS-LES-BAINS",
    "ville": "SALINS-LES-BAINS",
    "cp": "39110",
    "pays": "FRANCE",
    "adresse": "PLACE DES SALINES",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "Fort Mardyck Loutre",
    "ville": "DUNKERQUE CEDEX 1",
    "cp": "59386",
    "pays": "France",
    "adresse": "PERTUIS DE LA MARINE",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "OT Pays d'Aurillac",
    "ville": "AURILLAC",
    "cp": "15000",
    "pays": "France",
    "adresse": "7 RUE DES CARMES",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "OT Argeles",
    "ville": "ARGELES SUR MER",
    "cp": "66700",
    "pays": "France",
    "adresse": "PLACE DE L'EUROPE",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "OT Collonges la Rouge",
    "ville": "COLLONGES-LA-ROUGE",
    "cp": "19500",
    "pays": "France",
    "adresse": "RUE DE LA BARRIERE",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "MAIRIE D'AIGUILHE",
    "ville": "AIGUILHE",
    "cp": "43000",
    "pays": "FRANCE",
    "adresse": "11 LES HAUTS DE CHOSSON",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "OFFICE DE TOURISME - EPIC",
    "ville": "BALARUC-LES-BAINS",
    "cp": "34540",
    "pays": "FRANCE",
    "adresse": "PAVILLON SEVIGNE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "CLERMONT AUVERGNE TOURISME",
    "ville": "CLERMONT FERRAND",
    "cp": "63000",
    "pays": "FRANCE",
    "adresse": "PLACE DE LA VICTOIRE",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "O.T. DE SAINT-CIRQ LAPOPIE",
    "ville": "SAINT-CIRQ LAPOPIE",
    "cp": "46330",
    "pays": "FRANCE",
    "adresse": "PLACE DE SOMBRAL",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "OT Dieppe Maritime",
    "ville": "DIEPPE CEDEX",
    "cp": "76204",
    "pays": "France",
    "adresse": "4  BOULEVARD DU GENERAL DE GAULLE",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "OT Baie de Somme",
    "ville": "ABBEVILLE",
    "cp": "80100",
    "pays": "France",
    "adresse": "PLACE DE LA GARE",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "OT Semur en Auxois",
    "ville": "SEMUR-EN-AUXOIS",
    "cp": "21140",
    "pays": "France",
    "adresse": "2 PLACE GAVEAU",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "OT Croisic",
    "ville": "LE CROISIC",
    "cp": "44490",
    "pays": "France",
    "adresse": "6 RUE DU PILORI",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "OT Pays de Salers",
    "ville": "SALERS",
    "cp": "15140",
    "pays": "France",
    "adresse": "3, place Tyssandier d’Escous",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "OT Dunkerque",
    "ville": "DUNKERQUE",
    "cp": "59140",
    "pays": "FRANCE",
    "adresse": "RUE DE L'AMIRAL RONAC'H",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "OT Ile d'Oléron",
    "ville": "MARENNES",
    "cp": "17230",
    "pays": "France",
    "adresse": "22 RUE DUBOIS MEYNARDIE",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "OT Vallée du Cœur de France",
    "ville": "MONTLUCON",
    "cp": "03100",
    "pays": "FRANCE",
    "adresse": "67 TER BOULEVARD DE COURTAIS",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "OT Havre",
    "ville": "LE HAVRE CEDEX",
    "cp": "76059",
    "pays": "France",
    "adresse": "186 BOULEVARD CLEMENCEAU",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "OT Bourges",
    "ville": "BOURGES CEDEX",
    "cp": "18003",
    "pays": "FRANCE",
    "adresse": "21 RUE VICTOR HUGO",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "OT Douai",
    "ville": "DOUAI",
    "cp": "59500",
    "pays": "France",
    "adresse": "70 PLACE D'ARMES",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Bassin d'Arcachon",
    "ville": "LA TESTE DE BUCH",
    "cp": "33260",
    "pays": "France",
    "adresse": "AIRE DE REPOS  LA DUNE DU PILAT",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Dieppe",
    "ville": "DIEPPE",
    "cp": "76200",
    "pays": "FRANCE",
    "adresse": "PONT JEHAN ANGO -QUAI DU CARENAGE",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Dreux",
    "ville": "DREUX CEDEX",
    "cp": "28103",
    "pays": "FRANCE",
    "adresse": "2 RUE DE CHATEAUDUN",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Dinard Côte Emeraude",
    "ville": "DINARD",
    "cp": "35800",
    "pays": "FRANCE",
    "adresse": "2 BOULEVARD FEART",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Domremy la Pucelle",
    "ville": "DOMREMY-LA-PUCELLE",
    "cp": "88630",
    "pays": "FRANCE",
    "adresse": "RUE DE LA BASILIQUE",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "Dragon de Calais",
    "ville": "CALAIS",
    "cp": "62100",
    "pays": "France",
    "adresse": "201 Av. Winston Churchill",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "OT Tenareze",
    "ville": "CONDOM",
    "cp": "32100",
    "pays": "FRANCE",
    "adresse": "5 PLACE SAINT PIERRE",
    "lat": 43.6333,
    "lng": 0.5833
  },
  {
    "nom": "OT Lavaur",
    "ville": "LAVAUR",
    "cp": "81500",
    "pays": "FRANCE",
    "adresse": "TOUR DES RONDES",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "MAIRIE DE ST-GERVAIS",
    "ville": "Le Pré-Saint-Gervais",
    "cp": "93310",
    "pays": "FRANCE",
    "adresse": "1 Rue Emile Augier",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "OT Lille",
    "ville": "LILLE",
    "cp": "59000",
    "pays": "FRANCE",
    "adresse": "5 & 9 RUE DU PALAIS",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "OT Saint Remy",
    "ville": "ST REMY DE PROVENCE",
    "cp": "13210",
    "pays": "FRANCE",
    "adresse": "PLACE JEAN JAURES",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "OT Epinal",
    "ville": "EPINAL",
    "cp": "88000",
    "pays": "FRANCE",
    "adresse": "6 PLACE SAINT GOERY",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "OT Pays Vaison",
    "ville": "VAISON-LA-ROMAINE",
    "cp": "84110",
    "pays": "FRANCE",
    "adresse": "PLACE DU CHANOINE SAUTEL",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "OT St Quentinois",
    "ville": "SAINT QUENTIN",
    "cp": "02100",
    "pays": "FRANCE",
    "adresse": "3 RUE EMILE ZOLA",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "OT Eguisheim",
    "ville": "EGUISHEIM",
    "cp": "68420",
    "pays": "FRANCE",
    "adresse": "22 A GRAND' RUE",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "OT Briancon",
    "ville": "BRIANCON",
    "cp": "05100",
    "pays": "France",
    "adresse": "MAISON DES TEMPLIERS",
    "lat": 44.56,
    "lng": 6.0783
  },
  {
    "nom": "OT Pays de Dole",
    "ville": "CANCALE",
    "cp": "35260",
    "pays": "FRANCE",
    "adresse": "6 RUE DE LA VILLE JEGU",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Côte d'Albâtre - Fecamp",
    "ville": "FECAMP",
    "cp": "76400",
    "pays": "FRANCE",
    "adresse": "QUAI SADI CARNOT",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "DEPARTEMENT DE LA MOSELLE",
    "ville": "METZ CEDEX",
    "cp": "57036",
    "pays": "FRANCE",
    "adresse": "1 RUE DU PONT MOREAU",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "VILLE DE ST-AMAND-MONTROND",
    "ville": "SAINT-AMAND-MOROND",
    "cp": "18200",
    "pays": "FRANCE",
    "adresse": "2 RUE PHILIBERT AUDEBRAND",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "ASSOCIATION ECLA",
    "ville": "CHATEAU-LARCHER",
    "cp": "86370",
    "pays": "FRANCE",
    "adresse": "ENTENTE CHATEAU-LARCHER ANIMATIO",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "OT Bormes les Mimosas",
    "ville": "BORMES LES MIMOSAS",
    "cp": "83230",
    "pays": "France",
    "adresse": "1 PLACE GAMBETTA",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "OT Chalons en Champagne",
    "ville": "CHALONS EN CHAMPAGNE",
    "cp": "51000",
    "pays": "FRANCE",
    "adresse": "3 QUAI DES ARTS",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "O.T DE GERMIGNY-DES-PRES",
    "ville": "GERMIGNY-DES-PRES",
    "cp": "45110",
    "pays": "FRANCE",
    "adresse": "6 ROUTE DE SAINT-MARTIN",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "ASSO. DES SITES PAYS CATHARE",
    "ville": "CARCASSONNE CEDEX 09",
    "cp": "11855",
    "pays": "FRANCE",
    "adresse": "ALLEE RAYMOND COURRIERE",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "OT Saint Jean Pied de Port",
    "ville": "SAINT JEAN PIED DE PORT",
    "cp": "64220",
    "pays": "FRANCE",
    "adresse": "14 PLACE CHARLES DE GAULLE",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "OT Saint Etienne",
    "ville": "ST ETIENNE",
    "cp": "42000",
    "pays": "FRANCE",
    "adresse": "16 AVENUE DE LA LIBERATION",
    "lat": 45.4333,
    "lng": 4.3833
  },
  {
    "nom": "OT Pays Cordais",
    "ville": "CORDES SUR CIEL",
    "cp": "81170",
    "pays": "FRANCE",
    "adresse": "38 GRAND RUE RAYMOND VII",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "OT Pays de Lyon La Foret",
    "ville": "LYONS LA FORET",
    "cp": "27480",
    "pays": "FRANCE",
    "adresse": "25 BIS PLACE BENSERADE",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "OFFICE DE TOURISME DE VERDUN",
    "ville": "VERDUN",
    "cp": "55100",
    "pays": "FRANCE",
    "adresse": "1 BIS RUE DU GENERAL MANGIN",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "Village Du Der",
    "ville": "STE MARIE DU LAC NUISEMENT",
    "cp": "51290",
    "pays": "FRANCE",
    "adresse": "Village Musée du Der",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "PAYS DE CHARLIEU",
    "ville": "CHARLIEU",
    "cp": "42190",
    "pays": "FRANCE",
    "adresse": "9 PL DE LA BOUVERIE",
    "lat": 45.4333,
    "lng": 4.3833
  },
  {
    "nom": "METEOSITE DU MONT AIGOUAL",
    "ville": "VALLERAUGES",
    "cp": "30570",
    "pays": "FRANCE",
    "adresse": "OBSERVATOIRE METEO",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "OT Plateau de Caux Maritime",
    "ville": "SAINT VALERY EN CAUX",
    "cp": "76460",
    "pays": "FRANCE",
    "adresse": "1 QUAI D 'AMONT",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "CONFRERIE DES CHEVALIERS",
    "ville": "PLERIN",
    "cp": "22190",
    "pays": "FRANCE",
    "adresse": "22 QUAI CHANOINE GUINARD",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Bibracte EPCC",
    "ville": "GLUX-EN-GLENNE",
    "cp": "58370",
    "pays": "France",
    "adresse": "CENTRE ARCHEOLOGIQUE EUROPEEN",
    "lat": 47.0,
    "lng": 3.5
  },
  {
    "nom": "Chamonix",
    "ville": "CHAMONIX",
    "cp": "74400",
    "pays": "FRANCE",
    "adresse": "35 PLACE DE LA MER DE GLACE",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "OT LA BRESSE HAUTES VOSGES",
    "ville": "La Bresse",
    "cp": "88250",
    "pays": "France",
    "adresse": "2 A Rue des Proyes",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "La Grande Motte",
    "ville": "LA GRANDE MOTTE",
    "cp": "34280",
    "pays": "FRANCE",
    "adresse": "55 RUE DU PORT",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "MAIRIE DE SAINTES",
    "ville": "Saintes",
    "cp": "17100",
    "pays": "France",
    "adresse": "Sq. André Maudet",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "LE COTENTIN COMMUNAUTE D'AGGLO",
    "ville": "Cherbourg-en-Cotentin",
    "cp": "50130",
    "pays": "France",
    "adresse": "8 Rue des Vindits",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "OT Pic du Midi",
    "ville": "BAGNERES DE BIGORRE",
    "cp": "65200",
    "pays": "FRANCE",
    "adresse": "3 ALLEE TOURNEFORT",
    "lat": 43.2333,
    "lng": 0.1667
  },
  {
    "nom": "OFFICE DE TOURISME CAP SIZUN",
    "ville": "Audierne",
    "cp": "29770",
    "pays": "France",
    "adresse": "8 Rue Victor Hugo",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Pont Sainte Marie",
    "ville": "PONT-SAINTE-MARIE",
    "cp": "10150",
    "pays": "France",
    "adresse": "VOIE DU BOIS",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Alambic Monflanquin",
    "ville": "MONFLANQUIN",
    "cp": "47150",
    "pays": "FRANCE",
    "adresse": "MARTINEZ",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "OT Grand Auch",
    "ville": "AUCH CEDEX",
    "cp": "32003",
    "pays": "FRANCE",
    "adresse": "3 PLACE DE LA REPUBLIQUE",
    "lat": 43.6333,
    "lng": 0.5833
  },
  {
    "nom": "OT Mairie de",
    "ville": "ST MICHEL CHEF-CHEF",
    "cp": "44730",
    "pays": "FRANCE",
    "adresse": "17 RUE DE CHEVECIER",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "OT Vannes Golfe",
    "ville": "VANNES CEDEX",
    "cp": "56039",
    "pays": "FRANCE",
    "adresse": "QUAI TABARLY - CS 23921",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "COMMUNAUTE AGGLO. CAP ATLANTIQUE",
    "ville": "LA BAULE",
    "cp": "44503",
    "pays": "FRANCE",
    "adresse": "3 AVENUE DES NOELLES",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Donjon du Capitole",
    "ville": "Toulouse",
    "cp": "31000",
    "pays": "FRANCE",
    "adresse": "Rue Ernest Roschach",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "VILLE DE CARPENTRAS",
    "ville": "CARPENTRAS CEDEX",
    "cp": "84208",
    "pays": "FRANCE",
    "adresse": "PLACE MAURICE CHARRETIER",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "OT Mont de Marsan",
    "ville": "MONT DE MARSAN",
    "cp": "40000",
    "pays": "FRANCE",
    "adresse": "1 PLACE CHARLES DE GAULLE",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "OT Soissons",
    "ville": "SOISSONS",
    "cp": "02200",
    "pays": "FRANCE",
    "adresse": "16 PLACE FERNAND MARQUIGNY",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "ASSO.LUNEVILLE CHATEAU DES LUMIERES",
    "ville": "LUNEVILLE",
    "cp": "54300",
    "pays": "FRANCE",
    "adresse": "PLACE DE LA 2ème D.B.",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "OT DE MOUSTIERS STE-MARIE",
    "ville": "MOUSTIERS STE MARIE",
    "cp": "04360",
    "pays": "FRANCE",
    "adresse": "PLACE DE L'EGLISE",
    "lat": 44.0833,
    "lng": 6.2333
  },
  {
    "nom": "OT Mâcon",
    "ville": "MACON",
    "cp": "71000",
    "pays": "FRANCE",
    "adresse": "1 PLACE SAINT PIERRE",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "COMMUNAUTE DE COMMUNE JURA SUD",
    "ville": "ORGELET",
    "cp": "37270",
    "pays": "FRANCE",
    "adresse": "PETITE MONTAGNE ET REGION D'ORGELET, 4 chemin du quart",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "OT Moulins",
    "ville": "MOULINS",
    "cp": "03000",
    "pays": "FRANCE",
    "adresse": "11 RUE FRANCOIS PERON",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "PAYS D'IROISE",
    "ville": "Lanrivoaré",
    "cp": "29290",
    "pays": "FRANCE",
    "adresse": "zone de Kerdrioual",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "OT Pays d'Eguish",
    "ville": "EGUISHEIM",
    "cp": "68420",
    "pays": "FRANCE",
    "adresse": "22A GRAND'RUE",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Manoir d'Eyrignac",
    "ville": "PARIS",
    "cp": "75008",
    "pays": "FRANCE",
    "adresse": "11 RUE ARSENE HOUSSAYE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Salins les Bains",
    "ville": "SALINS LES BAINS",
    "cp": "39110",
    "pays": "France",
    "adresse": "PLACE DES ALLIES ET DE LA RESISTANCE",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "VILLE DE NOGENT-LE-ROTROU",
    "ville": "Nogent-le-Rotrou",
    "cp": "28400",
    "pays": "France",
    "adresse": "9 Rue Villette Gâte,",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Vallis Clausa",
    "ville": "FONTAINE DE VAUCLUSE",
    "cp": "84800",
    "pays": "FRANCE",
    "adresse": "CHEMIN DE LA FONTAINE",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "OT Arbois Poligny Salins",
    "ville": "SALINS LES BAINS",
    "cp": "39110",
    "pays": "FRANCE",
    "adresse": "2 PLACE DES SALINES",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "O.T. AUX SOURCES CANAL DU MIDI",
    "ville": "REVEL",
    "cp": "31250",
    "pays": "FRANCE",
    "adresse": "20 RUE JEAN MOULIN",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Pointe du Raz",
    "ville": "PLOGOFF",
    "cp": "29770",
    "pays": "FRANCE",
    "adresse": "POINTE DU RAZ EN DU CAP SIZUN",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "OT Sete Archipel",
    "ville": "MEZE",
    "cp": "34140",
    "pays": "FRANCE",
    "adresse": "Residence de la capitainerie, QUAI BAPTISTE GUITARD",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "OT Grand Villeneuvois",
    "ville": "VILLENEUVE SUR LOT",
    "cp": "47300",
    "pays": "FRANCE",
    "adresse": "ALLEE FEDERICO GARCIA LORCA",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "OT Ploermel",
    "ville": "PLOËRMEL",
    "cp": "56800",
    "pays": "FRANCE",
    "adresse": "5 rue du Val",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "OT Moissac",
    "ville": "MOISSAC",
    "cp": "82200",
    "pays": "FRANCE",
    "adresse": "1 BOULEVARD DE BRIENNE",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "Chalet du Puy Mary",
    "ville": "LE CLAUX",
    "cp": "15400",
    "pays": "FRANCE",
    "adresse": "COL DU PAS DE PEYROL",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "OT Vallée de la Dordogne",
    "ville": "CARENNAC",
    "cp": "46110",
    "pays": "FRANCE",
    "adresse": "COUR DU PRIEURE",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "MAIRIE DE DAX",
    "ville": "DAX CEDEX",
    "cp": "40107",
    "pays": "FRANCE",
    "adresse": "RUE SAINT PIERRE",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "MUSEE DE BORDA CHAPELLE DES CARMES",
    "ville": "",
    "cp": "40100",
    "pays": "",
    "adresse": "11 RUE DES CARMES",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "OT Bozouls",
    "ville": "BOUZOULS",
    "cp": "12340",
    "pays": "FRANCE",
    "adresse": "2 BIS PLACE DE LA MAIRIE",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "OT Montauban",
    "ville": "MONTAUBAN",
    "cp": "82002",
    "pays": "FRANCE",
    "adresse": "4 RUE DU COLLEGE",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "OT Pezenas",
    "ville": "PEZENAS",
    "cp": "34120",
    "pays": "FRANCE",
    "adresse": "PLACE DES ETATS DU LANGUEDOC",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "MAIRIE HIERS BROUAGE",
    "ville": "HIERS - BROUAGE",
    "cp": "17320",
    "pays": "FRANCE",
    "adresse": "8 PLACE DE VERDUN",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "OT Luxeuil",
    "ville": "LUXEUIL LES BAINS CEDEX",
    "cp": "70302",
    "pays": "France",
    "adresse": "30 RUE VICTOR GENOUX",
    "lat": 47.6244,
    "lng": 6.1552
  },
  {
    "nom": "O.T. CAHORS VALLEE DU LOT",
    "ville": "CAHORS",
    "cp": "46000",
    "pays": "FRANCE",
    "adresse": "PLACE FRANCOIS MITTERRAND",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "Vichy",
    "ville": "VICHY",
    "cp": "03200",
    "pays": "FRANCE",
    "adresse": "19 RUE DU PARC",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "OFFICE DE TOURISME LAC D'ANNECY",
    "ville": "ANNECY",
    "cp": "74000",
    "pays": "France",
    "adresse": "1 RUE JEAN JAURES",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "OT Intercommunal Calais Cote",
    "ville": "Calais",
    "cp": "62100",
    "pays": "France",
    "adresse": "12 Boulevard Clementeau",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "OFFICE DE TOURISME PAYS MONTBELIARD",
    "ville": "MONTBELIARD",
    "cp": "25200",
    "pays": "FRANCE",
    "adresse": "1 RUE HENRI MOUHOT",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "O.T. DE ROCHEFORT-EN-TERRE",
    "ville": "ROCHEFORT EN TERRE",
    "cp": "56220",
    "pays": "France",
    "adresse": "3 PLACE DES HALLES",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "OFFICE DE TOURISME",
    "ville": "Molsheim",
    "cp": "67120",
    "pays": "France",
    "adresse": "19 PLACE DE L'HOTEL DE VILLE",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Moulin de Meaux",
    "ville": "MEAUX",
    "cp": "77100",
    "pays": "FRANCE",
    "adresse": "54 RUE DE L ABREUVOIR",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "O.T. D'ALBI",
    "ville": "ALBI",
    "cp": "81000",
    "pays": "FRANCE",
    "adresse": "42 RUE MARIES",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "Carmel du Reposoir",
    "ville": "CLUSES",
    "cp": "74300",
    "pays": "FRANCE",
    "adresse": "100 PLACE DU 11 NOVEMBRE",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "VILLE DE LIMOGES",
    "ville": "LIMOGES CEDEX 1",
    "cp": "87031",
    "pays": "FRANCE",
    "adresse": "MUSEE DE LA RESISTANCE, 7 rue Neuve-Saint-Etienne",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "REGIE TOURISME & PATRIMOINE",
    "ville": "MONT-LOUIS",
    "cp": "66210",
    "pays": "FRANCE",
    "adresse": "6 BD VAUBAN",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Fort Mahon Plage",
    "ville": "FORT-MAHON-PLAGE",
    "cp": "80160",
    "pays": "FRANCE",
    "adresse": "555 AVENUE DE LA PLAGE",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Villefranche de Conflent",
    "ville": "VILLEFRANCHE DE CONFLENT",
    "cp": "66500",
    "pays": "FRANCE",
    "adresse": "1 PLACE DE L'EGLISE",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Mémorial Alsace Moselle",
    "ville": "SCHIRMECK",
    "cp": "67130",
    "pays": "FRANCE",
    "adresse": "ALLEE DU SOUVENIR FRANCAIS",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "EDF Hydro Sud-Ouest",
    "ville": "TOULOUSE CEDEX 1",
    "cp": "31096",
    "pays": "France",
    "adresse": "8 rue Claude Marie Perroud",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Ville de Lillebonne",
    "ville": "LILLEBONNE",
    "cp": "76170",
    "pays": "France",
    "adresse": "RUE THIERS",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "CHEMINS DU PATRIMOINE",
    "ville": "SAINT VOUGAY",
    "cp": "29440",
    "pays": "FRANCE",
    "adresse": "CHATEAU DE KERJEAN",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "CENTRE CULTUREL DE L'OUEST",
    "ville": "FONTEVRAUD L ABBAYE",
    "cp": "49590",
    "pays": "FRANCE",
    "adresse": "ABBAYE DE FONTEVRAUD",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "Village Vacance Les Pins",
    "ville": "LEON",
    "cp": "40550",
    "pays": "FRANCE",
    "adresse": "Le village sous les pins",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "Ville de Pau",
    "ville": "PAU",
    "cp": "64000",
    "pays": "FRANCE",
    "adresse": "PLACE ROYALE",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Ville d'Auriole",
    "ville": "AURIOL",
    "cp": "13390",
    "pays": "FRANCE",
    "adresse": "Place de la Libération",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Troyes",
    "ville": "TROYES",
    "cp": "10000",
    "pays": "FRANCE",
    "adresse": "16 RUE ARISTIDE BRIAND",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "Maison Nationale de Jeanne d'Arc",
    "ville": "DOMREMY LA PUCELLE",
    "cp": "88630",
    "pays": "FRANCE",
    "adresse": "2 RUE DE LA BASILIQUE",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "Mairie de Saint Junien",
    "ville": "SAINT-JUNIEN",
    "cp": "87200",
    "pays": "FRANCE",
    "adresse": "2 place Auguste Roche",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "OFFICE DE TOURISME  LAC DES SAPINS",
    "ville": "CUBLIZE",
    "cp": "69550",
    "pays": "FRANCE",
    "adresse": "Le Bancillon",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Mairie de Cavalaire sur Mer",
    "ville": "CAVALAIRE SUR MER",
    "cp": "83240",
    "pays": "FRANCE",
    "adresse": "PLACE BENJAMIN GAILLARD",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "VILLE DE BREUILLET",
    "ville": "BREUILLET",
    "cp": "91650",
    "pays": "FRANCE",
    "adresse": "42 GRANDE RUE",
    "lat": 48.6333,
    "lng": 2.4412
  },
  {
    "nom": "Maison de Tourisme du Pays",
    "ville": "LUNEVILLE",
    "cp": "54300",
    "pays": "France",
    "adresse": "2 RUE DE LA TOUR BLANCHE",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Souterrain de Laon",
    "ville": "AULNOIS SOUS LAON",
    "cp": "02000",
    "pays": "France",
    "adresse": "Allée Jean Martinot &, Prom. de la Citadelle",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "CONFISERIE DES HAUTES VOSGES",
    "ville": "PLAINFAING",
    "cp": "88230",
    "pays": "FRANCE",
    "adresse": "44 HABEAURUPT",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "MAIRIE DE NEUF-BRISACH",
    "ville": "NEUF-BRISACH",
    "cp": "68600",
    "pays": "FRANCE",
    "adresse": "4 RUE DE L'HOTEL DE VILLE",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Caverne du Dragon",
    "ville": "OULCHES LA VALLEE FOULON",
    "cp": "02160",
    "pays": "France",
    "adresse": "D18 CHEMIN DES DAMES",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "Mairie Ronde d'Ambert",
    "ville": "AMBERT",
    "cp": "63600",
    "pays": "FRANCE",
    "adresse": "4 PLACE HOTEL DE VILLE",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Mairie du Touquet",
    "ville": "LE TOUQUET PARIS PLAGE",
    "cp": "62520",
    "pays": "France",
    "adresse": "BOULEVARD DALOZ",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Aubeterre sur Dronne",
    "ville": "AUBETERRE-SUR-DRONNE",
    "cp": "16390",
    "pays": "FRANCE",
    "adresse": "16 PLACE LUDOVIC TRARIEUX",
    "lat": 45.65,
    "lng": 0.15
  },
  {
    "nom": "OFFICE DU TOURISME, Palais des congrès",
    "ville": "LA GRANDE MOTTE",
    "cp": "34280",
    "pays": "FRANCE",
    "adresse": "AVENUE JEAN BENE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "ASSO. MUSEE   CHEMIN DE FER",
    "ville": "MULHOUSE",
    "cp": "68200",
    "pays": "FRANCE",
    "adresse": "2 RUE ALFRED DE GLEHN",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Site mémoire Saint exupéry",
    "ville": "PARIS",
    "cp": "75014",
    "pays": "France",
    "adresse": "13 BD EDGAR QUINET",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CC Yves Rocher",
    "ville": "LA GACILLY",
    "cp": "56200",
    "pays": "France",
    "adresse": "21 LA VILLE AUX AINES",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "CC Yves Rocher",
    "ville": "PARIS",
    "cp": "75008",
    "pays": "France",
    "adresse": "12/14 ROND-POINT DES CHAMPS ELYSEES",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CC Pornic",
    "ville": "PORNIC CEDEX",
    "cp": "44215",
    "pays": "FRANCE",
    "adresse": "2 RUE DU DR ANGE GUEPIN",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "CC Coucy",
    "ville": "COUCY LE CHATEAU",
    "cp": "02380",
    "pays": "FRANCE",
    "adresse": "3 PLACE DU MARCHE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "Association aux Marins",
    "ville": "PLOUGONVELIN",
    "cp": "29217",
    "pays": "FRANCE",
    "adresse": "RUE DES MARTYRES",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Phare Chassiron",
    "ville": "ST DENIS D OLERON",
    "cp": "17650",
    "pays": "FRANCE",
    "adresse": "PHARE DE CHASSIRON",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "COMMUNE DE CABOURG",
    "ville": "CABOURG",
    "cp": "14390",
    "pays": "FRANCE",
    "adresse": "AVENUE DE LA MER",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "MAIRIE DE BORT-LES-ORGUES",
    "ville": "Bort-les-Orgues",
    "cp": "19110",
    "pays": "France",
    "adresse": "33 Pl. du Dix Neuf Octobre",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "Phare de Cordouan",
    "ville": "BLAYE",
    "cp": "33390",
    "pays": "France",
    "adresse": "12 RUE SAINT SIMON",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Terres & Merveilles Baie de Somme",
    "ville": "Baie de Somme",
    "cp": "80120",
    "pays": "FRANCE",
    "adresse": "3 bis route du Crotoy",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "Phare du Cap Ferret",
    "ville": "LEGE CAP FERRET",
    "cp": "33950",
    "pays": "FRANCE",
    "adresse": "1 AVENUE DU GENERAL DE GAULLE",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "MAIRIE DE SARREGUEMINES",
    "ville": "Sarreguemines",
    "cp": "57200",
    "pays": "France",
    "adresse": "2 Rue du Maire Massing",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "O.T. DU PAYS DES ABERS",
    "ville": "LANNILIS",
    "cp": "29870",
    "pays": "FRANCE",
    "adresse": "1 RUE JEAN TROMELIN",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "O.T. DE LA REGION DE PONS",
    "ville": "PONS",
    "cp": "17800",
    "pays": "FRANCE",
    "adresse": "1 RUE DU PONTILS",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Abri du Marin",
    "ville": "COMBRIT",
    "cp": "29120",
    "pays": "France",
    "adresse": "13 QUAI JACQUES DE THEZAC",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Cap Sciences",
    "ville": "BORDEAUX",
    "cp": "33300",
    "pays": "FRANCE",
    "adresse": "QUAI DE BACALAN",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Association Numismatique Ardennaise",
    "ville": "CHARLEVILLE-MEZIERES",
    "cp": "08000",
    "pays": "France",
    "adresse": "22 PROMENADE DE DULMEN",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "SEM NANTES CULTURE ET PATRIMOINE",
    "ville": "NANTES CEDEX 1",
    "cp": "44022",
    "pays": "FRANCE",
    "adresse": "1-3 RUE DE CRUCY",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "OFFICE DE TOURISME BEZIERS MEDITERR, Maison des Orpellieres",
    "ville": "BEZIERS",
    "cp": "34500",
    "pays": "France",
    "adresse": "1 AVENUE DU PRESIDENT WILSON",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Association Numismatique du Centre",
    "ville": "ORLEANS",
    "cp": "45000",
    "pays": "France",
    "adresse": "5 RUE LOUIS PASTEUR",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "SPL DESTINATION PAYS D UZES",
    "ville": "UZES",
    "cp": "30700",
    "pays": "FRANCE",
    "adresse": "16 PLACE ALBERT 1ER",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "OFFICE DE TOURISME DU GRAND AUCH",
    "ville": "AUCH CEDEX",
    "cp": "32003",
    "pays": "FRANCE",
    "adresse": "3 PLACE DE LA REPUBLIQUE",
    "lat": 43.6333,
    "lng": 0.5833
  },
  {
    "nom": "Association Jubilée",
    "ville": "DIEPPE",
    "cp": "76200",
    "pays": "France",
    "adresse": "MEMORIAL DU 19 AOUT 1942, place camille Saint-Saens",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "TOULOUSE METROPOLE",
    "ville": "Toulouse",
    "cp": "31000",
    "pays": "France",
    "adresse": "Pl. du Capitole",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Association Macbet",
    "ville": "SAUGUES",
    "cp": "43170",
    "pays": "France",
    "adresse": "RUE DE LA TOUR",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Montluçon",
    "ville": "MONTLUCON",
    "cp": "03106",
    "pays": "France",
    "adresse": "1 RUE DES CONCHES",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "OT CAMBO -LES-BAINS",
    "ville": "CAMBO-LES-BAINS",
    "cp": "64250",
    "pays": "FRANCE",
    "adresse": "3 AVENUE DE LA MAIRIE",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "MAIRIE DE LA TREMBLADE",
    "ville": "LA TREMBLADE",
    "cp": "17390",
    "pays": "France",
    "adresse": "23 RUE DE LA SEUDRE",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "CC DES VILLES SOEURS",
    "ville": "",
    "cp": "76260",
    "pays": "",
    "adresse": "12 Av. Jacques Anquetil",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "MAIRIE DE CHATEAU-THIERRY",
    "ville": "CHATEAU-THIERRY CEDEX",
    "cp": "02405",
    "pays": "FRANCE",
    "adresse": "16 PLACE DE L’HOTEL DE VILLE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "CIVETTE AROME",
    "ville": "PARIS",
    "cp": "75017",
    "pays": "FRANCE",
    "adresse": "17 AVENUE MAC MAHON",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "DEPARTEMENT DES HAUTES ALPES",
    "ville": "GAP CEDEX",
    "cp": "05008",
    "pays": "FRANCE",
    "adresse": "PLACE SAINT ARNOUX",
    "lat": 44.56,
    "lng": 6.0783
  },
  {
    "nom": "O.T. DE BRIENNE-LE-CHATEAU",
    "ville": "BRIENNE-LE-CHATEAU",
    "cp": "10500",
    "pays": "FRANCE",
    "adresse": "34 RUE DE L'ECOLE MILITAIRE",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "ASM Clermont Auvergne",
    "ville": "CLERMONT FERRAND",
    "cp": "63000",
    "pays": "France",
    "adresse": "STADE MARCEL MICHELIN",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Boutigny",
    "ville": "BOUTIGNY",
    "cp": "77470",
    "pays": "France",
    "adresse": "58 B GRANDE RUE",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "COMPAGNIE DES PORTS DU MORBIHAN",
    "ville": "VANNES CEDEX",
    "cp": "56006",
    "pays": "FRANCE",
    "adresse": "18 RUE ALAIN GERBAULT",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Les Portes de la Champagne",
    "ville": "Château Thierry",
    "cp": "02400",
    "pays": "FRANCE",
    "adresse": "2 place des Etats Unis",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "OT INTER.GERARDMER MONTS & VALLEES",
    "ville": "GERARDMER CEDEX",
    "cp": "88401",
    "pays": "FRANCE",
    "adresse": "4 PLACE DES DEPORTES - BP 5",
    "lat": 48.1833,
    "lng": 6.45
  },
  {
    "nom": "OT DU GRAND PERIGUEUX",
    "ville": "Boulazac Isle Manoire",
    "cp": "24330",
    "pays": "FRANCE",
    "adresse": "Lieu-dit",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "COMMUNAUTE COMMUNES LODEVOIS-LARZAC",
    "ville": "LODEVE",
    "cp": "34700",
    "pays": "FRANCE",
    "adresse": "9 PLACE ALSACE LORRAINE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "SARTENAIS VALINCO TARAVO",
    "ville": "Propriano",
    "cp": "20110",
    "pays": "France",
    "adresse": "Maison des Douaniers, Av. Napoléon III",
    "lat": 41.9268,
    "lng": 8.7369
  },
  {
    "nom": "OFFICE DE TOURISME DE CREMIEU",
    "ville": "CREMIEU",
    "cp": "38460",
    "pays": "FRANCE",
    "adresse": "9 PLACE DE LA NATION-C.DE GAULLE",
    "lat": 45.1667,
    "lng": 5.7167
  },
  {
    "nom": "Commune de Tallard",
    "ville": "Tallard",
    "cp": "5130",
    "pays": "",
    "adresse": "Pl. du Gén de Gaulle",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "ASSOC. JETONS TOURISTIQUES.COM",
    "ville": "SAINT-VICTURNIEN",
    "cp": "87420",
    "pays": "France",
    "adresse": "3 RUE DU VIEUX PUIT",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "Saint Malo",
    "ville": "SAINT-MALO CEDEX",
    "cp": "35418",
    "pays": "FRANCE",
    "adresse": "PLACE CHATEAUBRIAND - CS 21826",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "VILLE DE ROUEN",
    "ville": "ROUEN CEDEX",
    "cp": "76037",
    "pays": "FRANCE",
    "adresse": "PLACE DU GENERAL DE GAULLE",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Mont Doré",
    "ville": "MONT DORE",
    "cp": "63240",
    "pays": "FRANCE",
    "adresse": "PIED DU SANCY",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "O.T. D'AUBAZINE-BEYNAT",
    "ville": "AUBAZINE",
    "cp": "19190",
    "pays": "FRANCE",
    "adresse": "LE BOURG",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "SAS MG 12 - PUY DE DOME",
    "ville": "CLERMONT-FERRAND CEDEX",
    "cp": "63064",
    "pays": "FRANCE",
    "adresse": "18 RUE VALENTIN HAUY",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "OFFICE DE TOURISME DE SAINT-OMER",
    "ville": "SAINT-OMER",
    "cp": "62500",
    "pays": "FRANCE",
    "adresse": "7 PLACE VICTOR HUGO",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "CONSEIL GENERAL",
    "ville": "BAZAS",
    "cp": "33450",
    "pays": "FRANCE",
    "adresse": "1 PLACE DE LA CATHEDRALE",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Saint Yrieix la Perche",
    "ville": "ST YRIEIX LA PERCHE",
    "cp": "87500",
    "pays": "France",
    "adresse": "45 BD DE L'HOTEL DE VILLE",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "SOUVENIRS CHARENTAIS",
    "ville": "LA PALMYRE-LES MATHES",
    "cp": "17570",
    "pays": "FRANCE",
    "adresse": "13 AVENUE AUNIS",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Saint Hilaire de Riez",
    "ville": "VILLE DE ST HILAIRE DE RIEZ",
    "cp": "85270",
    "pays": "FRANCE",
    "adresse": "PLACE DE L'EGLISE",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "CC COTEAUX ET VALLEES DES LUYS",
    "ville": "AMOU",
    "cp": "40330",
    "pays": "FRANCE",
    "adresse": "19 Rue de la Tecouere",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "MAIRIE DE PONTARLIER",
    "ville": "PONTARLIER",
    "cp": "25300",
    "pays": "FRANCE",
    "adresse": "56 rue de la République",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Saint Martin de Ré",
    "ville": "ST MARTIN DE RE",
    "cp": "17410",
    "pays": "FRANCE",
    "adresse": "PLACE DE LA REPUBLIQUE",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Mairie de Saint Paul de Fenouillet",
    "ville": "ST PAUL DE FENOUILLET",
    "cp": "66220",
    "pays": "France",
    "adresse": "20 RUE ARAGO",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "SPL TERRE D'EMERAUDE TOURISME",
    "ville": "Orgelet",
    "cp": "39270",
    "pays": "France",
    "adresse": "TERRE D'EMERAUDE COMMUNAUTE Sud Jura, 4 Chemin du Quart",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "LA TABATIERE DE L'ILE",
    "ville": "Hyères",
    "cp": "83400",
    "pays": "France",
    "adresse": "39 Pl. d'Armes,",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "OFFICE DE TOURISME  PAYS DE MORMAL",
    "ville": "Le Quesnoy",
    "cp": "59530",
    "pays": "France",
    "adresse": "1 Rue du Maréchal Joffre",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Office du Tourisme de Gisors",
    "ville": "Gisors",
    "cp": "27140",
    "pays": "France",
    "adresse": "1 Pass. du Monarque",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "CRETES PREARDENNAISES",
    "ville": "Poix-Terron",
    "cp": "08430",
    "pays": "France",
    "adresse": "RUE PRAIRIE",
    "lat": 49.76,
    "lng": 4.72
  },
  {
    "nom": "Mairie de Dijon",
    "ville": "DIJON",
    "cp": "21000",
    "pays": "FRANCE",
    "adresse": "1 PLACE DU THEATRE",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Office de tourisme de Honfleur",
    "ville": "Honfleur",
    "cp": "14600",
    "pays": "France",
    "adresse": "Quai Lepaulmier",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Office de tourisme de Saint-Paul-deVence",
    "ville": "Saint Paul de Vence",
    "cp": "6570",
    "pays": "France",
    "adresse": "2 rue Grande",
    "lat": 43.2333,
    "lng": 0.1667
  },
  {
    "nom": "Office de tourisme de Pléneuf-Val-André",
    "ville": "Pléneuf-Val-André",
    "cp": "22370",
    "pays": "France",
    "adresse": "1 Rue Winston Churhill",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Office de tourisme Baie de Quiberon",
    "ville": "Plouharnel",
    "cp": "56340",
    "pays": "France",
    "adresse": "31 Avenue de l'Ocean",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Office de tourisme du Pays Basque",
    "ville": "Saint-Jean-Pied-de-Port",
    "cp": "64220",
    "pays": "France",
    "adresse": "14 Place Charles de Gaulle",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Office de tourisme de Brioude",
    "ville": "Brioude",
    "cp": "43100",
    "pays": "France",
    "adresse": "Place Grégoire de Tours",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Office de tourisme Bastides Dordogne Périgord",
    "ville": "Monpazier",
    "cp": "24540",
    "pays": "France",
    "adresse": "Place des Cornieres",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Office de tourisme Destination Rennes",
    "ville": "Rennes",
    "cp": "35000",
    "pays": "France",
    "adresse": "1 Rue Saint Malo",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Office de tourisme Seine Eure",
    "ville": "Louviers",
    "cp": "27400",
    "pays": "France",
    "adresse": "1à Rue du Maréchal Foch",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "Mairie d'Agde",
    "ville": "Agde",
    "cp": "34300",
    "pays": "France",
    "adresse": "Avenue Raymond Pitet",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Office de tourisme Archipel de Thau",
    "ville": "Sète",
    "cp": "34200",
    "pays": "France",
    "adresse": "60 Grand Rue Mario Roustan",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Office de tourisme de Saint-Raphaël",
    "ville": "Saint-Raphaël",
    "cp": "83700",
    "pays": "France",
    "adresse": "99 Quai Albert 1er",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Office de tourisme de Gassin",
    "ville": "Gassin",
    "cp": "83580",
    "pays": "France",
    "adresse": "20 Place Léon Martel",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Office de tourisme de Biarritz",
    "ville": "Biarritz",
    "cp": "64200",
    "pays": "France",
    "adresse": "1 Square d'Ixelles",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Office de tourisme de Pouilly Bligny",
    "ville": "Pouilly en Auxois",
    "cp": "21320",
    "pays": "France",
    "adresse": "Port de Plaisance",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Ville de Hombourg Haut",
    "ville": "Hombourg Haut",
    "cp": "57470",
    "pays": "France",
    "adresse": "17 Rue de Metz",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Office de tourisme d'Avignon",
    "ville": "Avignon",
    "cp": "84000",
    "pays": "France",
    "adresse": "41 Cours Jean Jaurès",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Département de la Lozère",
    "ville": "La Garde",
    "cp": "48200",
    "pays": "France",
    "adresse": "Aire de la Lozere",
    "lat": 44.5167,
    "lng": 3.5
  },
  {
    "nom": "Office de tourisme des Baux-de-Provence",
    "ville": "Les Baux-de-Provence",
    "cp": "13520",
    "pays": "France",
    "adresse": "Rue de Trencat",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Marie de Moissac",
    "ville": "Moissac",
    "cp": "82200",
    "pays": "France",
    "adresse": "Boulevard Léon Cladel",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "Commune de Bitche",
    "ville": "Bitche",
    "cp": "57000",
    "pays": "France",
    "adresse": "31 Rue Maréchal Foch",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Agence Inspire Metz",
    "ville": "Metz",
    "cp": "57000",
    "pays": "France",
    "adresse": "2 Place d'Armes",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Ville de Guérande",
    "ville": "Guérande",
    "cp": "44350",
    "pays": "France",
    "adresse": "7 Place du Marché au Bois",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Association Prats Toujours",
    "ville": "Prats de Mollo",
    "cp": "66230",
    "pays": "France",
    "adresse": "",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Office de tourisme de Cavalaire",
    "ville": "CAVALAIRE SUR MER",
    "cp": "83240",
    "pays": "France",
    "adresse": "50 Rond Point Saint Exupery",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Douaisis Agglo Tourisme",
    "ville": "Douai",
    "cp": "59500",
    "pays": "France",
    "adresse": "70 PLACE D'ARMES",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Office de tourisme de Châteauroux",
    "ville": "Châteauroux",
    "cp": "36000",
    "pays": "France",
    "adresse": "2 Place de la République",
    "lat": 46.8065,
    "lng": 1.6914
  },
  {
    "nom": "Office de tourisme 7 vallées d'Opale",
    "ville": "Hesdin",
    "cp": "60240",
    "pays": "France",
    "adresse": "10 Place d'Armes",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Mairie de Meung-sur-Loire",
    "ville": "Meung-sur-Loire",
    "cp": "45130",
    "pays": "France",
    "adresse": "22 Rue des Remparts",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Maison intercommunale Orne Lorraine",
    "ville": "Val de Briey",
    "cp": "54150",
    "pays": "France",
    "adresse": "10 Place Thiers-Briey",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Office du tourisme du Libournais",
    "ville": "Libourne",
    "cp": "33500",
    "pays": "France",
    "adresse": "42 Place Abel Sur Champ",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Office de tourisme de Saint-Tropez",
    "ville": "Saint-Tropez",
    "cp": "83990",
    "pays": "France",
    "adresse": "11 allée du quai de l'Épi",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Office de tourisme de Guingamp Paimpol",
    "ville": "Paimpol",
    "cp": "22500",
    "pays": "France",
    "adresse": "Place de la République",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Office de tourisme de Ramatuelle",
    "ville": "Ramatuelle",
    "cp": "83350",
    "pays": "France",
    "adresse": "Place de l'Ormeau",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Office de tourisme du pays des Achards",
    "ville": "Les Achards",
    "cp": "85150",
    "pays": "France",
    "adresse": "56 avenue Georges Clémenceau",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Office de tourisme de Pornic",
    "ville": "PORNIC",
    "cp": "44210",
    "pays": "France",
    "adresse": "Place de la Gare",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Office de tourisme de Canet-en-Roussillon",
    "ville": "Canet en Roussillon",
    "cp": "66140",
    "pays": "France",
    "adresse": "49 avenue de la Méditerranée",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Office de tourisme des Saintes-Marie-de-la-Mer",
    "ville": "Les Saintes-Maries-de-la-Mer",
    "cp": "13460",
    "pays": "France",
    "adresse": "5 avenue Van Gogh",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Mairie de Baume-les-Messieurs",
    "ville": "Baume-les-Messieurs",
    "cp": "39210",
    "pays": "France",
    "adresse": "4 place de la Mairie",
    "lat": 46.6757,
    "lng": 5.5538
  },
  {
    "nom": "Mairie de Calais",
    "ville": "Calais",
    "cp": "62100",
    "pays": "France",
    "adresse": "9 rue Paul Bert",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Mairie de Lusignan",
    "ville": "Lusignan",
    "cp": "86600",
    "pays": "France",
    "adresse": "2 place du 8 Mai",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Office de tourisme de Font-Romeu",
    "ville": "Font-Romeu",
    "cp": "66120",
    "pays": "France",
    "adresse": "43 avenue Emmanuel Brousse",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Office de tourisme du Pays de Barr",
    "ville": "Barr",
    "cp": "67140",
    "pays": "France",
    "adresse": "Place de l'Hôtel de Ville",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Office de tourisme de Saint-Quay-Portrieux",
    "ville": "Saint-Quay-Portrieux",
    "cp": "22410",
    "pays": "France",
    "adresse": "17 bis rue Jeanne d’Arc",
    "lat": 48.514,
    "lng": -2.7604
  },
  {
    "nom": "Chateau de Chambord",
    "ville": "Chambord",
    "cp": "41250",
    "pays": "France",
    "adresse": "Chateau de Chambord",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Château de Chenonceaux",
    "ville": "Chenonceaux",
    "cp": "37150",
    "pays": "France",
    "adresse": "Château de Chenonceaux",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château de Cheverny",
    "ville": "Cheverny",
    "cp": "41700",
    "pays": "France",
    "adresse": "Av. du Château",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Fort de Guise",
    "ville": "Guise",
    "cp": "20120",
    "pays": "France",
    "adresse": "All. Maurice Duton",
    "lat": 41.9268,
    "lng": 8.7369
  },
  {
    "nom": "DOMAINE  DE CHANTILLY",
    "ville": "CHANTILLY",
    "cp": "60500",
    "pays": "FRANCE",
    "adresse": "17 RUE CONNETABLE",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Château de Saint Mesmin",
    "ville": "Saint-André-sur-Sèvre",
    "cp": "79380",
    "pays": "France",
    "adresse": "La ville",
    "lat": 46.3231,
    "lng": -0.4568
  },
  {
    "nom": "Château du Clos Lucé",
    "ville": "Ambroise",
    "cp": "37400",
    "pays": "France",
    "adresse": "2 Rue du Clos Lucé",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château de Grignan",
    "ville": "Grignan",
    "cp": "26230",
    "pays": "France",
    "adresse": "23 Rue Montant au Château",
    "lat": 44.9333,
    "lng": 4.8917
  },
  {
    "nom": "Château de Vaux le Vicomte",
    "ville": "Maincy",
    "cp": "77950",
    "pays": "France",
    "adresse": "Château de Vaux le Vicomte",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Château de Chaumont",
    "ville": "Chaumont Sur Yonne",
    "cp": "89340",
    "pays": "France",
    "adresse": "5 Rue de la Montagne",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "CHATEAU DE JUMILHAC",
    "ville": "PERIGUEUX",
    "cp": "24000",
    "pays": "FRANCE",
    "adresse": "19 RUE LAMARTINE",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Château de Peyrepertuse",
    "ville": "Duilhac-sous-Peyrepertuse",
    "cp": "11350",
    "pays": "France",
    "adresse": "8 CHEMIN DU FORT",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Château de Joux",
    "ville": "PONTARLIER",
    "cp": "25300",
    "pays": "France",
    "adresse": "22 RUE PIERRE DECHANET",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "CHATEAU DE SUSCINIO",
    "ville": "SARZEAU",
    "cp": "56370",
    "pays": "FRANCE",
    "adresse": "MORBIHAN PATRIMOINE SERVICES, route du Duc Jean V",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Château de Maintenon",
    "ville": "Maintenon",
    "cp": "28130",
    "pays": "France",
    "adresse": "2 PLACE ARISTIDE BRIAND",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Château de Chateaubriand",
    "ville": "Châteaubriant",
    "cp": "44110",
    "pays": "France",
    "adresse": "Place du General Charles de Gaulle",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Château de l'Eraudière",
    "ville": "NANTES",
    "cp": "44300",
    "pays": "France",
    "adresse": "11 RUE DU CHATEAU DE L'ERAUDIERE",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Château de Castelnau",
    "ville": "Castelnaud-la-Chapelle",
    "cp": "24250",
    "pays": "France",
    "adresse": "LIBRAIRIE DU MOYEN AGE",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "CHATEAU DE L'ISLETTE",
    "ville": "Azay-le-Rideau",
    "cp": "37190",
    "pays": "France",
    "adresse": "9 Rte de Langeais",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château de Foix",
    "ville": "ST MARTIN DE RE",
    "cp": "17410",
    "pays": "France",
    "adresse": "21 RUE DE SULLY",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Château des Ducs de Bretagne",
    "ville": "Nantes",
    "cp": "44000",
    "pays": "France",
    "adresse": "4 Pl. Marc Elder",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "Château de Valançay",
    "ville": "Valencay",
    "cp": "36600",
    "pays": "France",
    "adresse": "LIBRAIRIE BOUTIQUE DU CHATEAU",
    "lat": 46.8065,
    "lng": 1.6914
  },
  {
    "nom": "Château de Collioure",
    "ville": "Collioure",
    "cp": "66190",
    "pays": "France",
    "adresse": "Quai de l'Amirauté",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Château de Breteuil",
    "ville": "CHOISEL PAR CHEVREUSE",
    "cp": "78460",
    "pays": "France",
    "adresse": "Château de Breteuil",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "SARL AU JARDIN DE VILLANDRY",
    "ville": "VILLANDRY",
    "cp": "37510",
    "pays": "FRANCE",
    "adresse": "CHATEAU DE VILLANDRY, 3 rue principle",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château Feodal de Beynac",
    "ville": "Beynac-et-Cazenac",
    "cp": "24220",
    "pays": "France",
    "adresse": "Place du Château",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Château Fort de Sedan",
    "ville": "Sedan",
    "cp": "8200",
    "pays": "France",
    "adresse": "Cour du Château",
    "lat": 44.0167,
    "lng": 1.35
  },
  {
    "nom": "Château d'Ancy le Franc",
    "ville": "Ancy-le-Franc",
    "cp": "89160",
    "pays": "France",
    "adresse": "18 Pl. Clermont-Tonnerre",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Château de la verrrerie",
    "ville": "LE CREUSOT CEDEX",
    "cp": "71206",
    "pays": "France",
    "adresse": "La Verrerie",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "CHATEAU DE L'ISLETTE",
    "ville": "Azay-le-Rideau",
    "cp": "37190",
    "pays": "France",
    "adresse": "9 Rte de Langeais",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château d'Auvers",
    "ville": "Auvers-sur-Oise",
    "cp": "95430",
    "pays": "France",
    "adresse": "RUE DE LERY",
    "lat": 49.0333,
    "lng": 2.0833
  },
  {
    "nom": "Château de Blandy les Tours",
    "ville": "Blandy",
    "cp": "77115",
    "pays": "France",
    "adresse": "château de Blandy-les-Tours",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Château de Meung",
    "ville": "Meung-sur-Loire",
    "cp": "45130",
    "pays": "France",
    "adresse": "16 Pl. du Martroi,",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Château de Monbazillac",
    "ville": "Monbazillac",
    "cp": "24240",
    "pays": "France",
    "adresse": "Le Bourg",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "CHATEAU D'URTUBIE",
    "ville": "URRUGNE",
    "cp": "64122",
    "pays": "FRANCE",
    "adresse": "1 RUE BERNARD DE CORAL",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "CHATEAU LA BUSSIERE",
    "ville": "LA BUSSIERE",
    "cp": "45230",
    "pays": "FRANCE",
    "adresse": "CHATEAU LA BUSSIERE",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Château de Talmont Saint Hilaire",
    "ville": "Talmont-Saint-Hilaire",
    "cp": "85440",
    "pays": "France",
    "adresse": "8 Rue du Château,",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Château des Aventuriers",
    "ville": "Avrillé",
    "cp": "85440",
    "pays": "France",
    "adresse": "Route des Sables d'Olonne D949",
    "lat": 46.6701,
    "lng": -1.426
  },
  {
    "nom": "Château de Murol",
    "ville": "Murol",
    "cp": "63790",
    "pays": "France",
    "adresse": "Rue du Château",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Château des Milandes",
    "ville": "Castelnaud-la-Chapelle",
    "cp": "24250",
    "pays": "France",
    "adresse": "SARL JOSEPH'IN LES MILANDES",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "ASSOCIATION LES AMIS DU MUSEE",
    "ville": "OSNY",
    "cp": "95520",
    "pays": "FRANCE",
    "adresse": "CHATEAU DE GROUCHY",
    "lat": 49.0333,
    "lng": 2.0833
  },
  {
    "nom": "Château de Guillaume le Conquerant",
    "ville": "Falaise",
    "cp": "14700",
    "pays": "France",
    "adresse": "Pl. Guillaume le Conquérant",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Chantier Médiéval de Guédelon",
    "ville": "Treigny-Perreuse-Sainte-Colombe",
    "cp": "89520",
    "pays": "France",
    "adresse": "D955",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Château de Ranrouet",
    "ville": "Herbignanc",
    "cp": "44410",
    "pays": "France",
    "adresse": "Rue de Ranrouët",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "SARL CHATEAU FORT LIBERIA",
    "ville": "VILLEFRANCHE DE CONFLENT",
    "cp": "66500",
    "pays": "FRANCE",
    "adresse": "19 RUE SAINT JACQUES",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "Château de Chamerolles",
    "ville": "Chilleurs-aux-Bois",
    "cp": "45170",
    "pays": "France",
    "adresse": "Gallerand",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "CONSEIL DEPARTEMENTAL DU LOIRET",
    "ville": "ORLEANS",
    "cp": "45945",
    "pays": "France",
    "adresse": "15 RUE EUGENE VIGNAT",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Château de la Roche Guyon",
    "ville": "La Roche-Guyon",
    "cp": "95780",
    "pays": "France",
    "adresse": "1 Rue de l'Audience",
    "lat": 49.0333,
    "lng": 2.0833
  },
  {
    "nom": "Château de Chantilly",
    "ville": "Chantilly",
    "cp": "60500",
    "pays": "France",
    "adresse": "Château de Chantilly",
    "lat": 49.4167,
    "lng": 2.4167
  },
  {
    "nom": "Château de Pirou",
    "ville": "Pirou",
    "cp": "50770",
    "pays": "France",
    "adresse": "3 Le Château",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Château Monte Christo",
    "ville": "Le Port-Marly",
    "cp": "78560",
    "pays": "France",
    "adresse": "Chem. du Haut des Ormes",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Château du Rivau",
    "ville": "Lémeré",
    "cp": "37120",
    "pays": "France",
    "adresse": "9 Rue du Château",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château de Combourg",
    "ville": "Combourg",
    "cp": "35270",
    "pays": "France",
    "adresse": "23 Rue des Princes",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "AUX ARMES DU CHATEAU",
    "ville": "CHAMBORD",
    "cp": "41250",
    "pays": "FRANCE",
    "adresse": "11-12 Place Saint-Louis",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Château de Trehorenteuc",
    "ville": "TREHORENTEUC",
    "cp": "56490",
    "pays": "France",
    "adresse": "18 PLACE DE L'EGLISE",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Château de Hautefort",
    "ville": "Hautefort",
    "cp": "24390",
    "pays": "France",
    "adresse": "Le Bourg d'Hautefort",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Château de Cazeneuve",
    "ville": "Préchac",
    "cp": "33730",
    "pays": "France",
    "adresse": "Château de Cazeneuve",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "CHATEAU DE MONTAIGUT",
    "ville": "GISSAC",
    "cp": "12360",
    "pays": "FRANCE",
    "adresse": "Montégut",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Château de Langeais",
    "ville": "Langeais",
    "cp": "37130",
    "pays": "France",
    "adresse": "Place Pierre de Brosse",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Château du Hohlandsbourg",
    "ville": "Wintzenheim",
    "cp": "68920",
    "pays": "France",
    "adresse": "Rte des 5 Châteaux",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Château de Chelle sur Cher",
    "ville": "Selles-sur-Cher",
    "cp": "41130",
    "pays": "France",
    "adresse": "PLACE DU CHATEAU",
    "lat": 47.5862,
    "lng": 1.3359
  },
  {
    "nom": "Château de Belcastel",
    "ville": "Belcastel",
    "cp": "12390",
    "pays": "France",
    "adresse": "Moulin de Belcastel",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Château de Gisors",
    "ville": "Gisors",
    "cp": "27140",
    "pays": "France",
    "adresse": "Pl. de Blanmont",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "Château de Duras",
    "ville": "Duras",
    "cp": "47120",
    "pays": "France",
    "adresse": "Château des Ducs de Duras",
    "lat": 44.2,
    "lng": 0.6167
  },
  {
    "nom": "Château de Luneville",
    "ville": "Lunéville",
    "cp": "54300",
    "pays": "France",
    "adresse": "Pl. de la 2ème Division de Cavalerie",
    "lat": 48.6921,
    "lng": 6.1844
  },
  {
    "nom": "Château de Vitre",
    "ville": "Vitré",
    "cp": "35500",
    "pays": "France",
    "adresse": "Pl. du Château",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Château de Montrottier",
    "ville": "Lovagny",
    "cp": "74330",
    "pays": "France",
    "adresse": "60 All. du Château",
    "lat": 45.8992,
    "lng": 6.1294
  },
  {
    "nom": "Domaine de Dienne",
    "ville": "Dienné",
    "cp": "86410",
    "pays": "France",
    "adresse": "Domaine de Dienne",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Domaine d'Harcourt",
    "ville": "Harcourt",
    "cp": "27800",
    "pays": "France",
    "adresse": "13 Rue du Château",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "Domaine de Lindre",
    "ville": "Lindre-Basse",
    "cp": "57260",
    "pays": "France",
    "adresse": "67 Rue Principale",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Domaine Dampierre Yvelines",
    "ville": "Dampierre-en-Yvelines",
    "cp": "78720",
    "pays": "France",
    "adresse": "2 Grande Rue",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Citadelle de Montreuil sur Mer",
    "ville": "Montreuil sur Mer",
    "cp": "62170",
    "pays": "France",
    "adresse": "",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Château de Joinville",
    "ville": "Chaumont",
    "cp": "52000",
    "pays": "France",
    "adresse": "7 rue de la Maladière",
    "lat": 48.1167,
    "lng": 5.1333
  },
  {
    "nom": "Château de Trécesson",
    "ville": "Campénéac",
    "cp": "56800",
    "pays": "France",
    "adresse": "",
    "lat": 47.7481,
    "lng": -2.974
  },
  {
    "nom": "Association de la Citadelle de Marseille",
    "ville": "Marseille",
    "cp": "13007",
    "pays": "France",
    "adresse": "Fort Saint-Nicolas",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Librairie Biret",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "152 Av. des Champs-Élysées",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CULTURE ESPACES SA DOUBLON",
    "ville": "PARIS",
    "cp": "75008",
    "pays": "FRANCE",
    "adresse": "BOUTIQUE ARENES DE NIMES,155 Boulevard Haussmann",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LA BOUTIQUE DU LIEU",
    "ville": "CROIX",
    "cp": "59170",
    "pays": "FRANCE",
    "adresse": "198 RUE JEAN MONNET",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "BOUTIQUE DU SOMMET",
    "ville": "BEDOIN",
    "cp": "84410",
    "pays": "FRANCE",
    "adresse": "2887 ROUTE DES HERITIERS",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "LA LIBRAIRIE DES FABLES",
    "ville": "CHATEAU THIERRY",
    "cp": "02400",
    "pays": "FRANCE",
    "adresse": "20 GRANDE RUE",
    "lat": 49.5654,
    "lng": 3.623
  },
  {
    "nom": "MAISON FRAMMERY",
    "ville": "MONT SAINT MICHEL",
    "cp": "50116",
    "pays": "FRANCE",
    "adresse": "RUE PRINCIPALE",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Boutique Petit Prince",
    "ville": "Paris",
    "cp": "75006",
    "pays": "France",
    "adresse": "8 Rue Grégoire de Tours",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Boutique de la Source",
    "ville": "Chaudes-Aigues",
    "cp": "15110",
    "pays": "France",
    "adresse": "4 RUE DU PAR",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "Boutique souvenir de Grasse",
    "ville": "Grasse",
    "cp": "6130",
    "pays": "France",
    "adresse": "4 RUE MARCEL JOURNET",
    "lat": 48.4333,
    "lng": 0.0833
  },
  {
    "nom": "Train de l'Ardèche",
    "ville": "Saint-Jean-de-Muzols",
    "cp": "7300",
    "pays": "France",
    "adresse": "",
    "lat": 45.5646,
    "lng": 6.3994
  },
  {
    "nom": "Tabatière de l'île",
    "ville": "HYERES",
    "cp": "83400",
    "pays": "France",
    "adresse": "ILE DE PORQUEROLLES",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "Boutique L'Estanco",
    "ville": "Perrouges",
    "cp": "1800",
    "pays": "France",
    "adresse": "Rue des Rondes",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "Boutique Les Petits Bouts du Monde",
    "ville": "Saint-Guilhem-le-Désert",
    "cp": "34150",
    "pays": "France",
    "adresse": "13 rue du Bout du Monde",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Tabac presse Mazauric",
    "ville": "Laveissiere",
    "cp": "15300",
    "pays": "France",
    "adresse": "Le Lioran",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "Les Confiseurs Le Pré de la Bataille",
    "ville": "Notre-Dame de Bondeville",
    "cp": "76960",
    "pays": "France",
    "adresse": "12 rue de l'Abbaye",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "SARL Pilat Biscuits",
    "ville": "La Teste de Buch",
    "cp": "33115",
    "pays": "France",
    "adresse": "Avenue de Biscarosse",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Association œuvre du vœux national",
    "ville": "Paris",
    "cp": "75018",
    "pays": "France",
    "adresse": "35 RUE DU CHEVALIER DE LA BARRE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Basilique Sainte therese",
    "ville": "Lisieux",
    "cp": "14100",
    "pays": "France",
    "adresse": "1 Av. Jean XXIII",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Cathédrale de Rouen",
    "ville": "Rouen",
    "cp": "76000",
    "pays": "France",
    "adresse": "3 RUE SAINT-ROMAIN",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Cathédrale Sainte Cécile",
    "ville": "Albi",
    "cp": "81000",
    "pays": "France",
    "adresse": "5 Bd Général Sibille",
    "lat": 43.9296,
    "lng": 2.1497
  },
  {
    "nom": "Cathédrale de Chartres",
    "ville": "Chartres",
    "cp": "28000",
    "pays": "France",
    "adresse": "18 CLOITRE NOTRE-DAME",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Collégiale Notre Dame d'Uzeste",
    "ville": "Uzeste",
    "cp": "33730",
    "pays": "France",
    "adresse": "PARVIS DE LA MAIRIE",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Basilique du rosaire",
    "ville": "Lourdes",
    "cp": "65100",
    "pays": "France",
    "adresse": "1 AVENUE MONSEIGNEUR THEAS",
    "lat": 43.2333,
    "lng": 0.1667
  },
  {
    "nom": "Eglise Saint Germain des Prés",
    "ville": "Paris",
    "cp": "75006",
    "pays": "France",
    "adresse": "3 Pl. Saint-Germain des Prés",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Paroisse Saint Mathieu",
    "ville": "Bures-sur-Yvette",
    "cp": "91440",
    "pays": "France",
    "adresse": "20 AV DU GAL LECLERC",
    "lat": 48.6333,
    "lng": 2.4412
  },
  {
    "nom": "Notre Dame de Fourviere",
    "ville": "Lyon",
    "cp": "69005",
    "pays": "France",
    "adresse": "8 Pl. de Fourvière",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Cathédrale Saint Etienne de Limoges",
    "ville": "Limoges",
    "cp": "87000",
    "pays": "France",
    "adresse": "Place de la Cathédrale",
    "lat": 45.8353,
    "lng": 1.2625
  },
  {
    "nom": "SARL LA CRYPTE",
    "ville": "CHARTRES",
    "cp": "28000",
    "pays": "FRANCE",
    "adresse": "24 Cloître Notre-Dame",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "PAROISSE SAINT PHILIBERT",
    "ville": "Tournus",
    "cp": "71700",
    "pays": "France",
    "adresse": "12 PLACE DES ARTS",
    "lat": 46.6756,
    "lng": 4.827
  },
  {
    "nom": "Abbaye Fondfroide",
    "ville": "Narbonne",
    "cp": "11100",
    "pays": "France",
    "adresse": "Route Départementale 613",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Presbytere Sainte Marie",
    "ville": "Saint-Fargeau-Ponthierry",
    "cp": "77310",
    "pays": "France",
    "adresse": "4 Pl. du Général Leclerc",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "ASSO. AMIS CATHED. SAINT-FLOUR",
    "ville": "Saint-Flour",
    "cp": "15100",
    "pays": "France",
    "adresse": "30 RUE DE LA ROLLANDIE",
    "lat": 45.05,
    "lng": 2.4167
  },
  {
    "nom": "Cathédrale Saint-Jean Baptiste",
    "ville": "LYON",
    "cp": "69005",
    "pays": "France",
    "adresse": "PLACE SAINT-JEAN",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Basilique Notre Dame de Boulogne sur Mer",
    "ville": "Boulogne-sur-Mer",
    "cp": "62200",
    "pays": "France",
    "adresse": "2 Parvis Notre Dame",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Cathédrale Notre Dame du Puy",
    "ville": "Le-Puy-en-Velay",
    "cp": "43000",
    "pays": "France",
    "adresse": "2 Rue de la Manecanterie",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Cathédrale de Strasbourg",
    "ville": "Strasbourg",
    "cp": "67000",
    "pays": "France",
    "adresse": "3 PLACE DU CHATEAU",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "CATHEDRALE SAINT-PIERRE",
    "ville": "MONTPELLIER",
    "cp": "34000",
    "pays": "FRANCE",
    "adresse": "6 BIS,RUE ABBE MONTELS",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Basilique de saint-maximin-la-sainte-baume",
    "ville": "Saint-Maximin-la-Sainte-Baume",
    "cp": "83470",
    "pays": "France",
    "adresse": "10 Pl. de L Hôtel de ville",
    "lat": 43.4333,
    "lng": 6.1333
  },
  {
    "nom": "FONDATION ABBAYE DE LA LUCERNE",
    "ville": "LA LUCERNE D'OUTREMER",
    "cp": "50320",
    "pays": "France",
    "adresse": "D105 - B.P.12",
    "lat": 49.1176,
    "lng": -1.0876
  },
  {
    "nom": "Abbatiale de Conques",
    "ville": "Conques-en-Rouergue",
    "cp": "12320",
    "pays": "France",
    "adresse": "Place De L'Abbaye",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Cathédrale Bayonne",
    "ville": "Bayonne",
    "cp": "64100",
    "pays": "France",
    "adresse": "15 Rue des Prébendes",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "Chapelle de la Cotiniere",
    "ville": "Saint-Pierre-d'Oléron",
    "cp": "17310",
    "pays": "France",
    "adresse": "1 PLACE PIERRE LOTI",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Basilique de Vezelay",
    "ville": "Vezelay",
    "cp": "89450",
    "pays": "France",
    "adresse": "La Basilique de Vézelay",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Ensemble Paroissial Sainte Anne",
    "ville": "PLONEVEZ PORZAY",
    "cp": "29550",
    "pays": "France",
    "adresse": "1 RUE DE LA PRESQU'ÎLE",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "Abbaye d'Hautecombe",
    "ville": "Saint-Pierre-de-Curtille",
    "cp": "73310",
    "pays": "France",
    "adresse": "Abbaye d'Hautecombe",
    "lat": 45.5646,
    "lng": 6.3994
  },
  {
    "nom": "PAROISSE STE-MARIE  LACS ET COUZES",
    "ville": "Saint-Nectaire",
    "cp": "63610",
    "pays": "France",
    "adresse": "25 ROUTE DE CLERMONT",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Abbaye Notre Dame de Senanque",
    "ville": "Gordes",
    "cp": "84220",
    "pays": "France",
    "adresse": "Abbaye Notre-Dame de Sénanque",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "ASSOCIATION CATHEDRALE",
    "ville": "Reims",
    "cp": "51100",
    "pays": "France",
    "adresse": "3 RUE GUILLAUME DE MACHAULT",
    "lat": 49.2583,
    "lng": 4.0317
  },
  {
    "nom": "Cathédrale Sainte Marie d'Auch",
    "ville": "Auch",
    "cp": "32000",
    "pays": "France",
    "adresse": "48 RUE DE LA BOUBEE",
    "lat": 43.6333,
    "lng": 0.5833
  },
  {
    "nom": "PAROISSE SAINT-AUSTREMOINE",
    "ville": "ISSOIRE",
    "cp": "63500",
    "pays": "FRANCE",
    "adresse": "18 RUE DU MAS",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "Abbaye de Valmagne",
    "ville": "Villeveyrac",
    "cp": "34560",
    "pays": "France",
    "adresse": "Abbaye Valmagne",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "Cathédrale Saint Vaast Arras",
    "ville": "Arras",
    "cp": "62000",
    "pays": "France",
    "adresse": "103 RUE D'AMIENS",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Cathédrale Notre Dame de la Treille",
    "ville": "Lille",
    "cp": "59800",
    "pays": "France",
    "adresse": "Pl. Gilleson",
    "lat": 50.6292,
    "lng": 3.0573
  },
  {
    "nom": "Grande Mosquée de Paris",
    "ville": "Paris",
    "cp": "75005",
    "pays": "France",
    "adresse": "2bis Pl. du Puits de l'Ermite",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "REGION NORMANDIE",
    "ville": "CAEN CEDEX 1",
    "cp": "14035",
    "pays": "FRANCE",
    "adresse": "ABBAYE AUX DAMES, place reine Mathilde",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Abbaye de Brantome",
    "ville": "Brantôme en Périgord",
    "cp": "24310",
    "pays": "France",
    "adresse": "14 Bd Charlemagne",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "PAROISSE STE MARIE REINE",
    "ville": "CARCASSONNE",
    "cp": "11000",
    "pays": "FRANCE",
    "adresse": "1 RUE SALVADOR ALLENDE",
    "lat": 43.213,
    "lng": 2.3522
  },
  {
    "nom": "Abbaye de Noirlac",
    "ville": "Bruère-Allichamps",
    "cp": "18200",
    "pays": "France",
    "adresse": "Abbaye de Noirlac,",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "Abbaye de Silvacane",
    "ville": "La Roque-d'Anthéron",
    "cp": "13640",
    "pays": "France",
    "adresse": "RD 561",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Abbaye Saint Sauvin",
    "ville": "Saint-Savin",
    "cp": "86310",
    "pays": "France",
    "adresse": "Pl. de la Libération",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "MADELEINE 2000",
    "ville": "PARIS",
    "cp": "75008",
    "pays": "FRANCE",
    "adresse": "Place de la Madeleine",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Abbaye de Royaumont",
    "ville": "Asnières-sur-Oise",
    "cp": "95270",
    "pays": "France",
    "adresse": "CHEMIN RURAL 3",
    "lat": 49.0333,
    "lng": 2.0833
  },
  {
    "nom": "PAROISSE ST-PIERRE DE MONTMARTRE",
    "ville": "PARIS",
    "cp": "75018",
    "pays": "FRANCE",
    "adresse": "2 RUE MONT CENIS",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Chapelle Notre Dame du Haut",
    "ville": "Ronchamp",
    "cp": "70250",
    "pays": "France",
    "adresse": "13 Rue de la Chapelle",
    "lat": 47.6244,
    "lng": 6.1552
  },
  {
    "nom": "Abbaye de Montivilliers",
    "ville": "Montivilliers",
    "cp": "76290",
    "pays": "France",
    "adresse": "Jardin de l'abbaye",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Abbaye Paimpont - Brocelian",
    "ville": "Paimpont",
    "cp": "35380",
    "pays": "France",
    "adresse": "1, PLACE SAINT JUDICAEL",
    "lat": 48.1147,
    "lng": -1.6794
  },
  {
    "nom": "Abbaye de Gellone",
    "ville": "Saint-Guilhem-le-Désert",
    "cp": "34150",
    "pays": "France",
    "adresse": "3 PARC D'ACTIVITE DE CAMALCE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "PAROISSE N.D. DE L'ESTUAIRE",
    "ville": "HONFLEUR",
    "cp": "14600",
    "pays": "FRANCE",
    "adresse": "13 RUE DES CAPUCINS",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "PAROISSE AVIGNON CENTRE",
    "ville": "Avignon",
    "cp": "84000",
    "pays": "France",
    "adresse": "28 RUE CARRETERIE",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Abbatiale Saint Gilles",
    "ville": "Saint-Gilles",
    "cp": "30800",
    "pays": "France",
    "adresse": "Pl. de la République",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Cathédrale Créteil",
    "ville": "Créteil",
    "cp": "94000",
    "pays": "France",
    "adresse": "2 Rue Pasteur Vallery Radot 1er étage",
    "lat": 48.7833,
    "lng": 2.4667
  },
  {
    "nom": "PAROISSE N.D. DES VICTOIRES",
    "ville": "PARIS",
    "cp": "75002",
    "pays": "FRANCE",
    "adresse": "6 RUE N.D. DES VICTOIRES",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LES AMIS DE LA CATHEDRALE",
    "ville": "AUXERRE",
    "cp": "89000",
    "pays": "FRANCE",
    "adresse": "1 RUE JOUBERT",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "FONDATION FOURVIERE",
    "ville": "LYON",
    "cp": "69005",
    "pays": "FRANCE",
    "adresse": "8 PLACE DE FOURVIERE",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Abbaye de Saint Germain d'Auxerre",
    "ville": "Auxerre",
    "cp": "89000",
    "pays": "France",
    "adresse": "2bis Pl. Saint-Germain",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Abbaye aux Hommes",
    "ville": "Caen",
    "cp": "14000",
    "pays": "France",
    "adresse": "ESPLANADE JEAN-MARIE LOUVEL",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Cathédrale d'Evry",
    "ville": "Evry-Courcouronnes",
    "cp": "91006",
    "pays": "France",
    "adresse": "21 COURS MONSEIGNEUR ROMERO",
    "lat": 48.6333,
    "lng": 2.4412
  },
  {
    "nom": "Cathédrale de Bazas",
    "ville": "Bazas",
    "cp": "33430",
    "pays": "France",
    "adresse": "49 PLACE DE LA CATHEDRALE",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Abbaye de Normandie",
    "ville": "MONT SAINT AIGNAN",
    "cp": "76824",
    "pays": "France",
    "adresse": "28 RUE RAYMOND ARON",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "Abbaye de Citaux",
    "ville": "Saint-Nicolas-lès-Cîteaux",
    "cp": "21700",
    "pays": "France",
    "adresse": "ABBAYE DE CITEAUX",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "FABRIQUE EGLISE CATHOLIQUE",
    "ville": "67210",
    "cp": "67210",
    "pays": "OBERNAI",
    "adresse": "5 REMPART FREPPEL",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Abbaye aux Dames",
    "ville": "SAINTES",
    "cp": "17100",
    "pays": "France",
    "adresse": "11 PLACE DE L'ABBAYE",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Notre Dame de Surgeres",
    "ville": "Surgères",
    "cp": "17540",
    "pays": "France",
    "adresse": "3 RUE DU 26 SEPTEMBRE 1944",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Notre Dame de Montligeon",
    "ville": "LA CHAPELLE MONTLIGEON",
    "cp": "61400",
    "pays": "France",
    "adresse": "26 RUE PRINCIPALE",
    "lat": 48.4333,
    "lng": 0.0833
  },
  {
    "nom": "Abbaye de Fleury",
    "ville": "Saint-Benoît-sur-Loire",
    "cp": "45730",
    "pays": "France",
    "adresse": "28 RUE CARRETERIE",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "PAROISSE AVIGNON CENTRE",
    "ville": "FRANCE",
    "cp": "84000",
    "pays": "France",
    "adresse": "28 RUE CARRETERIE",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "COMMUNAUTE DE COMMUNES VAL DE SULLY",
    "ville": "FRANCE",
    "cp": "45460",
    "pays": "France",
    "adresse": "28 route des Bordes",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "Notre Dame de La Garde",
    "ville": "Marseille",
    "cp": "13006",
    "pays": "France",
    "adresse": "Rue Fort du Sanctuaire",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Cathédrale Saint Pierre de Montpellier",
    "ville": "Montpellier",
    "cp": "34000",
    "pays": "France",
    "adresse": "6 BIS RUE L'ABBE MARCEL MONTELS",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "PAROISSE N.D. DE CLERMONT",
    "ville": "CLERMONT FERRAND",
    "cp": "63000",
    "pays": "FRANCE",
    "adresse": "19 RUE BLATIN",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "AMICALE MORLANGE ET SA CHAPELLE",
    "ville": "FLORANGE",
    "cp": "57190",
    "pays": "FRANCE",
    "adresse": "30 RUE CHARLEMAGNE",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "Cathédrale de Sens",
    "ville": "Sens",
    "cp": "89100",
    "pays": "France",
    "adresse": "Place de la République",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "Mairie de Saulieu - Basilique Saint Andoche - Saulieu",
    "ville": "Saulieu",
    "cp": "21210",
    "pays": "France",
    "adresse": "PLACE DE LA REPUBLIQUE",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Abbaye de Thiron - Gardais - Mairie de Thiron-Gardais",
    "ville": "THIRON-GARDAIS",
    "cp": "28480",
    "pays": "France",
    "adresse": "1 RUE DE GARDAIS",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "Paroisse Notre Dame du Bessin",
    "ville": "BAYEUX CEDEX",
    "cp": "14401",
    "pays": "France",
    "adresse": "4 RUE DU GENERAL DE DAIS",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "Paroisse Saint Jean de Montmartre",
    "ville": "Paris",
    "cp": "75018",
    "pays": "France",
    "adresse": "19 and 21 Rue des Abbesses",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Paroisse Saint Ambroise",
    "ville": "Nice",
    "cp": "06000",
    "pays": "France",
    "adresse": "52 RUE DE LA BUFFA",
    "lat": 43.7102,
    "lng": 7.262
  },
  {
    "nom": "Paroisse Saint Trophisme",
    "ville": "Arles",
    "cp": "13200",
    "pays": "France",
    "adresse": "6 Pl. de la République",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Cathédrale de Dijon",
    "ville": "Dijon",
    "cp": "21000",
    "pays": "France",
    "adresse": "Place Saint Bénigne",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "Sagrada Familia (albe gestio)",
    "ville": "Barcelone",
    "cp": "8007",
    "pays": "Espagne",
    "adresse": "Mallorca, 401",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Isla Magica",
    "ville": "Séville",
    "cp": "41092",
    "pays": "Espagne",
    "adresse": "Pabellón de España Isla de la Cartuja",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "FC Barcelone",
    "ville": "Barcelone",
    "cp": "8028",
    "pays": "Espagne",
    "adresse": "Camp Nou Football Stadium",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "casa batllo",
    "ville": "Barcelone",
    "cp": "8007",
    "pays": "Espagne",
    "adresse": "Passeig de Gràcia, 43",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Palacio Gaudi Astorga",
    "ville": "Astorga",
    "cp": "24700",
    "pays": "Espagne",
    "adresse": "Plaza Eduardo de Castro, 15",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Port Aventura",
    "ville": "Tarragona",
    "cp": "",
    "pays": "Espagne",
    "adresse": "Av. Père Molas",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Museu Océanografiq",
    "ville": "Valencia",
    "cp": "",
    "pays": "Espagne",
    "adresse": "C/ d'Eduardo Primo Yúfera",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Eglise Tibidado",
    "ville": "Barcelona",
    "cp": "",
    "pays": "Espagne",
    "adresse": "",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Museu ciencias Valencia",
    "ville": "Valencia",
    "cp": "46013",
    "pays": "Espagne",
    "adresse": "Av. del Professor López Piñero, 7",
    "lat": 40.4168,
    "lng": -3.7038
  },
  {
    "nom": "Palazzo Ducale",
    "ville": "Venise",
    "cp": "30124",
    "pays": "Italie",
    "adresse": "P.za San Marco, 1",
    "lat": 41.8719,
    "lng": 12.5674
  },
  {
    "nom": "Château -des-Baux",
    "ville": "Les Baux-de-Provence",
    "cp": "13520",
    "pays": "France",
    "adresse": "Grand Rue",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "POLE BOUTIQUES",
    "ville": "Paris",
    "cp": "75008",
    "pays": "France",
    "adresse": "153 BOULEVARD HAUSSMANN",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Bassin des Lumières",
    "ville": "Bordeaux",
    "cp": "33300",
    "pays": "France",
    "adresse": "Imp. Brown de Colstoun",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Musée national de l'automobile",
    "ville": "Mulhouse",
    "cp": "68051",
    "pays": "France",
    "adresse": "192 Av. de Colmar,",
    "lat": 47.75,
    "lng": 7.3392
  },
  {
    "nom": "Théâtre d'Orange",
    "ville": "Orange",
    "cp": "84100",
    "pays": "France",
    "adresse": "Rue Madeleine Roch",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "Arènes de Nimes",
    "ville": "Nîmes",
    "cp": "30000",
    "pays": "France",
    "adresse": "Boulevard des Arènes",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Maison carrée",
    "ville": "Nimes",
    "cp": "30000",
    "pays": "France",
    "adresse": "Place de la Maison Carrée",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Tour Magne",
    "ville": "Nimes",
    "cp": "30000",
    "pays": "France",
    "adresse": "Les Jardins de la Fontaine Place Guillaume Apollinaire",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Louvre",
    "ville": "Paris",
    "cp": "75001",
    "pays": "France",
    "adresse": "Rue de Rivoli",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "RMN",
    "ville": "Bercy",
    "cp": "75006",
    "pays": "France",
    "adresse": "254-256 Rue de Bercy",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée d'Orsay",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "1 Rue de la Légion d'Honneur",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "La Vilette",
    "ville": "Paris",
    "cp": "75019",
    "pays": "France",
    "adresse": "211 Avenue Jean Jaurès",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée Archéologique de Saint Germain en Lay",
    "ville": "Saint-Germain-en Laye",
    "cp": "78100",
    "pays": "France",
    "adresse": "Place Charles de Gaulle",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Versailles",
    "ville": "Versailles",
    "cp": "78000",
    "pays": "France",
    "adresse": "Château de Versaille",
    "lat": 48.8014,
    "lng": 2.1301
  },
  {
    "nom": "Orangerie",
    "ville": "Paris",
    "cp": "75001",
    "pays": "France",
    "adresse": "Jardin des Tuileries",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Château de Fontainebleau",
    "ville": "Fontainebleau",
    "cp": "77300",
    "pays": "France",
    "adresse": "Château de Fontainebleau",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "Musée des confluences",
    "ville": "Lyon",
    "cp": "69002",
    "pays": "France",
    "adresse": "86 Quai Perrache",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "Musée Picasso",
    "ville": "Paris",
    "cp": "75003",
    "pays": "France",
    "adresse": "5 rue de Thorigny",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée du Luxembourg",
    "ville": "Paris",
    "cp": "75006",
    "pays": "France",
    "adresse": "19 rue de Vaugirard",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Musée de la Préhistoire des Eyzies",
    "ville": "Les Eyzies de Tayac",
    "cp": "24620",
    "pays": "France",
    "adresse": "1 rue du Musée",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "Musée de Cluny",
    "ville": "Paris",
    "cp": "75005",
    "pays": "France",
    "adresse": "28 rue du Sommerard",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Cinémathèque française",
    "ville": "Paris",
    "cp": "75012",
    "pays": "France",
    "adresse": "51 rue de Bercy",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Comédie française",
    "ville": "Paris",
    "cp": "75001",
    "pays": "France",
    "adresse": "1 place colette",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Fondation claude Monnet",
    "ville": "Giverny",
    "cp": "27620",
    "pays": "France",
    "adresse": "84 Rue Claude Monet",
    "lat": 49.0333,
    "lng": 1.15
  },
  {
    "nom": "Fondation Vincent Van Gogh",
    "ville": "Arles",
    "cp": "13200",
    "pays": "France",
    "adresse": "20 RUE DE LA LIBERTE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Le Grand Rex de Paris",
    "ville": "Paris",
    "cp": "75002",
    "pays": "France",
    "adresse": "1 Boulevard de la Poissonière",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LA MAISON D'HENRY IV",
    "ville": "PAU",
    "cp": "64000",
    "pays": "FRANCE",
    "adresse": "2 RUE DU CHATEAU",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "RESEAU DES SITES MAJEURS VAUBAN",
    "ville": "BESANCON CEDEX",
    "cp": "25034",
    "pays": "FRANCE",
    "adresse": "2 RUE MEGEVAND",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "Viaduc de Milau",
    "ville": "Millau",
    "cp": "12100",
    "pays": "France",
    "adresse": "BOULEVARD DE ROULLENS",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Blockhaus Eperlecques",
    "ville": "Éperlecques",
    "cp": "62910",
    "pays": "France",
    "adresse": "Rue des Sarts",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "La Coupole Saint Omer",
    "ville": "Wizernes",
    "cp": "62570",
    "pays": "France",
    "adresse": "Rue André Clabaux",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "Tour Montparnasse",
    "ville": "Paris",
    "cp": "75015",
    "pays": "France",
    "adresse": "33 Av. du Maine",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Tour Fenestrelle",
    "ville": "Uzes",
    "cp": "30700",
    "pays": "France",
    "adresse": "3 Place de l'Eveche",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "Parc de Vésone, Tour de Vésone",
    "ville": "Périgueux",
    "cp": "24000",
    "pays": "France",
    "adresse": "23 RUE DU PRESIDENT WILSON",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "BOUTIQUE DE L'ASSEMBLEE NATIONALE",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "7 RUE ARISTIDE BRIAND",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "MOBILIER NATIONAL",
    "ville": "PARIS",
    "cp": "75013",
    "pays": "FRANCE",
    "adresse": "1 RUE BERBIER DU METS",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Palais du Facteur Cheval",
    "ville": "Hauterives",
    "cp": "26390",
    "pays": "France",
    "adresse": "8 Rue du Palais",
    "lat": 44.9333,
    "lng": 4.8917
  },
  {
    "nom": "LES CROISIERES FOURASINES",
    "ville": "PORT DES BARQUES",
    "cp": "17730",
    "pays": "FRANCE",
    "adresse": "2 TER RUE DU 11 NOVEMBRE",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Mémorial de Caen",
    "ville": "Caen",
    "cp": "14050",
    "pays": "France",
    "adresse": "Esp. Général Eisenhower",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "OSSUAIRE DE DOUAUMONT",
    "ville": "DOUAUMONT",
    "cp": "55100",
    "pays": "FRANCE",
    "adresse": "",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "Fondation Saint Louis d'Ambroise",
    "ville": "Ambroise",
    "cp": "37400",
    "pays": "France",
    "adresse": "Montée de L'emir Abdel, Mnt de l'Emir Abd el Kader",
    "lat": 47.3941,
    "lng": 0.6848
  },
  {
    "nom": "Familistère de Guise",
    "ville": "Guise",
    "cp": "2120",
    "pays": "France",
    "adresse": "Cité Familistere",
    "lat": 47.322,
    "lng": 5.0415
  },
  {
    "nom": "PALAIS GARNIER COURS DE L'OPERA",
    "ville": "PARIS",
    "cp": "75009",
    "pays": "FRANCE",
    "adresse": "FACE AU N°8 DE LA RUE HALEVY",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Forteresse de Polignac",
    "ville": "Polignac",
    "cp": "43000",
    "pays": "France",
    "adresse": "Pl. Princesse de Polignac",
    "lat": 45.0433,
    "lng": 3.8853
  },
  {
    "nom": "Bibliothèque Humaniste de Sélestat",
    "ville": "Sélestat",
    "cp": "67600",
    "pays": "France",
    "adresse": "1 Place Dr Maurice Kubler",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Centre Culturel Renoir",
    "ville": "ESSOYES",
    "cp": "10360",
    "pays": "France",
    "adresse": "9 place de la Mairie",
    "lat": 48.2973,
    "lng": 4.0744
  },
  {
    "nom": "FONDATION CHARLES DE GAULLE",
    "ville": "COLOMBEY-LES-DEUX-EGLISES",
    "cp": "52330",
    "pays": "FRANCE",
    "adresse": "RUE DU GENERAL DE GAULLE",
    "lat": 48.1167,
    "lng": 5.1333
  },
  {
    "nom": "Pont Transbordeur",
    "ville": "ROCHEFORT",
    "cp": "17300",
    "pays": "France",
    "adresse": "Avenue Jacques Demy",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Saline Royale",
    "ville": "Arc-et-Senans",
    "cp": "25610",
    "pays": "France",
    "adresse": "SERVICE LIBRAIRIE",
    "lat": 47.238,
    "lng": 6.0243
  },
  {
    "nom": "EXPENDO ORGANISATION",
    "ville": "Pigny",
    "cp": "18110",
    "pays": "France",
    "adresse": "1 Rue Maryse Bastie",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "Fondation Charles De Gaulle",
    "ville": "Paris",
    "cp": "75007",
    "pays": "France",
    "adresse": "5 Rue de Solferino",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Fort de Schoenenbourg",
    "ville": "Hunspach",
    "cp": "67250",
    "pays": "France",
    "adresse": "3 ROUTE DE HOFFEN",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "Forteresse de Najac",
    "ville": "Najac",
    "cp": "12270",
    "pays": "France",
    "adresse": "8 Rue du Château",
    "lat": 44.3519,
    "lng": 2.5692
  },
  {
    "nom": "Moulin de Dannemois",
    "ville": "Dannemois",
    "cp": "91490",
    "pays": "France",
    "adresse": "32 Rue du Moulin",
    "lat": 48.6333,
    "lng": 2.4412
  },
  {
    "nom": "Institut Français du Cheval",
    "ville": "Saumur",
    "cp": "49411",
    "pays": "France",
    "adresse": "Avenue de l’école nationale d’équitation",
    "lat": 47.4736,
    "lng": -0.5541
  },
  {
    "nom": "PALAIS DU LUXEMBOURG",
    "ville": "PARIS",
    "cp": "75006",
    "pays": "FRANCE",
    "adresse": "15 RUE DE VAUGIRARD",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Bunker La Rochelle",
    "ville": "La Rochelle",
    "cp": "17000",
    "pays": "France",
    "adresse": "8 Rue des Dames",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Arc de Germanicus",
    "ville": "Saintes",
    "cp": "17100",
    "pays": "France",
    "adresse": "8 Pl. Bassompierre",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Historial de Montmartre",
    "ville": "Paris",
    "cp": "75018",
    "pays": "France",
    "adresse": "11 Rue Poulbot",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Ministère de l'Enseignement Supérieur",
    "ville": "Paris",
    "cp": "75231",
    "pays": "France",
    "adresse": "1 rue Descartes",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Rectorat de région académique",
    "ville": "ROUEN CEDEX 1",
    "cp": "76037",
    "pays": "France",
    "adresse": "",
    "lat": 49.4333,
    "lng": 1.0833
  },
  {
    "nom": "chez Cap Sciences",
    "ville": "BORDEAUX",
    "cp": "33300",
    "pays": "France",
    "adresse": "Hangar 20, Quai de Bacalan",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "Quai des Savoirs",
    "ville": "TOULOUSE",
    "cp": "31000",
    "pays": "France",
    "adresse": "39 All. Jules Guesde",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "Site Sorbonne",
    "ville": "Paris Cedex",
    "cp": "75231",
    "pays": "France",
    "adresse": "47 RUE DES ECOLES",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "Arènes de Dax",
    "ville": "Dax",
    "cp": "40100",
    "pays": "France",
    "adresse": "2 Bd Paul Lasaosa",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "Fort Louvois",
    "ville": "Bourcefranc-le-Chapus",
    "cp": "17560",
    "pays": "France",
    "adresse": "65 BIS,AVENUE JEAN JAURES",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Beffroi d'Arras",
    "ville": "Arras",
    "cp": "62000",
    "pays": "France",
    "adresse": "4 Place des Héros",
    "lat": 50.4611,
    "lng": 2.5658
  },
  {
    "nom": "DRFIP",
    "ville": "Paris",
    "cp": "75002",
    "pays": "France",
    "adresse": "16 RUE NOTRE DAME DES VICTOIRES",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SEMECCEL CITE DE L'ESPACE",
    "ville": "TOULOUSE",
    "cp": "31500",
    "pays": "FRANCE",
    "adresse": "BOUTIQUE CDT,avenue Jean Gonord",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "RELAY FRANCE SNC DOUBLON",
    "ville": "LEVALLOIS PERRET",
    "cp": "92300",
    "pays": "FRANCE",
    "adresse": "55 RUE DEGUINGAND",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "SYND. MIXTE AMENAG. POINTE DU RAZ",
    "ville": "PLOGOFF",
    "cp": "29770",
    "pays": "FRANCE",
    "adresse": "BP 1",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "JEUNES SAPEURS-POMPIERS DE DONZENAC",
    "ville": "DONZENAC",
    "cp": "19270",
    "pays": "FRANCE",
    "adresse": "20 RUE DU FOYER",
    "lat": 45.2678,
    "lng": 1.7717
  },
  {
    "nom": "SARL GOURMET ASSOCIES",
    "ville": "PRAYSSAC",
    "cp": "46220",
    "pays": "FRANCE",
    "adresse": "29 BIS AV DU COLONEL PARDES",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "BRAGELONNE",
    "ville": "PARIS",
    "cp": "75010",
    "pays": "FRANCE",
    "adresse": "60/62 RUE D'HAUTEVILLE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CENTRE D'INTERPRETATION",
    "ville": "MONPAZIER",
    "cp": "24540",
    "pays": "FRANCE",
    "adresse": "MAIRIE DE MONPAZIER",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "GADIFFERT ET CROCFER",
    "ville": "DRANCY",
    "cp": "93700",
    "pays": "FRANCE",
    "adresse": "151 RUE DIDEROT",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "SARL EDEIS ROMANITE",
    "ville": "NIMES",
    "cp": "30000",
    "pays": "FRANCE",
    "adresse": "2, rue Cité Foulc",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "ASSO. CHEMINS FER HAUTE-AUVERGNE",
    "ville": "VIC LE COMTE",
    "cp": "63270",
    "pays": "FRANCE",
    "adresse": "1 BOULEVARD DE CHAMBON",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "LE CNAM AGENCE COMPTABLE",
    "ville": "PARIS CEDEX 03",
    "cp": "75141",
    "pays": "FRANCE",
    "adresse": "292 RUE ST MARTIN ACCES 9A/ET 2/BUR 12",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "RELAIS D'SCIENCES",
    "ville": "CAEN",
    "cp": "14000",
    "pays": "FRANCE",
    "adresse": "3 ESPLANADE STEPHANE HESSEL",
    "lat": 49.1829,
    "lng": -0.3707
  },
  {
    "nom": "PATRIMOINE ET ENVIRONNEMENT",
    "ville": "GOUDARGUES",
    "cp": "30630",
    "pays": "FRANCE",
    "adresse": "19 QUAI DE LA FONTAINE",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "SARL VASH",
    "ville": "Paris",
    "cp": "75019",
    "pays": "France",
    "adresse": "103 Bd Macdonald",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "ASSO. AMIS VIEUX GOUESNAC'H",
    "ville": "GOUESNAC'H",
    "cp": "29950",
    "pays": "FRANCE",
    "adresse": "19 ROUTE DE BENODET",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "MAISON DE LA MISSION DE FRANCE",
    "ville": "PONTIGNY",
    "cp": "89230",
    "pays": "FRANCE",
    "adresse": "17 RUE DE L'ABBE TAULEIGNE",
    "lat": 47.7986,
    "lng": 3.5671
  },
  {
    "nom": "MAISON DE ROBERT SCHUMAN",
    "ville": "SCY CHAZELLES",
    "cp": "57160",
    "pays": "FRANCE",
    "adresse": "8-12 RUE ROBERT SCHUMAN",
    "lat": 49.1193,
    "lng": 6.1727
  },
  {
    "nom": "ROULONS ENSEMBLE AVEC LEA",
    "ville": "LISLE",
    "cp": "24350",
    "pays": "FRANCE",
    "adresse": "PUYMAURIN",
    "lat": 45.1833,
    "lng": 0.7167
  },
  {
    "nom": "SNC MARRET ET CIE",
    "ville": "REICHSTETT",
    "cp": "67116",
    "pays": "FRANCE",
    "adresse": "8 RUE DU CANAL",
    "lat": 48.5734,
    "lng": 7.7521
  },
  {
    "nom": "A.I.F.F. / CONCOURS LEPINE",
    "ville": "Paris",
    "cp": "75012",
    "pays": "France",
    "adresse": "12 rue Beccaria",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CITÉCO",
    "ville": "Paris",
    "cp": "75017",
    "pays": "FRANCE",
    "adresse": "1 Pl. du Général Catroux",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LES COMPAGNONS CHALANDIERS",
    "ville": "ORLEANS",
    "cp": "45000",
    "pays": "FRANCE",
    "adresse": "46 ter rue sainte Catherine",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "PADIRAC PRODUITS DERIVÉS",
    "ville": "PARIS",
    "cp": "75016",
    "pays": "FRANCE",
    "adresse": "50 RUE DE PASSY",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "ASSOCIATION ST-ETIENNE",
    "ville": "BOURGES",
    "cp": "18000",
    "pays": "FRANCE",
    "adresse": "9 RUE MOLIERE",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "LA POSTE BGPN",
    "ville": "PARIS",
    "cp": "75015",
    "pays": "FRANCE",
    "adresse": "9 rue du Colonel  Pierre Avia",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SITEXPO",
    "ville": "PARIS",
    "cp": "75012",
    "pays": "FRANCE",
    "adresse": "327 RUE DE CHARENTON",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "UNIVERSITE DE LYON",
    "ville": "LYON",
    "cp": "69361",
    "pays": "FRANCE",
    "adresse": "92 RUE PASTEUR",
    "lat": 45.764,
    "lng": 4.8357
  },
  {
    "nom": "ENSEMBLE POUR FLO",
    "ville": "CLERMONT FERRAND",
    "cp": "63000",
    "pays": "FRANCE",
    "adresse": "3 RUE DE COURNON",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "RELAIS DU PELERIN",
    "ville": "ROCAMADOUR",
    "cp": "46500",
    "pays": "FRANCE",
    "adresse": "MAGASIN DU PELERINAGE",
    "lat": 44.45,
    "lng": 1.4333
  },
  {
    "nom": "MJC ARGENTEUIL",
    "ville": "ARGENTEUIL",
    "cp": "95100",
    "pays": "FRANCE",
    "adresse": "7 RUE DES GOBELINS",
    "lat": 49.0333,
    "lng": 2.0833
  },
  {
    "nom": "AUTOMOBILES CITROEN",
    "ville": "RUEIL MALMAISON",
    "cp": "92500",
    "pays": "FRANCE",
    "adresse": "7 RUE HENRI SAINTE CLAIRE DEVILLE",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "ANIM'AVIOTH ASSOCIATION",
    "ville": "AVIOTH",
    "cp": "55600",
    "pays": "FRANCE",
    "adresse": "12 RUE DE L'ABBE DELHOTEL",
    "lat": 48.95,
    "lng": 5.3833
  },
  {
    "nom": "EPCI PREHISTORAMA",
    "ville": "ROUSSON",
    "cp": "30340",
    "pays": "FRANCE",
    "adresse": "75 CHEMIN DE PANISSIERE",
    "lat": 43.8367,
    "lng": 4.3601
  },
  {
    "nom": "ASSO. EXCALISSON.COM",
    "ville": "AIX EN PROVENCE",
    "cp": "13100",
    "pays": "FRANCE",
    "adresse": "2 RUE CARDINALE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "CAPM",
    "ville": "MEAUX CEDEX",
    "cp": "77107",
    "pays": "FRANCE",
    "adresse": "HOTEL DE VILLE",
    "lat": 48.84,
    "lng": 2.8
  },
  {
    "nom": "CENTRE-SCIENCES",
    "ville": "ORLEANS",
    "cp": "45000",
    "pays": "FRANCE",
    "adresse": "72 Faubourg de Bourgogne",
    "lat": 47.9029,
    "lng": 1.9093
  },
  {
    "nom": "L'AVENTURE MICHELIN",
    "ville": "CLERMONT-FERRAND",
    "cp": "63100",
    "pays": "FRANCE",
    "adresse": "32 RUE DU CLOS FOUR",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "SARL COMPTOIR DES CATACOMBES",
    "ville": "PARIS",
    "cp": "75014",
    "pays": "FRANCE",
    "adresse": "31 RUE REMY DUMONCEL",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CINQ ET UN SENS",
    "ville": "PARIS",
    "cp": "75002",
    "pays": "FRANCE",
    "adresse": "5 BOULEVARD POISSONNIERE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "THE PARIS FLANEUR",
    "ville": "ROSNY SOUS BOIS",
    "cp": "93110",
    "pays": "FRANCE",
    "adresse": "2 RUE D'AURION",
    "lat": 48.91,
    "lng": 2.49
  },
  {
    "nom": "COFREX",
    "ville": "PARIS",
    "cp": "75014",
    "pays": "FRANCE",
    "adresse": "77 boulevard Saint Jacques",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LES MILLES SOUVENIRS",
    "ville": "LES MILLES",
    "cp": "13290",
    "pays": "FRANCE",
    "adresse": "39 CHEMIN DE LA BADESSE",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "LOISIRS ET COLLECTIONS",
    "ville": "MIREPOIX",
    "cp": "09500",
    "pays": "FRANCE",
    "adresse": "43 PLACE DU MARECHAL LECLERC",
    "lat": 43.0,
    "lng": 1.5
  },
  {
    "nom": "FLYVIEW PARIS",
    "ville": "PARIS",
    "cp": "75002",
    "pays": "FRANCE",
    "adresse": "30 RUE DU 4 SEPTEMBRE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "M/M  M. AMZALAG M.AUGUSTYNIAK",
    "ville": "PARIS",
    "cp": "75010",
    "pays": "FRANCE",
    "adresse": "5/7 RUE DES RECOLLETS",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SAS INFOSUN",
    "ville": "FONT-ROMEU ODEILLO VIA",
    "cp": "66120",
    "pays": "FRANCE",
    "adresse": "GRAND FOUR SOLAIRE D'ODEILLO",
    "lat": 42.6986,
    "lng": 2.8956
  },
  {
    "nom": "GERARD EYRAUD",
    "ville": "COURNON D AUVERGNE",
    "cp": "63800",
    "pays": "FRANCE",
    "adresse": "11 PLACE DES DOME",
    "lat": 45.7772,
    "lng": 3.087
  },
  {
    "nom": "HENDAYE TOURISME & COMMERCE",
    "ville": "HENDAYE CEDEX",
    "cp": "64702",
    "pays": "FRANCE",
    "adresse": "67 BIS BLD DE LA MER",
    "lat": 43.3,
    "lng": -0.3706
  },
  {
    "nom": "CENTRE CULTUREL DE RENCONTRE",
    "ville": "BRUERE ALLICHAMPS",
    "cp": "18200",
    "pays": "FRANCE",
    "adresse": "ABBAYE DE NOIRLAC",
    "lat": 47.081,
    "lng": 2.3988
  },
  {
    "nom": "CADEAUX GOURMANDS",
    "ville": "GUERANDE",
    "cp": "44350",
    "pays": "FRANCE",
    "adresse": "6 PLACE DU PILORI",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "ECLAPHOT",
    "ville": "PARIS",
    "cp": "75004",
    "pays": "FRANCE",
    "adresse": "6 QUAI DU MARCHE NEUF",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "EPCC CHEMINS PATRIMOINE  FINISTERE",
    "ville": "SAINT-GOAZEC",
    "cp": "29520",
    "pays": "FRANCE",
    "adresse": "DOMAINE DE TREVAREZ",
    "lat": 48.3908,
    "lng": -4.4858
  },
  {
    "nom": "ARCACHON EXPANSION",
    "ville": "ARCACHON",
    "cp": "33120",
    "pays": "FRANCE",
    "adresse": "ESPLANADE GEORGES POMPIDOU",
    "lat": 44.8378,
    "lng": -0.5792
  },
  {
    "nom": "CHATEAU DE MAINTENON",
    "ville": "MAINTENON",
    "cp": "28130",
    "pays": "FRANCE",
    "adresse": "Place Aristide Briand",
    "lat": 48.4469,
    "lng": 1.4884
  },
  {
    "nom": "ASSOCIATION DES AMIS DE VALMAGNE",
    "ville": "VILLEVEYRAC",
    "cp": "34560",
    "pays": "FRANCE",
    "adresse": "ABBBAYE DE VALMAGNE",
    "lat": 43.6119,
    "lng": 3.8772
  },
  {
    "nom": "SPL LE VOYAGE A NANTES",
    "ville": "NANTES",
    "cp": "44000",
    "pays": "FRANCE",
    "adresse": "4 PLACE MARC ELDER",
    "lat": 47.2184,
    "lng": -1.5536
  },
  {
    "nom": "NESTLE WATERS SUPPLY SUD SAS",
    "ville": "ISSY LES MOULINEAUX",
    "cp": "92130",
    "pays": "FRANCE",
    "adresse": "12 BD GARIBALDI",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "SYNDICAT MIXTE BAIE DE SOMME",
    "ville": "ABBEVILLE CEDEX",
    "cp": "80142",
    "pays": "FRANCE",
    "adresse": "1 PLACE DE L'AMIRAL COURBET",
    "lat": 49.8941,
    "lng": 2.2958
  },
  {
    "nom": "RELAY@ADP",
    "ville": "LEVALLOIS PERRET",
    "cp": "92300",
    "pays": "FRANCE",
    "adresse": "55 RUE DEGUINGAND",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "ROCHER PARTICIPATIONS",
    "ville": "PARIS",
    "cp": "75008",
    "pays": "FRANCE",
    "adresse": "12-14 ROND-POINT DES CHAMPS ELYSEES",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "ORANGE EDEIS",
    "ville": "Orange",
    "cp": "84100",
    "pays": "France",
    "adresse": "Rue Madeleine Roch",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "LAVAL TOURISME",
    "ville": "LAVAL",
    "cp": "53000",
    "pays": "FRANCE",
    "adresse": "84 Avenue Robert Buron",
    "lat": 48.0733,
    "lng": -0.7713
  },
  {
    "nom": "MUPOP",
    "ville": "MONTLUCON",
    "cp": "03100",
    "pays": "FRANCE",
    "adresse": "3 RUE NOTRE DAME",
    "lat": 46.5667,
    "lng": 3.3333
  },
  {
    "nom": "SARL MALAVAL & FILS",
    "ville": "SAINTE-ENIMIE",
    "cp": "48210",
    "pays": "FRANCE",
    "adresse": "CADEAUX-SOUVENIRS",
    "lat": 44.5167,
    "lng": 3.5
  },
  {
    "nom": "LOTO JURA PASSION SARL",
    "ville": "ALLE",
    "cp": "2942",
    "pays": "Suisse",
    "adresse": "CASE POSTALE 5",
    "lat": 46.8182,
    "lng": 8.2275
  },
  {
    "nom": "S.E.T.R.A.M.",
    "ville": "ANTONY",
    "cp": "92160",
    "pays": "FRANCE",
    "adresse": "53 RUE DES GLAISES",
    "lat": 48.8924,
    "lng": 2.2389
  },
  {
    "nom": "SA PROD",
    "ville": "La Jarrie",
    "cp": "17220",
    "pays": "FRANCE",
    "adresse": "8 rue de la Garrigue",
    "lat": 45.7461,
    "lng": -0.6436
  },
  {
    "nom": "Ass. Gestion du Festival d'Avignon",
    "ville": "Avignon",
    "cp": "84000",
    "pays": "France",
    "adresse": "20 rue du Portail Boquier",
    "lat": 43.9493,
    "lng": 4.8059
  },
  {
    "nom": "SPL DESTINATION LANDES CHALOSSE",
    "ville": "Saint-Sever",
    "cp": "40500",
    "pays": "France",
    "adresse": "Place du Tour de Sol",
    "lat": 43.8939,
    "lng": -0.5
  },
  {
    "nom": "OTIUM LEISURE",
    "ville": "Paris",
    "cp": "75002",
    "pays": "France",
    "adresse": "6 Rue Saint-Joseph",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "OPTM SAS",
    "ville": "PARIS CEDEX 15",
    "cp": "75755",
    "pays": "FRANCE",
    "adresse": "33 AVENUE DU MAINE",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "SESTA",
    "ville": "TARASCON SUR ARIEGE",
    "cp": "09400",
    "pays": "FRANCE",
    "adresse": "ROUTE DE BANAT",
    "lat": 43.0,
    "lng": 1.5
  },
  {
    "nom": "ASSO. COLLECTION PASSION",
    "ville": "POITIERS",
    "cp": "86000",
    "pays": "FRANCE",
    "adresse": "10 RUE DU FIEF DES HAUSSES",
    "lat": 46.5803,
    "lng": 0.3404
  },
  {
    "nom": "Halle de la Machine",
    "ville": "Toulouse",
    "cp": "31400",
    "pays": "France",
    "adresse": "3 avenue de l'aérodrome de Montaudran",
    "lat": 43.6047,
    "lng": 1.4442
  },
  {
    "nom": "PLACE DE L'OPERA",
    "ville": "PARIS",
    "cp": "75009",
    "pays": "FRANCE",
    "adresse": "BOUTIQUE GALERIE DE L'OPERA GARNIER",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "BOUTIQUE DE L OPERA BASTILLE",
    "ville": "PARIS",
    "cp": "75012",
    "pays": "FRANCE",
    "adresse": "PLACE DE LA BASTILLE / 120 RUE DE LYON",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "HOTEL DES INVALIDES",
    "ville": "PARIS",
    "cp": "75007",
    "pays": "FRANCE",
    "adresse": "129 Rue de Grenelle",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "CITÉ DES SCIENCES ET DE L'INDUSTRIE",
    "ville": "PARIS",
    "cp": "75019",
    "pays": "FRANCE",
    "adresse": "30 Avenue Corentin Cariou",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "MUCEM",
    "ville": "Marseille",
    "cp": "13002",
    "pays": "France",
    "adresse": "1 Esplanade J4",
    "lat": 43.2965,
    "lng": 5.3698
  },
  {
    "nom": "Musée de la Marine",
    "ville": "Paris",
    "cp": "75016",
    "pays": "France",
    "adresse": "17 place du Trocadéro",
    "lat": 48.8566,
    "lng": 2.3522
  },
  {
    "nom": "LAGARDERE X ARTEUM",
    "ville": "Paris",
    "cp": "75002",
    "pays": "FRANCE",
    "adresse": "16 rue Gaillon",
    "lat": 48.8566,
    "lng": 2.3522
  }
]
