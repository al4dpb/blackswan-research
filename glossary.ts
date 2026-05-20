/**
 * Consciousness-research glossary — 20 core terms.
 * Each term has EN + ES definitions and optionally links to an article
 * in the archive. Used by /glossary page + DefinedTermSet JSON-LD schema.
 *
 * Ordering: alphabetical by EN term.
 */

export type GlossaryTerm = {
  slug: string;
  term_en: string;
  term_es: string;
  short_en: string;           // one-line definition (for <meta description>, AI Overview snippets)
  short_es: string;
  long_en: string;            // paragraph — the actual body of the entry
  long_es: string;
  pillar?:
    | "government-programs"
    | "scientists"
    | "institutions"
    | "practitioners"
    | "phenomena"
    | "ancient-wisdom";
  articleSlug?: string;       // canonical article in our archive if one exists
  sameAs?: string[];          // Wikipedia / authoritative external definitions
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "binaural-beats",
    term_en: "Binaural beats",
    term_es: "Ritmos binaurales",
    short_en:
      "Auditory illusion created when two slightly different frequencies are played in each ear; the brain perceives a third 'phantom' frequency equal to the difference.",
    short_es:
      "Ilusión auditiva creada cuando se reproducen dos frecuencias ligeramente distintas en cada oído; el cerebro percibe una tercera frecuencia 'fantasma' igual a la diferencia.",
    long_en:
      "Discovered by Heinrich Wilhelm Dove in 1839. When one tone (e.g., 400 Hz) is played in the left ear and a second tone (e.g., 410 Hz) in the right, the brain constructs a third perceived tone at 10 Hz — the difference. This entrains brainwave activity toward the target frequency, the mechanism Robert Monroe exploited in the Hemi-Sync technology used in the CIA-analyzed Gateway Process.",
    long_es:
      "Descubierto por Heinrich Wilhelm Dove en 1839. Cuando un tono (ej. 400 Hz) se reproduce en el oído izquierdo y un segundo tono (ej. 410 Hz) en el derecho, el cerebro construye un tercer tono percibido a 10 Hz — la diferencia. Esto sincroniza la actividad cerebral hacia la frecuencia objetivo, el mecanismo que Robert Monroe explotó en la tecnología Hemi-Sync usada en el Gateway Process analizado por la CIA.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
    sameAs: ["https://en.wikipedia.org/wiki/Beat_(acoustics)#Binaural_beats"],
  },
  {
    slug: "curandera",
    term_en: "Curandera",
    term_es: "Curandera",
    short_en:
      "Traditional Mexican folk healer practicing herbalism, spiritual healing, and surgical procedures outside the Western medical system.",
    short_es:
      "Sanadora tradicional mexicana que practica herbolaria, curación espiritual y procedimientos quirúrgicos fuera del sistema médico occidental.",
    long_en:
      "The most documented case is Pachita (María Sabina de Carbajal, 1900-1979), a Mexico City curandera who performed unlicensed surgeries with hunting knives, apparently without anesthesia or sterilization. Mexican neurophysiologist Jacobo Grinberg filmed and measured her procedures across hundreds of sessions, publishing his clinical documentation in 1990. The cultural lineage predates the Spanish conquest and integrates Aztec, Mayan, and Catholic elements.",
    long_es:
      "El caso más documentado es Pachita (María Sabina de Carbajal, 1900-1979), una curandera de la Ciudad de México que realizaba cirugías no autorizadas con cuchillos de caza, aparentemente sin anestesia ni esterilización. El neurofisiólogo mexicano Jacobo Grinberg filmó y midió sus procedimientos en cientos de sesiones, publicando su documentación clínica en 1990. La línea cultural precede a la conquista española e integra elementos aztecas, mayas y católicos.",
    pillar: "ancient-wisdom",
    articleSlug: "jacobo-grinberg",
  },
  {
    slug: "focus-10",
    term_en: "Focus 10",
    term_es: "Focus 10",
    short_en:
      "First gateway state in the Monroe Institute curriculum: 'Mind Awake, Body Asleep' — deep physical relaxation with retained conscious awareness.",
    short_es:
      "Primer estado gateway del currículo del Monroe Institute: 'Mente Despierta, Cuerpo Dormido' — relajación física profunda con consciencia consciente retenida.",
    long_en:
      "Accessed via specific Hemi-Sync binaural frequencies. The body enters a sleep-like state while the mind stays alert — the same paradoxical condition reported in the initial stages of lucid dreams and out-of-body experiences. It is the entry point for all higher Monroe levels (Focus 12, 15, 21). Session length typically 30-45 minutes.",
    long_es:
      "Se accede mediante frecuencias binaurales específicas de Hemi-Sync. El cuerpo entra en un estado similar al sueño mientras la mente permanece alerta — la misma condición paradójica reportada en las etapas iniciales de los sueños lúcidos y las experiencias fuera del cuerpo. Es el punto de entrada para todos los niveles Monroe superiores (Focus 12, 15, 21). La sesión dura típicamente 30-45 minutos.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
  },
  {
    slug: "focus-12",
    term_en: "Focus 12",
    term_es: "Focus 12",
    short_en:
      "Monroe Institute state of 'Expanded Awareness' — perception extends beyond physical-body signals, and remote-viewing capabilities are reported to emerge.",
    short_es:
      "Estado Monroe Institute de 'Consciencia Expandida' — la percepción se extiende más allá de las señales del cuerpo físico, y se reportan capacidades de visión remota emergentes.",
    long_en:
      "Built on Focus 10. Practitioners report perception untethered from proprioceptive feedback — sensations of floating, dissolution of body boundaries. McDonnell's 1983 Army analysis notes this level as the first where remote-viewing performance becomes measurable in trained subjects.",
    long_es:
      "Construido sobre Focus 10. Los practicantes reportan percepción desvinculada de la retroalimentación propioceptiva — sensaciones de flotar, disolución de los límites del cuerpo. El análisis del Ejército de 1983 de McDonnell señala este nivel como el primero donde el rendimiento de visión remota se vuelve medible en sujetos entrenados.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
  },
  {
    slug: "focus-15",
    term_en: "Focus 15",
    term_es: "Focus 15",
    short_en:
      "Monroe Institute 'No Time' state — linear-time perception drops out; past-life exploration and precognitive perception reportedly occur.",
    short_es:
      "Estado 'Sin Tiempo' del Monroe Institute — la percepción del tiempo lineal desaparece; se reportan exploración de vidas pasadas y percepción precognitiva.",
    long_en:
      "Achieved after sustained practice of Focus 10 and 12. Subjects report the sensation of durations collapsing into a single present moment. The Army Gateway analysis cites this level as the one where the program's claims become most operationally relevant — and most difficult to reconcile with a purely classical model of consciousness.",
    long_es:
      "Se alcanza tras práctica sostenida de Focus 10 y 12. Los sujetos reportan la sensación de duraciones colapsándose en un único momento presente. El análisis Gateway del Ejército cita este nivel como aquel donde las afirmaciones del programa se vuelven más operativamente relevantes — y más difíciles de reconciliar con un modelo puramente clásico de la consciencia.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
  },
  {
    slug: "focus-21",
    term_en: "Focus 21",
    term_es: "Focus 21",
    short_en:
      "'The Bridge' in the Monroe Institute curriculum — described as the edge between time-space and non-physical dimensions.",
    short_es:
      "'El Puente' en el currículo del Monroe Institute — descrito como el borde entre el espacio-tiempo y las dimensiones no físicas.",
    long_en:
      "The highest Focus level consistently mapped across all published Monroe materials. Beyond Focus 21 lie named territories like 'The Park' (reported in many near-death accounts) and layers that Monroe Institute documentation labels 'I-There' and 'the Absolute.' The boundary between documented brain-state research and reported first-person phenomenology blurs here — which is why the Gateway Report was classified for two decades.",
    long_es:
      "El nivel Focus más alto mapeado consistentemente en todos los materiales publicados del Monroe. Más allá de Focus 21 se encuentran territorios nombrados como 'El Parque' (reportado en muchos relatos de experiencias cercanas a la muerte) y capas que la documentación del Monroe Institute etiqueta como 'I-There' y 'lo Absoluto.' La frontera entre la investigación documentada de estados cerebrales y la fenomenología reportada en primera persona se desdibuja aquí — por lo que el reporte Gateway fue clasificado durante dos décadas.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
  },
  {
    slug: "gateway-process",
    term_en: "Gateway Process",
    term_es: "Proceso Gateway",
    short_en:
      "Monroe Institute's systematic consciousness-exploration curriculum, analyzed for the U.S. Army in 1983 and classified until 2003.",
    short_es:
      "Currículo sistemático de exploración de la consciencia del Monroe Institute, analizado para el Ejército de EE. UU. en 1983 y clasificado hasta 2003.",
    long_en:
      "Built around Hemi-Sync audio technology. Lt. Col. Wayne McDonnell of U.S. Army INSCOM concluded the 28-page Army report that the program worked and recommended operational applications — including remote viewing and the possibility of encountering 'intelligent, non-corporeal energy forms.' Page 25 of the report — containing conclusions and recommendations — was missing when FOIA-released in 2003.",
    long_es:
      "Construido en torno a la tecnología de audio Hemi-Sync. El Tte. Cor. Wayne McDonnell del INSCOM del Ejército de EE. UU. concluyó en el reporte de 28 páginas que el programa funcionaba y recomendó aplicaciones operacionales — incluyendo visión remota y la posibilidad de encontrar 'formas de energía inteligentes no corpóreas.' La página 25 del reporte — que contenía conclusiones y recomendaciones — estaba ausente cuando fue liberado por FOIA en 2003.",
    pillar: "government-programs",
    articleSlug: "gateway-process",
  },
  {
    slug: "hemi-sync",
    term_en: "Hemi-Sync",
    term_es: "Hemi-Sync",
    short_en:
      "Hemispheric Synchronization — Robert Monroe's proprietary layered-binaural-beat technology designed to entrain the brain into specific consciousness states.",
    short_es:
      "Sincronización Hemisférica — tecnología propietaria de ritmos binaurales en capas de Robert Monroe diseñada para sincronizar el cerebro hacia estados específicos de consciencia.",
    long_en:
      "Patented 1975. Uses precisely-engineered stacks of binaural frequencies in stereo headphones to synchronize the left and right brain hemispheres. The Monroe Institute's entire Focus-level curriculum rests on Hemi-Sync delivery. Peer-reviewed studies have documented measurable EEG changes during Hemi-Sync exposure; one published application was partial anesthetic replacement in surgical settings.",
    long_es:
      "Patentado en 1975. Usa pilas precisamente diseñadas de frecuencias binaurales en audífonos estéreo para sincronizar los hemisferios cerebrales izquierdo y derecho. Todo el currículo de niveles Focus del Monroe Institute descansa sobre la entrega de Hemi-Sync. Estudios revisados por pares han documentado cambios medibles en el EEG durante la exposición a Hemi-Sync; una aplicación publicada fue el reemplazo parcial de anestésicos en entornos quirúrgicos.",
    pillar: "institutions",
    articleSlug: "gateway-process",
  },
  {
    slug: "hrv",
    term_en: "HRV (Heart Rate Variability)",
    term_es: "HRV (Variabilidad de la Frecuencia Cardíaca)",
    short_en:
      "Beat-to-beat variation in heart rhythm — a measurable biomarker for autonomic nervous system balance and stress adaptation.",
    short_es:
      "Variación latido a latido en el ritmo cardíaco — un biomarcador medible del equilibrio del sistema nervioso autónomo y adaptación al estrés.",
    long_en:
      "High HRV correlates with parasympathetic dominance and resilience; low HRV correlates with chronic stress. HeartMath Institute research since the 1990s ties HRV coherence to measurable cognitive and emotional performance. Advanced practitioners of Wim Hof breathing and Gateway Process report voluntary control over HRV — the Radboud 2014 PNAS study measured sympathetic activation on command in trained subjects.",
    long_es:
      "Una HRV alta se correlaciona con dominancia parasimpática y resiliencia; una HRV baja con estrés crónico. La investigación del HeartMath Institute desde los 1990s vincula la coherencia de HRV con rendimiento cognitivo y emocional medible. Practicantes avanzados de respiración Wim Hof y del Gateway Process reportan control voluntario sobre la HRV — el estudio PNAS 2014 de Radboud midió activación simpática bajo demanda en sujetos entrenados.",
    pillar: "institutions",
    articleSlug: "wim-hof-method",
  },
  {
    slug: "near-death-experience",
    term_en: "Near-death experience (NDE)",
    term_es: "Experiencia cercana a la muerte (ECM)",
    short_en:
      "A class of reported experiences that occur during clinical death or extreme physiological crisis — typified by out-of-body perception, a life review, and encounters with non-physical beings.",
    short_es:
      "Clase de experiencias reportadas que ocurren durante la muerte clínica o crisis fisiológica extrema — tipificadas por percepción fuera del cuerpo, revisión de vida y encuentros con seres no físicos.",
    long_en:
      "Coined by psychiatrist Raymond Moody in Life After Life (1975). Cardiologist Pim van Lommel's 2001 Lancet study of 344 cardiac-arrest survivors found 18% reported NDE features, with core elements appearing cross-culturally. Overlaps significantly with Monroe Institute reports of 'The Park' beyond Focus 27.",
    long_es:
      "Acuñada por el psiquiatra Raymond Moody en Life After Life (1975). El estudio de 2001 en The Lancet del cardiólogo Pim van Lommel sobre 344 sobrevivientes de paro cardíaco encontró que el 18% reportó rasgos de ECM, con elementos centrales apareciendo de forma transcultural. Se superpone significativamente con los reportes del Monroe Institute sobre 'El Parque' más allá de Focus 27.",
    pillar: "phenomena",
  },
  {
    slug: "out-of-body-experience",
    term_en: "Out-of-body experience (OBE)",
    term_es: "Experiencia fuera del cuerpo (OBE)",
    short_en:
      "Reported state in which self-awareness appears to localize outside the physical body — often perceiving the body itself from an external vantage.",
    short_es:
      "Estado reportado en el cual la autoconsciencia parece localizarse fuera del cuerpo físico — a menudo percibiendo el cuerpo mismo desde un punto de vista externo.",
    long_en:
      "Robert Monroe's systematic documentation in Journeys Out of the Body (1971) was the first engineering-minded treatment. OBEs are reliably inducible by the Monroe Institute's Focus 15-21 protocols, by temporal-parietal junction stimulation (Blanke et al., Nature 2002), and spontaneously during sleep paralysis and cardiac arrest.",
    long_es:
      "La documentación sistemática de Robert Monroe en Journeys Out of the Body (1971) fue el primer tratamiento con mentalidad de ingeniero. Las OBEs son inducibles de forma confiable por los protocolos Focus 15-21 del Monroe Institute, por estimulación de la unión temporo-parietal (Blanke et al., Nature 2002), y espontáneamente durante parálisis del sueño y paro cardíaco.",
    pillar: "phenomena",
    articleSlug: "gateway-process",
  },
  {
    slug: "placebo-effect",
    term_en: "Placebo effect",
    term_es: "Efecto placebo",
    short_en:
      "Measurable clinical improvement produced by an intervention with no active therapeutic component — typically 20-40% of responders in blinded trials.",
    short_es:
      "Mejora clínica medible producida por una intervención sin componente terapéutico activo — típicamente 20-40% de respondedores en ensayos ciegos.",
    long_en:
      "Far from a 'nothing' effect. Harvard's Ted Kaptchuk showed the placebo response persists even when patients are told they're receiving a placebo (open-label placebos). The effect size in pain, depression, and IBS often matches or exceeds pharmaceuticals. Placebo research is the most concrete peer-reviewed wedge into the mind-body interface.",
    long_es:
      "Lejos de ser un efecto 'nada'. Ted Kaptchuk de Harvard demostró que la respuesta placebo persiste incluso cuando a los pacientes se les dice que reciben un placebo (placebos de etiqueta abierta). El tamaño del efecto en dolor, depresión e SII a menudo iguala o supera a los fármacos. La investigación del placebo es la cuña más concreta revisada por pares en la interfaz mente-cuerpo.",
    pillar: "phenomena",
  },
  {
    slug: "precognition",
    term_en: "Precognition",
    term_es: "Precognición",
    short_en:
      "Direct perception of future events before they are knowable by inference — the most controversial and most-tested category in parapsychology.",
    short_es:
      "Percepción directa de eventos futuros antes de que sean conocibles por inferencia — la categoría más controvertida y más probada en parapsicología.",
    long_en:
      "Daryl Bem's 2011 Journal of Personality and Social Psychology paper reported nine experiments with statistically significant precognitive effects (Bayesian factor >100). The paper triggered a replication crisis debate that helped reshape psychology's statistical standards. HeartMath's precognition studies show anticipatory heart-rate changes 4-7 seconds before randomly-selected emotional images.",
    long_es:
      "El artículo de 2011 de Daryl Bem en Journal of Personality and Social Psychology reportó nueve experimentos con efectos precognitivos estadísticamente significativos (factor Bayesiano >100). El artículo desencadenó un debate sobre la crisis de replicación que ayudó a reformar los estándares estadísticos de la psicología. Los estudios de precognición de HeartMath muestran cambios anticipatorios en el ritmo cardíaco 4-7 segundos antes de imágenes emocionales seleccionadas al azar.",
    pillar: "phenomena",
  },
  {
    slug: "psi",
    term_en: "Psi",
    term_es: "Psi",
    short_en:
      "Umbrella term for phenomena that appear to involve information transfer or causation outside known sensorimotor channels — telepathy, clairvoyance, precognition, psychokinesis.",
    short_es:
      "Término paraguas para fenómenos que parecen involucrar transferencia de información o causación fuera de los canales sensoriomotores conocidos — telepatía, clarividencia, precognición, psicoquinesis.",
    long_en:
      "Coined by Robert Thouless and Bertold Wiesner in 1942. The Greek letter ψ stands in for 'psyche.' Dean Radin's meta-analyses across thousands of laboratory psi trials produce effect sizes small but persistently above chance. The CIA's Stargate Project was the most expensive institutional test of the psi hypothesis on record.",
    long_es:
      "Acuñado por Robert Thouless y Bertold Wiesner en 1942. La letra griega ψ sustituye a 'psique.' Los meta-análisis de Dean Radin a través de miles de ensayos psi de laboratorio producen tamaños de efecto pequeños pero persistentemente por encima del azar. El Proyecto Stargate de la CIA fue la prueba institucional más cara de la hipótesis psi en el registro.",
    pillar: "phenomena",
    articleSlug: "stargate-project",
  },
  {
    slug: "remote-viewing",
    term_en: "Remote viewing",
    term_es: "Visión remota",
    short_en:
      "A trained protocol for obtaining information about a geographic target through non-sensory means — the core method of the CIA's Stargate Project.",
    short_es:
      "Protocolo entrenado para obtener información sobre un objetivo geográfico mediante medios no sensoriales — el método central del Proyecto Stargate de la CIA.",
    long_en:
      "Developed at SRI International by physicists Russell Targ and Harold Puthoff, starting 1972. Subjects are given target coordinates or a sealed envelope — never the target's identity — and asked to sketch and describe what they perceive. Joseph McMoneagle (Remote Viewer #001) was awarded the Legion of Merit in 1984 for intelligence 'unavailable from any other source.'",
    long_es:
      "Desarrollado en SRI International por los físicos Russell Targ y Harold Puthoff, desde 1972. A los sujetos se les dan coordenadas objetivo o un sobre sellado — nunca la identidad del objetivo — y se les pide bosquejar y describir lo que perciben. Joseph McMoneagle (Visor Remoto #001) recibió la Legión de Mérito en 1984 por inteligencia 'no disponible de ninguna otra fuente.'",
    pillar: "government-programs",
    articleSlug: "stargate-project",
  },
  {
    slug: "schumann-resonance",
    term_en: "Schumann resonance",
    term_es: "Resonancia Schumann",
    short_en:
      "Global electromagnetic resonance occurring in the cavity between Earth's surface and the ionosphere, with a fundamental frequency of ~7.83 Hz.",
    short_es:
      "Resonancia electromagnética global que ocurre en la cavidad entre la superficie de la Tierra y la ionosfera, con una frecuencia fundamental de ~7.83 Hz.",
    long_en:
      "Predicted by Winfried Otto Schumann in 1952, confirmed experimentally in 1954. The 7.83 Hz primary frequency coincides with the upper end of human theta brainwaves — a coincidence that drives ongoing research into whether biological systems have co-evolved with the Schumann field. Frequently cited in consciousness-research protocols because it sits at the boundary of meditative brain states.",
    long_es:
      "Predicha por Winfried Otto Schumann en 1952, confirmada experimentalmente en 1954. La frecuencia primaria de 7.83 Hz coincide con el extremo superior de las ondas cerebrales theta humanas — una coincidencia que impulsa la investigación en curso sobre si los sistemas biológicos han coevolucionado con el campo Schumann. Citada con frecuencia en protocolos de investigación de la consciencia porque se sitúa en el límite de los estados cerebrales meditativos.",
    pillar: "phenomena",
  },
  {
    slug: "stargate-project",
    term_en: "Stargate Project",
    term_es: "Proyecto Stargate",
    short_en:
      "The umbrella name for the CIA's 1972-1995, $20M psychic-intelligence program that ran through five codenames and 450+ missions.",
    short_es:
      "El nombre paraguas para el programa de inteligencia psíquica de la CIA de 1972-1995, 20 mdd, que corrió a través de cinco nombres en clave y más de 450 misiones.",
    long_en:
      "Ran as SCANATE, GRILL FLAME, CENTER LANE, SUN STREAK, and finally STARGATE. Oversight spanned CIA, DIA, and Army INSCOM. Nineteen intelligence agencies used the program's services with an 89.5% return rate. The 1995 American Institutes for Research evaluation by Jessica Utts and Ray Hyman reached opposite conclusions from the same data. The program was closed three months before the evaluation landed.",
    long_es:
      "Corrió como SCANATE, GRILL FLAME, CENTER LANE, SUN STREAK, y finalmente STARGATE. La supervisión abarcó la CIA, DIA e INSCOM del Ejército. Diecinueve agencias de inteligencia usaron los servicios del programa con una tasa de retorno del 89.5%. La evaluación de 1995 del American Institutes for Research por Jessica Utts y Ray Hyman llegó a conclusiones opuestas desde los mismos datos. El programa fue cerrado tres meses antes de que la evaluación llegara.",
    pillar: "government-programs",
    articleSlug: "stargate-project",
  },
  {
    slug: "telepathy",
    term_en: "Telepathy",
    term_es: "Telepatía",
    short_en:
      "Apparent direct transfer of thought, emotion, or perception between minds — one of the four canonical psi phenomena.",
    short_es:
      "Aparente transferencia directa de pensamiento, emoción o percepción entre mentes — uno de los cuatro fenómenos psi canónicos.",
    long_en:
      "Jacobo Grinberg's transferred-potential experiments (Physics Essays 1994) showed correlated EEG activity between paired meditators in electromagnetically shielded chambers at p < 0.005. Leanna Standish replicated at Bastyr University in 2004 using fMRI. Dean Radin's Ganzfeld meta-analyses across hundreds of trials sustain small but consistent above-chance hit rates.",
    long_es:
      "Los experimentos de potencial transferido de Jacobo Grinberg (Physics Essays 1994) mostraron actividad EEG correlacionada entre meditadores pareados en cámaras blindadas electromagnéticamente con p < 0.005. Leanna Standish replicó en la Universidad Bastyr en 2004 usando fMRI. Los meta-análisis Ganzfeld de Dean Radin en cientos de ensayos sostienen tasas de acierto pequeñas pero consistentes por encima del azar.",
    pillar: "scientists",
    articleSlug: "jacobo-grinberg",
  },
  {
    slug: "terminal-lucidity",
    term_en: "Terminal lucidity",
    term_es: "Lucidez terminal",
    short_en:
      "Unexpected return of mental clarity in patients with severe dementia or brain damage shortly before death — typically lasting minutes to hours.",
    short_es:
      "Retorno inesperado de la claridad mental en pacientes con demencia severa o daño cerebral poco antes de la muerte — típicamente durando minutos a horas.",
    long_en:
      "Named by biologist Michael Nahm in 2009. Documented across severe Alzheimer's, late-stage tumors, meningitis, and traumatic brain injuries. Patients who have not spoken coherently for years resume normal conversation, recognize family, display restored personality. The phenomenon is not accounted for by any current model of neurodegenerative disease — and it is common enough that palliative-care nurses consider it unremarkable.",
    long_es:
      "Nombrada por el biólogo Michael Nahm en 2009. Documentada en Alzheimer severo, tumores en etapa tardía, meningitis y lesiones cerebrales traumáticas. Pacientes que no han hablado coherentemente en años reanudan conversación normal, reconocen a la familia, muestran personalidad restaurada. El fenómeno no es explicado por ningún modelo actual de enfermedad neurodegenerativa — y es lo suficientemente común como para que las enfermeras de cuidados paliativos lo consideren poco notable.",
    pillar: "phenomena",
  },
  {
    slug: "transferred-potential",
    term_en: "Transferred potential",
    term_es: "Potencial transferido",
    short_en:
      "Correlated EEG signal observed between two spatially-separated, electromagnetically-shielded meditators — Grinberg's signature finding.",
    short_es:
      "Señal EEG correlacionada observada entre dos meditadores separados espacialmente y electromagnéticamente aislados — el hallazgo distintivo de Grinberg.",
    long_en:
      "Grinberg and Goswami published in Physics Essays (1994). Paired meditators sat in Faraday-shielded chambers. When one subject was shown a visual stimulus, their EEG registered the expected evoked potential — and the unstimulated partner's EEG registered a statistically correlated potential at the same moment (p < 0.005). Replicated by Leanna Standish at Bastyr using fMRI in 2004. The transferred potential is the most-cited peer-reviewed evidence for non-local consciousness.",
    long_es:
      "Grinberg y Goswami publicaron en Physics Essays (1994). Meditadores pareados se sentaron en cámaras blindadas tipo Faraday. Cuando a un sujeto se le mostraba un estímulo visual, su EEG registraba el potencial evocado esperado — y el EEG del compañero no estimulado registraba un potencial estadísticamente correlacionado en el mismo momento (p < 0.005). Replicado por Leanna Standish en Bastyr usando fMRI en 2004. El potencial transferido es la evidencia revisada por pares más citada sobre la consciencia no local.",
    pillar: "scientists",
    articleSlug: "jacobo-grinberg",
  },
];
