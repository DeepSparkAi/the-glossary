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
          <p class="lede">Start with ordinary meanings. Add the technical names only after the underlying idea is clear.</p>
          <div class="primer-chain"><span>fields</span><b>→</b><span>symptoms</span><b>→</b><span>diagnoses</span><b>→</b><span>sleep words</span><b>→</b><span>drug history</span></div>
        </header>

        ${step(1,"Four basic words before we begin.",
          `${term("FIELD","An area of study or professional work.")}
           ${term("SYMPTOM","Something a person experiences or shows that may indicate a condition—for example, pain, confusion, or hearing a voice that is not coming from an outside speaker.")}
           ${term("DIAGNOSIS","A name a clinician gives to a condition after deciding that a defined set of features is present.")}
           ${term("DISORDER","A medical or psychological category used for a pattern of symptoms or impairment. The word is a classification term; by itself it does not explain the cause.")}`)}

        ${step(2,"Now separate the three fields.",
          `${term("PSYCHIATRY","A branch of medicine dealing with mental and behavioral disorders. A psychiatrist is a physician—a medical doctor—who works in this specialty.")}
           ${term("PSYCHOLOGY","The study of behavior and mental processes. A mental process is something the mind does, such as remembering, perceiving, deciding, or paying attention.")}
           ${term("SOCIOLOGY","The study of people in groups and societies: families, institutions, organizations, social relationships, and large social patterns.")}
           ${term("SOCIAL INSTITUTION","A durable organized part of social life, such as family, education, law, religion, government, or markets.")}
           <p>The three fields can examine some of the same people or behavior, but they approach them from different traditions.</p>`)}

        ${step(3,"Psychosis first, then schizophrenia.",
          `<p>Before using the word <strong>psychosis</strong>, start with a simpler idea: a person can have serious difficulty deciding whether an experience, perception, or belief matches the shared outside world.</p>
           ${term("REALITY TESTING","The ability to compare what you think or perceive with outside evidence and with what other people can observe.")}
           ${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in the person's cultural and clinical context.")}
           ${term("HALLUCINATION","A perception-like experience—such as hearing a voice or seeing an image—without the corresponding outside source being present.")}
           ${term("PSYCHOSIS","A condition or state in which reality testing is seriously disturbed. Delusions, hallucinations, or severely disorganized thought or behavior may occur.")}
           ${term("PSYCHOTIC","The adjective form: involving psychosis.")}
           ${term("SCHIZOPHRENIA","A specific psychiatric diagnosis in which psychotic symptoms can occur, together with other changes in thinking, behavior, motivation, or emotional expression.")}
           <div class="memory"><strong>Psychosis is not the same thing as schizophrenia.</strong> Psychosis is a type of disturbance. Schizophrenia is one diagnosis in which that disturbance may occur.</div>`)}

        ${step(4,"Now separate the sleep-and-calming words.",
          `${term("NERVOUS SYSTEM","The brain, spinal cord, and nerves—the body's information and control network.")}
           ${term("SEDATIVE","A drug or substance that reduces alertness, agitation, or nervous-system activity. It may cause drowsiness, but it does not have to produce sleep.")}
           ${term("SOPORIFIC","Something that tends to produce sleep or strong drowsiness. In ordinary speech it can also mean extremely boring.")}
           ${term("HYPNOTIC DRUG","In medicine, a drug used to produce or maintain sleep.")}
           ${term("HYPNOSIS","A procedure involving focused attention and responsiveness to suggestion.")}
           ${term("SUGGESTION","A communication intended to influence an experience, perception, thought, feeling, or action.")}
           <p><strong>Hypnotic</strong> therefore has two different uses: <em>sleep-producing</em> when talking about a drug, and <em>related to hypnosis</em> when talking about suggestion or attention.</p>`)}

        ${step(5,"Two very different drug histories.",
          `<p><strong>Scopolamine</strong> and <strong>barbiturates</strong> can both cause drowsiness, but they belong to different drug families and work in different ways.</p>
           ${term("SCOPOLAMINE","A drug, also called hyoscine, that blocks some effects of the chemical messenger acetylcholine. It has been used for motion sickness, before anesthesia, and historically for pupil dilation and sedative or memory-impairing effects.")}
           ${term("ACETYLCHOLINE","A chemical messenger used by nerve cells to send certain signals.")}
           ${term("BARBITURATE","A member of an older drug family that slows activity in the brain and nervous system. Depending on the drug and amount, barbiturates have been used for calming, sleep, seizure control, or anesthesia.")}
           <p>The shared effect—drowsiness—does <strong>not</strong> mean the two drug families are chemically or pharmacologically the same.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('scopolamine-primer')">Open the Scopolamine primer →</button>
           <button type="button" class="primer-open-link" onclick="openEntry('barbiturates')">Open the Barbiturate primer →</button>`)}

        ${step(6,"The full Phenobarbital journey is preserved here.",
          `<p>The original Phenobarbital teaching app is included as a complete 18-step primer. It begins with matter, atoms, and molecules before introducing benzene, phenyl, barbituric acid, and the history inside the name.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('phenobarbital-full-primer')">Open the complete Phenobarbital primer →</button>`)}

        <section class="primer-finish">
          <p class="kicker">Standing rule</p>
          <h3>No unexplained jargon.</h3>
          <p>If a technical word is needed, the page defines it before depending on it.</p>
        </section>
      </div>`;
  }

  function psychiatryBody(){
    return `
      ${step(1,"Start with medicine.",
        `${term("PHYSICIAN","A medical doctor.")}
         ${term("MEDICAL SPECIALTY","A branch of medicine in which a physician receives focused training.")}
         <p><strong>Psychiatry</strong> is the medical specialty concerned with mental and behavioral disorders.</p>
         ${term("PSYCHIATRIST","A physician whose medical specialty is psychiatry.")}`)}

      ${step(2,"What does a psychiatrist do with a diagnosis?",
        `${term("DIAGNOSIS","A name given to a condition after deciding that a defined pattern of features is present.")}
         ${term("CLASSIFICATION","Putting conditions into named groups so clinicians and researchers can refer to the same categories.")}
         <p>Psychiatry describes, classifies, diagnoses, and treats conditions that fall within its medical categories. Those activities are not the same thing: naming a category is different from explaining its cause.</p>`)}

      ${step(3,"Mid-century psychiatry used a different vocabulary.",
        `${term("INPATIENT","A person staying in a hospital for care.")}
         ${term("OUTPATIENT","A person receiving care without staying overnight in a hospital.")}
         ${term("PSYCHOANALYSIS","A school of theory and treatment associated with Sigmund Freud and later writers, emphasizing unconscious mental processes and conflicts.")}
         ${term("PSYCHODYNAMIC","A broader family of ideas that explains behavior partly through interacting mental forces, conflicts, motives, and processes outside immediate awareness.")}
         ${term("DSM","Short for Diagnostic and Statistical Manual of Mental Disorders, a U.S. psychiatric classification manual.")}
         <p>In the United States after World War II, psychiatry included large state hospitals, expanding outpatient work, and strong psychoanalytic and psychodynamic influence. DSM-I appeared in 1952 and used broad categories such as “reactions.”</p>`)}

      ${step(4,"What changed after mid-century?",
        `${term("DIAGNOSTIC CRITERIA","A written list of features used to decide whether a diagnosis applies.")}
         ${term("OPERATIONALIZED","Written in a more explicit way so different clinicians can apply the same rule more consistently.")}
         ${term("PSYCHOPHARMACOLOGY","The study and use of drugs that affect mood, thought, perception, or behavior.")}
         ${term("NEUROSCIENCE","The study of the brain, spinal cord, nerves, and the cells and signals that make up the nervous system.")}
         <p>Beginning especially with DSM-III in 1980, U.S. psychiatry placed more emphasis on explicit diagnostic criteria and standardized categories. Drug treatment and neuroscience also became more prominent parts of the field. Older psychoanalytic and social approaches did not disappear.</p>`)}

      ${shift(
        "Mid-century U.S. psychiatry used broader diagnostic descriptions, large state-hospital systems, and strong psychoanalytic and psychodynamic frameworks.",
        "Current U.S. psychiatry uses more explicit diagnostic criteria and a larger role for drug treatment and neuroscience, while retaining multiple competing approaches."
      )}

      <section class="entry-section"><h3>Word history</h3><p><em>Psychiatry</em> uses Greek-derived word parts meaning roughly <strong>mind/soul</strong> and <strong>medical treatment or healing</strong>.</p></section>
      ${sourceBox([
        '<a href="https://pubmed.ncbi.nlm.nih.gov/8434655/" target="_blank" rel="noopener">PubMed — DSM-III and the transformation of American psychiatry</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/21879574/" target="_blank" rel="noopener">PubMed — U.S. mental-health fields, 1940–1970</a>'
      ])}`;
  }

  function psychologyBody(){
    return `
      ${step(1,"Start with behavior and mental processes.",
        `${term("BEHAVIOR","What a person or animal does—the actions that can be observed or recorded.")}
         ${term("MENTAL PROCESS","An activity of the mind, such as perceiving, remembering, paying attention, thinking, deciding, or feeling.")}
         <p><strong>Psychology</strong> is the systematic study of behavior and mental processes.</p>
         ${term("PSYCHOLOGIST","A person professionally trained in psychology. The exact training and legal role depend on the job and jurisdiction.")}`)}

      ${step(2,"Psychology contains many branches.",
        `<div class="definition-grid">
           <div class="definition-card"><h3>experimental</h3><p>uses controlled studies to test questions</p></div>
           <div class="definition-card"><h3>cognitive</h3><p>studies thinking, memory, attention, language, and related processes</p></div>
           <div class="definition-card"><h3>developmental</h3><p>studies change across the lifespan</p></div>
           <div class="definition-card"><h3>social</h3><p>studies how people affect and respond to other people</p></div>
           <div class="definition-card"><h3>clinical</h3><p>applies psychological assessment and intervention to mental or behavioral problems</p></div>
           <div class="definition-card"><h3>industrial / organizational</h3><p>studies behavior in workplaces and organizations</p></div>
         </div>`)}

      ${step(3,"Mid-century psychology had its own dominant terms.",
        `${term("BEHAVIORISM","An approach that concentrated heavily on observable behavior and learning rather than treating private mental events as the main object of explanation.")}
         ${term("PSYCHOMETRICS","The measurement of psychological characteristics through tests, scales, and statistical methods.")}
         ${term("PSYCHOANALYTIC","Related to psychoanalysis, the Freud-associated tradition emphasizing unconscious processes and conflicts.")}
         <p>Mid-century American academic psychology was strongly influenced by behaviorism, experimental learning research, testing, and psychometrics. Clinical psychology expanded after World War II, while psychoanalytic ideas remained influential in many clinical settings.</p>`)}

      ${step(4,"The field later became broader.",
        `${term("COGNITIVE SCIENCE","The study of thinking, memory, language, perception, and related information-processing abilities.")}
         ${term("NEUROSCIENCE","The study of the nervous system, especially the brain and its cells and signals.")}
         ${term("QUANTITATIVE METHOD","A method that analyzes measurements or numbers.")}
         ${term("QUALITATIVE METHOD","A method that analyzes non-numerical material such as interviews, observations, or texts.")}
         <p>Current psychology uses many approaches at once: behavioral, cognitive, biological, developmental, social, quantitative, qualitative, and others.</p>`)}

      ${shift(
        "Mid-century U.S. psychology placed especially heavy emphasis on behaviorism, learning experiments, testing, and psychometrics, while psychoanalytic ideas influenced many clinical settings.",
        "Current psychology contains a broader mixture of behavioral, cognitive, biological, social, developmental, statistical, and qualitative approaches."
      )}

      <section class="entry-section"><h3>Not the same as psychiatry</h3><p>Psychology is not, by definition, a branch of medicine. Psychiatry is a medical specialty. The two fields can overlap in research and clinical settings.</p></section>`;
  }

  function sociologyBody(){
    return `
      ${step(1,"Start with social life.",
        `${term("SOCIAL","Having to do with people living, acting, or organizing in relation to other people.")}
         <p><strong>Sociology</strong> is the systematic study of social life: groups, institutions, organizations, relationships, and societies.</p>`)}

      ${step(2,"Define the pieces.",
        `${term("SOCIAL INSTITUTION","A durable organized pattern of social life, such as family, education, law, religion, government, or markets.")}
         ${term("SOCIAL INEQUALITY","Unequal access to money, power, status, rights, opportunities, or other resources among people or groups.")}
         ${term("CULTURE","Shared practices, meanings, beliefs, symbols, habits, and ways of life learned within groups.")}
         ${term("POPULATION","A defined group of people being studied—for example, everyone living in a city at a particular time.")}`)}

      ${step(3,"A mid-century term that needs unpacking.",
        `${term("STRUCTURAL FUNCTIONALISM","A theory that looks at society as a system of connected parts and asks what roles those parts play in maintaining or changing the larger social system.")}
         <p>Mid-century U.S. sociology gave major attention to institutions, social roles, organizations, cities, family, class, race, population, survey research, and broad theories such as structural functionalism.</p>`)}

      ${step(4,"Current sociology uses many methods.",
        `${term("QUANTITATIVE","Using numbers or measurements.")}
         ${term("QUALITATIVE","Using material such as interviews, observations, documents, or detailed descriptions.")}
         ${term("COMPUTATIONAL","Using computer-based methods to analyze data or model social patterns.")}
         <p>Current sociology combines quantitative, qualitative, historical, comparative, network, and computational methods. No single theory defines the whole field.</p>`)}

      ${shift(
        "The basic meaning was already close to today's meaning, but mid-century U.S. sociology had especially influential large theories of social order such as structural functionalism.",
        "The word still means the study of social life and societies, but the field now uses a wider mixture of methods and competing theories."
      )}

      <section class="entry-section"><h3>Not a diagnosis field</h3><p>Sociology studies social patterns and institutions. It does not, by itself, diagnose an individual person's psychiatric condition.</p></section>`;
  }

  function schizophreniaBody(){
    return `
      ${step(1,"Start with the simplest definition.",
        `<p><strong>Schizophrenia</strong> is the name of a psychiatric diagnosis. It can involve serious disturbances in perception, belief, thought, speech, behavior, motivation, and emotional expression.</p>
         <p>The diagnosis is not defined by one symptom alone.</p>`)}

      ${step(2,"Define the symptom words before using them.",
        `${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in the person's cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience—such as hearing a voice—without the corresponding outside source being present.")}
         ${term("DISORGANIZED SPEECH","Speech that is difficult to follow because ideas are connected in a severely confused or fragmented way.")}
         ${term("CATATONIA","A marked disturbance of movement and responsiveness. It can include very little movement or response, unusual fixed postures, or sometimes excessive purposeless movement.")}
         ${term("NEGATIVE SYMPTOM","A reduction or loss of an ordinary function, such as reduced emotional expression, reduced speech, or reduced motivation. “Negative” here means something is diminished; it does not mean morally bad.")}`)}

      ${step(3,"Why is it called schizophrenia?",
        `<p>Swiss psychiatrist <strong>Eugen Bleuler</strong> introduced the term in 1908 and developed it in his 1911 book.</p>
         <div class="flow"><span><strong>schizein</strong><br>to split</span><b>+</b><span><strong>phrēn / phrenos</strong><br>mind</span><b>→</b><span><strong>schizophrenia</strong><br>roughly “splitting of the mind”</span></div>
         <p>Bleuler was describing what he regarded as a splitting or loss of unity among mental functions. He was <strong>not</strong> simply naming two separate personalities.</p>`)}

      ${step(4,"Why did 'split personality' become associated with the word?",
        `${term("FIGURATIVE","Using a word as a comparison or metaphor rather than in its strict technical meaning.")}
         <p>By the mid-20th century, <em>schizophrenic</em> was also being used figuratively for something divided, contradictory, or “of two minds.” That helped create the popular “split personality” association.</p>
         ${term("DISSOCIATIVE IDENTITY DISORDER","A different diagnosis involving two or more distinct identity states together with significant disruptions of memory and identity. It is not schizophrenia.")}`)}

      ${step(5,"The diagnostic manuals changed.",
        `${term("DSM","The Diagnostic and Statistical Manual of Mental Disorders, a U.S. classification manual used in psychiatry and related fields.")}
         ${term("DIAGNOSTIC CRITERIA","Written features used to decide whether a diagnosis applies.")}
         ${term("SUBTYPE","A smaller named category inside a larger diagnosis.")}
         <p>DSM-I in 1952 used the phrase <strong>schizophrenic reactions</strong>. DSM-III in 1980 introduced much more explicit criteria. Later manuals also removed the older paranoid, catatonic, disorganized, residual, and undifferentiated schizophrenia subtypes as separate subtypes.</p>`)}

      ${shift(
        "Mid-century U.S. practice used broader descriptions such as “schizophrenic reaction,” and the adjective “schizophrenic” also spread into figurative language meaning divided or contradictory.",
        "Current diagnostic usage does not define schizophrenia as multiple personality or literally 'two minds.' The diagnosis is made using explicit symptom and duration criteria."
      )}

      ${sourceBox([
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3080676/" target="_blank" rel="noopener">PMC — Bleuler and the original concept of splitting</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3339235/" target="_blank" rel="noopener">PMC — origin of the term schizophrenia</a>'
      ])}`;
  }

  function schizophrenicBody(){
    return `
      ${step(1,"First: what kind of word is it?",
        `${term("ADJECTIVE","A word that describes or modifies another word.")}
         <p><strong>Schizophrenic</strong> is the adjective formed from <strong>schizophrenia</strong>. In strict clinical use, it means <strong>relating to schizophrenia</strong>.</p>
         <div class="example"><strong>schizophrenic symptoms</strong><br><span class="example-note">symptoms discussed in relation to schizophrenia</span></div>`)}

      ${step(2,"Mid-century English also gave it a figurative meaning.",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its strict literal or technical sense.")}
         <p>By the 1950s, writers were also using <em>schizophrenic</em> figuratively to mean <strong>divided, contradictory, split, or “of two minds.”</strong></p>
         <p>That figurative use helps explain why many people came to associate schizophrenia with a “split personality.”</p>`)}

      ${step(3,"That is not the modern diagnostic definition.",
        `<p>Schizophrenia does not medically mean that one person contains two separate personalities.</p>
         ${term("DISSOCIATIVE IDENTITY DISORDER","A separate diagnosis involving distinct identity states and significant disruptions of memory and identity.")}
         <p>The two diagnoses are not interchangeable.</p>`)}

      ${shift(
        "Mid-century writing commonly used “schizophrenic” as an adjective, sometimes as a noun for a person, and also figuratively for something divided or contradictory.",
        "Current clinical writing generally avoids using 'a schizophrenic' as a noun and more often says 'a person with schizophrenia.' The figurative 'split' meaning still exists in ordinary language but is not the diagnostic meaning."
      )}`;
  }

  function psychosisBody(){
    return `
      ${step(1,"Start with a group of symptoms.",
        `${term("SYNDROME","A group of signs or symptoms that occur together. A syndrome describes a pattern; it does not necessarily tell you the cause.")}
         <p><strong>Psychosis</strong> is a state or syndrome in which a person's ability to judge what is happening in shared external reality is seriously disturbed.</p>`)}

      ${step(2,"Now define reality testing.",
        `${term("REALITY TESTING","The ability to compare an idea, belief, or perception with outside evidence and with what other people can observe.")}
         ${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("DISORGANIZED","So confused or poorly connected that ordinary structure is difficult to follow.")}
         <p>Psychosis can therefore include delusions, hallucinations, or severely disorganized thought, speech, or behavior.</p>`)}

      ${step(3,"Psychosis does not identify one cause.",
        `${term("MOOD DISORDER","A diagnosis in which a major disturbance of mood—such as depression or unusually elevated or irritable mood—is central.")}
         ${term("SUBSTANCE-INDUCED","Caused or triggered by a drug, medication, alcohol, toxin, or withdrawal from a substance.")}
         ${term("NEUROLOGICAL","Having to do with the brain, spinal cord, or nerves.")}
         <p>Psychosis can occur in schizophrenia, some mood disorders, substance-induced conditions, and some neurological or other medical conditions.</p>`)}

      ${step(4,"The mid-century contrast: psychosis versus neurosis.",
        `${term("NEUROSIS","An older broad term for emotional or psychological problems in which reality testing was generally considered intact. The word is no longer a main formal DSM category.")}
         <p>Mid-century writing often contrasted <strong>psychosis</strong> with <strong>neurosis</strong>: psychosis implied a more severe disturbance of reality testing, while neurosis did not.</p>`)}

      ${shift(
        "Psychosis was often used as a broad umbrella for severe mental disorders and was commonly contrasted with the older category 'neurosis.'",
        "Current usage is more symptom-focused. Psychosis describes a type of disturbance and does not, by itself, specify the diagnosis or cause."
      )}

      <div class="memory"><strong>Psychosis is not one single disease.</strong> It is a type of disturbance that can occur for different reasons.</div>`;
  }

  function psychoticBody(){
    return `
      ${step(1,"The word is mainly an adjective.",
        `${term("ADJECTIVE","A word that describes or modifies another word.")}
         <p><strong>Psychotic</strong> means <strong>involving psychosis</strong> or <strong>showing symptoms of psychosis</strong>.</p>`)}

      ${step(2,"Three common phrases.",
        `<div class="definition-grid">
          <div class="definition-card"><h3>psychotic symptom</h3><p>a symptom such as a delusion or hallucination occurring as part of psychosis</p></div>
          <div class="definition-card"><h3>psychotic episode</h3><p>a period of time during which psychotic symptoms are present</p></div>
          <div class="definition-card"><h3>psychotic disorder</h3><p>a diagnostic category in which psychosis is a defining or major feature</p></div>
        </div>`)}

      ${step(3,"What it does not mean by itself.",
        `<p><strong>Psychotic</strong> is not a synonym for schizophrenia. It also does not, by itself, mean violent, dangerous, unintelligent, irrational in every respect, or merely eccentric.</p>`)}

      ${shift(
        "Mid-century psychiatric writing used 'psychotic' more broadly as a severity or category label and sometimes used the noun 'a psychotic' for a person.",
        "Current professional writing more often uses the adjective in phrases such as 'psychotic symptoms' or 'psychotic episode,' and tends to avoid using the noun as a label for a person."
      )}`;
  }

  function sedativeBody(){
    return `
      ${step(1,"Start with the nervous system.",
        `${term("NERVOUS SYSTEM","The brain, spinal cord, and nerves—the body's information and control network.")}
         ${term("AROUSAL","How awake, alert, and responsive a person is.")}
         <p>A <strong>sedative</strong> is a drug or other substance that reduces arousal or nervous-system activity. Drowsiness may result, but sleep is not required.</p>
         ${term("SEDATION","A state of reduced alertness or responsiveness produced by a drug or other intervention.")}`)}

      ${step(2,"Sedative and hypnotic are related but not identical.",
        `${term("HYPNOTIC DRUG","A drug used to produce or maintain sleep.")}
         <p>A drug can be <strong>sedating</strong> without being used mainly as a sleeping drug. Some drugs have both calming and sleep-producing effects, depending partly on the amount and the person.</p>`)}

      ${step(3,"Some older names you may meet.",
        `${term("BARBITURATE","A member of an older drug family that slows brain and nervous-system activity.")}
         ${term("BROMIDE","A chemical salt containing bromide. Bromide preparations were historically used as calming and seizure-control drugs before newer medicines displaced them.")}
         ${term("CHLORAL HYDRATE","An older drug used to cause sleep or sedation.")}
         <p>Mid-century writing commonly grouped drugs such as barbiturates, bromides, and chloral hydrate under sedative or hypnotic headings.</p>`)}

      ${step(4,"A later drug family displaced many barbiturate uses.",
        `${term("BENZODIAZEPINE","A later drug family that slows activity in the brain and is used in various settings for anxiety, sedation, sleep, seizures, or muscle relaxation.")}
         ${term("ADVERSE EFFECT","An unwanted or harmful effect of a drug.")}
         <p>Beginning in the 1960s, benzodiazepines displaced barbiturates for many routine sedative and sleeping-pill uses. In modern medicine, sedation may be either the intended effect or an unwanted adverse effect.</p>`)}

      ${shift(
        "Sedative commonly referred to calming or drowsiness-producing drugs such as barbiturates, bromides, and chloral hydrate. Sedative and hypnotic were often discussed together.",
        "The basic meaning is similar, but the drug classes in common use changed. Sedation can be an intended effect or an unwanted side effect."
      )}`;
  }

  function soporificBody(){
    return `
      ${step(1,"The ordinary meaning is simple.",
        `<p><strong>Soporific</strong> means <strong>causing sleep or strong drowsiness</strong>.</p>
         ${term("ADJECTIVE","A describing word. In 'a soporific drug,' soporific is an adjective.")}
         ${term("NOUN","A naming word. Older writing can use 'a soporific' to mean a sleep-producing substance.")}`)}

      ${step(2,"The word itself contains the clue.",
        `<p>The word comes through Latin roots connected with <em>sopor</em>, meaning <strong>deep sleep</strong>, plus a root meaning <strong>to make or produce</strong>.</p>
         ${chain(["sopor · deep sleep","-fic · making","soporific · sleep-making"])}`)}

      ${step(3,"Medical and figurative uses.",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its literal sense.")}
         <p>In older medical writing, <strong>soporific</strong> could straightforwardly describe a sleep-producing preparation. In ordinary modern speech, it is often figurative: <em>a soporific lecture</em> means a lecture so dull that it makes people sleepy.</p>`)}

      ${shift(
        "Medical and general writing used soporific more often as a direct word for a sleep-producing drug or preparation.",
        "The word remains understandable medically, but 'hypnotic' and 'sedative-hypnotic' are more common technical terms. Figurative 'extremely boring' use is common."
      )}`;
  }

  function hypnoticDrugBody(){
    return `
      ${step(1,"One word, two meanings.",
        `<p><strong>Hypnotic</strong> can refer either to <strong>sleep-producing drugs</strong> or to <strong>hypnosis</strong>. The surrounding words tell you which meaning is intended.</p>`)}

      ${step(2,"Meaning one: a sleeping drug.",
        `${term("PHARMACOLOGY","The study of drugs: what they do to the body and what the body does to them.")}
         ${term("HYPNOTIC DRUG","In pharmacology, a drug used to produce or maintain sleep.")}
         ${term("SEDATIVE","A drug that reduces alertness, agitation, or nervous-system activity without necessarily producing sleep.")}
         ${term("SEDATIVE-HYPNOTIC","A drug described as having both calming and sleep-producing effects.")}`)}

      ${step(3,"Meaning two: related to hypnosis.",
        `${term("HYPNOSIS","A procedure involving focused attention and responsiveness to suggestion.")}
         ${term("HYPNOTIC SUGGESTION","A suggestion given in the context of hypnosis.")}
         ${term("HYPNOTIC INDUCTION","The procedure used to begin a hypnosis session and establish focused attention and responsiveness to suggestion.")}
         <p>A <strong>hypnotic drug</strong> does not mean a drug that performs hypnosis. In medicine, it normally means a sleep-producing drug.</p>`)}

      ${step(4,"Why sedative and hypnotic often appear together.",
        `${term("DOSE","The amount of a drug given or taken.")}
         <p>Some older drugs could produce mild calming at one dose and sleep at a stronger dose. That is why older medical writing often used the combined expression <strong>sedative-hypnotic</strong>.</p>`)}

      ${step(5,"The drug families changed.",
        `${term("BARBITURATE","An older drug family used for sedation, sleep, seizure control, and anesthesia.")}
         ${term("BENZODIAZEPINE","A later drug family used in various settings for anxiety, sedation, sleep, seizures, and muscle relaxation.")}
         <p>Mid-century hypnotic drugs prominently included barbiturates and chloral-type drugs. Later, benzodiazepines and newer sleeping drugs displaced barbiturates for much routine sleep treatment.</p>`)}

      ${shift(
        "Hypnotic commonly meant a sleep-producing drug, often a barbiturate or another older sedative-hypnotic.",
        "The pharmacological meaning remains, but the commonly used drug families have changed. The separate adjective 'hypnotic' still also means related to hypnosis."
      )}`;
  }

  function hypnosisBody(){
    return `
      ${step(1,"Start with attention and suggestion.",
        `${term("ATTENTION","The process of concentrating awareness on some information rather than everything available at once.")}
         ${term("SUGGESTION","A communication intended to influence an experience, perception, thought, feeling, or action.")}
         <p><strong>Hypnosis</strong> is a procedure involving focused attention and responsiveness to suggestion.</p>`)}

      ${step(2,"A hypnosis session has a beginning procedure.",
        `${term("HYPNOTIC INDUCTION","The procedure used to begin hypnosis—for example, instructions intended to focus attention and prepare the person for suggestions.")}
         <p>The word <strong>induction</strong> here simply means the procedure used to begin the hypnotic situation.</p>`)}

      ${step(3,"Older theories used several additional words.",
        `${term("TRANCE","A traditional word for an altered or highly absorbed state of attention. Different theories disagree about whether hypnosis requires a distinct trance state.")}
         ${term("DISSOCIATION","A separation or reduced connection among mental processes that are ordinarily experienced together.")}
         ${term("UNCONSCIOUS PROCESS","A mental process that occurs without the person being directly aware of it.")}
         <p>By the mid-20th century, writers disagreed about whether hypnosis should be explained mainly by trance, dissociation, suggestion, unconscious processes, social expectations, or combinations of these ideas.</p>`)}

      ${step(4,"Modern definitions try not to settle the theory in the definition.",
        `<p>Modern research definitions tend to describe what is done—focused attention and suggestion—without requiring one particular explanation of the mechanism.</p>
         ${term("MECHANISM","The process by which something produces an effect.")}
         <p>Researchers continue to disagree about exactly which mechanisms explain hypnotic responses.</p>`)}

      ${step(5,"Hypnosis is not a hypnotic drug.",
        `<p>The shared word comes from an old association with sleep.</p>
         <div class="compare-grid">
           <div class="compare-card"><h3>hypnosis</h3><p>a procedure involving attention and suggestion</p></div>
           <div class="compare-card"><h3>hypnotic drug</h3><p>a drug used to produce or maintain sleep</p></div>
         </div>`)}

      ${shift(
        "Mid-century discussions included competing theories involving trance, dissociation, suggestion, unconscious processes, and social influence.",
        "Modern definitions are often deliberately theory-neutral: they define the procedure and response without declaring one mechanism to be the complete explanation."
      )}

      ${sourceBox([
        '<a href="https://pubmed.ncbi.nlm.nih.gov/25365125/" target="_blank" rel="noopener">PubMed — revised definition of hypnosis</a>'
      ])}`;
  }

  function barbituratesBody(){
    return `
      ${step(1,"First: spell the word.",
        `<p><strong>Barbiturate</strong> · plural <strong>barbiturates</strong>.</p>
         <p>Common misspellings include <em>barbituate</em>, <em>barbituates</em>, and <em>barbibturate</em>.</p>
         <div class="spelling-strip"><span>B</span><span>A</span><span>R</span><span>B</span><span>I</span><span>T</span><span>U</span><span>R</span><span>A</span><span>T</span><span>E</span></div>`)}

      ${step(2,"Start with the nervous system.",
        `${term("NERVOUS SYSTEM","The brain, spinal cord, and nerves—the body's information and control network.")}
         ${term("CENTRAL NERVOUS SYSTEM","The brain and spinal cord. It is often shortened to CNS.")}
         <p>A <strong>barbiturate</strong> is a member of a drug family that can slow activity in the central nervous system.</p>`)}

      ${step(3,"Barbituric acid and barbiturates are not the same thing.",
        `${term("CHEMICAL FRAMEWORK","A central arrangement of atoms that chemists can modify by attaching other groups of atoms.")}
         <p><strong>Barbituric acid</strong> supplied the chemical framework. Barbituric acid itself does not have the strong brain-depressing effects of the later barbiturate drugs.</p>
         <p>Later chemists attached different groups to that framework. Some of the resulting compounds became pharmacologically active barbiturates.</p>
         ${term("PHARMACOLOGICALLY ACTIVE","Able to produce a measurable drug effect in the body.")}`)}

      ${step(4,"The same drug family had several uses.",
        `${term("SEDATIVE","A drug that reduces alertness, agitation, or nervous-system activity.")}
         ${term("HYPNOTIC DRUG","A drug used to produce or maintain sleep.")}
         ${term("ANTICONVULSANT","A drug used to prevent or control seizures.")}
         ${term("SEIZURE","A sudden burst of abnormal electrical activity in the brain that can alter movement, sensation, awareness, or behavior.")}
         ${term("ANESTHETIC","A drug used to prevent sensation, awareness, or pain during a procedure.")}
         <p>Depending on the particular barbiturate and the amount used, the class has been used for sedation, sleep, seizure control, and anesthesia.</p>`)}

      ${step(5,"How can a barbiturate slow the brain?",
        `${term("NERVE CELL","A cell specialized for sending and receiving signals in the nervous system. Another name is neuron.")}
         ${term("CHEMICAL MESSENGER","A chemical released by cells to carry a signal. In the nervous system, this kind of messenger is often called a neurotransmitter.")}
         ${term("GABA","Short for gamma-aminobutyric acid. GABA is a chemical messenger that usually makes many nerve cells less likely to send a signal.")}
         ${term("RECEPTOR","A protein on or in a cell that responds to a particular chemical signal.")}
         ${term("GABA-A RECEPTOR","One type of receptor that responds to GABA and helps produce GABA's braking effect on nerve-cell activity.")}
         <p>Barbiturates strengthen or prolong GABA's braking effect at GABA-A receptors. The result is less activity in many nerve cells.</p>`)}

      ${step(6,"Why did the class become dangerous in overdose?",
        `${term("RESPIRATORY DEPRESSION","Breathing becoming abnormally slow, shallow, or ineffective.")}
         ${term("OVERDOSE","Exposure to an amount of a drug large enough to cause serious poisoning.")}
         ${term("DEPENDENCE","A state in which the body adapts to repeated drug exposure and withdrawal symptoms can occur when the drug is stopped.")}
         <p>Barbiturates can suppress brain functions needed for breathing. Their risks include dependence, severe poisoning, coma, respiratory depression, and death in overdose.</p>`)}

      ${step(7,"The mid-century picture.",
        `<p>Barbiturates were major mid-century sedative and sleeping drugs. They were also used for seizure control and anesthesia.</p>
         ${term("NARCOANALYSIS","A historical practice in which a sedating drug was used while a clinician questioned a person, in the belief that lowered alertness might make memories or speech more accessible.")}
         ${term("SLEEP CURE","A historical treatment approach in which drugs were used to keep a patient asleep or heavily sedated for long periods.")}
         <p>Some barbiturates also appeared in psychiatric narcoanalysis and drug-induced sleep treatments. These historical practices should not be confused with proof that a drug reliably produces truthful statements.</p>`)}

      ${step(8,"What displaced many routine barbiturate uses?",
        `${term("BENZODIAZEPINE","A later drug family that also increases GABA-A signaling and has been used for anxiety, sedation, sleep, seizures, and muscle relaxation.")}
         <p>Beginning in the 1960s, benzodiazepines displaced barbiturates for many routine sedative and sleeping-pill uses.</p>`)}

      ${step(9,"What remains today?",
        `<p>Barbiturates still have selected medical uses. <strong>Phenobarbital</strong> remains an antiseizure drug. Some other barbiturates have specialized roles in anesthesia and critical care.</p>
         ${term("CRITICAL CARE","Hospital care for people with severe, life-threatening illness or injury who need close monitoring and support.")}
         ${chain(["barbituric acid framework","barbital and other barbiturates","phenobarbital"])}`)}

      ${shift(
        "Barbiturates were common sedatives and sleeping drugs and also had roles in seizure treatment, anesthesia, narcoanalysis, and drug-induced sleep treatments.",
        "They are no longer routine sleeping drugs in the way they once were, but selected barbiturates still have medical uses, including seizure treatment and anesthesia."
      )}

      ${sourceBox([
        '<a href="https://www.ncbi.nlm.nih.gov/books/NBK539731/" target="_blank" rel="noopener">NCBI Bookshelf — Barbiturates</a>'
      ])}`;
  }

  function scopolamineBody(){
    return `
      ${step(1,"First: the spelling.",
        `<p>The drug is spelled <strong>scopolamine</strong>.</p>
         <div class="spelling-strip"><span>S</span><span>C</span><span>O</span><span>P</span><span>O</span><span>L</span><span>A</span><span>M</span><span>I</span><span>N</span><span>E</span></div>
         <p>Another name for the same drug is <strong>hyoscine</strong>.</p>`)}

      ${step(2,"Before 'antimuscarinic,' learn four smaller ideas.",
        `${term("NERVOUS SYSTEM","The brain, spinal cord, and nerves—the body's information and control network.")}
         ${term("NERVE CELL","A cell specialized for sending and receiving signals in the nervous system. Another name is neuron.")}
         ${term("CHEMICAL MESSENGER","A chemical used by cells to carry a signal.")}
         ${term("ACETYLCHOLINE","A chemical messenger used by nerve cells in the brain and in many nerves throughout the body.")}`)}

      ${step(3,"Now define receptor, muscarinic, and antimuscarinic.",
        `${term("RECEPTOR","A protein on or in a cell that responds to a particular chemical signal.")}
         ${term("MUSCARINIC RECEPTOR","One group of receptors that respond to acetylcholine. They are found in the brain and in many organs.")}
         ${term("ANTIMUSCARINIC","A drug that blocks acetylcholine from producing some of its effects at muscarinic receptors.")}
         ${term("ANTICHOLINERGIC","A broader word for a drug that blocks effects of acetylcholine. Scopolamine is commonly described as both antimuscarinic and anticholinergic.")}
         <p>Scopolamine is therefore <strong>not</strong> a barbiturate. It belongs to a different drug family and works through a different signaling system.</p>`)}

      ${step(4,"Why can it dilate the pupil?",
        `${term("PUPIL","The dark opening in the center of the eye that lets light enter.")}
         ${term("DILATE","To become wider or larger.")}
         ${term("MYDRIASIS","The medical word for widening of the pupil.")}
         ${term("FOCUSING","Changing the eye's optical power so near or far objects can appear sharp.")}
         ${term("CYCLOPLEGIA","Temporary paralysis of the eye's focusing mechanism.")}
         ${term("OPHTHALMIC","Having to do with the eye.")}
         <p>By blocking muscarinic signaling in the eye, scopolamine can cause <strong>mydriasis</strong> and <strong>cycloplegia</strong>. That is the pupil-dilator use you were remembering.</p>`)}

      ${step(5,"Why can it also cause drowsiness and memory problems?",
        `${term("SEDATION","Reduced alertness or responsiveness.")}
         ${term("AMNESIA","Loss of memory for some events or information.")}
         ${term("AMNESTIC","Producing or contributing to amnesia.")}
         <p>Scopolamine can enter the brain. Its effects there can include drowsiness, sedation, and impaired memory.</p>
         ${term("DELIRIUM","A sudden confused state with disturbed attention and awareness.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("PARANOIA","Strong suspiciousness or fear of harmful intentions that is not adequately supported by evidence.")}
         <p>At toxic exposure, scopolamine can produce agitation, delirium, hallucinations, paranoia, and other severe mental changes.</p>`)}

      ${step(6,"The historical 'twilight sleep' use.",
        `${term("MORPHINE","A powerful opioid pain-relieving drug.")}
         ${term("OPIOID","A drug family that acts on opioid receptors and can reduce pain; opioids can also cause drowsiness and suppress breathing.")}
         <p>In the early 20th century, scopolamine was combined with morphine during childbirth in a practice called <strong>twilight sleep</strong> or <em>Dämmerschlaf</em>.</p>
         ${term("TWILIGHT SLEEP","A historical scopolamine-morphine childbirth regimen intended to reduce pain and especially memory of labor.")}
         <p>The practice became widely discussed in the 1910s and later fell out of routine use.</p>`)}

      ${step(7,"The 'truth serum' history.",
        `${term("TRUTH SERUM","A historical popular label for drugs claimed to make a person reveal truthful information while sedated or mentally altered.")}
         <p>Scopolamine was one of several drugs associated with early 20th-century “truth serum” claims. Barbiturates such as amobarbital and thiopental were also used in later narcoanalysis and interrogation experiments.</p>
         <p><strong>A drug does not provide a reliable chemical test of truth.</strong> Sedation, confusion, suggestibility, memory error, and fabrication can all occur.</p>`)}

      ${step(8,"The mid-century picture.",
        `${term("PREANESTHETIC","Given before anesthesia or before a procedure involving anesthesia.")}
         ${term("SECRETION","A substance released by a gland, such as saliva.")}
         <p>By mid-century, scopolamine appeared in medical writing as an anticholinergic drug used before anesthesia, to reduce some gland secretions, for sedative or memory-impairing effects, for motion sickness, and in eye medicine.</p>`)}

      ${step(9,"The modern patch.",
        `${term("TRANSDERMAL","Delivered through the skin.")}
         ${term("MOTION SICKNESS","Nausea, dizziness, and related symptoms triggered when signals about movement from the eyes and balance organs do not match well.")}
         ${term("POSTOPERATIVE","Occurring after an operation or surgery.")}
         ${term("NAUSEA","The unpleasant feeling that you may vomit.")}
         <p>Current U.S. scopolamine patches are labeled for preventing nausea and vomiting from motion sickness and for postoperative nausea and vomiting in adults.</p>`)}

      ${step(10,"Why can one drug affect the eye, glands, gut, and brain?",
        `${term("SMOOTH MUSCLE","Muscle in organs such as the stomach, intestines, bladder, and blood vessels that works without conscious control.")}
         ${term("COGNITION","Mental processes such as attention, memory, thinking, and understanding.")}
         <p>Muscarinic receptors occur in many parts of the body. Blocking them can change gland secretions and smooth-muscle activity, widen the pupil, alter focusing, reduce motion-sickness signaling, and affect attention and memory.</p>
         <p>One receptor system is spread across many organs, so one drug can produce a scattered-looking list of effects.</p>`)}

      ${step(11,"Why the eye warning matters.",
        `${term("GLAUCOMA","A group of eye diseases in which damage to the optic nerve is often associated with pressure inside the eye.")}
         ${term("OPTIC NERVE","The nerve carrying visual information from the eye to the brain.")}
         ${term("ANGLE-CLOSURE GLAUCOMA","A form of glaucoma in which the drainage angle inside the eye closes, causing eye pressure to rise rapidly.")}
         <p>Because scopolamine can dilate the pupil, it can contribute to an acute angle-closure glaucoma attack in a susceptible eye.</p>
         <p>This page explains terminology and history; it is not instructions for using the drug.</p>`)}

      ${step(12,"Shortest version.",
        `<div class="history-summary-chain">
          <div><b>Scopolamine</b><span>also called hyoscine</span></div>
          <div><b>Main drug action</b><span>blocks muscarinic acetylcholine receptors</span></div>
          <div><b>Eye effects</b><span>pupil widening and temporary loss of focusing</span></div>
          <div><b>Brain effects</b><span>drowsiness and memory impairment; toxic exposure can cause severe confusion and hallucinations</span></div>
          <div><b>Historical uses</b><span>eye medicine, preanesthetic use, “twilight sleep,” and “truth serum” claims</span></div>
          <div><b>Current prominent use</b><span>motion-sickness and postoperative nausea/vomiting prevention</span></div>
         </div>`)}

      ${sourceBox([
        '<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51289d8b-f7e3-a3e0-e063-6294a90add43" target="_blank" rel="noopener">DailyMed — current U.S. scopolamine labeling</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/2647095/" target="_blank" rel="noopener">PubMed — history of scopolamine in anesthesia</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/16184018/" target="_blank" rel="noopener">PubMed — history of “truth serum”</a>'
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
         ${term("SKELETAL DRAWING","A simplified chemical drawing in which carbon atoms are often represented by corners and line ends instead of writing the letter C at every position.")}
         <p>In this kind of drawing, each corner of the hexagon can represent a carbon atom.</p>
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
         <div class="memory"><strong>Benzoin ≠ benzene.</strong> They are different substances. The connection is historical and involves <strong>etymology</strong>—the history of words and names.</div>`)}

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
        `${term("UREA","A small molecule produced naturally as the body processes protein and other nitrogen-containing substances. The body removes most urea in urine.")}
         <p>Urea can also be manufactured for agriculture, medicine, and scientific work. In this story, the important point is that <strong>Baeyer used urea in the chemistry that led to barbituric acid.</strong></p>
         <p>This is molecular ancestry and naming history—not a synthesis recipe.</p>`)}

      ${step(14,"Barbituric acid comes first.",
        `<div class="chem-formula">BARBITURIC ACID</div>
         <p>Baeyer called the substance <strong>barbituric acid</strong>. The word <em>acid</em> is part of its historical chemical name.</p>
         <p>Barbituric acid became a central <strong>chemical framework</strong>—a central arrangement of atoms that chemists could alter by attaching other groups of atoms.</p>
         ${term("HYPNOTIC DRUG","A drug used to produce or maintain sleep.")}
         <p><strong>Barbituric acid itself is not the powerful sleep-producing drug suggested by the later word “barbiturate.”</strong></p>
         ${chain(["UREA in Baeyer's chemistry","BARBITURIC ACID","later altered molecules","BARBITAL"])}
         ${term("PHARMACOLOGICALLY ACTIVE","Able to produce a measurable drug effect in the body.")}
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
           <div><b>1912 onward</b><span>Its usefulness for controlling seizures becomes recognized, alongside its sedative effects. A seizure is a sudden burst of abnormal electrical activity in the brain that can change movement, sensation, awareness, or behavior.</span></div>
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
    {slug:"psychology",title:"Psychology",category:"Fields",short:"The study of behavior and activities of the mind, such as memory, attention, thought, and perception.",keywords:"psychology psychologist behavior cognition mid century behaviorism psychoanalysis",body:psychologyBody()},
    {slug:"sociology",title:"Sociology",category:"Fields",short:"The systematic study of social groups, institutions, relationships, and societies.",keywords:"sociology society institutions social science mid century structural functionalism",body:sociologyBody()},
    {slug:"schizophrenia",title:"Schizophrenia",category:"Psychosis Terms",short:"A psychiatric diagnosis that can involve hallucinations, delusions, disorganized thought, and other persistent changes.",keywords:"schizophrenia schizophrenic reaction split mind split personality two minds DSM I DSM II psychosis hallucination delusion",body:schizophreniaBody()},
    {slug:"schizophrenic",title:"Schizophrenic",category:"Psychosis Terms",short:"The adjective derived from schizophrenia; historically it also acquired figurative 'divided' or 'of two minds' meanings.",keywords:"schizophrenic adjective split mind split personality two minds divided contradictory mid century",body:schizophrenicBody()},
    {slug:"psychosis",title:"Psychosis",category:"Psychosis Terms",short:"A state in which a person has serious difficulty judging whether some perceptions or beliefs match shared external reality.",keywords:"psychosis reality testing hallucination delusion psychotic mid century neurosis",body:psychosisBody()},
    {slug:"psychotic",title:"Psychotic",category:"Psychosis Terms",short:"The adjective for something involving psychosis; not a synonym for schizophrenia or violence.",keywords:"psychotic adjective psychosis schizophrenia mid century terminology",body:psychoticBody()},
    {slug:"sedative",title:"Sedative",category:"Sedation & Sleep Terms",short:"A drug or substance that reduces nervous-system activity or arousal; sleep is not required.",keywords:"sedative sedation calming drowsiness barbiturate hypnotic",body:sedativeBody()},
    {slug:"soporific",title:"Soporific",category:"Sedation & Sleep Terms",short:"Sleep-producing or strongly drowsiness-producing; also figuratively, extremely boring.",keywords:"soporific sleep drowsy sedative boring sopor",body:soporificBody()},
    {slug:"hypnotic-drug",title:"Hypnotic Drug",category:"Sedation & Sleep Terms",short:"In pharmacology, a sleep-inducing drug; distinct from hypnosis.",keywords:"hypnotic drug sedative hypnotic sleeping pill sleep barbiturate",body:hypnoticDrugBody()},
    {slug:"hypnosis",title:"Hypnosis",category:"Sedation & Sleep Terms",short:"A procedure or condition involving focused attention and responsiveness to suggestion.",keywords:"hypnosis hypnotic induction suggestion mesmerism mid century",body:hypnosisBody()},
    {slug:"barbiturates",title:"Barbiturate / Barbiturates",category:"Drug Terms & History",short:"An older drug family used for calming, sleep, seizure control, or anesthesia, depending on the drug and amount.",keywords:"barbiturate barbiturates barbituate barbituates barbibturate barbibturates sedative hypnotic phenobarbital",body:barbituratesBody()},
    {slug:"scopolamine-primer",title:"Scopolamine — Primer",category:"Drug Terms & History",short:"A drug that blocks some acetylcholine signals; historically used for pupil dilation and sedation, and now familiar as a motion-sickness patch.",keywords:"scopolamine hyoscine pupil dilator mydriasis cycloplegia sedative amnestic twilight sleep motion sickness antimuscarinic",body:scopolamineBody()},
    {slug:"phenobarbital-full-primer",title:"Phenobarbital — Complete Primer",category:"Drug Terms & History",short:"The complete beginner journey from matter and benzene to phenyl, barbituric acid, Baeyer, Barbara, and the full drug name.",keywords:"phenobarbital phenobarbitol barbiturate benzene gasoline benzoin perfume phenyl pheno barbital Baeyer Barbara urea",body:phenobarbitalBody()}
  ];

  window.PSYCHIATRY_CONTENT = { defaultBody: defaultPrimer(), entries };
})();
