---
title: "Studo-Bot: Fragen beantworten mit Quelle und Sicherheit"
date: 2026-10-25
bereich: "Studium / KI"
status: Roh
---

## Kernidee
Zwei Bausteine: (1) Zugang zur Studo-Website bzw. ihren Inhalten, (2) ein Chat-Bot, der Fragen beantwortet und dabei immer eine Referenz (Quelle) und eine Sicherheit in Prozent angibt.

## Gedanken zum Start
- **Zugang:** Klären, was „Studo-Website-Zugang" heißt: eigener Login-Zugriff auf die eigenen Daten (Stundenplan, News, Kurse) oder öffentliche Inhalte. Nutzungsbedingungen und Datenschutz (DSGVO) prüfen, bevor etwas automatisiert abgerufen wird.
- **Bot-Prinzip:** Retrieval-Augmented Generation (RAG): Inhalte indexieren, passende Textstellen suchen, Antwort nur aus diesen Stellen erzeugen.
- **Referenz:** Jede Antwort nennt die Fundstelle (Seite, Datum, Link bzw. Zitat), damit man nachprüfen kann.
- **Sicherheit in Prozent:** Nicht einfach das Modell „raten" lassen. Besser aus messbaren Signalen ableiten: Ähnlichkeit der gefundenen Stellen, Übereinstimmung mehrerer Quellen, Aktualität, Selbstprüfung der Antwort gegen die Quelle. Unter einem Schwellwert: „Ich weiß es nicht" statt Antwort.
- **Kalibrierung:** Mit einem Testset aus echten Fragen prüfen, ob „80 %" tatsächlich in etwa 80 % der Fälle stimmt.

## Offene Fragen
- Was genau ist „Studo" hier (Studo-App/-Website, Uni-Plattform, eigenes Projekt)?
- Gibt es eine offizielle Schnittstelle, oder wäre es Scraping (rechtlich/technisch heikel)?
- Für wen: nur für mich oder auch für andere (Login, Datenschutz)?
- Wo läuft der Chat: auf dieser Astro-Seite, als Telegram/Discord-Bot, in der App?
- Welches Sprachmodell, und wo laufen die Daten (lokal vs. Cloud)?

## Nächste Schritte
- Zugangsweg und Nutzungsbedingungen klären.
- Kleinen Prototyp: 20–50 Seiten/Dokumente indexieren, Fragen stellen, Quelle anzeigen.
- Konfidenz-Methode festlegen und mit 30 Testfragen kalibrieren.
