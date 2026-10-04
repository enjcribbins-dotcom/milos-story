# Milo's Story — Conversation Recovery Prompt

You are working inside an older ChatGPT conversation that may contain important material from the long-running project **Milo's Story**, also called **Guardians of the Elements**.

Your job in this conversation is **archaeological recovery, not canon rewriting**.

The current master repository is:

**GitHub repository:** `enjcribbins-dotcom/milos-story`

## Primary objective

Examine everything available in THIS conversation and recover all useful Milo's Story material into GitHub so that a later master session can compare this conversation with other old sessions.

Do not assume this conversation is the latest version. Do not silently overwrite, merge, simplify, or "improve" conflicting material.

## First: inspect the repository

If GitHub tools/access are available, inspect the repository before writing anything.

Look at:

- `recovered/`
- `canon/`
- `chapters/`
- `manuscript/`
- `RECOVERY-PROMPT.md`

Create a new unique directory under `recovered/` for THIS conversation. Use a descriptive name such as:

`recovered/session-YYYY-MM-DD-short-description/`

If that exact name already exists, choose another unique name. **Never overwrite another recovered session.**

If GitHub access is not available in this conversation, do not pretend that you committed anything. Instead, produce the complete archive package in your response so it can be transferred later.

## What to recover

Search the entire available conversation context for:

- story prose
- chapter drafts
- chapter outlines
- scenes
- alternate versions
- revisions
- characters
- character relationships
- character development
- dragons and other creatures
- elemental guardians
- magic systems
- locations
- history and mythology
- timeline information
- plot points
- mysteries and reveals
- dialogue
- names
- terminology
- visual descriptions
- character-sheet information
- image-generation prompts
- image references/descriptions
- writing-style decisions
- explicit canon decisions
- abandoned or rejected ideas
- unresolved questions

Preserve substantial original prose whenever it is available. Do not reduce everything to a summary.

## Create these files

Inside the new session directory, create:

### 1. ARCHIVE-REPORT.md

Include:

- source/session identifier or best available description
- what this conversation appears to cover
- approximate chronological position if it can be inferred
- major story material found
- chapters covered
- characters covered
- world/lore covered
- visual material covered
- explicit canon decisions found
- major revisions found
- possible relationship to material from other sessions
- confidence notes
- a short **RECOMMENDED MATERIAL TO CARRY FORWARD** section

Do NOT claim something is canon merely because it appears here.

### 2. PROSE.md

Preserve substantial actual story prose from this conversation.

Organize it by chapter/scene where possible.

If there are multiple versions, keep them separately and label them clearly, for example:

- VERSION A
- VERSION B
- LATER REVISION
- ALTERNATE SCENE

Do not silently combine versions.

If no substantial prose exists, say so explicitly.

### 3. CHAPTER-MATERIAL.md

For every chapter or chapter idea mentioned, record:

- chapter number/title if known
- outline
- scenes
- actual prose references
- important events
- chapter ending
- alternate versions
- revisions
- unresolved issues

Do not invent missing chapters.

### 4. CHARACTERS.md

For every character mentioned, record:

- name
- role
- appearance
- personality
- abilities
- relationships
- history
- character arc
- important scenes
- visual references/prompts
- changes across the conversation
- uncertainty/conflicts

Clearly distinguish established information from ideas.

### 5. WORLD-LORE.md

Record:

- locations
- elemental system
- guardians
- dragons
- creatures
- magic rules
- portals
- mythology
- history
- factions
- important objects
- terminology
- any other worldbuilding

Again, distinguish established material from speculation.

### 6. VISUALS.md

Record every useful visual-development item:

- character-sheet descriptions
- image prompts
- environmental prompts
- creature descriptions
- visual style instructions
- important visual references
- which descriptions appear to be later revisions
- which visuals are uncertain

Do not claim an image exists if this conversation only contains a prompt or description.

### 7. OPEN-QUESTIONS.md

Record contradictions, uncertainty, and unresolved matters.

For each issue, explain:

- what the competing versions are
- where they appear in this conversation
- whether one appears to supersede another
- what still needs to be decided

## Critical rules

1. **Preserve evidence.**
2. **Do not invent missing text.**
3. **Do not silently choose between conflicting versions.**
4. **Do not overwrite another session's files.**
5. **Do not rewrite `canon/` during this recovery task.**
6. **Do not replace the real chapter files in `chapters/` with recovered material.**
7. **Do not assume the current repository chapters are correct; they may be placeholders.**
8. If this conversation contains a later revision, record that fact, but still preserve the earlier version when useful.
9. If you cannot determine whether something was accepted or abandoned, label it **UNCERTAIN**.
10. Preserve exact names, terminology, relationships, and distinctive story details carefully.
11. Separate **story facts** from **ideas/discussion**.
12. If the conversation contains generated images or references to images, document what can actually be established about them.
13. Never fabricate a commit, file, GitHub action, or repository change.

## GitHub commit

If GitHub write access is available:

- Create the complete archive under the new unique `recovered/session-...` directory.
- Use descriptive commit message(s), such as:
  **Archive recovered Milo's Story material from [conversation description]**
- Do not modify canonical story files as part of this task.

After committing, report:

- exact folder created
- files created
- commit SHA(s)
- a concise summary of what was recovered
- any important conflicts that a future reconciliation session must examine

## Final report

At the end, give a concise report headed:

**RECOVERY COMPLETE**

Include:

1. Source conversation description
2. GitHub folder
3. Files created
4. Commit SHA(s), if actually committed
5. Chapters found
6. Major characters found
7. Major lore found
8. Major conflicts/uncertainties
9. Most important material that appears likely to carry forward

Remember: **this is evidence collection. The later master session will reconcile all recovered sessions and decide canon.**
