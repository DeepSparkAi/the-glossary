// Psychiatry Terms content for The Glossary.
// Neutral, descriptive, baby-step definitions with mid-century usage notes.

(function(){
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
  const step = (n,title,body) => `<section class="primer-step"><div class="primer-step-number">Step ${String(n).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;
  const term = (word,text) => `<div class="primer-term"><p class="primer-label">A new word</p><h3>${word}</h3><p>${text}</p></div>`;
  const shift = (mid,now) => `<div class="time-shift-grid"><div class="time-shift-card"><p class="time-label">Mid-century use · roughly 1945–1970</p><p>${mid}</p></div><div class="time-shift-card"><p class="time-label">Current use</p><p>${now}</p></div></div>`;
  const chain = (items) => `<div class="primer-chain">${items.map((x,i)=>`${i?"<b>→</b>":""}<span>${x}</span>`).join("")}</div>`;
  const sourceBox = (links) => `<section class="entry-section history-sources"><h3>Sources and further reading</h3><p>${links.join("<br>")}</p></section>`;

  function defaultPrimer(){
    return `
      <div class="entry-inner primer">
        <header class="primer-hero">
          <p class="kicker">Start here · baby steps</p>
          <h2>Psychiatry terms</h2>
          <p class="lede">A terminology guide. It distinguishes fields, diagnoses, symptom words, drug classes, and older mid-century usage without treating any of them as interchangeable.</p>
          <div class="primer-chain"><span>fields</span><b>→</b><span>symptom words</span><b>→</b><span>diagnostic words</span><b>→</b><span>sedation words</span><b>→</b><span>drug history</span></div>
        </header>

        ${step(1,"First separate the three fields.",
          `${term("PSYCHIATRY","A medical specialty dealing with mental, behavioral, and related disorders. Psychiatrists are physicians.")}
           ${term("PSYCHOLOGY","The scientific study of behavior and mental processes, plus professional branches that apply psychological methods. Psychologists are not defined simply by being physicians.")}
           ${term("SOCIOLOGY","The study of social groups, institutions, relationships, and societies. It is a social science, not a medical specialty.")}
           <p>The three fields can study some of the same human behavior, but they ask different kinds of questions and use different professional traditions.</p>`)}

        ${step(2,"Then separate psychosis from schizophrenia.",
          `${term("PSYCHOSIS","A state or syndrome involving major impairment in reality testing; delusions, hallucinations, or markedly disorganized thought or behavior can occur.")}
           ${term("PSYCHOTIC","The adjective: involving, showing, or characterized by psychosis.")}
           ${term("SCHIZOPHRENIA","A specific psychiatric diagnosis in which psychotic symptoms can be central, along with other disturbances of thought, behavior, motivation, or emotional expression.")}
           <div class="memory"><strong>Psychosis is not the same thing as schizophrenia.</strong> Psychosis can occur in several psychiatric conditions, with substances, or with some medical and neurological conditions.</div>`)}

        ${step(3,"Now separate the sleep-and-calming words.",
          `${term("SEDATIVE","A drug or substance that reduces nervous-system activity, agitation, or arousal. Sedation may include drowsiness, but sleep is not required.")}
           ${term("SOPORIFIC","Something that tends to produce sleep or marked drowsiness. It can be an adjective or a noun; figuratively it can also mean extremely boring.")}
           ${term("HYPNOTIC DRUG","In pharmacology, a sleep-inducing drug. This use of hypnotic has nothing to do with putting someone into hypnosis.")}
           ${term("HYPNOSIS","A procedure or condition involving focused attention and increased responsiveness to suggestion. The exact theoretical explanation remains debated.")}
           <p>The word <strong>hypnotic</strong> is therefore ambiguous: it can mean <em>sleep-inducing</em> in pharmacology or <em>related to hypnosis</em> in psychology.</p>`)}

        ${step(4,"Two drug histories in this section.",
          `<div class="compare-grid">
            <div class="compare-card"><h3>Scopolamine</h3><p>An antimuscarinic drug, also called hyoscine. It has been used as a mydriatic, sedative/amnestic adjunct, preanesthetic drug, and anti-motion-sickness drug.</p></div>
            <div class="compare-card"><h3>Barbiturates</h3><p>A class of sedative-hypnotic drugs derived from barbituric-acid chemistry. Phenobarbital is one member of the class.</p></div>
           </div>
           <p>They are chemically and pharmacologically different. The fact that both can cause drowsiness does not make them the same class.</p>`)}

        ${step(5,"The full Phenobarbital journey is preserved here.",
          `<p>The original Phenobarbital teaching app has been ported into this section as a complete 18-step primer: matter, atoms, molecules, carbon, benzene, gasoline, benzoin resin, phenyl, Baeyer, urea, barbituric acid, the Barbara naming mystery, and the complete name.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('phenobarbital-full-primer')">Open the complete Phenobarbital primer →</button>`)}

        <section class="primer-finish">
          <p class="kicker">Terminology first</p>
          <h3>Use the oak index for each individual term.</h3>
          <p>Each definition includes a mid-century note and a current-use note where the terminology or professional usage changed.</p>
        </section>
      </div>`;
  }

  function psychiatryBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Psychiatry</strong> is the medical specialty concerned with the description, classification, diagnosis, and treatment of mental, behavioral, and related disorders.</p></section>
      ${term("PSYCHIATRIST","A physician whose specialty is psychiatry.")}
      ${shift(
        "In the United States after World War II, psychiatry included large state-hospital practice, rapidly expanding outpatient work, and a strong psychoanalytic and psychodynamic influence. DSM-I (1952) used broad categories such as “reactions,” and diagnostic boundaries were often less operationalized than they later became.",
        "Since the 1970s–1980s, U.S. psychiatry has placed more weight on descriptive diagnostic criteria, psychopharmacology, neuroscience, and standardized classification. DSM-III in 1980 was a major break toward explicit diagnostic criteria. Psychoanalytic and social approaches did not disappear, but they ceased to organize the field as completely as they had in the 1950s."
      )}
      <section class="entry-section"><h3>Word history</h3><p><em>Psychiatry</em> combines Greek-derived elements meaning roughly <strong>mind/soul</strong> and <strong>medical treatment/healing</strong>. The modern specialty developed within medicine and the older asylum/hospital tradition.</p></section>
      ${sourceBox([
        '<a href="https://pubmed.ncbi.nlm.nih.gov/8434655/" target="_blank" rel="noopener">PubMed — DSM-III and the transformation of American psychiatry</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/21879574/" target="_blank" rel="noopener">PubMed — U.S. mental-health fields, 1940–1970</a>',
        '<a href="https://dictionary.apa.org/psychiatry" target="_blank" rel="noopener">APA Dictionary — psychiatry</a>'
      ])}`;
  }

  function psychologyBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Psychology</strong> is the systematic study of behavior and mental processes. The word also names a broad professional and academic field with experimental, cognitive, developmental, social, personality, clinical, educational, industrial, and other branches.</p></section>
      ${term("PSYCHOLOGIST","A person professionally trained in psychology. The exact training and legal scope depend on the role and jurisdiction.")}
      ${shift(
        "Mid-century American academic psychology was strongly influenced by behaviorism, experimental learning research, psychometrics, and testing. Clinical psychology expanded rapidly after World War II, while psychoanalytic and psychodynamic ideas were influential in many clinical settings.",
        "Current psychology is broader in method and subject matter. Cognitive science, neuroscience, behavioral science, social and developmental research, quantitative methods, and multiple clinical schools all coexist. The ordinary-language use of “psychology” to mean a person's motives or mental makeup also remains common."
      )}
      <section class="entry-section"><h3>Not the same as psychiatry</h3><p>Psychology is not defined as a branch of medicine. Psychiatry is. The fields overlap in research and clinical settings, but their training traditions and legal roles differ.</p></section>
      ${sourceBox([
        '<a href="https://dictionary.apa.org/general-psychology" target="_blank" rel="noopener">APA Dictionary — general psychology</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/21879574/" target="_blank" rel="noopener">PubMed — psychology and psychiatry after World War II</a>'
      ])}`;
  }

  function sociologyBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Sociology</strong> is the systematic study of social life: groups, institutions, organizations, social relationships, social inequality, culture, population, and societies.</p></section>
      ${term("SOCIAL INSTITUTION","A durable organized pattern of social life, such as family, education, law, religion, government, or markets.")}
      ${shift(
        "The basic meaning of sociology was already close to today's meaning. Mid-century U.S. sociology gave major attention to institutions, social roles, organizations, urban life, family, class, race, population, survey research, and large theories of social order such as structural functionalism.",
        "The term itself has changed less than the field around it. Current sociology uses a wider mixture of quantitative, qualitative, historical, network, computational, and comparative methods, with many competing theories rather than one dominant framework."
      )}
      <section class="entry-section"><h3>Not a diagnosis field</h3><p>Sociology studies social patterns and institutions. It does not, by definition, diagnose an individual person's psychiatric condition.</p></section>`;
  }

  function schizophreniaBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Schizophrenia</strong> is a psychiatric diagnosis involving persistent disturbances that can include delusions, hallucinations, disorganized speech or thought, disorganized or catatonic behavior, and so-called negative symptoms such as reduced emotional expression or motivation.</p></section>
      ${term("DELUSION","A fixed belief judged in clinical context to be false or not grounded in shared reality, and not simply an ordinary error or culturally shared belief.")}
      ${term("HALLUCINATION","A perception-like experience occurring without the corresponding external sensory stimulus.")}
      ${shift(
        "DSM-I (1952) called the category “schizophrenic reactions.” Definitions were broad and less operationalized, and U.S. clinicians often used schizophrenia more expansively for severe psychotic conditions than later manuals did. DSM-II (1968) dropped “reaction” but retained relatively brief descriptions.",
        "DSM-III (1980) introduced more explicit criteria and narrowed U.S. diagnostic practice. DSM-5/DSM-5-TR no longer use the old paranoid, catatonic, disorganized, residual, and undifferentiated schizophrenia subtypes as separate diagnostic subtypes."
      )}
      <section class="entry-section"><h3>A common misunderstanding</h3><p><strong>Schizophrenia does not mean “split personality.”</strong> The name was coined by Eugen Bleuler from Greek roots meaning roughly “split” and “mind,” referring to what he saw as splitting or disconnection among mental functions, not multiple personalities.</p></section>
      ${sourceBox([
        '<a href="https://dictionary.apa.org/schizophrenia" target="_blank" rel="noopener">APA Dictionary — schizophrenia</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3181662/" target="_blank" rel="noopener">NCBI — evolution of diagnostic criteria in psychoses</a>'
      ])}`;
  }

  function psychosisBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Psychosis</strong> is a state or syndrome in which reality testing is substantially impaired. It may involve delusions, hallucinations, markedly disorganized thinking or speech, or severely disorganized behavior.</p></section>
      ${term("REALITY TESTING","The ability to distinguish one's internal ideas, interpretations, or perceptions from external events and to evaluate them against shared evidence.")}
      ${shift(
        "“Psychosis” was often used as a broad umbrella for severe mental disorders and as the opposite pole of the older “neurosis” distinction. DSM-I grouped several conditions as psychotic disorders and described them partly in terms of major failure of reality testing and functioning.",
        "Current usage is generally more symptom-focused. Psychosis may be part of schizophrenia, a mood disorder, a substance-induced condition, a neurological or medical condition, or a brief psychotic disorder. The word does not by itself identify the cause."
      )}
      <section class="entry-section"><h3>Important distinction</h3><p><strong>Psychosis is not one single disease.</strong> It describes a type of disturbance that can arise in different conditions.</p></section>
      ${sourceBox([
        '<a href="https://dictionary.apa.org/psychosis" target="_blank" rel="noopener">APA Dictionary — psychosis</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3181662/" target="_blank" rel="noopener">NCBI — psychosis terminology across DSM editions</a>'
      ])}`;
  }

  function psychoticBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Psychotic</strong> is primarily an adjective meaning <strong>involving psychosis</strong> or <strong>showing psychotic symptoms</strong>.</p></section>
      <div class="definition-grid">
        <div class="definition-card"><h3>psychotic symptom</h3><p>A symptom such as a delusion or hallucination occurring in a psychotic state.</p></div>
        <div class="definition-card"><h3>psychotic disorder</h3><p>A disorder in which psychosis is a defining or major feature.</p></div>
      </div>
      ${shift(
        "Mid-century psychiatric writing used “psychotic” more broadly as a severity/category label and sometimes used the word as a noun for a person (“a psychotic”), a style common in older medical writing.",
        "Current professional usage more often keeps it as an adjective: “psychotic symptoms,” “psychotic episode,” or “person experiencing psychosis.” It is not a synonym for schizophrenia, violence, irrationality in general, or eccentric behavior."
      )}
      ${sourceBox([
        '<a href="https://dictionary.apa.org/psychotic-disorder" target="_blank" rel="noopener">APA Dictionary — psychotic disorder</a>'
      ])}`;
  }

  function sedativeBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p>A <strong>sedative</strong> is a drug or other substance that reduces central nervous-system activity, arousal, agitation, or responsiveness. Drowsiness can result, but sleep is not required.</p></section>
      ${term("SEDATION","A condition of reduced alertness or arousal produced by a drug or other intervention.")}
      ${shift(
        "The word was widely used for drugs such as barbiturates, bromides, chloral hydrate, and other agents that calmed or caused drowsiness. “Sedative” and “hypnotic” were often discussed together because many drugs could produce calming at one level of effect and sleep at a stronger level.",
        "The general meaning is still similar. The specific drug classes in common use changed substantially; benzodiazepines and other agents displaced many older barbiturate uses. In modern practice, sedative effects can also be unwanted adverse effects rather than the purpose of the drug."
      )}
      <div class="memory"><strong>Sedative does not automatically mean sleeping pill.</strong> A drug can be sedating without being used primarily to induce sleep.</div>`;
  }

  function soporificBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Soporific</strong> means <strong>causing sleep or strong drowsiness</strong>. It can be an adjective (“a soporific drug”) or, less commonly, a noun (“a soporific”).</p></section>
      <section class="entry-section"><h3>Word history</h3><p>It comes through Latin roots connected with <em>sopor</em>, “deep sleep,” and a root meaning “to make.” The literal idea is therefore <strong>sleep-making</strong>.</p></section>
      ${shift(
        "Medical and general writing used soporific more often as a straightforward synonym for sleep-producing drugs or preparations.",
        "The medical word remains understandable but is less central than “hypnotic” or “sedative-hypnotic.” In ordinary speech, <strong>soporific</strong> is often figurative: a soporific lecture is one that makes people sleepy because it is dull."
      )}`;
  }

  function hypnoticDrugBody(){
    return `
      <section class="entry-section"><h3>The first meaning: a sleep-inducing drug</h3><p>In pharmacology, a <strong>hypnotic</strong> is a drug used to induce or maintain sleep. A <strong>sedative-hypnotic</strong> is a drug class or description covering calming and sleep-producing effects.</p></section>
      ${term("HYPNOTIC — PHARMACOLOGY","A sleep-inducing drug.")}
      <section class="entry-section"><h3>The second meaning: related to hypnosis</h3><p>Outside pharmacology, <strong>hypnotic</strong> can mean <strong>related to hypnosis</strong>: a hypnotic suggestion, hypnotic induction, or hypnotic state.</p></section>
      <div class="memory"><strong>The two meanings are easy to confuse.</strong> A “hypnotic drug” usually means a sleeping drug; it does not mean a drug that performs hypnosis.</div>
      ${shift(
        "Mid-century medical writing commonly used “hypnotic” for sleep-producing agents including barbiturates and chloral-type drugs. The phrase “sedative-hypnotic” became a standard way to describe overlapping dose-dependent calming and sleep effects.",
        "The pharmacological meaning remains in use, but the exact drug classes changed. Benzodiazepines, nonbenzodiazepine sleep drugs, and other agents entered use, while barbiturates became much less common as routine sleeping drugs."
      )}`;
  }

  function hypnosisBody(){
    return `
      <section class="entry-section"><h3>Definition</h3><p><strong>Hypnosis</strong> is a procedure or state involving focused attention and heightened responsiveness to suggestion. Different theories disagree about exactly how the phenomenon should be explained.</p></section>
      ${term("SUGGESTION","A communication intended to evoke a change in perception, sensation, thought, feeling, or behavior.")}
      ${term("HYPNOTIC INDUCTION","A procedure intended to establish the conditions in which hypnotic suggestions are given.")}
      ${shift(
        "By the mid-20th century hypnosis already had a long history in medicine, psychiatry, psychology, and stage performance. It had moved well beyond the older language of “animal magnetism,” but theories about trance, dissociation, suggestion, and unconscious processes varied widely.",
        "Modern definitions tend to be more theory-neutral: they describe the procedure and response to suggestion without requiring that hypnosis be literally sleep or a unique mystical state. Research still debates mechanisms and the limits of hypnotic effects."
      )}
      <section class="entry-section"><h3>Not the same as a hypnotic drug</h3><p>The shared word comes from the historical association with sleep. <strong>Hypnosis</strong> is a suggestion/attention phenomenon; a pharmacological <strong>hypnotic</strong> is a sleep-inducing drug.</p></section>
      ${sourceBox([
        '<a href="https://dictionary.apa.org/hypnosis" target="_blank" rel="noopener">APA Dictionary — hypnosis</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/25365125/" target="_blank" rel="noopener">PubMed — revised definition of hypnosis</a>'
      ])}`;
  }

  function barbituratesBody(){
    return `
      <section class="entry-section"><h3>Correct spelling</h3><p><strong>Barbiturate</strong> · plural <strong>barbiturates</strong>.</p><p>Common misspellings include <em>barbituate</em>, <em>barbituates</em>, and forms such as <em>barbibturate</em>. The <strong>r</strong> after <em>barbitu-</em> matters: <strong>bar-bi-tu-rate</strong>.</p></section>
      ${term("BARBITURATE","A member of a class of drugs derived from barbituric-acid chemistry that depresses central nervous-system activity. Depending on the compound and context, barbiturates have been used as sedatives, hypnotics, anticonvulsants, or anesthetic agents.")}
      <section class="entry-section"><h3>Barbituric acid is not itself the sleeping drug</h3><p><strong>Barbituric acid</strong> is the historical chemical framework. The powerful sedative-hypnotic effects appeared in later substituted compounds built from that framework.</p></section>
      ${shift(
        "Barbiturates were major mid-century sedative-hypnotic drugs. They appeared as sleeping pills, preanesthetic drugs, anticonvulsants, and anesthetic agents. Their dependence, respiratory-depression, and overdose risks were also well known.",
        "Routine sedative and sleeping-pill use declined greatly after benzodiazepines and other drugs displaced them. Barbiturates still have selected medical uses. Phenobarbital remains important in seizure treatment; some other barbiturates have specialized anesthesia or critical-care roles."
      )}
      ${chain(["barbituric acid framework","barbital and other barbiturates","phenobarbital"])}
      ${sourceBox([
        '<a href="https://www.ncbi.nlm.nih.gov/books/NBK539731/" target="_blank" rel="noopener">NCBI Bookshelf — Barbiturates</a>'
      ])}`;
  }

  function scopolamineBody(){
    return `
      ${step(1,"First: the spelling.",
        `<p>The drug you are thinking of is <strong>scopolamine</strong>.</p>
         <div class="spelling-strip"><span>S</span><span>C</span><span>O</span><span>P</span><span>O</span><span>L</span><span>A</span><span>M</span><span>I</span><span>N</span><span>E</span></div>
         <p>Another name is <strong>hyoscine</strong>.</p>`)}

      ${step(2,"What kind of drug is it?",
        `${term("ANTIMUSCARINIC","A drug that blocks muscarinic receptors—the receptors through which many effects of the neurotransmitter acetylcholine are produced.")}
         ${term("ACETYLCHOLINE","A chemical messenger used by the nervous system.")}
         <p>Scopolamine is therefore not a barbiturate. Its pharmacology belongs to the antimuscarinic/anticholinergic family.</p>`)}

      ${step(3,"Yes: it can dilate the pupil.",
        `${term("MYDRIASIS","Dilation—widening—of the pupil.")}
         ${term("CYCLOPLEGIA","Temporary paralysis of the eye's focusing mechanism.")}
         <p>Scopolamine has mydriatic and cycloplegic effects and has had ophthalmic uses. This is the pupil-dilator part you were remembering.</p>`)}

      ${step(4,"Yes: it also has central sedative and amnestic effects.",
        `${term("AMNESTIC","Producing or contributing to loss of memory for events.")}
         <p>Because scopolamine enters the brain, it can produce drowsiness, sedation, confusion, and amnesia. At excessive exposure it can also produce agitation, delirium, hallucinations, paranoia, or other toxic mental effects.</p>`)}

      ${step(5,"The historical 'twilight sleep' use.",
        `<p>In the early 20th century, scopolamine was combined with morphine in an obstetric practice called <strong>twilight sleep</strong> or <em>Dämmerschlaf</em>.</p>
         ${term("TWILIGHT SLEEP","A historical scopolamine-morphine obstetric regimen intended to reduce pain and especially memory of labor.")}
         <p>The method became widely discussed in the 1910s. Its results and safety were controversial, and the original practice later fell out of routine use.</p>`)}

      ${step(6,"The mid-century picture.",
        `<p>By mid-century, scopolamine was known as an anticholinergic drug with uses that included preanesthetic medication, reduction of secretions, sedation/amnestic effects, motion-sickness prevention, and ophthalmic pupil dilation.</p>
         <p>The name therefore appears in older medical writing in contexts that can look quite different from the modern motion-sickness patch.</p>`)}

      ${step(7,"The current familiar use: motion sickness.",
        `<p>Current U.S. labeling prominently uses transdermal scopolamine for <strong>motion sickness</strong> and for <strong>postoperative nausea and vomiting</strong>.</p>
         ${term("TRANSDERMAL","Delivered through the skin.")}
         <p>The patch formulation is one reason many people today know scopolamine primarily as a motion-sickness drug.</p>`)}

      ${step(8,"Why the same drug can affect the eye, gut, and brain.",
        `<p>Muscarinic acetylcholine receptors occur in many parts of the body. Blocking them can reduce gland secretions and alter smooth-muscle activity; in the eye it can dilate the pupil; in the brain it can affect nausea pathways, alertness, memory, and cognition.</p>
         <p>One mechanism can therefore produce a scattered-looking list of effects.</p>`)}

      ${step(9,"A safety fact that explains the eye warning.",
        `<p>Pupil dilation can be hazardous for people with <strong>angle-closure glaucoma</strong> because it can contribute to a dangerous rise in eye pressure.</p>
         <p>This primer is about terminology and history, not instructions for taking or using the drug.</p>`)}

      ${step(10,"Shortest version.",
        `<div class="history-summary-chain">
          <div><b>Scopolamine</b><span>also called hyoscine</span></div>
          <div><b>Drug family</b><span>antimuscarinic / anticholinergic</span></div>
          <div><b>Eye effect</b><span>mydriasis and cycloplegia</span></div>
          <div><b>Brain effects</b><span>sedation, drowsiness, amnesia; toxic exposure can cause delirium and hallucinations</span></div>
          <div><b>Historical use</b><span>premedication and “twilight sleep” with morphine</span></div>
          <div><b>Current prominent use</b><span>motion sickness and postoperative nausea/vomiting</span></div>
         </div>`)}

      ${sourceBox([
        '<a href="https://www.ncbi.nlm.nih.gov/books/NBK554397/" target="_blank" rel="noopener">NCBI Bookshelf — Scopolamine</a>',
        '<a href="https://www.ncbi.nlm.nih.gov/mesh/68012601" target="_blank" rel="noopener">NLM MeSH — Scopolamine</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10804001/" target="_blank" rel="noopener">PMC — history of scopolamine-morphine “twilight sleep”</a>'
      ])}`;
  }

  function phenobarbitalBody(){
    return `
      <div class="phenobarbital-port-note">
        <strong>Imported from your original Phenobarbital teaching app.</strong>
        <span>The interaction has been converted into a continuous Glossary primer, but the full conceptual journey is retained.</span>
      </div>

      ${step(1,"Why is it called phenobarbital?",
        `<p>Phenobarbital is the name of a medicine. The name looks complicated, but it is not random. Almost every part of the name has a history.</p>
         ${chain(["a medicine","a chemical structure","benzene","gasoline","tree resin","perfume"])}
         <p>On the other side of the name:</p>
         ${chain(["phenobarbital","barbituric acid","Adolf von Baeyer","a mysterious “Barbara”"])}
         <div class="phenobarbital-word"><span>PHENO</span><b>|</b><span>BARBITAL</span></div>`)}

      ${step(2,"What is a chemical?",
        `<p>Everything around you is made of matter.</p>
         ${term("MATTER","The physical stuff that objects are made from.")}
         <p>Water, air, your body, and gasoline are matter. <strong>Chemistry</strong> is the study of matter: what it is made from and how it can change.</p>`)}

      ${step(3,"Matter is built from tiny pieces.",
        `${term("ATOM","One of the tiny building pieces from which ordinary matter is made.")}
         <p>We do not need to look inside the atom yet. We only need the idea that matter is built from atoms.</p>
         <div class="chem-atom">ATOM</div>`)}

      ${step(4,"What is a molecule?",
        `<p>Atoms can join together.</p>
         ${term("MOLECULE","A group of atoms joined together.")}
         <div class="chem-formula">H₂O</div>
         <p>One water molecule contains two hydrogen atoms and one oxygen atom. The small 2 tells us there are two hydrogen atoms.</p>`)}

      ${step(5,"What is carbon?",
        `<p>Carbon is one kind of atom. Its chemical symbol is <strong>C</strong>.</p>
         <div class="chem-formula">C &nbsp;&nbsp; C—C &nbsp;&nbsp; C—C—C</div>
         <p>Carbon atoms are especially important because they readily form bonds to many atoms, including other carbon atoms.</p>
         ${term("CHEMICAL BOND","A connection joining atoms together in a molecule.")}`)}

      ${step(6,"The six-carbon ring.",
        `<p>Imagine six carbon atoms arranged in a row, then bend the row until the first and last carbon atoms join.</p>
         <div class="benzene-diagram"><span>C</span><span>C</span><span>C</span><span>C</span><span>C</span><span>C</span></div>
         <p>Chemists often simplify the drawing. In a skeletal drawing, each corner of the hexagon can represent a carbon atom.</p>
         <div class="chem-hexagon" aria-label="simplified six carbon ring"></div>`)}

      ${step(7,"Meet benzene.",
        `<div class="chem-formula">BENZENE · C₆H₆</div>
         <p>Benzene contains six carbon atoms and six hydrogen atoms in a ring system. Chemical drawings often leave the C and H labels implicit.</p>
         <p>Benzene matters because it leads to the <strong>PHENO</strong> part of <strong>phenobarbital</strong>.</p>`)}

      ${step(8,"The poison in gasoline.",
        `<p>Gasoline is not one single chemical. It is a mixture.</p>
         ${term("MIXTURE","Several different substances present together.")}
         <p>Gasoline can contain benzene. <strong>Gasoline is not benzene.</strong></p>
         ${term("TOXIC","Capable of damaging a living body.")}
         <p><strong>Benzene is toxic.</strong> Repeated or substantial exposure can damage the blood-forming system and increase leukemia risk.</p>
         ${chain(["gasoline contains many substances","benzene can be one component","benzene is toxic"])}`)}

      ${step(9,"Now the surprise: perfume.",
        `<p>Why is <strong>benzene</strong> called benzene? The name ultimately leads backward to <strong>benzoin</strong>, a fragrant tree resin.</p>
         ${term("RESIN","A sticky plant substance that can harden into solid pieces.")}
         <p>Benzoin resin has long been used in incense, perfumes, and fragrance preparations. Chemists studying benzoin obtained and named <strong>benzoic acid</strong>; that name then contributed to the naming of <strong>benzene</strong>.</p>
         ${chain(["BENZOIN","BENZOIC ACID","BENZENE"])}
         <div class="memory"><strong>Benzoin ≠ benzene.</strong> They are different substances. The connection here is historical and etymological.</div>`)}

      ${step(10,"From benzene to phenyl.",
        `<p>A benzene molecule is C₆H₆. Imagine conceptually removing one hydrogen atom.</p>
         ${chain(["BENZENE · C₆H₆","remove one H","PHENYL · C₆H₅—"])}
         ${term("CHEMICAL GROUP","A recognizable collection of atoms that appears as part of a larger molecule.")}
         <p>The resulting <strong>phenyl group</strong> has a position through which it can be attached to the rest of a molecule.</p>`)}

      ${step(11,"Why 'PHENO'?",
        `<p>As chemical terminology developed, the benzene family produced names including <strong>phenyl</strong> and <strong>phenol</strong>. The <strong>PHENO</strong> part of phenobarbital points toward its <strong>phenyl</strong> group.</p>
         <div class="phenobarbital-word"><span>PHENO</span><b>|</b><span class="muted-piece">BARBITAL</span></div>
         <p>The older French chemical word <em>phène</em>, used by Auguste Laurent for benzene, is part of this naming history.</p>`)}

      ${step(12,"Meet Adolf von Baeyer.",
        `<p><strong>Adolf von Baeyer (1835–1917)</strong> was a German chemist. In the 1860s he made a substance whose name eventually led to the <strong>BARBITAL</strong> side of phenobarbital.</p>
         <p>Before naming that substance, we need one more molecule.</p>`)}

      ${step(13,"What is urea?",
        `${term("UREA","A small molecule produced naturally in the body during nitrogen metabolism and removed mainly in urine.")}
         <p>Urea can also be manufactured for agriculture, medicine, and scientific work. In this story, the important point is that <strong>Baeyer used urea in the chemistry that led to barbituric acid.</strong></p>
         <p>This is molecular ancestry and naming history—not a synthesis recipe.</p>`)}

      ${step(14,"Barbituric acid comes first.",
        `<div class="chem-formula">BARBITURIC ACID</div>
         <p>Baeyer called the substance <strong>barbituric acid</strong>. The word <em>acid</em> is part of its historical chemical name.</p>
         <p>Barbituric acid became a central framework that later chemists modified. <strong>Barbituric acid itself is not the powerful hypnotic drug implied by the later word “barbiturate.”</strong></p>
         ${chain(["UREA in Baeyer's chemistry","BARBITURIC ACID","later substituted compounds","BARBITAL"])}
         <p><strong>Barbital</strong> was a later pharmacologically active compound based on the barbituric-acid family.</p>`)}

      ${step(15,"The Barbara mystery.",
        `<p>Nobody knows with certainty why Baeyer called the compound <strong>barbituric acid</strong>.</p>
         <div class="definition-grid">
           <div class="definition-card"><h3>A woman named Barbara</h3><p>Some accounts connect the name with a woman named Barbara whom Baeyer knew.</p></div>
           <div class="definition-card"><h3>St. Barbara</h3><p>Another tradition links the name with St. Barbara, patron saint of artillerymen.</p></div>
           <div class="definition-card"><h3>A feast-day story</h3><p>Another version associates the naming or celebration with St. Barbara's feast day.</p></div>
           <div class="definition-card"><h3>Other explanations</h3><p>Other etymologies have also been proposed.</p></div>
         </div>
         <div class="myth-check"><strong>MYTH CHECK: “Barbara was Baeyer's wife.” — FALSE.</strong><p>Baeyer's wife was <strong>Adelheid “Lida” Bendemann</strong>. Who Barbara was, if any particular Barbara was involved at all, remains uncertain.</p></div>`)}

      ${step(16,"The number 5—and one last group.",
        `<p>Chemists number positions in chemical structures. On the barbituric-acid framework, the position called <strong>5</strong> is where the phenyl group and another group are attached in phenobarbital.</p>
         ${term("ETHYL","A two-carbon group, written in shorthand as C₂H₅— when showing its attachment point.")}
         ${chain(["position 5","an ETHYL group joins there","a PHENYL group joins there"])}`)}

      ${step(17,"Now the long name is readable.",
        `<div class="chem-formula long">5-ethyl-5-phenylbarbituric acid</div>
         <div class="definition-grid">
           <div class="definition-card"><h3>5</h3><p>the numbered attachment position</p></div>
           <div class="definition-card"><h3>ethyl</h3><p>the two-carbon group</p></div>
           <div class="definition-card"><h3>5</h3><p>the same numbered position</p></div>
           <div class="definition-card"><h3>phenyl</h3><p>the benzene-derived C₆H₅— group</p></div>
           <div class="definition-card"><h3>barbituric acid</h3><p>the central family framework named by Baeyer</p></div>
         </div>
         <div class="phenobarbital-word"><span>PHENO</span><b>|</b><span>BARBITAL</span></div>
         <p><strong>PHENO</strong> points toward the phenyl group. <strong>BARBITAL</strong> points toward the barbituric-acid/barbiturate family.</p>`)}

      ${step(18,"The name is no longer random.",
        `<div class="compare-grid">
          <div class="compare-card"><h3>The PHENO trail</h3>${chain(["perfume","benzoin resin","benzoic acid","benzene","phenyl","PHENO"])}</div>
          <div class="compare-card"><h3>The BARBITAL trail</h3>${chain(["Adolf von Baeyer + urea","barbituric acid","Barbara?","barbital","BARBITAL"])}</div>
         </div>
         <p>Two trails meet in one medicine name.</p>
         <div class="history-summary-chain">
           <div><b>1860s</b><span>Baeyer develops and names barbituric acid.</span></div>
           <div><b>Early 1900s</b><span>Pharmacologically active barbiturates emerge.</span></div>
           <div><b>1911</b><span>Phenobarbital is associated with Heinrich Hörlein and Bayer development.</span></div>
           <div><b>1912</b><span>Bayer markets phenobarbital under the name Luminal.</span></div>
           <div><b>1912 onward</b><span>Its antiseizure usefulness becomes recognized, alongside sedative effects.</span></div>
         </div>
         <div class="memory"><strong>Final view:</strong> PHENO → phenyl → benzene → benzoic acid → benzoin → perfume; BARBITAL → barbituric acid → Baeyer + urea → the uncertain Barbara story.</div>`)}

      <section class="entry-section">
        <h3>The complete chain</h3>
        ${chain(["BENZOIN","BENZOIC ACID","BENZENE","PHENYL","PHENO","PHENOBARBITAL"])}
        ${chain(["BAEYER + UREA","BARBITURIC ACID","BARBITAL / BARBITURATE","PHENOBARBITAL"])}
        <p><strong>Benzoin ≠ benzene.</strong> <strong>Gasoline ≠ benzene.</strong> <strong>Barbara ≠ Baeyer's wife.</strong></p>
      </section>
    `;
  }

  const entries = [
    {slug:"psychiatry",title:"Psychiatry",category:"Fields",short:"The medical specialty concerned with mental and behavioral disorders, with a major shift in U.S. practice since the mid-20th century.",keywords:"psychiatry psychiatrist mid century psychoanalysis DSM medical specialty",body:psychiatryBody()},
    {slug:"psychology",title:"Psychology",category:"Fields",short:"The systematic study of behavior and mental processes, with academic and professional branches.",keywords:"psychology psychologist behavior cognition mid century behaviorism psychoanalysis",body:psychologyBody()},
    {slug:"sociology",title:"Sociology",category:"Fields",short:"The systematic study of social groups, institutions, relationships, and societies.",keywords:"sociology society institutions social science mid century structural functionalism",body:sociologyBody()},
    {slug:"schizophrenia",title:"Schizophrenia",category:"Psychosis Terms",short:"A specific psychiatric diagnosis involving persistent disturbances that can include psychotic symptoms.",keywords:"schizophrenia schizophrenic reaction DSM I DSM II psychosis hallucination delusion",body:schizophreniaBody()},
    {slug:"psychosis",title:"Psychosis",category:"Psychosis Terms",short:"A state or syndrome involving substantial impairment in reality testing.",keywords:"psychosis reality testing hallucination delusion psychotic mid century neurosis",body:psychosisBody()},
    {slug:"psychotic",title:"Psychotic",category:"Psychosis Terms",short:"The adjective for something involving psychosis; not a synonym for schizophrenia or violence.",keywords:"psychotic adjective psychosis schizophrenia mid century terminology",body:psychoticBody()},
    {slug:"sedative",title:"Sedative",category:"Sedation & Sleep Terms",short:"A drug or substance that reduces nervous-system activity or arousal; sleep is not required.",keywords:"sedative sedation calming drowsiness barbiturate hypnotic",body:sedativeBody()},
    {slug:"soporific",title:"Soporific",category:"Sedation & Sleep Terms",short:"Sleep-producing or strongly drowsiness-producing; also figuratively, extremely boring.",keywords:"soporific sleep drowsy sedative boring sopor",body:soporificBody()},
    {slug:"hypnotic-drug",title:"Hypnotic Drug",category:"Sedation & Sleep Terms",short:"In pharmacology, a sleep-inducing drug; distinct from hypnosis.",keywords:"hypnotic drug sedative hypnotic sleeping pill sleep barbiturate",body:hypnoticDrugBody()},
    {slug:"hypnosis",title:"Hypnosis",category:"Sedation & Sleep Terms",short:"A procedure or condition involving focused attention and responsiveness to suggestion.",keywords:"hypnosis hypnotic induction suggestion mesmerism mid century",body:hypnosisBody()},
    {slug:"barbiturates",title:"Barbiturate / Barbiturates",category:"Drug Terms & History",short:"A sedative-hypnotic and anticonvulsant drug family derived from barbituric-acid chemistry.",keywords:"barbiturate barbiturates barbituate barbituates barbibturate barbibturates sedative hypnotic phenobarbital",body:barbituratesBody()},
    {slug:"scopolamine-primer",title:"Scopolamine — Primer",category:"Drug Terms & History",short:"The antimuscarinic drug remembered both for pupil dilation and for historical sedative/amnestic uses.",keywords:"scopolamine hyoscine pupil dilator mydriasis cycloplegia sedative amnestic twilight sleep motion sickness antimuscarinic",body:scopolamineBody()},
    {slug:"phenobarbital-full-primer",title:"Phenobarbital — Complete Primer",category:"Drug Terms & History",short:"The complete beginner journey from matter and benzene to phenyl, barbituric acid, Baeyer, Barbara, and the full drug name.",keywords:"phenobarbital phenobarbitol barbiturate benzene gasoline benzoin perfume phenyl pheno barbital Baeyer Barbara urea",body:phenobarbitalBody()}
  ];

  window.PSYCHIATRY_CONTENT = { defaultBody: defaultPrimer(), entries };
})();
