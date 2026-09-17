// src/data/technicalTipsData.ts

export interface TipGuide {
  slug: string;
  category: string;
  titleEn: string;
  titleIt: string;
  author: string;
  dateOrSource: string;
  summaryEn: string;
  summaryIt: string;
  sections: {
    headingEn?: string;
    headingIt?: string;
    bodyEn: string[];
    bodyIt: string[];
  }[];
  images?: {
    src: string;
    alt: string;
    captionEn: string;
    captionIt: string;
  }[];
  audio?: {
    titleEn: string;
    titleIt: string;
    file: string;
  }[];
  download?: {
    titleEn: string;
    titleIt: string;
    file: string;
  };
  cautionEn?: string;
  cautionIt?: string;
}

export const technicalTipsData: TipGuide[] = [
  {
    slug: 'dash',
    category: 'Interni',
    titleEn: 'Dashboard Noise & Rattles',
    titleIt: 'Rumorosità e scricchiolii della plancia',
    author: 'Anders (Webmaster) & Kid van Orsouw (Alfa 156 Club NL)',
    dateOrSource: 'Original alfa156.net (tech/dash.html)',
    summaryEn: 'Rattles in cold weather from captive nuts on front dash mounts and the Magnesium carrybeam.',
    summaryIt: 'Scricchiolii a freddo dovuti ai dadi prigionieri di fissaggio della traversa in magnesio sotto al parabrezza.',
    sections: [
      {
        bodyEn: [
          "The dashboard in Alfa 156 does not rattle that much. But there are some known rattles. When the weather gets colder and down to 0°C they appear. My (webmaster) dashboard squeaks a little bit when driving over small bumps in the road. But the squeaking disappears after 10 minutes of driving when the car gets warmer inside.",
          "There is also one more much more annoying noise that might appear in cold weather. The noise comes from the passenger side of the dashboard. It sounds kind of when someone is freezing and clicks their teeth together — klick-klick-klick-klick etc.",
          "This is the captive nuts on the front dash mounts. They need to be packed out to stop the noise. This noise will also disappear after some minutes of driving. The remedy is to squirt silicone sealant around the nut or modify the captive nuts with rubber washers (as per bulletin)."
        ],
        bodyIt: [
          "La plancia dell'Alfa 156 non scricchiola poi così tanto, ma ci sono alcuni rumori noti. Si manifestano soprattutto quando la temperatura scende verso gli 0°C. La mia plancia (nota di Anders) cigola leggermente sulle piccole asperità stradali, ma il cigolio svanisce dopo una decina di minuti di marcia, appena l'abitacolo si riscalda.",
          "Tuttavia esiste un secondo rumore, decisamente più fastidioso, che può presentarsi nella stagione fredda. Proviene dal lato passeggero della plancia e assomiglia al ticchettio dei denti di chi batte dal freddo: un click-click-click-click continuo e ritmico.",
          "La causa sono i dadi prigionieri a gabbia (captive nuts) sui supporti anteriori della plancia. Hanno bisogno di essere spessorati o isolati per zittirli. La soluzione ufficiale consiste nell'iniettare sigillante siliconico attorno al dado oppure nell'interporre rondelle in gomma come da bollettino tecnico."
        ]
      },
      {
        headingEn: 'The 3 Repair Options',
        headingIt: 'Le 3 Opzioni di Intervento',
        bodyEn: [
          "Option a) involves stripping the dash down to access the nuts. Reassembly leaves open many opportunities for error and introduction of new noises — it also takes about 4 hours.",
          "Option b) requires a windscreen fitter to remove the glass. You squirt your silicone and he refits the screen; takes you 10 minutes, and about £80 for the windscreen fitter job. You could even try and tie it in with a replacement screen if yours is chipped or damaged.",
          "Option c) is probably the easiest one as it only requires removing the air vent grille that runs almost full width in the far end of the dash (defrost grille). More info below."
        ],
        bodyIt: [
          "Opzione a): prevede lo smontaggio completo della plancia per accedere ai bulloni. Il rimontaggio espone a molti rischi di errore e alla nascita di nuovi scricchiolii, oltre a richiedere circa 4 ore di manodopera.",
          "Opzione b): richiede l'intervento di un installatore di cristalli per rimuovere il parabrezza. Si inietta il silicone nei punti critici e si reincolla il vetro: 10 minuti di lavoro effettivo e circa 80 sterline di manodopera per il vetro. È l'opzione perfetta se il vostro parabrezza è già scheggiato o da sostituire.",
          "Opzione c): è probabilmente la più pratica, poiché richiede solo lo smontaggio della griglia sbrinamento parabrezza che corre per quasi tutta la larghezza alla base del cruscotto."
        ]
      },
      {
        headingEn: 'Technical Notes on the Magnesium Beam',
        headingIt: 'Note Tecniche sulla Traversa in Magnesio',
        bodyEn: [
          "The main carrybeam is one big piece of Magnesium — you can literally lift it up with only one finger! Right below are the struts that fit the steering wheel column with more bolts.",
          "If you remove the defrost grille, it is tightened with a click-lock clip system in the dashboard. You have to pull it VERY carefully upwards, starting from the ends. WATCH OUT for dashboard scratches and ensure the grille doesn't snap into two pieces!",
          "There are also stories that this sound can be eliminated by mounting an aftermarket strut brace. This might be something to consider — you might even talk your missus into letting you buy one! ;)",
          "The captive nuts noise is rumored to have been corrected directly from the factory on 2001 and later models."
        ],
        bodyIt: [
          "La traversa portante della plancia è un unico grande pezzo fuso in lega di magnesio: è talmente leggera che si può sollevare con un solo dito! Subito sotto si trovano i supporti che fissano il piantone dello sterzo con altri bulloni.",
          "Se decidete di smontare la griglia diffusore sbrinamento, ricordate che è fissata a scatto nella plancia. Va tirata verso l'alto con ESTREMA delicatezza, iniziando dalle estremità. ATTENZIONE a non graffiare la schiuma del cruscotto e a non spezzare la plastica della griglia in due!",
          "Diversi alfisti riferiscono inoltre che questo rumore può essere attenuato installando una barra duomi anteriore, irrigidendo i duomi. Una scusa perfetta per convincere la moglie a farvela comprare! ;)",
          "Il difetto dei dadi prigionieri è stato poi risolto direttamente in fabbrica a partire dai modelli prodotti nel 2001."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/dash/dash1.jpg',
        alt: 'Dashboard bolts without window',
        captionEn: 'The concerned bolts viewed from the right front side (with windshield removed).',
        captionIt: 'I bulloni incriminati visti dal lato anteriore destro (a parabrezza rimosso).'
      },
      {
        src: '/images/techtips/dash/dash2.jpg',
        alt: 'Carrybeam assembled',
        captionEn: 'View from the same area with the beam assembled. The outmost bolt to the right is almost impossible to reach.',
        captionIt: 'Vista con traversa montata: il bullone più esterno a destra è quasi inaccessibile.'
      },
      {
        src: '/images/techtips/dash/dash5.jpg',
        alt: 'Support beam bolt detail',
        captionEn: 'The concerned bolt in the support beam in detail.',
        captionIt: 'Dettaglio del bullone di fissaggio sulla traversa portante.'
      },
      {
        src: '/images/techtips/dash/dash6.jpg',
        alt: 'Magnesium carrybeam',
        captionEn: 'Underside of the ultralight Magnesium carrybeam.',
        captionIt: 'La traversa portante ultraleggera in magnesio vista dal basso.'
      }
    ],
    cautionEn: "Take immense care when prying the demist grille. Plastic clips dry out and crack easily.",
    cautionIt: "Massima cautela nell'estrazione della griglia sbrinamento: le clip di plastica con il calore diventano fragili."
  },
  {
    slug: 'variator',
    category: 'Motore',
    titleEn: 'Twin Spark Cam Variator (Diesel Sound)',
    titleIt: 'Variatore di fase Twin Spark (Rumore Diesel)',
    author: 'Anders (Webmaster)',
    dateOrSource: 'Original alfa156.net (tech/variator.html)',
    summaryEn: 'Diesel rattling sound on cold startup, loss of low-end torque. Upgraded part 60666199 and audio files.',
    summaryIt: 'Rumore da diesel all\'avvio a freddo e perdita di coppia sotto i 3000 giri. Modifica codice 60666199 e file audio.',
    sections: [
      {
        bodyEn: [
          "There has been quite a few issues with 'diesel-noise' from the Twin Spark 16V engines. The diesel noise will in the beginning last only a few seconds after turning your key to start the engine. But over time it will last longer and longer. The diesel sound does not have to be quite noticeable except the first few seconds after turning the key. A healthy engine should not have any diesel sound at all, even at cold start!",
          "It is a typical failure of the cam variator that regulates intake camshaft timing over the full rpm-range. If damaged, it causes loss of top-end power, significantly less torque under 3000 rpm and higher fuel consumption.",
          "There is no immediate danger of catastrophic engine failure — driving with a noisy variator will not damage the engine valves, but it should eventually be replaced during the scheduled cambelt change."
        ],
        bodyIt: [
          "I motori Twin Spark 16V sono storicamente noti per il caratteristico 'rumore da diesel' all'avvio. All'inizio questo rumore metallico dura solo 2 o 3 secondi subito dopo aver girato la chiave. Con il tempo e l'usura, però, persiste sempre più a lungo. Un motore Twin Spark perfettamente in salute non deve emettere alcun rumore da diesel, nemmeno a freddo!",
          "Si tratta del cedimento del variatore di fase idraulico (calettato sull'albero a camme di aspirazione). Quando si usura, oltre al rumore comporta una perdita di tiro sotto i 3000 giri, calo di potenza agli alti regimi e un sensibile aumento dei consumi di carburante.",
          "Non c'è pericolo immediato di rotture meccaniche catastrofiche: si può continuare a circolare senza danneggiare le valvole, ma il componente va tassativamente sostituito in occasione del rifacimento della distribuzione."
        ]
      },
      {
        headingEn: 'Root Cause and the Modified Part',
        headingIt: 'La Causa del Guasto e il Ricambio Modificato',
        bodyEn: [
          "The main reason is many cold starts and short-distance driving. The variator relies on pressurized engine oil to operate. After a cold start, it takes a couple of seconds for oil pressure to fill the internal chamber if the non-return valve fails.",
          "Early variators came from two sub-suppliers, one of which had defective tolerances. Alfa Romeo redesigned the part and released an upgraded variator with part number: 60666199.",
          "All new Alfa Romeos manufactured since April 2000 feature this upgraded variator with internal oil-seal improvements.",
          "You can significantly prolong your variator's lifespan by changing engine oil at least every 10,000 km (which is highly recommended for all Twin Spark engines anyway) and using quality 10W-40 or 10W-60 synthetic oil."
        ],
        bodyIt: [
          "La causa scatenante sono i frequenti avviamenti a freddo e i percorsi brevi. Il variatore funziona a pressione d'olio: dopo una sosta prolungata, se la valvola di non ritorno non sigilla perfettamente, la camera interna si svuota e l'alberino sbatte metallicamente finché l'olio non va in pressione.",
          "I primi variatori provenivano da due fornitori, uno dei quali presentava tolleranze errate. Alfa Romeo ha riprogettato il componente introducendo la versione modificata con codice ricambio ufficiale: 60666199.",
          "Tutte le Alfa 156 prodotte a partire da Aprile 2000 adottano di serie questo variatore aggiornato.",
          "Potete allungare moltissimo la vita del variatore sostituendo l'olio motore ogni 10.000 km (raccomandato su tutti i Twin Spark) impiegando lubrificanti sintetici di alta qualità (10W-40 o 10W-60)."
        ]
      }
    ],
    audio: [
      {
        titleEn: 'Sound of a BAD Variator (Cold Startup Diesel Rattle)',
        titleIt: 'Audio VARIATORE USURATO (Rumore metallico diesel a freddo)',
        file: '/audio/badvariator-alfa156-net.mp3'
      },
      {
        titleEn: 'Sound of a HEALTHY Engine with New Variator 60666199',
        titleIt: 'Audio VARIATORE NUOVO / SANO (Avviamento silenzioso e regolare)',
        file: '/audio/goodvariator-alfa156-net.mp3'
      }
    ]
  },
  {
    slug: 'wishbone',
    category: 'Assetto',
    titleEn: 'Front Wishbone Suspension Creaks',
    titleIt: 'Cigolii bracci e gommini sospensione anteriore',
    author: 'Anders, Antti & Peer',
    dateOrSource: 'Original alfa156.net (tech/wishbone.html)',
    summaryEn: 'Squeaking from upper wishbone bushes and lower ball joints over speed bumps and steering.',
    summaryIt: 'Cigolii tipici sui dossi e in manovra provocati dalle boccole secche del quadrilatero alto.',
    sections: [
      {
        bodyEn: [
          "Particularly in cold weather and driving over speed bumps you should watch out for squeaking from the front suspension. This squeaking is NOT normal, but a common fault on Alfa 156.",
          "It can take as little as two months from new for them to make this squeaking noise! The noise comes from the upper front wishbone bushes and can be fixed by greasing or just replacing the wishbones. Upper wishbones are relatively inexpensive and polyurethane bush upgrades (e.g. Powerflex) are available.",
          "One tip is to check the lower wishbones. They are more expensive, but it is possible to squirt a little silicone oil with a medical syringe needle inside the rubber dust boot that covers the ball joints.",
          "If you experience an intense squeaking when turning the steering wheel (especially at low parking speeds), check the upper vertical strut ball joint seal and apply silicone grease."
        ],
        bodyIt: [
          "Specialmente nei mesi invernali e affrontando dossi o avvallamenti, fate attenzione a cigolii secchi provenienti dall'avantreno. Questo cigolio NON è normale, ma è una delle caratteristiche più tipiche dell'Alfa 156.",
          "Può presentarsi persino dopo soli due mesi di vita dell'auto! Il rumore è generato dalle boccole in gomma del quadrilatero alto (braccetti superiori). Si può risolvere temporaneamente ingrassando le boccole con grasso al litio/silicone o sostituendo il braccio. I bracci superiori costano poco e in commercio esistono anche boccole in poliuretano rinforzate.",
          "Un consiglio utile riguarda i bracci oscillanti inferiori: costano molto di più, ma se il giunto a sfera cigola è possibile iniettare una piccola quantità di lubrificante siliconico nella cuffietta parapolvere tramite un ago da siringa medica.",
          "Se invece sentite un cigolio acuto e continuo solo ruotando il volante (in manovra da fermo), ingrassate la tenuta in gomma del giunto sferico tra il montante verticale e il braccio oscillante superiore."
        ]
      }
    ],
    cautionEn: "Do not use petroleum-based grease on rubber bushes as it will degrade the elastomer. Use silicone grease.",
    cautionIt: "Non usare grassi minerali derivati dal petrolio sulle boccole in gomma per evitare che si gonfino e si degradino. Usare solo grasso al silicone."
  },
  {
    slug: 'wet',
    category: 'Carrozzeria',
    titleEn: 'Water Leakage in Cabin',
    titleIt: 'Infiltrazioni d\'acqua nell\'abitacolo',
    author: 'Anders & Bjarne',
    dateOrSource: 'Original alfa156.net (tech/wet.html)',
    summaryEn: 'Moisture entering carpets, bulkhead grommets and the roof channel at the top of rear doors.',
    summaryIt: 'Ristagni d\'acqua sotto la moquette, passacavi nella paratia e canalina del tetto sopra le porte posteriori.',
    sections: [
      {
        bodyEn: [
          "Unfortunately some Alfa 156 owners have experienced water leakage. If during rainy weather you experience damp carpets, you should inspect immediately. Do not assume you are safe just because the carpet feels dry to the touch on top: the thick underlay is water-resistant on the underside, meaning liters of water can pool beneath without showing on surface!",
          "Key check locations include:",
          "1. Bulkhead rubber grommets behind the glovebox and pollen filter housing.",
          "2. The air conditioning evaporator drain tube (which can get blocked by leaves and discharge condensate directly into the passenger footwell).",
          "3. The roof seam at the top rear door shut: there is a metal joint between the roof skin and the rear door frame where sealing seam sealant can hairline crack, allowing droplets into the C-pillar trim."
        ],
        bodyIt: [
          "Alcuni possessori di Alfa 156 hanno riscontrato infiltrazioni d'acqua. Se dopo un temporale notate odore di umido o condensa sui vetri, verificate subito! Non fidatevi del fatto che la moquette sembri asciutta al tatto in superficie: il feltro insonorizzante inferiore è impermeabile sul fondo, e litri d'acqua possono stagnare sul pianale senza che ve ne accorgiate.",
          "I punti critici principali sono:",
          "1. I passacavi in gomma della paratia parafiamma dietro il vano portaoggetti e la sede del filtro antipolline.",
          "2. Il tubetto di scarico condensa dell'evaporatore clima: se si ottura di sporco o foglie, l'acqua trabocca direttamente nel vano piedi del passeggero.",
          "3. La giunzione del tetto in corrispondenza del montante della porta posteriore: la sigillatura tra la lamiera del tetto e il telaio porta può micro-fessurarsi, facendo gocciolare acqua lungo il montante posteriore."
        ]
      }
    ]
  },
  {
    slug: 'wipers',
    category: 'Elettronica',
    titleEn: 'Low Speed Wiper Intervals Failure',
    titleIt: 'Malfunzionamento intermittenza tergicristalli',
    author: 'T.P. (alfaowner.com)',
    dateOrSource: 'Original alfa156.net (tech/wipers.html)',
    summaryEn: 'Intervals skipping and stopping due to dried hardened grease inside the wiper motor contacts.',
    summaryIt: 'L\'intermittenza salta e si blocca a causa del grasso lubrificante che isola i contatti del motorino.',
    sections: [
      {
        bodyEn: [
          "The intermittent wiper speed is known to stop working over time. When set to slow interval, the wipers start skipping cycles, shuddering or stopping mid-screen with strange buzzing sounds. Gradually, intermittent mode fails entirely while continuous high speeds continue to work.",
          "This is a very common issue across many Alfa models (155, 156, GTV, Spider). The cause is simple: grease from the gearbox worm drive migrates onto the rotating electrical copper contact tracks inside the wiper motor housing, hardening into an insulating layer.",
          "The fix costs almost nothing: unscrew the wiper arms, remove the plastic scuttle panel under the windscreen, open the metal cover plate on the wiper motor gearbox, clean away the fouled grease with solvent and re-tension the copper contact fingers."
        ],
        bodyIt: [
          "L'intermittenza dei tergicristalli tende a dare problemi con gli anni. Impostando la velocità a intervalli, le spazzole iniziano a saltare i cicli, fermarsi a metà corsa o produrre ronzii anomali. Il difetto peggiora gradualmente finché l'intermittenza smette di funzionare del tutto, mentre la prima e seconda velocità continua funzionano.",
          "È un problema comune a molte Alfa dell'epoca (155, 156, GTV, Spider). La causa è quasi sempre la stessa: il grasso lubrificante del riduttore a vite senza fine migra sulle piste circolari di rame del contatto di fine corsa, indurendosi e isolando la corrente.",
          "La soluzione è a costo zero: svitare i bracci tergi, rimuovere la griglia in plastica sotto al parabrezza (sgocciolatoio), aprire il coperchietto dell'ingranaggio del motorino, sgrassare accuratamente le piste con alcol isopropilico e richiudere."
        ]
      }
    ]
  },
  {
    slug: 'paint',
    category: 'Carrozzeria',
    titleEn: 'Poor Paint & Flaking Finish',
    titleIt: 'Difetti e sfogliamento vernice originale',
    author: 'Anders (Webmaster)',
    dateOrSource: 'Original alfa156.net (tech/paint.html)',
    summaryEn: 'Paint flaking from stone chips on the plastic front bumper, bonnet and windscreen surround.',
    summaryIt: 'Sfogliamento dello smalto su paraurti anteriore, cofano motore e cornice parabrezza.',
    sections: [
      {
        bodyEn: [
          "First of all, this issue varies from car to car (on my own 1998 car this was not a problem). However, on certain production batches — particularly early Alfa Red (Rosso Alfa 130) and metallic finishes — the clearcoat adhesion to the plastic front bumper primer was suboptimal.",
          "Stone chips from highway driving can cause patches of clearcoat to lift, and in bad cases the paint could even be flaked off with a fingernail.",
          "Also inspect the leading edge of the roof right above the top rubber trim of the windscreen: stone chips there can lead to early localized rust bubbling if not touched up with an original Alfa paint stick."
        ],
        bodyIt: [
          "Questo problema varia molto da esemplare a esemplare (sulla mia 156 del '98, nota Anders, non si è mai verificato). Tuttavia, su alcune serie produttive — in particolare su tinte pastello come il Rosso Alfa 130 e alcuni metallizzati — l'adesione del trasparente sul primer del paraurti in plastica era carente.",
          "I sassolini sollevati in autostrada possono innescare lo sfogliamento del trasparente, e nei casi peggiori lo smalto può staccarsi anche solo facendo pressione con l'unghia.",
          "Ispezionate attentamente anche il bordo superiore del tetto a ridosso della guarnizione del parabrezza: i colpi di pietrisco in quel punto possono far fiorire la ruggine se non vengono ritoccati tempestivamente."
        ]
      }
    ]
  },
  {
    slug: 'v6sparks',
    category: 'V6',
    titleEn: 'How to Change Spark Plugs on the V6 24V',
    titleIt: 'Sostituzione candele sul Busso V6 24V',
    author: 'Jeff',
    dateOrSource: 'Original alfa156.net (tech/v6sparks.htm)',
    summaryEn: 'Comprehensive guide with step-by-step photos for removing the chrome inlet runners and plenum.',
    summaryIt: 'Guida passo-passo con foto per smontare polmone d\'aspirazione e collettori cromati del Busso.',
    sections: [
      {
        headingEn: 'Preparation and Required Tools',
        headingIt: 'Preparazione e Attrezzi Necessari',
        bodyEn: [
          "Changing the spark plugs on a Busso 2.5 V6 24V is a rewarding job, but requires removing the intake plenum chamber and the 6 gorgeous chrome inlet tubes to access the rear cylinder bank (cylinders 1, 2, 3).",
          "Required: 6 NGK PFR6B spark plugs (gap 0.9 mm), 7mm, 10mm and 13mm sockets, 16mm spark plug socket with rubber insert, 5mm Allen key, Torx bits, gasket seal, and fresh hose jubilee clips (the original Alfa click-clamps cannot be easily reused).",
          "Allow at least 2 to 3 hours for your first time."
        ],
        bodyIt: [
          "Sostituire le candele sul leggendario motore Busso 2.5 V6 24V è un lavoro appagante, ma per accedere alla bancata posteriore (cilindri 1, 2 e 3 verso la paratia) è indispensabile smontare il polmone di aspirazione e i 6 celebri condotti cromati.",
          "Attrezzi necessari: 6 candele NGK PFR6B al platino (gap 0.9 mm), chiavi a bussola da 7, 10 e 13 mm, chiave candela snodata da 16 mm con gommino di ritegno, brugola da 5 mm, inserti Torx, pasta per guarnizioni e fascette a vite metalliche nuove (per sostituire le fascette originali a scatto CLIC-R).",
          "Prendetevi con calma 2 o 3 ore la prima volta."
        ]
      },
      {
        headingEn: 'Step-by-Step Removal',
        headingIt: 'Fasi di Smontaggio Passo-Passo',
        bodyEn: [
          "1. Disconnect the negative battery terminal.",
          "2. Remove the plastic engine cover (four 10mm bolts).",
          "3. Loosen the intake hose from the MAF to the throttle body and remove the intake ducting.",
          "4. Remove the front engine steady strut / torque dog-bone link.",
          "5. Unclip the throttle cables and disconnect the electronic wiring plugs to the throttle body and idle actuator.",
          "6. Loosen the 12 hose clamps securing the rubber sleeves of the 6 chrome pipes (6 top, 6 bottom).",
          "7. Carefully lift away the plenum chamber. COVER the 6 open intake ports on the cylinder heads with clean lint-free rags immediately! If a nut or washer drops into an open intake valve, it means removing the cylinder head!",
          "8. Unbolt the individual pencil ignition coils (10mm bolts), unplug each connector and extract the coils.",
          "9. Unscrew the spark plugs using the 16mm socket. Check for oil inside the spark plug wells (indicates leaking cam cover gaskets).",
          "10. Install the new NGK plugs by hand first to avoid cross-threading, torque to 25-30 Nm, reinstall coils, replace rubber sleeves and reverse steps."
        ],
        bodyIt: [
          "1. Scollegare il morsetto negativo della batteria.",
          "2. Rimuovere il coperchio motore superiore (quattro dadi da 10 mm).",
          "3. Allentare il manicotto di aspirazione dal debimetro al corpo farfallato e sfilarlo.",
          "4. Smontare la barra stabilizzatrice di reazione torsionale del motore (tirante di reazione).",
          "5. Scollegare il cavo acceleratore e i connettori elettrici del corpo farfallato e dell'attuatore minimo.",
          "6. Allentare le 12 fascette dei manicotti in gomma dei condotti cromati (6 superiori e 6 inferiori).",
          "7. Sollevare delicatamente il polmone d'aspirazione. COPRIRE IMMEDIATAMENTE i condotti di aspirazione aperti sulla testata con stracci puliti! Se una rondella o una vite cadesse all'interno di una valvola aperta, bisognerebbe smontare l'intera testata!",
          "8. Svitare le singole bobine d'accensione (bulloni da 10 mm), staccare i connettori ed estrarle.",
          "9. Svitare le candele con la chiave da 16 mm. Verificare che nei pozzetti non vi sia trafilamento d'olio (segno di guarnizione coperchio punterie da cambiare).",
          "10. Imboccare le nuove candele NGK TASSATIVAMENTE A MANO per non rovinare il filetto in alluminio, serrare a 25-30 Nm, rimontare le bobine, i manicotti e procedere a ritroso."
        ]
      }
    ],
    cautionEn: "CRITICAL: Cover the open inlet ports immediately with clean rags. A dropped bolt into the cylinder head will cause engine destruction.",
    cautionIt: "FONDAMENTALE: Tappare immediatamente i condotti di aspirazione con stracci puliti. Un bullone caduto nella testata comporta la distruzione del motore."
  },
  {
    slug: 'maf',
    category: 'Motore',
    titleEn: 'Cleaning the MAF Sensor',
    titleIt: 'Debimetro / Sensore MAF: diagnosi e pulizia',
    author: 'Anders & Jeff',
    dateOrSource: 'Original alfa156.net (tech/maf.html)',
    summaryEn: 'Understanding MAF failure symptoms, cleaning the hot-film sensor and Bosch part numbers.',
    summaryIt: 'Sintomi di guasto del debimetro a filo caldo, procedura di pulizia con solvente secco e codici ricambio.',
    sections: [
      {
        bodyEn: [
          "It is a well known problem that the air mass meter (MAF) can be the root cause of countless engine running issues. In most cases where an engine feels flat, hesitant or hesitates on part throttle, the culprit is a fouled MAF sensor.",
          "Unfortunately, the standard Alfa Romeo diagnostic system often does not set a fault code for a degraded MAF because the sensor is still outputting a voltage — just an incorrect, degraded reading!",
          "The MAF sensor contains an ultra-delicate platinum hot film. Over time, microscopic oil vapors from the crankcase breather and airborne dust coat the element, insulating it and reporting false airflow values to the ECU.",
          "Before spending over €300-€500 on a brand new Bosch unit, cleaning it can restore performance."
        ],
        bodyIt: [
          "Il misuratore massa aria (debimetro / MAF) è uno dei componenti più critici per il funzionamento del motore. Nella maggior parte dei casi in cui l'auto accusa vuoti di erogazione, lentezza a salire di giri o consumi elevati, il colpevole è il debimetro degradato.",
          "Spesso l'autodiagnosi Alfa Romeo non segnala alcun errore in centralina, perché il debimetro continua a trasmettere un segnale elettrico, ma con valori sballati rispetto all'aria reale aspirata!",
          "Il sensore interno è costituito da una piastrina a film caldo di platino estremamente delicata. Nel tempo, i vapori d'olio del ricircolo basamento e il pulviscolo si depositano sul film, creando una patina isolante.",
          "Prima di spendere 300-500 euro per un ricambio originale Bosch, pulire il sensore può spesso risolvere il problema."
        ]
      },
      {
        headingEn: 'Safe Cleaning Procedure',
        headingIt: 'Procedura Sicura di Pulizia',
        bodyEn: [
          "1. Disconnect the wiring connector to the MAF.",
          "2. Remove the sensor insert using a tamper-proof 5-point Torx bit (with safety center hole).",
          "3. Spray zero-residue electronic contact cleaner or specialized MAF cleaner directly into the sensor sampling channel.",
          "4. NEVER touch the hot film element with cotton buds, brushes, fingers or compressed air blasts! The film will shatter instantly.",
          "5. Alternatively, soak the sensing tip in a container of pure Isopropyl Alcohol for 10 minutes and let it air-dry completely.",
          "6. Reinstall and test drive. If performance is restored, you saved a bundle!"
        ],
        bodyIt: [
          "1. Staccare il connettore elettrico a scatto.",
          "2. Rimuovere le due viti Torx di sicurezza con perno centrale che fissano il sensore al condotto.",
          "3. Spruzzare abbondante spray pulitore per contatti a secco (residuo zero) o pulitore specifico per debimetri nel condotto di campionamento del sensore.",
          "4. NON TOCCARE MAI il film caldo con cotton fioc, pennelli, dita o getti di aria compressa violenta! Il filamento si spezzerebbe all'istante.",
          "5. In alternativa, immergere la punta del sensore in un barattolo con alcol isopropilico puro per 10 minuti e lasciarlo asciugare all'aria.",
          "6. Rimontare e provare l'auto. Se l'erogazione torna brillante, avete risparmiato centinaia di euro!"
        ]
      }
    ]
  },
  {
    slug: 'timing',
    category: 'Motore',
    titleEn: 'Timing Belts & Balancer Belts Maintenance',
    titleIt: 'Cinghie di distribuzione e controrotanti',
    author: 'Anders & Community',
    dateOrSource: 'Original alfa156.net (tech/timing.html)',
    summaryEn: 'The critical 36,000 miles (60,000 km) / 3-year replacement rule on Twin Spark 16V engines.',
    summaryIt: 'La fondamentale regola dei 60.000 km o 3 anni per la salvaguardia delle valvole sui Twin Spark.',
    sections: [
      {
        bodyEn: [
          "When the Alfa 156 was launched in 1997, the official factory service schedule stated a cambelt replacement interval of 72,000 miles (120,000 km). This proved disastrous in real-world conditions, causing catastrophic engine failures across Europe.",
          "Alfa Romeo officially revised the service bulletin, reducing the recommended interval to 36,000 miles (60,000 km) or 3 years — WHICHEVER COMES FIRST!",
          "On the 2.0 TS engines, there are TWO belts: the main timing belt and the secondary balancer shaft belt. If the balancer belt snaps, it frequently wraps itself around the main timing belt, causing the timing to skip and bending all 16 valves.",
          "Always replace the tensioner pulley (plastic pulleys can crack and should be replaced with metal ones where available), the idler bearings, and the water pump during every belt service."
        ],
        bodyIt: [
          "Al lancio della 156 nel 1997, il libretto di uso e manutenzione Alfa Romeo dichiarava una sostituzione della cinghia ogni 120.000 km. Nell'utilizzo reale questa scadenza si rivelò disastrosa, provocando rotture precoci e danni ingenti in tutta Europa.",
          "Alfa Romeo diramò un bollettino ufficiale riducendo tassativamente l'intervallo a 60.000 km o 3 ANNI — a seconda di quale condizione si verifichi per prima!",
          "Sui motori 2.0 Twin Spark sono presenti DUE cinghie: la cinghia distribuzione principale e la cinghia secondaria per i due alberi controrotanti di equilibratura. Se la cinghia controrotanti cede, quasi sempre si infila sotto la distribuzione facendola saltare e piegando tutte le 16 valvole.",
          "Ad ogni cambio distribuzione sostituire sempre: tendicinghia (quelli con puleggia in plastica sono fragili), cuscinetto fisso e pompa dell'acqua."
        ]
      }
    ],
    cautionEn: "CRITICAL: Never exceed 3 years or 60,000 km on a Twin Spark belt. Snapped belts mean a bent valve job costing thousands.",
    cautionIt: "FONDAMENTALE: Non superare mai i 3 anni o 60.000 km sui Twin Spark. La rottura della cinghia comporta il piegamento delle valvole."
  },
  {
    slug: 'headlight',
    category: 'Carrozzeria',
    titleEn: 'Headlight Replacement & GTA Black-Bezel Conversion',
    titleIt: 'Sostituzione fari e mascherina stile GTA',
    author: 'Jeff & Jon',
    dateOrSource: 'Original alfa156.net (tech/headlight.htm)',
    summaryEn: 'How to remove front bumper clips, replace headlamp units and convert chrome units to dark GTA style.',
    summaryIt: 'Smontaggio paraurti anteriore, rimozione gruppi ottici e conversione con cornice brunita tipo GTA.',
    sections: [
      {
        bodyEn: [
          "To remove the headlights on an Alfa 156, the front bumper MUST be unbolted and pulled forward. It is impossible to extract the headlight assembly without dropping the bumper because the lower mounting bolt sits directly behind the bumper bar reinforcement.",
          "Bumper removal: remove the 4 Torx screws on top of the grille, 4 screws underneath the front undertray, and the two hidden bolts inside each front wheel arch liner.",
          "GTA Look Conversion: standard 156 headlights have bright chrome reflectors and surrounds. 156 GTA models feature distinctive satin black inner surrounds.",
          "By carefully heating the outer clear lens sealant with a heat gun or in a low-temperature oven (80°C for 10 minutes), the lens can be separated, the chrome shroud scuffed and painted with heat-resistant satin black spray, and resealed with butyl sealant for an authentic GTA aesthetic."
        ],
        bodyIt: [
          "Per smontare i fari anteriori sull'Alfa 156 è INDISPENSABILE smontare o scostare il paraurti anteriore. È impossibile estrarre il faro senza abbassare il paraurti perché il terzo bullone inferiore è posizionato proprio dietro al profilo del paraurti.",
          "Smontaggio paraurti: svitare le 4 viti Torx superiori vicino allo scudetto, le viti inferiori sul paramotore e i bulloni nascosti all'interno dei passaruota anteriori.",
          "Conversione Fari GTA Look: i fari delle 156 standard hanno parabole e cornici cromate. I fari della 156 GTA hanno invece una splendida cornice interna nera opaca.",
          "Scaldando delicatamente il mastice di sigillatura con una pistola termica o in forno a 80°C per 10 minuti, è possibile separare il trasparente, carteggiare la mascherina interna cromata, verniciarla in nero satinato per alte temperature e risigillare con butile."
        ]
      }
    ]
  },
  {
    slug: 'fhandle',
    category: 'Carrozzeria',
    titleEn: 'Sticking Front Door Handle Button Fix',
    titleIt: 'Pulsante maniglia portiera bloccato',
    author: 'Jeff & Pat',
    dateOrSource: 'Original alfa156.net (tech/fhandle.html)',
    summaryEn: 'Disassembling exterior front handle, cleaning oxidation and greasing push rod button mechanism.',
    summaryIt: 'Smontaggio maniglia esterna anteriore, rimozione ossido e lubrificazione del pulsante a perno.',
    sections: [
      {
        bodyEn: [
          "A classic 156 annoyance: pushing the metal door button opens the door, but the button stays stuck pushed in, preventing the latch from catching when you slam the door shut!",
          "The issue is road grime, salt and alloy galvanic corrosion building up inside the cast metal barrel surrounding the button spring rod.",
          "Removing the door panel: remove the armrest screws (behind plastic cap), puddle light, window switch pod, speaker grille, and pry the panel clips.",
          "Extract the exterior aluminium handle, remove the circlip, slide out the button and spring, clean out the white powdery oxidation with fine wet & dry sandpaper, pack with water-resistant marine lithium grease, and reassemble."
        ],
        bodyIt: [
          "Un classico fastidio della 156: premendo il pulsante rotondo della maniglia anteriore, questo rimane incastrato dentro a fondo corsa, impedendo alla portiera di riagganciarsi quando cercate di richiuderla!",
          "La causa è la sporcizia stradale, il sale e l'ossidazione galvanica della fusione metallica che blocca il perno scorrevole e la molla interna.",
          "Smontaggio pannello porta: svitare le viti del bracciolo (sotto il gommino), luce pozzanghera, gruppo alzacristalli, altoparlante e sganciare le clip perimetrali.",
          "Estrarre la maniglia in alluminio dallo sportello, togliere il seeger, estrarre il pulsante con la molla, rimuovere l'ossido bianco con carta abrasiva fine, ingrassare generosamente con grasso marino resistente all'acqua e rimontare."
        ]
      }
    ]
  },
  {
    slug: 'airbox',
    category: 'Motore',
    titleEn: 'Airbox Filter Replacement with Seized Rusty Bolts',
    titleIt: 'Sostituzione filtro aria con bulloni arrugginiti',
    author: 'Sam & Jeff',
    dateOrSource: 'Original alfa156.net (tech/airbox.html)',
    summaryEn: 'How to overcome seized brass nuts on the airbox without cracking the plastic housing.',
    summaryIt: 'Come estrarre il filtro aria originale anche quando le viti autofilettanti e gli inserti sono bloccati.',
    sections: [
      {
        bodyEn: [
          "The air filter box on the Alfa 156 sits low down on the passenger side (front left corner of the engine bay), directly exposed to road spray, salt and moisture.",
          "The airbox lid is fastened by three or four bolts threaded into brass nuts pressed into the plastic body. After a couple of years, the steel bolts rust solid into the brass inserts. When you turn the bolt with a spanner, the brass insert spins freely in the softened plastic, making removal seemingly impossible!",
          "Jeff and Sam's solution: do not force it or you will smash the airbox. Apply penetrating oil (Plusgas) 24h prior. If it spins, heat the bolt head gently with a small soldering iron to soften the plastic grip, remove the lid, replace the damaged inserts or drill through and fit stainless steel bolts with locknuts."
        ],
        bodyIt: [
          "La scatola filtro aria dell'Alfa 156 è alloggiata in basso nell'angolo anteriore del vano motore, esposta a spruzzi d'acqua, fango e sale invernale.",
          "Il coperchio è fissato da bulloni che si avvitano in inserti filettati in ottone annegati nella plastica. Con il tempo i bulloni in acciaio arrugginiscono nell'ottone; tentando di svitarli, l'inserto inizia a girare a vuoto nella plastica, rendendo apparentemente impossibile estrarre il coperchio!",
          "La tecnica di Jeff e Sam: mai fare leva forzando, altrimenti la scatola si spaccherà. Spruzzare sbloccante 24 ore prima. Se l'inserto gira, scaldare la testa della vite con la punta di un saldatore per ammorbidire la plastica, estrarre il coperchio e sostituire la bulloneria con viti e dadi passanti in acciaio inox."
        ]
      }
    ]
  },
  {
    slug: 'coolant',
    category: 'Raffreddamento',
    titleEn: 'Coolant Expansion Tank Replacement',
    titleIt: 'Sostituzione vaschetta liquido refrigerante',
    author: 'Jeff',
    dateOrSource: 'Original alfa156.net (tech/coolentResChange.htm)',
    summaryEn: 'Replacing aged, yellowed or micro-cracked coolant expansion tanks on 147 and 156.',
    summaryIt: 'Guida alla sostituzione della vaschetta di espansione ingiallita o fessurata su 156 e 147.',
    sections: [
      {
        bodyEn: [
          "The original translucent plastic coolant expansion tank degrades under heat and pressure over time, turning brittle, discolored yellow/brown, and developing microscopic hairline stress cracks around the lower hose neck.",
          "Always perform this job on a stone-cold engine to prevent scalding from pressurized boiling coolant.",
          "Syringe or siphon out existing coolant from the reservoir into a clean container, loosen the small overflow return hose, the main lower bottom hose clamp, unbolt the two mounting bolts, install the new gleaming white tank, reconnect hoses and bleed cooling system."
        ],
        bodyIt: [
          "La vaschetta di espansione del circuito di raffreddamento in polietilene con il calore e la pressione negli anni invecchia, ingiallisce e tende a sviluppare micro-fessure da fatica, specialmente attorno al beccuccio inferiore.",
          "Eseguire questo lavoro ESCLUSIVAMENTE a motore freddo per evitare ustioni da liquido in pressione.",
          "Aspirare il liquido refrigerante con una siringa grande, allentare la fascetta del tubicino di ritorno superiore e del manicotto principale inferiore, svitare i due bulloni di ancoraggio, posizionare la nuova vaschetta candida, serrare le fascette e spurgare l'aria dall'impianto."
        ]
      }
    ]
  },
  {
    slug: 'idle',
    category: 'Motore',
    titleEn: 'Erratic Idle Speed & Throttle Reset',
    titleIt: 'Regime minimo irregolare e reset ECU',
    author: 'Anders',
    dateOrSource: 'Original alfa156.net (tech/idle.html)',
    summaryEn: 'Stepping motor idle actuator cleaning and electronic throttle body calibration.',
    summaryIt: 'Pulizia dell\'attuatore del minimo Bosch, valvola a farfalla e procedura di reset autoadattativi ECU.',
    sections: [
      {
        bodyEn: [
          "An erratic idle that hunts between 800 and 1500 rpm or causes the car to stall when dipping the clutch at traffic lights is very common on Twin Spark engines.",
          "The culprit is usually carbon soot and sticky oil deposits around the throttle butterfly plate and inside the Bosch idle stepper motor actuator (idle air control valve).",
          "Clean the throttle throat thoroughly using carb cleaner and a clean rag.",
          "ECU Throttle Reset Procedure: after cleaning or battery disconnection, turn the ignition key to MAR (do NOT crank the starter) and leave it untouched for 90 seconds. You will hear the throttle stepper motor cycling through its minimum and maximum stops. Turn key to OFF for 90 seconds, then start engine without touching the accelerator pedal and allow it to idle smoothly for 10 minutes until the cooling fan kicks in."
        ],
        bodyIt: [
          "Un minimo irregolare che oscilla tra 800 e 1500 giri o che tende a spegnersi quando si preme la frizione fermandosi a un semaforo è un classico sui motori Twin Spark.",
          "Il colpevole è quasi sempre la morchia carboniosa e i vapori d'olio depositati attorno al piattello della farfalla e nel motorino passo-passo del minimo.",
          "Pulire accuratamente il condotto della farfalla con uno spray per carburatori e uno straccio privo di pelucchi.",
          "Procedura di Reset Farfalla / ECU: dopo la pulizia o dopo aver staccato la batteria, girare la chiave su MAR (senza avviare) e lasciarla ferma per 90 secondi: sentirete il motorino farfalla azzerare i finecorsa. Girare su STOP per altri 90 secondi, poi avviare senza toccare il gas e lasciare il motore al minimo per 10 minuti fino all'avvio della ventola."
        ]
      }
    ]
  },
  {
    slug: 'powerloss',
    category: 'Motore',
    titleEn: 'Engine Power Loss Troubleshooting',
    titleIt: 'Diagnosi perdita di potenza motore',
    author: 'Anders & Vidar',
    dateOrSource: 'Original alfa156.net (tech/powerloss.html)',
    summaryEn: 'Systematic troubleshooting of lambda sensors, fuel pressure, camshaft sensor and spark plugs.',
    summaryIt: 'Verifica sistematica di sonda lambda, pressione benzina, sensore di fase e candele.',
    sections: [
      {
        bodyEn: [
          "Power loss on the 156 typically presents in three ways:",
          "1. Water in spark plug wells: after jet-washing the engine or driving through deep storms, water pools inside the spark plug recessed wells, causing misfires under load on 3 cylinders as the engine warms up.",
          "2. Power limitation during the first 2 minutes of cold engine operation: the factory Bosch ECU deliberately retards timing and limits throttle response until the oxygen sensor reaches operating temperature.",
          "3. Hesitation on hot days after parking in direct sun: points to a degraded oxygen (lambda) sensor, coolant temperature CTS sensor, or the MAF."
        ],
        bodyIt: [
          "La perdita di potenza sulla 156 si manifesta solitamente in tre modalità distinte:",
          "1. Acqua nei pozzetti candele: dopo un lavaggio motore incauto o piogge torrenziali, l'acqua può accumularsi nei pozzetti delle candele, facendo andare il motore a tre cilindri con mancata accensione non appena l'umidità evapora scaldandosi.",
          "2. Taglio di potenza nei primi 2 minuti a freddo: la centralina Bosch limita l'erogazione finché le sonde lambda non raggiungono la temperatura d'esercizio corretta.",
          "3. Esitazioni nelle giornate calde o dopo soste sotto il sole: indicano quasi sempre la sonda lambda degradata, il sensore temperatura refrigerante CTS per la centralina o il debimetro."
        ]
      }
    ]
  },
  {
    slug: 'temperature',
    category: 'Raffreddamento',
    titleEn: 'Water Temperature Gauge & Thermostat Faults',
    titleIt: 'Indicatore temperatura acqua e termostato',
    author: 'Anders',
    dateOrSource: 'Original alfa156.net (tech/temperature.html)',
    summaryEn: 'Why the needle stays below 90°C on motorways and how a stuck-open thermostat harms fuel economy.',
    summaryIt: 'Perché la lancetta scende sotto i 90°C in velocità e come il termostato bloccato aperto usura il motore.',
    sections: [
      {
        bodyEn: [
          "Unlike German cars where the temperature gauge is electronically damped to sit glued at exactly 90°C, the Alfa 156 gauge shows raw, real-time coolant temperatures from the sender.",
          "Normal behavior: needle reaches approximately 88°-90°C in traffic, and slightly decreases to 80°-85°C on clear open roads.",
          "Stuck-Open Thermostat: if your temperature drops to 50°-70°C on the motorway in winter, your thermostat wax element has failed and is permanently stuck open.",
          "A cold-running engine forces the ECU into permanent open-loop cold enrichment, washing lubricating oil off cylinder walls, dramatically increasing fuel consumption, and damaging catalytic converters."
        ],
        bodyIt: [
          "A differenza delle vetture tedesche in cui l'indicatore di temperatura è filtrato elettronicamente per rimanere incollato a 90°C, lo strumento dell'Alfa 156 indica la temperatura reale del liquido trasmessa dal bulbo.",
          "Comportamento normale: la lancetta deve raggiungere gli 88°-90°C nel traffico e attestarsi attorno agli 80°-85°C in velocità con aria fresca.",
          "Termostato bloccato aperto: se in autostrada d'inverno la lancetta scende a 50°-70°C, la valvola termostatica ha ceduto ed è bloccata costantemente aperta verso il radiatore.",
          "Un motore che gira freddo costringe la centralina ad arricchire costantemente la miscela, dilavando l'olio dalle canne cilindri, facendo schizzare i consumi e intasando i catalizzatori."
        ]
      }
    ]
  },
  {
    slug: 'clutch',
    category: 'Trasmissione',
    titleEn: 'Clutch Return Spring Replacement',
    titleIt: 'Sostituzione molla di richiamo pedale frizione',
    author: 'Anders & Community',
    dateOrSource: 'Original alfa156.net (tech/clutch.html)',
    summaryEn: 'Fixing a pedal that fails to return fully or feels mushy near the top of its travel.',
    summaryIt: 'Come sostituire la molla a spirale sotto la pedaliera per eliminare il gioco a vuoto del pedale.',
    sections: [
      {
        bodyEn: [
          "If your clutch pedal feels lazy, has 2-3 cm of dead play at the very top of its travel, or refuses to snap back up completely, the assist torsion spring under the pedal box has likely snapped.",
          "The spring is accessible in the driver footwell above the pedal pivot. Replacing it restores firm pedal return and prevents premature slave cylinder wear."
        ],
        bodyIt: [
          "Se il pedale della frizione sembra pigro, ha 2-3 centimetri di corsa morta a vuoto nella parte alta o non risale completamente da solo, la molla di richiamo elicoidale sulla pedaliera si è rotta.",
          "La molla è accessibile nel vano piedi del guidatore sopra il perno del pedale. Sostituirla ripristina la risalita netta del pedale ed evita l'usura precoce del cilindretto frizione."
        ]
      }
    ]
  },
  {
    slug: 'ac',
    category: 'Comfort',
    titleEn: 'Air Conditioning Troubleshooting',
    titleIt: 'Risoluzione problemi impianto climatizzatore',
    author: 'Anders',
    dateOrSource: 'Original alfa156.net (tech/ac.html)',
    summaryEn: 'Low refrigerant pressure switch cutoff, condensate drainage and blower speed resistor pack.',
    summaryIt: 'Pressostato di sicurezza per bassa pressione gas, scarico condensa e resistenza ventola abitacolo.',
    sections: [
      {
        bodyEn: [
          "Common A/C problems include: compressor clutch not engaging (low R134a refrigerant triggers the dual pressure safety switch to save the compressor from burning out), cabin blower fan only working on speed 4 (failed thermal resistor pack behind the glovebox), and water flooding the floor (blocked rubber duckbill condensate drain)."
        ],
        bodyIt: [
          "I guasti tipici del climatizzatore comprendono: mancato innesto della frizione del compressore (la pressione bassa del gas R134a attiva il pressostato di sicurezza per non grippare il compressore), ventola abitacolo funzionante solo alla massima velocità 4 (resistenza termica bruciata dietro al cassetto) e acqua sul pavimento (tubo condensa a becco d'anatra ostruito)."
        ]
      }
    ]
  },
  {
    slug: 'cold',
    category: 'Motore',
    titleEn: 'Lack of Power on Cold Engine',
    titleIt: 'Esitazioni e vuoti a motore freddo',
    author: 'Anders',
    dateOrSource: 'Original alfa156.net (tech/cold.html)',
    summaryEn: 'ECU coolant temperature sender CTS failure and cold enrichment fueling issues.',
    summaryIt: 'Sensore temperatura liquido refrigerante per centralina (CTS) e mancato arricchimento a freddo.',
    sections: [
      {
        bodyEn: [
          "If your 156 starts fine but bogs down heavily when pulling away from cold, the blue CTS (Coolant Temperature Sensor) on the thermostat housing may be sending a false warm reading to the ECU, starving the engine of required cold enrichment fuel."
        ],
        bodyIt: [
          "Se la 156 si avvia regolarmente ma ha forti vuoti e non sale di giri appena partite a freddo, il sensore temperatura refrigerante CTS sul termostato potrebbe trasmettere un valore errato di motore già caldo alla centralina, negando il necessario arricchimento di benzina."
        ]
      }
    ]
  },
  {
    slug: 'winter',
    category: 'Manutenzione',
    titleEn: 'Winter Use & Nordic Freeze Prevention',
    titleIt: 'Uso invernale e prevenzione gelo',
    author: 'Anders (Bergen, Norway)',
    dateOrSource: 'Original alfa156.net (tech/winter.html)',
    summaryEn: 'Anders shares real Nordic winter experience: frameless door seal care, battery health and locks.',
    summaryIt: 'L\'esperienza diretta di Anders negli inverni norvegesi: trattamento guarnizioni, batteria e serrature.',
    sections: [
      {
        bodyEn: [
          "Writing from Bergen, Norway, Anders shares invaluable advice for running an Alfa 156 in freezing conditions: treat the door rubber seals with silicone stick to prevent the door glass and rubbers from freezing shut, use lock de-icer, and keep the battery fully charged as cold starts on high-compression Twin Spark and Busso V6 engines demand substantial cranking amperage."
        ],
        bodyIt: [
          "Scrivendo direttamente da Bergen in Norvegia, Anders offre consigli preziosi per affrontare gli inverni rigidi: trattare le guarnizioni porta con stick al silicone per evitare che gomma e vetri si incollino per il gelo, tenere il de-ghiacciante per le serrature e mantenere la batteria al massimo della carica, dato che i motori ad alta compressione come Twin Spark e Busso V6 richiedono uno spunto notevole sottozero."
        ]
      }
    ]
  },
  {
    slug: 'bonnetcatch',
    category: 'Sicurezza',
    titleEn: 'Bonnet Catch Safety Mechanism',
    titleIt: 'Gancio e serratura cofano motore',
    author: 'Anders & ARDC',
    dateOrSource: 'Original alfa156.net (tech/bonnetcatch.html)',
    summaryEn: 'Preventing dangerous bonnet fly-up by cleaning and lubricating the secondary safety latch.',
    summaryIt: 'Prevenzione dell\'apertura accidentale in corsa: pulizia e lubrificazione del meccanismo di sicurezza.',
    sections: [
      {
        bodyEn: [
          "Several 156s suffered terrifying bonnet fly-ups at motorway speeds because road grit and road salt seized the secondary safety catch spring in the open position.",
          "Regularly spray the secondary bonnet latch mechanism with brake cleaner, work it back and forth by hand, and coat with white lithium grease. Download the full safety inspection PDF guide."
        ],
        bodyIt: [
          "Diversi esemplari di 156 hanno subito la spaventosa apertura accidentale del cofano motore ad alte velocità in autostrada, a causa dello sporco e del sale che bloccano la molla del gancio di sicurezza secondario in posizione aperta.",
          "Pulire periodicamente la serratura e il gancio secondario con detergente freni, muovere la levetta a mano e lubrificare abbondantemente con grasso bianco al litio. Disponibile la guida PDF completa."
        ]
      }
    ],
    download: {
      titleEn: 'Download Bonnet Catch Safety Guide (PDF)',
      titleIt: 'Scarica Guida Sicurezza Gancio Cofano (PDF)',
      file: '/downloads/bonnetcatch.pdf'
    },
    cautionEn: "Check your secondary bonnet latch today: when pushed, it must snap back vigorously under spring tension!",
    cautionIt: "Verificate il gancio di sicurezza oggi stesso: quando lo premete deve scattare indietro con vigore grazie alla molla!"
  }
];
