# EDUCHEM LAN Party Home

Prezentační web pro Summer LAN Party 2026 na SŠ EDUCHEM.

Tento projekt slouží hlavně jako jednoduchá veřejná informační stránka: termín akce, pravidla, organizátoři,
harmonogram, FAQ a odkazy do LAN Party systému. Samotný systém běží odděleně a v produkci bude dostupný přes `/app/`,
kam bude nginx reverse proxy směrovat skutečnou aplikaci.

## Poznámka k projektu

Tenhle web je záměrně vibecoděný. Důvod je jednoduchý: celý LAN Party systém je výrazně komplexnější a složitější část
projektu a veškerý důležitý vývojový čas jde primárně tam. Tahle prezentační stránka je spíš vedlejší, méně významný
side projekt, který má rychle a použitelně předat informace účastníkům.

## Lokální spuštění

```bash
npm install
npm run dev
```

Web běží typicky na `http://localhost:3000`.

## Build

```bash
npm run build
```

## Důležité cesty

- `/` - hlavní stránka
- `/info` - informace a organizátoři
- `/reservation` - popis rezervace
- `/rules` - pravidla akce
- `/schedule` - harmonogram
- `/faq` - časté dotazy
- `/app/` - vstup do LAN Party systému, v produkci řešený přes nginx reverse proxy
