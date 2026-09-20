// Psychiatry Terms content for The Glossary.
// Neutral, descriptive, baby-step definitions with mid-century usage notes.

(function(){
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
  const step = (n,title,body) => `<section class="primer-step"><div class="primer-step-number">Step ${String(n).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;
  const term = (word,text) => `<div class="primer-term"><p class="primer-label">A new word</p><h3>${word}</h3><p>${text}</p></div>`;
  const shift = (mid,now) => `<div class="time-shift-grid"><div class="time-shift-card"><p class="time-label">1950s meaning / use</p><p>${mid}</p></div><div class="time-shift-card"><p class="time-label">What changed later</p><p>${now}</p></div></div>`;
  const chain = (items) => `<div class="primer-chain">${items.map((x,i)=>`${i?"<b>→</b>":""}<span>${x}</span>`).join("")}</div>`;
  const sourceBox = (links) => `<section class="entry-section history-sources"><h3>Sources and further reading</h3><p>${links.join("<br>")}</p></section>`;

  function defaultPrimer(){
    return `
      <div class="entry-inner primer">
        <header class="primer-hero">
          <p class="kicker">1950s first · baby steps</p>
          <h2>Psychiatry terms</h2>
          <p class="lede">This cabinet starts with what each word meant in professional use in the 1950s. Only after that does it explain how the meaning, diagnostic system, or usual drug use changed.</p>
          <div class="primer-chain"><span>1950s meaning</span><b>→</b><span>define every word</span><b>→</b><span>later change</span><b>→</b><span>current usage</span></div>
        </header>

        ${step(1,"Why start in the 1950s?",
          `<p>Words in psychiatry and psychology did not always mean exactly what they mean today. A modern definition can therefore hide what an older book, doctor, movie, newspaper, or conversation meant by the same word.</p>
           ${term("MID-CENTURY","Here, the period centered on the 1950s—especially about 1950 through 1959.")}
           ${term("USAGE","The way a word is actually used and understood in a particular time and setting.")}
           <div class="memory"><strong>Rule for this section:</strong> 1950s meaning first. Later changes second.</div>`)}

        ${step(2,"Three fields as a 1950s reader would meet them.",
          `${term("PSYCHIATRY — 1950s","A branch of medicine dealing with mental illness and serious disturbances of thought, emotion, and behavior. Psychiatrists were medical doctors. U.S. psychiatry of the period was strongly influenced by psychoanalytic and psychodynamic ideas.")}
           ${term("PSYCHOLOGY — 1950s","The scientific study of behavior and mental life. In American academic psychology, observable behavior, learning, testing, and measurement were especially prominent.")}
           ${term("SOCIOLOGY — 1950s","The study of society, social groups, institutions, roles, and relationships among people.")}
           <p>The basic field names survive, but the theories and methods emphasized inside each field changed considerably afterward.</p>`)}

        ${step(3,"Psychosis and schizophrenia in 1950s American psychiatry.",
          `${term("REALITY TESTING","The ability to judge whether an idea or perception matches outside reality.")}
           ${term("PSYCHOSIS — 1950s","A broad category for severe mental disturbance marked especially by major failure of reality testing, serious disruption of personality functioning, and difficulty relating effectively to people or work.")}
           ${term("PSYCHOTIC — 1950s","Describing a person, symptom, reaction, or disorder classed as psychotic. Older writing also used the noun 'a psychotic' for a person.")}
           ${term("SCHIZOPHRENIC REACTION — 1950s","DSM-I's 1952 name for a group of psychotic reactions involving major disturbances in a person's relationship to reality, thought and concept formation, emotion, and behavior.")}
           <p>The modern words <strong>psychosis</strong>, <strong>psychotic</strong>, and <strong>schizophrenia</strong> remain, but the diagnostic framework changed substantially after the 1950s.</p>`)}

        ${step(4,"Sedative, soporific, and hypnotic in the 1950s.",
          `${term("SEDATIVE — 1950s","A drug used to calm, reduce nervous excitement, or produce drowsiness.")}
           ${term("SOPORIFIC — 1950s","Something that produces sleep or strong sleepiness.")}
           ${term("HYPNOTIC DRUG — 1950s","A drug used to cause sleep. Barbiturates were among the main drugs meant by this word.")}
           ${term("HYPNOSIS — 1950s","A condition or procedure commonly described in terms of trance, focused attention, and increased responsiveness to suggestion. Theories of what caused it differed.")}
           <p>These words overlapped, but they were not identical: a <strong>sedative</strong> could calm without causing sleep; a <strong>hypnotic</strong> was specifically sleep-producing.</p>`)}

        ${step(5,"Two drug histories as a 1950s reader would recognize them.",
          `${term("SCOPOLAMINE — 1950s","A drug also called hyoscine, used for effects such as reducing secretions, preanesthetic medication, motion-sickness control, pupil dilation, and sedation or memory impairment.")}
           ${term("BARBITURATE — 1950s","A major class of sedative and hypnotic drugs. Different barbiturates were also used for seizures and anesthesia.")}
           <p>They could both cause drowsiness, but they were different chemical families and worked differently.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('scopolamine-primer')">Open the Scopolamine primer →</button>
           <button type="button" class="primer-open-link" onclick="openEntry('barbiturates')">Open the Barbiturate primer →</button>`)}

        ${step(6,"Phenobarbital gets its own complete history.",
          `<p>Phenobarbital was already an established barbiturate by the 1950s, used particularly as a sedative and as a drug for controlling seizures. Its complete 18-step chemistry-and-name primer is preserved here.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('phenobarbital-full-primer')">Open the complete Phenobarbital primer →</button>`)}

        <section class="primer-finish">
          <p class="kicker">Reading rule</p>
          <h3>Do not silently translate the 1950s into today's vocabulary.</h3>
          <p>Each entry begins in its period, then tells you what changed.</p>
        </section>
      </div>`;
  }

  function psychiatryBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("PHYSICIAN","A medical doctor.")}
         ${term("PSYCHIATRY — 1950s","The medical specialty dealing with mental illness and serious disturbances of thought, emotion, personality, and behavior.")}
         ${term("PSYCHIATRIST — 1950s","A physician specializing in psychiatry.")}
         <p>That basic distinction mattered then just as it does now: <strong>psychiatry was a branch of medicine</strong>.</p>`)}

      ${step(2,"The 1950s American framework.",
        `${term("PSYCHOANALYSIS","A theory and treatment tradition associated with Sigmund Freud and later writers, emphasizing unconscious mental processes and conflicts.")}
         ${term("PSYCHODYNAMIC","A broader family of ideas explaining behavior partly through interacting motives, conflicts, emotions, and mental processes outside immediate awareness.")}
         ${term("DSM-I","The first edition of the American Psychiatric Association's Diagnostic and Statistical Manual of Mental Disorders, published in 1952.")}
         ${term("REACTION","A word DSM-I frequently used to describe a mental disorder as a person's reaction to psychological, social, or biological pressures.")}
         <p>American psychiatry in the 1950s was strongly influenced by psychoanalytic and psychodynamic thinking. DSM-I commonly named disorders as <strong>reactions</strong>, including <em>schizophrenic reaction</em> and <em>depressive reaction</em>.</p>`)}

      ${step(3,"Hospital and office practice.",
        `${term("INPATIENT","A person staying in a hospital for care.")}
         ${term("OUTPATIENT","A person receiving care without staying overnight in a hospital.")}
         <p>Large state psychiatric hospitals remained a major part of 1950s psychiatry, while outpatient psychiatric practice was also expanding.</p>`)}

      ${step(4,"What changed later?",
        `${term("DIAGNOSTIC CRITERIA","A written list of features used to decide whether a diagnosis applies.")}
         ${term("OPERATIONALIZED","Written as explicit rules so different clinicians can apply the same definition more consistently.")}
         ${term("PSYCHOPHARMACOLOGY","The study and use of drugs that affect mood, thought, perception, or behavior.")}
         ${term("NEUROSCIENCE","The study of the brain, spinal cord, nerves, and their cells and signals.")}
         <p>DSM-III in 1980 moved U.S. psychiatry toward more explicit diagnostic criteria and away from DSM-I's reaction language. Drug treatment and neuroscience also became more prominent parts of the specialty.</p>`)}

      ${shift(
        "A medical specialty strongly shaped in the United States by psychodynamic ideas, broad diagnostic categories, reaction terminology, state hospitals, and the psychosis–neurosis distinction.",
        "The specialty remained medical, but its diagnostic language became more rule-based and standardized, while psychopharmacology and neuroscience gained greater prominence."
      )}

      <section class="entry-section"><h3>Word history</h3><p><em>Psychiatry</em> is built from Greek-derived elements referring roughly to <strong>mind or soul</strong> and <strong>medical treatment or healing</strong>.</p></section>`;
  }

  function psychologyBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("BEHAVIOR","What a person or animal does—the actions that can be observed or recorded.")}
         ${term("MENTAL PROCESS","An activity such as remembering, perceiving, thinking, feeling, or paying attention.")}
         ${term("PSYCHOLOGY — 1950s","The scientific study of behavior and mental life. In American academic psychology of the 1950s, observable behavior, learning, testing, and measurement were especially prominent.")}
         ${term("PSYCHOLOGIST — 1950s","A person trained in psychology. Some worked in research or testing; others worked in schools, industry, hospitals, or clinical practice.")}`)}

      ${step(2,"A major 1950s influence: behaviorism.",
        `${term("BEHAVIORISM","An approach that concentrated heavily on observable behavior and learning rather than making private mental events the main object of explanation.")}
         ${term("LEARNING","A relatively lasting change in behavior or knowledge resulting from experience.")}
         <p>Behaviorism had enormous influence on American experimental psychology in the 1950s.</p>`)}

      ${step(3,"Testing and measurement were also central.",
        `${term("PSYCHOMETRICS","The measurement of psychological characteristics using tests, scales, and statistical methods.")}
         ${term("CLINICAL PSYCHOLOGY","The branch of psychology concerned with assessing and working with psychological and behavioral problems.")}
         <p>Psychological testing and clinical psychology expanded greatly during and after World War II.</p>`)}

      ${step(4,"What changed later?",
        `${term("COGNITIVE","Having to do with thinking, memory, attention, language, perception, and related mental processes.")}
         ${term("COGNITIVE SCIENCE","The study of mental processes such as thinking, memory, language, and perception, often using ideas from psychology, neuroscience, linguistics, and computing.")}
         ${term("NEUROSCIENCE","The study of the brain and nervous system.")}
         <p>From the late 1950s onward, cognitive approaches grew rapidly. Modern psychology uses behavioral, cognitive, biological, social, developmental, quantitative, qualitative, and other approaches rather than being dominated by one mid-century school.</p>`)}

      ${shift(
        "A science of behavior and mental life in which behaviorism, learning research, testing, and psychometrics were especially prominent in the United States.",
        "The word still names the study of behavior and mental processes, but cognitive science, neuroscience, and many additional methods and theories became much more prominent."
      )}`;
  }

  function sociologyBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("SOCIAL","Having to do with people living, acting, or organizing in relation to other people.")}
         ${term("SOCIOLOGY — 1950s","The systematic study of society, social groups, institutions, roles, and relationships among people.")}
         <p>The core meaning is close to today's meaning.</p>`)}

      ${step(2,"Words a 1950s sociology text might emphasize.",
        `${term("SOCIAL INSTITUTION","A durable organized pattern of social life, such as family, education, law, religion, government, or markets.")}
         ${term("SOCIAL ROLE","A pattern of behavior and expectations connected with a social position—for example, teacher, parent, judge, or employee.")}
         ${term("SOCIAL STRUCTURE","The relatively durable arrangement of groups, institutions, positions, and relationships in a society.")}
         ${term("STRUCTURAL FUNCTIONALISM","A theory that treats society as a system of connected parts and asks what functions those parts perform in the larger social order.")}
         <p>Structural functionalism was especially influential in mid-century American sociology.</p>`)}

      ${step(3,"What changed later?",
        `${term("QUANTITATIVE","Using numbers and measurements.")}
         ${term("QUALITATIVE","Using non-numerical material such as interviews, observation, documents, or detailed descriptions.")}
         ${term("COMPUTATIONAL","Using computer-based methods to analyze data or model patterns.")}
         <p>The basic definition of sociology changed less than the dominant theories and tools. Later sociology expanded its range of theories and methods, including historical, comparative, network, computational, quantitative, and qualitative work.</p>`)}

      ${shift(
        "The study of society, groups, social institutions, roles, and relationships; mid-century American sociology often emphasized broad theories of social structure and function.",
        "The core word changed little, but the field became more theoretically diverse and expanded its research methods."
      )}`;
  }

  function schizophreniaBody(){
    return `
      ${step(1,"1950s core term: 'schizophrenic reaction.'",
        `${term("DSM-I","The first American Psychiatric Association diagnostic manual, published in 1952.")}
         ${term("REACTION","DSM-I's way of describing many mental disorders as reactions of the person to internal and external pressures.")}
         <p>In DSM-I, the principal 1950s term was <strong>schizophrenic reaction</strong>, not simply the modern diagnosis label <em>schizophrenia</em>.</p>
         ${term("SCHIZOPHRENIC REACTION — 1950s","A group of psychotic reactions marked by major disturbances in a person's relationship to reality, formation of ideas and concepts, emotional life, behavior, and flow of thought.")}`)}

      ${step(2,"Define the 1950s phrase 'psychotic reaction.'",
        `${term("PSYCHOTIC REACTION — 1950s","A severe mental disturbance in which personality functioning and the ability to test external reality were seriously disrupted.")}
         ${term("REALITY TESTING","The ability to judge whether an idea or perception matches outside reality.")}
         <p>DSM-I described psychotic disorders in terms that included major personality disorganization, failure to evaluate external reality correctly, and severe difficulty functioning in relationships or work.</p>`)}

      ${step(3,"Symptoms described then.",
        `${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("DISORGANIZED THOUGHT","Thought whose ordinary connections become severely confused, fragmented, or difficult to follow.")}
         <p>1950s descriptions could include withdrawal from reality, unusual behavior, disturbances in thought, delusions, hallucinations, and major changes in emotional expression and relationships.</p>`)}

      ${step(4,"Why was it called schizophrenia?",
        `<p>Eugen Bleuler introduced the term decades before the 1950s.</p>
         <div class="flow"><span><strong>schizein</strong><br>to split</span><b>+</b><span><strong>phrēn / phrenos</strong><br>mind</span><b>→</b><span><strong>schizophrenia</strong><br>roughly “splitting of the mind”</span></div>
         <p>Bleuler's “split” referred to a loss of integration among mental functions. It did not simply mean two separate personalities.</p>`)}

      ${step(5,"But 'split personality' really did enter mid-century usage.",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its strict technical meaning.")}
         <p>By the 1950s, <em>schizophrenic</em> was also used figuratively to mean <strong>divided, contradictory, split, or “of two minds.”</strong> That usage helped reinforce the popular phrase <strong>split personality</strong>.</p>`)}

      ${step(6,"What changed later?",
        `${term("DIAGNOSTIC CRITERIA","A written set of features used to decide whether a diagnosis applies.")}
         ${term("SUBTYPE","A smaller named category inside a larger diagnosis.")}
         <p>DSM-II in 1968 dropped the word <em>reaction</em>. DSM-III in 1980 introduced much more explicit criteria and narrowed American diagnostic practice. Later DSM editions also removed the old paranoid, catatonic, disorganized, residual, and undifferentiated schizophrenia subtypes as separate subtypes.</p>
         ${term("DISSOCIATIVE IDENTITY DISORDER","A separate diagnosis involving distinct identity states and major disruptions of memory and identity. It is not schizophrenia.")}`)}

      ${shift(
        "DSM-I's 'schizophrenic reaction' was a broad psychotic category described in terms of disturbed reality relationships, thought, emotion, behavior, and personality integration.",
        "The word 'reaction' disappeared, diagnostic criteria became more explicit, and modern schizophrenia is not defined as multiple personality or literally being 'of two minds.'"
      )}`;
  }

  function schizophrenicBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("ADJECTIVE","A word that describes or modifies another word.")}
         <p><strong>Schizophrenic</strong> was the adjective used for something relating to the 1950s diagnostic category <strong>schizophrenic reaction</strong>.</p>
         <div class="example"><strong>schizophrenic reaction</strong><br><span class="example-note">the DSM-I diagnostic phrase</span></div>
         <p>Older medical writing also commonly used <strong>schizophrenic</strong> as a noun for a person.</p>`)}

      ${step(2,"A second 1950s meaning: divided or 'of two minds.'",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its strict medical meaning.")}
         <p>By the 1950s, <em>schizophrenic</em> also had a figurative English meaning: <strong>divided, contradictory, split, or “of two minds.”</strong></p>
         <p>That was not merely today's misunderstanding projected backward; it was an actual mid-century figurative use of the word.</p>`)}

      ${step(3,"Where did the 'split' idea come from?",
        `<p>The word <strong>schizophrenia</strong> was built from Greek-derived roots meaning roughly <strong>split + mind</strong>. Bleuler used “split” for a loss of unity among mental functions, not simply for two complete personalities occupying one person.</p>`)}

      ${step(4,"What changed later?",
        `<p>The figurative sense survives, but current clinical writing generally avoids using <strong>a schizophrenic</strong> as a noun for a person. It more often says <strong>a person with schizophrenia</strong>.</p>
         ${term("DISSOCIATIVE IDENTITY DISORDER","A different diagnosis involving distinct identity states and major disruptions of memory and identity.")}
         <p>Modern schizophrenia and dissociative identity disorder are not interchangeable diagnoses.</p>`)}

      ${shift(
        "An adjective for schizophrenic reaction, also often a noun for a person; by the 1950s it additionally had a figurative sense meaning divided, contradictory, or 'of two minds.'",
        "Clinical usage became more specific and person-first language became more common. The figurative 'split' meaning remains in ordinary English but is not the diagnostic definition."
      )}`;
  }

  function psychosisBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("PSYCHOSIS — 1950s","A broad term for severe mental disturbance in which personality functioning and the ability to test external reality were seriously impaired.")}
         ${term("REALITY TESTING","The ability to judge whether an idea or perception matches outside reality.")}
         <p>In DSM-I-era American psychiatry, psychosis was not merely a list of isolated symptoms. It was also a broad severity and diagnostic-category concept.</p>`)}

      ${step(2,"What did DSM-I emphasize?",
        `${term("PERSONALITY DISINTEGRATION","A 1950s phrase for severe breakdown in the usual organization and functioning of the person's thoughts, emotions, behavior, and relationships.")}
         ${term("FUNCTIONING","A person's ability to manage ordinary life tasks, work, relationships, and self-care.")}
         <p>DSM-I descriptions emphasized serious disruption of personality, failure to judge external reality correctly, and inability to relate effectively to people or work.</p>`)}

      ${step(3,"Psychosis versus neurosis.",
        `${term("NEUROSIS — 1950s","A broad term for psychological disturbance in which reality testing was generally considered much more intact than in psychosis.")}
         <p>The <strong>psychosis–neurosis</strong> contrast was a major organizing distinction in mid-century psychiatry.</p>`)}

      ${step(4,"What changed later?",
        `${term("SYMPTOM-FOCUSED","Describing a condition mainly by the particular experiences or behaviors present rather than by one broad severity category.")}
         <p>Later diagnostic systems moved away from psychosis versus neurosis as the master division. Modern use of <strong>psychosis</strong> is more symptom-focused and commonly refers to disturbances such as delusions, hallucinations, or severely disorganized thought or behavior.</p>
         ${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}`)}

      ${shift(
        "A broad category of severe mental disturbance defined partly by major failure of reality testing, personality disorganization, and impaired social or occupational functioning.",
        "The word became more symptom-focused. It now describes a type of disturbance that can occur in several different diagnoses or medical conditions rather than one single broad disease class."
      )}`;
  }

  function psychoticBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("ADJECTIVE","A word that describes or modifies another word.")}
         <p><strong>Psychotic</strong> meant <strong>having to do with psychosis</strong> or belonging to the broad class of severe mental disorders then called psychoses.</p>
         <p>1950s medical writing also used <strong>a psychotic</strong> as a noun for a person considered psychotic.</p>`)}

      ${step(2,"What did 'psychotic' imply then?",
        `${term("REALITY TESTING","The ability to judge whether an idea or perception matches outside reality.")}
         <p>The label generally implied a severe disturbance involving major impairment of reality testing, personality functioning, or ability to manage ordinary relationships and work.</p>`)}

      ${step(3,"Common 1950s-style phrases.",
        `<div class="definition-grid">
          <div class="definition-card"><h3>psychotic reaction</h3><p>a severe psychiatric reaction meeting the period's idea of psychosis</p></div>
          <div class="definition-card"><h3>psychotic depression</h3><p>a severe depressive condition classed as psychotic</p></div>
          <div class="definition-card"><h3>psychotic disorder</h3><p>a disorder placed in the broad psychosis group</p></div>
        </div>`)}

      ${step(4,"What changed later?",
        `<p>Modern professional usage more often keeps <strong>psychotic</strong> as an adjective in phrases such as <em>psychotic symptom</em> or <em>psychotic episode</em>, and avoids using it as a noun for a person.</p>
         <p>It also does <strong>not</strong> by itself mean schizophrenia, violence, dangerousness, low intelligence, or eccentricity.</p>`)}

      ${shift(
        "A broad severity/category adjective for severe disorders involving major impairment of reality testing; 'a psychotic' was also ordinary professional wording.",
        "The adjective is now used more narrowly around psychotic symptoms or episodes, and noun-labeling of people is generally avoided."
      )}`;
  }

  function sedativeBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("NERVOUS SYSTEM","The brain, spinal cord, and nerves—the body's information and control network.")}
         ${term("SEDATIVE — 1950s","A drug used to calm, reduce nervous excitement, or lower alertness and activity. It could cause drowsiness without necessarily producing sleep.")}
         ${term("SEDATION","The resulting state of reduced alertness, agitation, or responsiveness.")}`)}

      ${step(2,"How was that different from 'hypnotic'?",
        `${term("HYPNOTIC DRUG — 1950s","A drug used specifically to cause sleep.")}
         <p>A single drug could have a <strong>sedative</strong> effect at one level and a <strong>hypnotic</strong> or sleep-producing effect at a stronger level. That is why the combined phrase <strong>sedative-hypnotic</strong> was common.</p>`)}

      ${step(3,"What drugs did a 1950s reader have in mind?",
        `${term("BARBITURATE","One of the major 1950s drug families used for calming and sleep.")}
         ${term("BROMIDE","A bromide-containing preparation; bromides had older use as calming and seizure-control drugs.")}
         ${term("CHLORAL HYDRATE","An older drug used to produce sedation or sleep.")}
         <p>Barbiturates were especially important mid-century sedatives and hypnotics.</p>`)}

      ${step(4,"What changed later?",
        `${term("BENZODIAZEPINE","A later drug family used for effects including anxiety reduction, sedation, sleep, seizure control, and muscle relaxation.")}
         <p>Benzodiazepines, introduced around the end of the 1950s and early 1960s, displaced barbiturates for many routine sedative and sleeping-pill uses.</p>`)}

      ${shift(
        "A calming or nervous-system-depressing drug; barbiturates were among the major drugs meant by the term.",
        "The basic meaning survived, but the common drug classes changed substantially and sedation is now often described as an intended effect or an unwanted side effect."
      )}`;
  }

  function soporificBody(){
    return `
      ${step(1,"1950s core meaning.",
        `<p><strong>Soporific</strong> meant <strong>sleep-producing</strong> or <strong>causing marked drowsiness</strong>.</p>
         ${term("ADJECTIVE","A describing word. 'A soporific drug' means a sleep-producing drug.")}
         ${term("NOUN","A naming word. 'A soporific' can mean a substance that produces sleep.")}`)}

      ${step(2,"The word itself explains the meaning.",
        `<p>It comes through Latin roots connected with <em>sopor</em>, meaning <strong>deep sleep</strong>, plus a root meaning <strong>to make or produce</strong>.</p>
         ${chain(["sopor · deep sleep","-fic · making","soporific · sleep-making"])}`)}

      ${step(3,"What changed later?",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its literal sense.")}
         <p>The medical meaning remains understandable, but <strong>hypnotic</strong> and <strong>sedative-hypnotic</strong> became more standard technical terms. In ordinary modern English, <em>soporific</em> is often figurative: a soporific speech is one that is so dull it makes people sleepy.</p>`)}

      ${shift(
        "A straightforward medical and ordinary-English word for something that produces sleep or strong drowsiness.",
        "The literal meaning remains, but the word is less central in drug classification and is frequently used figuratively to mean boring or sleep-inducing."
      )}`;
  }

  function hypnoticDrugBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("HYPNOTIC DRUG — 1950s","A drug used to cause sleep.")}
         ${term("HYPNOSIS","A procedure or condition involving focused attention and responsiveness to suggestion.")}
         <p>In a 1950s medical text, <strong>a hypnotic</strong> usually meant <strong>a sleeping drug</strong>, not a drug that hypnotized someone.</p>`)}

      ${step(2,"Sedative versus hypnotic.",
        `${term("SEDATIVE — 1950s","A drug used to calm or reduce nervous excitement and alertness.")}
         ${term("SEDATIVE-HYPNOTIC","A drug capable of producing calming at one level and sleep at a stronger level.")}
         <p>The two terms overlapped because many of the same drugs could be used for either purpose.</p>`)}

      ${step(3,"What drugs were prominent then?",
        `${term("BARBITURATE","A major mid-century drug family used for sedation and sleep, as well as some seizure and anesthesia uses.")}
         <p>From the 1920s into the mid-1950s, barbiturates were among the dominant sedative and hypnotic drugs.</p>`)}

      ${step(4,"What changed later?",
        `${term("BENZODIAZEPINE","A later drug family introduced around the end of the 1950s and early 1960s that took over many sedative and sleeping-pill uses.")}
         <p>The pharmacological meaning of <strong>hypnotic</strong> did not disappear: it still means sleep-producing. What changed most was which drugs were commonly used.</p>
         <p>The adjective <strong>hypnotic</strong> also continues to have its other meaning: related to hypnosis.</p>`)}

      ${shift(
        "A sleep-producing drug; barbiturates were among the main hypnotics a 1950s reader would have encountered.",
        "The definition remained broadly stable, but benzodiazepines and newer sleeping drugs replaced barbiturates for much routine use."
      )}`;
  }

  function hypnosisBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("SUGGESTION","A communication intended to influence an experience, perception, thought, feeling, or action.")}
         ${term("TRANCE","A traditional word for a condition of unusually absorbed or altered attention.")}
         ${term("HYPNOSIS — 1950s","A condition or procedure commonly described as involving trance or unusually focused attention together with increased responsiveness to suggestion.")}
         <p>Not every mid-century writer explained hypnosis the same way, but <strong>trance</strong> and <strong>suggestibility</strong> were common parts of the vocabulary.</p>`)}

      ${step(2,"How was hypnosis produced?",
        `${term("HYPNOTIC INDUCTION","The procedure used to begin hypnosis—for example, instructions intended to narrow or focus attention and prepare the person for suggestions.")}
         <p><strong>Induction</strong> here simply means the procedure used to begin the hypnotic situation.</p>`)}

      ${step(3,"Competing explanations already existed.",
        `${term("DISSOCIATION","A separation or reduced connection among mental processes that are ordinarily experienced together.")}
         ${term("UNCONSCIOUS PROCESS","A mental process occurring without direct awareness.")}
         <p>Mid-century theories variously emphasized trance, dissociation, unconscious processes, suggestion, expectation, or interpersonal influence.</p>`)}

      ${step(4,"What changed later?",
        `${term("THEORY-NEUTRAL","Worded so the definition does not assume that one disputed explanation must be correct.")}
         <p>Modern research definitions are often more theory-neutral. They tend to define hypnosis by the procedure—focused attention and suggestion—without requiring a distinct trance state as part of the definition.</p>`)}

      ${step(5,"Do not confuse hypnosis with a hypnotic drug.",
        `<div class="compare-grid">
          <div class="compare-card"><h3>hypnosis</h3><p>a procedure involving attention and suggestion</p></div>
          <div class="compare-card"><h3>hypnotic drug</h3><p>a sleep-producing drug</p></div>
         </div>`)}

      ${shift(
        "Commonly described as a trance-like condition or procedure involving concentrated attention and increased suggestibility.",
        "Definitions became more cautious about claiming a special trance state and often describe focused attention and response to suggestion without committing to one theory."
      )}`;
  }

  function barbituratesBody(){
    return `
      ${step(1,"1950s core meaning.",
        `<p><strong>Barbiturate</strong> · plural <strong>barbiturates</strong>.</p>
         <div class="spelling-strip"><span>B</span><span>A</span><span>R</span><span>B</span><span>I</span><span>T</span><span>U</span><span>R</span><span>A</span><span>T</span><span>E</span></div>
         ${term("BARBITURATE — 1950s","A member of one of the main drug families then used to calm patients or produce sleep. Different barbiturates were also used to control seizures and to produce anesthesia.")}
         <p>In the 1950s, <strong>sedative</strong> and <strong>hypnotic</strong> were central words for this drug class.</p>`)}

      ${step(2,"Define those two 1950s words.",
        `${term("SEDATIVE","A drug used to calm, reduce nervous excitement, or lower alertness.")}
         ${term("HYPNOTIC DRUG","A drug used to cause sleep.")}
         <p>The same barbiturate could have a calming effect at one amount and a stronger sleep-producing effect at a larger amount.</p>`)}

      ${step(3,"Other 1950s uses.",
        `${term("SEIZURE","A sudden burst of abnormal electrical activity in the brain that can change movement, sensation, awareness, or behavior.")}
         ${term("ANTICONVULSANT","A drug used to prevent or control seizures.")}
         ${term("ANESTHETIC","A drug used to prevent sensation, awareness, or pain during a procedure.")}
         <p><strong>Phenobarbital</strong> had an established role in seizure control. Other barbiturates were used in anesthesia.</p>`)}

      ${step(4,"Barbituric acid is not the same thing as a barbiturate drug.",
        `${term("CHEMICAL FRAMEWORK","A central arrangement of atoms that chemists can alter by attaching other groups of atoms.")}
         <p><strong>Barbituric acid</strong> supplied the chemical framework. Barbituric acid itself did not have the strong sedative-hypnotic effects of the later substituted barbiturates.</p>
         ${term("SUBSTITUTED COMPOUND","A molecule made by replacing or attaching particular groups of atoms at positions on a chemical framework.")}`)}

      ${step(5,"A 1950s psychiatric use you may encounter.",
        `${term("NARCOANALYSIS","A historical practice in which a sedating drug was given while a clinician questioned a person, based on the idea that lowered alertness might make speech or memories more accessible.")}
         ${term("SLEEP CURE","A historical treatment in which drugs were used to keep a patient asleep or heavily sedated for long periods.")}
         <p>Barbiturates appeared in both narcoanalysis and drug-induced sleep treatments. Neither practice means the drugs could chemically force reliable truth.</p>`)}

      ${step(6,"Risks were already part of the 1950s story.",
        `${term("DEPENDENCE","A state in which the body adapts to repeated drug exposure and withdrawal symptoms can occur when the drug is stopped.")}
         ${term("OVERDOSE","An amount of a drug large enough to cause serious poisoning.")}
         ${term("RESPIRATORY DEPRESSION","Breathing becoming abnormally slow, shallow, or ineffective.")}
         <p>By the 1950s, medical literature recognized barbiturate dependence, poisoning, respiratory depression, and fatal overdose as serious problems.</p>`)}

      ${step(7,"What changed after the 1950s?",
        `${term("BENZODIAZEPINE","A later drug family used for effects including anxiety reduction, sedation, sleep, seizure control, and muscle relaxation.")}
         <p>Benzodiazepines entered use around the end of the 1950s and early 1960s and displaced barbiturates for many routine sedative and sleeping-pill uses.</p>`)}

      ${step(8,"Modern mechanism language came to the foreground.",
        `${term("GABA","Short for gamma-aminobutyric acid, a chemical messenger that usually makes many nerve cells less likely to send a signal.")}
         ${term("RECEPTOR","A protein on or in a cell that responds to a chemical signal.")}
         ${term("GABA-A RECEPTOR","One type of receptor through which GABA produces a braking effect on nerve-cell activity.")}
         <p>Modern pharmacology commonly explains barbiturates as drugs that strengthen or prolong inhibitory signaling through GABA-A receptors.</p>`)}

      ${step(9,"What remains today?",
        `<p>Barbiturates are no longer ordinary sleeping pills in the way they were mid-century. <strong>Phenobarbital</strong> still has seizure-control uses, and some barbiturates retain specialized roles in anesthesia and critical care.</p>
         ${term("CRITICAL CARE","Hospital care for people with severe, life-threatening illness or injury who need close monitoring and support.")}`)}

      ${shift(
        "One of the major sedative-hypnotic drug families; widely used for calming, sleep, seizures, and anesthesia, with dependence and overdose risks already recognized.",
        "Routine sedative and sleeping-pill use fell sharply after benzodiazepines arrived. Selected barbiturates remain in seizure treatment, anesthesia, and other specialized uses."
      )}`;
  }

  function scopolamineBody(){
    return `
      ${step(1,"1950s core meaning.",
        `<p>The drug is spelled <strong>scopolamine</strong>. Another name is <strong>hyoscine</strong>.</p>
         <div class="spelling-strip"><span>S</span><span>C</span><span>O</span><span>P</span><span>O</span><span>L</span><span>A</span><span>M</span><span>I</span><span>N</span><span>E</span></div>
         ${term("SCOPOLAMINE — 1950s","A drug used for several anticholinergic effects, including reducing secretions, use before anesthesia, motion-sickness control, pupil dilation, and sedation or memory impairment.")}
         <p>A 1950s reader could therefore encounter scopolamine in anesthesia, eye medicine, or discussions of sedation—not only in connection with motion sickness.</p>`)}

      ${step(2,"What did 'anticholinergic' mean?",
        `${term("NERVE CELL","A cell specialized for sending and receiving signals in the nervous system.")}
         ${term("CHEMICAL MESSENGER","A chemical used by cells to carry a signal.")}
         ${term("ACETYLCHOLINE","A chemical messenger used by nerve cells in the brain and throughout the body.")}
         ${term("RECEPTOR","A protein on or in a cell that responds to a chemical signal.")}
         ${term("ANTICHOLINERGIC","A drug that blocks some effects of the chemical messenger acetylcholine.")}
         <p>Scopolamine was and still is described as an anticholinergic drug.</p>`)}

      ${step(3,"More precise modern word: antimuscarinic.",
        `${term("MUSCARINIC RECEPTOR","One group of receptors that respond to acetylcholine. They occur in the brain and in many organs.")}
         ${term("ANTIMUSCARINIC","A drug that blocks acetylcholine at muscarinic receptors.")}
         <p><strong>Antimuscarinic</strong> is the more precise modern description of scopolamine's main receptor action.</p>`)}

      ${step(4,"The eye use.",
        `${term("PUPIL","The dark opening in the center of the eye that lets light enter.")}
         ${term("MYDRIASIS","Widening or dilation of the pupil.")}
         ${term("CYCLOPLEGIA","Temporary paralysis of the eye's focusing mechanism.")}
         ${term("OPHTHALMIC","Having to do with the eye.")}
         <p>Scopolamine can cause pupil dilation and interfere temporarily with focusing. That is the pupil-dilator use you were remembering.</p>`)}

      ${step(5,"The sedative and memory effects.",
        `${term("SEDATION","Reduced alertness or responsiveness.")}
         ${term("AMNESIA","Loss of memory for some events or information.")}
         ${term("AMNESTIC","Producing or contributing to amnesia.")}
         <p>Scopolamine enters the brain and can produce drowsiness, sedation, confusion, and memory impairment.</p>`)}

      ${step(6,"The older history behind the 1950s reputation.",
        `${term("TWILIGHT SLEEP","An early-20th-century childbirth practice combining scopolamine with morphine in an attempt to reduce pain and especially memory of labor.")}
         ${term("TRUTH SERUM","A popular historical label for drugs claimed to make a person reveal truthful information while sedated or mentally altered.")}
         <p>Both “twilight sleep” and early “truth serum” stories contributed to scopolamine's historical reputation before the 1950s. A drug does not provide a reliable chemical test of truth.</p>`)}

      ${step(7,"What could happen at toxic exposure?",
        `${term("DELIRIUM","A sudden confused state with disturbed attention and awareness.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("PARANOIA","Strong suspiciousness or fear of harmful intentions not adequately supported by evidence.")}
         <p>Too much scopolamine can produce agitation, delirium, hallucinations, paranoia, and other severe mental changes.</p>`)}

      ${step(8,"What changed later?",
        `${term("TRANSDERMAL","Delivered through the skin.")}
         ${term("MOTION SICKNESS","Nausea, dizziness, and related symptoms triggered when movement signals from the eyes and balance organs do not agree well.")}
         ${term("POSTOPERATIVE","Occurring after an operation or surgery.")}
         <p>The modern scopolamine patch made the drug especially familiar for preventing motion sickness and postoperative nausea and vomiting.</p>`)}

      ${step(9,"The eye warning remains important.",
        `${term("GLAUCOMA","A group of eye diseases involving damage to the optic nerve, often associated with abnormal pressure inside the eye.")}
         ${term("ANGLE-CLOSURE GLAUCOMA","A form of glaucoma in which the drainage angle inside the eye closes and pressure can rise rapidly.")}
         <p>Because scopolamine can dilate the pupil, it can be hazardous in people susceptible to angle-closure glaucoma.</p>`)}

      ${shift(
        "A multipurpose anticholinergic drug encountered in anesthesia, secretion control, motion sickness, eye medicine, and sedation or amnesia.",
        "The drug remains antimuscarinic, but the transdermal motion-sickness and postoperative-nausea patch became one of its most familiar modern uses; ophthalmic and routine preanesthetic use became less central."
      )}`;
  }

  function phenobarbitalBody(){
    return `
      <section class="entry-section period-anchor">
        <p class="kicker">1950s reference point</p>
        <h3>What “phenobarbital” meant in the 1950s</h3>
        <p><strong>Phenobarbital</strong> was an established member of the barbiturate drug family. A 1950s medical reader would recognize it particularly as a <strong>sedative</strong> and as a drug used to control <strong>seizures</strong>.</p>
        ${term("BARBITURATE","A major mid-century drug family used for calming and sleep; some members also had seizure-control or anesthesia uses.")}
        ${term("SEDATIVE","A drug used to calm or reduce nervous-system activity and alertness.")}
        ${term("SEIZURE","A sudden burst of abnormal electrical activity in the brain that can change movement, sensation, awareness, or behavior.")}
        <p><strong>Later change:</strong> barbiturates largely disappeared from routine sleeping-pill use after newer drug families arrived, but phenobarbital continued to have seizure-control uses.</p>
      </section>

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
    {slug:"psychiatry",title:"Psychiatry",category:"Fields",short:"In the 1950s: the medical specialty dealing with mental illness and disturbances of thought, emotion, personality, and behavior; later diagnostic language changed substantially.",keywords:"psychiatry psychiatrist mid century psychoanalysis DSM medical specialty",body:psychiatryBody()},
    {slug:"psychology",title:"Psychology",category:"Fields",short:"In the 1950s: the scientific study of behavior and mental life, with behaviorism, learning, testing, and measurement especially prominent in U.S. psychology.",keywords:"psychology psychologist behavior cognition mid century behaviorism psychoanalysis",body:psychologyBody()},
    {slug:"sociology",title:"Sociology",category:"Fields",short:"In the 1950s: the systematic study of society, social groups, institutions, roles, and relationships.",keywords:"sociology society institutions social science mid century structural functionalism",body:sociologyBody()},
    {slug:"schizophrenia",title:"Schizophrenia",category:"Psychosis Terms",short:"In DSM-I (1952): 'schizophrenic reaction,' a broad psychotic category involving major disturbances of reality relationships, thought, emotion, and behavior.",keywords:"schizophrenia schizophrenic reaction split mind split personality two minds DSM I DSM II psychosis hallucination delusion",body:schizophreniaBody()},
    {slug:"schizophrenic",title:"Schizophrenic",category:"Psychosis Terms",short:"The adjective derived from schizophrenia; historically it also acquired figurative 'divided' or 'of two minds' meanings.",keywords:"schizophrenic adjective split mind split personality two minds divided contradictory mid century",body:schizophrenicBody()},
    {slug:"psychosis",title:"Psychosis",category:"Psychosis Terms",short:"In the 1950s: a broad severe-mental-disorder concept centered on major failure of reality testing and serious disruption of personality functioning.",keywords:"psychosis reality testing hallucination delusion psychotic mid century neurosis",body:psychosisBody()},
    {slug:"psychotic",title:"Psychotic",category:"Psychosis Terms",short:"In the 1950s: describing a person, symptom, reaction, or disorder classed as psychotic; the noun 'a psychotic' was also common.",keywords:"psychotic adjective psychosis schizophrenia mid century terminology",body:psychoticBody()},
    {slug:"sedative",title:"Sedative",category:"Sedation & Sleep Terms",short:"In the 1950s: a calming or nervous-system-depressing drug; barbiturates were among the major examples.",keywords:"sedative sedation calming drowsiness barbiturate hypnotic",body:sedativeBody()},
    {slug:"soporific",title:"Soporific",category:"Sedation & Sleep Terms",short:"In the 1950s: sleep-producing or strongly drowsiness-producing; later the figurative 'boring' use became especially familiar.",keywords:"soporific sleep drowsy sedative boring sopor",body:soporificBody()},
    {slug:"hypnotic-drug",title:"Hypnotic Drug",category:"Sedation & Sleep Terms",short:"In 1950s medicine: a sleep-producing drug, often a barbiturate; distinct from hypnosis.",keywords:"hypnotic drug sedative hypnotic sleeping pill sleep barbiturate",body:hypnoticDrugBody()},
    {slug:"hypnosis",title:"Hypnosis",category:"Sedation & Sleep Terms",short:"In the 1950s: commonly described as a trance-like condition or procedure involving focused attention and increased suggestibility.",keywords:"hypnosis hypnotic induction suggestion mesmerism mid century",body:hypnosisBody()},
    {slug:"barbiturates",title:"Barbiturate / Barbiturates",category:"Drug Terms & History",short:"In the 1950s: one of the major sedative-hypnotic drug families, also used for seizures and anesthesia.",keywords:"barbiturate barbiturates barbituate barbituates barbibturate barbibturates sedative hypnotic phenobarbital",body:barbituratesBody()},
    {slug:"scopolamine-primer",title:"Scopolamine — Primer",category:"Drug Terms & History",short:"In the 1950s: an anticholinergic drug used in anesthesia, secretion control, motion sickness, eye medicine, and for sedative or memory effects.",keywords:"scopolamine hyoscine pupil dilator mydriasis cycloplegia sedative amnestic twilight sleep motion sickness antimuscarinic",body:scopolamineBody()},
    {slug:"phenobarbital-full-primer",title:"Phenobarbital — Complete Primer",category:"Drug Terms & History",short:"The complete beginner journey from matter and benzene to phenyl, barbituric acid, Baeyer, Barbara, and the full drug name.",keywords:"phenobarbital phenobarbitol barbiturate benzene gasoline benzoin perfume phenyl pheno barbital Baeyer Barbara urea",body:phenobarbitalBody()}
  ];

  window.PSYCHIATRY_CONTENT = { defaultBody: defaultPrimer(), entries };
})();
