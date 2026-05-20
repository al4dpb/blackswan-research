# Evidence Rubric

Every substantive claim in this archive is tagged with one of four tiers. The tier is encoded in MDX as:

```mdx
<AnswerCapsule evidence="CORROBORATED" source="Primary Source 1 · Primary Source 2">
The claim, stated plainly.
</AnswerCapsule>
```

Use the rubric below to choose the right tier when you contribute or review.

---

## CORROBORATED

**Definition:** Two or more independent peer-reviewed sources (or equivalent: government archives, court records, multiple first-hand accounts from non-collaborating witnesses) confirm the same factual claim.

**Examples:**
- "The CIA ran the Stargate Program from 1978 to 1995." → CORROBORATED (declassified CIA documents + congressional testimony + multiple journalistic investigations).
- "Magnesium glycinate has higher bioavailability than magnesium oxide." → CORROBORATED (multiple human pharmacokinetic trials).

**Requires:** primary sources, independent of each other. Two papers from the same lab don't count as independent.

---

## CONTESTED

**Definition:** Credible sources disagree. We present the disagreement and the strongest case for each side, with sources.

**Examples:**
- "The Ganzfeld telepathy experiments show statistically significant effects." → CONTESTED (meta-analyses by Bem & Honorton support, meta-analyses by Hyman dispute; both peer-reviewed).
- "Cold exposure improves cardiovascular health long-term." → CONTESTED (mixed RCT outcomes, confounded by adaptation).

**Requires:** at least one credible source on each side. Don't use CONTESTED to launder fringe claims against established science — the disagreement must be substantive within the relevant expert community.

---

## OPEN-CASE

**Definition:** A real, documented question for which there is insufficient evidence to settle. The data is missing, suppressed, lost, or never gathered. Investigation is ongoing or stalled.

**Examples:**
- "What happened to Jacobo Grinberg on December 8, 1994?" → OPEN-CASE (Mexico's Fiscalía Especializada en Personas Desaparecidas file remains open 32 years later).
- "Did Project MKUltra retain operational successors after 1973?" → OPEN-CASE (FOIA stonewalled, document destruction acknowledged).

**Distinguishes from CONTESTED:** OPEN-CASE has *too little* evidence to form sides. CONTESTED has enough evidence that experts have taken positions and disagreed.

---

## SPECULATIVE

**Definition:** A working hypothesis the author is proposing or relaying. Framed explicitly as speculation. May be useful for further research but should not be treated as established.

**Examples:**
- "Donald Hoffman's interface theory predicts that spacetime itself will be discarded by physics in the next 50 years." → SPECULATIVE (Hoffman's own framing; not yet testable).
- "The 12-of-12 manifestation pattern reflects a neurological alignment between morning waking-state and intent encoding." → SPECULATIVE (founder's n=1 hypothesis).

**Requires:** the author owns the speculation. If you're relaying someone else's hypothesis, name them.

---

## Picking the right tier

When in doubt, pick the more conservative tier. Downgrading from CORROBORATED to CONTESTED is healthy skepticism. Upgrading SPECULATIVE to CORROBORATED to make a stronger-sounding claim is the path to losing credibility.

If a claim doesn't fit any tier cleanly, it probably doesn't belong in an article yet. Open an issue and let the community help refine it.

---

## Source format

Inside `<AnswerCapsule source="...">`:

- Separate multiple sources with ` · ` (space-middle-dot-space).
- Use the most identifying form: paper title, archive name + document ID, court case name, etc.
- Don't link inside the attribute; put full URLs in the article's `meta.json` `sources` array and (if visible in the body) as MDX links.

Example: `source="Physics Essays 1994 vol 7 · UNAM faculty records · INPEC archives"`
