---
title: "Studo-Bot"
date: 2026-10-25
bereich: "Studium / KI"
status: Roh   # Roh | Skizze | Prüfen | Aktiv | Verworfen
---

## Kernidee

1. **Zugang zur Studo-Website** (Inhalte der Studierenden-Plattform nutzbar machen)
2. **Studo-Bot**, der Fragen im Chat beantwortet – jede Antwort mit **Referenz** (Quelle) und **Sicherheit in Prozent**.

## Warum interessant

- Schnelle Antworten auf Studienfragen, ohne Foren/Skripte manuell zu durchsuchen.
- Nachprüfbar durch Quellenangabe; ehrlich durch Sicherheitswert ("weiß ich nicht" statt Raten).

## Skizze

**Zugang**
- Keine öffentliche Studo-API bekannt (zu prüfen).
- Optionen: (a) manueller Export / Einfügen der Inhalte (sicherster Start), (b) Browser-Automation (Playwright) mit Login – fragil, ToS prüfen, Zugangsdaten nur als Secret/Umgebungsvariable, nie im Repo.

**Bot (RAG)**
1. Inhalte in Abschnitte zerlegen, als Embeddings in Vektorindex ablegen.
2. Frage → Top-k-Abschnitte holen → Antwort nur auf Basis dieser Abschnitte.
3. Ausgabe: Antwort + **Referenz** (Dokument/Seite/Link + Zitat).
4. **Sicherheit in %** aus messbaren Signalen, nicht aus Selbstauskunft des Modells:
   - Ähnlichkeit Frage ↔ Fundstelle
   - Grounding-Check (Antwort durch Fundstelle gedeckt?)
   - Übereinstimmung mehrerer Quellen
5. Unter Schwellwert (z. B. 50 %): "Keine verlässliche Quelle gefunden".

**Einbindung:** Chat-Seite in dieser Astro-Website; API-Aufruf serverseitig (Schlüssel nie im Client).

## Offene Fragen

- Welche Studo-Inhalte genau (Foren, Lehrunterlagen, Studienportal)?
- Gibt es eine offizielle Schnittstelle bzw. ist Automatisierung laut Nutzungsbedingungen erlaubt?
- Hosting: Astro-Seite ist statisch (GitHub Pages) → Backend nötig (Serverless Function?).
- Datenschutz: Dürfen fremde Beiträge/Unterlagen indexiert werden?
- Wie wird die Prozent-Sicherheit kalibriert (Testfragen mit bekannter Antwort)?

## Nächste Schritte

- [ ] Wissensbasis festlegen und Beispielinhalte exportieren
- [ ] Prototyp: einfacher RAG-Chat lokal mit 10–20 Testfragen
- [ ] Sicherheitswert gegen Testfragen kalibrieren
- [ ] Erst danach Zugang/Automatisierung und Web-Einbindung klären
