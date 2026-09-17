# Context & Handover: Nuovo Sito Web Alfa Romeo 156 (156dotnet)

## 1. Stato del Repository e File
- **Directory Progetto Locale:** C:\Users\Angelo\Desktop\156\ws\alfa156-site
- **Git:** Inizializzato su branch main, collegato a https://github.com/AngeloMeo/156dotnet.git.
- **File Curati:** 4.449 file (421 MB totali), ottenuti unendo lfa156-og (originale) e lfa156.net (archive.org).
- **Pulizia effettuata:** Esclusi tutti i *.bak, *.old, *.org, Thumbs.db, bozze corrotte e file .htaccess.*.
- **Eccezione file pesanti:** ilm/evono-id04.avi (141 MB) è escluso da Git tramite .gitignore per evitare i limiti di 100 MB di GitHub, ma è presente sul disco locale.
- **Hosting / Dominio:** Deploy previsto su **Cloudflare Pages** collegato a GitHub, con dominio registrato su **Aruba**.

## 2. Contenuti Chiave da Riutilizzare (Focus TechTips)
- **12 Guide Fotografiche Passo-Passo (in 	ech/):**
  - Fari anteriori (testo headlight.htm + 56 foto STEP_*.jpg in 	ech/headlight/)
  - Candele V6 24V Busso (testo 6sparks.htm + 38 foto in 	ech/v6sparks_data/)
  - Filtro aria / bulloni bloccati (irbox.html + 22 foto in 	ech/airbox_files/)
  - Pulsante maniglia porta bloccato (handle.html + 23 foto in 	ech/fhandle_files/)
  - Pulizia Debimetro/MAF Bosch (	ech/MAFguide/index.html + 21 foto)
  - Vaschetta liquido raffreddamento (coolentResChange.htm + 28 foto)
  - Lampadine plancia centrale (	ech/bulbs/consolebulbs.html + 25 foto)
  - Spia lampadina bruciata fix (	ech/wbulb/wbulb.html + 9 foto)
  - Smontaggio paraurti 147 (147bumper_data.htm + 25 foto)
  - Leva chiusura cofano (onnetcatch.html + onnetcatch.pdf)
  - Molla pedale frizione (clutch.html)
  - Schemi vano motore 147/156 (engines.htm)
- **6 Guide PDF Scaricabili:** Filtro aria K&N (Alfa156AirFilter.pdf), Freni ant/post (Alfa156Brakes.pdf), Chiave a scatto (uttonflipkey.pdf), Corpo farfallato (cleaningthrottlebody.pdf), Checklist acquisto 48 punti (uyersguide.pdf), Tirante cofano (onnetcatch.pdf).
- **3 File Audio MP3 Diagnostici:** Variatore rotto (advariator-alfa156-net.mp3), Variatore nuovo (goodvariator-alfa156-net.mp3), Scarico flessibile fessurato (lexipipe-alfa156-net.mp3).
- **19 Schede Diagnosi Rapida:** Braccetti sospensioni cigolanti (wishbone.html), Minimo irregolare (idle.html), Temperatura 90°C (	emperature.html), Debimetro (maf.html), Infiltrazioni acqua (wet.html), Cruscotto rumoroso (dash.html), ecc.
- **Sezioni Speciali:**
  - Motori e dati tecnici completi: 	eknisk.html
  - Storia del modello e restyling: history.html
  - Assetti, sospensioni e tuning: lowering.html, 	uning.html, engine.html, agazzon.html
  - Prova pista GTA Monza Sport: utoitalia/monza.html
  - Guida all'acquisto con scansioni riviste Auto Italia / Autocar: uyersg.html
  - About storico del fondatore Anders e Jeff: bout.html
  - Profili approfonditi utenti: profile/ (7 schede complete)
  - Cataloghi ricambi storici in PDF: ltautos/ (25 listini ricambi)

## 3. Obiettivo Architetturale per il Nuovo Sito
- **Stack:** **Astro** + **Tailwind CSS** (zero JS di default, SEO fulminea, ottimizzazione immagini automatica in .webp).
- **Ricerca:** **Pagefind** (motore di ricerca locale client-side per cercare nei TechTips per sintomo).
- **UI:** Ispirata al design Alfa Romeo (Rosso Alfa, finiture metallo scuro/carbonio, Dark/Light mode, lightbox per le foto delle guide, audio player integrato per i variatori).
- **Deploy:** GitHub -> Cloudflare Pages.
