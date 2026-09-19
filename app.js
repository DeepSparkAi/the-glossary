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


entries.push({
  slug:"collocation",
  title:"Collocation",
  category:"Language & History",
  short:"A pair or group of words that naturally and habitually occur together in a language.",
  keywords:"collocation colocations word combinations strong coffee heavy rain make a decision natural language vocabulary phrase co-occurrence",
  body:`
    <section class="entry-section"><h3>In plain English</h3>
      <p>A <strong>collocation</strong> is a combination of words that native speakers regularly put together because the combination has become conventional.</p>
      <p>The words are individually ordinary. What matters is that <strong>this particular combination sounds natural</strong>.</p>
    </section>

    <section class="entry-section"><h3>Examples</h3>
      <div class="definition-grid">
        <div class="definition-card"><h3>strong coffee</h3><p>Natural English.</p></div>
        <div class="definition-card"><h3>powerful coffee</h3><p>Understandable, but not the usual collocation.</p></div>
        <div class="definition-card"><h3>heavy rain</h3><p>Natural English.</p></div>
        <div class="definition-card"><h3>strong rain</h3><p>Grammatically possible, but not the normal pairing.</p></div>
        <div class="definition-card"><h3>make a decision</h3><p>Natural English.</p></div>
        <div class="definition-card"><h3>do a decision</h3><p>Not the conventional English pairing.</p></div>
      </div>
    </section>

    <section class="entry-section"><h3>What makes it different from grammar?</h3>
      <p>Grammar tells you what combinations are structurally possible. <strong>Collocation tells you which possible combinations people actually prefer.</strong></p>
      <p><em>Powerful coffee</em> is grammatical. <em>Strong coffee</em> is the established collocation.</p>
      <div class="memory"><strong>Grammar asks:</strong> Is this construction allowed?<br><strong>Collocation asks:</strong> Is this the combination speakers normally use?</div>
    </section>

    <section class="entry-section"><h3>Common types</h3>
      <table>
        <thead><tr><th>Pattern</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>Adjective + noun</td><td>heavy rain, strong coffee, deep sleep</td></tr>
          <tr><td>Verb + noun</td><td>make a decision, pay attention, raise a question</td></tr>
          <tr><td>Noun + noun</td><td>traffic jam, language barrier, data analysis</td></tr>
          <tr><td>Adverb + adjective</td><td>deeply concerned, highly unlikely, perfectly clear</td></tr>
          <tr><td>Verb + adverb</td><td>apologize sincerely, whisper softly, argue strongly</td></tr>
          <tr><td>Verb + preposition</td><td>depend on, belong to, suffer from</td></tr>
        </tbody>
      </table>
    </section>

    <section class="entry-section"><h3>Why collocations matter</h3>
      <p>They are one of the main reasons a sentence can be grammatically correct but still sound foreign or unnatural.</p>
      <p>Fluent speakers do not build every sentence one word at a time. They also retrieve familiar word combinations as ready-made chunks.</p>
    </section>

    <section class="entry-section"><h3>Collocation vs. idiom</h3>
      <div class="compare-grid">
        <div class="compare-card green"><h3>Collocation</h3><p>The combined meaning is normally transparent.</p><p><strong>heavy rain</strong> still means rain that is heavy.</p></div>
        <div class="compare-card"><h3>Idiom</h3><p>The whole expression has a meaning that cannot be reliably predicted from the individual words.</p><p><strong>eat crow</strong> does not literally mean eating a bird.</p></div>
      </div>
    </section>

    <section class="entry-section"><h3>Word history</h3>
      <p><strong>Collocation</strong> comes from Latin elements meaning roughly <strong>“placing together.”</strong> In linguistics, that basic idea becomes: words that are regularly <strong>placed together</strong> in actual usage.</p>
      <div class="flow"><span>co- / together</span><b>+</b><span>location / placing</span><b>→</b><span>collocation = habitual word pairing</span></div>
    </section>

    <section class="entry-section"><h3>Spelling distinction</h3>
      <p><strong>Collocation</strong> — the linguistic term for words that characteristically occur together.</p>
      <p><strong>Colocation</strong> — sharing the same physical location; especially used in computing for equipment housed in the same data center.</p>
    </section>

    <div class="memory"><strong>Memory aid:</strong> Collocation = words that like to live next door to each other.</div>
  `
});


