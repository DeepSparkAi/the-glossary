// Catholicism and Mass baby-step content for The Glossary.
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const term = (word, text) => `<div class="primer-term"><p class="primer-label">A new word</p><h3>${esc(word)}</h3><p>${esc(text)}</p></div>`;
  const step = (n, title, body) => `<section class="primer-step"><div class="primer-step-number">Step ${String(n).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;

  function catholicBasics(){
    return `
      ${step(1,"Start with the largest box: Catholicism is a form of Christianity.",
        `${term("CHRISTIANITY","The religion centered on Jesus Christ: his life, teaching, death, and resurrection.")} 
         ${term("CATHOLIC","In this lesson, a Christian who belongs to the Catholic Church. The word comes through Greek katholikos, meaning universal or concerning the whole.")}
         <p>Catholics are Christians. They share the central Christian belief that Jesus Christ is Lord and that God raised him from the dead. What makes Catholicism specifically Catholic is the Church's particular structure, sacramental life, teaching authority, and inherited tradition.</p>`)}

      ${step(2,"Catholics believe in one God, understood as Trinity.",
        `${term("TRINITY","The Christian teaching that there is one God in three divine Persons: Father, Son, and Holy Spirit. Not three gods; one God.")}
         <p>The word <strong>Trinity</strong> is a compact label. It combines the idea of <strong>three</strong> with <strong>unity</strong>.</p>
         <div class="primer-chain"><span>one God</span><b>→</b><span>Father</span><b>·</b><span>Son</span><b>·</b><span>Holy Spirit</span></div>`)}

      ${step(3,"Jesus is at the center of Catholic belief.",
        `${term("INCARNATION","The Christian teaching that the eternal Son of God truly became human in Jesus Christ.")}
         <p>Catholic teaching holds that Jesus is truly divine and truly human. His death and resurrection are therefore not side topics: they are the center of Christian salvation and of the Church's worship.</p>`)}

      ${step(4,"The Bible matters—but Catholicism does not use 'Bible alone' as its rule.",
        `${term("SCRIPTURE","The sacred writings collected in the Bible.")}
         ${term("TRADITION","In Catholic teaching, the living transmission of the apostolic faith through the Church's teaching, worship, and life. It does not merely mean an old custom.")}
         <p>Catholic teaching treats <strong>Sacred Scripture and Sacred Tradition</strong> as closely joined ways in which the apostolic faith is handed on. The Church's teaching office interprets that deposit of faith.</p>`)}

      ${step(5,"That teaching office has a name: the Magisterium.",
        `${term("MAGISTERIUM","The Church's authoritative teaching office, exercised by the Pope and the bishops in communion with him.")}
         <p><em>Magisterium</em> comes from Latin words connected with a <strong>teacher</strong> or <strong>master</strong>. So the term is easier than it looks: it means the Church's teaching office.</p>`)}

      ${step(6,"The Pope is the Bishop of Rome.",
        `${term("POPE","The Bishop of Rome and the visible head of the Catholic Church's worldwide episcopal communion.")}
         ${term("BISHOP","An ordained minister who oversees a local church called a diocese and who, in Catholic teaching, stands in apostolic succession.")}
         ${term("APOSTOLIC SUCCESSION","The Catholic teaching that the bishops continue the pastoral and teaching ministry entrusted by Christ to the apostles through an historical succession of ordained bishops.")}
         <p>The Pope is not a separate kind of sacrament above bishop. He is himself a bishop—the Bishop of Rome—with a unique office in the universal Church.</p>`)}

      ${step(7,"A diocese contains parishes.",
        `${term("DIOCESE","A geographic local church entrusted to a bishop.")}
         ${term("PARISH","A local Catholic community entrusted to a pastor or other priest under the authority of the diocesan bishop.")}
         ${term("PASTOR","The priest given pastoral responsibility for a parish.")}
         <div class="primer-chain"><span>Catholic Church</span><b>→</b><span>diocese</span><b>→</b><span>parish</span></div>`)}

      ${step(8,"Catholic worship is sacramental.",
        `${term("SACRAMENT","A visible sacred sign instituted by Christ that, in Catholic teaching, gives the grace it signifies.")}
         <p>The Catholic Church recognizes <strong>seven sacraments</strong>: Baptism, Confirmation, Eucharist, Penance or Reconciliation, Anointing of the Sick, Holy Orders, and Matrimony.</p>
         <p>The Eucharist is the sacrament celebrated at Mass.</p>`)}

      ${step(9,"Mass is the ordinary Catholic name for the Eucharistic liturgy.",
        `${term("LITURGY","The Church's public, ordered worship. A liturgy has an inherited structure; it is not simply a private prayer meeting.")}
         ${term("MASS","The principal Eucharistic liturgy of the Latin Church. In it the Church hears Scripture, offers prayer and thanksgiving, and celebrates the Eucharist.")}
         ${term("EUCHARIST","From Greek eucharistia, thanksgiving. It names both the sacramental celebration and the consecrated Body and Blood of Christ received in Communion.")}
         <p>So <strong>Mass</strong> and <strong>Eucharist</strong> overlap, but Eucharist is the deeper sacramental term and Mass is the familiar name for the whole celebration in the Latin Church.</p>`)}

      ${step(10,"The Catholic Church is larger than the Latin or Roman Rite.",
        `${term("LATIN CHURCH","The largest particular church within the Catholic Church. Most Catholics in the United States belong to it.")}
         ${term("RITE","A family of inherited liturgical, spiritual, theological, and disciplinary traditions used in worship and church life.")}
         ${term("ROMAN RITE","The principal liturgical rite of the Latin Church and the form assumed by this primer when it says a usual Catholic Mass in the United States.")}
         <p>Eastern Catholic Churches are fully Catholic and celebrate according to other rites. Their liturgies do not follow every detail of the Roman Rite sequence described here.</p>`)}

      ${step(11,"Catholics honor Mary and the saints; worship is directed to God.",
        `${term("SAINT","In Catholic usage, a holy person united with God; the title is especially used for people formally recognized by the Church as saints.")}
         ${term("VENERATION","Honor or reverence shown to a saint. Catholic theology distinguishes this from the worship owed to God.")}
         <p>Mary receives a unique place because she is the mother of Jesus. Catholics ask Mary and the saints for their prayers in much the same grammatical sense that a Christian might ask another Christian, “pray for me,” while treating God as the source of grace.</p>`)}

      ${step(12,"A crucifix is not the same thing as a bare cross.",
        `${term("CROSS","The cross-shaped Christian symbol associated with Jesus' crucifixion.")}
         ${term("CRUCIFIX","A cross bearing an image or figure of the crucified Jesus.")}
         <p>Roman Catholic churches commonly display a crucifix near the altar because Christ's death is directly connected with the Eucharistic sacrifice celebrated at Mass.</p>`)}

      ${step(13,"The liturgical year gives the Church a repeating calendar.",
        `${term("LITURGICAL YEAR","The Church's annual cycle of seasons and feasts through which the life of Christ and the mysteries of the faith are celebrated.")}
         <div class="primer-chain"><span>Advent</span><b>→</b><span>Christmas</span><b>→</b><span>Ordinary Time</span><b>→</b><span>Lent</span><b>→</b><span>Easter</span></div>
         <p>The readings, prayers, music, and vestment colors change with the season and feast. That is why two Sunday Masses months apart share the same structure but not the same texts.</p>`)}

      ${step(14,"Sunday Mass is central to ordinary Catholic practice.",
        `<p>Catholic law and teaching treat Sunday as the principal weekly day of Eucharistic worship. Catholics are ordinarily obliged to participate in Mass on Sundays and holy days of obligation.</p>
         <p>The reason is not that every Mass is a completely different invention. The opposite is true: the repeated form trains the congregation through a stable rhythm of <strong>hearing the Word</strong> and <strong>celebrating the Eucharist</strong>.</p>`)}

      ${step(15,"Now you have enough Catholic vocabulary to understand a Mass.",
        `<div class="history-summary-chain">
          <div><b>Christianity</b><span>The larger religion centered on Jesus Christ.</span></div>
          <div><b>Catholic Church</b><span>A worldwide Christian communion led by bishops in communion with the Bishop of Rome.</span></div>
          <div><b>Sacraments</b><span>Seven central sacramental rites of Catholic life.</span></div>
          <div><b>Eucharist</b><span>The sacrament at the center of the Mass.</span></div>
          <div><b>Mass</b><span>The Roman Rite Eucharistic celebration this primer now walks through.</span></div>
         </div>`)}
    `;
  }

  function massWalkthrough(){
    return `
      ${step(1,"First see the whole Mass before looking at the pieces.",
        `<p>A usual Roman Rite Mass has <strong>four large sections</strong>. Two of them are the principal parts; the other two open and close the celebration.</p>
         <div class="history-summary-chain">
          <div><b>1 · Introductory Rites</b><span>The congregation gathers and is prepared for worship.</span></div>
          <div><b>2 · Liturgy of the Word</b><span>Scripture is proclaimed and explained; the people respond in faith and prayer.</span></div>
          <div><b>3 · Liturgy of the Eucharist</b><span>Bread and wine are prepared; the Eucharistic Prayer is prayed; Communion is received.</span></div>
          <div><b>4 · Concluding Rites</b><span>Blessing and dismissal send the people out.</span></div>
         </div>`)}

      ${step(2,"Before Mass starts, learn the room.",
        `${term("NAVE","The main area of the church building where the congregation sits or stands.")}
         ${term("SANCTUARY","The area around the altar and ambo where the principal liturgical actions take place.")}
         ${term("ALTAR","The table-like sacred furnishing on which the Eucharist is celebrated.")}
         ${term("AMBO","The fixed lectern or stand from which Scripture readings are proclaimed.")}
         ${term("TABERNACLE","A secure sacred place where consecrated Eucharistic hosts are reserved after Mass.")}
         <p>Once these five words are clear, the physical movements during Mass become much easier to follow.</p>`)}

      ${step(3,"People enter, pray, and prepare.",
        `${term("HOLY WATER","Water blessed for religious use. Catholics commonly touch it when entering and make the Sign of the Cross as a reminder of Baptism.")}
         ${term("GENUFLECTION","A brief lowering of one knee as a gesture of reverence. In a Catholic church it is ordinarily directed toward the tabernacle when the Blessed Sacrament is reserved there.")}
         <p>Some people kneel in quiet prayer before Mass. Others sit. Local practice differs. None of this is a separate hidden ceremony you must memorize before you can attend.</p>`)}

      ${step(4,"The Entrance begins the Introductory Rites.",
        `${term("PROCESSION","An ordered movement of ministers into or through the church.")}
         <p>The priest and other ministers enter, commonly while an entrance chant or hymn is sung. The procession visually says: <strong>the gathered congregation is beginning one public act of worship.</strong></p>`)}

      ${step(5,"The Mass begins with the Sign of the Cross and greeting.",
        `${term("SIGN OF THE CROSS","The gesture and prayer naming the Father, Son, and Holy Spirit while tracing a cross over the body.")}
         <p>The priest begins in the name of the Father, Son, and Holy Spirit. He then greets the people liturgically, and the congregation responds.</p>
         <p>This is not small talk before the real event. It establishes who is gathered and in whose name the liturgy is being celebrated.</p>`)}

      ${step(6,"The Penitential Act acknowledges sin and asks for mercy.",
        `${term("PENITENTIAL ACT","An early part of Mass in which the congregation acknowledges sin and asks God for mercy.")}
         ${term("KYRIE","Greek for Lord. In the liturgy, Kyrie eleison means Lord, have mercy; Christe eleison means Christ, have mercy.")}
         <p>The Penitential Act is not the Sacrament of Confession. It is a communal act of repentance within Mass.</p>`)}

      ${step(7,"The Gloria is a hymn of praise used on many festive days.",
        `${term("GLORIA","A liturgical hymn beginning Glory to God in the highest. It is used on Sundays outside Advent and Lent, and on solemnities, feasts, and certain other celebrations.")}
         <p>If you attend in Advent or Lent and do not hear the Gloria, nothing has been forgotten. The calendar controls when it is used.</p>`)}

      ${step(8,"The Collect gathers the opening prayers into one prayer.",
        `${term("COLLECT","The opening prayer that concludes the Introductory Rites. The name is connected with the idea of gathering or collecting the people's prayer.")}
         <p>The priest invites everyone to pray, a short silence follows, and then he prays the Collect. The congregation answers <strong>Amen</strong>.</p>`)}

      ${step(9,"Now the Liturgy of the Word begins.",
        `${term("LITURGY OF THE WORD","The principal part of Mass centered on the proclamation of Scripture, the homily, the profession of faith when prescribed, and the Universal Prayer.")}
         <p>Think of it as a deliberate sequence:</p>
         <div class="primer-chain"><span>read</span><b>→</b><span>sing/respond</span><b>→</b><span>Gospel</span><b>→</b><span>homily</span><b>→</b><span>faith</span><b>→</b><span>prayer</span></div>`)}

      ${step(10,"The First Reading is proclaimed.",
        `${term("LECTIONARY","The liturgical book containing the Scripture readings assigned for Mass.")}
         <p>On most Sundays the First Reading is from the Old Testament. During the Easter season it commonly comes from the Acts of the Apostles. At the end, the reader announces that this is the Word of the Lord, and the people respond.</p>`)}

      ${step(11,"The Responsorial Psalm is Scripture sung or recited as a response.",
        `${term("PSALM","A sacred song or poem from the biblical Book of Psalms.")}
         ${term("RESPONSORIAL","Structured around a response repeated by the congregation between verses.")}
         <p>The Psalm is not merely musical filler between readings. It is itself part of the proclamation of God's Word.</p>`)}

      ${step(12,"On Sundays and solemnities, a Second Reading usually follows.",
        `<p>The Second Reading is ordinarily taken from a New Testament letter or another New Testament writing outside the Gospels.</p>
         <p>Daily Mass normally has only one reading before the Gospel, which is why a weekday Mass feels shorter even though its basic structure is the same.</p>`)}

      ${step(13,"The Gospel receives special honor.",
        `${term("GOSPEL","Here, a reading from Matthew, Mark, Luke, or John concerning Jesus Christ.")}
         ${term("GOSPEL ACCLAMATION","A sung acclamation—normally Alleluia outside Lent—that prepares the assembly to hear the Gospel.")}
         <p>The congregation stands. The Gospel is proclaimed by a deacon or priest. This is why the physical posture changes: the liturgy marks the Gospel as the high point of the Scripture readings.</p>`)}

      ${step(14,"The Homily explains the proclaimed faith.",
        `${term("HOMILY","An address by an ordained minister within the liturgy that explains Scripture, the mysteries of faith, or their application to Christian life.")}
         <p>A homily overlaps with what many traditions call a sermon, but <strong>homily</strong> is the normal Catholic liturgical word for this part of Mass.</p>`)}

      ${step(15,"The Creed is the congregation's profession of faith.",
        `${term("CREED","A formal summary or profession of Christian belief. The word comes from Latin credo, I believe.")}
         <p>On Sundays and solemnities, the congregation ordinarily recites the Nicene Creed; the Apostles' Creed is permitted in certain circumstances. After listening to the Word, the assembly states the faith it professes.</p>`)}

      ${step(16,"The Universal Prayer asks for the needs of Church and world.",
        `${term("UNIVERSAL PRAYER","The prayers of the faithful, in which petitions are offered for the Church, public needs, those in difficulty, and the local community.")}
         <p>These are the intentions that often end with a repeated response such as <strong>Lord, hear our prayer.</strong></p>`)}

      ${step(17,"Now the Mass turns from the ambo toward the altar.",
        `<p>This physical change helps you see the transition from the <strong>Liturgy of the Word</strong> to the <strong>Liturgy of the Eucharist</strong>.</p>
         ${term("LITURGY OF THE EUCHARIST","The principal part of Mass in which the gifts are prepared, the Eucharistic Prayer is offered, and the faithful are led to Holy Communion.")}
         <div class="primer-chain"><span>bread & wine</span><b>→</b><span>Eucharistic Prayer</span><b>→</b><span>Communion</span></div>`)}

      ${step(18,"Bread and wine are brought to the altar and prepared.",
        `${term("PRESENTATION OF THE GIFTS","The bringing forward and preparation of bread and wine for the Eucharist.")}
         ${term("OFFERTORY","A common traditional name for the preparation and presentation of the gifts and the accompanying offering.")}
         ${term("HOST","A small piece of unleavened wheat bread prepared for the Eucharist; after consecration Catholics refer to the consecrated host as the Body of Christ.")}
         ${term("CHALICE","The cup used for the Eucharistic wine and, after consecration, the Precious Blood.")}
         <p>A collection for the Church's support and charitable work commonly occurs during this preparation.</p>`)}

      ${step(19,"The Eucharistic Prayer is the central prayer of the Mass.",
        `${term("EUCHARISTIC PRAYER","The great prayer of thanksgiving and sanctification at the center of the Liturgy of the Eucharist.")}
         <p>The priest prays it on behalf of the whole assembly. It contains thanksgiving, acclamations, invocation of the Holy Spirit, the account of Christ's words at the Last Supper, memorial, offering, intercessions, and a final doxology.</p>`)}

      ${step(20,"The Preface leads into the Holy, Holy, Holy.",
        `${term("PREFACE","The opening part of the Eucharistic Prayer, giving thanks to God and leading into the Sanctus.")}
         ${term("SANCTUS","Latin for holy. The acclamation commonly called Holy, Holy, Holy.")}
         <p>The word <em>preface</em> here does not mean an optional introduction in the front of a book. It is a formal liturgical component of the Eucharistic Prayer.</p>`)}

      ${step(21,"The priest invokes the Holy Spirit over the gifts.",
        `${term("EPICLESIS","A part of the Eucharistic Prayer in which the Church invokes the Holy Spirit upon the gifts so that they become Christ's Body and Blood, and upon the people who will share in the Eucharist.")}
         <p>The strange-looking word becomes easier if you remember its basic Greek sense: an <strong>invocation</strong> or calling upon.</p>`)}

      ${step(22,"The Consecration is the point everyone recognizes.",
        `${term("CONSECRATION","The central sacramental action within the Eucharistic Prayer in which the priest repeats Christ's words over the bread and wine and, in Catholic teaching, they become Christ's Body and Blood.")}
         ${term("TRANSUBSTANTIATION","The Catholic term for the change of the whole substance of bread and wine into the Body and Blood of Christ while the sensible appearances of bread and wine remain.")}
         <p>This is a specifically Catholic claim about what the Eucharist <strong>is</strong>, not merely what it symbolizes. The outward properties still look and taste like bread and wine; Catholic teaching says the underlying sacramental reality has changed.</p>`)}

      ${step(23,"The Eucharistic Prayer continues after the Consecration.",
        `${term("ANAMNESIS","A liturgical memorial or remembrance of Christ's saving death, resurrection, and related saving acts; in the Eucharistic Prayer this is more than casually remembering a past event.")}
         ${term("DOXOLOGY","A short formula giving glory to God. The Eucharistic Prayer ends with a doxology followed by the people's Great Amen.")}
         <p>The familiar elevation of the chalice is not the end of the prayer. The Eucharistic Prayer continues through memorial, offering, intercessions, and the final doxology.</p>`)}

      ${step(24,"The Communion Rite begins with the Lord's Prayer.",
        `${term("LORD'S PRAYER","The prayer taught by Jesus beginning Our Father.")}
         <p>After the Our Father come prayers for peace, the Sign of Peace, the breaking of the consecrated bread, and the Lamb of God.</p>`)}

      ${step(25,"The Sign of Peace is a liturgical gesture, not an intermission.",
        `${term("SIGN OF PEACE","A brief exchange of peace among those nearby before Communion, usually by a handshake, nod, or another culturally appropriate gesture.")}
         <p>Its location makes sense: the assembly has prayed for peace and now expresses peace before sharing Communion.</p>`)}

      ${step(26,"The Lamb of God accompanies the breaking of the bread.",
        `${term("AGNUS DEI","Latin for Lamb of God. The litany sung or said while the consecrated bread is broken and prepared for Communion.")}
         <p>The priest then shows the Eucharistic host and invites those properly disposed to the supper of the Lamb.</p>`)}

      ${step(27,"Holy Communion is distributed.",
        `${term("HOLY COMMUNION","The reception of the consecrated Eucharist.")}
         <p>Catholic teaching holds that the consecrated Eucharist is truly Christ's Body and Blood, not ordinary bread and wine. For that reason Catholic discipline ordinarily reserves Communion to Catholics who are properly disposed, with limited exceptions defined by canon law.</p>
         <p>If you are visiting and are not receiving Communion, <strong>you do not need to join the Communion line</strong>. Remaining in your place and praying quietly is entirely normal.</p>`)}

      ${step(28,"After Communion comes quiet thanksgiving and a final prayer.",
        `<p>After Communion, there is commonly a period of silence or a hymn. The priest then prays the <strong>Prayer after Communion</strong>, asking that the sacrament bear fruit in the lives of those who received it.</p>`)}

      ${step(29,"The Concluding Rites are short.",
        `${term("CONCLUDING RITES","The final part of Mass: announcements when needed, the priest's greeting and blessing, and the dismissal.")}
         ${term("DISMISSAL","The formal sending forth of the congregation at the end of Mass.")}
         <p>The dismissal gives the Mass its outward direction: worship is completed by being sent back into ordinary life.</p>`)}

      ${step(30,"The entire Mass now fits on one mental map.",
        `<div class="history-summary-chain">
          <div><b>Gather</b><span>Entrance · Sign of Cross · Penitential Act · Gloria when used · Collect</span></div>
          <div><b>Hear</b><span>Readings · Psalm · Gospel · Homily · Creed · Universal Prayer</span></div>
          <div><b>Offer & Give Thanks</b><span>Gifts · Eucharistic Prayer · Consecration · Great Amen</span></div>
          <div><b>Receive</b><span>Our Father · Peace · Lamb of God · Communion · Prayer after Communion</span></div>
          <div><b>Go</b><span>Blessing · Dismissal</span></div>
         </div>
         <div class="memory"><strong>Memory aid:</strong> Gather → Hear → Eucharist → Communion → Go.</div>`)}
    `;
  }

  function peopleAndObjects(){
    return `
      ${step(1,"The priest presides at Mass.", `${term("PRIEST","An ordained minister who presides at Mass and, in Catholic teaching, acts sacramentally in the person of Christ in the Eucharistic celebration.")}<p>Only a validly ordained priest or bishop can celebrate the Eucharistic sacrifice and consecrate the bread and wine.</p>`)}
      ${step(2,"A deacon has a different ordained ministry.", `${term("DEACON","An ordained minister who can proclaim the Gospel, preach, assist at the altar, distribute Communion, baptize, and perform certain other ministries, but does not consecrate the Eucharist.")}<p>If a deacon is present, he normally proclaims the Gospel.</p>`)}
      ${step(3,"Readers proclaim Scripture.", `${term("LECTOR","A person who proclaims Scripture readings other than the Gospel at Mass.")}<p>The lector is not simply reading announcements. The office exists because proclamation of Scripture is a distinct liturgical action.</p>`)}
      ${step(4,"Music also has named roles.", `${term("CANTOR","A singer who leads or supports the congregation's sung prayer, especially responses and acclamations.")}${term("CHOIR","A group of singers who supports the sung parts of the liturgy.")}<p>The congregation itself is still a participant; it is not an audience watching performers on a stage.</p>`)}
      ${step(5,"Servers assist in the sanctuary.", `${term("ALTAR SERVER","A person who assists the priest and deacon with practical liturgical tasks in the sanctuary.")}<p>Servers carry the cross or candles, assist with the Missal and altar preparations, and perform other assigned functions.</p>`)}
      ${step(6,"The Missal and Lectionary are different books.", `${term("ROMAN MISSAL","The liturgical book containing the prayers, instructions, and texts needed for the celebration of Mass by the priest.")}${term("LECTIONARY","The liturgical book containing the Scripture readings assigned for Mass.")}<div class="compare-grid"><div class="compare-card green"><h3>Missal</h3><p>Mass prayers and directions.</p></div><div class="compare-card"><h3>Lectionary</h3><p>Scripture readings.</p></div></div>`)}
      ${step(7,"Several vessels have specialized names.", `${term("PATEN","A small plate used for the Eucharistic bread.")}${term("CIBORIUM","A covered vessel used to hold consecrated hosts, especially for distribution and reservation.")}${term("CHALICE","The cup used for the Eucharistic wine and Precious Blood.")}<p>These objects are treated reverently because of their direct use in the Eucharist.</p>`)}
      ${step(8,"Vestments tell you who is doing what.", `${term("VESTMENT","A garment worn by a minister for liturgical worship.")}${term("ALB","A long white liturgical garment.")}${term("STOLE","A narrow band of cloth worn by ordained ministers; its manner of wearing differs for priest and deacon.")}${term("CHASUBLE","The outer Mass vestment normally worn by the priest.")}<p>Liturgical colors—white, green, red, violet, and at times rose—change according to season and celebration.</p>`)}
      ${step(9,"Incense is used at some Masses, not all.", `${term("INCENSE","A fragrant substance burned so its smoke rises; in Catholic worship it can honor the altar, Gospel, gifts, clergy, congregation, the Blessed Sacrament, and the dead.")}${term("THURIBLE","The metal censer in which incense is burned.")}<p>If you attend a simple weekday Mass, you may see no incense at all. At a solemn celebration, you may see a great deal of it.</p>`)}
      ${step(10,"The architecture is organized around Word and Eucharist.", `<div class="history-summary-chain"><div><b>Ambo</b><span>Scripture is proclaimed.</span></div><div><b>Altar</b><span>The Eucharist is celebrated.</span></div><div><b>Tabernacle</b><span>The consecrated Eucharist is reserved.</span></div><div><b>Nave</b><span>The congregation gathers.</span></div><div><b>Sanctuary</b><span>The principal liturgical actions occur.</span></div></div>`)}
    `;
  }

  function firstVisit(){
    return `
      ${step(1,"You are allowed to walk in without already knowing the choreography.", `<p>A visitor can attend Mass. Sit where you like unless a seat is marked. The congregation's movements will make the rhythm obvious very quickly.</p>`)}
      ${step(2,"Standing, sitting, and kneeling are signals.", `<p>Roman Rite congregations change posture together. Standing generally marks prayer, proclamation, greeting, or reverence; sitting accompanies attentive listening at several points; kneeling especially marks the Eucharistic Prayer and prayer after Communion in many U.S. settings.</p><p>Local practice varies. If you are unsure, follow the congregation without treating a missed cue as a crisis.</p>`)}
      ${step(3,"The printed aid is your cheat sheet.", `${term("MISSALLETTE","A small worship aid containing Mass texts, responses, readings, hymns, or some combination of them.")}<p>Many parishes provide a missal, missalette, hymnbook, or projected text. You do not need to memorize every response before attending.</p>`)}
      ${step(4,"You do not have to imitate every devotional gesture.", `<p>Catholics cross themselves, bow, genuflect, kneel, and make other gestures at particular times. A visitor can simply observe. Understanding what the gesture means matters more than mechanically copying it.</p>`)}
      ${step(5,"Communion is the one point where the Church asks visitors to know the rule.", `<p>Holy Communion is ordinarily received by Catholics who are properly disposed. Other Christians are ordinarily not admitted to Communion except in limited circumstances under Catholic law. A person who is not receiving simply remains in place and prays.</p><p>There is no embarrassment in staying in the pew. Many Catholics also refrain from Communion at a particular Mass for their own reasons.</p>`)}
      ${step(6,"You will hear the same framework again next week.", `<p>The readings and prayers change, but the skeleton of the Mass remains recognizable. After a few visits, terms that initially sounded like jargon become location markers: <strong>Collect, Gospel, Creed, Offertory, Sanctus, Consecration, Communion, dismissal.</strong></p>`)}
      ${step(7,"The fastest way to keep your place is to remember five verbs.", `<div class="primer-chain"><span>Gather</span><b>→</b><span>Hear</span><b>→</b><span>Offer</span><b>→</b><span>Receive</span><b>→</b><span>Go</span></div><p>Everything else hangs from those five verbs.</p>`)}
      ${step(8,"Now the room is no longer full of unexplained behavior.", `<div class="memory"><strong>First-visit rule:</strong> watch, listen, follow the shared posture when comfortable, and do not receive Communion unless you fall within the Church's discipline for reception. The rest is learnable by repetition.</div>`)}
    `;
  }

  function sources(){
    return `
      <section class="entry-section history-sources">
        <h3>Sources and further reading</h3>
        <p>This primer describes the ordinary Roman Rite Mass in the United States and uses Catholic sources for Catholic doctrine and discipline.</p>
        <p>
          <a href="https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass" target="_blank" rel="noopener">USCCB — Order of Mass</a><br>
          <a href="https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal" target="_blank" rel="noopener">USCCB — General Instruction of the Roman Missal</a><br>
          <a href="https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-eucharist/guidelines-for-the-reception-of-communion" target="_blank" rel="noopener">USCCB — Guidelines for the Reception of Communion</a><br>
          <a href="https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html" target="_blank" rel="noopener">Vatican — Compendium of the Catechism</a><br>
          <a href="https://www.vatican.va/content/catechism/en/part_one/section_one/chapter_two/artcile_2/in_brief.html" target="_blank" rel="noopener">Vatican — Scripture, Tradition, and Magisterium</a>
        </p>
      </section>`;
  }

  const defaultBody = `
    <div class="entry-inner primer">
      <header class="primer-hero">
        <p class="kicker">Start here · baby steps</p>
        <h2>Catholicism & the Mass</h2>
        <p class="lede">Start with Christianity, build the Catholic vocabulary one piece at a time, then walk through an ordinary Roman Rite Mass from the front door to the dismissal. No unexplained church words.</p>
        <div class="primer-chain"><span>Christianity</span><b>→</b><span>Catholic Church</span><b>→</b><span>sacraments</span><b>→</b><span>Mass</span><b>→</b><span>Communion</span></div>
      </header>
      ${catholicBasics()}
      <section class="primer-finish"><p class="kicker">Part one complete</p><h3>Now walk through the Mass.</h3><p>The basic Catholic framework is in place. The next sequence follows the actual order of a usual Roman Rite Mass.</p></section>
      ${massWalkthrough()}
      ${sources()}
    </div>`;

  const entries = [
    {
      slug:"catholicism-from-zero",
      title:"Catholicism — From Zero",
      category:"Catholicism & Mass",
      short:"Christianity, Trinity, Scripture and Tradition, Pope and bishops, sacraments, saints, the liturgical year, and why Mass is central.",
      keywords:"Catholic Catholicism Christianity Trinity Jesus Pope bishop diocese parish priest sacraments Scripture Tradition Magisterium saints Mary Eucharist Mass Roman Rite Latin Church",
      body:catholicBasics()+sources()
    },
    {
      slug:"mass-complete-walkthrough",
      title:"The Mass — Complete Walkthrough",
      category:"Catholicism & Mass",
      short:"A step-by-step walk through the Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist, Communion, and Concluding Rites.",
      keywords:"Mass order Introductory Rites Liturgy Word Eucharist readings Gospel homily Creed offertory consecration transubstantiation communion dismissal Kyrie Gloria Sanctus Agnus Dei",
      body:massWalkthrough()+sources()
    },
    {
      slug:"mass-people-places-objects",
      title:"Mass — People, Places & Objects",
      category:"Catholicism & Mass",
      short:"Priest, deacon, lector, altar server, nave, sanctuary, altar, ambo, tabernacle, chalice, ciborium, vestments, and incense.",
      keywords:"church building nave sanctuary altar ambo tabernacle priest deacon lector cantor choir altar server missal lectionary paten ciborium chalice vestment alb stole chasuble incense thurible",
      body:peopleAndObjects()+sources()
    },
    {
      slug:"mass-first-visit",
      title:"Going to Mass for the First Time",
      category:"Catholicism & Mass",
      short:"What a visitor actually does: where to sit, how to follow the standing and kneeling, what the worship aid is for, and what to do at Communion.",
      keywords:"first Catholic Mass visitor stand sit kneel missalette communion non Catholic what do I do church etiquette",
      body:firstVisit()+sources()
    }
  ];

  window.CATHOLICISM_CONTENT = { entries, defaultBody };
})();