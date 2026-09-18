// src/data/technicalTipsData.ts
// Verbatim historical technical guides recovered directly from alfa156.net (1998-2007)
// Authors: Anders (Webmaster), Jeff Porter, Kid van Orsouw (Alfa 156 Club NL), Sam (miximup),
// Black Beauty (Pat), Jon, T.P. (alfaowner.com), Bjarne, Gert-Jan, Åke, Stein Erik Hanssen, Neuropean, etc.

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
  // ==========================================
  // 1. DASHBOARD NOISE & RATTLES
  // ==========================================
  {
    slug: 'dash',
    category: 'Interni',
    titleEn: 'Dashboard Noise & Rattles',
    titleIt: 'Rumorosità e scricchiolii della plancia',
    author: 'Anders (Webmaster) & Kid van Orsouw (Alfa 156 Club NL)',
    dateOrSource: 'Archivio alfa156.net',
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
          "Opzione c): è probabilmente la più pratica, poiché richiede solo lo smontaggio della griglia diffusore sbrinamento parabrezza che corre per quasi tutta la larghezza alla base del cruscotto."
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
        src: '/images/techtips/dash/dash3.jpg',
        alt: 'Underside view of steering column mounting',
        captionEn: 'The underside of the beam where the steering column mounts with additional bolts.',
        captionIt: 'La parte inferiore della traversa dove si fissa il piantone dello sterzo.'
      },
      {
        src: '/images/techtips/dash/dash4.jpg',
        alt: 'Middle section of dashboard structure',
        captionEn: 'Middle section of the dashboard framework and ventilation duct routing.',
        captionIt: 'Sezione centrale della struttura plancia e canalizzazioni dell\'aria.'
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
      },
      {
        src: '/images/techtips/dash/dash7.jpg',
        alt: 'Defrost grille removal area',
        captionEn: 'The long defrost grille area at the base of the windscreen.',
        captionIt: 'La zona della lunga griglia sbrinatore alla base del parabrezza.'
      }
    ],
    cautionEn: "Take immense care when prying the demist grille. Plastic clips dry out and crack easily.",
    cautionIt: "Massima cautela nell'estrazione della griglia sbrinamento: le clip di plastica con il calore diventano fragili."
  },

  // ==========================================
  // 2. WATER LEAKAGE IN CABIN (WET)
  // ==========================================
  {
    slug: 'wet',
    category: 'Carrozzeria',
    titleEn: 'Water Leakage in Cabin',
    titleIt: 'Infiltrazioni d\'acqua nell\'abitacolo',
    author: 'Anders & Bjarne (alt.autos.alfa-romeo)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Moisture entering carpets, bulkhead grommets and the roof channel at the top of rear doors.',
    summaryIt: 'Ristagni d\'acqua sotto la moquette, passacavi nella paratia e canalina del tetto sopra le porte posteriori.',
    sections: [
      {
        bodyEn: [
          "Unfortunately some Alfa 156 owners have experienced water leakage. If during rainy weather you experience damp carpets, you should inspect immediately.",
          "And don't think you might not have this problem anyway! Because the carpet should be water resistant on the down side, so you might not know before looking under it!",
          "One additional place water can enter the car is by the roof at the end of the top of the back doors: there is a space in the metal between the roof and the door which has been known to cause some leakage."
        ],
        bodyIt: [
          "Sfortunatamente alcuni possessori di Alfa 156 hanno riscontrato infiltrazioni d'acqua. Se con il maltempo notate che la moquette è umida, controllate subito.",
          "E non pensate di essere al sicuro solo perché la moquette sembra asciutta sopra! Il feltro isolante inferiore è impermeabile sul fondo, per cui potreste avere litri d'acqua stagnante sotto senza accorgervene prima di sollevarla!",
          "Un ulteriore punto critico dove l'acqua può penetrare è sul tetto, in corrispondenza della parte superiore delle porte posteriori: vi è una giunzione tra la lamiera del tetto e il telaio porta che tende a fessurarsi provocando infiltrazioni."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/vann.jpg',
        alt: 'Water leakage roof channel',
        captionEn: 'Space in the metal between the roof and the rear door where seam sealer can crack and leak.',
        captionIt: 'Spazio nella giunzione lamiera tra tetto e portiera posteriore dove il sigillante può fessurarsi.'
      }
    ]
  },

  // ==========================================
  // 3. LOW SPEED WIPER INTERVALS
  // ==========================================
  {
    slug: 'wipers',
    category: 'Elettronica',
    titleEn: 'Low Speed Wiper Intervals Failure',
    titleIt: 'Malfunzionamento intermittenza tergicristalli',
    author: 'T.P. (alfaowner.com)',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 4. FRONT WISHBONE SUSPENSION
  // ==========================================
  {
    slug: 'wishbone',
    category: 'Assetto',
    titleEn: 'Front Wishbone Suspension Creaks',
    titleIt: 'Cigolii bracci e gommini sospensione anteriore',
    author: 'Anders, Antti & Peer',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 5. TWIN SPARK CAM VARIATOR
  // ==========================================
  {
    slug: 'variator',
    category: 'Motore',
    titleEn: 'Twin Spark Cam Variator (Diesel Sound)',
    titleIt: 'Variatore di fase Twin Spark (Rumore Diesel)',
    author: 'Anders (Webmaster)',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 6. POOR PAINT
  // ==========================================
  {
    slug: 'paint',
    category: 'Carrozzeria',
    titleEn: 'Poor Paint & Flaking Finish',
    titleIt: 'Difetti e sfogliamento vernice originale',
    author: 'Anders (Webmaster)',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 7. V6 SPARK PLUGS REPLACEMENT (JEFF PORTER)
  // ==========================================
  {
    slug: 'v6sparks',
    category: 'V6',
    titleEn: 'How to Change Spark Plugs on the 156 V6 24V (1998)',
    titleIt: 'Sostituzione candele sul Busso V6 24V (1998)',
    author: 'Jeff Porter',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Replacing the spark plugs on a 156 V6 (1998): socket set, allen keys, hose clip pliers and step-by-step plenum removal.',
    summaryIt: 'Guida passo-passo originale di Jeff Porter con set bussole, brugole, pinze fascette e rimozione polmone d\'aspirazione.',
    sections: [
      {
        headingEn: 'Tools and Preparation',
        headingIt: 'Attrezzi e Preparazione',
        bodyEn: [
          "Tools required: Socket set with extensions, 5mm Allen key, spark plug socket removal tool, and Hose Clip Pliers.",
          "Tips: Lefty loose, Righty tights. Most of the bolts that need removing are removed using a 5mm allen key."
        ],
        bodyIt: [
          "Attrezzi richiesti: Set di chiavi a bussola con prolunghe, chiave a brugola da 5 mm, chiave specifica per candele e pinza per fascette tubi (Hose Clip Pliers).",
          "Consigli: Senso antiorario per svitare, orario per serrare. La maggior parte dei bulloni da rimuovere richiede una chiave a brugola da 5 mm."
        ]
      },
      {
        headingEn: 'Rear Cylinder Bank & Plenum Removal (Steps 1 - 14)',
        headingIt: 'Bancata Posteriore e Smontaggio Plenum (Passaggi 1 - 14)',
        bodyEn: [
          "1: Disconnect the oil vapour recirculation pipe from the right cylinder head.",
          "2: Loosen the bands and remove the hose between the resonator and the butterfly casing.",
          "3: Disconnect the battery negative (-) terminal.",
          "4: Loosen the bands fixing the inlet ducts to the air chamber. Just use a small head screwdriver to prize them off.",
          "5: Disconnect the oil vapour recirculation pipe from the air chamber.",
          "6: Also disconnect the breather pipe and move it to the left, out of the way. Use your 9mm socket to remove the bolt holding the dip stick.",
          "7: Disconnect the MAF plug so that you can move the air induct tubing out of the way.",
          "8: Disconnect the corrugated hose from the throttle body and move aside. Disconnect the electrical connection of the throttle body actuator.",
          "9: Undo the bolts and remove the air chamber (plenum).",
          "10: Disconnect electric connections from ignition coils by levering off the thin metal bar up off the plug with a screwdriver.",
          "11: Unscrew remaining fixing screws from ignition coils and remove them."
        ],
        bodyIt: [
          "1: Scollegare il tubo di ricircolo vapori olio dalla testata destra.",
          "2: Allentare le fascette e rimuovere il manicotto tra il risuonatore e il corpo farfallato.",
          "3: Scollegare il polo negativo (-) della batteria.",
          "4: Allentare le fascette che fissano i condotti di aspirazione alla camera d'aria (plenum). Usare un cacciavite a taglio piccolo per scalzarle.",
          "5: Scollegare il tubo vapori olio dalla camera d'aria.",
          "6: Scollegare anche il tubo sfiato e spostarlo a sinistra. Usare la bussola da 9 mm per rimuovere il bullone che fissa l'astina olio.",
          "7: Scollegare lo spinotto del debimetro (MAF) per spostare i condotti di aspirazione.",
          "8: Staccare il tubo corrugato dal corpo farfallato e spostarlo da parte. Scollegare il connettore elettrico dell'attuatore farfalla.",
          "9: Svitare i bulloni e rimuovere la camera d'aria (plenum d'aspirazione).",
          "10: Scollegare i connettori elettrici delle bobine d'accensione sollevando la sottile barretta metallica con un cacciavite.",
          "11: Svitare le restanti viti di fissaggio delle bobine d'accensione ed estrarle."
        ]
      },
      {
        headingEn: 'Front Plugs & Spark Plug Installation (Steps 15 - 18)',
        headingIt: 'Candele Anteriori e Installazione (Passaggi 15 - 18)',
        bodyEn: [
          "15: Undo the bolts and remove the front cylinder head cover (left cylinder head).",
          "16: Disconnect electric connection from front ignition coils. Remove cable fastener brackets and move aside.",
          "17: Unscrew remaining fixing screws from ignition coils and remove the coils.",
          "18: Time now to use the ratchet, extension bar & socket removal tool. Insert into the engine block. Turn plug to the left to undo, install new plugs and reassemble."
        ],
        bodyIt: [
          "15: Svitare i bulloni e rimuovere il coperchio della testata anteriore.",
          "16: Scollegare i connettori elettrici dalle bobine anteriori, rimuovere le staffe passacavi e spostarle da parte.",
          "17: Svitare le viti di fissaggio rimanenti delle bobine ed estrarle dai pozzetti.",
          "18: Inserire cricchetto, prolunga e chiave candele nel blocco motore. Svitare in senso antiorario, montare le candele nuove e rimontare il tutto."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/v6sparks/t1a.jpg',
        alt: 'Socket set for V6 spark plugs',
        captionEn: 'Socket set with ratchet and extensions.',
        captionIt: 'Set di chiavi a bussola con cricchetto e prolunghe.'
      },
      {
        src: '/images/techtips/v6sparks/t3.jpg',
        alt: 'Allen keys',
        captionEn: 'Set of Allen keys (5mm is the main one used).',
        captionIt: 'Set di chiavi a brugola (la brugola da 5 mm è la principale utilizzata).'
      },
      {
        src: '/images/techtips/v6sparks/hoseClipPliers.jpg',
        alt: 'Hose Clip Pliers',
        captionEn: 'Hose Clip Pliers for intake runner band clips.',
        captionIt: 'Pinza speciale per le fascette metalliche a scatto dei manicotti d\'aspirazione.'
      },
      {
        src: '/images/techtips/v6sparks/p1.jpg',
        alt: 'V6 24V engine bay before disassembly',
        captionEn: 'Step 1: The V6 24V engine bay before starting disassembly.',
        captionIt: 'Passaggio 1: Il vano motore del V6 Busso 24V prima dello smontaggio.'
      },
      {
        src: '/images/techtips/v6sparks/guide1.jpg',
        alt: 'Technical diagram step 1-2',
        captionEn: 'Technical manual diagram showing hoses and battery negative terminal.',
        captionIt: 'Schema del manuale tecnico con tubazioni e stacco polo negativo batteria.'
      },
      {
        src: '/images/techtips/v6sparks/p7.jpg',
        alt: 'Battery negative terminal disconnected',
        captionEn: 'Step 3: Battery negative terminal disconnected.',
        captionIt: 'Passaggio 3: Morsetto negativo della batteria scollegato.'
      },
      {
        src: '/images/techtips/v6sparks/p2.jpg',
        alt: 'Loosening bands on intake runners',
        captionEn: 'Step 4: Location of bolts and bands on intake runners.',
        captionIt: 'Passaggio 4: Posizione di bulloni e fascette sui collettori d\'aspirazione.'
      },
      {
        src: '/images/techtips/v6sparks/p3.jpg',
        alt: 'Disconnecting breather pipe',
        captionEn: 'Step 6: Disconnecting the breather pipe and dipstick bracket bolt.',
        captionIt: 'Passaggio 6: Scollegamento del tubo di sfiato e staffa astina livello olio.'
      },
      {
        src: '/images/techtips/v6sparks/p4.jpg',
        alt: 'Disconnecting MAF plug',
        captionEn: 'Step 7: Disconnecting the MAF plug (shown in middle of picture).',
        captionIt: 'Passaggio 7: Scollegamento dello spinotto debimetro MAF.'
      },
      {
        src: '/images/techtips/v6sparks/p5.jpg',
        alt: 'Disconnecting throttle body hose and actuator',
        captionEn: 'Step 8: Throttle body hose and actuator wiring disconnected.',
        captionIt: 'Passaggio 8: Manicotto corpo farfallato e cablaggi attuatore scollegati.'
      },
      {
        src: '/images/techtips/v6sparks/p10.jpg',
        alt: 'Air chamber plenum removed',
        captionEn: 'Step 9: Upper air chamber (plenum) lifted off.',
        captionIt: 'Passaggio 9: Polmone d\'aspirazione rimosso, accesso alla bancata posteriore.'
      },
      {
        src: '/images/techtips/v6sparks/p11.jpg',
        alt: 'Rear coil packs exposed',
        captionEn: 'Step 10: Rear coil packs exposed on cylinders 1, 2, 3.',
        captionIt: 'Passaggio 10: Bobine posteriori esposte sui cilindri 1, 2, 3.'
      },
      {
        src: '/images/techtips/v6sparks/p12.jpg',
        alt: 'Rear coils unbolted',
        captionEn: 'Step 11: Rear ignition coils unbolted and removed.',
        captionIt: 'Passaggio 11: Bobine d\'accensione posteriori svitate ed estratte.'
      },
      {
        src: '/images/techtips/v6sparks/p50.jpg',
        alt: 'Front cylinder head cover removed',
        captionEn: 'Step 15: Front cylinder head beauty cover removed.',
        captionIt: 'Passaggio 15: Coperchio superiore della testata anteriore rimosso.'
      },
      {
        src: '/images/techtips/v6sparks/p51.jpg',
        alt: 'Front coil packs',
        captionEn: 'Step 16: Front ignition coil packs on cylinders 4, 5, 6.',
        captionIt: 'Passaggio 16: Bobine d\'accensione anteriori sui cilindri 4, 5, 6.'
      },
      {
        src: '/images/techtips/v6sparks/p52.jpg',
        alt: 'Injector pack and plug well',
        captionEn: 'Step 17: Ignition pack removed, revealing deep spark plug well.',
        captionIt: 'Passaggio 17: Bobina rimossa, pozzetto profondo candela visibile.'
      },
      {
        src: '/images/techtips/v6sparks/p53.jpg',
        alt: 'Spark plug socket inserted in block',
        captionEn: 'Step 18: Spark plug removal socket tool inserted in engine block.',
        captionIt: 'Passaggio 18: Chiave candele inserita nel pozzetto per svitare la candela.'
      },
      {
        src: '/images/techtips/v6sparks/end2.JPG',
        alt: 'Busso V6 fully reassembled',
        captionEn: 'Job finished: The 156 V6 fully reassembled and gleaming.',
        captionIt: 'Lavoro completato: Il V6 Busso perfettamente rimontato e splendente.'
      }
    ],
    cautionEn: "Cover the open intake ports immediately once the plenum is removed. Never drop any washers or bolts inside!",
    cautionIt: "Coprire immediatamente le bocche dei condotti una volta rimosso il plenum. Non far cadere mai rondelle o viti all'interno!"
  },

  // ==========================================
  // 8. AIRBOX FILTER REPLACEMENT (SAM & JEFF)
  // ==========================================
  {
    slug: 'airbox',
    category: 'Motore',
    titleEn: 'Changing Airbox Filter (Overcoming Seized Bolts)',
    titleIt: 'Sostituzione filtro aria (e bulloni bloccati)',
    author: 'Sam (miximup) & Jeff Porter',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'How to replace the air filter and overcome seized rusty bolts and spinning brass inserts.',
    summaryIt: 'Come sostituire il filtro aria originale e superare il problema dei bulloni bloccati con inserti che girano a vuoto.',
    sections: [
      {
        headingEn: 'Tools and Preparation',
        headingIt: 'Attrezzi e Preparazione',
        bodyEn: [
          "Tools required: Rachet screwdriver, 4 inch extension bar, 7mm and 8mm socket piece, slot screwdriver, plyers, plus gas (penetrating oil).",
          "Optional: Soldering iron (if nuts are seized in the plastic)."
        ],
        bodyIt: [
          "Attrezzi richiesti: Cacciavite a cricchetto, prolunga da 4 pollici, bussole da 7 mm e 8 mm, cacciavite a taglio, pinze, olio sbloccante penetrante (Plus Gas).",
          "Opzionale: Saldatore a stagno (se gli inserti in ottone girano a vuoto nella plastica)."
        ]
      },
      {
        headingEn: 'Step-by-Step Walkthrough (Steps 1 - 16)',
        headingIt: 'Procedura Passo-Passo (Passaggi 1 - 16)',
        bodyEn: [
          "1: The car: Alfa 156 2.5 V6 24V. Look at the lower air filter housing in the front left of the engine bay.",
          "2: Disconnect the MAF (Air Mass Meter) sensor plug.",
          "3: Loosen the jubilee clip holding the intake hose to the airbox lid.",
          "4: Release the wire clips securing the top of the airbox.",
          "5: The dreaded airbox bolts: steel bolts threaded into brass nuts pressed into plastic. Penetrating oil is recommended hours before.",
          "6: If the brass nut spins in the plastic housing, apply gentle heat with a soldering iron tip to the bolt head to release the bond, or carefully prise upward.",
          "7: Lift the airbox lid up and slide out the cylindrical air filter element.",
          "8: Inspect the old dirty filter vs the clean replacement filter.",
          "9: Vacuum out any leaves, flies and road debris from the bottom of the airbox canister.",
          "10: Insert the brand new filter, ensuring the rubber end seals seat squarely in the groove.",
          "11: Refit the cover and bolts. Tip: replace rusted factory bolts with stainless bolts and nuts.",
          "12: Reconnect the upper air intake duct and band clips.",
          "13: Reconnect the lower intake duct and plug the MAF connector back in.",
          "Once it's all done you've saved yourself a small fortune, now go spend it on something for the car before the missus smells the money saved! Step 16: Go for a beer!!"
        ],
        bodyIt: [
          "1: L'auto: Alfa 156 2.5 V6 24V. Individuare la scatola filtro aria in basso nel lato sinistro del vano motore.",
          "2: Scollegare lo spinotto del debimetro (MAF).",
          "3: Allentare la fascetta che fissa il manicotto di aspirazione al coperchio della scatola filtro.",
          "4: Sganciare i fermagli metallici che trattengono la parte superiore.",
          "5: I temuti bulloni dell'airbox: viti in acciaio avvitate su boccole in ottone affogate nella plastica. Olio sbloccante consigliato con largo anticipo.",
          "6: Se la boccola gira a vuoto nella plastica, scaldare delicatamente la testa della vite con la punta di un saldatore per ammorbidire la presa, oppure fare leva con cautela.",
          "7: Sollevare il coperchio dell'airbox ed estrarre la cartuccia cilindrica del filtro aria.",
          "8: Confronto tra il vecchio filtro intasato e il nuovo filtro pulito.",
          "9: Aspirare foglie, insetti e sporcizia accumulati sul fondo del cestello dell'airbox.",
          "10: Inserire il filtro nuovo assicurandosi che le guarnizioni di gomma alle estremità combacino perfettamente.",
          "11: Riposizionare il coperchio e serrare i bulloni. Consiglio: sostituire la bulloneria originale arrugginita con viti e dadi inox.",
          "12: Ricollegare il manicotto di aspirazione superiore e le fascette.",
          "13: Ricollegare la tubazione inferiore e reinserire lo spinotto del debimetro.",
          "A lavoro finito avete risparmiato una piccola fortuna: spendetela subito per la macchina prima che la moglie fiuti il risparmio! Passo 16: Andate a farvi una birra!!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/airbox/01.jpg',
        alt: 'Airbox location in engine bay',
        captionEn: 'Step 1: The airbox location down in the engine bay.',
        captionIt: 'Passaggio 1: Posizione dell\'airbox in basso nel vano motore.'
      },
      {
        src: '/images/techtips/airbox/02.jpg',
        alt: 'Disconnecting the MAF sensor',
        captionEn: 'Step 2: Disconnecting the MAF electrical plug.',
        captionIt: 'Passaggio 2: Scollegamento dello spinotto del debimetro MAF.'
      },
      {
        src: '/images/techtips/airbox/03.jpg',
        alt: 'Loosening the intake pipe clip',
        captionEn: 'Step 3: Loosening the intake duct jubilee clip.',
        captionIt: 'Passaggio 3: Allentamento della fascetta del manicotto di aspirazione.'
      },
      {
        src: '/images/techtips/airbox/04.jpg',
        alt: 'Airbox lid clips',
        captionEn: 'Step 4: Releasing the airbox lid spring clips.',
        captionIt: 'Passaggio 4: Sgancio dei fermagli a molla del coperchio.'
      },
      {
        src: '/images/techtips/airbox/05.jpg',
        alt: 'Seized bolt on airbox',
        captionEn: 'Step 5: The seized bolt threaded into the brass insert.',
        captionIt: 'Passaggio 5: Il bullone bloccato nell\'inserto filettato in ottone.'
      },
      {
        src: '/images/techtips/airbox/06.jpg',
        alt: 'Applying penetrating oil',
        captionEn: 'Step 6: Applying penetrating oil (Plusgas) to free the threads.',
        captionIt: 'Passaggio 6: Applicazione di olio sbloccante penetrante per liberare il filetto.'
      },
      {
        src: '/images/techtips/airbox/07.jpg',
        alt: 'Lifting the airbox cover',
        captionEn: 'Step 7: Lifting off the airbox top cover.',
        captionIt: 'Passaggio 7: Sollevamento del coperchio superiore dell\'airbox.'
      },
      {
        src: '/images/techtips/airbox/08.jpg',
        alt: 'Withdrawing the cylindrical air filter',
        captionEn: 'Step 8: Withdrawing the old cylindrical air filter element.',
        captionIt: 'Passaggio 8: Estrazione della vecchia cartuccia cilindrica del filtro.'
      },
      {
        src: '/images/techtips/airbox/09.jpg',
        alt: 'Old dirty filter comparison',
        captionEn: 'Step 9: Old dirty filter showing heavy soot and grit accumulation.',
        captionIt: 'Passaggio 9: Il vecchio filtro sporco con accumulo di fuliggine e sabbia.'
      },
      {
        src: '/images/techtips/airbox/10.jpg',
        alt: 'Inside of airbox canister',
        captionEn: 'Step 10: Cleaning out debris from inside the empty airbox housing.',
        captionIt: 'Passaggio 10: Pulizia dei detriti all\'interno del cestello vuoto.'
      },
      {
        src: '/images/techtips/airbox/11.jpg',
        alt: 'Fitting new air filter',
        captionEn: 'Step 11: Inserting the brand new air filter into the canister.',
        captionIt: 'Passaggio 11: Inserimento del filtro nuovo nel cestello.'
      },
      {
        src: '/images/techtips/airbox/12.jpg',
        alt: 'Securing airbox cover bolts',
        captionEn: 'Step 12: Tightening the cover bolts back down.',
        captionIt: 'Passaggio 12: Serraggio delle viti di chiusura del coperchio.'
      },
      {
        src: '/images/techtips/airbox/13.jpg',
        alt: 'Reconnecting intake pipe',
        captionEn: 'Step 13: Reconnecting intake pipe and securing hose clips.',
        captionIt: 'Passaggio 13: Ricollegamento del manicotto e serraggio delle fascette.'
      },
      {
        src: '/images/techtips/airbox/14.jpg',
        alt: 'Lower intake connection',
        captionEn: 'Step 14: Checking lower intake connection.',
        captionIt: 'Passaggio 14: Verifica del raccordo di aspirazione inferiore.'
      },
      {
        src: '/images/techtips/airbox/15.jpg',
        alt: 'Job completed airbox reassembled',
        captionEn: 'Step 15: Airbox fully reassembled and job complete.',
        captionIt: 'Passaggio 15: Airbox completamente riassemblato, lavoro finito!'
      }
    ]
  },

  // ==========================================
  // 9. STICKING FRONT DOOR HANDLE BUTTON
  // ==========================================
  {
    slug: 'fhandle',
    category: 'Carrozzeria',
    titleEn: 'Fixing a Sticky Front Door Handle',
    titleIt: 'Riparazione pulsante maniglia portiera bloccato',
    author: 'Jeff Porter & Black Beauty (Pat)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Disassembling door card, linkages and exterior aluminium handle to clean corrosion from the button slide rod.',
    summaryIt: 'Smontaggio pannello porta, leveraggi e maniglia esterna in alluminio per rimuovere l\'ossidazione dal perno scorrevole.',
    sections: [
      {
        headingEn: 'Tools and Preparation',
        headingIt: 'Attrezzi e Preparazione',
        bodyEn: [
          "Tools required: 'Flat' screw driver, 'Philips' screwdriver, 4mm & 5mm allen keys, M27 Torx driver, sharp blade to remove sound proofing, fine sandpaper, water resistant marine/lithium grease."
        ],
        bodyIt: [
          "Attrezzi richiesti: Cacciavite a taglio piatto, cacciavite a croce Philips, chiavi a brugola da 4 mm e 5 mm, inserto Torx M27, lama affilata per il telo insonorizzante, carta abrasiva fine, grasso marino/litio resistente all'acqua."
        ]
      },
      {
        headingEn: 'Step-by-Step Door Card & Handle Removal (Steps 1 - 15)',
        headingIt: 'Smontaggio Pannello e Maniglia Passo-Passo (Passaggi 1 - 15)',
        bodyEn: [
          "1: The stuck button problem: button pushed in and won't return, door latch cannot engage.",
          "2: Remove the screw cover and the window button switch unit.",
          "3: Inside the door cavity from removing the window buttons: unbolt armrest screws.",
          "4: Remove speaker grill (pops off) and unscrew the door speaker.",
          "5: Remove mirror triangle cover (pops off), remove tweeter & handle trim surround.",
          "6: Remove puddle light and screw at the bottom of the door card.",
          "7: Door handle is held at 2 locations: open the Torx screw on the door shut edge first, before opening the inside 10mm nut.",
          "8: Use the flat-head screwdriver to GENTLY prise the door card clips off the steel door frame.",
          "9: Door stripped: slice through the butyl bead on the vapor barrier with a sharp blade.",
          "10: Unhook the mechanical linkages: one pops off easily, the lower rod requires gentle levering.",
          "11: Remove the vertical window guide slider rail (held by two 5mm Allen bolts) to make room to extract the handle.",
          "12: Extract the aluminium handle: prise off the top 'OPEN' linkage ball-joint.",
          "13: Disassemble the handle, remove the circlip and slide out the push button rod and spring.",
          "14: Sand away white aluminium corrosion with fine wet & dry paper, grease thoroughly with waterproof grease, polish under the exterior handle recess, and reassemble in reverse.",
          "Step 15: Go for a beer!!"
        ],
        bodyIt: [
          "1: Il problema: il pulsante metallico resta bloccato dentro e la portiera sbatte senza agganciarsi.",
          "2: Rimuovere il gommino coprivite ed estrarre la pulsantiera degli alzacristalli.",
          "3: All'interno dell'incavo aperto dalla pulsantiera, svitare i bulloni del bracciolo.",
          "4: Rimuovere la griglia altoparlante (a scatto) e svitare le viti della cassa audio.",
          "5: Rimuovere il triangolo dello specchietto (a scatto), il tweeter e la cornicetta della maniglia interna.",
          "6: Rimuovere la luce pozzanghera e la vite inferiore sul bordo inferiore del pannello.",
          "7: La maniglia esterna è fissata in due punti: svitare prima la vite Torx sul bordo battuta della portiera, poi il dado da 10 mm dall'interno.",
          "8: Con il cacciavite piatto scalzare DELICATAMENTE le clip perimetrali del pannello dal telaio.",
          "9: Pannello rimosso: incidere il mastice butilico del telo protettivo trasparente con un taglierino.",
          "10: Sganciare i tiranti metallici della serratura: uno scatta facilmente, l'altro richiede una leggera leva.",
          "11: Svitare le due brugole da 5 mm della guida scorrevole del vetro per liberare spazio all'estrazione della maniglia.",
          "12: Estrarre la maniglia in alluminio sganciando lo snodo sferico del tirante superiore di apertura.",
          "13: Smontare la maniglia, togliere il seeger di fermo ed estrarre il perno del pulsante e la molla.",
          "14: Carteggiare l'ossido bianco d'alluminio con carta vetrata fine ad acqua, lubrificare con grasso impermeabile, lucidare la lamiera sotto la maniglia e rimontare a ritroso.",
          "Passo 15: Andate a farvi una birra!!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/fhandle/00stuck.jpg',
        alt: 'Door handle button stuck pushed in',
        captionEn: 'The problem: The front handle button stuck pressed inside the housing.',
        captionIt: 'Il problema: Il pulsante della maniglia anteriore bloccato incastrato all\'interno.'
      },
      {
        src: '/images/techtips/fhandle/01panel-loose.jpg',
        alt: 'Removing window switch pod and armrest screw',
        captionEn: 'Step 2: Screw cover removed and window switch unit unclipped.',
        captionIt: 'Passaggio 2: Tappino rimosso e gruppo alzacristalli sganciato.'
      },
      {
        src: '/images/techtips/fhandle/01panel1.jpg',
        alt: 'Inside cavity screw removal',
        captionEn: 'Step 3: Inside door cavity revealed by window switch removal.',
        captionIt: 'Passaggio 3: Vano interno rivelato dalla rimozione della pulsantiera.'
      },
      {
        src: '/images/techtips/fhandle/02panel2.jpg',
        alt: 'Removing speaker and grille',
        captionEn: 'Step 4: Speaker grille popped off and door speaker unbolted.',
        captionIt: 'Passaggio 4: Griglia dell\'altoparlante sganciata e cassa svitata.'
      },
      {
        src: '/images/techtips/fhandle/03panel3.jpg',
        alt: 'Removing mirror cover and tweeter',
        captionEn: 'Step 5: Mirror corner cover, tweeter and inner handle trim removed.',
        captionIt: 'Passaggio 5: Triangolino specchietto, tweeter e cornice maniglia interna rimossi.'
      },
      {
        src: '/images/techtips/fhandle/04panel4.jpg',
        alt: 'Bottom door card screw and light',
        captionEn: 'Step 6: Puddle light and lower door panel screws.',
        captionIt: 'Passaggio 6: Luce pozzanghera e viti inferiori del pannello.'
      },
      {
        src: '/images/techtips/fhandle/05panel5.jpg',
        alt: 'Door edge Torx screw',
        captionEn: 'Step 7: Torx screw on door shut edge securing exterior handle.',
        captionIt: 'Passaggio 7: Vite Torx sul bordo battuta porta che fissa la maniglia esterna.'
      },
      {
        src: '/images/techtips/fhandle/08panel-remove.jpg',
        alt: 'Prising door card off clips',
        captionEn: 'Step 8: Prising the perimeter clips to detach door card from frame.',
        captionIt: 'Passaggio 8: Scalzo delle clip perimetrali per staccare il pannello dallo sportello.'
      },
      {
        src: '/images/techtips/fhandle/07stripped-door.jpg',
        alt: 'Stripped door frame and vapor barrier',
        captionEn: 'Step 9: Stripped door with plastic membrane peeled back.',
        captionIt: 'Passaggio 9: Portiera a nudo con telo protettivo sollevato.'
      },
      {
        src: '/images/techtips/fhandle/08linkage.jpg',
        alt: 'Door latch mechanical linkages',
        captionEn: 'Step 10: Mechanical linkages connecting handle to latch.',
        captionIt: 'Passaggio 10: Tiranti metallici tra maniglia e serratura.'
      },
      {
        src: '/images/techtips/fhandle/09slider.jpg',
        alt: 'Window channel slider rail removal',
        captionEn: 'Step 11: Removing the window channel guide rail (two 5mm Allen bolts).',
        captionIt: 'Passaggio 11: Rimozione della guida scorrevole del finestrino (due brugole da 5 mm).'
      },
      {
        src: '/images/techtips/fhandle/10handle-out.jpg',
        alt: 'Exterior aluminium handle extracted',
        captionEn: 'Step 12: Exterior cast aluminium handle extracted from door.',
        captionIt: 'Passaggio 12: Maniglia esterna in alluminio fuso estratta dalla portiera.'
      },
      {
        src: '/images/techtips/fhandle/12polished.jpg',
        alt: 'Polishing door paint under handle recess',
        captionEn: 'Step 13: Polishing the body paint under the handle recess while removed.',
        captionIt: 'Passaggio 13: Lucidatura della lamiera nella nicchia maniglia a pezzo smontato.'
      },
      {
        src: '/images/techtips/fhandle/11strip-handle.jpg',
        alt: 'Handle push button disassembled and cleaned',
        captionEn: 'Step 14: Button disassembled, corrosion sanded off and greased.',
        captionIt: 'Passaggio 14: Pulsante disassemblato, ossido carteggiato e lubrificato.'
      }
    ]
  },

  // ==========================================
  // 10. CLEANING THE MAF SENSOR (JEFF PORTER)
  // ==========================================
  {
    slug: 'maf',
    category: 'Motore',
    titleEn: 'Cleaning the MAF Sensor',
    titleIt: 'Debimetro / Sensore MAF: pulizia e rimozione viti Torx',
    author: 'Jeff Porter & Anders',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Disassembling MAF from intake duct, removing tamper-proof 5-point security Torx screws, Isopropyl alcohol cleaning.',
    summaryIt: 'Smontaggio sensore debimetro, rimozione viti Torx di sicurezza a 5 punte, pulizia con alcol isopropilico e reset batteria.',
    sections: [
      {
        headingEn: 'The MAF Problem',
        headingIt: 'Il Problema del Sensore MAF',
        bodyEn: [
          "The MAF, infamous for its failures. Symptoms: sluggish acceleration, flat spots, hesitations under load. Cleaning can restore performance before spending on a replacement unit."
        ],
        bodyIt: [
          "Il debimetro (MAF), famigerato per i suoi decadimenti prestazionali. Sintomi: accelerazione pigra, vuoti di erogazione, esitazioni sotto carico. La pulizia può ripristinare il corretto funzionamento prima di acquistare un ricambio costoso."
        ]
      },
      {
        headingEn: 'Tools Required',
        headingIt: 'Attrezzi Necessari',
        bodyEn: [
          "Torx screwdrivers / T-20H Security bit (with center hole). Long slot screwdriver, pliers, Isopropyl Alcohol (or residue-free electronic cleaner)."
        ],
        bodyIt: [
          "Cacciaviti Torx / Inserto di sicurezza T-20H (con foro centrale di sicurezza). Cacciavite a taglio lungo, pinze, Alcol Isopropilico (o pulitore per contatti elettronici a secco)."
        ]
      },
      {
        headingEn: 'Step-by-Step Procedure (Steps 1 - 15)',
        headingIt: 'Procedura Passo-Passo (Passaggi 1 - 15)',
        bodyEn: [
          "1: Open the bonnet and look down at the intake ducting.",
          "2: Close-up of the MAF housing inline with the air intake.",
          "3: Removal: Remove screws & clips securing the intake ducting.",
          "4: Removal: Remove lower screw by inserting the long screwdriver through the front grille vent.",
          "5: Pull out the electrical connector plug from the MAF unit.",
          "6: Lift out the intake tube section with the MAF sensor.",
          "7: Inspect the Torx Security screws with center anti-tamper pin holding the sensor insert into the tube.",
          "8: Use the T-20H security bit to unscrew the insert. If stripped, grip the screw heads with pliers or notch with a Dremel.",
          "9: Carefully extract the delicate sensor insert from the plastic duct.",
          "10: Spray pure Isopropyl alcohol through the sensor sampling channel to flush grime off the platinum film. NEVER touch the element with cotton buds or fingers! Let it air-dry completely.",
          "11: Replace old security screws with standard screws (trimming length if needed).",
          "12: Reinstall sensor insert into duct, reconnect intake piping and plug the electrical connector back in.",
          "13: ECU calibration: Disconnect battery for 10 minutes (ENSURE YOU HAVE STEREO CODE!), reconnect, start engine and let idle untouched for 15 minutes, then test drive.",
          "Step 15: The car should now run much smoother!"
        ],
        bodyIt: [
          "1: Aprire il cofano e individuare il condotto di aspirazione in basso.",
          "2: Primo piano del debimetro MAF montato in linea sul tubo d'aspirazione.",
          "3: Rimozione: svitare le viti e allentare le fascette del condotto.",
          "4: Rimozione: svitare la vite inferiore inserendo il cacciavite lungo attraverso la griglia anteriore.",
          "5: Scollegare lo spinotto elettrico del debimetro premendo la linguetta.",
          "6: Sollevare il tronchetto del tubo di aspirazione contenente il debimetro.",
          "7: Osservare le speciali viti Torx di sicurezza con perno centrale che fissano il sensore al condotto.",
          "8: Svitare le viti con l'inserto forato T-20H. Se bloccate, fare presa sulla testa con una pinza o intagliare la testa.",
          "9: Estrarre con estrema cautela il sensore a cartuccia dal condotto in plastica.",
          "10: Spruzzare alcol isopropilico puro nel canalino di campionamento per sciogliere la patina d'olio. NON TOCCARE MAI il filamento con dita o cotton fioc! Lasciare asciugare perfettamente all'aria.",
          "11: Sostituire le vecchie viti antimanomissione con viti a croce normali (accorciandole se necessario).",
          "12: Rimontare il sensore nel condotto, riagganciare i tubi e reinserire lo spinotto elettrico.",
          "13: Taratura ECU: staccare la batteria per 10 minuti (ASSICURARSI DI AVERE IL CODICE RADIO!), ricollegare, avviare e lasciare al minimo senza toccare il gas per 15 minuti, poi fare un giro di prova.",
          "Passo 15: Il motore ora girerà molto più fluido e pronto!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/MAFguide/tools.jpg',
        alt: 'Tools for MAF cleaning',
        captionEn: 'Tools required: Security Torx bit, screwdrivers, cleaner.',
        captionIt: 'Attrezzi richiesti: Inserto Torx di sicurezza forato, cacciaviti, detergente.'
      },
      {
        src: '/images/techtips/MAFguide/01.jpg',
        alt: 'MAF location looking down engine bay',
        captionEn: 'Step 1: Looking down at the MAF location behind the front headlamp.',
        captionIt: 'Passaggio 1: Vista dall\'alto della posizione debimetro dietro al faro.'
      },
      {
        src: '/images/techtips/MAFguide/02.jpg',
        alt: 'MAF close up in intake tract',
        captionEn: 'Step 2: Close-up of the MAF sensor unit in the intake tube.',
        captionIt: 'Passaggio 2: Primo piano del debimetro inserito nel condotto.'
      },
      {
        src: '/images/techtips/MAFguide/03.JPG',
        alt: 'Removing intake screws and clips',
        captionEn: 'Step 3: Removing screws and clip on intake duct.',
        captionIt: 'Passaggio 3: Rimozione di viti e fascette del condotto.'
      },
      {
        src: '/images/techtips/MAFguide/04a.JPG',
        alt: 'Accessing lower screw through front grille',
        captionEn: 'Step 4: Inserting long screwdriver through front vent to reach lower screw.',
        captionIt: 'Passaggio 4: Inserimento del cacciavite lungo attraverso la presa d\'aria frontale.'
      },
      {
        src: '/images/techtips/MAFguide/05.jpg',
        alt: 'Unplugging MAF wiring connector',
        captionEn: 'Step 5: Pulling out the electrical multi-plug connector.',
        captionIt: 'Passaggio 5: Scollegamento dello spinotto elettrico del sensore.'
      },
      {
        src: '/images/techtips/MAFguide/06_AirBoxRemoved.jpg',
        alt: 'Airbox duct section lifted out',
        captionEn: 'Step 6: Lifting out the intake duct with MAF unit.',
        captionIt: 'Passaggio 6: Estrazione del tratto di condotto con il sensore.'
      },
      {
        src: '/images/techtips/MAFguide/07_MAFInPlaceWithTorx.jpg',
        alt: 'Security Torx screws on MAF',
        captionEn: 'Step 7: Torx Security screws holding the sensor insert in place.',
        captionIt: 'Passaggio 7: Viti Torx di sicurezza che bloccano il sensore nel condotto.'
      },
      {
        src: '/images/techtips/MAFguide/09a_MAFRemoved.jpg',
        alt: 'MAF sensor insert extracted from tube',
        captionEn: 'Step 9: Sensor insert carefully extracted from plastic body.',
        captionIt: 'Passaggio 9: Cartuccia del sensore estratta delicatamente dal tubo.'
      },
      {
        src: '/images/techtips/MAFguide/10aMAF.jpg',
        alt: 'Cleaning sensor element with alcohol',
        captionEn: 'Step 10: Flushing sensor channel with Isopropyl Alcohol spray.',
        captionIt: 'Passaggio 10: Lavaggio a spruzzo del sensore con alcol isopropilico.'
      },
      {
        src: '/images/techtips/MAFguide/11_NewScrewOldTorx.jpg',
        alt: 'Replacement screws vs factory security Torx',
        captionEn: 'Step 11: Replacing tamper-proof screws with standard screws.',
        captionIt: 'Passaggio 11: Sostituzione delle viti antimanomissione con viti standard.'
      },
      {
        src: '/images/techtips/MAFguide/13_DremelNewScrews.jpg',
        alt: 'Trimming screws to correct length',
        captionEn: 'Step 12: Trimming replacement screws to correct thread depth.',
        captionIt: 'Passaggio 12: Accorciamento a misura della filettatura delle nuove viti.'
      },
      {
        src: '/images/techtips/MAFguide/14_disconnectBattery.JPG',
        alt: 'Disconnecting battery for ECU reset',
        captionEn: 'Step 13: Disconnecting battery for 10 minutes to reset ECU trim tables.',
        captionIt: 'Passaggio 13: Stacco batteria per 10 minuti per il reset dei parametri autoadattativi ECU.'
      },
      {
        src: '/images/techtips/MAFguide/15.jpg',
        alt: 'Job completed MAF cleaned',
        captionEn: 'Step 15: MAF cleaned and reinstalled, restoring sharp engine response.',
        captionIt: 'Passaggio 15: Debimetro pulito e rimontato, erogazione brillante ripristinata.'
      }
    ],
    cautionEn: "NEVER touch the platinum hot film or resistor with cotton buds or tools. The element will break immediately.",
    cautionIt: "NON toccare MAI il film caldo di platino o le resistenze con cotton fioc o attrezzi: il filamento si spezzerà all'istante."
  },

  // ==========================================
  // 11. COOLANT EXPANSION TANK REPLACEMENT
  // ==========================================
  {
    slug: 'coolant',
    category: 'Raffreddamento',
    titleEn: 'Coolant Reservoir Tank Replacement',
    titleIt: 'Sostituzione vaschetta liquido refrigerante',
    author: 'Jeff Porter & Black Beauty (Pat)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Replacing discolored or micro-cracked coolant expansion bottle: step-by-step with 7mm socket, avoiding coolant loss.',
    summaryIt: 'Sostituzione vaschetta di espansione ingiallita o fessurata: procedura passo-passo con bussola da 7 mm senza sprecare liquido.',
    sections: [
      {
        headingEn: 'Preparation & Safety Warning',
        headingIt: 'Preparazione e Avvertenza Sicurezza',
        bodyEn: [
          "FIRSTLY .... MAKE SURE THE CAR IS COLD!!! Else you WILL burn yourself with the hot coolant!!",
          "The reservoir is held in by 3 screws & attaches to 2 pipes. Tools: 7mm socket piece, ratchet, extension bar, flat head screw driver, pliers."
        ],
        bodyIt: [
          "PER PRIMA COSA .... ASSICURARSI CHE IL MOTORE SIA COMPLETAMENTE FREDDO!!! Altrimenti vi ustionerete con il liquido refrigerante bollente in pressione!!",
          "La vaschetta è fissata da 3 viti e collegata a 2 tubi. Attrezzi: bussola da 7 mm, cricchetto, prolunga, cacciavite a taglio piatto, pinze."
        ]
      },
      {
        headingEn: 'Step-by-Step Replacement (Steps 1 - 14)',
        headingIt: 'Sostituzione Passo-Passo (Passaggi 1 - 14)',
        bodyEn: [
          "1: Inspect old filthy discolored coolant reservoir vs the new replacement bottle.",
          "2: Remove the first two screws at the bottom using ratchet, extension bar and 7mm socket.",
          "3: Remove the top mounting screw using the same tools.",
          "4: Detach the small top return feed pipe: prise off clip with flat screwdriver and wiggle pipe free.",
          "5: Tip the reservoir up so no coolant spills out. Bung the top return hole with a small screwdriver/card.",
          "6: Cover nearby electrical components with a plastic bag as a safeguard.",
          "7: Loosen the lower big sender pipe hose clip with the 7mm socket.",
          "8: Slowly slide off the lower pipe and lift the old reservoir clear.",
          "9: Position the brand new gleaming reservoir.",
          "10: Re-attach the lower sender pipe and tighten clamp securely.",
          "11: Screw back in the 2 lower and 1 upper mounting screws.",
          "12: Re-attach top return pipe with clip pliers.",
          "13: Fill up with fresh antifreeze coolant mix, bleed air and check for leaks.",
          "14: Final step and this is important... Go for a beer!!",
          "Extra tip: Black Beauty (Pat) suggests cleaning up the old reservoir with lime scale remover to keep as a spare."
        ],
        bodyIt: [
          "1: Ispezione della vecchia vaschetta ingiallita e opaca a confronto con il ricambio nuovo.",
          "2: Svitare le prime due viti inferiori con cricchetto, prolunga e bussola da 7 mm.",
          "3: Svitare la vite di fissaggio superiore.",
          "4: Staccare il tubicino di ritorno superiore: scalzare la fascetta con il cacciavite piatto ed estrarre il tubo.",
          "5: Inclinare la vaschetta verso l'alto per non far uscire il liquido, e tappare il beccuccio superiore.",
          "6: Proteggere i cablaggi elettrici circostanti coprendoli con una busta di plastica.",
          "7: Allentare la fascetta del manicotto inferiore grande con la bussola da 7 mm.",
          "8: Sfilare delicatamente il tubo inferiore ed estrarre la vecchia vaschetta.",
          "9: Posizionare la nuova vaschetta candida nel vano motore.",
          "10: Ricollegare il manicotto inferiore e serrare la fascetta.",
          "11: Riavvitare i due bulloni inferiori e il bullone superiore.",
          "12: Ricollegare il tubicino di ritorno superiore con la fascetta.",
          "13: Rabboccare con liquido refrigerante fresco (miscela antigelo), spurgare e verificare tenuta.",
          "14: Ultimo passaggio fondamentale... Andate a farvi una birra!!",
          "Consiglio extra: Black Beauty (Pat) suggerisce di pulire la vecchia vaschetta con anticalcare per tenerla di scorta."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/coolant/01.jpg',
        alt: 'Old dirty coolant reservoir',
        captionEn: 'Step 1: The old filthy, discolored coolant reservoir.',
        captionIt: 'Passaggio 1: La vecchia vaschetta sporca e ingiallita.'
      },
      {
        src: '/images/techtips/coolant/03.jpg',
        alt: 'Comparing old reservoir with brand new white bottle',
        captionEn: 'Comparing the old degraded bottle with the brand new clean replacement.',
        captionIt: 'Confronto tra la vecchia vaschetta degradata e il ricambio nuovo fiammante.'
      },
      {
        src: '/images/techtips/coolant/04.jpg',
        alt: 'Removing bottom screws with 7mm socket',
        captionEn: 'Step 2: Undoing bottom mounting screws with 7mm socket and ratchet.',
        captionIt: 'Passaggio 2: Svitamento delle viti inferiori con bussola da 7 mm.'
      },
      {
        src: '/images/techtips/coolant/05.jpg',
        alt: 'Removing top mounting screw',
        captionEn: 'Step 3: Removing the upper reservoir fixing screw.',
        captionIt: 'Passaggio 3: Rimozione della vite di fissaggio superiore.'
      },
      {
        src: '/images/techtips/coolant/06.jpg',
        alt: 'Detaching upper return pipe',
        captionEn: 'Step 4: Prising clip and detaching the small top return pipe.',
        captionIt: 'Passaggio 4: Sgancio della fascetta e stacco del tubicino di ritorno superiore.'
      },
      {
        src: '/images/techtips/coolant/07.jpg',
        alt: 'Tipping reservoir to avoid spilling coolant',
        captionEn: 'Step 5: Tipping reservoir upwards to retain coolant.',
        captionIt: 'Passaggio 5: Inclinazione della vaschetta per non rovesciare il refrigerante.'
      },
      {
        src: '/images/techtips/coolant/08.jpg',
        alt: 'Bunging the return hole',
        captionEn: 'Step 6: Bunging the top outlet hole.',
        captionIt: 'Passaggio 6: Beccuccio superiore tappato provvisoriamente.'
      },
      {
        src: '/images/techtips/coolant/09.jpg',
        alt: 'Covering electrics and loosening lower hose',
        captionEn: 'Step 7: Electrics protected with plastic bag, loosening bottom hose clamp.',
        captionIt: 'Passaggio 7: Impianto elettrico protetto e allentamento manicotto inferiore.'
      },
      {
        src: '/images/techtips/coolant/10.jpg',
        alt: 'Detaching lower hose',
        captionEn: 'Step 8: Sliding off the bottom coolant supply hose.',
        captionIt: 'Passaggio 8: Sfilamento del manicotto inferiore di alimentazione.'
      },
      {
        src: '/images/techtips/coolant/12.jpg',
        alt: 'Fitting new expansion tank',
        captionEn: 'Step 9: Aligning and seating the brand new white expansion tank.',
        captionIt: 'Passaggio 9: Posizionamento della nuova vaschetta d\'espansione.'
      },
      {
        src: '/images/techtips/coolant/14.jpg',
        alt: 'Reattaching lower hose',
        captionEn: 'Step 10: Reconnecting lower hose and clamping securely.',
        captionIt: 'Passaggio 10: Riconnessione del manicotto inferiore e serraggio.'
      },
      {
        src: '/images/techtips/coolant/16.jpg',
        alt: 'Bolting down reservoir screws',
        captionEn: 'Step 11: Bolting down the 3 mounting screws.',
        captionIt: 'Passaggio 11: Serraggio delle 3 viti di ancoraggio.'
      },
      {
        src: '/images/techtips/coolant/19.jpg',
        alt: 'Reattaching top return pipe',
        captionEn: 'Step 12: Reattaching top return pipe with hose clip.',
        captionIt: 'Passaggio 12: Ricollegamento del tubicino di ritorno superiore.'
      },
      {
        src: '/images/techtips/coolant/21.jpg',
        alt: 'Filled with coolant and checked for leaks',
        captionEn: 'Step 13: Filled with fresh coolant mix and verified leak-free.',
        captionIt: 'Passaggio 13: Impianto riempito a livello e collaudo tenuta.'
      },
      {
        src: '/images/techtips/coolant/22.jpg',
        alt: 'Finished new vs old comparison',
        captionEn: 'Finished: Clean gleaming engine bay with fresh reservoir.',
        captionIt: 'Risultato finale: Vano motore splendente con vaschetta candida.'
      }
    ],
    cautionEn: "NEVER attempt on a hot engine! Pressurized boiling coolant causes severe scalding burns.",
    cautionIt: "NON operare MAI a motore caldo! Il liquido in pressione bollente provoca gravissime ustioni."
  },

  // ==========================================
  // 12. HEADLIGHT REMOVAL & GTA BLACK CONVERSION
  // ==========================================
  {
    slug: 'headlight',
    category: 'Carrozzeria',
    titleEn: 'Headlight Replacement & Removal Guide',
    titleIt: 'Sostituzione gruppi ottici e smontaggio paraurti',
    author: 'Jeff Porter & Jon',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Complete illustrated step-by-step walkthrough for bumper removal, hidden arch screws, headlight extraction and testing.',
    summaryIt: 'Guida fotografica completa passo-passo per smontaggio paraurti, viti passaruota, estrazione fari e collaudo.',
    sections: [
      {
        headingEn: 'Preparation & Tools',
        headingIt: 'Preparazione e Attrezzi',
        bodyEn: [
          "Tips: Lefty loose, Righty tights. Jack up the car using the jack point, remove the front road wheel to access the wheel arch liner.",
          "Tools required: Jack, wheel wrench, Torx T30 driver, ratchet screwdriver, socket set."
        ],
        bodyIt: [
          "Consigli: Senso antiorario per svitare, orario per serrare. Sollevare l'auto sul punto di sollevamento del cric e smontare la ruota anteriore per accedere al parasassi.",
          "Attrezzi: Cric, chiave ruote, inserto Torx T30, cacciavite a cricchetto, set bussole."
        ]
      },
      {
        headingEn: 'Step-by-Step Bumper & Headlight Removal (Steps 1 - 16)',
        headingIt: 'Procedura di Smontaggio Passo-Passo (Passaggi 1 - 16)',
        bodyEn: [
          "1: Jack up the car using the jack point.",
          "2: Remove the front road wheel.",
          "3: Remove the bonnet latch protective plastic cover.",
          "4: Unscrew the air vane grilles on each side of the front grille badge.",
          "5: Pull out the air vanes (requires a bit of firm pulling).",
          "6: Identify the perimeter Torx bolts holding the bumper.",
          "7: Remove the screws underneath the front of the bumper.",
          "8: Remove the wheel arch lining screws to access the inside bumper bolts.",
          "9: Looking up inside the wheel arch lining, remove the 2 internal screws using the ratchet screwdriver and T30 head.",
          "10: Remove the 4 screws on top of the bumper plus the side popper clip. The bumper will now hang loose — support it underneath!",
          "11: Access the headlight mounting bolts: top middle and bottom left (hidden behind the bumper edge).",
          "12: Undo the 2 main bolts securing the headlamp unit.",
          "13: Pull the headlight firmly forward out of the ball popper joint clip.",
          "14: Unplug the electrical multi-pin wiring plugs from the back of the headlamp.",
          "15: Extract the headlight unit. Test the new headlight by resting it on the engine bay and reconnecting the plugs.",
          "16: TIP: Check that the internal red ground wire is firmly clipped to the main silver reflector frame, otherwise bulbs will not illuminate!",
          "Reassemble in reverse order. I hope this helps some of you out! - Jeff Porter"
        ],
        bodyIt: [
          "1: Sollevare l'auto posizionando il cric sul punto di sollevamento prescritto.",
          "2: Rimuovere la ruota anteriore.",
          "3: Rimuovere il coperchietto in plastica di protezione della serratura cofano.",
          "4: Svitare le griglie delle prese d'aria ai lati dello scudetto centrale.",
          "5: Estrarre le griglie tirando verso l'esterno con decisione.",
          "6: Individuare le viti Torx di fissaggio del paraurti.",
          "7: Svitare le viti inferiori sotto al bordo anteriore del paraurti.",
          "8: Svitare le viti del parasassi passaruota per accedere ai bulloni interni nascosti.",
          "9: Guardando verso l'alto all'interno del passaruota, svitare le 2 viti interne con il cacciavite a cricchetto e inserto T30.",
          "10: Rimuovere le 4 viti superiori e sganciare la clip a scatto laterale. Il paraurti ora si scosterà: sostenerlo dal basso!",
          "11: Individuare i punti di fissaggio del faro: staffa superiore centrale e attacco inferiore sinistro (nascosto dal paraurti).",
          "12: Svitare i 2 bulloni di fissaggio del faro.",
          "13: Tirare il gruppo ottico in avanti con decisione per scalzarlo dal perno a sfera a scatto.",
          "14: Scollegare i connettori elettrici multipolari dal retro del faro.",
          "15: Estrarre il faro. Prima di rimontare, collegare i cavi al nuovo faro e collaudare il funzionamento di tutte le luci.",
          "16: CONSIGLIO: Verificare che il filo rosso interno sia ben collegato alla parabola metallica: se staccato, la lampada non funzionerà!",
          "Rimontare procedendo a ritroso. Spero che questo aiuti molti di voi! - Jeff Porter"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/headlight/IMG_2441.jpg',
        alt: 'Jacking up car and removing wheel',
        captionEn: 'Step 1-2: Jacking up the car and removing front wheel for arch access.',
        captionIt: 'Passaggio 1-2: Sollevamento con cric e smontaggio ruota per accedere al passaruota.'
      },
      {
        src: '/images/techtips/headlight/STEP_010.jpg',
        alt: 'Bonnet latch protective cover',
        captionEn: 'Step 3: Removing the bonnet latch protective plastic cover.',
        captionIt: 'Passaggio 3: Rimozione del coperchietto protettivo della chiusura cofano.'
      },
      {
        src: '/images/techtips/headlight/STEP_012.jpg',
        alt: 'Unscrewing air vanes',
        captionEn: 'Step 4: Unscrewing the air vent grilles on each side of the scudetto.',
        captionIt: 'Passaggio 4: Svitamento delle griglie diffusore ai lati dello scudetto.'
      },
      {
        src: '/images/techtips/headlight/STEP_014.jpg',
        alt: 'Pulling out air vanes',
        captionEn: 'Step 5: Pulling out the grille vanes from their snap clips.',
        captionIt: 'Passaggio 5: Estrazione a scatto delle griglie frontali.'
      },
      {
        src: '/images/techtips/headlight/STEP_020a.jpg',
        alt: 'Undoing lower bumper screws',
        captionEn: 'Step 7: Undoing screws along the bottom edge of the bumper.',
        captionIt: 'Passaggio 7: Rimozione delle viti inferiori sul fondo del paraurti.'
      },
      {
        src: '/images/techtips/headlight/STEP_024.jpg',
        alt: 'Wheel arch liner screws',
        captionEn: 'Step 8: Loosening wheel arch liner screws to reach internal bolts.',
        captionIt: 'Passaggio 8: Viti del riparo parasassi per accedere ai bulloni interni.'
      },
      {
        src: '/images/techtips/headlight/STEP_028a.jpg',
        alt: 'Looking up wheel arch at internal bumper screws',
        captionEn: 'Step 9: View up the wheel arch at the 2 internal bumper mounting screws.',
        captionIt: 'Passaggio 9: Vista interna al passaruota con le 2 viti interne del paraurti.'
      },
      {
        src: '/images/techtips/headlight/STEP_030.jpg',
        alt: 'Holding back arch liner to undo screws',
        captionEn: 'Step 9: Holding back the arch liner and unscrewing with T30 Torx.',
        captionIt: 'Passaggio 9: Divaricazione del parasassi e svitamento con Torx T30.'
      },
      {
        src: '/images/techtips/headlight/STEP_040.jpg',
        alt: 'Top bumper bolts and side popper clip',
        captionEn: 'Step 10: Top bumper screws and popping the side clip free.',
        captionIt: 'Passaggio 10: Viti superiori e sgancio della clip laterale del paraurti.'
      },
      {
        src: '/images/techtips/headlight/STEP_044.jpg',
        alt: 'Bumper hanging loose revealing lower headlight mount',
        captionEn: 'Step 11: Bumper pulled forward, revealing the lower headlamp mounting bolt.',
        captionIt: 'Passaggio 11: Paraurti scostato che rivela il terzo bullone inferiore del faro.'
      },
      {
        src: '/images/techtips/headlight/STEP_051.jpg',
        alt: 'Undoing headlight bolts',
        captionEn: 'Step 12: Undoing the main headlight bolts.',
        captionIt: 'Passaggio 12: Svitamento dei bulloni di ancoraggio del faro.'
      },
      {
        src: '/images/techtips/headlight/STEP_055.jpg',
        alt: 'Headlight ball popper joint',
        captionEn: 'Step 13: Pulling the headlamp firmly forward out of the ball popper joint.',
        captionIt: 'Passaggio 13: Estrazione del faro dal perno a scatto a sfera.'
      },
      {
        src: '/images/techtips/headlight/STEP_060.jpg',
        alt: 'Unplugging headlight cables',
        captionEn: 'Step 14: Disconnecting electrical multi-pin wiring sockets.',
        captionIt: 'Passaggio 14: Scollegamento dei connettori elettrici posteriori.'
      },
      {
        src: '/images/techtips/headlight/STEP_065.jpg',
        alt: 'Bench testing new headlight on car',
        captionEn: 'Step 15: Resting replacement headlamp on engine to verify bulb operation.',
        captionIt: 'Passaggio 15: Collaudo preliminare del nuovo faro appoggiato nel vano motore.'
      },
      {
        src: '/images/techtips/headlight/STEP_067.jpg',
        alt: 'Checking red internal ground wire',
        captionEn: 'Step 16: CRITICAL TIP - check that the red internal ground wire is firmly clipped to reflector frame!',
        captionIt: 'Passaggio 16: CONSIGLIO CRITICO - verificare che il cavo rosso interno di massa sia ben agganciato!'
      },
      {
        src: '/images/techtips/headlight/end3.JPG',
        alt: 'New headlight installed and working',
        captionEn: 'Job done: Headlight reassembled, aligned and gleaming.',
        captionIt: 'Lavoro completato: Gruppo ottico rimontato, allineato e funzionante.'
      }
    ]
  },

  // ==========================================
  // 13. REPLACING CENTER CONSOLE BULBS (JEFF PORTER)
  // ==========================================
  {
    slug: 'bulbs',
    category: 'Interni',
    titleEn: 'Replacing Center Console Bulbs',
    titleIt: 'Sostituzione lampadine plancia centrale / comandi clima',
    author: 'Jeff Porter',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Step-by-step guide with 24 photos for removing radio, ashtray, gear gaiter and center console to replace dead climate control bulbs.',
    summaryIt: 'Guida passo-passo con 24 foto per smontare autoradio, posacenere, cuffia cambio e consolle centrale per cambiare le lampadine bruciate.',
    sections: [
      {
        headingEn: 'The Problem & Parts Needed',
        headingIt: 'Il Problema e i Ricambi Necessari',
        bodyEn: [
          "One of Alfa Romeo's greatest designs is the ability to replace the bulbs in the center console temperature controls easily. OK, thats a lie.",
          "If you're unlucky enough to have one of the bulbs behind the temperature controls die on you and you don't wish to pay a stealer a bulk load of money to replace a bulb, then this guide will help you out.",
          "Note: This guide was created with a 1998 V6 156, the process may differ slightly in other models.",
          "Bulbs required: Motoworld - Autobulb [indicator & panel] -- RW286 12v 1.2w Capless W2x4.6d.",
          "Tools required: Torx screwdrivers, Allen keys, slot screwdriver, radio release keys (or wire coat hanger), 8mm socket."
        ],
        bodyIt: [
          "Uno dei massimi capolavori ingegneristici dell'Alfa Romeo è la facilità con cui si possono cambiare le lampadine dei comandi clima della plancia centrale. Ok, stiamo scherzando.",
          "Se avete la sfortuna di avere una lampadina bruciata dietro alle manopole della temperatura e non volete regalare un capitale alla concessionaria per una lampadina da 50 centesimi, questa guida vi spiegherà ogni passaggio.",
          "Nota: Guida realizzata su Alfa 156 2.5 V6 del 1998; su altre serie la procedura può variare leggermente.",
          "Lampadine richieste: Tuttovetro sub-miniatura 12V 1.2W attacco T5 (W2x4.6d / RW286).",
          "Attrezzi richiesti: Cacciaviti Torx, chiavi a brugola, cacciavite a taglio, chiavette estrazione autoradio (o filo di ferro di una gruccia), bussola da 8 mm."
        ]
      },
      {
        headingEn: 'Step-by-Step Disassembly (Steps 1 - 17)',
        headingIt: 'Smontaggio Passo-Passo (Passaggi 1 - 17)',
        bodyEn: [
          "1: Remove the stereo unit using release keys (or two pieces of wire coat hanger). Once out, you can leave cables attached if long enough.",
          "2: Remove the stereo cage by bending out retaining metal tabs.",
          "3: Inside the stereo cavity, locate and remove the two Torx screws securing the upper console.",
          "4: Open ashtray, pull out the removable tray, and remove the two screws holding the ashtray frame.",
          "5: Lift off the gearstick leather gaiter surround (pops up from the tunnel). Put the gear lever into 2nd to give yourself clearance.",
          "6: Remove the lower console screws revealed by the gear gaiter removal.",
          "7: Gently ease the center console fascia away from the dashboard.",
          "8: Behind the console, the climate control module is held by 4 screws — remove them.",
          "9: Disconnect or maneuver the wiring harness to access the back of the heater control unit.",
          "10: Look at the back of the module: you can see the three black bulb holders corresponding to the three dials.",
          "11: Twist the bulb holder 90 degrees with small pliers or flat screwdriver to extract it.",
          "12: If replacing capless bulbs, pull the old 1.2W bulb out of the holder, insert new bulb, and test with multimeter.",
          "13: If internal contacts came loose or bulb was soldered, resolder the contact tab.",
          "14: Plug the harness back in, turn on the ignition and sidelights to verify all 3 dials illuminate brightly!",
          "15: Reassemble everything in reverse order. Congratulations, you conquered the dreaded center console bulbs!"
        ],
        bodyIt: [
          "1: Estrarre l'autoradio con le chiavette di sblocco (o spezzoni di gruccia metallica). Se i cavi sono lunghi, potete lasciarli collegati.",
          "2: Rimuovere il cestello metallico dell'autoradio raddrizzando le alette piegate.",
          "3: Nel vano autoradio individuare e svitare le due viti Torx che fissano la parte superiore della consolle.",
          "4: Aprire il posacenere, estrarre la vaschetta e svitare le due viti di fissaggio della sede posacenere.",
          "5: Sollevare la cornicetta della cuffia del cambio in pelle (a scatto sul tunnel). Inserire la seconda marcia per avere spazio di manovra.",
          "6: Svitare le viti inferiori della consolle scoperte rimuovendo la cuffia del cambio.",
          "7: Scostare delicatamente il pannello in alluminio/finto legno della consolle dalla plancia.",
          "8: Dietro alla consolle, il gruppo comandi riscaldamento/clima è fissato da 4 viti: svitarle.",
          "9: Spostare i connettori elettrici per accedere al retro del blocco comandi clima.",
          "10: Sul retro del gruppo si notano i tre portalampada neri corrispondenti alle tre manopole.",
          "11: Ruotare il portalampada di un quarto di giro con una pinzetta o cacciavite piatto ed estrarlo.",
          "12: Sfilare la lampadina bruciata da 1.2W dal portalampada, inserire quella nuova e testare la continuità.",
          "13: Se la linguetta di contatto si è dissaldata o spezzata, risaldarla a stagno.",
          "14: Ricollegare i cavi, accendere il quadro e le luci di posizione per collaudare l'illuminazione di tutti e 3 i quadranti!",
          "15: Rimontare tutto a ritroso. Congratulazioni, avete battuto l'incubo delle lampadine del clima!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/bulbs/00_problem.jpg',
        alt: 'Dead climate control dial illumination',
        captionEn: 'The problem: The climate temperature control dial illumination has died.',
        captionIt: 'Il problema: L\'illuminazione della manopola temperatura clima si è spenta.'
      },
      {
        src: '/images/techtips/bulbs/0a_tools.jpg',
        alt: 'Tools and replacement T5 1.2W capless bulbs',
        captionEn: 'Tools and parts: T5 RW286 12v 1.2W capless bulbs and Torx screwdrivers.',
        captionIt: 'Attrezzi e ricambi: Lampadine tuttovetro T5 12V 1.2W e cacciaviti Torx.'
      },
      {
        src: '/images/techtips/bulbs/01.JPG',
        alt: 'Releasing stereo with removal keys',
        captionEn: 'Step 1: Releasing the stereo head unit with removal tools.',
        captionIt: 'Passaggio 1: Estrazione dell\'autoradio con le chiavette di sblocco.'
      },
      {
        src: '/images/techtips/bulbs/02.JPG',
        alt: 'Removing stereo mounting cage',
        captionEn: 'Step 2: Unclipping and removing the DIN metal radio cage.',
        captionIt: 'Passaggio 2: Rimozione della slitta metallica 1-DIN dell\'autoradio.'
      },
      {
        src: '/images/techtips/bulbs/03.JPG',
        alt: 'Torx screws inside stereo cavity',
        captionEn: 'Step 3: Unscrewing the Torx screws located inside the top stereo recess.',
        captionIt: 'Passaggio 3: Svitamento delle viti Torx all\'interno del vano autoradio.'
      },
      {
        src: '/images/techtips/bulbs/04.JPG',
        alt: 'Removing ashtray tray',
        captionEn: 'Step 4: Opening ashtray and removing the inner receptacle.',
        captionIt: 'Passaggio 4: Apertura del posacenere ed estrazione del cassetto interno.'
      },
      {
        src: '/images/techtips/bulbs/05.JPG',
        alt: 'Ashtray mounting screws',
        captionEn: 'Step 5: Removing the two screws securing the ashtray frame.',
        captionIt: 'Passaggio 5: Rimozione delle due viti di fissaggio del posacenere.'
      },
      {
        src: '/images/techtips/bulbs/06.JPG',
        alt: 'Popping off gear gaiter surround',
        captionEn: 'Step 6: Popping off the gearstick leather gaiter surround.',
        captionIt: 'Passaggio 6: Sgancio della cornicetta della cuffia del cambio.'
      },
      {
        src: '/images/techtips/bulbs/07.JPG',
        alt: 'Lower console screws near gearstick',
        captionEn: 'Step 7: Removing the lower console screws revealed by gear gaiter.',
        captionIt: 'Passaggio 7: Svitamento delle viti inferiori vicino alla leva cambio.'
      },
      {
        src: '/images/techtips/bulbs/08.JPG',
        alt: 'Easing center console fascia away',
        captionEn: 'Step 8: Easing the center console fascia carefully away from dashboard.',
        captionIt: 'Passaggio 8: Allontanamento delicato della mascherina consolle dalla plancia.'
      },
      {
        src: '/images/techtips/bulbs/09.JPG',
        alt: 'Aircon climate control unit mounting screws',
        captionEn: 'Step 9: Removing the 4 screws securing the climate control knob module.',
        captionIt: 'Passaggio 9: Rimozione delle 4 viti che fissano il gruppo manopole clima.'
      },
      {
        src: '/images/techtips/bulbs/10.JPG',
        alt: 'Rear of climate unit and bulb holders',
        captionEn: 'Step 10: Rear of the climate control box showing the 3 bulb holders.',
        captionIt: 'Passaggio 10: Retro del modulo comandi clima con i 3 portalampada.'
      },
      {
        src: '/images/techtips/bulbs/11.JPG',
        alt: 'Twisting and extracting bulb holder',
        captionEn: 'Step 11: Twisting and extracting the small black bulb socket.',
        captionIt: 'Passaggio 11: Rotazione ed estrazione del portalampada nero a baionetta.'
      },
      {
        src: '/images/techtips/bulbs/13.JPG',
        alt: 'Old dead bulb extracted',
        captionEn: 'Step 12: The dead 1.2W capless bulb removed from its holder.',
        captionIt: 'Passaggio 12: La lampadina bruciata da 1.2W estratta dal portalampada.'
      },
      {
        src: '/images/techtips/bulbs/p2_03.jpg',
        alt: 'Soldering new bulb contact tab',
        captionEn: 'Step 13: Resoldering contact tab on bulb terminal if loose.',
        captionIt: 'Passaggio 13: Risaldatura della linguetta di contatto sul terminale.'
      },
      {
        src: '/images/techtips/bulbs/p2_05.JPG',
        alt: 'Testing reassembled bulb with multimeter',
        captionEn: 'Step 14: Verifying bulb electrical circuit with digital multimeter.',
        captionIt: 'Passaggio 14: Collaudo del circuito con il multimetro digitale.'
      },
      {
        src: '/images/techtips/bulbs/p2_07.JPG',
        alt: 'Center console climate dials fully illuminated',
        captionEn: 'Step 15: Reconnected and illuminated! All 3 climate dials glowing.',
        captionIt: 'Passaggio 15: Ricollegato e funzionante! Tutti e 3 i quadranti illuminati.'
      }
    ]
  },

  // ==========================================
  // 14. BLOWN BULB WARNING FIX (REAR LIGHTS)
  // ==========================================
  {
    slug: 'wbulb',
    category: 'Elettronica',
    titleEn: 'Blown Bulb Warning Light False Alarm Fix',
    titleIt: 'Riparazione falso allarme spia lampadine bruciate',
    author: 'Anonymous Contributor (alfa156.net)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Fixing intermittent blown bulb dash warning when applying brake pedal or headlights by cleaning rear cluster contacts.',
    summaryIt: 'Risoluzione dell\'accensione spuria della spia avaria luci frenando o accendendo i fari tramite pulizia contatti faro posteriore.',
    sections: [
      {
        bodyEn: [
          "In my case, the blown bulb warning light used to blink occasionally at the moment I applied the brake pedal, and sometimes when I turned on the lights.",
          "I had already cleaned the contacts and changed the bulbs, it did seem to work for a while but the problem came back again this week.",
          "I knew the problem would be at the rear brake lights, so that's what I did and what I found out.",
          "Tools and materials: working lamp, 8mm Nut Driver, contact cleaner, small screw driver, sand paper (fine) and two quality bulbs."
        ],
        bodyIt: [
          "Nel mio caso, la spia avaria lampadine sul cruscotto lampeggiava sporadicamente nel momento esatto in cui premevo il pedale del freno, e talvolta accendendo i fari.",
          "Avevo già pulito i contatti e sostituito le lampadine; sembrava funzionare per un po', ma poi il difetto si è ripresentato.",
          "Sapevo che il problema risiedeva nelle luci di stop posteriori, quindi ecco cosa ho fatto e cosa ho scoperto.",
          "Attrezzi e materiali: lampada da lavoro, chiave a tubo/bussola da 8 mm, pulitore contatti, piccolo cacciavite, carta vetrata fine e due lampadine di ottima marca."
        ]
      },
      {
        headingEn: 'Step-by-Step Fix (Steps 1 - 8)',
        headingIt: 'Procedura Passo-Passo (Passaggi 1 - 8)',
        bodyEn: [
          "1: Access the rear tail light assembly from inside the luggage boot.",
          "2: Unscrew the two 8mm nuts and remove the plastic protection cover to access the bulb holders.",
          "3: Remove the socket tray with the bulbs by gently pressing the two release levers.",
          "4: Inspect the contact pins: note the slight burning/corrosion on the earth ground pin caused by resistance.",
          "5: Clean the metal contact tracks and pins with fine sandpaper and contact cleaner.",
          "6: Slightly bend the metal contact prongs outwards to ensure stronger spring pressure against the bulb bases.",
          "7: Reinstall quality bulbs and snap the socket tray back into the tail light housing.",
          "8: Test operation: brake pedal pressed with headlights on — warning light stays completely off!"
        ],
        bodyIt: [
          "1: Accedere al retro del gruppo ottico posteriore dall'interno del bagagliaio.",
          "2: Svitare i due dadi da 8 mm e rimuovere la copertura di plastica per accedere alle lampade.",
          "3: Estrarre la piastra portalampade premendo delicatamente sulle due levette di sblocco.",
          "4: Ispezionare i pin di contatto: notare la leggera bruciatura/ossidazione sul piedino di massa provocata dalla resistenza elettrica.",
          "5: Pulire le piste metalliche e i pin con carta abrasiva finissima e spray disossidante.",
          "6: Piegare leggermente le alette metalliche verso l'esterno per aumentare la pressione di contatto sul fondello della lampadina.",
          "7: Rimontare lampadine di marca e riagganciare la piastra nel faro.",
          "8: Collaudo: premere il freno a fari accesi — la spia di avaria ora rimane spenta!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/wbulb/pic1.jpg',
        alt: 'Rear light access inside trunk',
        captionEn: 'Step 1: Accessing rear light unit from inside the trunk carpet.',
        captionIt: 'Passaggio 1: Accesso al gruppo ottico posteriore dalla moquette bagagliaio.'
      },
      {
        src: '/images/techtips/wbulb/pic2.jpg',
        alt: 'Unscrewing 8mm nuts on rear light cover',
        captionEn: 'Step 2: Unscrewing the two 8mm nuts holding plastic cover.',
        captionIt: 'Passaggio 2: Svitamento dei due dadi da 8 mm della protezione in plastica.'
      },
      {
        src: '/images/techtips/wbulb/pic3.jpg',
        alt: 'Removing protective plastic cover',
        captionEn: 'Step 3: Removing plastic protection to reveal the bulb socket.',
        captionIt: 'Passaggio 3: Rimozione della copertura per accedere ai portalampada.'
      },
      {
        src: '/images/techtips/wbulb/pic4.jpg',
        alt: 'Pressing release levers on bulb tray',
        captionEn: 'Step 4: Pressing release levers to unclip the bulb tray.',
        captionIt: 'Passaggio 4: Pressione sulle levette per estrarre la piastra portalampada.'
      },
      {
        src: '/images/techtips/wbulb/pic5.jpg',
        alt: 'Bulb tray removed showing contact tracks',
        captionEn: 'Step 5: Bulb tray removed, showing metal tracks and ground pin.',
        captionIt: 'Passaggio 5: Piastra estratta con piste di contatto e pin di massa.'
      },
      {
        src: '/images/techtips/wbulb/pic6.jpg',
        alt: 'Cleaning tarnished ground pins',
        captionEn: 'Step 6: Cleaning burned or tarnished ground contact pins with fine sandpaper.',
        captionIt: 'Passaggio 6: Pulizia dell\'ossidazione sul pin di massa con carta abrasiva fine.'
      },
      {
        src: '/images/techtips/wbulb/pic7.jpg',
        alt: 'Adjusting contact prong tension',
        captionEn: 'Step 7: Gently bending spring prongs to ensure firm connection.',
        captionIt: 'Passaggio 7: Piegatura delle alette a molla per garantire un contatto solido.'
      },
      {
        src: '/images/techtips/wbulb/pic8.jpg',
        alt: 'Testing rear brake lights with no dashboard warning',
        captionEn: 'Step 8: Reassembled and tested: brake lights bright and no false alarms!',
        captionIt: 'Passaggio 8: Rimontato e collaudato: stop perfetti e zero spie accese!'
      }
    ]
  },

  // ==========================================
  // 15. 147 BUMPER REMOVAL & HEADLIGHT CLIPS
  // ==========================================
  {
    slug: '147bumper',
    category: 'Carrozzeria',
    titleEn: '147 Bumper Removal & Headlight Retaining Clips',
    titleIt: 'Smontaggio paraurti e mollette fari (147 / 156)',
    author: 'Jeff Porter',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'How to remove front bumper and understand headlight bulb retaining clips on 147 / GTA models.',
    summaryIt: 'Come smontare il paraurti anteriore e ripristinare le mollette di ritegno lampade dei gruppi ottici.',
    sections: [
      {
        headingEn: 'The Problem & Required Tools',
        headingIt: 'Il Problema e gli Attrezzi',
        bodyEn: [
          "Ok, so it's not the most catchy title, and this guide covers similar ground to the 156 bumper removal guide, but for those that have to change a sidelight or headlight, this will help you out.",
          "Note: This guide was created with a 3.2 147 GTA, the process is very similar in other models.",
          "The problem: Pushing a bulb into the headlight unit and dropping the bulb retaining clips from both sides into the engine bay.",
          "Tools required: Flat screwdriver, 10mm spanner & 10mm socket, ratchet screwdriver, 4 inch ratchet extension bar, CR-VT 27 Torx bit, Philips bit."
        ],
        bodyIt: [
          "Ok, non è il titolo più accattivante del mondo e questa guida riprende argomenti simili a quella della 156, ma per chiunque debba cambiare una lampadina o un faro, sarà di grandissimo aiuto.",
          "Nota: Guida realizzata su 147 GTA 3.2, il procedimento è identico o molto simile sulle altre versioni.",
          "Il problema: Spingere una lampadina all'interno del faro facendo cadere le mollette di ritegno nel vano motore.",
          "Attrezzi richiesti: Cacciavite a taglio piatto, chiave da 10 mm e bussola da 10 mm, cacciavite a cricchetto con prolunga da 4 pollici, inserto Torx T27, inserto a croce."
        ]
      },
      {
        headingEn: 'Step-by-Step Walkthrough (Steps 1 - 12)',
        headingIt: 'Procedura di Smontaggio (Passaggi 1 - 12)',
        bodyEn: [
          "1: Identify the bulb retaining clip that has dropped into the engine bay.",
          "2: Loosen the top bolts on top of the grille (marked in red).",
          "3: Remove the 5 screws along the bottom of the bumper.",
          "4: Wheel arch screws: remove the Philips screws holding the arch liner.",
          "5: Inside the arch: the bolt on the left requires the 4 inch extension bar, ratchet and 10mm socket. Once one side is done, do the other side.",
          "6: Pulling the bumper off: pull the sides outwards a little to release the clips.",
          "7: Carefully pull bumper forward and rest on soft ground.",
          "8: Headlight removal: unbolt 10mm bolts with extension bar and disconnect multi-plugs.",
          "9: Headlight bulb clip internals: orientation shows flat side of bulb to the left on both sides.",
          "Step 12: Go for a beer!!"
        ],
        bodyIt: [
          "1: Individuare la molletta di ritegno della lampadina caduta nel vano motore.",
          "2: Allentare i bulloni superiori sopra la griglia dello scudetto.",
          "3: Svitare le 5 viti lungo la parte inferiore del paraurti.",
          "4: Viti parasassi passaruota: svitare le viti a croce che fissano il parafango.",
          "5: All'interno del passaruota: il bullone richiede la prolunga da 4 pollici e la bussola da 10 mm. Fatto un lato, passare all'altro.",
          "6: Estrazione paraurti: allargare leggermente i fianchi verso l'esterno per sganciare i supporti.",
          "7: Tirare il paraurti in avanti e appoggiarlo su una coperta.",
          "8: Smontaggio fari: svitare i bulloni da 10 mm con la prolunga e staccare i connettori.",
          "9: Meccanismo mollette interne faro: la linguetta piatta della lampada va rivolta a sinistra su entrambi i fari.",
          "Passo 12: Andate a farvi una birra!!"
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/147bumper_data/01.JPG',
        alt: '147 GTA front end',
        captionEn: 'Step 1: The 147 GTA front end before beginning bumper removal.',
        captionIt: 'Passaggio 1: Il frontale della 147 GTA prima di iniziare lo smontaggio.'
      },
      {
        src: '/images/techtips/147bumper_data/04.JPG',
        alt: 'Dropped headlight bulb retaining clip',
        captionEn: 'The dropped clip: The headlight bulb retaining wire spring clip.',
        captionIt: 'La molletta smarrita: La molla a filo di ritegno della lampadina.'
      },
      {
        src: '/images/techtips/147bumper_data/05.JPG',
        alt: 'Top grille bolts',
        captionEn: 'Step 2: Top bumper bolts above the grille.',
        captionIt: 'Passaggio 2: Bulloni superiori del paraurti sopra la calandra.'
      },
      {
        src: '/images/techtips/147bumper_data/06.JPG',
        alt: 'Bottom bumper screws',
        captionEn: 'Step 3: Removing the 5 screws underneath the front bumper.',
        captionIt: 'Passaggio 3: Rimozione delle 5 viti sul fondo del paraurti.'
      },
      {
        src: '/images/techtips/147bumper_data/07.JPG',
        alt: 'Wheel arch liner screws driver side',
        captionEn: 'Step 4: Unscrewing wheel arch liner screws on driver side.',
        captionIt: 'Passaggio 4: Viti del parasassi passaruota lato guida.'
      },
      {
        src: '/images/techtips/147bumper_data/08.JPG',
        alt: 'Internal 10mm bolt inside passenger wheel arch',
        captionEn: 'Step 5: View inside passenger arch: 10mm bolt requires 4 inch extension bar.',
        captionIt: 'Passaggio 5: Bullone interno da 10 mm nel passaruota con prolunga da 4 pollici.'
      },
      {
        src: '/images/techtips/147bumper_data/09.JPG',
        alt: 'Prising bumper sides outward',
        captionEn: 'Step 6: Pulling bumper sides gently outwards to release side guide clips.',
        captionIt: 'Passaggio 6: Allargamento dei lati per liberare le guide laterali.'
      },
      {
        src: '/images/techtips/147bumper_data/10.JPG',
        alt: 'Bumper removed resting in front of car',
        captionEn: 'Step 7: Bumper pulled forward and safely rested.',
        captionIt: 'Passaggio 7: Paraurti sfilato in avanti e adagiato a terra.'
      },
      {
        src: '/images/techtips/147bumper_data/11.JPG',
        alt: 'Headlight 10mm mounting bolts',
        captionEn: 'Step 8: Headlight mounting bolts accessible with 10mm socket.',
        captionIt: 'Passaggio 8: Bulloni di ancoraggio del faro accessibili con bussola da 10 mm.'
      },
      {
        src: '/images/techtips/147bumper_data/13.JPG',
        alt: 'Headlight unit rear internal clips',
        captionEn: 'Step 9: Headlight internal clip mechanism and wire routing.',
        captionIt: 'Passaggio 9: Meccanismo interno della molletta nel corpo faro.'
      },
      {
        src: '/images/techtips/147bumper_data/15.JPG',
        alt: 'Bulb orientation flat side left',
        captionEn: 'Step 10: Correct bulb orientation (flat notch facing left).',
        captionIt: 'Passaggio 10: Orientamento corretto della lampadina (tacca piatta a sinistra).'
      }
    ]
  },

  // ==========================================
  // 16. ENGINES COMPARISON SCHEMATICS
  // ==========================================
  {
    slug: 'engines',
    category: 'Motore',
    titleEn: '147 / 155 / 156 Engine Bay Schematics',
    titleIt: 'Schemi e confronto vani motore (155 TS, 156 TS, V6)',
    author: 'Jeff Porter',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Detailed engine bay component diagrams comparing 155 Twin Spark, 156 Twin Spark 16V and 156 V6 24V.',
    summaryIt: 'Schemi grafici dettagliati dei componenti del vano motore a confronto tra 155 TS, 156 Twin Spark 16V e 156 V6 Busso.',
    sections: [
      {
        bodyEn: [
          "Simple diagrams of the V6 and Twin Spark engines to help some people out identifying component locations, fuse boxes, expansion tanks, and intake ducting.",
          "Comparing the 155 Twin Spark, 156 Twin Spark 16V, and 156 2.5 V6 24V engine bays."
        ],
        bodyIt: [
          "Semplici schemi grafici dei motori Twin Spark e Busso V6 per aiutare gli appassionati a localizzare componenti, scatole fusibili, vaschette e condotti di aspirazione.",
          "Confronto tra i vani motore di Alfa 155 Twin Spark, Alfa 156 Twin Spark 16V e Alfa 156 2.5 V6 24V."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/engines/155TSengine.png',
        alt: 'Alfa 155 Twin Spark engine bay diagram',
        captionEn: 'Alfa 155 Twin Spark engine bay layout and component placement.',
        captionIt: 'Schema vano motore Alfa 155 Twin Spark e disposizione componenti.'
      },
      {
        src: '/images/techtips/engines/156TSengine.png',
        alt: 'Alfa 156 Twin Spark 16V engine bay diagram',
        captionEn: 'Alfa 156 Twin Spark 16V engine bay layout and component placement.',
        captionIt: 'Schema vano motore Alfa 156 Twin Spark 16V e disposizione componenti.'
      },
      {
        src: '/images/techtips/engines/156V6engine.png',
        alt: 'Alfa 156 2.5 V6 24V engine bay diagram',
        captionEn: 'Alfa 156 2.5 V6 24V Busso engine bay layout and component placement.',
        captionIt: 'Schema vano motore Alfa 156 Busso 2.5 V6 24V e disposizione componenti.'
      }
    ]
  },

  // ==========================================
  // 17. RADIO PLAYER FRAME (MASCHERINA 1-DIN)
  // ==========================================
  {
    slug: 'brik',
    category: 'Interni',
    titleEn: 'Aftermarket Radio Adapter Plate (Player Frame)',
    titleIt: 'Mascherina adattatore autoradio 1 DIN originale',
    author: 'Anders (Webmaster), Jacek & Leo',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Original Alfa Romeo accessory trim plate to neatly fill the dashboard gap around aftermarket 1-DIN radios (Part 5900850 / 001012910398).',
    summaryIt: 'Cornice originale linea accessori Alfa Romeo per mascherare le fessure attorno alle radio 1 DIN aftermarket (Cod. 5900850 / 001012910398).',
    sections: [
      {
        bodyEn: [
          "I notice when I see inside other peoples' 156es that a lot of you don't have the standard CD/Cassette/radio unit.",
          "The dash is made ready for the original Alfa player and it is a little bigger than standard DIN players.",
          "A little bit of plastic from the original Alfa Romeo accessories can make your dash look a bit nicer. It will hide the screws over and under the aftermarket player.",
          "Original Alfa Romeo Part Numbers: 5900850 (official name: 'CAR RADIO ADAPTOR PLATE') and 00 101 291 03 98."
        ],
        bodyIt: [
          "Guardando all'interno delle 156 di altri appassionati, noto che molti non montano l'autoradio originale a cassette o CD.",
          "La plancia della 156 è sagomata per l'autoradio di serie Alfa Romeo, che è leggermente più larga e alta rispetto al formato universale 1 DIN.",
          "Un piccolo profilo in plastica della Linea Accessori originale Alfa Romeo rende la plancia molto più rifinita e gradevole, nascondendo le viti e le fessure sopra e sotto l'autoradio aftermarket.",
          "Codici ricambio originali Alfa Romeo: 5900850 (denominazione ufficiale 'CAR RADIO ADAPTOR PLATE') oppure 00 101 291 03 98."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/brik1.jpg',
        alt: 'Aftermarket radio without adapter plate showing gaps',
        captionEn: 'Without adapter plate: Screws and gaps visible around aftermarket unit.',
        captionIt: 'Senza mascherina: Viti a vista e fessure antiestetiche attorno all\'autoradio.'
      },
      {
        src: '/images/techtips/brik2.jpg',
        alt: 'Aftermarket radio with original Alfa adapter plate fitted',
        captionEn: 'With original Alfa adapter plate (Part 5900850): Clean seamless integration.',
        captionIt: 'Con mascherina originale Alfa Romeo (Cod. 5900850): Finitura perfetta e pulita.'
      }
    ]
  },

  // ==========================================
  // 18. BONNET CATCH SAFETY MECHANISM
  // ==========================================
  {
    slug: 'bonnetcatch',
    category: 'Sicurezza',
    titleEn: 'Bonnet Catch Safety Mechanism & Recall',
    titleIt: 'Gancio e serratura cofano motore (Richiamo ufficiale)',
    author: 'Anders & ARDC',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Preventing dangerous bonnet fly-up by inspecting, cleaning and lubricating the secondary safety latch (Safety Recall 1562).',
    summaryIt: 'Prevenzione dell\'apertura accidentale in velocità: pulizia e lubrificazione del gancio secondario di sicurezza (Campagna 1562).',
    sections: [
      {
        bodyEn: [
          "Several 156s suffered terrifying bonnet fly-ups at motorway speeds because road grit and road salt seized the secondary safety catch spring in the open position.",
          "Alfa Romeo issued an official safety inspection campaign (Recall 1562). When you push the secondary catch, it must spring back vigorously under spring tension.",
          "Regularly spray the secondary bonnet latch mechanism with brake cleaner, work it back and forth by hand, and coat with white lithium grease. Download the full safety inspection PDF guide."
        ],
        bodyIt: [
          "Diversi esemplari di 156 hanno subito la spaventosa apertura accidentale del cofano motore ad alte velocità in autostrada, a causa dello sporco e del sale che bloccano la molla del gancio di sicurezza secondario in posizione aperta.",
          "Alfa Romeo ha diramato una campagna di richiamo ufficiale (Recall 1562). Quando premete il gancio secondario, deve scattare indietro con vigore spinto dalla molla.",
          "Pulire periodicamente la serratura e il gancio secondario con detergente freni, muovere la levetta a mano e lubrificare abbondantemente con grasso bianco al litio. Disponibile la guida PDF completa."
        ]
      }
    ],
    images: [
      {
        src: '/images/techtips/bonnetcatch/Recall1562-s.jpg',
        alt: 'Official Safety Recall notice',
        captionEn: 'Official Alfa Romeo Safety Recall notice 1562 regarding bonnet catch.',
        captionIt: 'Bollettino ufficiale di richiamo sicurezza Alfa Romeo 1562 per la chiusura cofano.'
      },
      {
        src: '/images/techtips/bonnetcatch/catch1.jpg',
        alt: 'Bonnet catch mechanism location',
        captionEn: 'Bonnet lock mechanism and secondary safety catch on front crossmember.',
        captionIt: 'Meccanismo serratura e gancio secondario di sicurezza sulla traversa frontale.'
      },
      {
        src: '/images/techtips/bonnetcatch/catch2.jpg',
        alt: 'Secondary safety hook movement',
        captionEn: 'Verifying that the secondary hook moves freely without binding.',
        captionIt: 'Verifica del movimento libero senza impuntamenti del gancio secondario.'
      },
      {
        src: '/images/techtips/bonnetcatch/catch3.jpg',
        alt: 'Lubrication points on catch spring',
        captionEn: 'Key lubrication points on the torsion return spring.',
        captionIt: 'Punti chiave di pulizia e lubrificazione della molla di richiamo a torsione.'
      },
      {
        src: '/images/techtips/bonnetcatch/catch4.jpg',
        alt: 'Inspection of bonnet striker pin',
        captionEn: 'Inspection and alignment of the bonnet striker pin.',
        captionIt: 'Ispezione e allineamento del perno di aggancio sul cofano motore.'
      },
      {
        src: '/images/techtips/bonnetcatch/catch5.jpg',
        alt: 'Fully serviced and greased bonnet catch',
        captionEn: 'Fully serviced, de-greased and lubricated mechanism.',
        captionIt: 'Meccanismo completamente sgrassato, sbloccato e lubrificato a regola d\'arte.'
      }
    ],
    download: {
      titleEn: 'Download Bonnet Catch Safety Guide (PDF)',
      titleIt: 'Scarica Guida Sicurezza Gancio Cofano (PDF)',
      file: '/downloads/bonnetcatch.pdf'
    },
    cautionEn: "Check your secondary bonnet latch today: when pushed, it must snap back vigorously under spring tension!",
    cautionIt: "Verificate il gancio di sicurezza oggi stesso: quando lo premete deve scattare indietro con vigore grazie alla molla!"
  },

  // ==========================================
  // 19. TIMING BELTS & BALANCER BELTS
  // ==========================================
  {
    slug: 'timing',
    category: 'Motore',
    titleEn: 'Timing Belts & Balancer Belts Maintenance',
    titleIt: 'Cinghie di distribuzione e controrotanti',
    author: 'Anders & Community',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 20. ERRATIC IDLE & THROTTLE RESET
  // ==========================================
  {
    slug: 'idle',
    category: 'Motore',
    titleEn: 'Erratic Idle Speed & Throttle Reset',
    titleIt: 'Regime minimo irregolare e reset ECU',
    author: 'Anders',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 21. POWER LOSS TROUBLESHOOTING
  // ==========================================
  {
    slug: 'powerloss',
    category: 'Motore',
    titleEn: 'Engine Power Loss Troubleshooting',
    titleIt: 'Diagnosi perdita di potenza motore',
    author: 'Anders & Vidar',
    dateOrSource: 'Archivio alfa156.net',
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
    ],
    images: [
      {
        src: '/images/techtips/maf.jpg',
        alt: 'MAF sensor inline on intake pipe',
        captionEn: 'The MAF sensor is the most frequent single cause of unexplainable engine flat spots and power loss.',
        captionIt: 'Il sensore debimetro MAF è la causa più frequente di vuoti di erogazione e cali di potenza inspiegabili.'
      }
    ]
  },

  // ==========================================
  // 22. WATER TEMPERATURE GAUGE & THERMOSTAT
  // ==========================================
  {
    slug: 'temperature',
    category: 'Raffreddamento',
    titleEn: 'Water Temperature Gauge & Thermostat Faults',
    titleIt: 'Indicatore temperatura acqua e termostato',
    author: 'Anders',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 23. CLUTCH RETURN SPRING
  // ==========================================
  {
    slug: 'clutch',
    category: 'Trasmissione',
    titleEn: 'Clutch Return Spring Replacement',
    titleIt: 'Sostituzione molla di richiamo pedale frizione',
    author: 'Anders & Community',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 24. AIR CONDITIONING TROUBLESHOOTING
  // ==========================================
  {
    slug: 'ac',
    category: 'Comfort',
    titleEn: 'Air Conditioning Troubleshooting',
    titleIt: 'Risoluzione problemi impianto climatizzatore',
    author: 'Anders',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 25. COLD ENGINE LACK OF POWER (CTS SENSOR)
  // ==========================================
  {
    slug: 'cold',
    category: 'Motore',
    titleEn: 'Lack of Power on Cold Engine',
    titleIt: 'Esitazioni e vuoti a motore freddo',
    author: 'Anders',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 26. WINTER USE & NORDIC FREEZE PREVENT
  // ==========================================
  {
    slug: 'winter',
    category: 'Manutenzione',
    titleEn: 'Winter Use & Nordic Freeze Prevention',
    titleIt: 'Uso invernale e prevenzione gelo',
    author: 'Anders (Bergen, Norway)',
    dateOrSource: 'Archivio alfa156.net',
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

  // ==========================================
  // 27. FUSEBOX COVER FIX
  // ==========================================
  {
    slug: 'fuse',
    category: 'Interni',
    titleEn: 'Fusebox Cover Fix',
    titleIt: 'Sportellino scatola fusibili',
    author: 'Anders (Webmaster)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Fixing the annoying problem where the under-dash fusebox cover refuses to stay locked in place.',
    summaryIt: 'Come risolvere il classico difetto dello sportellino fusibili sotto al volante che non rimane agganciato.',
    sections: [
      {
        bodyEn: [
          "In most Alfa 156 there is or will be a problem with the fuse box cover. It refuses to stay locked!",
          "The solution for this is to go to your dealer and try different covers and find one that really fits.",
          "Another approach is to simply remove the cover, or you can screw in a short length of plastic behind the central hook to extend it and catch the dashboard frame firmly."
        ],
        bodyIt: [
          "Nella maggior parte delle Alfa 156 c'è o ci sarà un problema con lo sportellino della scatola fusibili sotto al piantone: rifiuta di rimanere chiuso e cade!",
          "Una soluzione consiste nel provare diversi sportellini dal concessionario fino a trovarne uno con tolleranze adatte.",
          "Un approccio alternativo consiste nel rimuoverlo del tutto, oppure nell'avvitare un piccolo spessore in plastica dietro al gancio centrale per allungarlo e farlo agganciare saldamente alla plancia."
        ]
      }
    ]
  },

  // ==========================================
  // 28. SPORTWAGON BOOT LOCK SENSOR
  // ==========================================
  {
    slug: 'swboot',
    category: 'Elettronica',
    titleEn: 'Sportwagon Boot Lock Sensor & Moisture',
    titleIt: 'Sensore serratura portellone Sportwagon e umidità',
    author: 'Gert-Jan (go.to/mysportwagon) & Stein Erik Hanssen',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Moisture in the trunk lid microswitch causing central locking to reopen and interior boot light to stay on.',
    summaryIt: 'Umidità nel microswitch del portellone che causa la riapertura automatica della chiusura centralizzata.',
    sections: [
      {
        bodyEn: [
          "There can be a problem with moisture in the lock sensor on the Sportwagon boot. Like you close the door and the locks close but open again after a few seconds. This mostly happens in rainy weather.",
          "You will also see that when this light is burning on the dashboard you cannot operate the central locking system, not even with the key!",
          "It's usually caused by moisture that runs into the part of the lock that is in the trunk lid. Quite normal in wintertime.",
          "You can solve it by carefully putting a screwdriver between the 2 plastic halves of the lock cover and blowing hot air into the lock with a hair dryer to dry it out.",
          "You can also solve or prevent this by spraying CRC 5-56 or WD-40 water-dispersant spray directly on the sensor microswitch."
        ],
        bodyIt: [
          "Sulla Sportwagon può manifestarsi un problema legato all'umidità nel sensore della serratura del bagagliaio: chiudete l'auto, le sicure scattano ma si riaprono da sole dopo pochi secondi. Succede tipicamente con la pioggia.",
          "Inoltre, quando la spia portellone aperto resta accesa sul quadro, la chiusura centralizzata è inibita persino azionando la chiave nella serratura!",
          "La causa è la condensa o l'acqua piovana che trafila nel blocco serratura alloggiato nel portellone, specialmente d'inverno.",
          "Si risolve inserendo delicatamente la punta di un cacciavite tra i due gusci in plastica della serratura e soffiando aria calda con un asciugacapelli per asciugare l'umidità.",
          "Per prevenire il problema in modo duraturo, spruzzare abbondante spray idrorepellente disossidante (CRC 5-56 o WD-40) direttamente sul microswitch del sensore."
        ]
      }
    ]
  },

  // ==========================================
  // 29. SPORTWAGON LUGGAGE COVER CAUTION
  // ==========================================
  {
    slug: 'swdoor',
    category: 'Carrozzeria',
    titleEn: 'Sportwagon Luggage Cover Warning',
    titleIt: 'Attenzione chiusura baule con tendalino bagagli Sportwagon',
    author: 'Neuropean (alt.autos.alfa-romeo)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Crucial warning when slamming the rear hatch with the luggage cover handle standing upright.',
    summaryIt: 'Avviso fondamentale per non spezzare i perni in plastica del tendalino chiudendo il portellone.',
    sections: [
      {
        bodyEn: [
          "Just wanted to tell anyone owning a Sportwagon to be very careful when closing the back door with the black luggage cover rolled out.",
          "When the back sliding cover is rolled out and fixed at the back, always be careful that its handle is resting down. If it's standing up and you shut the door, it will push the handle violently and break one or both plastic little bars which hold the cover fixed to the sides near the door. These plastic beams are hollow and fragile.",
          "I broke both the other day. I've inserted two metal nails inside the plastic bars and glued them back with epoxy while waiting for the replacement part."
        ],
        bodyIt: [
          "Un consiglio fondamentale a tutti i proprietari di Sportwagon: prestate massima attenzione quando chiudete il portellone posteriore con il tendalino copribagagli steso.",
          "Quando il telo avvolgibile è tirato e agganciato in fondo, assicuratevi SEMPRE che la maniglia centrale sia abbassata verso il basso. Se resta sollevata e sbattete il portellone, il vetro spingerà violentemente la maniglia spezzando uno o entrambi i pernetti laterali in plastica cava che fissano il tendalino ai fianchetti.",
          "Io li ho spezzati entrambi l'altro giorno. Per ripararli temporaneamente ho inserito due chiodi metallici all'interno delle barrette cave incollandoli con resina epossidica in attesa del ricambio."
        ]
      }
    ]
  },

  // ==========================================
  // 30. OUTSIDE TEMPERATURE LIMIT
  // ==========================================
  {
    slug: 'otemp',
    category: 'Elettronica',
    titleEn: 'Outside Temperature Gauge Limit (-25°C)',
    titleIt: 'Termometro temperatura esterna e limite a -25°C',
    author: 'Åke (Sweden) & Anders (Norway)',
    dateOrSource: 'Archivio alfa156.net',
    summaryEn: 'Curious factory quirk: the digital outdoor temperature display in the rev counter only reads down to -25°C.',
    summaryIt: 'Curiosa particolarità di fabbrica: il display della temperatura esterna nel contagiri scende solo fino a -25°C.',
    sections: [
      {
        bodyEn: [
          "A charming thing about the Alfa 156 outdoor temperature meter is that it only goes down to -25° Celsius.",
          "I guess the Italian engineers couldn't imagine it can get any colder than that! Thanks to Åke from way up in north Sweden for this info! :)",
          "Update: Received feedback from an Alfa 156 owner here in Norway that in his car it would not show less than -20°C. It seems to vary slightly depending on display firmware revisions."
        ],
        bodyIt: [
          "Una caratteristica simpatica dell'indicatore di temperatura esterna dell'Alfa 156 è che scende solo fino a -25° Celsius.",
          "Evidentemente i progettisti italiani a Milano e Torino non potevano immaginare che nel resto d'Europa potesse fare ancora più freddo! Grazie ad Åke dal nord della Svezia per questa segnalazione! :)",
          "Aggiornamento: Un proprietario norvegese mi ha segnalato che sulla sua 156 il display si arresta a -20°C. Sembra variare leggermente in base alla versione software dello strumento."
        ]
      }
    ]
  }
];
