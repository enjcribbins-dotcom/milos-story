# Milo's Story — Guardians of the Elements

This repository is the working home for the **Milo's Story** project and its published reading site.

## Project architecture

- **`recovered/`** — evidence recovered from older ChatGPT conversations. Each source conversation gets its own archive folder.
- **`canon/`** — reconciled, authoritative story/world information.
- **`chapters/`** — manuscript chapters used by the website.
- **`art/`** — canonical visual assets and references.
- **`manuscript/`** — existing manuscript/source material retained during reconstruction.
- **`app/`** — Next.js website.

### Recovery workflow

1. Open an older Milo's Story ChatGPT conversation.
2. Copy the prompt from **`RECOVERY-PROMPT.md`** into that conversation.
3. Let that conversation inspect its own history and archive its material into a new `recovered/session-...` folder.
4. Repeat for every relevant old conversation.
5. Start a master reconciliation session and compare all recovered archives.
6. Establish canon in `canon/`.
7. Reconstruct the real chapters in `chapters/`.
8. Add and reconcile visual assets in `art/`.
9. Keep Git history as the project's revision record.

**Important:** recovered material is evidence, not automatically canon. Conflicts must be reconciled explicitly.

## Published site

The project is deployed through Vercel at:

https://milos-story.vercel.app
