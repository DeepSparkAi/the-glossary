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


function ukIrelandPrimerBody(){
  return `
    ${primerStep(1,"Start with the simplest distinction: islands are not countries.",
      `<p>The names <strong>United Kingdom, Great Britain, Britain, Ireland, England, Scotland, Wales,</strong> and <strong>Northern Ireland</strong> overlap—but they do not name the same thing.</p>
       ${primerTerm("ISLAND","A piece of land completely surrounded by water.")}
       ${primerTerm("STATE","A sovereign political entity with its own government and international legal identity.")}
       <p>The confusion begins because one large island, several historic nations, and two present-day sovereign states occupy the same small part of northwestern Europe.</p>`)}

    ${primerStep(2,"Great Britain is an island.",
      `${primerTerm("GREAT BRITAIN","The large island containing England, Scotland, and Wales.")}
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
       <p>So <strong>Sussex</strong> still makes sense historically and culturally, while <strong>East Sussex</strong> and <strong>West Sussex</strong> are the main modern county names used for administration and ceremony.</p>`)}

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
