const entries = [
  {
    slug:"pantywaist", title:"Pantywaist", category:"Words",
    short:"A weak, timid, ineffectual, or excessively delicate man or boy; a dated insult.",
    keywords:"weak timid coward delicate effeminate child garment",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p>A weak, timid, ineffectual, or excessively delicate man or boy. The word is a dated insult.</p></section>
      <section class="entry-section"><h3>Example</h3><p class="example">“Quit being such a pantywaist and climb the ladder.”</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p><em>Panty-waist</em> was the name of a child’s garment in which short pants or undergarments fastened to a waist-like upper garment. By the 1930s the garment name had become an insult for a male regarded as weak, childish, timid, or effeminate.</p></section>
      <div class="memory"><strong>Memory aid:</strong> child’s garment → childish weakness → pantywaist.</div>`
  },
  {
    slug:"namby-pamby", title:"Namby-Pamby", category:"Words",
    short:"Weakly sentimental, timid, insipid, or affectedly delicate.",
    keywords:"weak sentimental timid delicate Ambrose Philips poetry",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p>Weak, overly sentimental, timid, indecisive, or affectedly delicate.</p></section>
      <section class="entry-section"><h3>Example</h3><p class="example">“He gave a namby-pamby answer instead of saying what he actually believed.”</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p>The expression grew from a satirical nickname for English poet <strong>Ambrose Philips (1674–1749)</strong>. Critics mocked the sentimental style of some of his verse by turning Ambrose into the babyish-sounding <em>Namby</em>, producing <em>Namby-Pamby</em>.</p>
      <div class="flow"><span>Ambrose Philips</span><b>→</b><span>Namby</span><b>→</b><span>Namby-Pamby</span><b>→</b><span>weakly sentimental</span></div></section>`
  },
  {
    slug:"eat-crow", title:"Eat Crow", category:"Idioms",
    short:"To admit you were wrong after confidently insisting you were right, usually with humiliation.",
    keywords:"wrong admit humiliation claim mistake crow",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p>To admit that you were wrong after confidently insisting that you were right. The expression usually carries the additional idea that the admission is humiliating.</p></section>
      <section class="entry-section"><h3>Example</h3><p class="example">“He predicted the company would fail within six months. Five years later, he had to eat crow.”</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p>The American expression is documented in the 19th century. A widely reprinted joke involved a man who boasted that he could eat anything and was challenged to eat crow. Crow was imagined as technically edible but distinctly unpleasant.</p>
      <div class="flow"><span>strong claim</span><b>→</b><span>proved wrong</span><b>→</b><span>reluctant admission</span><b>→</b><span>eat crow</span></div></section>`
  },
  {
    slug:"keep-your-own-counsel", title:"Keep Your Own Counsel", category:"Idioms",
    short:"Keep your business, plans, affairs, opinions, and secrets to yourself.",
    keywords:"secret private business plans affairs discreet counsel",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p><strong>Keep your business, plans, affairs, opinions, and secrets to yourself.</strong> Do not unnecessarily tell other people what you are thinking or doing.</p></section>
      <section class="entry-section"><h3>Traditional form</h3><p><strong>Keep one’s own counsel.</strong></p></section>
      <section class="entry-section"><h3>Important distinction</h3><p>It does not primarily mean “give yourself advice.” Here <em>counsel</em> carries an older sense connected with private deliberation, thoughts, plans, or secrets.</p></section>
      <section class="entry-section"><h3>Example</h3><p class="example">“She had already decided what she was going to do, but she kept her own counsel.”</p></section>
      <div class="memory"><strong>Memory aid:</strong> your counsel is your private thinking; keeping it means keeping it private.</div>`
  },
  {
    slug:"gossamer", title:"Gossamer", category:"Words",
    short:"Extremely fine, light, delicate, airy, or almost weightless.",
    keywords:"spider silk thin delicate goose summer autumn",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p>Something extremely fine, light, delicate, and almost weightless.</p></section>
      <section class="entry-section"><h3>Literal meaning</h3><p>Originally, the extremely fine strands of spider silk seen floating through the air or stretched across fields, especially in late autumn.</p></section>
      <section class="entry-section"><h3>Figurative uses</h3><p><em>Gossamer wings</em>, <em>a gossamer veil</em>, <em>gossamer threads</em>: anything remarkably thin, airy, delicate, or insubstantial.</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p>Middle English <em>gossamer</em> appears around 1300 and is apparently built from words for <strong>goose + summer</strong>. The expression seems to have referred to warm late-autumn weather, when floating spider threads were especially noticeable, and then shifted to the threads themselves.</p>
      <div class="flow"><span>goose + summer</span><b>→</b><span>late-autumn warm spell</span><b>→</b><span>floating spider silk</span><b>→</b><span>delicate / airy</span></div></section>`
  },
  {
    slug:"troth", title:"Troth", category:"Words",
    short:"Faithfulness, fidelity, or one’s solemnly pledged word.",
    keywords:"truth pledge promise honor fidelity betroth marriage",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p>A solemn pledge of faithfulness: <strong>your word, honor, or fidelity given to another person.</strong></p></section>
      <section class="entry-section"><h3>Plight one’s troth</h3><p>To solemnly pledge one’s faithfulness, especially in betrothal or marriage.</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p><strong>Troth and truth are historical doublets.</strong> Both descend from Old English forms carrying ideas of truth, faithfulness, fidelity, pledge, and covenant. Over time <em>truth</em> became the ordinary word for what is true, while <em>troth</em> survived chiefly in the sense of pledged faithfulness.</p>
      <div class="flow"><span>Old English: truth / faithfulness / pledge</span><b>→</b><span>truth</span><span>troth</span><b>→</b><span>betroth</span></div></section>
      <div class="memory"><strong>Memory aid:</strong> troth = truth given as your word.</div>`
  },
  {
    slug:"holy-sacred", title:"Holy vs. Sacred", category:"Religion & Meaning",
    short:"Holy emphasizes divinity and spiritual purity; sacred emphasizes what is set apart, consecrated, or inviolable.",
    keywords:"church god divine consecrated religion set apart whole heal health",
    body:`
      <section class="entry-section">
        <h3>The practical distinction</h3>
        <div class="compare-grid">
          <div class="compare-card green"><h3>Holy</h3><p><strong>Core idea:</strong> connected with God, divinity, religious devotion, spiritual purity, or godliness.</p><p>Examples: Holy Spirit, holy person, holy life, holy scripture, holy ground.</p></div>
          <div class="compare-card"><h3>Sacred</h3><p><strong>Core idea:</strong> set apart, dedicated, consecrated, protected from violation, or entitled to special reverence.</p><p>Examples: sacred ground, sacred church, sacred object, sacred music, sacred trust.</p></div>
        </div>
      </section>
      <section class="entry-section"><h3>Why they overlap</h3><p>Things connected with God are commonly regarded as both holy and sacred. But <em>sacred</em> extends very naturally to buildings, objects, duties, promises, burial grounds, traditions, and even secular values regarded as inviolable.</p></section>
      <section class="entry-section"><h3>Word history: holy</h3><p>Old English <em>hālig</em>, from a Germanic word family reconstructed around the idea of being whole, intact, uninjured, or inviolate. It is historically related to the family containing <em>whole</em>, <em>hale</em>, <em>health</em>, and <em>heal</em>.</p>
      <div class="flow"><span>whole / intact</span><b>→</b><span>hale / health / heal</span><b>→</b><span>holy</span></div></section>
      <section class="entry-section"><h3>Word history: sacred</h3><p>From Latin <em>sacrare</em>, “to consecrate, dedicate, make sacred, set apart,” from <em>sacer</em>, “sacred, dedicated, holy.”</p>
      <div class="flow"><span>sacer</span><b>→</b><span>sacrare</span><b>→</b><span>sacred</span></div></section>
      <table><thead><tr><th>Idea</th><th>Holy</th><th>Sacred</th></tr></thead><tbody>
        <tr><td>Directly connected with God/divinity</td><td>Strong emphasis</td><td>Common</td></tr>
        <tr><td>Spiritual purity / godliness</td><td>Strong emphasis</td><td>Less central</td></tr>
        <tr><td>Set apart for religious use</td><td>Yes</td><td>Strong emphasis</td></tr>
        <tr><td>Church building or religious object</td><td>Possible</td><td>Very natural</td></tr>
        <tr><td>Protected / inviolable</td><td>Possible</td><td>Strong emphasis</td></tr>
        <tr><td>Secular metaphor</td><td>Less common</td><td>Very common: “sacred trust”</td></tr>
      </tbody></table>
      <div class="memory"><strong>Memory aid:</strong> HOLY → divinity and spiritual purity. SACRED → set apart and not to be violated.</div>`
  },
  {
    slug:"germanic-teutonic", title:"Germanic vs. Teutonic", category:"Language & History",
    short:"Historically, Teutonic was used as an older name for Germanic; in precise modern usage, Germanic is the umbrella term and Teutonic is narrower or historical.",
    keywords:"German Germany English language Indo-European Proto proto reconstructed ancestor Teutones Teutonic Knights Germanicus Germani etymology semantic change",
    body:`
      <section class="entry-section"><h3>Do Teutonic and Germanic mean the same thing?</h3>
        <div class="compare-grid">
          <div class="compare-card green"><h3>In older usage: often yes</h3><p>Older English writers, especially in linguistics and anthropology, used <strong>Teutonic</strong> as a broad label for what is now normally called <strong>Germanic</strong>: the Germanic peoples, the Germanic languages, or their ancestral language.</p></div>
          <div class="compare-card"><h3>In modern precise usage: no</h3><p><strong>Germanic</strong> is the standard technical umbrella term. <strong>Teutonic</strong> is now mainly historical: it can refer specifically to the ancient Teutones, to the Teutonic Order/Knights, or appear as an older literary word for German or Germanic things.</p></div>
        </div>
      </section>
      <div class="memory"><strong>Bottom line:</strong> In an older book, <em>Teutonic languages</em> can mean essentially the same language family now called <em>Germanic languages</em>. In modern linguistics, use <strong>Germanic</strong>. Do not treat <strong>Teutonic</strong> as a fully interchangeable modern technical synonym.</div>

      <section class="entry-section"><h3>Who were the Teutones?</h3>
        <p><strong>The Teutones (also Teutoni) were a specific ancient northern European people known to Greek and Roman writers.</strong> They were closely associated with the Cimbri and took part in the great southward migrations and wars against Rome in the late 2nd century BCE. Roman forces under Gaius Marius defeated the Teutones at the Battle of Aquae Sextiae in 102 BCE.</p>
        <p><strong>Teutones is the people-name; Teuton is the singular form.</strong> The name did <strong>not originally mean “all Germanic peoples.”</strong> It named this particular group. Later writers broadened <em>Teuton/Teutonic</em> and used it for Germans or Germanic peoples generally.</p>
        <p>Their exact ancient ethnic and linguistic classification has been debated. They are commonly placed among the Germanic peoples, while some ancient and later sources connected them with Celtic populations. For this glossary, the important point is the naming history: <strong>specific people first → broader “Germanic” use later.</strong></p>
        <div class="flow"><span><strong>Teutones</strong><br>specific ancient people</span><b>→ later semantic broadening →</b><span><strong>Teuton / Teutonic</strong><br>German or Germanic in older usage</span></div>
      </section>

      <section class="entry-section"><h3>Why the words are only partly interchangeable</h3>
        <p><strong>Teutonic started narrower.</strong> It comes from the name of the <strong>Teutones</strong>, the specific ancient people defined above. English later broadened the word and used it for the larger Germanic family. That broad linguistic use is now largely obsolete.</p>
        <p><strong>Germanic became the standard umbrella.</strong> It now names the historical and linguistic family that includes English, German, Dutch, Frisian, the Scandinavian languages, and extinct East Germanic languages such as Gothic.</p>
        <div class="flow"><span>Teutones = one named ancient people</span><b>→ semantic broadening →</b><span>older “Teutonic” = Germanic family</span><b>→ modern terminology →</b><span>Germanic</span></div>
      </section>

      <section class="entry-section"><h3>What does “proto-” mean?</h3>
        <p><strong>Proto- means first, earliest, original, or ancestral.</strong> It comes from Greek <em>prōtos</em>, “first.”</p>
        <p>In historical linguistics, <strong>Proto-X</strong> means the reconstructed ancestral language from which a later language family descended. Linguists infer it by systematically comparing its descendant languages.</p>
        <div class="definition-grid">
          <div class="definition-card"><h3>Proto-Germanic</h3><p>The reconstructed common ancestor of the Germanic languages.</p></div>
          <div class="definition-card"><h3>Proto-Indo-European</h3><p>The reconstructed common ancestor of the Indo-European language family, which includes Germanic and many other branches.</p></div>
        </div>
        <p><strong>Important:</strong> “Proto” does not mean primitive or crude. It means <strong>ancestral</strong>.</p>
      </section>

      <section class="entry-section"><h3>The Germanic language family</h3>
        <p><strong>Germanic does not mean simply “German.”</strong> Modern German is one member of the much larger Germanic family. English is also Germanic.</p>
        <div class="language-tree">
          <div class="tree-node root">Proto-Indo-European<br><small>reconstructed ancestral language</small></div>
          <div>↓</div>
          <div class="tree-node root">Proto-Germanic<br><small>reconstructed ancestor of the Germanic languages</small></div>
          <div class="tree-row">
            <div class="tree-node"><strong>West Germanic</strong><br>English · German · Dutch · Frisian</div>
            <div class="tree-node"><strong>North Germanic</strong><br>Danish · Swedish · Norwegian · Icelandic · Faroese</div>
            <div class="tree-node"><strong>East Germanic</strong><br>Gothic and other extinct languages</div>
          </div>
        </div>
      </section>

      <section class="entry-section"><h3>Derivation of “Germanic”</h3>
        <p>The English word <strong>Germanic</strong> comes through Latin <em>Germanicus</em>, meaning essentially <strong>“of the Germani”</strong>, from <em>Germani</em>, the Roman name for peoples they grouped under that name.</p>
        <div class="flow"><span><strong>Germani</strong><br>name of a people/group</span><b>→ noun to adjective, not a meaning reversal →</b><span><strong>Germanicus</strong><br>“of the Germani”</span><b>→ borrowing into English →</b><span><strong>Germanic</strong></span></div>
        <p>So in that part of the chain, there is <strong>no hidden semantic flip</strong>. <em>Germani</em> names the people; <em>Germanicus</em> is the corresponding adjective, “of the Germani.” The grammatical form changes from a people-name to an adjective, while the reference remains connected to the same named group.</p>
        <p>A later development <strong>does</strong> need to be called out: English <em>Germanic</em> became a scholarly umbrella term for the wider linguistic and historical family that includes German, English, Dutch, Scandinavian languages, and others. That is a later technical specialization/expansion of the term.</p>
        <p>The ultimate origin of the ancient name <em>Germani</em> is uncertain.</p>
      </section>

      <section class="entry-section"><h3>Derivation of “Teutonic”</h3>
        <p><strong>Teutonic</strong> comes from Latin <em>Teutonicus</em>, “of the Teutones,” from <em>Teutones/Teutoni</em>, the name of an ancient people.</p>
        <div class="flow"><span><strong>Teutones</strong><br>name of a people</span><b>→</b><span><strong>Teutonicus</strong><br>“of the Teutones”</span><b>→</b><span><strong>Teutonic</strong></span></div>
        <p>The important semantic change happened later, when English writers <strong>broadened</strong> <em>Teutonic</em> from association with the Teutones to a label for the much larger Germanic family. Modern technical usage then shifted to <em>Germanic</em>.</p>
        <p>The word also survives prominently in <strong>Teutonic Order / Teutonic Knights</strong>, the medieval German military religious order.</p>
      </section>

      <section class="entry-section"><h3>How The Glossary shows derivations</h3>
        <div class="memory"><strong>Derivation convention:</strong> An arrow means <strong>“comes from / is historically derived from.”</strong> It does <strong>not</strong> automatically mean the definition changed. When a documented meaning change matters, The Glossary will label it explicitly — for example <strong>semantic broadening</strong>, <strong>narrowing</strong>, or another change in sense. A grammatical change such as <em>Germani</em> (people-name) → <em>Germanicus</em> (“of the Germani”) is also identified rather than being mistaken for a semantic change.</div>
      </section>

      <div class="memory"><strong>Memory aid:</strong> Germanic = the modern umbrella. Teutonic = historically overlapped with Germanic, but today is chiefly an older or specific historical term.</div>`
  },
  {
    slug:"sine-cosine", title:"Sine & Cosine", category:"One-Sheet Primers",
    short:"A one-sheet refresher: sine is vertical/opposite; cosine is horizontal/adjacent.",
    keywords:"trigonometry trig triangle unit circle soh cah toa x y angle",
    body:`
      <section class="entry-section"><h3>The one-sheet refresher</h3>
        <div class="diagram-grid">
          <div class="diagram-card">
            <h3>Right triangle</h3>
            <svg viewBox="0 0 360 230" role="img" aria-label="Right triangle showing opposite, adjacent, and hypotenuse">
              <path d="M55 190 L305 190 L55 45 Z" class="diagram-line"/>
              <path d="M55 170 L75 170 L75 190" class="diagram-accent"/>
              <path d="M268 190 A38 38 0 0 0 285 168" class="diagram-accent"/>
              <text x="274" y="181" class="diagram-label">θ</text>
              <text x="142" y="213" class="diagram-label">adjacent</text>
              <text x="8" y="120" class="diagram-label">opposite</text>
              <text x="162" y="105" class="diagram-label" transform="rotate(-30 162 105)">hypotenuse</text>
            </svg>
            <div class="math"><span class="formula">sin θ = opposite / hypotenuse</span><span class="formula">cos θ = adjacent / hypotenuse</span></div>
            <p><strong>SOH</strong>: Sine = Opposite / Hypotenuse<br><strong>CAH</strong>: Cosine = Adjacent / Hypotenuse<br><strong>TOA</strong>: Tangent = Opposite / Adjacent</p>
          </div>
          <div class="diagram-card">
            <h3>Unit circle</h3>
            <svg viewBox="0 0 360 260" role="img" aria-label="Unit circle showing cosine as x and sine as y">
              <line x1="35" y1="130" x2="325" y2="130" class="diagram-line"/>
              <line x1="180" y1="20" x2="180" y2="240" class="diagram-line"/>
              <circle cx="180" cy="130" r="90" class="diagram-line"/>
              <line x1="180" y1="130" x2="247" y2="70" class="diagram-accent"/>
              <line x1="247" y1="70" x2="247" y2="130" class="diagram-accent"/>
              <line x1="180" y1="130" x2="247" y2="130" class="diagram-accent"/>
              <circle cx="247" cy="70" r="5" fill="#9c6b3f"/>
              <text x="252" y="67" class="diagram-label">(cos θ, sin θ)</text>
              <text x="208" y="150" class="diagram-label">cos θ = x</text>
              <text x="252" y="102" class="diagram-label">sin θ = y</text>
              <text x="205" y="118" class="diagram-label">θ</text>
            </svg>
            <p>On a circle of radius 1, the point at angle θ is <strong>(cos θ, sin θ)</strong>. Cosine is the horizontal coordinate; sine is the vertical coordinate.</p>
          </div>
        </div>
      </section>
      <section class="entry-section"><h3>Common angles</h3>
        <table><thead><tr><th>Angle</th><th>sin</th><th>cos</th></tr></thead><tbody>
          <tr><td>0°</td><td>0</td><td>1</td></tr><tr><td>30°</td><td>1/2</td><td>√3/2</td></tr>
          <tr><td>45°</td><td>√2/2</td><td>√2/2</td></tr><tr><td>60°</td><td>√3/2</td><td>1/2</td></tr>
          <tr><td>90°</td><td>1</td><td>0</td></tr>
        </tbody></table>
      </section>
      <section class="entry-section"><h3>The core identity</h3><div class="math"><span class="formula">sin² θ + cos² θ = 1</span></div><p>Why? The unit circle obeys <strong>x² + y² = 1</strong>. Since x = cos θ and y = sin θ, the identity follows directly.</p></section>
      <section class="entry-section"><h3>What they actually do</h3><p>Sine and cosine turn an <strong>angle</strong> into a <strong>ratio or coordinate</strong>. For a vector of length 10 at angle θ:</p><div class="math"><span class="formula">horizontal = 10 cos θ</span><span class="formula">vertical = 10 sin θ</span></div><p>That is why they appear throughout triangles, circles, rotation, waves, sound, light, oscillation, engineering, and physics.</p></section>
      <div class="memory"><strong>Memory aid:</strong> cosine = x = horizontal. Sine = y = vertical.</div>`
  },
  {
    slug:"wild", title:"Wild", category:"Words",
    short:"Outside the expected boundary of control, cultivation, restraint, order, predictability, convention, or civilization.",
    keywords:"uncontrolled uncultivated animal strawberry field ideas stories plans shirt west motions criminal child weather guess",
    body:`
      <section class="entry-section"><h3>The unifying idea</h3><p><strong>Wild</strong> describes something that departs from the normal state of control, cultivation, restraint, order, predictability, reasonableness, convention, or civilization. The noun tells you <em>which kind of control</em>.</p>
      <div class="wild-map"><div class="wild-core">WILD = outside the expected boundary of control</div>
        <div class="wild-branch"><b>domesticated</b>→ undomesticated</div>
        <div class="wild-branch"><b>cultivated</b>→ uncultivated</div>
        <div class="wild-branch"><b>restrained</b>→ unrestrained</div>
        <div class="wild-branch"><b>orderly</b>→ disorderly</div>
        <div class="wild-branch"><b>predictable</b>→ unpredictable</div>
        <div class="wild-branch"><b>sensible</b>→ extreme / unreasonable</div>
        <div class="wild-branch"><b>conventional</b>→ flamboyant / unusual</div>
        <div class="wild-branch"><b>governed</b>→ outside social control</div>
        <div class="wild-branch"><b>evidence-bound</b>→ unconstrained guess</div>
      </div></section>
      <section class="entry-section"><h3>The main senses</h3><div class="sense-list">
        <div class="sense"><h4>Not domesticated</h4><p>A wild horse, wild wolf, wild birds.</p><small>Deviation: outside domestication.</small></div>
        <div class="sense"><h4>Not cultivated</h4><p>Wild strawberries, wildflowers, wild grapes.</p><small>Deviation: outside deliberate human cultivation.</small></div>
        <div class="sense"><h4>Uncultivated land</h4><p>A wild field, wild countryside, wild country.</p><small>Deviation: outside agricultural or human management.</small></div>
        <div class="sense"><h4>Uncontrolled motion or activity</h4><p>Wild motions, arms swinging wildly, wild dancing, a crowd going wild.</p><small>Deviation: outside physical control.</small></div>
        <div class="sense"><h4>Violent or dangerous</h4><p>A wild criminal, wild attack, wild fighting.</p><small>Deviation: outside ordinary restraints on violence.</small></div>
        <div class="sense"><h4>Unruly or highly excited</h4><p>A wild child, wild fans, wild excitement.</p><small>Deviation: outside calm behavioral restraint.</small></div>
        <div class="sense"><h4>Extreme, reckless, or impractical idea</h4><p>A wild idea, wild plan, wild scheme.</p><small>Deviation: outside conventional practical thinking.</small></div>
        <div class="sense"><h4>Incredible or implausible story</h4><p>A wild story, wild claim, wild accusation.</p><small>Deviation: outside ordinary plausibility.</small></div>
        <div class="sense"><h4>Flamboyant or visually extreme</h4><p>A wild shirt, wild tie, wild hair, wild colors.</p><small>Deviation: outside visual convention or restraint.</small></div>
        <div class="sense"><h4>Lawless or uncivilized</h4><p>The Wild West.</p><small>Deviation: outside established governmental or social control.</small></div>
        <div class="sense"><h4>Uncontrolled natural conditions</h4><p>Wild weather, wild seas, wild winds, a wild river.</p><small>Deviation: outside calm or contained conditions.</small></div>
        <div class="sense"><h4>Unfounded or highly uncertain</h4><p>A wild guess, wild speculation, wild estimate.</p><small>Deviation: outside evidentiary constraint.</small></div>
        <div class="sense"><h4>Emotionally intense or extreme</h4><p>Wild enthusiasm, wild applause, wild laughter.</p><small>Deviation: beyond ordinary emotional restraint.</small></div>
        <div class="sense"><h4>Erratic or unpredictable</h4><p>Wild fluctuations, wild price swings, a wild turn.</p><small>Deviation: outside predictable or stable behavior.</small></div>
      </div></section>
      <section class="entry-section"><h3>Word history</h3><p><em>Wild</em> is an ancient Germanic word. Old English <em>wilde</em> covered things living in a natural state, uncultivated, undomesticated, or untamed. Those physical senses expanded naturally into metaphorical senses for behavior, ideas, appearance, claims, and motion.</p>
      <div class="flow"><span>untamed animal / uncultivated land</span><b>→</b><span>uncontrolled</span><b>→</b><span>unrestrained</span><b>→</b><span>unconventional / extreme / unpredictable</span></div></section>
      <div class="memory"><strong>Memory aid:</strong> Wild = outside the expected boundary of control. The noun tells you which kind of control.</div>`
  },
  {
    slug:"stultify", title:"Stultify", category:"Words",
    short:"To make foolish, ineffective, mentally dull, or unable to think and act effectively.",
    keywords:"stupid dull thought thinking ineffective pointless suppress mind stultifying",
    body:`
      <section class="entry-section"><h3>In plain English</h3><p><strong>To make someone unable to think, develop, or act effectively — to mentally deaden them.</strong> More broadly, to make something foolish, ineffective, or incapable of accomplishing what it is supposed to accomplish.</p></section>
      <section class="entry-section"><h3>Intellectually stultifying</h3><p>Something so dull, repetitive, restrictive, or oppressive that it deadens active thought, initiative, or intellectual development.</p><p class="example">“The job was financially secure but intellectually stultifying.”</p></section>
      <section class="entry-section"><h3>Another use: make ineffective</h3><p class="example">“Rules intended to improve efficiency ended up stultifying the entire process.”</p><p>The rules have frustrated or neutralized the process rather than literally reducing anyone’s intelligence.</p></section>
      <section class="entry-section"><h3>Where it came from</h3><p>From Late Latin <em>stultificare</em>, “turn into foolishness,” built from Latin <em>stultus</em>, “foolish,” plus a form of <em>facere</em>, “to make or do.” English <em>stultify</em> first appears in the 18th century.</p>
      <div class="flow"><span>stultus = foolish</span><b>+</b><span>facere = make</span><b>→</b><span>stultify = make foolish</span></div></section>
      <div class="memory"><strong>Memory aid:</strong> STULTIFY = make foolish, dull, or ineffective.</div>`
  }
];


