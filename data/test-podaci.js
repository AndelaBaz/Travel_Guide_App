import Kontinenti from '../models/kontinenti';
import Destinacije from '../models/destinacije';
 
export const KONTINENTI = [
  new Kontinenti('k1', 'Sjeverna Amerika', 'https://cdn.wallpapersafari.com/14/90/QYOlqA.jpg' ),
  new Kontinenti('k2', 'Južna Amerika','https://wallpaperaccess.com/full/2376620.jpg'),
  new Kontinenti('k3', 'Europa','https://wallpaperaccess.com/full/3157212.jpg'),
  new Kontinenti('k4', 'Afrika','https://cdn.wallpapersafari.com/9/43/vLHk9N.jpg'),
  new Kontinenti('k5', 'Azija','https://wallpapercave.com/wp/k2gKgSB.jpg'),
  new Kontinenti('k6', 'Australija', 'https://cdn.wallpapersafari.com/57/35/DxbYBW.jpg'),
  new Kontinenti('k7', 'Antarktika', 'https://wallpaperaccess.com/full/1449356.jpg'),
]

export const DESTINACIJE = [
  new Destinacije(
    "d1",
    ["k1"],
    "New York City, New York",
    "Što god da vas zanima, otkrit ćete da u New Yorku možete raditi više nego što ćete imati vremena. Pogledajte poglede s vrha Empire State Buildinga, Rockefeller Centra ili One World Observatory. Upustite se u muzejski šetnju, počevši od Muzeja umjetnosti Metropolitan na sjeveroistočnom rubu Central Parka. Zatim krenite na sjever nekoliko blokova do muzeja Guggenheim i na kraju do Muzeja grada New Yorka, jednog od najboljih mjesta za učenje o povijesti Velike jabuke. Idite u Chinatown po dim sum i u Malu Italiju po cannoli. Idite u jazz klub u Harlemu, pogledajte nezavisne umjetničke galerije koje se nalaze u Chelseaju, kupujte uz Petu aveniju i posjetite Kip slobode.",
    [
      "1. Najstarija zgrada u New Yorku je Wyckoff Farmhouse koja je izgrađena 1652.",
      "2. New York ima 50,000 beskućnika.",
      "3. Kip slobode je bio dar od Francuske",
    ],
    "Povijest New Yorka počinje oko 10.000 godina prije Krista. kad su stigli prvi ljudi. ... 1664. Engleska je koloniju preimenovala u New York, po vojvodi od Yorka i Albanyja, bratu kralja Charlesa II. New York City postao je poznat u 18. stoljeću kao velika trgovačka luka u trinaest kolonija.",
    "https://c4.wallpaperflare.com/wallpaper/963/393/229/statue-of-liberty-english-statue-of-liberty-is-a-monument-in-new-york-the-statue-has-been-exposed-to-high-46-5-meters-if-you-add-and-stand-tall-47-meters-then-the-total-height-is-93-5-mete-wallpaper-preview.jpg",
    true,
    true,
    false,
    true,
    11160
  ),
  new Destinacije(
    "d2",
    ["k1"],
    "Miami, Florida",
    "Miami je jedno od državnih - i svjetskih - najpopularnijih mjesta za odmor. Iako se za destinacije često kaže da nude nešto za svakoga, područje Miamija doista nudi višestruke privlačnosti za svakoga: Trendi noćni život South Beacha, ukrašen slatkišima iz okruga Art Deco. Užurbanost Calle Ocho i energija male Havane s visokim kofeinom. Plišani hoteli u Miami Beachu i povijesna skrovišta Coral Gables. Naizgled beskrajne mogućnosti kupnje u modernim, prostranim trgovačkim centrima i tiha, osobna pažnja koju nude obiteljske trgovine Coconut Grove i mnogim drugim dijelovima regije. Mamac dubokomorskog ribolova te golfa i tenisa. Međunarodna zračna luka i najprometnija luka za krstarenja na svijetu.",
    [
      "1. Grad u kojem ima 16 puta više turista nego stanovnika",
      "2. Za najhladnijih mjeseci, temperatura u termometru tu rijetko kad padne ispod 17 Celzijevih stupnjeva.",
      "3. Osnovala ga je žena.",
    ],
    "Miami je službeno inkorporiran kao grad 28. srpnja 1896., s nešto više od 300 stanovnika. Ime je dobio po rijeci Miami, nastaloj prema Mayaimi, povijesnom imenu jezera Okeechobee i domorodačkim Amerikancima koji su živjeli oko njega.",
    "https://baicapital.com/wp-content/uploads/2020/07/royal-holiday-hotel-resort-park-royal-miami-beach-estados-unidos-florida-miami.jpg",
    true,
    true,
    true,
    true,
    22158
  ),
  new Destinacije(
    "d3",
    ["k1"],
    "Los Angeles, California",
    "prostrani grad Los Angeles, u južnoj Kaliforniji, odavno je međunarodno poznat u filmskoj i zabavnoj industriji, posebno po Hollywoodu, mjestu koje već više od jednog stoljeća privlači nadobudne glumce i glumice iz cijele zemlje. Danas je LA kulturno raznolik grad s reputacijom kreativnog centra Amerike. Posjetitelje očekuje uspješan kulinarski prizor, nevjerojatna kupovina, izvanredni muzeji i zabavne obiteljske atrakcije. Tragači za suncem koji dolaze uživati ​​u toploj klimi i plažama pronaći će mnogo posla i zanimljivih četvrti za istraživanje. Nadogradnja mreže javnog prijevoza posljednjih godina i dodavanje Metro Bike Share u centru LA -a olakšali su kretanje i razgledavanje nego ikad. Za obitelji, obližnji Disneyland i Universal Studios ključna su odredišta koja često opravdavaju ponovne posjete.",
    [
      "1. U prosjeku, ljudi u LA -u koriste 123 galona vode dnevno.",
      "2. L.A. zapravo ima kartu evakuacije tsunamija, za svaki slučaj.",
      "3. Više od 42 milijuna ljudi posjetilo je LA prošle godine.",
    ],
    "Dom Chumasha i Tongve, područje koje je postalo Los Angeles, preuzeo je Juan Rodríguez Cabrillo za Španjolsku 1542. Grad je osnovan 4. rujna 1781. pod španjolskim namjesnikom Felipeom de Neveom u selu Yaanga. Postao je dio Meksika 1821. godine nakon Meksičkog rata za neovisnost.",
    "https://i.pinimg.com/736x/06/77/a7/0677a7a87420d91536f200d921694fb8.jpg",
    true,
    true,
    false,
    true,
    9961
  ),
  new Destinacije(
    "d4",
    ["k2"],
    "Rio de Jainero, Brazil",
    "Položaj Rio de Janeira između planina i mora toliko je spektakularan da je UNESCO citirao 'zapanjujuće lijepo mjesto za jedan od najvećih svjetskih gradova' pri proglašenju Rija svjetskom baštinom. UNESCO -ova priznanja nisu samo za prirodni ambijent, već i za urbani kulturni krajolik te mješavinu arhitekture i planiranih zelenih površina koje su obilježile rast grada.",
    [
      "1. Rio de Janeiro ima najplavlje nebo na svijetu.",
      "2. Karnevalska zabava u Riju najveći je karneval na svijetu.",
      "3. U zaljevu Guanabara postoji više od stotinu otoka.",
    ],
    "Rio de Janeiro danas je grad zbog svoje bogate, povijesne prošlosti. Portugalski vladari prvi su zavladali Rioom kada su 1. siječnja 1502. iskrcali tlo u zaljevu Guanabara. Zaljev čini otvor rijeke, pa otuda i naziv 'Rio de Janeiro' što znači 'rijeka siječnja'.",
    "https://wallpapercave.com/wp/cmdkr6o.jpg",
    false,
    true,
    false,
    true,
    11731
  ),
  new Destinacije(
    "d5",
    ["k3"],
    "London, United Kingdom",
    "London stoji na rijeci Temzi i glavni je grad Engleske, kao i najnaseljeniji grad u Velikoj Britaniji. Grad je stjecište starog i novog i jedno je od najvažnijih turističkih odredišta u cijelom svijetu. To je grad s brojnim atrakcijama svih vrsta uključujući odličnu arhitekturu i baštinu.Osnovan od Rimljana, grad London posljednja je dva tisućljeća veliko naselje. London je vodeći svjetski grad i jedan od najvažnijih u području umjetnosti, trgovine, zabave, obrazovanja, financija, mode, zdravstva, medija, turizma i prometa. ",
    [
      "1. London je najmanji grad u Engleskoj.",
      "2. Ima više indijskih restorana od Mumbaija.",
      "3. Promet se nije poboljšao u stotinu godina",
    ],
    "Grad London osnovali su Rimljani, a njihova se vladavina proširila od 43. godine poslije Krista do petog stoljeća poslije Krista, kada je Carstvo palo. Tijekom trećeg stoljeća Londinium, naziv koji su gradu dali Rimljani, imao je 50.000 stanovnika, uglavnom zbog utjecaja velike luke.",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    true,
    true,
    true,
    true,
    3452
  ),
  new Destinacije(
    "d6",
    ["k5"],
    "Ubud, Bali",
    "Najbolje što možete učiniti u Ubudu uključuje istraživanje drevnih hramova, veličanstvenih kraljevskih palača i zelenih padina i rižinih terasa. Riznica kulturnih znamenitosti, ovaj balijski grad i njegovi rubovi u rejonu Gianyar, mjesto su gdje su posjetili i radili neki od svjetskih zanatlija i kolekcionara.",
    [
      "1. Polja riže su mjesto svjetske baštine.",
      "2. Sunce ne sija tijekom cijele godine.",
      "3. Doručak možete skuhati u aktivnom vulkanu.",
    ],
    "Grad je izvorno bio važan kao izvor ljekovitog bilja i biljaka; Ubud je dobio ime po balijskoj riječi ubad (lijek). Krajem devetnaestog stoljeća Ubud je postao sjedište feudalaca koji su svoju vjernost dugovali kralju Gianyara, svojevremeno najmoćnijoj od južnih država Balija.",
    "https://wallpapercave.com/wp/wp4189666.jpg",
    false,
    false,
    true,
    false,
    4555
  ),
  new Destinacije(
    "d7",
    ["k5"],
    "Tokyo, Japan",
    "Tokio (東京, Tōkyō) je glavni grad Japana i najmnogoljudnija metropola na svijetu. To je također jedna od 47 japanskih prefektura, koja se sastoji od 23 središnja gradska odjeljenja i više gradova, mjesta i sela zapadno od centra grada. Otoci Izu i Ogasawara također su dio Tokija.Danas Tokyo svojim posjetiteljima nudi naizgled neograničen izbor kupovine, zabave, kulture i večere. Povijest grada može se cijeniti u četvrtima poput Asakuse i u mnogim izvrsnim muzejima, povijesnim hramovima i vrtovima. Suprotno uvriježenom mišljenju, Tokyo također nudi niz atraktivnih zelenih površina u središtu grada i unutar relativno kratkih vožnji vlakom na rubu grada.",
    [
      "1. Vlakovi u Japanu zaista voze točno na vrijeme.",
      "2. Engleski televizijski programi prilično su rijetki.",
      "3. Automati za prodaju su posvuda.",
    ],
    "Povijest grada Tokija seže unatrag oko 400 godina. Izvorno nazvan Edo, grad je počeo cvjetati nakon što je Tokugawa Ieyasu 1603. ovdje osnovao šokunat Tokugawa. Kao središte politike i kulture u Japanu, Edo je do sredine osamnaestog stoljeća prerastao u veliki grad s preko milijun stanovnika. Sve to vrijeme car je boravio u Kyotu, koji je bio službeni glavni grad nacije. Razdoblje Edo trajalo je gotovo 260 godina sve do restauracije Meiji 1868. godine, kada je završio šokunat Tokugawa i obnovljena carska vlast. Car se preselio u Edo, koji je preimenovan u Tokio. Tako je Tokio postao glavni grad Japana.",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    false,
    true,
    true,
    true,
    4996
  ),
  new Destinacije(
    "d8",
    ["k4"],
    "Cairo, Egypt",
    "Kairo je najveći grad u arapskom svijetu, a ujedno i jedan od najzanimljivijih i najdinamičnijih. S poviješću i baštinom koja seže do jedne od ključnih civilizacija u svijetu, egipatske civilizacije, Kairo je središte kulture i politike ne samo za Egipat, već i za cijelu regiju. Kairo je glavni grad Egipta i izgrađen je na obali rijeke Nil u području koje je kroz stoljeća svjedočilo usponu i padu mnogih civilizacija. To je rezultiralo integracijom antičkih, srednjovjekovnih i modernih osobina u sve aspekte života ovdje. To čini Kairo jedinstvenim mjestom za doživjeti. \ r \ n \ r \ nGlavne atrakcije u Kairu prvenstveno su različite povijesne znamenitosti koje krase to područje od antičkog do novijeg doba. Možda najpoznatiji od svih spomenika i znamenitosti su piramide u Gizi smještene unutar granica grada u Kairu. U gradu postoji više muzeja, od kojih je najveći muzej u Kairu koji prikazuje artefakte drevne egipatske civilizacije. Tu su i druge atrakcije poput palača, povijesnih džamija, mauzoleja, citadela i još mnogo toga, a Kairo je također poznat po noćnom životu i raznim kafićima.",
    [
      "1. Piramide i Sfinga nalaze se u Kairu.",
      "2. Kairo je najveći grad u cijeloj Africi i na Bliskom istoku.",
      "3. Rijeka Nil protiče kroz Kairo.",
    ],
    "Povijest Kaira. Kairo vuče korijene iz drevnog naselja Memphis, sada 24 km (15 milja) jugozapadno od grada. Osnovan je 2.000 godina prije Krista, a njime je vladao kralj Menes koji je ujedinio Gornji i Donji Egipat. U 1. stoljeću Rimljani su izgradili babilonsku tvrđavu na Nilu, najstariju građevinu u gradu.",
    "https://i.pinimg.com/originals/5e/6e/a5/5e6ea573be29975c20a12f576cb47839.jpg",
    false,
    true,
    false,
    true,
    4850
  ),
  new Destinacije(
    "d9",
    ["k6"],
    "Sydney, Australia",
    "Sydney, najstariji, najveći i najljepši od svih australskih gradova, leži usred zavodljivog miješanja kopna i mora. Klizite uz svjetlucavu luku na trajektu, pogledajte bijela jedra Opera House -a kako blistaju na suncu, divite se ljupkom luku Harbour Bridgea, i teško je zamisliti da je ovaj živopisni glavni grad Novog Južnog Walesa nekada bio kolonija osuđenika. Godine 1788. u Sydney Coveu je kapetan Arthur Phillip, zapovjednik Prve flote, osnovao prvu britansku koloniju u Australiji.",
    [
      "1. Sydney ima više od 100 plaža.",
      "2. Sydney je multikulturalno središte.",
      "3. Sydney je prvi veliki grad koji dočekuje Novu godinu.",
    ],
    "Moderna povijest grada započela je dolaskom Prve flote britanskih brodova 1788. godine i osnivanjem kaznene kolonije od strane Velike Britanije. Od 1788. do 1900. Sydney je bio glavni grad britanske kolonije Novi Južni Wales. Izabrano gradsko vijeće osnovano je 1840.",
    "https://i.pinimg.com/originals/e0/f5/76/e0f5761ec630fca4f9c87e364722fbfa.jpg",
    true,
    true,
    true,
    true,
    21075
  ),
  new Destinacije(
    "d10",
    ["k7"],
    "Antarctic peninsula",
    "Ako želite kročiti na kopnenu Antarktiku, osjetiti zrnu hladnog zraka na obrazu, promatrati urnebesne ludorije pingvina i istražiti neka od najljepših mjesta na Antarktiku, krstarenje poluotokom klasičan je način da doživite Antarktik. poluotok ima neke od najdramatičnijih krajolika na cijelom Antarktiku. Dom najveće zbirke divljih životinja na Antarktiku, prava menažerija pingvina, tuljana i kitova. Najpristupačniji i najpopularniji dio Antarktike za posjetiti iz Patagonije, s najvećim izborom putovanja i brodova.",
    [
      "1. Ima aktivni vulkan.",
      "2. Nema vremenskih zona.",
      "3.To je najveća pustinja na svijetu.",
    ],
    "Iako su se potvrđena viđenja antarktičkog poluotoka dogodila već 1820. godine, samo će najsjeverniji vrh (poluotok Trinity) biti ucrtavan dugi niz godina. Neosporno i dokumentirano iskrcavanje na Antarktičkom kontinentu ne bi bilo do 1853. Čak i tada neki znanstvenici vjeruju da su 1821. godine američki mornari prvi ljudi koji su kročili na kontinent.",
    "https://p4.wallpaperbetter.com/wallpaper/303/650/548/adelie-penguins-antarctic-peninsula-wallpaper-preview.jpg",
    false,
    false,
    false,
    false,
    50345
  ),

]