function historyPrimerBody(){
  return `
    ${primerStep(1,"Start with the map, not the war.",
      `<p><strong>Vietnam</strong> is a long, narrow country on the eastern edge of mainland Southeast Asia. It borders China to the north, Laos and Cambodia to the west, and the South China Sea to the east.</p>
       ${primerTerm("INDOCHINA","A historical geographic term for the mainland Southeast Asian region containing Vietnam, Laos, and Cambodia. Under French rule, these territories were administered together as French Indochina.")}
       <p>The American war in Vietnam did not begin from nothing. It grew out of a much older struggle over colonial rule, Vietnamese independence, civil conflict, and the global Cold War.</p>`)}

    ${primerStep(2,"Before the United States, France ruled colonial Indochina.",
      `${primerTerm("COLONY","A territory controlled by another country, often politically and economically, without equal sovereignty.")}
       <p>France established colonial control over Vietnam in the 19th century and later administered Vietnam, Laos, and Cambodia as <strong>French Indochina</strong>.</p>
       <p>French rule brought roads, schools, plantations, mines, and a colonial bureaucracy, but political power remained in French hands. Vietnamese opposition to foreign rule took many forms, including monarchist, nationalist, and communist movements.</p>`)}

    ${primerStep(3,"Vietnamese nationalism came before the U.S.–Soviet Cold War.",
      `${primerTerm("NATIONALISM","The belief that a people who see themselves as a nation should control their own political future.")}
       <p>Vietnamese resistance to French rule was not simply a later extension of the Cold War. The desire for independence had deep local roots.</p>
       <p><strong>Ho Chi Minh</strong> became the best-known leader of a movement that joined Vietnamese nationalism with communism.</p>
       ${primerTerm("COMMUNISM","A political and economic tradition seeking collective ownership of major productive resources and, in its Marxist-Leninist form, rule through a revolutionary communist party.")}
       <p>That combination matters: Ho's movement was both <strong>anti-colonial</strong> and <strong>communist</strong>.</p>`)}

    ${primerStep(4,"World War II weakens French control.",
      `<p>During World War II, Japan occupied French Indochina while the French colonial administration remained in a reduced role for much of the war.</p>
       ${primerTerm("VIET MINH","The League for the Independence of Vietnam, led by Ho Chi Minh. It fought Japanese occupation and later French efforts to restore colonial control.")}
       <p>After Japan surrendered in 1945, the Viet Minh seized power in Hanoi during the <strong>August Revolution</strong>. Ho Chi Minh proclaimed the independence of the Democratic Republic of Vietnam on September 2, 1945.</p>`)}

    ${primerStep(5,"France returns, and the First Indochina War begins.",
      `${primerTerm("FIRST INDOCHINA WAR","The 1946–1954 war between French-led forces and the Viet Minh over control and independence in Indochina, especially Vietnam.")}
       <p>France attempted to restore its position after World War II. Fighting between France and the Viet Minh became a full-scale war.</p>
       <p>At first the United States was wary of openly supporting the restoration of colonial rule. As the Cold War hardened—especially after the communist victory in China in 1949 and the Korean War in 1950—the United States increasingly viewed the conflict through the lens of containing communism and supplied major assistance to the French war effort.</p>`)}

    ${primerStep(6,"1954: Dien Bien Phu breaks the French position.",
      `${primerTerm("DIEN BIEN PHU","A French fortified position in northwestern Vietnam captured by Viet Minh forces in May 1954 after a long siege.")}
       <p>The defeat ended France's ability and political willingness to continue the war on the same basis.</p>
       <p>Negotiations at Geneva followed.</p>`)}

    ${primerStep(7,"The 1954 division was supposed to be temporary.",
      `${primerTerm("GENEVA ACCORDS","The agreements and declarations emerging from the 1954 Geneva Conference that ended the First Indochina War and temporarily divided Vietnam near the 17th parallel.")}
       <p>Viet Minh forces regrouped in the North. French-associated forces regrouped in the South. The division was described as a military demarcation, not a permanent international border.</p>
       <p>National elections intended to address reunification were contemplated for 1956, but they did not take place. The United States did not sign the principal Geneva settlement documents, though it said it would not use force to disturb the agreements.</p>`)}

    ${primerStep(8,"Two rival governments emerge.",
      `<div class="compare-grid">
        <div class="compare-card"><h3>North Vietnam</h3><p><strong>Democratic Republic of Vietnam</strong>, led by Ho Chi Minh and the communist Workers' Party.</p></div>
        <div class="compare-card green"><h3>South Vietnam</h3><p><strong>Republic of Vietnam</strong>, created in 1955 under President Ngo Dinh Diem and backed by the United States.</p></div>
       </div>
       <p>Each side claimed political legitimacy over Vietnam. The conflict was therefore simultaneously about <strong>national reunification, revolution, political control, and the Cold War</strong>.</p>`)}

    ${primerStep(9,"Why did the United States care so much?",
      `${primerTerm("CONTAINMENT","The U.S. Cold War policy of trying to prevent the further spread of communist governments or Soviet- and Chinese-aligned power.")}
       ${primerTerm("DOMINO THEORY","The belief, influential among U.S. policymakers, that if one country in a region became communist, nearby countries might follow.")}
       <p>U.S. leaders feared that the collapse of South Vietnam could weaken noncommunist governments elsewhere in Southeast Asia and damage U.S. credibility with allies.</p>
       <p>Vietnamese communists, by contrast, presented their struggle as one for reunification and national liberation, while also participating in the wider communist bloc.</p>`)}

    ${primerStep(10,"The war in the South becomes an insurgency.",
      `${primerTerm("INSURGENCY","An organized armed rebellion against an established government.")}
       ${primerTerm("VIET CONG","The common U.S. and South Vietnamese name for communist-led guerrilla and political forces fighting the South Vietnamese government. The movement's formal political organization was the National Liberation Front.")}
       <p>By the late 1950s and early 1960s, armed communist activity in South Vietnam expanded. North Vietnam increasingly supported the struggle with personnel, weapons, organization, and supply routes.</p>
       <p>The South Vietnamese state also faced internal political weakness, repression, factional conflict, and disputes over legitimacy.</p>`)}

    ${primerStep(11,"Kennedy greatly expands the American advisory role.",
      `${primerTerm("MILITARY ADVISER","A military specialist sent to train, organize, plan with, or otherwise assist another country's armed forces.")}
       <p>The United States had advisers in South Vietnam before John F. Kennedy became president, but Kennedy sharply increased American military personnel, equipment, aviation support, and counterinsurgency assistance.</p>
       <p>American personnel were increasingly involved in combat conditions even though the United States had not yet deployed the large conventional ground force that would arrive under Lyndon Johnson.</p>`)}

    ${primerStep(12,"1963: the Diem government falls.",
      `<p>President Ngo Dinh Diem's government faced mounting political opposition, including the Buddhist crisis of 1963. South Vietnamese generals overthrew Diem in November 1963; Diem and his brother Ngo Dinh Nhu were killed.</p>
       <p>The United States knew a coup was being organized and had signaled that it would not oppose a change in leadership, though the killing of Diem was not the stated U.S. plan.</p>
       <p>Political instability in South Vietnam continued after the coup.</p>`)}

    ${primerStep(13,"1964: the Gulf of Tonkin becomes the legal-political turning point.",
      `${primerTerm("GULF OF TONKIN INCIDENT","A pair of reported naval encounters in August 1964 involving U.S. destroyers and North Vietnamese patrol boats. The first attack on August 2 occurred; whether a second attack occurred on August 4 became disputed and later evidence cast serious doubt on it.")}
       ${primerTerm("GULF OF TONKIN RESOLUTION","A resolution passed by Congress in August 1964 giving President Lyndon Johnson broad authority to use military force in Southeast Asia without a formal declaration of war.")}
       <p>The resolution became the principal congressional authorization used for the major U.S. escalation that followed.</p>`)}

    ${primerStep(14,"1965: the United States becomes a large-scale combatant.",
      `<p>In March 1965, U.S. Marines landed at Da Nang. Hundreds of thousands of American troops followed.</p>
       ${primerTerm("OPERATION ROLLING THUNDER","The sustained U.S. bombing campaign against North Vietnam begun in 1965.")}
       <p>The United States now fought with large ground, air, and naval forces while continuing to support the armed forces of South Vietnam.</p>
       <p>By 1967, nearly 500,000 U.S. troops were in Vietnam.</p>`)}

    ${primerStep(15,"The battlefield had no simple front line.",
      `${primerTerm("GUERRILLA WARFARE","Fighting by smaller, mobile forces that avoid depending on conventional front lines and often operate among the civilian population.")}
       ${primerTerm("HO CHI MINH TRAIL","A network of roads, paths, and supply routes through Laos and Cambodia used by North Vietnam to move personnel and material toward the war in South Vietnam.")}
       <p>U.S. forces possessed enormous firepower and mobility, but communist forces could often choose when to engage, withdraw across difficult terrain, rebuild units, and use sanctuaries and supply corridors outside South Vietnam.</p>
       <p>The war therefore mixed conventional battles, guerrilla warfare, bombing, pacification programs, intelligence operations, and political struggle.</p>`)}

    ${primerStep(16,"What was the U.S. military trying to accomplish?",
      `<p>At the broadest level, Washington sought to keep South Vietnam from being defeated and absorbed by the communist North.</p>
       ${primerTerm("WAR OF ATTRITION","A strategy that seeks to wear down an opponent by inflicting losses faster than the opponent can replace them.")}
       <p>Under General William Westmoreland, U.S. strategy placed heavy emphasis on finding and destroying enemy forces and using superior firepower to impose unsustainable losses.</p>
       <p>The central problem was that battlefield losses did not automatically translate into political control, while North Vietnam and its allies were willing to sustain very high costs.</p>`)}

    ${primerStep(17,"The war was also a contest over villages and political loyalty.",
      `${primerTerm("PACIFICATION","Programs intended to establish government security and political control in contested rural areas while weakening insurgent influence.")}
       <p>South Vietnamese and U.S. forces tried to protect villages, build local government, gather intelligence, and separate guerrillas from civilian support networks.</p>
       <p>These programs existed alongside destructive combat, forced displacement, corruption, political repression, and civilian casualties—all of which could undermine the same political goals the programs were meant to advance.</p>`)}

    ${primerStep(18,"1968: Tet changes the American political meaning of the war.",
      `${primerTerm("TET OFFENSIVE","The large coordinated offensive launched by North Vietnamese and Viet Cong forces across South Vietnam during the Tet holiday in early 1968.")}
       <p>U.S. and South Vietnamese forces eventually repelled the attacks and inflicted severe losses on communist forces. In that military sense, Tet did not produce the battlefield victory Hanoi had sought.</p>
       <p>But the scale of the offensive contradicted optimistic claims that the enemy was near defeat. Tet therefore became a major political and psychological turning point in the United States and weakened public confidence in the war.</p>`)}

    ${primerStep(19,"The war at home mattered.",
      `<p>American public opinion was never one single thing. Support, doubt, and opposition changed over time.</p>
       <p>The antiwar movement grew as casualties mounted, the draft affected more families, television brought images of the war into homes, official claims were challenged, and the war's aims and costs were debated.</p>
       <p>The conflict also produced a lasting argument over presidential war powers, congressional authority, credibility, the draft, veterans' treatment, and the relationship between military success and political goals.</p>`)}

    ${primerStep(20,"Nixon tries to withdraw Americans without abandoning South Vietnam.",
      `${primerTerm("VIETNAMIZATION","President Richard Nixon's policy of withdrawing U.S. ground forces while expanding the equipment, training, and responsibilities of South Vietnam's armed forces.")}
       <p>U.S. troop numbers steadily declined after 1969, but the United States continued major air operations and military aid.</p>
       <p>Nixon also expanded operations into Cambodia and Laos in an effort to disrupt communist bases and supply routes. These actions intensified controversy in the United States and widened the geographic scope of U.S. combat.</p>`)}

    ${primerStep(21,"1973: the United States leaves the direct ground war.",
      `${primerTerm("PARIS PEACE ACCORDS","The January 1973 agreement intended to end U.S. military involvement and create a political framework for peace in Vietnam.")}
       <p>The agreement provided for a cease-fire and the withdrawal of remaining U.S. forces. American prisoners of war were returned, and the last U.S. combat troops left Vietnam in March 1973.</p>
       <p>The agreement did <strong>not</strong> end the fighting between North and South Vietnam. Both Vietnamese sides continued the war.</p>`)}

    ${primerStep(22,"1975: South Vietnam collapses.",
      `<p>North Vietnamese forces launched a major offensive in 1975. South Vietnamese defenses collapsed rapidly.</p>
       ${primerTerm("FALL OF SAIGON","The capture of Saigon by North Vietnamese forces on April 30, 1975, ending the Republic of Vietnam and the long war between North and South.")}
       <p>The United States evacuated its embassy and many Americans and Vietnamese during the final days.</p>
       <p>In 1976 the country was formally reunified as the <strong>Socialist Republic of Vietnam</strong>.</p>`)}

    ${primerStep(23,"The human cost was enormous.",
      `<p>The war killed and wounded millions of Vietnamese civilians and combatants and devastated large areas of Vietnam, Laos, and Cambodia. The National Archives records <strong>58,220 U.S. military fatal casualties</strong> in its Vietnam Conflict data file.</p>
       <p>The effects continued after the fighting: unexploded ordnance, land mines, displacement, Agent Orange/dioxin contamination, missing personnel, physical disability, and psychological trauma.</p>
       <p>After 1975, large numbers of Vietnamese also fled the country, including the refugees often called the <strong>boat people</strong>.</p>`)}

    ${primerStep(24,"The story does not end with U.S. withdrawal.",
      `<p>Vietnam's relations with neighboring communist states deteriorated sharply after reunification.</p>
       <p>Relations with Cambodia's Khmer Rouge government became openly violent along the border. China backed Cambodia, while Vietnam moved closer to the Soviet Union.</p>
       <p>In late 1978 Vietnam invaded Cambodia, overthrew the Khmer Rouge government, and installed a new Cambodian government aligned with Hanoi. Vietnamese forces remained in Cambodia for years.</p>`)}

    ${primerStep(25,"1979: China invades northern Vietnam.",
      `${primerTerm("SINO-VIETNAMESE WAR","The brief but intense war that began when China invaded northern Vietnam in February 1979.")}
       <p>China said it intended to punish Vietnam after Vietnam's invasion of Cambodia and amid wider disputes over the border, ethnic Chinese in Vietnam, Hanoi's alliance with the Soviet Union, and regional influence.</p>
       <p>Chinese forces withdrew after several weeks. Both governments claimed success. The war did not settle the underlying rivalry.</p>`)}

    ${primerStep(26,"China and Vietnam continued fighting after 1979.",
      `<p>The land border remained heavily militarized, with recurring clashes through much of the 1980s.</p>
       <p>There were also maritime confrontations. In 1988, Chinese and Vietnamese forces clashed at <strong>Johnson South Reef</strong> in the Spratly Islands; Chinese forces sank Vietnamese vessels and took control of the reef.</p>
       <p>China and Vietnam later normalized relations, but they still have competing claims in parts of the South China Sea.</p>`)}

    ${primerStep(27,"The former U.S. enemy gradually becomes a U.S. partner.",
      `<p>The United States and Vietnam spent years resolving issues involving prisoners of war, missing personnel, refugees, sanctions, and the political legacy of the conflict.</p>
       <div class="primer-chain"><span>1975 · relations broken</span><b>→</b><span>1994 · U.S. trade embargo lifted</span><b>→</b><span>1995 · diplomatic relations normalized</span><b>→</b><span>2023 · Comprehensive Strategic Partnership</span></div>
       <p>Since normalization, economic, educational, diplomatic, and security ties have expanded dramatically.</p>`)}

    ${primerStep(28,"Are the United States and Vietnam allies now?",
      `<p><strong>They are close strategic partners, but not formal treaty allies.</strong></p>
       ${primerTerm("TREATY ALLY","A country connected to another by a formal defense treaty that creates specific mutual security commitments.")}
       ${primerTerm("COMPREHENSIVE STRATEGIC PARTNERSHIP","The name Vietnam and the United States use for the high-level bilateral framework established in 2023 to deepen cooperation across diplomacy, trade, technology, education, defense, security, climate, and other areas.")}
       <p>So it is reasonable in casual speech to say the former enemies now cooperate closely, but <strong>“alliance” can overstate the legal relationship</strong>. The precise term is <strong>Comprehensive Strategic Partnership</strong>.</p>`)}

    ${primerStep(29,"Why does China matter to the U.S.–Vietnam relationship today?",
      `<p>Vietnam has a long, complicated relationship with China: deep cultural and economic ties, communist party-to-party relations, a shared land border—and recurring strategic distrust.</p>
       <p>Vietnam seeks to protect its independence while avoiding dependence on any single great power. Its foreign policy therefore maintains important ties with China, Russia, the United States, Japan, India, ASEAN states, and others.</p>
       <p>Cooperation with the United States—especially maritime security, trade, technology, and defense contacts—gives Vietnam another important relationship as it manages pressure and disputes in the South China Sea.</p>`)}

    ${primerStep(30,"The shortest possible version.",
      `<div class="history-summary-chain">
        <div><b>French colonial rule</b><span>Vietnamese independence movements grow.</span></div>
        <div><b>1946–1954</b><span>Viet Minh defeats France in the First Indochina War.</span></div>
        <div><b>1954</b><span>Vietnam is temporarily divided North and South.</span></div>
        <div><b>1950s–1964</b><span>The U.S. increasingly backs South Vietnam against communist revolution and Northern support.</span></div>
        <div><b>1965–1968</b><span>The U.S. commits large combat forces and conducts a major air war.</span></div>
        <div><b>1968–1973</b><span>Tet reshapes U.S. politics; Nixon withdraws troops while continuing the war by other means.</span></div>
        <div><b>1973</b><span>Paris Peace Accords; direct U.S. military role largely ends.</span></div>
        <div><b>1975–1976</b><span>Saigon falls; Vietnam is reunified under the communist government.</span></div>
        <div><b>1978–1980s</b><span>Vietnam fights in Cambodia and then fights China on land and at sea.</span></div>
        <div><b>1995–today</b><span>U.S.–Vietnam relations normalize and deepen into a Comprehensive Strategic Partnership.</span></div>
       </div>
       <div class="memory"><strong>The central lesson:</strong> the Vietnam War was not one isolated American intervention. It sat inside a much longer Vietnamese history of colonialism, independence, civil and revolutionary conflict, Cold War rivalry, regional wars, and eventually diplomatic realignment.</div>`)}

    <section class="primer-finish">
      <p class="kicker">History primer</p>
      <h3>From colony, to war, to partnership.</h3>
      <p>This primer is deliberately U.S.-centered in its path through the story, but it keeps the Vietnamese, French, Chinese, Soviet, Cambodian, and regional context visible so the American involvement is not treated as if it began in a vacuum.</p>
    </section>

    <section class="entry-section history-sources">
      <h3>Sources and further reading</h3>
      <p>This primer is grounded primarily in the U.S. Department of State's Office of the Historian, the U.S. National Archives, and current State Department material on U.S.–Vietnam relations. The China–Vietnam maritime section also draws on the Council on Foreign Relations.</p>
      <p><a href="https://history.state.gov/countries/vietnam" target="_blank" rel="noopener">U.S. Office of the Historian — Vietnam relations</a><br>
      <a href="https://history.state.gov/milestones/1953-1960/dien-bien-phu" target="_blank" rel="noopener">Dien Bien Phu and the end of French Indochina</a><br>
      <a href="https://www.archives.gov/research/vietnam-war" target="_blank" rel="noopener">U.S. National Archives — Vietnam War resources</a><br>
      <a href="https://2021-2025.state.gov/bureau-of-east-asian-and-pacific-affairs/releases/2025/01/u-s-relations-with-vietnam" target="_blank" rel="noopener">State Department — U.S. relations with Vietnam</a></p>
    </section>
  `;
}

entries.push({
  slug:"vietnam-war-primer",
  title:"The Viet Nam War — A U.S.-Centered Primer",
  category:"Modern History",
  short:"French colonial rule, the American intervention, the fall of Saigon, Vietnam's later wars with China, and today's U.S.–Vietnam partnership.",
  keywords:"Vietnam Viet Nam war French colonial Indochina Ho Chi Minh Viet Minh Dien Bien Phu Geneva South Vietnam North Vietnam Diem Kennedy Johnson Gulf Tonkin Tet Nixon Vietnamization Paris Peace Accords Saigon China Sino-Vietnamese Cambodia Khmer Rouge United States partnership",
  body:historyPrimerBody()
});

const sectionConfig = {
  Glossary: {
    categories: ["All","Words","Idioms","Religion & Meaning","One-Sheet Primers"],
    indexTitle: "Glossary Terms",
    emptyTitle: "Choose a term.",
    emptyText: "Each oak tab opens its definition, history, examples, or diagram here.",
    searchPlaceholder: "Try “promise,” “wild,” “church,” or “triangle”…"
  },
  Grammar: {
    categories: ["All","Grammar","Grammar Terms","Grammar Practice","Word Structure","Verbs"],
    indexTitle: "Grammar Topics",
    emptyTitle: "Choose a grammar topic.",
    emptyText: "Open a lesson, definition, tense chart, morphology guide, or practice set.",
    searchPlaceholder: "Try “gerund,” “mood,” “pluperfect,” or “uncountable”…"
  },
  Languages: {
    categories: ["All","Language & History","Sounds & Phonetics","French","Latin","English History"],
    indexTitle: "Language Topics",
    emptyTitle: "Choose a language topic.",
    emptyText: "Open language history, phonetics, French, Latin, or linguistic reference material.",
    searchPlaceholder: "Try “Teutonic,” “phoneme,” “French,” “Latin,” or “Old English”…"
  },
  History: {
    categories: ["All","Modern History"],
    indexTitle: "History Topics",
    emptyTitle: "Choose a history topic.",
    emptyText: "Open a guided historical primer.",
    searchPlaceholder: "Try “Vietnam,” “Dien Bien Phu,” “Tet,” or “China”…"
  },
  "Economic Isms": {
    categories: ["All","Economic Systems & Ideologies"],
    indexTitle: "Economic Isms",
    emptyTitle: "Choose an economic or political system.",
    emptyText: "Open a baby-step primer on major economic and political ideologies.",
    searchPlaceholder: "Try “capitalism,” “socialism,” “communism,” or “fascism”…"
  },
  Geography: {
    categories: ["All","Political Geography","Cities & Maps"],
    indexTitle: "Geography Topics",
    emptyTitle: "Choose a geography topic.",
    emptyText: "Open a baby-step primer on political geography, regions, or city layouts.",
    searchPlaceholder: "Try “Great Britain,” “Ireland,” “Sussex,” or “Washington”…"
  }
};

const grammarCategories = new Set(["Grammar","Grammar Terms","Grammar Practice","Word Structure","Verbs"]);
const languageCategories = new Set(["Language & History","Sounds & Phonetics","French","Latin","English History"]);
const historyCategories = new Set(["Modern History"]);
const economicIsmCategories = new Set(["Economic Systems & Ideologies"]);
const geographyCategories = new Set(["Political Geography","Cities & Maps"]);

const listEl = document.querySelector("#term-list");
const panelEl = document.querySelector("#entry-panel");
const searchEl = document.querySelector("#search");
const filtersEl = document.querySelector("#filters");
const countEl = document.querySelector("#count");
const tabsEl = document.querySelector("#content-tabs");
const indexTitleEl = document.querySelector("#index-title");

let activeSection = "Glossary";
let activeCategory = "All";
let activeSlug = null;

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}

function sectionForEntry(entry){
  if(grammarCategories.has(entry.category)) return "Grammar";
  if(languageCategories.has(entry.category)) return "Languages";
  if(historyCategories.has(entry.category)) return "History";
  if(economicIsmCategories.has(entry.category)) return "Economic Isms";
  if(geographyCategories.has(entry.category)) return "Geography";
  return "Glossary";
}


function primerTerm(word, text){
  return `<div class="primer-term"><p class="primer-label">A new word</p><h3>${escapeHtml(word)}</h3><p>${escapeHtml(text)}</p></div>`;
}

function primerStep(number, title, body){
  return `<section class="primer-step"><div class="primer-step-number">Step ${String(number).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;
}

function grammarPrimer(){
  return `
  <div class="entry-inner primer">
    <header class="primer-hero">
      <p class="kicker">Start here · baby steps</p>
      <h2>Grammar from zero</h2>
      <p class="lede">No unexplained terminology. We will build a sentence from the ground up, then add the names grammarians use for each part.</p>
      <div class="primer-chain"><span>words</span><b>→</b><span>sentences</span><b>→</b><span>parts</span><b>→</b><span>time</span><b>→</b><span>meaning</span></div>
    </header>

    ${primerStep(1,"What is grammar?",
      `<p>People use language to communicate ideas. <strong>Grammar</strong> is the system that tells us how the pieces of a language fit together.</p>
       ${primerTerm("GRAMMAR","The patterns a language uses to combine words and show how those words relate to one another.")}
       <p>Grammar is not mainly a list of schoolroom rules. It is the machinery that lets <em>dog bites man</em> mean something different from <em>man bites dog</em>.</p>`)}

    ${primerStep(2,"Start with a word.",
      `<p>A sentence is made from smaller pieces. The most obvious piece is a <strong>word</strong>.</p>
       ${primerTerm("WORD","A unit of language that speakers treat as one item, such as dog, quickly, under, or ran.")}
       <p>Words do different jobs. Grammar gives names to those jobs.</p>`)}

    ${primerStep(3,"A sentence says something complete.",
      `${primerTerm("SENTENCE","A complete grammatical unit containing at least one independent clause.")}
       <p>For now, use the simpler idea: a sentence gives you a complete statement, question, command, or exclamation.</p>
       <div class="example"><strong>The dog barked.</strong><br><span class="example-note">A complete statement.</span></div>
       <p>We will define <strong>clause</strong> later, before we need it.</p>`)}

    ${primerStep(4,"Nouns name things.",
      `${primerTerm("NOUN","A word that names a person, place, thing, or idea.")}
       <div class="definition-grid">
         <div class="definition-card"><h3>person</h3><p>teacher, Maria, child</p></div>
         <div class="definition-card"><h3>place</h3><p>London, kitchen, park</p></div>
         <div class="definition-card"><h3>thing</h3><p>dog, table, rain</p></div>
         <div class="definition-card"><h3>idea</h3><p>freedom, hope, justice</p></div>
       </div>
       <p>In <strong>The dog barked</strong>, <em>dog</em> is the noun.</p>`)}

    ${primerStep(5,"Pronouns stand in for nouns.",
      `${primerTerm("PRONOUN","A word used in place of a noun when the listener already knows who or what you mean.")}
       <p><strong>Maria arrived. Maria sat down.</strong> works, but English normally says <strong>Maria arrived. She sat down.</strong></p>
       <p><em>She, he, it, they, we, I, you</em> are pronouns.</p>`)}

    ${primerStep(6,"Verbs tell us what happens—or what is.",
      `${primerTerm("VERB","A word that expresses an action, an event, a state, or being.")}
       <p><strong>The dog barked.</strong> Barked is the verb: it tells us what happened.</p>
       <p>But verbs are not only actions. In <strong>The dog is old</strong>, <em>is</em> is also a verb. It states a condition.</p>
       <div class="primer-chain"><span>dog = noun</span><b>+</b><span>barked = verb</span><b>→</b><span>The dog barked.</span></div>`)}

    ${primerStep(7,"The subject is who or what the sentence is about.",
      `${primerTerm("SUBJECT","The part of a clause that the clause is about—usually the person or thing doing the verb.")}
       ${primerTerm("PREDICATE","Everything the clause says about the subject, beginning with the verb.")}
       <div class="compare-grid">
         <div class="compare-card green"><h3>Subject</h3><p><strong>The old dog</strong></p></div>
         <div class="compare-card"><h3>Predicate</h3><p><strong>ate the sandwich.</strong></p></div>
       </div>
       <p>The whole sentence is: <strong>The old dog ate the sandwich.</strong></p>`)}

    ${primerStep(8,"An object is what the action lands on.",
      `${primerTerm("OBJECT","A noun or noun phrase affected by the verb.")}
       ${primerTerm("DIRECT OBJECT","The thing that directly receives the action.")}
       <p><strong>The dog ate the sandwich.</strong> Ask: <em>ate what?</em> The sandwich. That is the direct object.</p>
       ${primerTerm("INDIRECT OBJECT","The person or thing that receives the direct object.")}
       <p><strong>She gave me a book.</strong> The book is the thing given. <em>Me</em> is the person who received it.</p>`)}

    ${primerStep(9,"Some words describe other words.",
      `${primerTerm("ADJECTIVE","A word that describes a noun.")}
       <p><strong>old dog · blue car · difficult problem</strong></p>
       ${primerTerm("ADVERB","A word that describes a verb, an adjective, or another adverb.")}
       <p><strong>ran quickly · very old · surprisingly well</strong></p>
       <div class="memory"><strong>Adjective:</strong> describes a thing. <strong>Adverb:</strong> usually tells how, when, where, or how much.</div>`)}

    ${primerStep(10,"Small words point, locate, and connect.",
      `${primerTerm("DETERMINER","A word placed with a noun to show which one, whose, or how many.")}
       <p><em>this book · my coat · several people</em></p>
       ${primerTerm("ARTICLE","A kind of determiner: a, an, or the.")}
       ${primerTerm("PREPOSITION","A word showing a relationship in space, time, or logic.")}
       <p><em>under the table · after lunch · despite the rain</em></p>
       ${primerTerm("CONJUNCTION","A word that joins words, phrases, or clauses.")}
       <p><em>and · but · because · although</em></p>`)}

    ${primerStep(11,"Now we can build groups of words.",
      `${primerTerm("PHRASE","A group of words working as one unit but without its own complete subject-and-finite-verb structure.")}
       <p><strong>under the table</strong> is a phrase.</p>
       ${primerTerm("CLAUSE","A group of words containing its own subject and verb.")}
       <p><strong>the dog barked</strong> is a clause: <em>dog</em> is the subject and <em>barked</em> is the verb.</p>
       ${primerTerm("INDEPENDENT CLAUSE","A clause that can stand by itself as a complete sentence.")}
       ${primerTerm("DEPENDENT CLAUSE","A clause that has a subject and verb but cannot stand alone.")}
       <div class="compare-grid">
         <div class="compare-card green"><h3>Independent</h3><p>The dog barked.</p></div>
         <div class="compare-card"><h3>Dependent</h3><p>because the dog barked</p></div>
       </div>`)}

    ${primerStep(12,"Verbs place events in time.",
      `${primerTerm("TENSE","The grammatical way a language locates an event relative to time.")}
       <p>English most clearly marks <strong>present</strong> and <strong>past</strong> on the verb itself. Future meaning is usually built with helper words such as <em>will</em>.</p>
       ${primerTerm("ASPECT","The way a speaker views the shape of an event in time: simply, as ongoing, as completed relative to another point, or as ongoing up to another point.")}
       <div class="table-scroll"><table><thead><tr><th></th><th>Past</th><th>Present</th><th>Future construction</th></tr></thead><tbody>
       <tr><td>Simple</td><td>I ate</td><td>I eat</td><td>I will eat</td></tr>
       <tr><td>Progressive</td><td>I was eating</td><td>I am eating</td><td>I will be eating</td></tr>
       <tr><td>Perfect</td><td>I had eaten</td><td>I have eaten</td><td>I will have eaten</td></tr>
       <tr><td>Perfect progressive</td><td>I had been eating</td><td>I have been eating</td><td>I will have been eating</td></tr>
       </tbody></table></div>`)}

    ${primerStep(13,"The pluperfect is a past inside the past.",
      `${primerTerm("PLUPERFECT","Another name for the past perfect: had + past participle. It marks an event already completed before another past event.")}
       <div class="primer-chain"><span>had eaten</span><b>→</b><span>she arrived</span><b>→</b><span>NOW</span></div>
       <p><strong>I had eaten before she arrived.</strong> Both events are past, but the eating is earlier.</p>`)}

    ${primerStep(14,"Mood tells us how the speaker presents the event.",
      `${primerTerm("MOOD","A grammatical way of presenting an action as fact, command, wish, demand, or hypothetical situation.")}
       <div class="definition-grid">
        <div class="definition-card"><h3>Indicative</h3><p>Ordinary statements and questions: <em>She is here.</em></p></div>
        <div class="definition-card"><h3>Imperative</h3><p>Commands and requests: <em>Come here.</em></p></div>
        <div class="definition-card"><h3>Subjunctive</h3><p>Wishes, demands, and unreal situations: <em>If I were you…</em></p></div>
       </div>
       <p><strong>Tense asks when. Mood asks how the event is being presented.</strong></p>`)}

    ${primerStep(15,"Voice changes the viewpoint.",
      `${primerTerm("VOICE","The grammatical choice between focusing on the doer of an action or on the thing receiving the action.")}
       <div class="compare-grid">
        <div class="compare-card green"><h3>Active voice</h3><p><strong>Maria wrote the letter.</strong><br>Maria does the action.</p></div>
        <div class="compare-card"><h3>Passive voice</h3><p><strong>The letter was written by Maria.</strong><br>The letter becomes the subject.</p></div>
       </div>`)}

    ${primerStep(16,"A verb can change shape and do a different job.",
      `${primerTerm("FINITE VERB","A verb form that anchors a clause by carrying tense or working with the clause's subject.")}
       ${primerTerm("NON-FINITE VERB","A verb form that does not carry the clause's tense by itself.")}
       ${primerTerm("INFINITIVE","The base verb form, often introduced by to: to run, to think, to leave.")}
       ${primerTerm("PARTICIPLE","A verb form used to build compound verb forms or to act like an adjective.")}
       ${primerTerm("GERUND","An -ing verb form doing a noun's job.")}
       <div class="compare-grid">
        <div class="compare-card green"><h3>Gerund</h3><p><strong>Swimming</strong> is fun.<br><em>Swimming</em> is the subject, so it is doing a noun's job.</p></div>
        <div class="compare-card"><h3>Present participle</h3><p>John is <strong>swimming</strong>.<br><em>Swimming</em> is part of the verb phrase.</p></div>
       </div>`)}

    ${primerStep(17,"English decides whether nouns are countable.",
      `${primerTerm("COUNTABLE NOUN","A noun English treats as separate units: one chair, two chairs.")}
       ${primerTerm("UNCOUNTABLE NOUN","A noun English treats as a mass or quantity rather than separate units.")}
       <p><strong>advice, information, furniture, equipment, traffic</strong> are normally uncountable.</p>
       <div class="compare-grid">
        <div class="compare-card green"><h3>Natural</h3><p>some advice<br>two pieces of advice</p></div>
        <div class="compare-card grammar-wrong"><h3>Not standard</h3><p>an advice<br>two advices</p></div>
       </div>`)}

    ${primerStep(18,"Words themselves are built from meaningful pieces.",
      `${primerTerm("MORPHEME","The smallest part of a word that still carries meaning or grammatical information.")}
       ${primerTerm("ROOT","The central morpheme carrying the main meaning.")}
       ${primerTerm("AFFIX","A morpheme attached to a root.")}
       <div class="morph-row"><span class="morph-part"><strong>un</strong><small>prefix</small></span><b class="morph-plus">+</b><span class="morph-part"><strong>happy</strong><small>root</small></span><b class="morph-plus">+</b><span class="morph-part"><strong>ness</strong><small>suffix</small></span></div>
       ${primerTerm("PREFIX","An affix placed before the root.")}
       ${primerTerm("SUFFIX","An affix placed after the root.")}
       ${primerTerm("INFIX","An affix inserted inside a root. Ordinary English grammar has very few true infixes.")}
       ${primerTerm("CIRCUMFIX","An affix whose two parts wrap around a root. German ge-…-t in forms such as gespielt is a familiar example.")}
       <p>This is <strong>morphology</strong>: the study of how words are built from meaningful pieces.</p>`)}

    ${primerStep(19,"Put the whole machine together.",
      `<div class="primer-sentence"><span class="pword"><b>The</b><small>article</small></span><span class="pword"><b>old</b><small>adjective</small></span><span class="pword"><b>dog</b><small>noun · subject</small></span><span class="pword"><b>quickly</b><small>adverb</small></span><span class="pword"><b>ate</b><small>verb</small></span><span class="pword"><b>the</b><small>article</small></span><span class="pword"><b>sandwich.</b><small>noun · object</small></span></div>
       <p>You can now describe the sentence at several levels: individual word jobs, subject and predicate, verb and object, phrase and clause structure, and the verb's time and viewpoint.</p>
       <div class="memory"><strong>The point of the terminology:</strong> each new name gives you a handle for one part of a system you already use every day.</div>`)}

    <section class="primer-finish">
      <p class="kicker">You now have the map</p>
      <h3>Use the oak index for the close-up view.</h3>
      <p>The entries at left expand each of these ideas with examples, tables, practice questions, and quizzes.</p>
    </section>
  </div>`;
}

function languagesPrimer(){
  return `
  <div class="entry-inner primer">
    <header class="primer-hero">
      <p class="kicker">Start here · baby steps</p>
      <h2>How English, French, and German came to be</h2>
      <p class="lede">We will start before any of the three languages existed. Every new historical or linguistic term is defined before we use it.</p>
      <div class="primer-chain"><span>older speech</span><b>→</b><span>small changes</span><b>→</b><span>dialects</span><b>→</b><span>new languages</span></div>
    </header>

    ${primerStep(1,"Languages change because people keep speaking them.",
      `<p>No committee has to decide that a language will change. Pronunciation, vocabulary, and grammar drift as one generation learns from another.</p>
       ${primerTerm("DIALECT","A variety of a language used by a particular region or group. Dialects can differ in pronunciation, vocabulary, and grammar.")}
       <p>If dialects remain separated for long enough, they can become different enough to count as separate languages.</p>`)}

    ${primerStep(2,"Languages can be related like members of a family.",
      `${primerTerm("LANGUAGE FAMILY","A group of languages descended from a shared earlier language.")}
       ${primerTerm("ANCESTOR LANGUAGE","An earlier language from which later languages developed.")}
       ${primerTerm("DESCENDANT LANGUAGE","A later language that developed from an ancestor language.")}
       <p>This is historical descent, not borrowing. English can borrow a French word without becoming a descendant of French.</p>`)}

    ${primerStep(3,"Sometimes the ancestor was never written down.",
      `${primerTerm("PROTO-","A prefix meaning first, earliest, or ancestral. In historical linguistics it usually marks a reconstructed ancestral language.")}
       ${primerTerm("RECONSTRUCTED LANGUAGE","An earlier language inferred by systematically comparing related later languages, rather than known from a complete written record.")}
       <p><strong>Proto-Germanic</strong> therefore means the reconstructed ancestor of the Germanic languages. It does not mean “primitive German.”</p>`)}

    ${primerStep(4,"Go back far enough and all three enter one enormous family.",
      `${primerTerm("PROTO-INDO-EUROPEAN","The reconstructed ancestral language of the Indo-European language family.")}
       ${primerTerm("INDO-EUROPEAN","A very large language family including Germanic, Romance, Celtic, Slavic, Greek, Indo-Iranian, and several other branches.")}
       <div class="primer-tree">
         <div class="primer-tree-root">Proto-Indo-European</div>
         <div class="primer-tree-branches">
           <div><strong>Germanic branch</strong><span>→ English and German</span></div>
           <div><strong>Italic branch</strong><span>→ Latin → French</span></div>
         </div>
       </div>
       <p>English and German are therefore closer relatives to each other than either is to French. French is related too, but through a different branch.</p>`)}

    ${primerStep(5,"The Germanic road begins with Proto-Germanic.",
      `${primerTerm("GERMANIC","The branch of Indo-European that contains English, German, Dutch, the Scandinavian languages, and several extinct languages.")}
       ${primerTerm("PROTO-GERMANIC","The reconstructed common ancestor of all Germanic languages.")}
       <p>Proto-Germanic changed into several regional varieties. One major group is called <strong>West Germanic</strong>.</p>
       ${primerTerm("WEST GERMANIC","The Germanic branch from which English, German, Dutch, Frisian, and related varieties developed.")}
       <div class="primer-chain"><span>Proto-Indo-European</span><b>→</b><span>Proto-Germanic</span><b>→</b><span>West Germanic</span></div>`)}

    ${primerStep(6,"English begins when West Germanic speech reaches Britain.",
      `<p>From roughly the fifth century AD onward, Germanic-speaking groups traditionally called <strong>Angles, Saxons, and Jutes</strong> settled in Britain.</p>
       <p>Their related West Germanic dialects developed in Britain into what we call <strong>Old English</strong>.</p>
       ${primerTerm("OLD ENGLISH","The form of English used roughly from the fifth century to the Norman Conquest of 1066.")}
       <p>Old English is not merely modern English with old spelling. Its grammar and vocabulary are different enough that an untrained modern reader usually cannot understand it.</p>`)}

    ${primerStep(7,"Old English had more endings than modern English.",
      `${primerTerm("INFLECTION","A change in a word's form that shows grammatical information such as number, case, tense, or comparison.")}
       <p>Old English used many endings to show what job a noun or adjective was doing. Modern English has lost most of those endings and relies more heavily on word order.</p>
       <div class="memory"><strong>Earlier English:</strong> more endings. <strong>Modern English:</strong> fewer endings, stricter word order.</div>`)}

    ${primerStep(8,"Viking settlement adds a second Germanic layer.",
      `<p>Speakers of <strong>Old Norse</strong>, another Germanic language, settled in parts of Britain during the Viking Age.</p>
       ${primerTerm("BORROWING","Taking a word or expression from another language and using it in your own.")}
       <p>English borrowed many Norse words, including <strong>sky, egg, skin, they, them, their</strong>.</p>
       <p>Because Old English and Old Norse were related languages, their contact also helped reshape everyday English.</p>`)}

    ${primerStep(9,"1066 brings an enormous French layer into English.",
      `<p>In 1066, William the Conqueror and his Norman forces took control of England. The ruling class used varieties of French.</p>
       <p>English remained the language of most of the population, but thousands of French words entered it, especially in government, law, war, food, fashion, and culture.</p>
       <div class="primer-chain"><span>Old English</span><b>+</b><span>Old Norse</span><b>+</b><span>Norman French</span><b>→</b><span>Middle English</span></div>`)}

    ${primerStep(10,"Middle English is recognizably on the way to modern English.",
      `${primerTerm("MIDDLE ENGLISH","The form of English used from about 1066 to around 1500.")}
       <p>During this period many old grammatical endings disappeared. French vocabulary became deeply embedded. By the time of Chaucer in the late 1300s, the language looks strange to us but is no longer wholly alien.</p>
       <div class="example"><strong>Whan that Aprille with his shoures soote</strong><br><span class="example-note">Chaucer: roughly, “When April with its sweet showers…”</span></div>`)}

    ${primerStep(11,"Printing and a great sound change help create Early Modern English.",
      `${primerTerm("EARLY MODERN ENGLISH","The form of English used roughly from 1500 to 1700—the language of Shakespeare and the King James Bible.")}
       ${primerTerm("GREAT VOWEL SHIFT","A major series of pronunciation changes affecting the long vowels of English, beginning in the late Middle English period and continuing into Early Modern English.")}
       <p>Printing encouraged spelling to become more fixed while pronunciation kept changing. That is one reason English spelling often preserves an older pronunciation.</p>`)}

    ${primerStep(12,"Modern English keeps adding layers.",
      `${primerTerm("MODERN ENGLISH","English from roughly 1700 to the present.")}
       <p>English spread around the world, producing many standard national and regional varieties. Science, trade, empire, migration, and popular culture continuously added vocabulary.</p>
       <p>Its family identity did not change: <strong>English remains a Germanic language even though a very large share of its learned vocabulary came from French, Latin, and Greek.</strong></p>`)}

    ${primerStep(13,"Now take the road that leads to French.",
      `${primerTerm("LATIN","The language of ancient Rome and the Roman world.")}
       <p>French did not grow out of the polished literary Latin of Cicero's books alone. It developed from the everyday Latin spoken across the Roman Empire.</p>
       ${primerTerm("VULGAR LATIN","A convenient name for the everyday spoken varieties of Latin. Here vulgar means common or ordinary, not obscene.")}
       ${primerTerm("ROMANCE LANGUAGES","The languages descended from spoken Latin, including French, Spanish, Portuguese, Italian, Romanian, and others.")}
       <div class="primer-chain"><span>Proto-Indo-European</span><b>→</b><span>Italic</span><b>→</b><span>Latin</span><b>→</b><span>Romance languages</span></div>`)}

    ${primerStep(14,"Before French, there was Roman Gaul.",
      `${primerTerm("GAUL","The Roman name for a large region covering most of modern France and nearby areas.")}
       <p>Before Roman rule, much of Gaul spoke Celtic languages. Roman conquest spread Latin. Over centuries, local spoken Latin changed in its own regional direction.</p>
       ${primerTerm("GALLO-ROMANCE","The group of Romance varieties that developed in ancient Gaul and nearby regions.")}
       <p>French grew from northern Gallo-Romance speech.</p>`)}

    ${primerStep(15,"The Franks leave a Germanic imprint on developing French.",
      `${primerTerm("FRANKS","A Germanic-speaking people who became politically dominant in much of former Roman Gaul after the Western Roman Empire weakened.")}
       <p>The population continued speaking forms of Latin that were becoming Romance languages, but Frankish contact contributed words, names, and some sound patterns.</p>
       <p>The result was still a <strong>Romance</strong> language, because its basic historical descent remained from Latin.</p>`)}

    ${primerStep(16,"Old French becomes a recognizable language.",
      `${primerTerm("OLD FRENCH","The group of northern French Romance varieties used roughly from the 9th through the 13th centuries.")}
       <p>One of the earliest famous Romance texts, the <strong>Oaths of Strasbourg</strong> of 842, shows speech already far removed from Classical Latin.</p>
       <p>Northern varieties are often called the <strong>langues d'oïl</strong>, after their word for “yes.” Southern varieties developed differently and included Occitan.</p>`)}

    ${primerStep(17,"Middle French moves toward the modern language.",
      `${primerTerm("MIDDLE FRENCH","French of roughly the 14th through 16th centuries, between Old French and the modern standard.")}
       <p>Many old noun endings had already disappeared. Spelling, vocabulary, and grammar continued to change. The expanding royal administration and printing helped promote more uniform written forms.</p>
       <p>By the 1600s, the language enters the period normally called <strong>Modern French</strong>.</p>`)}

    ${primerStep(18,"French changed farther from Latin than some Romance relatives did.",
      `<p>Sound changes shortened and reshaped many inherited Latin words.</p>
       <div class="table-scroll"><table><thead><tr><th>Latin source</th><th>French</th><th>Meaning</th></tr></thead><tbody>
       <tr><td>aquam</td><td>eau</td><td>water</td></tr>
       <tr><td>noctem</td><td>nuit</td><td>night</td></tr>
       <tr><td>caballum</td><td>cheval</td><td>horse</td></tr>
       <tr><td>festam</td><td>fête</td><td>feast / celebration</td></tr>
       </tbody></table></div>
       <p>These are not random replacements. They are the results of long chains of regular sound change.</p>`)}

    ${primerStep(19,"German takes the other West Germanic road.",
      `<p>English and German share the West Germanic ancestor, but the speech varieties that became German remained on the European continent.</p>
       ${primerTerm("OLD HIGH GERMAN","A group of early continental West Germanic varieties, conventionally dated roughly AD 750–1050, ancestral to later High German varieties.")}
       ${primerTerm("HIGH GERMAN","German varieties from the central and southern uplands. High refers historically to elevation, not prestige.")}
       <p>One major set of consonant changes in these southern and central varieties helped separate German from relatives such as English and Dutch.</p>`)}

    ${primerStep(20,"A sound shift helps explain English–German pairs.",
      `${primerTerm("HIGH GERMAN CONSONANT SHIFT","A historical set of consonant changes that affected the ancestors of High German but not English in the same way.")}
       <div class="table-scroll"><table><thead><tr><th>English</th><th>German</th><th>What you can notice</th></tr></thead><tbody>
       <tr><td>apple</td><td>Apfel</td><td>p → pf in German</td></tr>
       <tr><td>two</td><td>zwei</td><td>t → ts sound, written z</td></tr>
       <tr><td>make</td><td>machen</td><td>k → ch in this environment</td></tr>
       </tbody></table></div>
       <p>The details vary by position and dialect, but the larger lesson is simple: systematic sound changes can turn one ancestral vocabulary into visibly different daughter languages.</p>`)}

    ${primerStep(21,"Middle High German is the language of the medieval period.",
      `${primerTerm("MIDDLE HIGH GERMAN","The High German varieties conventionally dated about 1050–1350.")}
       <p>This is the language of much medieval German literature, including the <em>Nibelungenlied</em> and courtly poetry.</p>
       <p>There was not yet one single spoken German used everywhere. Regional varieties remained strong.</p>`)}

    ${primerStep(22,"Early New High German brings the language closer to today's standard.",
      `${primerTerm("EARLY NEW HIGH GERMAN","A conventional name for German from roughly 1350 to 1650, during the transition toward modern written German.")}
       <p>Printing increased the circulation of written forms. Martin Luther's 16th-century Bible translation was especially influential because it reached a huge audience, but he did not single-handedly invent Standard German.</p>
       <p>Writers and printers increasingly selected forms that could be understood across regional boundaries.</p>`)}

    ${primerStep(23,"Modern German is a standard language sitting above many dialects.",
      `${primerTerm("STANDARD GERMAN","The widely taught and written standard form of German, used across Germany, Austria, Switzerland, and elsewhere with national variation.")}
       <p>Regional German dialects did not vanish. Some differ considerably from the standard and from one another.</p>
       <p>Modern Standard German belongs to the High German side of the dialect landscape, while Low German varieties did not undergo the High German consonant shift to the same extent.</p>`)}

    ${primerStep(24,"Now put the three histories next to each other.",
      `<div class="language-road-grid">
       <div class="language-road"><h3>English</h3><p>Proto-Indo-European</p><b>↓</b><p>Proto-Germanic</p><b>↓</b><p>West Germanic</p><b>↓</b><p>Old English</p><b>↓</b><p>Middle English</p><b>↓</b><p>Modern English</p></div>
       <div class="language-road"><h3>German</h3><p>Proto-Indo-European</p><b>↓</b><p>Proto-Germanic</p><b>↓</b><p>West Germanic</p><b>↓</b><p>Old High German</p><b>↓</b><p>Middle High German</p><b>↓</b><p>Modern German</p></div>
       <div class="language-road"><h3>French</h3><p>Proto-Indo-European</p><b>↓</b><p>Italic</p><b>↓</b><p>Latin</p><b>↓</b><p>Gallo-Romance</p><b>↓</b><p>Old French</p><b>↓</b><p>Modern French</p></div>
       </div>
       <div class="memory"><strong>The central fact:</strong> English and German are Germanic siblings. French is a Romance language descended from Latin. English later borrowed enormously from French and Latin, but borrowing vocabulary did not change its Germanic family ancestry.</div>`)}

    ${primerStep(25,"One last idea: related words can preserve the family tree.",
      `${primerTerm("COGNATE","A word related to a word in another language because both descend from the same older word.")}
       <div class="table-scroll"><table><thead><tr><th>English</th><th>German</th><th>Relationship</th></tr></thead><tbody>
       <tr><td>father</td><td>Vater</td><td>Germanic cognates</td></tr>
       <tr><td>water</td><td>Wasser</td><td>Germanic cognates</td></tr>
       <tr><td>house</td><td>Haus</td><td>Germanic cognates</td></tr>
       <tr><td>name</td><td>Name</td><td>Germanic cognates</td></tr>
       </tbody></table></div>
       <p>A cognate is not merely a word that looks similar. The similarity has to come from shared historical ancestry.</p>`)}

    <section class="primer-finish">
      <p class="kicker">You now have the family tree</p>
      <h3>Use the oak index to zoom in.</h3>
      <p>The Languages entries at left contain the English and Latin timelines, French diacritics, phonetics, Germanic versus Teutonic, collocation, and other close-up topics.</p>
    </section>
  </div>`;
}


function economicIsmsPrimerBody(){
  return `
    ${primerStep(1,"Start before the isms: what is an economy?",
      `${primerTerm("ECONOMY","The system through which a society produces, distributes, exchanges, and consumes goods and services.")}
       <p>Every economic system has to answer some basic questions: <strong>What gets produced? Who controls productive resources? Who does the work? How are prices or quantities decided? Who receives the income and output?</strong></p>
       <p>The “isms” differ mainly in how they answer those questions—and in the political ideas they attach to those answers.</p>`)}

    ${primerStep(2,"What are the means of production?",
      `${primerTerm("MEANS OF PRODUCTION","The resources and productive assets used to make goods and services: land, factories, machines, mines, infrastructure, and other productive equipment.")}
       <p>This term does <strong>not</strong> normally mean your toothbrush, shirt, or kitchen chair. The argument is about productive property: assets used to organize production on a larger scale.</p>`)}

    ${primerStep(3,"What is capital?",
      `${primerTerm("CAPITAL","Assets used to produce more goods or services or to generate income: for example machinery, buildings, equipment, and invested financial resources.")}
       <p>A factory can be capital. A delivery truck used by a business can be capital. Money invested to finance production can function as capital.</p>
       <p><strong>Capitalism</strong> gets its name from the central role of privately controlled capital.</p>`)}

    ${primerStep(4,"Ownership and control are separate questions.",
      `${primerTerm("PRIVATE OWNERSHIP","Ownership by individuals, families, or private organizations rather than by the state or the public collectively.")}
       ${primerTerm("SOCIAL OWNERSHIP","An umbrella term for productive assets controlled collectively or socially rather than by a separate private owning class. The exact form can vary: worker ownership, cooperative ownership, public ownership, community ownership, and others.")}
       ${primerTerm("STATE OWNERSHIP","Ownership by a government. State ownership can exist in many kinds of political and economic systems; by itself it does not settle whether an economy is socialist.")}
       <p>One of the biggest sources of confusion is treating <strong>social ownership</strong> and <strong>state ownership</strong> as automatic synonyms. Some socialist theories accept state ownership; others emphasize worker or cooperative control instead.</p>`)}

    ${primerStep(5,"How can an economy decide what gets produced?",
      `${primerTerm("MARKET","A system of exchange in which buyers and sellers interact, and prices help coordinate what is produced and consumed.")}
       ${primerTerm("ECONOMIC PLANNING","Deliberate coordination of production, investment, or distribution through institutions rather than relying primarily on decentralized market prices.")}
       <p>Markets and planning are not always all-or-nothing opposites. Real economies often use both.</p>`)}

    ${primerStep(6,"Profit and wages are two more pieces.",
      `${primerTerm("PROFIT","Revenue left after the relevant costs of producing and selling a good or service are paid.")}
       ${primerTerm("WAGE LABOR","Work performed in exchange for wages or salary.")}
       <p>In a typical capitalist firm, owners supply or control capital, employees sell their labor for wages, and the owners have a claim on profits after costs.</p>`)}

    ${primerStep(7,"A crucial warning: these labels describe different kinds of things.",
      `<p><strong>Capitalism</strong> and <strong>socialism</strong> are primarily ways of talking about economic ownership and control.</p>
       <p><strong>Communism</strong> is both a political-economic theory and the name historically attached to movements and states claiming that tradition.</p>
       <p><strong>Democratic socialism</strong> explicitly combines socialist economic aims with democratic political commitments.</p>
       <p><strong>Fascism</strong> is primarily a political ideology and form of authoritarian nationalism. It has economic doctrines and practices, but it is not simply another ownership formula sitting on the same line as capitalism and socialism.</p>`)}

    ${primerStep(8,"Capitalism: private control of most productive property.",
      `${primerTerm("CAPITALISM","An economic system in which most productive assets are privately owned or controlled, markets play a major role in allocating resources, wage labor is common, and private owners may earn profits from investment.")}
       <p>Capitalism does <strong>not</strong> require the government to own nothing or regulate nothing. Modern capitalist economies have taxes, public schools, central banks, regulations, social insurance, and government-owned services to varying degrees.</p>
       <div class="memory"><strong>Core idea:</strong> most productive capital remains privately owned, and market exchange remains a central coordinating mechanism.</div>`)}

    ${primerStep(9,"Capitalism is not the same thing as democracy.",
      `${primerTerm("POLITICAL DEMOCRACY","A political system in which citizens have meaningful mechanisms for choosing and replacing rulers and participating in public decision-making, usually through elections, rights, institutions, and political competition.")}
       <p>A country can have a largely capitalist economy and democratic government. A country can also have a largely capitalist economy under authoritarian government.</p>
       <p>So <strong>capitalism answers an economic question; democracy answers a political question.</strong> They often coexist, but one does not logically define the other.</p>`)}

    ${primerStep(10,"Socialism is a broad family, not one single blueprint.",
      `${primerTerm("SOCIALISM","A broad tradition arguing that the major means of production should be under social or collective control rather than predominantly controlled by a separate class of private capital owners.")}
       <p>There are many socialist traditions. They disagree over markets, planning, the role of the state, worker cooperatives, elections, revolution, reform, and how much private enterprise should remain.</p>
       <p>That breadth is why the sentence <strong>“socialism means the government owns everything”</strong> is too crude to serve as a general definition.</p>`)}

    ${primerStep(11,"Social ownership can take several forms.",
      `<div class="definition-grid">
        <div class="definition-card"><h3>Public ownership</h3><p>A government owns an enterprise on behalf of the public.</p></div>
        <div class="definition-card"><h3>Worker cooperative</h3><p>The workers jointly own or govern the enterprise.</p></div>
        <div class="definition-card"><h3>Community ownership</h3><p>A local or broader community controls an asset.</p></div>
        <div class="definition-card"><h3>Social funds</h3><p>Investment assets can be held collectively through public or social institutions.</p></div>
       </div>
       <p>Different socialist schools prefer different combinations. Some retain substantial markets; others prefer much more planning.</p>`)}

    ${primerStep(12,"Socialism is not automatically the same as central planning.",
      `${primerTerm("MARKET SOCIALISM","A family of socialist proposals in which firms or productive assets are socially or cooperatively owned while markets still help set prices and allocate many goods.")}
       <p>Other socialist models rely much more heavily on planning. The point is that <strong>socialism is fundamentally about social control of productive assets</strong>; the exact mechanism of coordination is a separate question.</p>`)}

    ${primerStep(13,"Communism is a specific branch of the broader socialist tradition.",
      `${primerTerm("COMMUNISM","A political-economic tradition associated especially with Marx and later movements that seeks to overcome capitalist class ownership and ultimately establish a classless social order based on common or social control of productive resources.")}
       <p>In classical Marxist theory, the final communist society is not merely “a very large government.” The theoretical endpoint is a society in which class divisions have disappeared and the coercive state, as a separate class power, is expected eventually to disappear as well.</p>
       <p>That theoretical endpoint is different from the governments historically called <strong>communist states</strong>.</p>`)}

    ${primerStep(14,"Communist theory and 20th-century communist states are not the same definition.",
      `${primerTerm("COMMUNIST STATE","A conventional historical label for a state governed by a communist party, usually within the Marxist-Leninist tradition, claiming to be building socialism and ultimately communism.")}
       <p>The Soviet Union, Mao-era China, and other communist-party states generally used extensive state ownership and economic planning and were governed by one-party political systems.</p>
       <p>Supporters and critics disagree over how those states should be related to the theoretical communist endpoint. A clean primer therefore keeps two ideas separate: <strong>communism as a theory/goal</strong> and <strong>communist-party states as historical political systems</strong>.</p>`)}

    ${primerStep(15,"Democratic socialism is absolutely an established term.",
      `${primerTerm("DEMOCRATIC SOCIALISM","A socialist tradition that insists socialist economic change should be combined with political democracy and, in many versions, with democratic control inside economic institutions as well.")}
       <p>The term has been used for generations and remains current in political science and active political organizations. It is not merely a temporary campaign slogan.</p>
       <p>Its exact meaning is not perfectly fixed. Some democratic socialists emphasize worker ownership, some public ownership, some market socialism, and some a mixture. What joins them is the attempt to distinguish democratic forms of socialism from authoritarian one-party models.</p>`)}

    ${primerStep(16,"Democratic socialism does not simply mean “capitalism plus elections.”",
      `<p>Political democracy alone does not make an economy socialist. A democratic socialist position normally argues that democracy should extend farther into economic ownership or decision-making.</p>
       ${primerTerm("ECONOMIC DEMOCRACY","The idea that workers, citizens, communities, or the public should have meaningful democratic control over major economic decisions and productive institutions.")}
       <p>Different democratic socialists propose different institutional designs, so the label tells you a direction of thought—not one universal policy checklist.</p>`)}

    ${primerStep(17,"Now distinguish democratic socialism from social democracy.",
      `${primerTerm("SOCIAL DEMOCRACY","In common modern usage, a political tradition that generally accepts a predominantly capitalist market economy while using democratic government, regulation, public services, labor protections, and social insurance to shape its outcomes.")}
       <div class="compare-grid">
        <div class="compare-card"><h3>Democratic socialism</h3><p>Usually seeks some deeper move toward social or democratic ownership/control of major productive assets.</p></div>
        <div class="compare-card green"><h3>Modern social democracy</h3><p>Usually retains a predominantly capitalist ownership structure while regulating markets and building a larger welfare state.</p></div>
       </div>
       <p><strong>But the boundary is historically messy.</strong> Scholars and political movements have sometimes used the two terms interchangeably, and their meanings have shifted over time.</p>`)}

    ${primerStep(18,"Fascism belongs in the lesson—but with a warning label.",
      `${primerTerm("FASCISM","An authoritarian, ultranationalist political ideology that emerged in early-20th-century Europe and places the nation above individual political rights, rejects liberal democratic pluralism, and historically opposed both socialism/communism and liberal democracy.")}
       <p>Fascism is therefore <strong>not best defined as an economic ownership system</strong>. Its central claims concern nation, authority, political unity, leadership, hierarchy, and the suppression of opposition.</p>
       <p>Economic organization under fascist regimes was made subordinate to those political goals.</p>`)}

    ${primerStep(19,"What happened to private property under historical fascism?",
      `<p>Historical fascist regimes did <strong>not generally abolish private business ownership in the communist sense</strong>. Private firms and profits could continue.</p>
       <p>At the same time, fascist governments intervened heavily: they directed priorities, controlled labor organizations, restricted strikes, promoted rearmament and economic self-sufficiency, and expected private economic actors to serve state and national objectives.</p>
       <div class="memory"><strong>So “fascism = capitalism” and “fascism = socialism” are both inadequate shortcuts.</strong> The historical pattern combined private ownership with authoritarian state direction in service of nationalist political goals.</div>`)}

    ${primerStep(20,"Corporatism does not mean rule by modern corporations.",
      `${primerTerm("CORPORATISM","A political-economic arrangement that organizes society into officially recognized occupational or sectoral groups—such as employers and workers in an industry—and gives those groups roles in state-supervised decision-making.")}
       <p>Italian Fascism promoted a <strong>corporatist</strong> model intended to replace independent class conflict with state-supervised organizations representing employers and workers.</p>
       <p>The word comes from the idea of society as a <em>body</em> made of organized parts. It does not simply mean “big companies control the government,” which is a different modern use of the word <em>corporate</em>.</p>`)}

    ${primerStep(21,"Most actual economies are mixed.",
      `${primerTerm("MIXED ECONOMY","An economy combining private enterprise and markets with government regulation, taxation, public spending, social programs, and sometimes public ownership.")}
       <p>Nearly every modern national economy mixes mechanisms. The useful question is therefore often not <strong>“Is there any government involvement?”</strong> but rather <strong>who owns what, who controls what, how prices and investment are coordinated, and how political power is organized.</strong></p>`)}

    ${primerStep(22,"Put the five labels on separate questions.",
      `<div class="table-scroll"><table><thead><tr><th>Term</th><th>Core economic idea</th><th>Political structure built into the definition?</th></tr></thead><tbody>
       <tr><td><strong>Capitalism</strong></td><td>Predominantly private productive ownership; markets and profit play central roles.</td><td>No single political regime follows automatically.</td></tr>
       <tr><td><strong>Socialism</strong></td><td>Major productive resources under social/collective control.</td><td>Varies greatly by socialist tradition.</td></tr>
       <tr><td><strong>Communism</strong></td><td>Common/social control aimed ultimately at a classless order; historical communist states used extensive state ownership/planning.</td><td>The theory and historical one-party communist states must be distinguished.</td></tr>
       <tr><td><strong>Democratic socialism</strong></td><td>Socialist economic aims combined with democratic economic control.</td><td>Yes: political democracy is central to the label.</td></tr>
       <tr><td><strong>Fascism</strong></td><td>No single ownership formula; historically private ownership often remained under strong state direction.</td><td>Yes: authoritarian ultranationalism is central.</td></tr>
       </tbody></table></div>`)}

    ${primerStep(23,"The fastest memory test.",
      `<div class="history-summary-chain">
        <div><b>Capitalism</b><span>Who owns productive capital? Mostly private owners.</span></div>
        <div><b>Socialism</b><span>Who should control major productive assets? Society collectively, in one form or another.</span></div>
        <div><b>Communism</b><span>What is the ultimate Marxist horizon? A classless order based on common control; historical communist states are a separate empirical category.</span></div>
        <div><b>Democratic socialism</b><span>How should socialism be governed? Democratically, politically and often economically.</span></div>
        <div><b>Fascism</b><span>What is supreme? The authoritarian nationalist state or national community—not an abstract ownership formula.</span></div>
       </div>
       <div class="memory"><strong>Best habit:</strong> when someone uses one of these labels, ask what they mean by <em>ownership, markets, planning, political power, and democracy</em>. The label alone often hides important differences.</div>`)}

    <section class="primer-finish">
      <p class="kicker">Economic & political systems primer</p>
      <h3>Now the “isms” are separate concepts instead of interchangeable insults.</h3>
      <p>The key is to distinguish economic ownership, economic coordination, and political authority. They overlap, but they are not the same axis.</p>
    </section>

    <section class="entry-section history-sources">
      <h3>Sources and further reading</h3>
      <p>The definitions here use neutral reference sources and distinguish theoretical ideals from historical regimes.</p>
      <p>
        <a href="https://www.imf.org/en/publications/fandd/issues/series/back-to-basics/capitalism" target="_blank" rel="noopener">IMF — What Is Capitalism?</a><br>
        <a href="https://plato.stanford.edu/entries/socialism/" target="_blank" rel="noopener">Stanford Encyclopedia of Philosophy — Socialism</a><br>
        <a href="https://www.rep.routledge.com/articles/thematic/communism/v-1" target="_blank" rel="noopener">Routledge Encyclopedia of Philosophy — Communism</a><br>
        <a href="https://encyclopedia.ushmm.org/content/en/article/fascism-1" target="_blank" rel="noopener">U.S. Holocaust Memorial Museum — Fascism</a><br>
        <a href="https://sk.sagepub.com/ency/edvol/embed/the-encyclopedia-of-political-science/chpt/democratic-socialism" target="_blank" rel="noopener">SAGE Encyclopedia of Political Science — Democratic Socialism</a><br>
        <a href="https://www.rep.routledge.com/articles/thematic/social-democracy/v-1" target="_blank" rel="noopener">Routledge Encyclopedia of Philosophy — Social Democracy</a>
      </p>
    </section>
  `;
}

entries.push({
  slug:"economic-isms-primer",
  title:"Capitalism, Socialism, Communism, Democratic Socialism & Fascism",
  category:"Economic Systems & Ideologies",
  short:"A baby-step primer on what these terms actually describe, where they overlap, and where they do not.",
  keywords:"capitalism socialism communism democratic socialism social democracy fascism corporatism markets private property social ownership state ownership means production capital profit planning democracy ideology economics isms",
  body:economicIsmsPrimerBody()
});



function ukIrelandTeachingMap(){
  return `
    <figure class="teaching-map">
      <svg viewBox="0 0 720 520" role="img" aria-labelledby="ukmap-title ukmap-desc">
        <title id="ukmap-title">Great Britain and Ireland political geography</title>
        <desc id="ukmap-desc">A schematic map showing Scotland, England and Wales on Great Britain, Northern Ireland and Ireland on the island of Ireland, and the surrounding seas.</desc>
        <rect x="0" y="0" width="720" height="520" rx="16" class="map-water"/>
        <text x="358" y="70" class="map-water-label">North Atlantic</text>
        <text x="505" y="210" class="map-water-label">North Sea</text>
        <text x="330" y="455" class="map-water-label">English Channel</text>
        <text x="255" y="280" class="map-water-label">Irish Sea</text>

        <path d="M432 64 L474 82 L503 118 L495 151 L516 180 L504 213 L520 244 L501 278 L509 313 L487 350 L470 390 L435 421 L397 410 L382 374 L366 346 L374 312 L353 286 L368 257 L360 224 L380 196 L373 165 L399 139 L394 103 Z" class="map-land map-scotland"/>
        <path d="M399 139 L432 150 L466 173 L504 213 L520 244 L501 278 L509 313 L487 350 L470 390 L435 421 L397 410 L382 374 L366 346 L374 312 L353 286 L368 257 L360 224 L380 196 L373 165 Z" class="map-land map-england"/>
        <path d="M349 267 L371 259 L384 282 L374 312 L350 330 L326 318 L330 290 Z" class="map-land map-wales"/>

        <path d="M207 150 L246 133 L279 145 L298 178 L289 211 L303 239 L288 272 L277 309 L249 340 L214 334 L183 314 L170 282 L178 250 L163 219 L174 185 Z" class="map-land map-ireland"/>
        <path d="M207 150 L246 133 L279 145 L298 178 L289 211 L262 220 L233 209 L206 216 L174 185 Z" class="map-land map-ni"/>

        <text x="436" y="118" class="map-label strong">SCOTLAND</text>
        <text x="423" y="302" class="map-label strong">ENGLAND</text>
        <text x="345" y="302" class="map-label strong small">WALES</text>
        <text x="213" y="190" class="map-label strong small">N. IRELAND</text>
        <text x="212" y="277" class="map-label strong">IRELAND</text>

        <path d="M416 424 C430 431 446 434 462 433" class="map-coast-accent"/>
        <circle cx="449" cy="365" r="5" class="map-city-dot"/>
        <text x="458" y="369" class="map-city-label">London</text>

        <rect x="36" y="365" width="238" height="112" rx="8" class="map-key"/>
        <text x="54" y="391" class="map-key-title">What this map shows</text>
        <circle cx="58" cy="416" r="8" class="key-uk"/><text x="76" y="421" class="map-key-text">United Kingdom territory</text>
        <circle cx="58" cy="443" r="8" class="key-ireland"/><text x="76" y="448" class="map-key-text">Ireland — sovereign state</text>
      </svg>
      <figcaption>Schematic teaching map — not to scale. Great Britain is the island containing Scotland, England, and Wales. The island of Ireland contains both Northern Ireland and the sovereign state of Ireland.</figcaption>
    </figure>`;
}

function sussexTeachingMap(){
  return `
    <figure class="teaching-map">
      <svg viewBox="0 0 760 360" role="img" aria-labelledby="sussexmap-title sussexmap-desc">
        <title id="sussexmap-title">Sussex on the south coast of England</title>
        <desc id="sussexmap-desc">A schematic regional map showing West Sussex and East Sussex south of London between Hampshire and Kent, with Brighton and Hove on the coast.</desc>
        <rect x="0" y="0" width="760" height="360" rx="16" class="map-paper"/>
        <path d="M40 250 C140 235 225 252 310 239 C400 225 480 248 575 228 C650 212 700 218 735 228 L735 335 L40 335 Z" class="map-water"/>
        <text x="300" y="324" class="map-water-label dark">English Channel</text>

        <path d="M68 126 L230 102 L271 149 L249 259 L66 270 L40 210 Z" class="sussex-neighbor"/>
        <path d="M230 102 L414 95 L446 142 L421 256 L249 259 L271 149 Z" class="map-land map-west-sussex"/>
        <path d="M414 95 L615 110 L698 166 L674 245 L421 256 L446 142 Z" class="map-land map-east-sussex"/>
        <path d="M615 110 L728 105 L742 217 L674 245 L698 166 Z" class="sussex-neighbor"/>

        <text x="111" y="180" class="map-label">HAMPSHIRE</text>
        <text x="305" y="178" class="map-label strong">WEST SUSSEX</text>
        <text x="505" y="177" class="map-label strong">EAST SUSSEX</text>
        <text x="676" y="166" class="map-label">KENT</text>

        <circle cx="398" cy="48" r="6" class="map-city-dot"/>
        <text x="410" y="53" class="map-city-label strong">London</text>
        <path d="M400 56 L397 87" class="map-guide"/>
        <text x="410" y="78" class="map-note">Sussex is south of London</text>

        <circle cx="435" cy="251" r="6" class="map-city-dot"/>
        <text x="447" y="249" class="map-city-label strong">Brighton & Hove</text>
        <circle cx="211" cy="248" r="5" class="map-city-dot"/>
        <text x="128" y="242" class="map-city-label">Chichester</text>
        <circle cx="533" cy="241" r="5" class="map-city-dot"/>
        <text x="544" y="240" class="map-city-label">Eastbourne</text>

        <line x1="421" y1="256" x2="414" y2="95" class="map-boundary"/>
      </svg>
      <figcaption>Schematic Sussex zoom — not to scale. The historic county runs along England's south coast; today's principal county division is West Sussex and East Sussex, with Brighton & Hove administered separately at the local-government level.</figcaption>
    </figure>`;
}

function dcTeachingMap(){
  return `
    <figure class="teaching-map">
      <svg viewBox="0 0 760 520" role="img" aria-labelledby="dcmap-title dcmap-desc">
        <title id="dcmap-title">Washington DC landmarks, rivers and quadrants</title>
        <desc id="dcmap-desc">A schematic map of the District of Columbia showing the Potomac and Anacostia rivers, Georgetown, the White House, the Capitol, the National Mall and the four quadrants.</desc>
        <rect x="0" y="0" width="760" height="520" rx="16" class="map-paper"/>
        <text x="650" y="45" class="map-note">Maryland</text>

        <path d="M72 290 C145 263 193 252 240 267 C292 284 324 333 366 366 C418 407 462 425 505 449 L448 520 L80 520 Z" class="map-water"/>
        <text x="120" y="438" class="map-water-label dark">Potomac River</text>
        <text x="30" y="495" class="map-note">Virginia</text>

        <path d="M470 260 C500 290 534 312 584 327 C628 340 671 357 724 389 L724 430 C665 397 624 382 577 369 C526 353 486 330 452 294 Z" class="map-water"/>
        <text x="563" y="346" class="map-water-label dark">Anacostia River</text>

        <path d="M175 85 L510 85 L694 268 L562 422 L492 389 L444 346 L390 300 L333 255 L275 245 L216 257 L142 278 L105 220 Z" class="dc-current-shape"/>
        <line x1="392" y1="190" x2="392" y2="407" class="dc-axis"/>
        <line x1="222" y1="260" x2="635" y2="260" class="dc-axis"/>

        <text x="275" y="155" class="map-label quadrant">NW</text>
        <text x="505" y="155" class="map-label quadrant">NE</text>
        <text x="300" y="338" class="map-label quadrant">SW</text>
        <text x="510" y="338" class="map-label quadrant">SE</text>

        <rect x="248" y="245" width="145" height="30" class="dc-mall"/>
        <text x="274" y="265" class="map-note strong">National Mall</text>

        <circle cx="392" cy="260" r="8" class="map-city-dot"/>
        <text x="405" y="250" class="map-city-label strong">U.S. Capitol</text>

        <circle cx="285" cy="224" r="7" class="map-landmark-dot"/>
        <text x="215" y="211" class="map-city-label strong">White House</text>

        <circle cx="173" cy="218" r="6" class="map-landmark-dot"/>
        <text x="112" y="202" class="map-city-label strong">Georgetown</text>

        <path d="M173 218 L285 224 L392 260" class="map-guide"/>
        <path d="M190 110 L595 406" class="dc-avenue"/>
        <text x="475" y="365" class="map-note avenue-label">diagonal avenue pattern</text>
      </svg>
      <figcaption>Schematic city map — not to scale. The Capitol is the addressing origin; the Potomac and Anacostia rivers and the District's irregular present boundary help explain why the four quadrants are very different sizes.</figcaption>
    </figure>`;
}

function dcOriginalDistrictMap(){
  return `
    <figure class="teaching-map compact-map">
      <svg viewBox="0 0 620 430" role="img" aria-labelledby="dcoriginal-title dcoriginal-desc">
        <title id="dcoriginal-title">Original District of Columbia and Virginia retrocession</title>
        <desc id="dcoriginal-desc">A schematic diamond showing the original federal district, with the Virginia portion distinguished from the territory that remains the District of Columbia.</desc>
        <rect x="0" y="0" width="620" height="430" rx="16" class="map-paper"/>
        <polygon points="310,30 575,215 310,400 45,215" class="dc-original-diamond"/>
        <path d="M45 215 L310 400 L329 343 L289 309 L245 274 L188 252 L119 248 Z" class="dc-retroceded"/>
        <path d="M80 245 C160 226 223 230 276 255 C331 281 370 330 424 361" class="map-water-line"/>
        <text x="90" y="315" class="map-label strong">Returned to Virginia</text>
        <text x="90" y="335" class="map-note">Alexandria area · retrocession 1846–47</text>
        <text x="330" y="130" class="map-label strong">Present D.C. side</text>
        <circle cx="347" cy="225" r="7" class="map-city-dot"/>
        <text x="360" y="229" class="map-city-label">Capitol</text>
        <text x="252" y="416" class="map-note">Original district: roughly a 10-mile square</text>
      </svg>
      <figcaption>Schematic historical map — not to scale. The original federal district included land ceded by both Maryland and Virginia; the Virginia portion was returned in the 1840s.</figcaption>
    </figure>`;
}

function ukIrelandPrimerBody(){
  return `
    ${primerStep(1,"Start with the simplest distinction: islands are not countries.",
      `<p>The names <strong>United Kingdom, Great Britain, Britain, Ireland, England, Scotland, Wales,</strong> and <strong>Northern Ireland</strong> overlap—but they do not name the same thing.</p>
       ${primerTerm("ISLAND","A piece of land completely surrounded by water.")}
       ${primerTerm("STATE","A sovereign political entity with its own government and international legal identity.")}
       <p>The confusion begins because one large island, several historic nations, and two present-day sovereign states occupy the same small part of northwestern Europe.</p>`)}

    ${primerStep(2,"Great Britain is an island.",
      `${primerTerm("GREAT BRITAIN","The large island containing England, Scotland, and Wales.")}
       <figure class="generated-political-map">
         <img src="data:image/jpeg;base64,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" alt="Political map of Great Britain and Ireland showing England, Scotland, Wales, Northern Ireland, Ireland, surrounding seas, major cities, and a Sussex inset." loading="lazy">
         <figcaption>Political teaching map: Great Britain contains England, Scotland, and Wales; the United Kingdom also includes Northern Ireland.</figcaption>
       </figure>
       <div class="geo-island-card">
         <div class="geo-gb">
           <div class="geo-scotland">Scotland</div>
           <div class="geo-wales">Wales</div>
           <div class="geo-england">England</div>
         </div>
         <p><strong>Great Britain = England + Scotland + Wales.</strong></p>
       </div>
       <p>Great Britain does <strong>not</strong> include Northern Ireland, because Northern Ireland is on the separate island of Ireland.</p>`)}

    ${primerStep(3,"The United Kingdom is the sovereign state.",
      `${primerTerm("UNITED KINGDOM","The sovereign state whose full name is the United Kingdom of Great Britain and Northern Ireland.")}
       <div class="primer-chain"><span>England</span><b>+</b><span>Scotland</span><b>+</b><span>Wales</span><b>+</b><span>Northern Ireland</span><b>→</b><span>United Kingdom</span></div>
       <p>The common abbreviation is <strong>UK</strong>.</p>
       <div class="memory"><strong>Easy rule:</strong> Great Britain is the big island. The United Kingdom is the political state that includes Great Britain <em>plus Northern Ireland</em>.</div>`)}

    ${primerStep(4,"England is not the same thing as Britain or the UK.",
      `${primerTerm("ENGLAND","One of the four constituent countries of the United Kingdom, occupying most of the southern and central part of Great Britain.")}
       <p>Calling the whole UK “England” is inaccurate. Scotland, Wales, and Northern Ireland are not parts of England.</p>
       <p>London is both the capital of England and the capital of the United Kingdom.</p>`)}

    ${primerStep(5,"Scotland and Wales are also countries within the UK.",
      `${primerTerm("SCOTLAND","A constituent country of the United Kingdom occupying the northern part of Great Britain.")}
       ${primerTerm("WALES","A constituent country of the United Kingdom on the western side of Great Britain.")}
       <p>England, Scotland, and Wales together make up the island of Great Britain.</p>`)}

    ${primerStep(6,"Ireland is both an island-name and the name of a sovereign state.",
      `${primerTerm("IRELAND — THE ISLAND","The island lying west of Great Britain. It contains both Ireland and Northern Ireland.")}
       ${primerTerm("IRELAND — THE STATE","The sovereign state officially named Ireland (Irish: Éire), occupying most of the island of Ireland. It is often informally called the Republic of Ireland to distinguish it from the island.")}
       <p>This double use of <strong>Ireland</strong> is one of the biggest sources of confusion.</p>`)}

    ${primerStep(7,"Northern Ireland is the part of the island of Ireland that is in the UK.",
      `${primerTerm("NORTHERN IRELAND","The northeastern part of the island of Ireland that forms one of the four constituent countries of the United Kingdom.")}
       <div class="geo-ireland-card">
         <div class="geo-ni">Northern Ireland<br><small>part of the UK</small></div>
         <div class="geo-ireland">Ireland<br><small>sovereign state</small></div>
       </div>
       <p>So the island of Ireland contains territory belonging to <strong>two different sovereign states</strong>: the United Kingdom and Ireland.</p>`)}

    ${primerStep(8,"What does Britain mean?",
      `${primerTerm("BRITAIN","A flexible everyday term. It can mean Great Britain geographically, and it is also commonly used informally for the United Kingdom as a whole.")}
       <p>This is why “Britain” can be slippery. In a geographic sentence it may mean the island of Great Britain. In politics or news it often means the UK.</p>
       <p><strong>Great Britain</strong> is the more precise geographic term for England + Scotland + Wales.</p>`)}

    ${primerStep(9,"A useful warning about the term British Isles.",
      `${primerTerm("BRITISH ISLES","A traditional geographic term for Great Britain, Ireland, and many surrounding islands. The term is politically sensitive and is not universally accepted, especially in Ireland.")}
       <p>If precision matters, it is often clearer simply to name <strong>Great Britain and Ireland</strong>, or the specific countries involved, rather than rely on the umbrella term.</p>`)}

    ${primerStep(10,"How did Great Britain become one political kingdom?",
      `<p>England and Scotland had separate kingdoms for centuries. In 1603 they came under the same monarch when James VI of Scotland also became James I of England, but they still had separate parliaments.</p>
       ${primerTerm("ACTS OF UNION 1707","The legislation by which the kingdoms of England and Scotland were politically united into the Kingdom of Great Britain.")}
       <div class="primer-chain"><span>Kingdom of England</span><b>+</b><span>Kingdom of Scotland</span><b>→ 1707 →</b><span>Kingdom of Great Britain</span></div>
       <p>Wales had already been politically incorporated into the English state during the earlier Tudor period.</p>`)}

    ${primerStep(11,"Ireland then entered—and later mostly left—the union.",
      `${primerTerm("UNITED KINGDOM OF GREAT BRITAIN AND IRELAND","The state created in 1801 when Great Britain and Ireland were joined under one parliament.")}
       <p>Most of Ireland left the United Kingdom in the early 1920s and became the Irish Free State, which developed into the present sovereign state of Ireland.</p>
       <p>Northern Ireland remained in the United Kingdom. The state's present name—<strong>United Kingdom of Great Britain and Northern Ireland</strong>—was adopted in 1927.</p>`)}

    ${primerStep(12,"The fastest possible map.",
      `<div class="geo-equation-grid">
         <div><strong>Great Britain</strong><span>England + Scotland + Wales</span></div>
         <div><strong>United Kingdom</strong><span>Great Britain + Northern Ireland</span></div>
         <div><strong>Island of Ireland</strong><span>Ireland + Northern Ireland</span></div>
         <div><strong>Ireland</strong><span>The sovereign state occupying most of that island</span></div>
       </div>`)}

    ${primerStep(13,"Now zoom in: where is Sussex?",
      `<p><strong>Sussex</strong> lies along the English Channel on the south coast of England, south of London.</p>
       ${sussexTeachingMap()}
       ${primerTerm("HISTORIC COUNTY","A traditional territorial county with a long historical identity, which may not match today's local-government boundaries exactly.")}
       <p>Sussex is still a strong historical and cultural region even though modern local government divides it principally into <strong>East Sussex</strong> and <strong>West Sussex</strong>.</p>`)}

    ${primerStep(14,"The name Sussex means South Saxons.",
      `<p>The name <strong>Sussex</strong> comes from Old English <em>Sūþseaxe</em>: the <strong>South Saxons</strong>.</p>
       ${primerTerm("SAXONS","One of the Germanic peoples whose settlements in post-Roman Britain contributed to the formation of Anglo-Saxon England.")}
       <p>A kingdom associated with the South Saxons emerged in the early medieval period. Tradition gives a foundation date of 477, although the early history is partly legendary and reconstructed from later sources.</p>
       <div class="primer-chain"><span>South Saxons</span><b>→</b><span>Sūþseaxe</span><b>→</b><span>Sussex</span></div>`)}

    ${primerStep(15,"Sussex was once a small Anglo-Saxon kingdom.",
      `${primerTerm("KINGDOM OF SUSSEX","An early Anglo-Saxon kingdom in southern England associated with the South Saxons.")}
       <p>Its political independence was uneven, and it was eventually absorbed into the expanding kingdom of Wessex. The name survived as a territorial identity long after the kingdom disappeared.</p>
       <p>That is common in English geography: an ancient political name can survive for more than a thousand years even though the institutions underneath it change repeatedly.</p>`)}

    ${primerStep(16,"Medieval Sussex was divided into six 'rapes.'",
      `${primerTerm("RAPE — SUSSEX","A historic territorial subdivision peculiar to Sussex. Each rape stretched roughly north–south and contained smaller units called hundreds. The origin of the term itself is uncertain.")}
       <p>The traditional six rapes were <strong>Chichester, Arundel, Bramber, Lewes, Pevensey,</strong> and <strong>Hastings</strong>.</p>
       <p>The western three and eastern three eventually helped form a practical east/west administrative division.</p>`)}

    ${primerStep(17,"East Sussex and West Sussex are not a brand-new split.",
      `<p>Sussex's long east–west shape made separate administration useful. Separate eastern and western Quarter Sessions developed by the early 1500s, and the division received statutory recognition in the 19th century.</p>
       ${primerTerm("QUARTER SESSIONS","Local courts and administrative meetings historically held several times a year by county justices of the peace. Before modern elected county councils, they handled many local-government functions.")}
       <p>Under the <strong>Local Government Act 1888</strong>, East Sussex and West Sussex became separate administrative counties with elected county councils from 1889.</p>`)}

    ${primerStep(18,"What does Sussex look like administratively today?",
      `<div class="definition-grid">
        <div class="definition-card"><h3>West Sussex</h3><p>A present-day ceremonial and local-government county west of East Sussex.</p></div>
        <div class="definition-card"><h3>East Sussex</h3><p>A present-day county whose county council area includes districts such as Lewes, Wealden, Rother, Hastings, and Eastbourne.</p></div>
        <div class="definition-card"><h3>Brighton & Hove</h3><p>A separate unitary authority for local government, while remaining within the ceremonial geography of East Sussex.</p></div>
       </div>
       <p>So <strong>Sussex</strong> still makes sense historically and culturally, while <strong>East Sussex</strong> and <strong>West Sussex</strong> are the main modern county names used for administration and ceremony.</p>
       <p><strong>Current 2026 note:</strong> a Sussex & Brighton strategic authority began operating in April 2026 across East Sussex, West Sussex, and Brighton & Hove. Further local-government reorganisation is planned for 2028. That new strategic layer does not erase the older Sussex identities underneath it.</p>`)}

    ${primerStep(19,"One final geographic habit: ask what kind of name you are looking at.",
      `<div class="history-summary-chain">
        <div><b>Great Britain</b><span>Geographic island.</span></div>
        <div><b>United Kingdom</b><span>Sovereign state.</span></div>
        <div><b>Britain</b><span>Flexible informal term; context matters.</span></div>
        <div><b>Ireland</b><span>Can mean the island or the sovereign state.</span></div>
        <div><b>Sussex</b><span>Historic county and cultural region.</span></div>
        <div><b>East / West Sussex</b><span>Modern county divisions rooted in a much older east–west split.</span></div>
       </div>
       <div class="memory"><strong>The trick:</strong> before deciding whether two names conflict, ask whether each name is geographic, political, historical, or administrative.</div>`)}

    <section class="primer-finish">
      <p class="kicker">Geography primer</p>
      <h3>The names overlap because history overlaps.</h3>
      <p>The United Kingdom is easiest to understand once islands, sovereign states, constituent countries, historic counties, and modern administrative counties are kept as separate categories.</p>
    </section>

    <section class="entry-section history-sources">
      <h3>Sources and further reading</h3>
      <p><a href="https://www.britannica.com/place/United-Kingdom" target="_blank" rel="noopener">Encyclopaedia Britannica — United Kingdom</a><br>
      <a href="https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/act-of-union-1707/" target="_blank" rel="noopener">UK Parliament — Union of 1707</a><br>
      <a href="https://www.eastsussex.gov.uk/" target="_blank" rel="noopener">East Sussex County Council</a><br>
      <a href="https://www.westsussex.gov.uk/" target="_blank" rel="noopener">West Sussex County Council</a></p>
    </section>
  `;
}

function washingtonDCPrimerBody(){
  return `
    ${primerStep(1,"Start with the unusual fact: Washington is not in a state.",
      `${primerTerm("DISTRICT OF COLUMBIA","The federal district that contains Washington, the capital of the United States. It is not one of the 50 states.")}
       <p>The Constitution allowed Congress to create a federal district for the national capital so that the federal government would not depend on any single state for its seat of government.</p>`)}

    ${primerStep(2,"The capital was deliberately placed on the Potomac.",
      `<p>The <strong>Residence Act of 1790</strong> authorized a permanent national capital along the Potomac River.</p>
       <p>President George Washington selected the area. The original federal district formed a square of roughly 100 square miles from land ceded by Maryland and Virginia.</p>
       ${dcTeachingMap()}
       <p>It included existing communities such as <strong>Georgetown</strong> and <strong>Alexandria</strong>, as well as the new federal city.</p>`)}

    ${primerStep(3,"Pierre L’Enfant designed a capital, not just a street grid.",
      `${primerTerm("L’ENFANT PLAN","Pierre Charles L’Enfant's 1791 plan for the new federal city of Washington. It combined a rectangular street grid with broad diagonal avenues, ceremonial vistas, public squares, and prominent sites for national buildings.")}
       <p>The grid made land easy to divide into blocks. The diagonals created grand routes and dramatic views through the city.</p>
       <p>Andrew Ellicott later revised and mapped the plan after L’Enfant left the project, but the basic structure still shapes central Washington today.</p>`)}

    ${primerStep(4,"The U.S. Capitol is the street-address origin.",
      `<p>This is the key to the entire system.</p>
       <div class="dc-quadrant-map" role="img" aria-label="Schematic of Washington DC quadrants centered on the United States Capitol">
         <div class="dc-q dc-nw"><strong>NW</strong><span>Northwest</span></div>
         <div class="dc-q dc-ne"><strong>NE</strong><span>Northeast</span></div>
         <div class="dc-q dc-sw"><strong>SW</strong><span>Southwest</span></div>
         <div class="dc-q dc-se"><strong>SE</strong><span>Southeast</span></div>
         <div class="dc-capitol">U.S.<br>CAPITOL</div>
       </div>
       <p>The Capitol sits at the conceptual center. Every normal D.C. address includes a quadrant: <strong>NW, NE, SW,</strong> or <strong>SE</strong>.</p>`)}

    ${primerStep(5,"The four quadrants are not equal-sized pie slices.",
      `<p>The quadrants are defined by axes extending from the Capitol, but the city's geography and later boundaries make the four areas very unequal in size.</p>
       <p><strong>North Capitol Street</strong> forms much of the north–south dividing line north of the Capitol. <strong>South Capitol Street</strong> continues south. <strong>East Capitol Street</strong> runs east. West of the Capitol, the National Mall occupies the axis—so there is no ordinary <strong>West Capitol Street</strong>.</p>`)}

    ${primerStep(6,"Numbered streets generally run north–south.",
      `<p>Moving away from the Capitol to the east or west, the north–south grid streets are numbered:</p>
       <div class="primer-chain"><span>1st Street</span><b>→</b><span>2nd Street</span><b>→</b><span>3rd Street</span><b>→</b><span>4th Street</span></div>
       <p>The numbering starts again on the other side of the Capitol axis. This is why <strong>4th Street NW</strong> and <strong>4th Street NE</strong> are different streets in different places.</p>`)}

    ${primerStep(7,"Lettered streets generally run east–west.",
      `<p>Moving north or south away from the Capitol's east–west axis, east–west streets use letters:</p>
       <div class="primer-chain"><span>A Street</span><b>→</b><span>B Street</span><b>→</b><span>C Street</span><b>→</b><span>D Street</span></div>
       <p>The same letter can therefore appear in multiple quadrants: <strong>C Street NW, C Street NE, C Street SW,</strong> and <strong>C Street SE</strong> are distinct locations where the grid exists.</p>
       <p>There is no regular J Street in the central alphabetic sequence; after the lettered system is exhausted, later extensions use alphabetically ordered names.</p>`)}

    ${primerStep(8,"This is what 'duplicated street names' really means.",
      `<div class="dc-duplicate-grid">
        <div><strong>4th Street NW</strong><span>northwest of the Capitol</span></div>
        <div><strong>4th Street NE</strong><span>northeast of the Capitol</span></div>
        <div><strong>4th Street SW</strong><span>southwest of the Capitol</span></div>
        <div><strong>4th Street SE</strong><span>southeast of the Capitol</span></div>
       </div>
       <p>The street name alone is incomplete. <strong>The quadrant is part of the address.</strong></p>
       <div class="memory"><strong>In Washington, “4th Street” is not enough information.</strong> You need 4th Street <em>NW, NE, SW, or SE</em>.</div>`)}

    ${primerStep(9,"A single intersection can have several cousins.",
      `<p>Because numbered streets and lettered streets repeat from the Capitol in different quadrants, intersections can repeat too.</p>
       <div class="dc-intersections">
         <span>3rd & L NW</span><span>3rd & L NE</span><span>3rd & L SW</span><span>3rd & L SE</span>
       </div>
       <p>Not every theoretical intersection physically exists—parks, rivers, railways, later development, and irregular roads interrupt the grid—but the addressing logic allows the names to repeat.</p>`)}

    ${primerStep(10,"Addresses themselves tell you roughly how far you are from the Capitol.",
      `<p>D.C. block numbers generally correspond to the cross-street grid. An address in the <strong>1200 block</strong> of an east–west street is roughly around 12th Street.</p>
       <p>For example, the White House address <strong>1600 Pennsylvania Avenue NW</strong> places it near 16th Street on Pennsylvania Avenue in the Northwest quadrant.</p>
       <p>The system is not perfect everywhere, but once you know the grid, an address carries a surprising amount of location information.</p>`)}

    ${primerStep(11,"The diagonal avenues are a second system laid across the grid.",
      `${primerTerm("STATE AVENUES","Broad diagonal avenues in Washington's plan, many named for U.S. states, such as Pennsylvania Avenue, Massachusetts Avenue, and Connecticut Avenue.")}
       <div class="dc-grid-demo">
         <div class="grid-h h1"></div><div class="grid-h h2"></div><div class="grid-h h3"></div>
         <div class="grid-v v1"></div><div class="grid-v v2"></div><div class="grid-v v3"></div>
         <div class="grid-diagonal"></div>
         <span class="grid-label">STATE AVENUE</span>
       </div>
       <p>The diagonals create the famous circles and irregular intersections that make Washington simultaneously logical and confusing.</p>`)}

    ${primerStep(12,"Why circles appear everywhere.",
      `<p>L’Enfant placed open spaces at important intersections. Where major diagonal avenues cross the rectangular grid, circles and squares often become focal points.</p>
       <p>Familiar examples include <strong>Dupont Circle, Washington Circle, Scott Circle,</strong> and <strong>Logan Circle</strong>.</p>
       <p>The circles were part traffic device, part public space, and part monumental city design.</p>`)}

    ${primerStep(13,"Georgetown is older than the federal street plan.",
      `<p><strong>Georgetown</strong> existed before Washington, D.C. was planned. Because it developed independently, its streets do not perfectly obey the Capitol-centered grid.</p>
       <p>This is a good reminder that the famous D.C. system is a plan laid over a landscape that already contained towns, roads, terrain, waterways, and property boundaries.</p>`)}

    ${primerStep(14,"The original District also included Alexandria.",
      `${primerTerm("RETROCESSION","The return of territory previously ceded to another government.")}
       <p>The original District of Columbia included land west of the Potomac that had been ceded by Virginia, including Alexandria.</p>
       ${dcOriginalDistrictMap()}
       <p>Congress approved the return of that Virginia portion in 1846, with the transfer completed in 1847. Today's District therefore consists of the former Maryland side of the original federal district.</p>`)}

    ${primerStep(15,"Washington city and the District were once overlapping but distinct jurisdictions.",
      `<p>For much of the 19th century, the federal territory contained the incorporated City of Washington, Georgetown, and a more rural Washington County.</p>
       <p>The <strong>Organic Act of 1871</strong> created a single territorial government for the whole District of Columbia. Over time, “Washington” and “District of Columbia” became effectively coextensive for ordinary use.</p>`)}

    ${primerStep(16,"The McMillan Plan revived the monumental vision.",
      `${primerTerm("MCMILLAN PLAN","The 1901–1902 plan that reshaped Washington's monumental core, especially the National Mall, using City Beautiful principles while reviving and extending important ideas from L’Enfant's plan.")}
       <p>It helped establish the broad formal Mall and monumental arrangement associated with the capital today.</p>`)}

    ${primerStep(17,"How to decode an address in five seconds.",
      `<div class="history-summary-chain">
        <div><b>Read the quadrant first.</b><span>NW, NE, SW, or SE tells you which copy of the grid.</span></div>
        <div><b>Numbered street?</b><span>Think north–south.</span></div>
        <div><b>Lettered street?</b><span>Think east–west in the central grid.</span></div>
        <div><b>State avenue?</b><span>Expect a diagonal that cuts across the grid.</span></div>
        <div><b>Address number?</b><span>It often hints at the nearby cross street.</span></div>
       </div>`)}

    ${primerStep(18,"The shortest possible explanation.",
      `<div class="dc-quadrant-map compact" role="img" aria-label="Simplified Washington DC addressing system">
         <div class="dc-q dc-nw"><strong>NW</strong></div>
         <div class="dc-q dc-ne"><strong>NE</strong></div>
         <div class="dc-q dc-sw"><strong>SW</strong></div>
         <div class="dc-q dc-se"><strong>SE</strong></div>
         <div class="dc-capitol">CAPITOL</div>
       </div>
       <div class="memory"><strong>Washington's trick:</strong> the Capitol is zero. Numbers march east and west, letters march north and south, diagonal state avenues slash across both, and the quadrant suffix tells you which repeated copy of a street name you mean.</div>`)}

    <section class="primer-finish">
      <p class="kicker">City geography primer</p>
      <h3>The apparent chaos has a machine underneath it.</h3>
      <p>Once you treat the Capitol as the origin and the quadrant letters as part of the street name, Washington's address system becomes much easier to read.</p>
    </section>

    <section class="entry-section history-sources">
      <h3>Sources and further reading</h3>
      <p><a href="https://centennial.ncpc.gov/library.html" target="_blank" rel="noopener">National Capital Planning Commission — L’Enfant Plan and planning history</a><br>
      <a href="https://code.dccouncil.gov/us/dc/council/code/sections/9-204.02" target="_blank" rel="noopener">D.C. Code — street designation system</a><br>
      <a href="https://dcrules.elaws.us/dcmr/12-a202" target="_blank" rel="noopener">D.C. regulations — quadrant addressing</a><br>
      <a href="https://www.loc.gov/" target="_blank" rel="noopener">Library of Congress — Washington maps and plans</a></p>
    </section>
  `;
}

entries.push({
  slug:"uk-great-britain-ireland",
  title:"UK, Great Britain, Britain & Ireland",
  category:"Political Geography",
  short:"A baby-step guide to the islands, countries, sovereign states, and the historical geography of Sussex.",
  keywords:"United Kingdom UK Great Britain Britain England Scotland Wales Ireland Northern Ireland British Isles Sussex East Sussex West Sussex South Saxons geography",
  body:ukIrelandPrimerBody()
});

entries.push({
  slug:"washington-dc-street-plan",
  title:"Washington, D.C. — History & Street Layout",
  category:"Cities & Maps",
  short:"Why the Capitol is the origin, why streets repeat in four quadrants, and how the L’Enfant grid actually works.",
  keywords:"Washington DC District Columbia L'Enfant Ellicott street grid quadrants NW NE SW SE numbered lettered streets state avenues Capitol duplicate street names addresses",
  body:washingtonDCPrimerBody()
});

function resetPanel(){
  const config=sectionConfig[activeSection];
  if(activeSection==="Grammar"){
    panelEl.innerHTML=grammarPrimer();
    return;
  }
  if(activeSection==="Languages"){
    panelEl.innerHTML=languagesPrimer();
    return;
  }
  if(activeSection==="History"){
    const entry=entries.find(e=>e.slug==="vietnam-war-primer");
    panelEl.innerHTML=`
      <div class="entry-inner primer">
        <header class="primer-hero">
          <p class="kicker">Start here · baby steps</p>
          <h2>The Viet Nam War</h2>
          <p class="lede">${escapeHtml(entry.short)}</p>
          <div class="primer-chain"><span>French empire</span><b>→</b><span>independence war</span><b>→</b><span>U.S. war</span><b>→</b><span>regional wars</span><b>→</b><span>partnership</span></div>
        </header>
        ${entry.body}
      </div>`;
    return;
  }
  if(activeSection==="Economic Isms"){
    const entry=entries.find(e=>e.slug==="economic-isms-primer");
    panelEl.innerHTML=`
      <div class="entry-inner primer">
        <header class="primer-hero">
          <p class="kicker">Start here · baby steps</p>
          <h2>Economic “Isms”</h2>
          <p class="lede">${escapeHtml(entry.short)}</p>
          <div class="primer-chain"><span>ownership</span><b>→</b><span>markets</span><b>→</b><span>planning</span><b>→</b><span>political power</span><b>→</b><span>the isms</span></div>
        </header>
        ${entry.body}
      </div>`;
    return;
  }
  if(activeSection==="Geography"){
    const slug=activeCategory==="Cities & Maps" ? "washington-dc-street-plan" : "uk-great-britain-ireland";
    const entry=entries.find(e=>e.slug===slug);
    panelEl.innerHTML=`
      <div class="entry-inner primer">
        <header class="primer-hero">
          <p class="kicker">Start here · baby steps</p>
          <h2>${slug==="washington-dc-street-plan" ? "Washington, D.C." : "UK, Great Britain, Britain & Ireland"}</h2>
          <p class="lede">${escapeHtml(entry.short)}</p>
          ${slug==="washington-dc-street-plan"
            ? '<div class="primer-chain"><span>Capitol</span><b>→</b><span>grid</span><b>→</b><span>quadrants</span><b>→</b><span>repeated streets</span><b>→</b><span>addresses</span></div>'
            : '<div class="primer-chain"><span>islands</span><b>→</b><span>countries</span><b>→</b><span>states</span><b>→</b><span>Ireland</span><b>→</b><span>Sussex</span></div>'}
        </header>
        ${entry.body}
      </div>`;
    activeSlug=slug;
    renderTerms();
    return;
  }
  panelEl.innerHTML=`
    <div class="empty-state">
      <div class="empty-monogram" aria-hidden="true">G</div>
      <p class="kicker">${escapeHtml(activeSection)} cabinet</p>
      <h2>${escapeHtml(config.emptyTitle)}</h2>
      <p>${escapeHtml(config.emptyText)}</p>
    </div>`;
}

function renderTabs(){
  tabsEl.querySelectorAll(".content-tab").forEach(btn=>{
    const isActive=btn.dataset.section===activeSection;
    btn.classList.toggle("active",isActive);
    btn.setAttribute("aria-selected",String(isActive));
  });
}

function switchSection(section){
  if(!sectionConfig[section]) return;
  activeSection=section;
  activeCategory="All";
  activeSlug=section==="History" ? "vietnam-war-primer" : section==="Economic Isms" ? "economic-isms-primer" : section==="Geography" ? "uk-great-britain-ireland" : null;
  searchEl.value="";
  searchEl.placeholder=sectionConfig[section].searchPlaceholder;
  indexTitleEl.textContent=sectionConfig[section].indexTitle;
  renderTabs();
  renderFilters();
  renderTerms();
  resetPanel();
}

function renderFilters(){
  const categories=sectionConfig[activeSection].categories;
  filtersEl.innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat===activeCategory?"active":""}" data-category="${cat}" type="button">${cat}</button>`
  ).join("");
  filtersEl.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      activeCategory=btn.dataset.category;
      activeSlug=null;
      renderFilters();
      renderTerms();
      resetPanel();
    });
  });
}

function filteredEntries(){
  const q=searchEl.value.trim().toLowerCase();
  return entries
    .filter(e=>sectionForEntry(e)===activeSection)
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

tabsEl.querySelectorAll(".content-tab").forEach(btn=>{
  btn.addEventListener("click",()=>switchSection(btn.dataset.section));
});

searchEl.addEventListener("input",()=>{
  activeSlug=null;
  renderTerms();
});

searchEl.placeholder=sectionConfig[activeSection].searchPlaceholder;
indexTitleEl.textContent=sectionConfig[activeSection].indexTitle;
renderTabs();
renderFilters();
renderTerms();
resetPanel();