const grammarSubjectLabels = {
  grammar: "Grammar",
  words: "Word Structure",
  verbs: "Verbs",
  sounds: "Sounds & Phonetics",
  french: "French",
  latin: "Latin",
  "english-history": "English History"
};

function renderGrammarBlock(block){
  const h = escapeHtml;
  if(block.kind === "definition"){
    return `<section class="entry-section grammar-definition"><h3>${h(block.term)}</h3><p>${h(block.text)}</p></section>`;
  }
  if(block.kind === "prose"){
    return `<section class="entry-section">${block.title ? `<h3>${h(block.title)}</h3>` : ""}${block.body.map(p=>`<p>${h(p)}</p>`).join("")}</section>`;
  }
  if(block.kind === "examples"){
    return `<section class="entry-section"><h3>${h(block.title || "Examples")}</h3><div class="grammar-example-list">${block.items.map(item=>`<div class="example"><strong>${h(item.text)}</strong>${item.note ? `<br><span class="example-note">${h(item.note)}</span>` : ""}</div>`).join("")}</div></section>`;
  }
  if(block.kind === "annotated"){
    return `<section class="entry-section"><h3>Sentence anatomy</h3>${block.instruction ? `<p>${h(block.instruction.replace("Click each word to see its job.","Each word is labelled with its job.").replace("Click the words to see how the sentence divides.","Each word is labelled by its role.").replace("Click to see which unit each word belongs to.","Each word is labelled by its role.").replace("Click a word to see what marks the mood.","Each word is labelled by its role.").replace("Click each word to identify the verb form.","Each word is labelled by its verb form."))}</p>` : ""}<div class="grammar-tokens">${block.tokens.map(t=>`<span class="grammar-token"><strong>${h(t.w)}</strong><small>${h(t.role || "")}${t.note ? ` — ${h(t.note)}` : ""}</small></span>`).join("")}</div></section>`;
  }
  if(block.kind === "why"){
    return `<section class="entry-section"><div class="grammar-why"><strong>Why it matters</strong><p>${h(block.body)}</p></div></section>`;
  }
  if(block.kind === "mistake"){
    return `<section class="entry-section"><h3>Common mistake</h3><div class="compare-grid"><div class="compare-card grammar-wrong"><h3>Not this</h3><p>${h(block.wrong)}</p></div><div class="compare-card green"><h3>Use this</h3><p>${h(block.right)}</p></div></div><p class="grammar-note">${h(block.note)}</p></section>`;
  }
  if(block.kind === "compare"){
    return `<section class="entry-section"><div class="compare-grid">${block.columns.map(col=>`<div class="compare-card"><h3>${h(col.heading)}</h3><ul>${col.items.map(item=>`<li>${h(item)}</li>`).join("")}</ul></div>`).join("")}</div></section>`;
  }
  if(block.kind === "timeline"){
    return `<section class="entry-section"><h3>Timeline</h3>${block.note ? `<p>${h(block.note.replace("Click an era to see its language, its influences, and what was happening around it.","Open an era to see its language, influences, and historical setting.").replace("Click an era to open it.","Open an era for details."))}</p>` : ""}<div class="grammar-timeline">${block.eras.map(era=>`<details class="timeline-era"><summary><strong>${h(era.name)}</strong><span>${h(era.range)}</span></summary><div class="timeline-body"><p>${h(era.blurb)}</p><ul>${era.bullets.map(b=>`<li>${h(b)}</li>`).join("")}</ul>${era.sample ? `<div class="example"><strong>${h(era.sample.text)}</strong><br><span class="example-note">${h(era.sample.gloss)}</span></div>` : ""}</div></details>`).join("")}</div></section>`;
  }
  if(block.kind === "tenseline"){
    return `<section class="entry-section"><h3>${h(block.caption)}</h3><div class="tense-track"><div class="tense-line"></div>${block.points.map(p=>`<div class="tense-point" style="left:${Math.max(3,Math.min(97,p.at))}%"><span></span><b>${h(p.label)}</b></div>`).join("")}</div>${block.note ? `<p class="grammar-note">${h(block.note)}</p>` : ""}</section>`;
  }
  if(block.kind === "cards"){
    return `<section class="entry-section"><div class="definition-grid">${block.items.map(item=>`<div class="definition-card grammar-card"><div class="grammar-big">${h(item.big)}</div><h3>${h(item.title)}</h3><p>${h(item.body)}</p>${item.examples ? `<ul>${item.examples.map(ex=>`<li>${h(ex)}</li>`).join("")}</ul>` : ""}</div>`).join("")}</div></section>`;
  }
  if(block.kind === "table"){
    return `<section class="entry-section"><div class="table-scroll"><table><thead><tr>${block.headers.map(x=>`<th>${h(x)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(x=>`<td>${h(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
  }
  if(block.kind === "morph"){
    return `<section class="entry-section"><h3>${h(block.word)}</h3><div class="morph-row">${block.parts.map(p=>`<span class="morph-part"><strong>${h(p.text)}</strong><small>${h(p.kind)}</small></span>`).join('<b class="morph-plus">+</b>')}</div></section>`;
  }
  if(block.kind === "evolution"){
    return `<section class="entry-section"><h3>${h(block.title)}</h3><div class="evolution-list">${block.chains.map(chain=>`<div class="evolution-chain"><div class="flow">${chain.steps.map((s,i)=>`${i ? "<b>→</b>" : ""}<span>${h(s)}</span>`).join("")}</div><p class="grammar-note">${h(chain.gloss)}</p></div>`).join("")}</div></section>`;
  }
  if(block.kind === "pairs"){
    return `<section class="entry-section"><h3>Minimal pairs</h3><div class="pair-list">${block.items.map(item=>`<div class="pair-row"><strong>${h(item.a)} / ${h(item.b)}</strong><span>${h(item.note)}</span></div>`).join("")}</div></section>`;
  }
  return "";
}

function renderGrammarQuestions(title, questions){
  if(!questions || !questions.length) return "";
  return `<section class="entry-section grammar-check"><h3>${escapeHtml(title)}</h3><div class="question-list">${questions.map((q,i)=>renderGrammarQuestion(q,i)).join("")}</div></section>`;
}

function renderGrammarQuestion(q,i){
  const h=escapeHtml;
  const answer=q.options && q.answer >= 0 ? q.options[q.answer] : "";
  return `<div class="question-card"><p class="question-number">${i+1}</p><p><strong>${h(q.prompt)}</strong></p>${q.sentence ? `<p class="question-sentence">${h(q.sentence)}</p>` : ""}${q.options ? `<ol type="A">${q.options.map(o=>`<li>${h(o)}</li>`).join("")}</ol>` : ""}<details class="answer-reveal"><summary>Show answer</summary><p><strong>Answer:</strong> ${h(answer)}</p><p>${h(q.explain || "")}</p></details></div>`;
}

function renderPracticeModes(modes){
  const h=escapeHtml;
  return modes.map(mode=>`<section class="entry-section"><h3>${h(mode.title)}</h3><p>${h(mode.description)}</p><div class="question-list">${mode.items.map((item,i)=>{
    if(mode.type==="mcq") return renderGrammarQuestion(item,i);
    if(mode.type==="fix"){
      return `<div class="question-card"><p class="question-number">${i+1}</p><p><strong>${h(item.prompt)}</strong></p><p class="question-sentence grammar-wrong-text">${h(item.wrong)}</p><details class="answer-reveal"><summary>Show correction</summary><p><strong>${h(item.answer)}</strong></p><p>${h(item.explain)}</p>${item.accept && item.accept.length ? `<p class="grammar-note"><strong>Accepted forms:</strong> ${item.accept.map(h).join(" · ")}</p>` : ""}</details></div>`;
    }
    if(mode.type==="build"){
      return `<div class="question-card"><p class="question-number">${i+1}</p><p><strong>${h(item.prompt)}</strong></p><div class="morph-row">${item.pieces.map(p=>`<span class="morph-part"><strong>${h(p)}</strong></span>`).join("")}</div><details class="answer-reveal"><summary>Show answer</summary><p><strong>${item.answer.map(h).join(" + ")}</strong></p><p>${h(item.explain)}</p></details></div>`;
    }
    return "";
  }).join("")}</div></section>`).join("");
}

function buildGrammarEntries(){
  const data=window.GRAMMAR_CONTENT;
  if(!data) return [];
  const lessonEntries=data.lessons.map(lesson=>({
    slug:`grammar-${lesson.id}`,
    title:lesson.title,
    category:grammarSubjectLabels[lesson.subject] || "Grammar",
    short:lesson.blurb,
    keywords:[lesson.title,lesson.blurb,lesson.subject,"grammar lesson"].join(" "),
    body:lesson.blocks.map(renderGrammarBlock).join("")+
      renderGrammarQuestions("Practice",lesson.practice)+
      renderGrammarQuestions("Quiz",lesson.quiz)
  }));
  const glossaryEntries=data.glossary.map(g=>({
    slug:`grammar-term-${g.term.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}`,
    title:g.term,
    category:"Grammar Terms",
    short:g.plain,
    keywords:[g.term,g.definition,g.plain,g.example,(g.related||[]).join(" ")].join(" "),
    body:`<section class="entry-section"><h3>Definition</h3><p>${escapeHtml(g.definition)}</p></section><section class="entry-section"><h3>In plain English</h3><p>${escapeHtml(g.plain)}</p></section><section class="entry-section"><h3>Example</h3><p class="example">${escapeHtml(g.example)}</p></section>${g.related && g.related.length ? `<section class="entry-section"><h3>Related terms</h3><div class="flow">${g.related.map(x=>`<span>${escapeHtml(x)}</span>`).join("")}</div></section>` : ""}`
  }));
  const practiceEntry={
    slug:"grammar-practice",
    title:"Grammar Practice",
    category:"Grammar Practice",
    short:"All of the original Grammar Guide practice modes, with answers and explanations.",
    keywords:"grammar practice quiz identify tense mood timeline fix sentence build word",
    body:renderPracticeModes(data.practiceModes)
  };
  return [...lessonEntries,...glossaryEntries,practiceEntry];
}

entries.push(...buildGrammarEntries());

const categoryOrder = ["All","Words","Idioms","Religion & Meaning","Language & History","One-Sheet Primers","Grammar","Grammar Terms","Grammar Practice","Word Structure","Verbs","Sounds & Phonetics","French","Latin","English History"];
const listEl = document.querySelector("#term-list");
const panelEl = document.querySelector("#entry-panel");
const searchEl = document.querySelector("#search");
const filtersEl = document.querySelector("#filters");
const countEl = document.querySelector("#count");

let activeCategory = "All";
let activeSlug = null;

function escapeHtml(value){
  return value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}

function renderFilters(){
  filtersEl.innerHTML = categoryOrder.map(cat =>
    `<button class="filter-btn ${cat===activeCategory?"active":""}" data-category="${cat}" type="button">${cat}</button>`
  ).join("");
  filtersEl.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      activeCategory=btn.dataset.category;
      renderFilters();
      renderTerms();
    });
  });
}

function filteredEntries(){
  const q=searchEl.value.trim().toLowerCase();
  return entries
    .filter(e=>activeCategory==="All" || e.category===activeCategory)
    .filter(e=>!q || [e.title,e.short,e.keywords,e.category].join(" ").toLowerCase().includes(q))
    .sort((a,b)=>a.title.localeCompare(b.title));
}

function renderTerms(){
  const shown=filteredEntries();
  countEl.textContent=`${shown.length} ${shown.length===1?"term":"terms"}`;
  if(!shown.length){
    listEl.innerHTML='<div class="no-results">No matching terms.</div>';
    return;
  }
  listEl.innerHTML=shown.map(e=>`
    <button type="button" class="term-btn ${e.slug===activeSlug?"active":""}" data-slug="${e.slug}" aria-expanded="${e.slug===activeSlug}">
      <span class="term-name">${escapeHtml(e.title)}</span>
      <span class="term-cat">${escapeHtml(e.category)}</span>
    </button>`).join("");
  listEl.querySelectorAll(".term-btn").forEach(btn=>{
    btn.addEventListener("click",()=>openEntry(btn.dataset.slug));
  });
}

function openEntry(slug){
  const entry=entries.find(e=>e.slug===slug);
  if(!entry)return;
  activeSlug=slug;
  renderTerms();
  panelEl.innerHTML=`
    <div class="entry-inner">
      <header class="entry-header">
        <div class="category">${escapeHtml(entry.category)}</div>
        <h2>${escapeHtml(entry.title)}</h2>
        <p class="lede">${escapeHtml(entry.short)}</p>
      </header>
      ${entry.body}
    </div>`;
  if(window.matchMedia("(max-width: 820px)").matches){
    panelEl.scrollIntoView({behavior:"smooth",block:"start"});
  }
}

searchEl.addEventListener("input",renderTerms);
renderFilters();
renderTerms();
