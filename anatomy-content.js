// Anatomy content for The Glossary.
// Baby-step anatomy definitions, with special attention to brain terminology,
// historical psychosurgery terms, and the autonomic nervous system.

(function(){
  const term = (word, text) =>
    `<div class="primer-term"><p class="primer-label">A new word</p><h3>${word}</h3><p>${text}</p></div>`;

  const step = (number, title, body) =>
    `<section class="primer-step"><div class="primer-step-number">Step ${String(number).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;

  const chain = items =>
    `<div class="primer-chain">${items.map((item,i)=>`${i ? "<b>→</b>" : ""}<span>${item}</span>`).join("")}</div>`;

  function brainPrimer(){
    return `
      ${step(1,"Start with anatomy itself.",
        `${term("ANATOMY","The study of the physical parts of a living body and how those parts are arranged. The word comes through Greek <em>anatomē</em>, meaning dissection: literally a cutting-up used to see the parts inside.")}
         ${chain(["body","organs","tissues","cells","smaller structures"])}
         <p>An anatomy lesson asks a basic question: <strong>what is there, where is it, and what is it connected to?</strong></p>`)}

      ${step(2,"The nervous system is the body's communication network.",
        `${term("NERVOUS SYSTEM","The brain, spinal cord, nerves, and related cells that carry information through the body.")}
         ${term("NERVE","A bundle of long nerve-cell fibers carrying signals between the central nervous system and the rest of the body.")}
         ${term("NEURON","A nerve cell. Neurons receive, process, and transmit signals.")}
         <p>The nervous system is commonly divided first into two large physical regions:</p>
         <div class="compare-grid">
           <div class="compare-card green"><h3>Central nervous system</h3><p><strong>Brain + spinal cord.</strong></p></div>
           <div class="compare-card"><h3>Peripheral nervous system</h3><p><strong>Nerves outside the brain and spinal cord.</strong></p></div>
         </div>`)}

      ${step(3,"The brain is an organ made of specialized nervous tissue.",
        `${term("BRAIN","The major control and information-processing organ of the nervous system, located inside the skull.")}
         ${term("CEREBRUM","The large upper part of the human brain. It contains the cerebral cortex and much of the white matter beneath it.")}
         ${term("HEMISPHERE","One half of the cerebrum: left hemisphere or right hemisphere. <em>Hemi-</em> means half; <em>sphere</em> means a ball-like form.")}
         <p>When ordinary conversation says “the left side of the brain” or “the right side of the brain,” it usually means the two cerebral hemispheres.</p>`)}

      ${step(4,"A lobe is a large named region.",
        `${term("LOBE","A visibly or anatomically distinct part of an organ. The cerebrum is divided into named lobes.")}
         <div class="definition-grid">
           <div class="definition-card"><h3>Frontal lobe</h3><p>The front portion of each cerebral hemisphere.</p></div>
           <div class="definition-card"><h3>Parietal lobe</h3><p>An upper-rear region involved heavily in body sensation and spatial processing.</p></div>
           <div class="definition-card"><h3>Temporal lobe</h3><p>A side region strongly involved in hearing, memory, and language functions.</p></div>
           <div class="definition-card"><h3>Occipital lobe</h3><p>The rear region strongly involved in vision.</p></div>
         </div>
         <p><strong>Frontal</strong> means toward the front. The word is related to Latin <em>frons</em>, meaning forehead or front.</p>`)}

      ${step(5,"Cortex means the outer layer.",
        `${term("CORTEX","The outer layer of an organ. In brain anatomy, the cerebral cortex is the thin folded outer layer of the cerebrum.")}
         ${term("CEREBRAL CORTEX","The folded outer layer of the cerebrum. It contains large numbers of neuron cell bodies and is part of what is called gray matter.")}
         <p><em>Cortex</em> is Latin for <strong>bark</strong>, as in the bark around a tree. That is a useful picture: <strong>cortex = outer covering or outer layer.</strong></p>`)}

      ${step(6,"Gray matter and white matter are different arrangements of nervous tissue.",
        `${term("GRAY MATTER","Nervous tissue rich in neuron cell bodies, dendrites, and local connections. Much of the cerebral cortex is gray matter.")}
         ${term("AXON","The long output fiber of a neuron. An axon carries a nerve signal away from the neuron's cell body toward other cells.")}
         ${term("MYELIN","A fatty insulating material wrapped around many axons. It helps nerve signals travel efficiently.")}
         ${term("WHITE MATTER","Nervous tissue containing many bundles of myelinated axons. The myelin gives this tissue a pale or whitish appearance.")}
         ${chain(["gray matter","neuron bodies and local processing","white matter","long connecting fibers"])}
         <p>This distinction matters enormously for understanding the word <strong>leucotomy</strong>.</p>`)}

      ${step(7,"Now the word prefrontal becomes easy.",
        `${term("PRE-","A prefix meaning before, in front of, or earlier.")}
         ${term("FRONTAL","Having to do with the front; in brain anatomy, having to do with the frontal lobe.")}
         ${term("PREFRONTAL","At the front part of the frontal lobe.")}
         ${term("PREFRONTAL CORTEX","The frontmost part of the cerebral cortex in the frontal lobes.")}
         ${chain(["pre- = in front","frontal = frontal lobe","cortex = outer layer","prefrontal cortex = frontmost frontal cortex"])}`)}

      ${step(8,"What does the prefrontal cortex do?",
        `${term("WORKING MEMORY","Information you hold in mind briefly while using it—for example, remembering a number long enough to enter it.")}
         ${term("INHIBITION","Holding back or suppressing an immediate response.")}
         ${term("EXECUTIVE FUNCTION","A group of higher-level mental processes used to plan, keep goals in mind, control attention, compare options, and regulate behavior.")}
         <p>The prefrontal cortex participates heavily in <strong>working memory, planning, decision-making, behavioral regulation, social judgment, and executive function.</strong></p>
         <p>That is why historical operations that disrupted prefrontal connections could produce major changes in initiative, restraint, emotion, planning, and personality.</p>`)}

      ${step(9,"Lobotomy: break the word apart.",
        `${term("LOBOTOMY","A historical surgical operation in which connections involving a brain lobe—especially the frontal or prefrontal region—were cut or disrupted.")}
         ${term("LOBO-","From the word <em>lobe</em>: a named part of an organ.")}
         ${term("-TOMY","A medical word ending meaning cutting or incision. It comes from Greek <em>tomē</em>, cutting.")}
         ${chain(["lobe","-tomy = cutting","lobotomy = cutting involving a lobe"])}`)}

      ${step(10,"Prefrontal lobotomy was aimed at connections of the prefrontal region.",
        `${term("PREFRONTAL LOBOTOMY","A historical psychosurgical operation that cut or disrupted white-matter connections involving the prefrontal portions of the frontal lobes.")}
         ${term("PSYCHOSURGERY","Brain surgery performed with the goal of changing severe psychiatric symptoms.")}
         <p>The key idea is not “remove the whole frontal lobe.” The classic operation was designed to <strong>interrupt connecting pathways</strong> in frontal white matter.</p>
         <p>Walter Freeman and James Watts began a prefrontal lobotomy program in the United States in the 1930s.</p>`)}

      ${step(11,"Leucotomy names the white matter directly.",
        `${term("LEUCO- / LEUKO-","A word part meaning white. It comes from Greek <em>leukos</em>, white.")}
         ${term("LEUCOTOMY / LEUKOTOMY","Literally, a cutting of white matter. In the historical brain operation, white-matter pathways in the frontal region were cut or disrupted.")}
         ${chain(["leuco- = white","-tomy = cutting","leucotomy = cutting white matter"])}
         <p><strong>Your “white part of the brain” idea is essentially right.</strong> The precise anatomical term is <strong>white matter</strong>, meaning the bundles of connecting nerve fibers beneath the cortex.</p>`)}

      ${step(12,"Leucotomy and lobotomy overlap, but the words emphasize different things.",
        `<div class="compare-grid">
           <div class="compare-card green"><h3>Leucotomy</h3><p><strong>leuco- = white</strong> + <strong>-tomy = cutting</strong>. The name points to cutting white matter.</p></div>
           <div class="compare-card"><h3>Lobotomy</h3><p><strong>lobe</strong> + <strong>-tomy = cutting</strong>. The name points to the brain lobe whose connections are being disrupted.</p></div>
         </div>
         <p>Portuguese neurologist <strong>Egas Moniz</strong> and neurosurgeon <strong>Almeida Lima</strong> introduced the prefrontal leucotomy in 1935. In American usage, <strong>lobotomy</strong> became the more familiar word.</p>`)}

      ${step(13,"Orbital means the eye socket—not the eyeball.",
        `${term("ORBIT","The bony socket in the skull that contains the eye and its supporting structures.")}
         ${term("ORBITAL","Having to do with the orbit, or eye socket.")}
         ${term("TRANS-","A prefix meaning across, through, or to the other side.")}
         ${term("TRANSORBITAL","Passing through the orbit—the eye socket.")}
         ${chain(["trans- = through","orbit = eye socket","transorbital = through the eye socket"])}
         <p>The route was beside and behind the eye through the upper eye socket, not through the eyeball itself.</p>`)}

      ${step(14,"Transorbital leucotomy is the 'ice-pick' operation you are thinking of.",
        `${term("TRANSORBITAL LEUCOTOMY","A historical form of frontal psychosurgery in which an instrument was passed through the upper eye socket and through the thin roof of the orbit into frontal white matter, then moved to sever white-matter fiber tracts.")}
         ${term("ORBITOCLAST","The purpose-built instrument Walter Freeman later used for the transorbital operation. It resembled a long, narrow ice pick.")}
         <p>Walter Freeman introduced the transorbital technique in the United States in <strong>1946</strong>. It became popularly known as the <strong>“ice-pick lobotomy.”</strong></p>
         <div class="memory"><strong>Literal decoding:</strong> trans = through · orbital = eye socket · leuco = white matter · tomy = cutting.</div>`)}

      ${step(15,"Put the brain-surgery vocabulary into one chain.",
        `${chain(["prefrontal cortex","white matter underneath","white-matter connections","leucotomy / lobotomy","transorbital route"])}
         <div class="memory"><strong>Shortest memory rule:</strong> A prefrontal lobotomy or leucotomy was not “cutting the thinking surface off.” It was primarily an attempt to <strong>cut the white-matter connections running from the prefrontal region to other parts of the brain.</strong></div>`)}

      ${step(16,"Now the other pair you were remembering: sympathetic and parasympathetic.",
        `${term("AUTONOMIC NERVOUS SYSTEM","The part of the nervous system that automatically regulates many internal body functions, including heart activity, digestion, sweating, urination, and bowel activity.")}
         ${term("AUTONOMIC","Self-governing or automatic. The word is built from Greek roots meaning roughly <em>self</em> + <em>law</em>.")}
         <p>The pair you are thinking of lives inside the <strong>autonomic nervous system</strong>:</p>
         <div class="compare-grid">
           <div class="compare-card"><h3>Sympathetic</h3><p><strong>Fight or flight.</strong> Mobilize the body for action.</p></div>
           <div class="compare-card green"><h3>Parasympathetic</h3><p><strong>Rest and digest.</strong> Support digestion, recovery, urination, and bowel activity.</p></div>
         </div>`)}

      ${step(17,"Sympathetic = the 'make me ready to fight' side.",
        `${term("SYMPATHETIC NERVOUS SYSTEM","The autonomic division that prepares the body for demanding action—the classic fight-or-flight response.")}
         <p>When sympathetic activity rises, the body shifts toward immediate action:</p>
         <div class="definition-grid">
           <div class="definition-card"><h3>Heart</h3><p>Heart rate and pumping force rise.</p></div>
           <div class="definition-card"><h3>Eyes</h3><p>Pupils widen.</p></div>
           <div class="definition-card"><h3>Lungs</h3><p>Airways widen.</p></div>
           <div class="definition-card"><h3>Gut</h3><p>Digestive movement is reduced.</p></div>
         </div>
         <div class="memory"><strong>Sympathetic = fight, flee, exert yourself.</strong> The body spends resources on immediate action rather than on digestion.</div>`)}

      ${step(18,"Parasympathetic = the 'poop and digest' side.",
        `${term("PARASYMPATHETIC NERVOUS SYSTEM","The autonomic division associated with quiet maintenance functions—the classic rest-and-digest response.")}
         <p>Parasympathetic activity supports functions such as:</p>
         <div class="definition-grid">
           <div class="definition-card"><h3>Heart</h3><p>Heart rate slows.</p></div>
           <div class="definition-card"><h3>Saliva</h3><p>Salivary secretion increases.</p></div>
           <div class="definition-card"><h3>Gut</h3><p>Digestive movement and secretion increase.</p></div>
           <div class="definition-card"><h3>Bladder and bowel</h3><p>Urination and bowel-emptying functions are supported.</p></div>
         </div>
         <div class="memory"><strong>Parasympathetic = rest, digest, pee, poop.</strong> Crude, but extremely memorable.</div>`)}

      ${step(19,"Why are they called sympathetic and parasympathetic?",
        `${term("SYMPATHETIC — WORD HISTORY","The name grew from an old idea that organs and nerves acted in 'sympathy' with one another—that activity in one part was linked with activity in another.")}
         ${term("PARA-","A Greek-derived prefix with meanings including beside, alongside, or related to.")}
         ${term("PARASYMPATHETIC — WORD HISTORY","The complementary autonomic division named in relation to the sympathetic system: para- + sympathetic.")}
         <p>The names are historical labels. The easiest functional memory remains <strong>sympathetic = fight/flight</strong> and <strong>parasympathetic = rest/digest.</strong></p>`)}

      ${step(20,"The whole map in one view.",
        `<div class="history-summary-chain">
           <div><b>Nervous system</b><span>The body's signaling network.</span></div>
           <div><b>Central nervous system</b><span>Brain + spinal cord.</span></div>
           <div><b>Peripheral nervous system</b><span>Nerves outside the brain and spinal cord.</span></div>
           <div><b>Autonomic nervous system</b><span>Automatic control of internal organs.</span></div>
           <div><b>Sympathetic</b><span>Fight or flight; action first, digestion down.</span></div>
           <div><b>Parasympathetic</b><span>Rest and digest; digestion and bowel activity up.</span></div>
         </div>`)}
    `;
  }

  function prefrontalBody(){
    return `
      ${step(1,"Build the word.",`
        ${term("PRE-","In front of or before.")}
        ${term("FRONTAL","Having to do with the frontal lobe, the front portion of the cerebrum.")}
        ${term("CORTEX","An outer layer; Latin for bark.")}
        ${chain(["pre-","frontal","cortex","frontmost frontal cortex"])}`)}
      ${step(2,"Where it is.",`
        <p>The <strong>prefrontal cortex</strong> is the frontmost portion of the cerebral cortex in the frontal lobes, directly behind the forehead.</p>
        ${term("CEREBRAL CORTEX","The folded outer layer of the cerebrum.")}
        ${term("WHITE MATTER","Bundles of connecting nerve fibers lying beneath and between areas of cortex.")}`)}
      ${step(3,"What it participates in.",`
        ${term("EXECUTIVE FUNCTION","Planning, keeping goals in mind, controlling attention, comparing choices, and regulating behavior.")}
        <p>The prefrontal cortex participates heavily in working memory, planning, decision-making, inhibition, behavioral regulation, and social cognition.</p>`)}
      <div class="memory"><strong>Memory aid:</strong> PRE = front · FRONTAL = frontal lobe · CORTEX = outer layer.</div>`;
  }

  function lobotomyBody(){
    return `
      ${step(1,"Lobotomy.",`
        ${term("LOBE","A named part of an organ.")}
        ${term("-TOMY","Cutting or incision.")}
        ${term("LOBOTOMY","A historical operation that cut or disrupted connections involving a brain lobe, especially the frontal/prefrontal region.")}`)}
      ${step(2,"Leucotomy.",`
        ${term("LEUCO- / LEUKO-","White.")}
        ${term("LEUCOTOMY / LEUKOTOMY","Literally 'cutting white matter.' In the historical frontal operation, white-matter pathways were cut or disrupted.")}
        <p>The <strong>white</strong> in the name refers to <strong>white matter</strong>: bundles of myelinated nerve fibers connecting brain regions.</p>`)}
      ${step(3,"Prefrontal lobotomy.",`
        ${term("PREFRONTAL LOBOTOMY","A historical psychosurgical operation aimed at interrupting white-matter connections of the prefrontal portions of the frontal lobes.")}
        <p>It was not simply removal of the entire frontal lobe. The operative target was the network of connecting fibers.</p>`)}
      ${step(4,"Transorbital leucotomy.",`
        ${term("TRANS-","Through or across.")}
        ${term("ORBIT","The bony eye socket.")}
        ${term("TRANSORBITAL","Through the eye socket.")}
        ${term("TRANSORBITAL LEUCOTOMY","A historical operation in which an ice-pick-like instrument was passed through the upper eye socket and orbital roof into frontal white matter, then moved to sever fiber tracts.")}
        <p><strong>Yes: this is the operation you were remembering.</strong> “Through the eye socket with an ice pick to cut the white part of the brain” is a good rough memory. The precise version is: <strong>through the orbit with an ice-pick-like instrument to sever white-matter connections in the frontal lobes.</strong></p>`)}
      ${step(5,"The 1935–1946 sequence.",`
        ${chain(["1935 · Moniz + Lima · prefrontal leucotomy","1930s · Freeman + Watts · prefrontal lobotomy","1946 · Freeman · transorbital technique"])}
        ${term("ORBITOCLAST","The purpose-built ice-pick-like instrument Freeman later used for the transorbital procedure.")}`)}
      <div class="memory"><strong>Word map:</strong> lobe + tomy = lobotomy · leuco + tomy = white-matter cutting · trans + orbital = through the eye socket.</div>`;
  }

  function autonomicBody(){
    return `
      ${step(1,"Start with autonomic.",`
        ${term("AUTONOMIC","Self-governing or automatic; from roots meaning self + law.")}
        ${term("AUTONOMIC NERVOUS SYSTEM","The nervous-system pathways that automatically regulate many internal organs and body functions.")}`)}
      ${step(2,"The pair you were thinking of.",`
        <div class="compare-grid">
          <div class="compare-card"><h3>Sympathetic</h3><p><strong>Fight or flight.</strong> Heart faster, pupils wider, digestion reduced.</p></div>
          <div class="compare-card green"><h3>Parasympathetic</h3><p><strong>Rest and digest.</strong> Heart slower, digestion increased, bowel and bladder emptying supported.</p></div>
        </div>`)}
      ${step(3,"Sympathetic in plain English.",`
        ${term("SYMPATHETIC NERVOUS SYSTEM","The autonomic division that mobilizes the body for action, stress, exercise, or danger.")}
        <div class="memory"><strong>Memory:</strong> sympathetic = “something is happening; get ready to move.”</div>`)}
      ${step(4,"Parasympathetic in plain English.",`
        ${term("PARASYMPATHETIC NERVOUS SYSTEM","The autonomic division that supports quiet maintenance functions such as digestion, salivation, urination, and bowel activity.")}
        <div class="memory"><strong>Memory:</strong> parasympathetic = “safe enough to eat, digest, pee, and poop.”</div>`)}
      ${step(5,"One sentence.",`
        <p><strong>The sympathetic system makes you ready to fight; the parasympathetic system makes you ready to digest and poop.</strong></p>`)}
    `;
  }

  const entries = [
    {
      slug:"brain-anatomy-primer",
      title:"Brain — From Zero",
      category:"Brain",
      short:"A baby-step map from brain and lobe to cortex, gray matter, white matter, and prefrontal cortex.",
      keywords:"brain anatomy cerebrum hemisphere lobe frontal parietal temporal occipital cortex gray matter white matter neuron axon myelin prefrontal cortex",
      body:brainPrimer()
    },
    {
      slug:"prefrontal-cortex",
      title:"Prefrontal Cortex",
      category:"Brain",
      short:"What prefrontal cortex means, where it is, and what kinds of mental functions depend heavily on it.",
      keywords:"prefrontal cortex pre frontal PFC frontal lobe executive function planning decision working memory inhibition",
      body:prefrontalBody()
    },
    {
      slug:"lobotomy-leucotomy-transorbital",
      title:"Lobotomy, Leucotomy & Transorbital Leucotomy",
      category:"Historical Brain Surgery",
      short:"The words broken apart: lobe, -tomy, leuco-, orbit, trans-, and the historical operations they named.",
      keywords:"lobotomy labotomy prefrontal lobotomy prefrontal labotomy leucotomy leukotomy transorbital leucotomy transorbital lobotomy ice pick ice-pick orbitoclast Egas Moniz Walter Freeman James Watts Almeida Lima white matter psychosurgery",
      body:lobotomyBody()
    },
    {
      slug:"autonomic-nervous-system",
      title:"Autonomic Nervous System",
      category:"Autonomic Nervous System",
      short:"The pair you were remembering: sympathetic fight-or-flight and parasympathetic rest-and-digest.",
      keywords:"autonomic nervous system ANS sympathetic parasympathetic fight flight rest digest poop bowel urination heart digestion",
      body:autonomicBody()
    },
    {
      slug:"sympathetic-nervous-system",
      title:"Sympathetic Nervous System",
      category:"Autonomic Nervous System",
      short:"The fight-or-flight side of the autonomic nervous system.",
      keywords:"sympathetic nervous system SNS fight flight stress heart pupils digestion",
      body:`${term("SYMPATHETIC NERVOUS SYSTEM","The autonomic division that mobilizes the body for demanding action—the classic fight-or-flight response.")}
        <section class="entry-section"><h3>What it does</h3><p>Heart rate rises, pupils widen, airways widen, energy is mobilized, and digestive movement is reduced.</p></section>
        <div class="memory"><strong>Memory aid:</strong> sympathetic = ready to fight, flee, or exert yourself.</div>`
    },
    {
      slug:"parasympathetic-nervous-system",
      title:"Parasympathetic Nervous System",
      category:"Autonomic Nervous System",
      short:"The rest-and-digest side of the autonomic nervous system.",
      keywords:"parasympathetic nervous system PNS rest digest poop bowel urination saliva digestion",
      body:`${term("PARASYMPATHETIC NERVOUS SYSTEM","The autonomic division associated with quiet maintenance functions—the classic rest-and-digest response.")}
        <section class="entry-section"><h3>What it does</h3><p>Heart rate slows, saliva and digestive activity increase, and bladder and bowel emptying functions are supported.</p></section>
        <div class="memory"><strong>Memory aid:</strong> parasympathetic = rest, digest, pee, poop.</div>`
    }
  ];

  const defaultBody = `
    <div class="entry-inner primer">
      <header class="primer-hero">
        <p class="kicker">Start here · baby steps</p>
        <h2>Anatomy from zero</h2>
        <p class="lede">Build the brain from ordinary words, then decode prefrontal cortex, lobotomy, leucotomy, transorbital leucotomy, and the body's fight-versus-digest nerve systems.</p>
        <div class="primer-chain"><span>brain</span><b>→</b><span>cortex</span><b>→</b><span>white matter</span><b>→</b><span>prefrontal</span><b>→</b><span>autonomic nerves</span></div>
      </header>
      ${brainPrimer()}
      <section class="entry-section history-sources">
        <h3>Sources and further reading</h3>
        <p>
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK499919/" target="_blank" rel="noopener">NCBI Bookshelf — Neuroanatomy, Prefrontal Cortex</a><br>
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK538516/" target="_blank" rel="noopener">NCBI Bookshelf — Physiology, Autonomic Nervous System</a><br>
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2864434/" target="_blank" rel="noopener">PMC — historical review of orbital prefrontal cortex and leucotomy</a><br>
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2688626/" target="_blank" rel="noopener">PMC — history of prefrontal and transorbital leucotomy</a>
        </p>
      </section>
    </div>`;

  window.ANATOMY_CONTENT = { entries, defaultBody };
})();
