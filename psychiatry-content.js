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
          <p class="lede">This cabinet starts with what each word meant in professional use in the 1950s. It also explains why the word has that meaning and where its pieces came from.</p>
          <div class="primer-chain"><span>1950s meaning</span><b>→</b><span>word parts</span><b>→</b><span>why the name fits</span><b>→</b><span>later change</span></div>
        </header>

        ${step(1,"Why start in the 1950s?",
          `<p>Words in psychiatry and psychology did not always mean exactly what they mean today. A modern definition can therefore hide what an older book, doctor, movie, newspaper, or conversation meant by the same word.</p>
           ${term("MID-CENTURY","Here, the period centered on the 1950s—especially about 1950 through 1959.")}
           ${term("USAGE","The way a word is actually used and understood in a particular time and setting.")}
           <p>For the important words, this page also takes the word apart. Knowing the pieces makes a technical word easier to remember and easier to recognize elsewhere.</p>`)}

        ${step(2,"Three fields as a 1950s reader would meet them.",
          `${term("PSYCHIATRY — 1950s","A branch of medicine dealing with mental illness and serious disturbances of thought, emotion, and behavior. Psychiatrists were medical doctors. U.S. psychiatry of the period was strongly influenced by psychoanalytic ideas.")}
           ${term("PSYCHOLOGY — 1950s","The scientific study of behavior and mental life. In American academic psychology, observable behavior, learning, testing, and measurement were especially prominent.")}
           ${term("SOCIOLOGY — 1950s","The study of society, social groups, institutions, roles, and relationships among people.")}
           <p>The basic field names survive, but the theories and methods emphasized inside each field changed considerably afterward.</p>`)}

        ${step(3,"Psychosis, psychotic, and schizophrenia: what the words mean and why.",
          `<p>These three words are related, but they are not synonyms. Start by taking them apart.</p>

           ${term("PSYCHE","From Greek <em>psychē</em>: mind, soul, or life. In modern words such as psychology and psychosis, <strong>psych-</strong> points toward the mind or mental life.")}
           ${term("-OSIS","A word ending used in medicine for a state or condition, often an abnormal or diseased condition.")}

           <div class="flow"><span><strong>psych-</strong><br>mind</span><b>+</b><span><strong>-osis</strong><br>condition</span><b>→</b><span><strong>psychosis</strong><br>a mental condition</span></div>

           ${term("PSYCHOSIS — 1950s","A broad name for severe mental disturbance in which a person could fail to test and evaluate the outside world correctly, together with serious disruption of thought, emotion, behavior, or ordinary functioning. The word literally points to a condition of the mind: psych- + -osis.")}

           ${term("NEUROSIS — 1950s","A broad name for psychological disturbance—especially involving anxiety and difficulty adjusting to ordinary life—in which the person was not considered to show the gross falsification of external reality or gross personality disorganization associated with psychosis. Neuro- means nerve; -osis means condition.")}
           <div class="flow"><span><strong>neuro-</strong><br>nerve</span><b>+</b><span><strong>-osis</strong><br>condition</span><b>→</b><span><strong>neurosis</strong><br>originally 'a nervous condition'</span></div>

           ${term("-IC","A common word ending meaning 'relating to' or 'having to do with.'")}
           <div class="flow"><span><strong>psychosis</strong><br>the condition</span><b>→</b><span><strong>psychotic</strong><br>relating to that kind of severe mental condition</span></div>

           ${term("PSYCHOTIC — 1950s","An adjective applied to a symptom, reaction, disorder, or person when the disturbance was severe enough to involve major failure in judging external reality or major disruption of personality functioning. Older medical writing also used <em>a psychotic</em> as a noun for a person.")}

           ${term("SCHIZO-","From Greek <em>schizein</em>, 'to split.' The word part <strong>schizo-</strong> therefore carries the idea of splitting or division.")}
           ${term("PHREN-","From Greek <em>phrēn</em> or <em>phrenos</em>. In older Greek usage it could refer to the diaphragm or inner organs, but it also developed meanings connected with the mind, understanding, or mental faculties.")}
           ${term("-IA","A word ending used to form nouns naming a state or condition.")}

           <div class="flow"><span><strong>schizo-</strong><br>split</span><b>+</b><span><strong>phren-</strong><br>mind</span><b>+</b><span><strong>-ia</strong><br>condition</span><b>→</b><span><strong>schizophrenia</strong><br>roughly “a condition of splitting of the mind”</span></div>

           <p>Eugen Bleuler introduced <strong>schizophrenia</strong> decades before the 1950s. His word was meant to describe what he regarded as a loss of unity or splitting among mental functions—not simply two complete personalities.</p>

           ${term("REACTION — DSM-I","A response or way of reacting. DSM-I often used the word <strong>reaction</strong> because the manual described many disorders as ways a person reacted to psychological, social, or biological pressures.")}
           ${term("SCHIZOPHRENIC REACTION — 1950s","DSM-I's 1952 name for a group of severe disorders in the schizophrenia family. The phrase literally combines <strong>schizophrenic</strong>—relating to schizophrenia—with <strong>reaction</strong>—the person's pathological response or pattern of disturbance.")}

           <p>After the 1950s the diagnostic system changed, but these word histories explain why the older terms look and sound the way they do.</p>`)}

        ${step(4,"Sedative, soporific, hypnotic drug, and hypnosis—one word at a time.",
          `<p>These four words sit close together because all of them touch the ideas of <strong>calming</strong>, <strong>sleepiness</strong>, <strong>sleep</strong>, or a <strong>sleep-like state</strong>. But they do not mean the same thing.</p>

           ${term("CALM","Less excited, agitated, or active. A drug can calm a person without making the person fall asleep.")}
           ${term("DROWSY","Sleepy: still awake, but feeling ready to fall asleep.")}
           ${term("SLEEP","The ordinary state in which a person is not awake and responds less to the surroundings.")}

           <p><strong>Now build the first word.</strong></p>
           ${term("SEDATE","To calm or quiet, especially by using a drug. The word comes from Latin <em>sedare</em>, meaning to calm or settle.")}
           ${term("-IVE","A common ending meaning roughly 'having the nature of,' 'tending to,' or 'doing the job of.'")}
           <div class="flow"><span><strong>sedate</strong><br>calm or quiet</span><b>+</b><span><strong>-ive</strong><br>having that action</span><b>→</b><span><strong>sedative</strong><br>something used to calm</span></div>
           ${term("SEDATIVE — 1950s","A drug used to calm a person, reduce nervous excitement, lower alertness, or produce drowsiness. A sedative did not have to make the person fully asleep.")}

           <p><strong>Now build the second word.</strong></p>
           ${term("SOPOR","A Latin word meaning deep sleep. English kept this old sleep-root in words such as <em>soporific</em>.")}
           ${term("-FIC","A word part meaning making or producing. It comes from the Latin idea of making or doing.")}
           <div class="flow"><span><strong>sopor</strong><br>deep sleep</span><b>+</b><span><strong>-fic</strong><br>making</span><b>→</b><span><strong>soporific</strong><br>sleep-making</span></div>
           ${term("SOPORIFIC — 1950s","Something that produces sleep or strong sleepiness. A drug could be called soporific if it made a person very sleepy or caused sleep.")}

           <p><strong>Now build the third word.</strong></p>
           ${term("HYPNOS","The Greek word for sleep. The word family <strong>hypn- / hypno-</strong> carries the idea of sleep.")}
           ${term("-IC","A common ending meaning 'relating to' or 'having to do with.'")}
           <div class="flow"><span><strong>hypn-</strong><br>sleep</span><b>+</b><span><strong>-ic</strong><br>relating to</span><b>→</b><span><strong>hypnotic</strong><br>sleep-related or sleep-producing</span></div>
           ${term("HYPNOTIC DRUG — 1950s","A drug used specifically to cause sleep. Barbiturates were among the main drugs a 1950s medical reader would have understood by the term <em>hypnotic</em>.")}

           <p><strong>Now use the same sleep-root in a different word.</strong></p>
           ${term("-OSIS","A word ending used for a state, condition, or process. You already saw it in <em>psychosis</em> and <em>neurosis</em>.")}
           <div class="flow"><span><strong>hypn-</strong><br>sleep</span><b>+</b><span><strong>-osis</strong><br>state or condition</span><b>→</b><span><strong>hypnosis</strong><br>a name built around the idea of a sleep-like state</span></div>
           ${term("TRANCE","A traditional word for an unusually absorbed state in which attention is narrowed or strongly focused.")}
           ${term("ATTENTION","What the mind is concentrating on.")}
           ${term("SUGGESTION","A statement or instruction intended to influence what a person notices, feels, imagines, or does.")}
           ${term("RESPONSIVE","Likely to notice and react to something.")}
           ${term("HYPNOSIS — 1950s","A condition or procedure commonly described as involving trance or strongly focused attention together with increased responsiveness to suggestion. The word was historically built from the Greek sleep-root, but hypnosis was not simply ordinary sleep.")}

           <div class="compare-grid">
             <div class="compare-card"><h3>Sedative</h3><p>calms; sleep is not required</p></div>
             <div class="compare-card"><h3>Soporific</h3><p>makes a person very sleepy or asleep</p></div>
             <div class="compare-card"><h3>Hypnotic drug</h3><p>a drug specifically used to cause sleep</p></div>
             <div class="compare-card"><h3>Hypnosis</h3><p>a procedure or condition involving focused attention and suggestion—not a sleeping drug</p></div>
           </div>

           <p>The shortest memory rule is: <strong>sedative = calm</strong>; <strong>soporific = sleep-making</strong>; <strong>hypnotic drug = sleep-producing drug</strong>; <strong>hypnosis = focused-attention/suggestion procedure or condition</strong>.</p>`)}

        ${step(5,"Two drug histories as a 1950s reader would recognize them.",
          `${term("SCOPOLAMINE — 1950s","A drug also called hyoscine, used for reducing secretions, use before anesthesia, motion-sickness control, pupil dilation, and sedative or memory-impairing effects. Its name comes from the plant genus <em>Scopolia</em>, which was named for naturalist Giovanni Antonio Scopoli.")}
           ${term("BARBITURATE — 1950s","A major class of sedative and hypnotic drugs. Different barbiturates were also used for seizures and anesthesia.")}
           <p>They could both cause drowsiness, but they were different chemical families and worked differently.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('scopolamine-primer')">Open the Scopolamine primer →</button>
           <button type="button" class="primer-open-link" onclick="openEntry('barbiturates')">Open the Barbiturate primer →</button>`)}

        ${step(6,"Phenobarbital gets its own complete history.",
          `<p>Phenobarbital was already an established barbiturate by the 1950s, used particularly as a sedative and as a drug for controlling seizures. Its complete 18-step chemistry-and-name primer is preserved here.</p>
           <button type="button" class="primer-open-link" onclick="openEntry('phenobarbital-full-primer')">Open the complete Phenobarbital primer →</button>`)}

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
         ${term("DSM-I","The first edition of the American Psychiatric Association's Diagnostic and Statistical Manual of Mental Disorders, published in 1952.")}
         ${term("REACTION","A word DSM-I frequently used to describe a mental disorder as a person's reaction to psychological, social, or biological pressures.")}
         <p>American psychiatry in the 1950s was strongly influenced by psychoanalytic thinking. DSM-I commonly named disorders as <strong>reactions</strong>, including <em>schizophrenic reaction</em> and <em>depressive reaction</em>.</p>`)}

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
        "A medical specialty strongly shaped in the United States by psychoanalytic ideas, broad diagnostic categories, reaction terminology, state hospitals, and the psychosis–neurosis distinction.",
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
      ${step(1,"Start with the word before the diagnosis.",
        `${term("SCHIZO-","From Greek <em>schizein</em>: to split.")}
         ${term("PHREN-","From Greek <em>phrēn</em> or <em>phrenos</em>. The word had older bodily meanings, but it also came to refer to mind, understanding, or mental faculties.")}
         ${term("-IA","A word ending used to name a state or condition.")}
         ${chain(["schizo- · split","phren- · mind","-ia · condition","schizophrenia · roughly 'a condition of splitting of the mind'"])}
         <p>Eugen Bleuler introduced the term in the early 20th century. His idea of <strong>splitting</strong> concerned a loss of integration among mental functions. He was not simply naming two complete personalities.</p>`)}

      ${step(2,"1950s core term: 'schizophrenic reaction.'",
        `${term("DSM-I","The first American Psychiatric Association diagnostic manual, published in 1952.")}
         ${term("REACTION","A response or way of reacting. DSM-I frequently described disorders as reactions of the person to internal and external pressures.")}
         ${term("SCHIZOPHRENIC","The adjective formed from schizophrenia: relating to schizophrenia or to the schizophrenia family of disturbances.")}
         ${term("SCHIZOPHRENIC REACTION — 1950s","DSM-I's name for a group of severe disorders involving major disturbances in the person's relationship to the outside world, formation of ideas, emotional life, behavior, and flow of thought.")}
         <p>The phrase can therefore be read literally as <strong>a reaction belonging to the schizophrenia group</strong>.</p>`)}

      ${step(3,"Define 'psychotic reaction' without circular wording.",
        `${term("PSYCHOTIC REACTION — 1950s","A severe mental disturbance in which the person's usual organization of thought, emotion, behavior, or personality was seriously disrupted and the person could fail to judge the outside world correctly.")}
         ${term("EXTERNAL REALITY","The outside world—the people, events, objects, and circumstances outside a person's private thoughts or perceptions.")}
         <p>DSM-I described these severe disorders as involving personality disorganization and failure to <strong>test and evaluate external reality correctly</strong>.</p>`)}

      ${step(4,"Symptoms described then.",
        `${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("DISORGANIZED THOUGHT","Thought whose ordinary connections become severely confused, fragmented, or difficult to follow.")}
         <p>1950s descriptions could include withdrawal from the outside world, unusual behavior, disturbances in thought, delusions, hallucinations, and major changes in emotional expression and relationships.</p>`)}

      ${step(5,"Why did 'split personality' become associated with the word?",
        `${term("FIGURATIVE","Using a word as a metaphor rather than in its strict technical meaning.")}
         <p>The literal parts of <strong>schizophrenia</strong> really do contain the idea <strong>split + mind</strong>. By the 1950s, <em>schizophrenic</em> was also being used figuratively to mean <strong>divided, contradictory, split, or “of two minds.”</strong></p>
         <p>That figurative usage helped reinforce the popular phrase <strong>split personality</strong>, even though that was not Bleuler's simple diagnostic definition.</p>`)}

      ${step(6,"What changed later?",
        `${term("DIAGNOSTIC CRITERIA","A written set of features used to decide whether a diagnosis applies.")}
         ${term("SUBTYPE","A smaller named category inside a larger diagnosis.")}
         <p>DSM-II in 1968 dropped the word <em>reaction</em>. DSM-III in 1980 introduced much more explicit criteria and narrowed American diagnostic practice. Later DSM editions also removed the old paranoid, catatonic, disorganized, residual, and undifferentiated schizophrenia subtypes as separate subtypes.</p>
         ${term("DISSOCIATIVE IDENTITY DISORDER","A separate diagnosis involving distinct identity states and major disruptions of memory and identity. It is not schizophrenia.")}`)}

      ${shift(
        "DSM-I's 'schizophrenic reaction' was a broad severe-disorder category described in terms of disturbed relationships to reality, thought, emotion, behavior, and personality integration.",
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
      ${step(1,"Start with the word itself.",
        `${term("PSYCHE","From Greek <em>psychē</em>: mind, soul, or life. In modern mental-health vocabulary, <strong>psych-</strong> points toward the mind or mental life.")}
         ${term("-OSIS","A medical word ending meaning a state or condition, often an abnormal condition.")}
         ${chain(["psych- · mind","-osis · condition","psychosis · a condition of the mind"])}
         <p>The word <strong>psychosis</strong> entered medical vocabulary in the 19th century. By the 1950s it had acquired a broad psychiatric meaning much more specific than the literal word parts alone.</p>`)}

      ${step(2,"1950s core meaning.",
        `${term("PSYCHOSIS — 1950s","A broad term for severe mental disturbance involving serious breakdown in the usual organization of thought, emotion, behavior, or personality, together with failure to test and evaluate external reality correctly.")}
         ${term("EXTERNAL REALITY","The outside world—the people, events, objects, and circumstances that exist independently of a person's private thoughts or perceptions.")}
         <p>So the 1950s meaning was not merely “a mental condition.” It was a category for severe disturbance in how the person functioned and dealt with the outside world.</p>`)}

      ${step(3,"The 1950s contrast with neurosis.",
        `<div class="compare-grid">
          <div class="compare-card">
            <h3>Neurosis</h3>
            <p>The person could have anxiety, fears, compulsions, depression, or other serious psychological difficulties, but was <strong>not considered grossly detached from external reality</strong> and did not show gross disorganization of personality.</p>
          </div>
          <div class="compare-card">
            <h3>Psychosis</h3>
            <p>The disturbance had crossed into <strong>gross distortion of external reality, serious personality disorganization, or major breakdown in ordinary social or work functioning</strong>.</p>
          </div>
         </div>
         <div class="memory"><strong>Useful 1950s memory aid:</strong> neurosis = psychologically troubled but basically still operating inside the shared world; psychosis = the disturbance can seriously disrupt the person's grip on that shared world and the organization of ordinary life.</div>
         <p>That memory aid is deliberately simpler than the old manuals. It does <strong>not</strong> mean every person with neurosis functioned well, or that every person with psychosis neglected all self-care.</p>`)}

      ${step(4,"What did DSM-I emphasize?",
        `${term("PERSONALITY DISINTEGRATION","A 1950s phrase for severe breakdown in the usual organization and functioning of the person's thoughts, emotions, behavior, and relationships.")}
         ${term("FUNCTIONING","A person's ability to manage ordinary life tasks, work, relationships, and self-care.")}
         <p>DSM-I described psychotic disorders as involving personality disintegration, failure to test and evaluate external reality correctly, and inability to relate effectively to people or work.</p>
         <p>This is why your intuition about <strong>life no longer being managed normally</strong> is close to the historical distinction. But <strong>being a burden on other people</strong> was not itself the diagnostic dividing line.</p>`)}

      ${step(5,"Why the adjective is 'psychotic.'",
        `${term("-IC","A word ending meaning 'relating to' or 'having to do with.'")}
         ${chain(["psychosis · the condition","psychotic · relating to that condition"])}
         <p><strong>Psychosis</strong> is the noun. <strong>Psychotic</strong> is the adjective formed from it.</p>`)}

      ${step(6,"What changed later?",
        `${term("SYMPTOM-FOCUSED","Describing a condition mainly by the particular experiences or behaviors present rather than by one broad severity category.")}
         <p>Later diagnostic systems moved away from psychosis versus neurosis as the master division. Modern use of <strong>psychosis</strong> is more symptom-focused and commonly refers to disturbances such as delusions, hallucinations, or severely disorganized thought or behavior.</p>
         ${term("DELUSION","A firmly held belief that remains fixed despite strong evidence against it, judged in cultural and clinical context.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}`)}

      ${shift(
        "A broad category of severe mental disturbance defined partly by failure to test and evaluate external reality correctly, personality disorganization, and impaired social or occupational functioning.",
        "The word became more symptom-focused. It now describes a type of disturbance that can occur in several different diagnoses or medical conditions rather than one single broad disease class."
      )}`;
  }

  function neurosisBody(){
    return `
      ${step(1,"Start with the word itself.",
        `${term("NEURO-","A word part meaning nerve or nervous system. It comes from Greek <em>neuron</em>, originally meaning a sinew, cord, or nerve.")}
         ${term("-OSIS","A medical word ending meaning a state or condition, often an abnormal condition.")}
         ${chain(["neuro- · nerve","-osis · condition","neurosis · a nervous condition"])}
         <p>Scottish physician <strong>William Cullen</strong> coined <em>neurosis</em> in the 18th century for disorders he thought arose from the nervous system without an obvious local injury. The meaning changed substantially before the 1950s.</p>`)}

      ${step(2,"What did neurosis mean in the 1950s?",
        `${term("PSYCHONEUROTIC DISORDER — DSM-I","DSM-I's broad category for disorders in which anxiety was considered a chief feature, either felt directly or handled through psychological defenses.")}
         ${term("ANXIETY","A state of apprehension, fear, tension, or expectation of danger. In DSM-I, anxiety was treated as central to the psychoneurotic disorders.")}
         <p>In 1950s American psychiatry, <strong>neurosis</strong> referred broadly to psychological disturbance involving anxiety, fears, compulsions, depressive reactions, conversion symptoms, or similar problems <strong>without the gross distortion of external reality or gross personality disorganization associated with psychosis</strong>.</p>`)}

      ${step(3,"What does 'maladjustment' mean?",
        `${term("MAL-","A word part meaning bad, badly, or poorly. It comes through Latin and appears in words such as malfunction and malpractice.")}
         ${term("ADJUST","To change or adapt so that something fits its circumstances better. A person adjusts when he changes how he acts, thinks, or organizes his life in response to circumstances.")}
         ${term("-MENT","A word ending that can name the state, result, or process of doing something.")}
         ${chain(["mal- · poorly","adjust · adapt to circumstances","-ment · state or result","maladjustment · poor adjustment"])}
         ${term("MALADJUSTMENT — 1950s","Poor adjustment to the demands or circumstances of ordinary life. A person might be described as maladjusted if fears, habits, emotions, or patterns of behavior repeatedly made work, school, family life, or relationships harder to manage.")}
         <p><strong>Maladjustment did not automatically mean psychosis.</strong> A person could be seriously maladjusted and still know where he was, who other people were, what was happening around him, and what ordinary reality required.</p>
         <div class="example"><strong>Example</strong><br><span class="example-note">A man has such severe anxiety that he repeatedly refuses promotions, avoids travel, and develops stomach distress before ordinary obligations. A mid-century writer might call that neurotic maladjustment. His life is being impaired, but he has not necessarily lost his grasp of the outside world.</span></div>`)}

      ${step(4,"Your 'still able to live your life' idea is useful—but needs one correction.",
        `<p>A person described as neurotic in the 1950s could be distressed, preoccupied, fearful, compulsive, depressed, or poorly adjusted. The symptoms could interfere substantially with work or relationships.</p>
         <p>But the person was generally understood as remaining <strong>inside the shared external world</strong>: not grossly falsifying reality through delusions or hallucinations and not showing the gross personality disorganization used to define psychosis.</p>
         <div class="memory"><strong>Good shorthand:</strong> neurosis = life may be difficult, anxious, constricted, or poorly adjusted, but the person is basically still oriented to the same external world as everyone else.</div>`)}

      ${step(5,"Now contrast it with psychosis.",
        `<div class="compare-grid">
          <div class="compare-card">
            <h3>Neurosis — 1950s</h3>
            <p>Psychological dysfunction and poor adjustment to ordinary life, commonly organized around anxiety, but without gross falsification of external reality and without gross disorganization of personality.</p>
          </div>
          <div class="compare-card">
            <h3>Psychosis — 1950s</h3>
            <p>Severe disturbance involving personality disintegration, failure to test and evaluate external reality correctly, or inability to relate effectively to people or work.</p>
          </div>
         </div>
         <p>Your phrase <strong>“still able to live your life”</strong> points toward a real part of the distinction: preservation of ordinary reality contact and personality organization. But it should not be read as “a neurotic person always functions well.”</p>
         <p>Likewise, <strong>“becoming a burden on others”</strong> can happen in severe illness, but it is a consequence, not the definition of psychosis.</p>`)}

      ${step(6,"Why 'neurotic'?",
        `${term("-IC","A word ending meaning 'relating to' or 'having to do with.'")}
         ${term("NEUROTIC","The adjective meaning relating to neurosis or showing features then described as neurotic. Older writing also used <em>a neurotic</em> as a noun for a person.")}
         ${chain(["neurosis · the condition","neurotic · relating to that condition"])}
         <p>The same grammar distinction appears here as with <em>psychotic</em>: <strong>he is neurotic</strong> uses an adjective; <strong>he is a neurotic</strong> turns the adjective into a noun-label for the person.</p>`)}

      ${step(7,"What happened to the term later?",
        `<p>The broad neurosis-versus-psychosis division weakened during the 1960s and 1970s. DSM-III in 1980 reorganized the old neurotic conditions into more specific categories and largely abandoned <strong>neurosis</strong> as an official organizing diagnosis.</p>
         <p>Conditions previously grouped under neurosis were redistributed into categories such as anxiety disorders, depressive disorders, obsessive-compulsive conditions, dissociative disorders, and somatic-symptom-related diagnoses.</p>
         <p>The words <strong>neurosis</strong> and <strong>neurotic</strong> still survive in historical writing, psychoanalytic traditions, personality language, and ordinary speech.</p>`)}

      ${shift(
        "A broad family of psychological disturbances, especially involving anxiety and poor adjustment to ordinary life, without the gross falsification of external reality or gross personality disorganization associated with psychosis.",
        "The broad diagnostic category was largely dismantled in DSM-III. More specific diagnoses replaced it, although the words neurosis and neurotic remain in historical and ordinary language."
      )}

      ${sourceBox([
        '<a href="https://cpcglobal.org/publications/dsm-1952.pdf" target="_blank" rel="noopener">DSM-I (1952) — Psychoneurotic Disorders</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2632489/" target="_blank" rel="noopener">PMC — history of the psychosis/neurosis distinction</a>',
        '<a href="https://www.etymonline.com/word/neurosis" target="_blank" rel="noopener">Etymonline — origin of neurosis</a>'
      ])}`;
  }

  function psychoticBody(){
    return `
      ${step(1,"1950s core meaning.",
        `${term("ADJECTIVE","A word that describes or modifies another word.")}
         <p><strong>Psychotic</strong> was an adjective for a severe mental disturbance involving major difficulty judging the outside world correctly, major disruption of ordinary personality functioning, or both.</p>
         <p>That gives the meaning without defining the word by itself.</p>`)}

      ${step(2,"Take the word apart.",
        `${term("PSYCHE","Greek <em>psychē</em>: mind, soul, or life. The word part <strong>psych-</strong> points toward the mind or mental life.")}
         ${term("-OSIS","A medical word ending meaning a state or condition.")}
         ${term("PSYCHOSIS","The noun: in 1950s use, a broad category of severe mental disturbance.")}
         ${term("-IC","A word ending meaning 'relating to' or 'having to do with.'")}
         ${chain(["psych- · mind","-osis · condition","psychosis · the condition","psychotic · relating to that condition"])}
         <p><strong>Psychosis</strong> names the condition. <strong>Psychotic</strong> describes something as belonging to, showing, or involving that kind of condition.</p>`)}

      ${step(3,"'He is psychotic' and 'He is a psychotic' are not the same grammar.",
        `${term("PREDICATE ADJECTIVE","An adjective placed after a linking verb such as <em>is</em>, describing the subject.")}
         <div class="compare-grid">
           <div class="compare-card">
             <h3>He is psychotic.</h3>
             <p><strong>Psychotic is an adjective.</strong> It describes him as presently having or showing the kind of severe disturbance called psychosis.</p>
             <p>Grammatically, the sentence says something <strong>about him</strong>. It does not turn the adjective into his name or class.</p>
           </div>
           <div class="compare-card">
             <h3>He is a psychotic.</h3>
             <p><strong>Psychotic is being used as a noun.</strong> The word <em>a</em> tells you that the sentence is placing him into a class of people called “psychotics.”</p>
             <p>This noun use was ordinary in older psychiatric writing.</p>
           </div>
         </div>
         ${term("NOMINALIZE","To turn a word that normally has another job—such as an adjective—into a noun or noun-like label.")}
         <p>So <strong>he is psychotic</strong> describes a condition or quality. <strong>He is a psychotic</strong> nominalizes the adjective and labels the person as a member of a category.</p>
         <p>The adjective does <strong>not</strong> automatically mean the condition is temporary; grammar alone does not tell you how long it lasts. The difference is description versus classification of the person.</p>`)}

      ${step(4,"Why did the word carry such a strong meaning in the 1950s?",
        `${term("EXTERNAL REALITY","The outside world—the people, events, objects, and circumstances outside a person's private thoughts or perceptions.")}
         <p>Mid-century psychiatry used the psychosis category for severe disturbances involving failure to judge external reality correctly, major disruption of personality organization, or serious difficulty functioning in relationships and work.</p>
         <p>So calling a symptom, reaction, or disorder <strong>psychotic</strong> placed it in that severe category.</p>`)}

      ${step(5,"Common 1950s-style phrases.",
        `<div class="definition-grid">
          <div class="definition-card"><h3>psychotic reaction</h3><p>a severe psychiatric reaction placed in the period's psychosis category</p></div>
          <div class="definition-card"><h3>psychotic depression</h3><p>a severe depressive condition placed in the psychosis category</p></div>
          <div class="definition-card"><h3>a psychotic</h3><p>the older noun use for a person placed in the psychosis category</p></div>
        </div>`)}

      ${step(6,"What changed later?",
        `<p>Modern professional writing more often keeps <strong>psychotic</strong> as an adjective in phrases such as <em>psychotic symptom</em>, <em>psychotic episode</em>, or <em>person experiencing psychosis</em>.</p>
         <p>The older noun phrase <strong>a psychotic</strong> has become much less favored because it uses the diagnosis as the person's category label.</p>
         <p>The word <strong>psychotic</strong> also does not by itself mean schizophrenia, violence, dangerousness, low intelligence, or eccentricity.</p>`)}

      ${shift(
        "An adjective for severe mental disturbance involving major problems judging external reality or maintaining ordinary personality functioning; 'a psychotic' was also ordinary noun usage.",
        "The adjective remains in use, but noun-labeling of a person as 'a psychotic' is generally avoided in professional writing."
      )}`;
  }

  function sedativeBody(){
    return `
      ${step(1,"Start with the ordinary idea: calm.",
        `${term("CALM","Less excited, agitated, or active.")}
         ${term("DROWSY","Sleepy: still awake, but feeling ready to fall asleep.")}
         <p>A medicine does not have to make a person sleep in order to be a sedative. The central idea is <strong>calming or lowering activity and alertness</strong>.</p>`)}

      ${step(2,"Build the word 'sedative.'",
        `${term("SEDATE","To calm or quiet, especially with a drug. English gets the word from Latin <em>sedare</em>, meaning to calm or settle.")}
         ${term("-IVE","A common ending meaning roughly 'having the nature of,' 'tending to,' or 'doing the job of.'")}
         ${chain(["sedate · calm or quiet","-ive · having that action","sedative · something used to calm"])}
         ${term("SEDATIVE — 1950s","A drug used to calm, reduce nervous excitement, lower alertness or activity, or produce drowsiness. It could cause drowsiness without necessarily producing full sleep.")}
         ${term("SEDATION","The state produced when alertness, agitation, or responsiveness has been reduced.")}`)}

      ${step(3,"How was that different from 'hypnotic'?",
        `${term("HYPNOTIC DRUG — 1950s","A drug used specifically to cause sleep.")}
         ${term("SEDATIVE-HYPNOTIC","A drug that could calm at one dose or level of effect and produce sleep at a stronger one.")}
         <p>So the distinction is simple: <strong>sedative</strong> points first to calming; <strong>hypnotic</strong> points first to sleep.</p>`)}

      ${step(4,"What drugs did a 1950s reader have in mind?",
        `${term("BARBITURATE","One of the major 1950s drug families used for calming and sleep.")}
         ${term("BROMIDE","A bromide-containing preparation; bromides had older use as calming and seizure-control drugs.")}
         ${term("CHLORAL HYDRATE","An older drug used to produce sedation or sleep.")}
         <p>Barbiturates were especially important mid-century sedatives and hypnotics.</p>`)}

      ${step(5,"What changed later?",
        `${term("BENZODIAZEPINE","A later drug family used for effects including anxiety reduction, sedation, sleep, seizure control, and muscle relaxation.")}
         <p>Benzodiazepines, introduced around the end of the 1950s and early 1960s, displaced barbiturates for many routine sedative and sleeping-pill uses.</p>`)}

      ${shift(
        "A calming or nervous-system-depressing drug; barbiturates were among the major drugs meant by the term.",
        "The basic meaning survived, but the common drug classes changed substantially and sedation is now often described as an intended effect or an unwanted side effect."
      )}`;
  }
  function soporificBody(){
    return `
      ${step(1,"Start with the ordinary idea: sleep.",
        `${term("SLEEPY","Feeling ready or likely to fall asleep.")}
         ${term("SLEEP-PRODUCING","Causing sleep to begin.")}
         <p><strong>Soporific</strong> is an old word whose pieces almost give you the definition by themselves.</p>`)}

      ${step(2,"Build the word 'soporific.'",
        `${term("SOPOR","A Latin word meaning deep sleep.")}
         ${term("-FIC","A word part meaning making or producing. It comes from the Latin idea of making or doing.")}
         ${chain(["sopor · deep sleep","-fic · making","soporific · sleep-making"])}
         ${term("SOPORIFIC — 1950s","Something that produces sleep or strong sleepiness. A soporific drug is therefore a drug that makes a person very sleepy or causes sleep.")}`)}

      ${step(3,"Adjective and noun.",
        `${term("ADJECTIVE","A describing word. In 'a soporific drug,' the word <em>soporific</em> describes the drug.")}
         ${term("NOUN","A naming word. In 'the doctor gave a soporific,' the word <em>soporific</em> names the sleep-producing substance itself.")}
         <p>The same word could therefore describe a thing or name the thing.</p>`)}

      ${step(4,"How is it related to sedative and hypnotic?",
        `${term("SEDATIVE","Something used to calm. It does not have to cause sleep.")}
         ${term("HYPNOTIC DRUG","A drug used specifically to cause sleep.")}
         <p><strong>Soporific</strong> and <strong>hypnotic</strong> overlap around sleep. <strong>Sedative</strong> is broader because calming can happen while the person remains awake.</p>`)}

      ${step(5,"What changed later?",
        `${term("FIGURATIVE","Using a word beyond its literal meaning.")}
         <p>The literal sleep-producing meaning remains understandable. In ordinary modern English, <em>soporific</em> is also familiar as a joking or critical word for something so dull that it seems to make people sleepy: a <em>soporific speech</em>.</p>`)}

      ${shift(
        "A straightforward medical and ordinary-English word for something that produces sleep or strong drowsiness.",
        "The literal meaning remains, but the word is less central in drug classification and is frequently used figuratively to mean boring or sleep-inducing."
      )}`;
  }
  function hypnoticDrugBody(){
    return `
      ${step(1,"Start with the root: sleep.",
        `${term("HYPNOS","The Greek word for sleep. English words beginning with <strong>hypn-</strong> or <strong>hypno-</strong> belong to this sleep word-family.")}
         ${term("-IC","A common ending meaning 'relating to' or 'having to do with.'")}
         ${chain(["hypn- · sleep","-ic · relating to","hypnotic · sleep-related or sleep-producing"])}`)}

      ${step(2,"What did 'hypnotic drug' mean in the 1950s?",
        `${term("HYPNOTIC DRUG — 1950s","A drug used specifically to cause sleep.")}
         ${term("SLEEP-PRODUCING","Causing a person to pass from wakefulness into sleep.")}
         <p>In a 1950s medical text, <strong>a hypnotic</strong> usually meant <strong>a sleeping drug</strong>. It did not mean a drug that performed hypnosis on somebody.</p>`)}

      ${step(3,"Sedative versus hypnotic.",
        `${term("SEDATIVE — 1950s","A drug used to calm or reduce nervous excitement and alertness.")}
         ${term("SEDATIVE-HYPNOTIC","A drug capable of producing calming at one level of effect and sleep at a stronger level.")}
         <p>The shortest distinction is: <strong>sedative = calm</strong>; <strong>hypnotic = sleep</strong>. The same drug could do both at different strengths or doses.</p>`)}

      ${step(4,"Why does 'hypnotic' also sound like 'hypnosis'?",
        `${term("HYPNOSIS","A condition or procedure involving focused attention and responsiveness to suggestion.")}
         <p>The two words share the old Greek sleep-root <strong>hypn-</strong>. Historically, hypnosis was named with a sleep-like idea in mind. But in medical drug language, <strong>hypnotic</strong> meant sleep-producing.</p>`)}

      ${step(5,"What drugs were prominent then?",
        `${term("BARBITURATE","A major mid-century drug family used for sedation and sleep, as well as some seizure and anesthesia uses.")}
         <p>From the 1920s into the mid-1950s, barbiturates were among the dominant sedative and hypnotic drugs.</p>`)}

      ${step(6,"What changed later?",
        `${term("BENZODIAZEPINE","A later drug family introduced around the end of the 1950s and early 1960s that took over many sedative and sleeping-pill uses.")}
         <p>The pharmacological meaning of <strong>hypnotic</strong> remained sleep-producing. What changed most was which drugs were commonly used.</p>`)}

      ${shift(
        "A sleep-producing drug; barbiturates were among the main hypnotics a 1950s reader would have encountered.",
        "The definition remained broadly stable, but benzodiazepines and newer sleeping drugs replaced barbiturates for much routine use."
      )}`;
  }
  function hypnosisBody(){
    return `
      ${step(1,"Start with the name.",
        `${term("HYPNOS","The Greek word for sleep.")}
         ${term("-OSIS","A word ending used for a state, condition, or process. You also see it in words such as <em>psychosis</em> and <em>neurosis</em>.")}
         ${chain(["hypn- · sleep","-osis · state or condition","hypnosis · a name built around a sleep-like state"])}
         <p>The name is historical. <strong>Hypnosis is not simply ordinary sleep.</strong></p>`)}

      ${step(2,"Learn the four small ideas inside the 1950s definition.",
        `${term("TRANCE","A traditional word for an unusually absorbed state in which attention is narrowed or strongly focused.")}
         ${term("ATTENTION","What the mind is concentrating on.")}
         ${term("SUGGESTION","A statement or instruction intended to influence what a person notices, feels, imagines, or does.")}
         ${term("RESPONSIVE","Likely to notice and react to something.")}
         <p>Put those pieces together and the longer definition becomes readable.</p>`)}

      ${step(3,"1950s core meaning.",
        `${term("HYPNOSIS — 1950s","A condition or procedure commonly described as involving trance or unusually focused attention together with increased responsiveness to suggestion.")}
         ${term("SUGGESTIBILITY","The tendency or readiness to respond to suggestion.")}
         <p>Not every mid-century writer explained hypnosis the same way, but <strong>trance</strong>, <strong>attention</strong>, and <strong>suggestion</strong> were common parts of the vocabulary.</p>`)}

      ${step(4,"How was hypnosis begun?",
        `${term("INDUCTION","A procedure used to bring about or begin a particular state or activity.")}
         ${term("HYPNOTIC INDUCTION","The procedure used to begin hypnosis—for example, instructions intended to narrow or focus attention and prepare the person for suggestions.")}
         <p>Here, <strong>induction</strong> simply means the procedure used to begin the hypnotic situation.</p>`)}

      ${step(5,"Competing explanations already existed.",
        `${term("DISSOCIATION","A separation or reduced connection among mental processes that are ordinarily experienced together.")}
         ${term("UNCONSCIOUS PROCESS","A mental process occurring without direct awareness.")}
         <p>Mid-century theories variously emphasized trance, dissociation, unconscious processes, suggestion, expectation, or interpersonal influence.</p>`)}

      ${step(6,"Do not confuse hypnosis with a hypnotic drug.",
        `<div class="compare-grid">
          <div class="compare-card"><h3>hypnosis</h3><p>a procedure or condition involving focused attention and suggestion</p></div>
          <div class="compare-card"><h3>hypnotic drug</h3><p>a drug used to produce sleep</p></div>
         </div>
         <p>They share the same historical sleep-root, but they name different things.</p>`)}

      ${step(7,"What changed later?",
        `${term("THEORY-NEUTRAL","Worded so the definition does not assume that one disputed explanation must be correct.")}
         <p>Modern research definitions tend to describe hypnosis by the procedure—focused attention and suggestion—without requiring a distinct trance state as part of the definition.</p>`)}

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
      ${step(1,"Start with one simple sentence.",
        `<p><strong>Scopolamine is a drug that blocks one kind of nerve signal.</strong></p>
         <p>That one fact explains most of the page. To understand it, we will learn the pieces one at a time.</p>
         ${term("DRUG","A chemical substance used because it changes how the body works. A drug may be used as a medicine, but the word <em>drug</em> simply refers to the substance and its effect on the body.")}
         <div class="spelling-strip"><span>S</span><span>C</span><span>O</span><span>P</span><span>O</span><span>L</span><span>A</span><span>M</span><span>I</span><span>N</span><span>E</span></div>`)}

      ${step(2,"What did a 1950s reader use scopolamine for?",
        `${term("SECRETION","A substance made and released by a part of the body. Saliva in the mouth is one example of a secretion.")}
         ${term("ANESTHESIA","A medically produced loss of sensation. Depending on the kind of anesthesia, a person may be numb in one area or unconscious for an operation.")}
         ${term("MOTION SICKNESS","Nausea, dizziness, or vomiting caused by movement, such as riding in a car, ship, or airplane.")}
         ${term("PUPIL","The dark opening in the center of the eye that lets light enter.")}
         ${term("MEMORY","The ability to store and later recall information or experiences.")}
         <p>A 1950s medical reader could encounter scopolamine for <strong>reducing secretions</strong>, <strong>use before anesthesia</strong>, <strong>motion sickness</strong>, <strong>widening the pupil</strong>, and effects involving <strong>drowsiness or memory</strong>.</p>
         <p>Another name for the same drug is <strong>hyoscine</strong>.</p>`)}

      ${step(3,"Why is it called scopolamine? Start with the person.",
        `${term("GIOVANNI ANTONIO SCOPOLI","An 18th-century naturalist. A naturalist studies living things and the natural world.")}
         ${term("NATURALIST","A person who studies plants, animals, minerals, or other parts of nature.")}
         <p>A plant group was later named in Scopoli's honor.</p>`)}

      ${step(4,"Now go from Scopoli to Scopolia.",
        `${term("GENUS","A named group used in biological classification. A genus contains one or more closely related species.")}
         ${term("SCOPOLIA","A genus of plants in the nightshade family. The name <em>Scopolia</em> honors Giovanni Antonio Scopoli.")}
         ${term("NIGHTSHADE FAMILY","A plant family that includes many familiar plants as well as plants containing powerful natural chemicals.")}
         ${chain(["Scopoli · a person's name","Scopolia · a plant genus named for him"])}
         <p>Scopolamine was historically associated with plants in this group and related plants.</p>`)}

      ${step(5,"Now learn the ending -amine.",
        `${term("NITROGEN","A chemical element. Its symbol is N. Nitrogen atoms occur in many substances in living things and in many medicines.")}
         ${term("AMINE","A type of nitrogen-containing chemical compound. The ending <strong>-amine</strong> appears in many chemical names.")}
         ${chain(["Scopoli","Scopolia","scopol-","-amine","scopolamine"])}
         <p>The name mainly records a <strong>plant-name history</strong> plus a <strong>chemical ending</strong>. The word itself does not tell you what the drug does.</p>`)}

      ${step(6,"Before nerve signals, learn what a cell is.",
        `${term("CELL","One of the basic living units from which the body is built.")}
         ${term("NERVE CELL","A cell specialized for sending and receiving information. Another name is <strong>neuron</strong>.")}
         ${term("NEURON","Another word for a nerve cell.")}
         <p>Your brain and nerves contain enormous numbers of neurons communicating with other cells.</p>`)}

      ${step(7,"What is a signal?",
        `${term("SIGNAL","Something that carries information and causes or prepares for a response.")}
         <p>A traffic light is a signal. A nerve signal is a biological signal.</p>
         <p>Nerve cells use both electrical changes and chemicals to pass information.</p>`)}

      ${step(8,"What is a chemical messenger?",
        `${term("CHEMICAL","A substance with a particular composition. Water, oxygen, caffeine, and scopolamine are all chemicals.")}
         ${term("MESSENGER","Something that carries a message from one place to another.")}
         ${term("CHEMICAL MESSENGER","A chemical released in one place that carries information to another cell.")}
         <p>Now we can build the longer word <strong>neurotransmitter</strong>.</p>`)}

      ${step(9,"Build the word NEUROTRANSMITTER.",
        `${term("NEURO-","A word part meaning nerve or nervous system.")}
         ${term("TRANSMIT","To send or carry something from one place to another.")}
         ${term("TRANSMITTER","Something that sends or carries a signal.")}
         ${term("NEUROTRANSMITTER","A chemical messenger released by a nerve cell to carry a signal to another cell.")}
         ${chain(["neuro- · nerve","transmit · send across","-er · thing that does it","neurotransmitter · a chemical signal sent by a nerve cell"])}`)}

      ${step(10,"Now take apart ACETYLCHOLINE. First: acetyl.",
        `<p><strong>Acetylcholine</strong> looks like one long block. Break it into two pieces:</p>
         <div class="phenobarbital-word"><span>ACETYL</span><b>|</b><span>CHOLINE</span></div>
         ${term("VINEGAR","A sour liquid whose characteristic acid is acetic acid.")}
         ${term("ACETIC ACID","The acid responsible for much of vinegar's sour taste and smell.")}
         ${term("ACETIC","A chemical word historically connected with vinegar. It ultimately comes from Latin <em>acetum</em>, meaning vinegar.")}
         ${term("ACETYL","A small group of atoms that can be attached to a larger molecule. Its name belongs to the same chemical naming family as <em>acetic</em>.")}
         ${chain(["vinegar","acetic acid","acetic","acetyl"])}`)}

      ${step(11,"Now learn the second half: choline.",
        `${term("LIVER","A large organ in the abdomen that performs many chemical jobs for the body.")}
         ${term("GALLBLADDER","A small organ that stores bile made by the liver.")}
         ${term("BILE","A yellow-green digestive fluid made by the liver and stored in the gallbladder.")}
         ${term("CHOLĒ","The Greek word for bile.")}
         ${term("CHOLINE","A chemical whose name comes from Greek <em>cholē</em>, meaning bile. Choline is used by the body and is one of the building pieces of acetylcholine.")}
         ${chain(["cholē · Greek for bile","choline · a chemical named from that root"])}`)}

      ${step(12,"Put ACETYL and CHOLINE together.",
        `${chain(["acetyl · one chemical piece","choline · another chemical piece","acetyl + choline","acetylcholine"])}
         ${term("ACETYLCHOLINE","A chemical made from choline with an acetyl group attached. It also serves as a neurotransmitter in the body.")}
         <p>The name tells you something about the molecule's <strong>chemical construction</strong>. The word <strong>neurotransmitter</strong> tells you one of its <strong>jobs</strong>.</p>`)}

      ${step(13,"Where does acetylcholine work?",
        `${term("BRAIN","The organ inside the skull that is central to thought, memory, sensation, movement, and many body controls.")}
         ${term("MUSCLE","Body tissue that contracts and produces movement.")}
         ${term("GLAND","A body structure that makes and releases a substance, such as saliva or sweat.")}
         ${term("AUTOMATIC","Happening without a person having to consciously command it.")}
         ${term("AUTOMATIC ORGAN FUNCTION","A body function that normally operates without conscious command, such as digestion, gland secretion, or changes in pupil size.")}
         <p>Acetylcholine carries signals in the brain and in many nerves throughout the body. It is involved in <strong>muscles</strong>, <strong>glands</strong>, and many <strong>automatic organ functions</strong>.</p>`)}

      ${step(14,"What is a receptor? Start with receiving.",
        `${term("RECEIVE","To take in or accept something that has been sent.")}
         ${term("RECEPTOR","A part of a cell, usually a protein, that recognizes a particular chemical signal and helps the cell respond to it.")}
         ${term("PROTEIN","A large biological molecule built from smaller units called amino acids. Proteins perform many jobs in cells.")}
         <p>The important idea is simple: <strong>the messenger is sent; the receptor receives the message.</strong></p>
         ${chain(["nerve cell releases acetylcholine","acetylcholine travels a tiny distance","acetylcholine reaches a receptor","the receptor responds","the receiving cell changes what it is doing"])}`)}

      ${step(15,"Now build CHOLINERGIC.",
        `${term("CHOLIN-","A word part pointing back to choline and, in this setting, acetylcholine.")}
         ${term("-ERGIC","A scientific ending connected with working or acting. It comes from Greek <em>ergon</em>, meaning work.")}
         ${term("CHOLINERGIC","Working through, releasing, responding to, or otherwise involving acetylcholine.")}
         ${chain(["cholin- · acetylcholine/choline","-ergic · working or acting","cholinergic · involving acetylcholine action"])}`)}

      ${step(16,"Now add ANTI-.",
        `${term("ANTI-","Against, opposing, or blocking.")}
         ${term("ANTICHOLINERGIC","Blocking some actions of acetylcholine.")}
         ${chain(["anti- · blocking","cholin- · acetylcholine","-ergic · action","anticholinergic · blocking acetylcholine-related action"])}
         <p>Scopolamine was described as <strong>anticholinergic</strong> because it blocks some acetylcholine signaling.</p>`)}

      ${step(17,"But acetylcholine has more than one receptor type.",
        `<p>This is the next important baby step: <strong>acetylcholine does not act through only one kind of receptor.</strong></p>
         ${term("RECEPTOR TYPE","A particular kind of receptor. Different receptor types can respond to the same messenger in different places or in different ways.")}
         <p>Scopolamine does not simply block every acetylcholine receptor. Its main action is at the receptor type called <strong>muscarinic</strong>.</p>`)}

      ${step(18,"Why is the word MUSCARINIC connected to a mushroom?",
        `${term("MUSHROOM","The visible reproductive structure made by certain fungi.")}
         ${term("AMANITA MUSCARIA","The scientific name of the fly-agaric mushroom, recognizable for its red cap with pale spots.")}
         ${term("MUSCA","Latin for <strong>fly</strong>.")}
         ${term("MUSCARINE","A poisonous chemical named from the fly-agaric mushroom.")}
         ${term("MUSCARINIC","A name given to one acetylcholine receptor family because the chemical muscarine activates receptors of this type.")}
         ${chain(["musca · fly","Amanita muscaria · fly agaric","muscarine · mushroom-related chemical","muscarinic receptor · receptor type activated by muscarine"])}`)}

      ${step(19,"Now build ANTIMUSCARINIC.",
        `${term("ANTIMUSCARINIC","Blocking the muscarinic type of acetylcholine receptor.")}
         ${chain(["anti- · blocking","muscarinic · the receptor type","antimuscarinic · blocking that receptor type"])}
         <p><strong>Scopolamine is antimuscarinic.</strong></p>
         <p>This is more precise than merely saying <strong>anticholinergic</strong>: it tells you which acetylcholine receptor family is being blocked.</p>`)}

      ${step(20,"How does blocking a receptor change the body?",
        `<p>A receptor is part of a signaling pathway. If a drug occupies or blocks that receptor, the usual chemical message has less effect.</p>
         ${chain(["acetylcholine carries a message","muscarinic receptor normally receives it","scopolamine blocks that receptor","the message has less effect","the organ behaves differently"])}
         <p>This one chain explains why the same drug can affect the <strong>mouth</strong>, <strong>eye</strong>, <strong>stomach</strong>, <strong>brain</strong>, and other organs.</p>`)}

      ${step(21,"Example one: why secretions decrease.",
        `${term("SALIVA","The watery fluid made by glands in the mouth.")}
         ${term("SALIVARY GLAND","A gland that makes saliva.")}
         <p>Acetylcholine acting at muscarinic receptors helps stimulate several body secretions.</p>
         ${chain(["acetylcholine signal","muscarinic receptor on a gland","gland releases secretion","scopolamine blocks the receptor","less secretion"])}
         <p>That is why scopolamine could be used before anesthesia to reduce saliva and other secretions.</p>`)}

      ${step(22,"Example two: why the pupil widens.",
        `${term("PUPIL","The dark opening in the center of the eye that lets light enter.")}
         ${term("IRIS","The colored ring of the eye surrounding the pupil.")}
         ${term("DILATE","To become wider or larger.")}
         ${term("MYDRIASIS","The medical word for widening of the pupil.")}
         <p>Muscles in the iris help control pupil size. Acetylcholine normally helps one of those muscle systems make the pupil smaller.</p>
         ${chain(["acetylcholine signal","muscarinic receptor in the eye","pupil-constricting action","scopolamine blocks the signal","pupil becomes wider"])}
         <p>The result is called <strong>mydriasis</strong>.</p>`)}

      ${step(23,"Example three: why focusing can be affected.",
        `${term("FOCUS","To adjust the eye so an image becomes sharp.")}
         ${term("LENS","A clear structure inside the eye that changes shape to help focus light.")}
         ${term("CILIARY MUSCLE","A small muscle inside the eye that helps change the shape of the lens for focusing.")}
         ${term("PARALYSIS","Loss of the ability of a muscle to move or act normally.")}
         ${term("CYCLOPLEGIA","Temporary paralysis of the eye's focusing mechanism.")}
         ${chain(["muscarinic signal helps control focusing","scopolamine blocks the signal","ciliary muscle cannot perform its normal focusing action","near focusing is impaired","cycloplegia"])}`)}

      ${step(24,"Example four: why motion sickness improves.",
        `${term("INNER EAR","The deepest part of the ear. It contains structures involved in hearing and balance.")}
         ${term("BALANCE SYSTEM","The inner-ear system that detects head movement and helps the brain know how the body is moving.")}
         ${term("NAUSEA","The unpleasant feeling that you are about to vomit.")}
         <p>Motion sickness involves signals from the balance system and the brain. Muscarinic acetylcholine signaling is part of the pathway.</p>
         ${chain(["movement","inner-ear balance signals","brain pathways involved in nausea","scopolamine blocks part of the muscarinic signaling","motion-sickness symptoms are reduced"])}`)}

      ${step(25,"How does a body drug affect the brain?",
        `${term("BLOOD","The fluid that circulates through blood vessels and carries oxygen, nutrients, drugs, and many other substances.")}
         ${term("BLOOD-BRAIN BARRIER","A protective filtering system formed by cells around brain blood vessels. It limits which substances move easily from the blood into brain tissue.")}
         <p>Scopolamine is able to enter the brain. Once there, it can block muscarinic acetylcholine signaling in brain circuits as well as in organs outside the brain.</p>`)}

      ${step(26,"Why can it cause drowsiness, confusion, and memory problems?",
        `${term("ALERTNESS","The state of being awake and ready to notice or respond.")}
         ${term("SEDATION","Reduced alertness or responsiveness.")}
         ${term("CONFUSION","Difficulty thinking clearly, understanding what is happening, or keeping information organized.")}
         ${term("AMNESIA","Loss of memory for some events or information.")}
         ${term("AMNESTIC","Producing or contributing to amnesia.")}
         <p>Acetylcholine participates in brain systems involved in attention and memory. Blocking muscarinic signaling there can reduce alertness and interfere with memory.</p>
         ${chain(["scopolamine enters brain","muscarinic receptors are blocked","acetylcholine signaling is reduced","attention or memory is disturbed","drowsiness, confusion, or amnesia can result"])}`)}

      ${step(27,"What was 'twilight sleep'?",
        `${term("MORPHINE","A powerful pain-relieving drug in the opioid family.")}
         ${term("OPIOID","A family of drugs related by their effects at opioid receptors, especially pain relief.")}
         ${term("TWILIGHT SLEEP","An early-20th-century childbirth practice using scopolamine together with morphine. The aim included reducing pain and especially reducing memory of labor.")}
         <p>The phrase <strong>twilight sleep</strong> did not mean ordinary natural sleep. It referred to a drug-produced state involving sedation and memory impairment.</p>`)}

      ${step(28,"What did 'truth serum' mean?",
        `${term("SERUM","In medicine, serum usually means the clear liquid portion of blood after clotting. In the phrase <em>truth serum</em>, the word was used loosely as a dramatic label for a drug.")}
         ${term("TRUTH SERUM","A popular historical label for drugs claimed to make a person reveal truthful information while sedated or mentally altered.")}
         <p>Scopolamine became associated with this idea because it can alter attention, memory, and judgment.</p>
         <p><strong>The drug does not reliably force truth.</strong> A confused or suggestible person can also give incorrect, distorted, or invented statements.</p>`)}

      ${step(29,"What happens when the effect becomes toxic?",
        `${term("DOSE","The amount of a drug given or taken.")}
         ${term("TOXIC","Harmful or poisonous to the body.")}
         ${term("DELIRIUM","A sudden confused state with disturbed attention and awareness.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("AGITATION","A state of marked restlessness or disturbed activity.")}
         ${term("PARANOIA","Strong suspiciousness or fear of harmful intentions not adequately supported by evidence.")}
         <p>At sufficiently high exposure, scopolamine's receptor-blocking effect can become toxic and produce severe mental and physical changes.</p>
         ${chain(["too much antimuscarinic effect","normal signaling is disrupted too strongly","confusion and agitation increase","delirium, hallucinations, or paranoia can appear"])}`)}

      ${step(30,"What is a transdermal patch?",
        `${term("TRANS-","Across or through.")}
         ${term("DERMAL","Having to do with the skin.")}
         ${term("TRANSDERMAL","Delivered through the skin.")}
         ${term("PATCH","A small adhesive device placed on the skin to release a drug gradually.")}
         ${chain(["trans- · across","dermal · skin","transdermal · through the skin"])}
         <p>A scopolamine patch releases the drug through the skin over time.</p>`)}

      ${step(31,"Why is the patch used?",
        `${term("PREVENT","To act before something happens so it is less likely to happen.")}
         ${term("POST-","After.")}
         ${term("OPERATIVE","Relating to an operation or surgery.")}
         ${term("POSTOPERATIVE","Occurring after an operation.")}
         ${term("POSTOPERATIVE NAUSEA","Nausea occurring after surgery or anesthesia.")}
         <p>The transdermal patch became especially familiar for <strong>preventing motion sickness</strong> and for helping prevent <strong>nausea and vomiting after surgery</strong>.</p>`)}

      ${step(32,"Why the eye warning matters.",
        `${term("OPTIC NERVE","The nerve carrying visual information from the eye to the brain.")}
         ${term("EYE PRESSURE","Pressure created by fluid inside the eye.")}
         ${term("DRAINAGE ANGLE","The part of the front of the eye through which internal eye fluid normally drains.")}
         ${term("GLAUCOMA","A group of eye diseases involving damage to the optic nerve, commonly associated with abnormal eye pressure.")}
         ${term("ANGLE-CLOSURE GLAUCOMA","A form of glaucoma in which the eye's drainage angle becomes blocked and pressure can rise rapidly.")}
         <p>Because scopolamine can widen the pupil, it can create a problem in a person whose eye anatomy makes the drainage angle vulnerable to closing.</p>`)}

      ${step(33,"Now rebuild the whole story from the beginning.",
        `<div class="history-summary-chain">
          <div><b>scopolamine</b><span>a drug whose name comes through the plant genus Scopolia, named for Scopoli</span></div>
          <div><b>acetylcholine</b><span>a neurotransmitter: a chemical message used by nerve cells</span></div>
          <div><b>receptor</b><span>part of a cell that receives a chemical signal</span></div>
          <div><b>cholinergic</b><span>involving acetylcholine action</span></div>
          <div><b>anticholinergic</b><span>blocking some acetylcholine action</span></div>
          <div><b>muscarinic receptor</b><span>one receptor family used by acetylcholine</span></div>
          <div><b>antimuscarinic</b><span>blocking that receptor family</span></div>
          <div><b>scopolamine's main action</b><span>antimuscarinic receptor blockade</span></div>
          <div><b>result</b><span>less muscarinic signaling in glands, eyes, motion-sickness pathways, and the brain</span></div>
         </div>`)}

      ${step(34,"The shortest memory version.",
        `<div class="memory">
           <strong>Scopolamine → blocks muscarinic acetylcholine receptors.</strong><br><br>
           Less muscarinic signaling explains the major effects:<br>
           <strong>less secretion · wider pupils · impaired near focusing · less motion sickness · drowsiness/memory effects.</strong>
         </div>`)}

      ${shift(
        "A multipurpose anticholinergic drug encountered in anesthesia, secretion control, motion sickness, eye medicine, and sedation or amnesia.",
        "The underlying drug action remains the same, but the word antimuscarinic is more precise and the transdermal motion-sickness/postoperative-nausea patch became one of the most familiar modern uses."
      )}

      ${sourceBox([
        '<a href="https://www.ahdictionary.com/word/search.html?q=scopolamine" target="_blank" rel="noopener">American Heritage Dictionary — scopolamine name and Scopolia</a>',
        '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4422379/" target="_blank" rel="noopener">PMC — history of choline and its name from Greek for bile</a>',
        '<a href="https://pubmed.ncbi.nlm.nih.gov/29741535/" target="_blank" rel="noopener">PubMed — muscarine, acetylcholine, and muscarinic receptor history</a>'
      ])}`;
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
    {slug:"schizophrenic",title:"Schizophrenic",category:"Psychosis Terms",short:"In the 1950s: the adjective for the DSM-I category 'schizophrenic reaction,' also used as a noun and figuratively for something divided or 'of two minds.'",keywords:"schizophrenic adjective split mind split personality two minds divided contradictory mid century",body:schizophrenicBody()},
    {slug:"psychosis",title:"Psychosis",category:"Psychosis Terms",short:"In the 1950s: a broad severe-mental-disorder concept involving failure to test and evaluate external reality correctly and serious disruption of personality functioning.",keywords:"psychosis reality testing hallucination delusion psychotic mid century neurosis",body:psychosisBody()},
    {slug:"neurosis",title:"Neurosis",category:"Psychosis Terms",short:"In the 1950s: psychological disturbance, especially involving anxiety and poor adjustment to ordinary life, without the gross falsification of external reality or gross personality disorganization associated with psychosis.",keywords:"neurosis neurotic psychoneurotic anxiety psychosis DSM I mid century 1950s",body:neurosisBody()},
    {slug:"psychotic",title:"Psychotic",category:"Psychosis Terms",short:"In the 1950s: describing severe mental disturbance involving major difficulty judging external reality or maintaining ordinary personality functioning; it was also used as a noun for a person.",keywords:"psychotic adjective noun a psychotic psychosis schizophrenia mid century terminology",body:psychoticBody()},
    {slug:"sedative",title:"Sedative",category:"Sedation & Sleep Terms",short:"In the 1950s: a calming or nervous-system-depressing drug; barbiturates were among the major examples.",keywords:"sedative sedation calming drowsiness barbiturate hypnotic",body:sedativeBody()},
    {slug:"soporific",title:"Soporific",category:"Sedation & Sleep Terms",short:"In the 1950s: sleep-producing or strongly drowsiness-producing; later the figurative 'boring' use became especially familiar.",keywords:"soporific sleep drowsy sedative boring sopor",body:soporificBody()},
    {slug:"hypnotic-drug",title:"Hypnotic Drug",category:"Sedation & Sleep Terms",short:"In 1950s medicine: a sleep-producing drug, often a barbiturate; distinct from hypnosis.",keywords:"hypnotic drug sedative hypnotic sleeping pill sleep barbiturate",body:hypnoticDrugBody()},
    {slug:"hypnosis",title:"Hypnosis",category:"Sedation & Sleep Terms",short:"In the 1950s: commonly described as a trance-like condition or procedure involving focused attention and increased suggestibility.",keywords:"hypnosis hypnotic induction suggestion mesmerism mid century",body:hypnosisBody()},
    {slug:"barbiturates",title:"Barbiturate / Barbiturates",category:"Drug Terms & History",short:"In the 1950s: one of the major sedative-hypnotic drug families, also used for seizures and anesthesia.",keywords:"barbiturate barbiturates barbituate barbituates barbibturate barbibturates sedative hypnotic phenobarbital",body:barbituratesBody()},
    {slug:"scopolamine-primer",title:"Scopolamine — Primer",category:"Drug Terms & History",short:"In the 1950s: an anticholinergic drug used in anesthesia, secretion control, motion sickness, eye medicine, and for sedative or memory effects.",keywords:"scopolamine hyoscine pupil dilator mydriasis cycloplegia sedative amnestic twilight sleep motion sickness antimuscarinic",body:scopolamineBody()},
    {slug:"phenobarbital-full-primer",title:"Phenobarbital — Complete Primer",category:"Drug Terms & History",short:"In the 1950s: an established barbiturate used particularly for sedation and seizure control; the complete primer then traces the chemistry and history inside its name.",keywords:"phenobarbital phenobarbitol barbiturate benzene gasoline benzoin perfume phenyl pheno barbital Baeyer Barbara urea",body:phenobarbitalBody()}
  ];

  window.PSYCHIATRY_CONTENT = { defaultBody: defaultPrimer(), entries };
})();
