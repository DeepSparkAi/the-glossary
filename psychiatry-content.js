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

        ${step(4,"Sedative, soporific, and hypnotic in the 1950s.",
          `${term("SEDATIVE — 1950s","A drug used to calm, reduce nervous excitement, or produce drowsiness.")}
           ${term("SOPORIFIC — 1950s","Something that produces sleep or strong sleepiness.")}
           ${term("HYPNOTIC DRUG — 1950s","A drug used to cause sleep. Barbiturates were among the main drugs meant by this word.")}
           ${term("HYPNOSIS — 1950s","A condition or procedure commonly described in terms of trance, focused attention, and increased responsiveness to suggestion. Theories of what caused it differed.")}
           <p>These words overlapped, but they were not identical: a <strong>sedative</strong> could calm without causing sleep; a <strong>hypnotic</strong> was specifically sleep-producing.</p>`)}

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
      ${step(1,"Start with the 1950s meaning in plain English.",
        `<p><strong>Scopolamine</strong> was a drug a 1950s medical reader could encounter in several settings. It could reduce some body secretions, be given before anesthesia, help prevent motion sickness, widen the pupil of the eye, and produce drowsiness or impaired memory.</p>
         <p>Another name for the same drug is <strong>hyoscine</strong>.</p>
         <div class="spelling-strip"><span>S</span><span>C</span><span>O</span><span>P</span><span>O</span><span>L</span><span>A</span><span>M</span><span>I</span><span>N</span><span>E</span></div>`)}

      ${step(2,"Why is it called scopolamine?",
        `${term("SCOPOLIA","A genus—a named group—of plants in the nightshade family. Scopolamine was isolated from plants of this group and related plants.")}
         ${term("GIOVANNI ANTONIO SCOPOLI","An 18th-century Italian naturalist. The plant genus <em>Scopolia</em> was named in his honor.")}
         ${term("AMINE","A family of organic chemicals containing nitrogen. The ending <strong>-amine</strong> appears in many chemical names.")}
         ${chain(["Scopoli · person's name","Scopolia · plant genus named for him","Scopolia + amine","scopolamine"])}
         <p>So <strong>scopolamine</strong> is not a word whose first half describes what the drug does. Its name mainly records the <strong>plant name</strong> from which the chemical was historically associated, plus a chemical ending.</p>`)}

      ${step(3,"Before acetylcholine, learn what a nerve signal is.",
        `${term("NERVE CELL","A cell specialized for sending and receiving signals. Another name is <strong>neuron</strong>.")}
         ${term("CHEMICAL MESSENGER","A chemical released by one cell that carries a signal to another cell.")}
         ${term("NEUROTRANSMITTER","A chemical messenger used by nerve cells. The word breaks into <strong>neuro-</strong>, meaning nerve, and <strong>transmitter</strong>, something that carries or sends a signal.")}
         ${chain(["neuro- · nerve","transmit · send across","neurotransmitter · a chemical signal sent by nerve cells"])}`)}

      ${step(4,"Now take apart ACETYLCHOLINE.",
        `<p><strong>Acetylcholine</strong> looks like one 13-letter block. It becomes much easier when separated:</p>
         <div class="phenobarbital-word"><span>ACETYL</span><b>|</b><span>CHOLINE</span></div>

         ${term("ACETIC","A chemical word historically connected with vinegar. It comes ultimately from Latin <em>acetum</em>, meaning vinegar. Acetic acid is the acid that gives vinegar much of its sour taste and smell.")}
         ${term("ACETYL","A particular small group of atoms used as a building piece inside larger molecules. Its name belongs to the same chemical naming family as <strong>acetic</strong> and therefore ultimately carries the old vinegar connection.")}
         ${term("BILE","A yellow-green digestive fluid made by the liver and stored in the gallbladder. It helps the body handle fats in food.")}
         ${term("CHOLĒ","The Greek word for bile.")}
         ${term("CHOLINE","A chemical first named from its connection with bile. The name comes from Greek <em>cholē</em>, 'bile.' Choline is also an important chemical used by the body and is a building piece of acetylcholine.")}

         ${chain(["acetyl · a small chemical group","choline · a chemical whose name comes from Greek for bile","acetyl + choline","acetylcholine"])}
         <p><strong>Why the name?</strong> Chemically, acetylcholine is made from <strong>choline</strong> with an <strong>acetyl group</strong> attached. The name tells you exactly those two pieces.</p>`)}

      ${step(5,"What does acetylcholine actually do?",
        `${term("ACETYLCHOLINE","A neurotransmitter—a chemical messenger released by nerve cells. It carries signals in the brain and in many nerves throughout the body, including nerves controlling muscles and many automatic organ functions.")}
         ${term("AUTOMATIC ORGAN FUNCTION","A body function that normally operates without conscious command, such as changes in heart activity, digestion, gland secretion, or pupil size.")}
         <p>So the word has both a <strong>chemical history</strong> and a <strong>job</strong>: acetyl + choline describes what the molecule is made from; neurotransmitter describes what the molecule does in the nervous system.</p>`)}

      ${step(6,"What is a receptor?",
        `${term("RECEPTOR","A protein on or in a cell that responds to a particular chemical signal.")}
         <p>Think of acetylcholine as a chemical message. A receptor is part of the receiving machinery that can recognize that message and cause the cell to respond.</p>
         ${chain(["nerve cell releases acetylcholine","acetylcholine reaches another cell","receptor recognizes the signal","the receiving cell changes what it is doing"])}`)}

      ${step(7,"Now take apart CHOLINERGIC and ANTICHOLINERGIC.",
        `${term("CHOLIN-","The word part pointing back to <strong>choline</strong> and, in this context, to acetylcholine signaling.")}
         ${term("-ERGIC","A scientific ending connected with the idea of working or acting. It comes ultimately from Greek <em>ergon</em>, 'work.'")}
         ${term("CHOLINERGIC","Working through, activated by, releasing, or otherwise involving acetylcholine.")}
         ${term("ANTI-","Against, opposing, or blocking.")}
         ${term("ANTICHOLINERGIC","A drug that blocks some effects of acetylcholine.")}
         ${chain(["anti- · against/blocking","cholin- · acetylcholine/choline","-ergic · working or acting","anticholinergic · blocking acetylcholine-related action"])}
         <p>That is why 1950s books could call scopolamine an <strong>anticholinergic</strong>: it blocked some actions produced by acetylcholine.</p>`)}

      ${step(8,"Why does the more precise word MUSCARINIC involve a mushroom?",
        `${term("MUSCARINE","A poisonous chemical first isolated from the mushroom <em>Amanita muscaria</em>, the fly agaric.")}
         ${term("MUSCA","Latin for <strong>fly</strong>. The mushroom name <em>muscaria</em> is connected with flies; fly agaric was historically associated with use against flies.")}
         ${term("MUSCARINIC RECEPTOR","A receptor for acetylcholine that was named 'muscarinic' because the mushroom chemical muscarine can activate this type of receptor.")}
         ${term("ANTI-","Against or blocking.")}
         ${term("ANTIMUSCARINIC","Blocking acetylcholine at muscarinic receptors.")}
         ${chain(["musca · fly","muscaria · the fly-agaric mushroom","muscarine · chemical named from the mushroom","muscarinic · responding like the muscarine-sensitive receptor","antimuscarinic · blocking that receptor system"])}
         <p><strong>Scopolamine is antimuscarinic.</strong> This is a more precise statement than the broader word <em>anticholinergic</em>.</p>`)}

      ${step(9,"Why can blocking that system widen the pupil?",
        `${term("PUPIL","The dark opening in the center of the eye that lets light enter.")}
         ${term("DILATE","To become wider or larger.")}
         ${term("MYDRIASIS","The medical word for widening of the pupil.")}
         ${term("FOCUSING","Changing the eye's optical power so near or distant objects can appear sharp.")}
         ${term("CYCLOPLEGIA","Temporary paralysis of the eye's focusing mechanism.")}
         ${term("OPHTHALMIC","Having to do with the eye.")}
         <p>Acetylcholine normally participates in controlling muscles inside the eye. Blocking muscarinic acetylcholine signals can therefore widen the pupil and interfere with focusing.</p>
         <p>That produces <strong>mydriasis</strong> and <strong>cycloplegia</strong>. This is the pupil-dilator use you were remembering.</p>`)}

      ${step(10,"Why can the same drug cause drowsiness and memory problems?",
        `${term("SEDATION","Reduced alertness or responsiveness.")}
         ${term("AMNESIA","Loss of memory for some events or information.")}
         ${term("AMNESTIC","Producing or contributing to amnesia.")}
         <p>Scopolamine can enter the brain, where acetylcholine participates in attention, memory, and other functions. Blocking some of that signaling can produce drowsiness, sedation, confusion, and impaired memory.</p>`)}

      ${step(11,"The older history behind its reputation.",
        `${term("MORPHINE","A powerful pain-relieving drug in the opioid family.")}
         ${term("TWILIGHT SLEEP","An early-20th-century childbirth practice combining scopolamine with morphine in an attempt to reduce pain and especially memory of labor.")}
         ${term("TRUTH SERUM","A popular historical label for drugs claimed to make a person reveal truthful information while sedated or mentally altered.")}
         <p>Both “twilight sleep” and early “truth serum” stories contributed to scopolamine's reputation before and around mid-century.</p>
         <p><strong>The name 'truth serum' does not mean the drug reliably produces truth.</strong> Confusion, suggestion, memory errors, and invented statements can occur.</p>`)}

      ${step(12,"What can happen when the drug effect becomes toxic?",
        `${term("TOXIC","Harmful or poisonous to the body.")}
         ${term("DELIRIUM","A sudden confused state with disturbed attention and awareness.")}
         ${term("HALLUCINATION","A perception-like experience without the corresponding outside source being present.")}
         ${term("PARANOIA","Strong suspiciousness or fear of harmful intentions not adequately supported by evidence.")}
         <p>At sufficiently high exposure, scopolamine can produce agitation, delirium, hallucinations, paranoia, and other severe changes in thought and behavior.</p>`)}

      ${step(13,"What changed after the 1950s?",
        `${term("TRANSDERMAL","Delivered through the skin. <strong>Trans-</strong> means across; <strong>dermal</strong> means relating to skin.")}
         ${term("MOTION SICKNESS","Nausea, dizziness, and related symptoms caused when information about movement from the eyes and balance organs does not agree well.")}
         ${term("POSTOPERATIVE","Occurring after an operation. <strong>Post-</strong> means after; <strong>operative</strong> refers to surgery or an operation.")}
         <p>The transdermal scopolamine patch made the drug especially familiar for preventing motion sickness and nausea and vomiting after surgery.</p>`)}

      ${step(14,"Why the eye warning still matters.",
        `${term("GLAUCOMA","A group of eye diseases involving damage to the optic nerve, often associated with abnormal pressure inside the eye.")}
         ${term("OPTIC NERVE","The nerve that carries visual information from the eye to the brain.")}
         ${term("ANGLE-CLOSURE GLAUCOMA","A form of glaucoma in which the drainage angle inside the eye closes and eye pressure can rise rapidly.")}
         <p>Because scopolamine can widen the pupil, it can be hazardous for a person susceptible to angle-closure glaucoma.</p>`)}

      ${step(15,"Now the long words should be readable.",
        `<div class="history-summary-chain">
          <div><b>scopolamine</b><span>Scopolia plant name + chemical ending; the plant genus honors Scopoli</span></div>
          <div><b>acetylcholine</b><span>acetyl + choline; choline's name comes from Greek for bile</span></div>
          <div><b>cholinergic</b><span>working through or involving acetylcholine</span></div>
          <div><b>anticholinergic</b><span>blocking some acetylcholine effects</span></div>
          <div><b>muscarinic</b><span>the acetylcholine receptor type named through muscarine and the fly-agaric mushroom</span></div>
          <div><b>antimuscarinic</b><span>blocking that muscarinic receptor system</span></div>
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
