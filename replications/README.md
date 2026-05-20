# Replications

This is where the archive becomes a living record.

Every protocol in [../protocols/](../protocols/) and every claim in [../research/](../research/) can be tested. When you test one — by yourself or with a group — drop your report here.

## How to submit

1. Pick the article or protocol you ran. Note its folder name (the "slug").
2. Create a folder here: `replications/<article-slug>/` (if it doesn't exist).
3. Inside, create a file: `<your-handle>-<YYYY-MM-DD>.md`.
4. Use this template:

```markdown
---
contributor: <your handle or pseudonym>
date: <YYYY-MM-DD>
protocol: <article-slug>
n: <number of subjects>
duration: <e.g., 14 days, 8 weeks>
evidence_tier: <SELF-REPORT | INSTRUMENTED | LAB-CONDITIONS>
---

## Protocol followed
<exact steps you ran; note any deviations from the published article>

## Measurements
<HRV, sleep score, journal entries, blood markers, raw data preferred>

## Result
<plain-language summary of what happened>

## Limitations
<what could invalidate this — confounders, bias, missing measurements>

## Sources
<any references or related literature>
```

5. Open a pull request titled: `replication: <article-slug> — n=<N> — <contributor>`

## Why this matters

n=1 reports stack into n-of-many over time. We don't gate-keep your data — we publish it as submitted, with your limitations disclosed, alongside the original research. This is how a public replication archive grows.

See [../CONTRIBUTING.md](../CONTRIBUTING.md) for the full process and [../EVIDENCE-RUBRIC.md](../EVIDENCE-RUBRIC.md) for evidence-tier definitions.
