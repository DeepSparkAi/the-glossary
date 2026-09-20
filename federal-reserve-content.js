// Federal Reserve baby-step content for The Glossary.
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const term = (word, text) => `<div class="primer-term"><p class="primer-label">A new word</p><h3>${esc(word)}</h3><p>${esc(text)}</p></div>`;
  const step = (n, title, body) => `<section class="primer-step"><div class="primer-step-number">Step ${String(n).padStart(2,"0")}</div><h3>${title}</h3><div class="primer-step-body">${body}</div></section>`;
  const quiz = (question, answer) => `<div class="question-card"><p><strong>${question}</strong></p><details class="answer-reveal"><summary>Show answer</summary><p>${answer}</p></details></div>`;

  function fromZero(){
    return `
      ${step(1,"Start with the problem the Federal Reserve is trying to influence.",
        `${term("MONETARY POLICY","Actions by a central bank that change financial conditions—especially short-term interest rates and the availability and price of money and credit—to pursue economic goals.")}
         <p>The Federal Reserve does not set the price of groceries, order firms to hire workers, or directly choose how many dollars every bank lends. It changes the <strong>financial environment</strong> in which households, banks, and businesses make those decisions.</p>`)}

      ${step(2,"The Federal Reserve is the central bank of the United States.",
        `${term("CENTRAL BANK","A public institution that sits at the center of a country's monetary and banking system. It issues central-bank money, provides banking services to financial institutions and government, and conducts monetary policy.")}
         ${term("FEDERAL RESERVE","The U.S. central banking system, consisting of the Board of Governors in Washington, 12 regional Federal Reserve Banks, and related policymaking and operating bodies.")}
         <p>The short name is <strong>the Fed</strong>.</p>`)}

      ${step(3,"Congress gives the Fed economic goals.",
        `${term("DUAL MANDATE","The usual shorthand for the Federal Reserve's monetary-policy goals of maximum employment and stable prices. Federal law also refers to moderate long-term interest rates.")}
         <div class="compare-grid">
           <div class="compare-card green"><h3>Stable prices</h3><p>The FOMC defines its longer-run inflation goal numerically: <strong>2%</strong>, measured with the PCE price index.</p></div>
           <div class="compare-card"><h3>Maximum employment</h3><p>There is <strong>no fixed unemployment-rate target</strong>. The sustainable maximum changes with the economy and is estimated from many labor-market indicators.</p></div>
         </div>
         <div class="memory"><strong>Important correction:</strong> the rule is not “2% inflation and 4% unemployment.” The 2% number is an explicit goal. The Fed deliberately does not set a permanent unemployment percentage as the matching target.</div>`)}

      ${step(4,"Inflation means a broad rise in prices, not one expensive item.",
        `${term("INFLATION","A sustained increase in the general level of prices, which means a dollar buys less than before.")}
         ${term("PCE PRICE INDEX","The Personal Consumption Expenditures price index, a broad measure of consumer prices. The FOMC defines its 2% longer-run inflation goal using the annual change in this index.")}
         <p>If gasoline jumps while many other prices fall, that is not the same thing as broad inflation. The Fed watches broad price indexes and many underlying measures.</p>`)}

      ${step(5,"Unemployment is an indicator, not the Fed's single employment dial.",
        `${term("UNEMPLOYMENT RATE","The percentage of the labor force that is not employed and is actively looking for work under the official statistical definition.")}
         ${term("MAXIMUM EMPLOYMENT","The highest level of employment that can be sustained over time in a setting of price stability. The Fed says this level is not directly measurable and changes over time.")}
         <p>The FOMC also looks at job creation, participation, job openings, wage growth, layoffs, underemployment, and other measures. That is why there is no permanent “4% means done” rule.</p>`)}

      ${step(6,"The policymaking body is the FOMC.",
        `${term("FOMC","Federal Open Market Committee: the Federal Reserve body that sets the stance of U.S. monetary policy, including the target range for the federal funds rate.")}
         <p>The seven members of the Board of Governors and five Reserve Bank presidents vote at a time. The president of the Federal Reserve Bank of New York has a permanent vote; four of the other Reserve Bank presidents rotate voting seats. All 12 Reserve Bank presidents participate in the discussions.</p>`)}

      ${step(7,"The Fed's main steering wheel is an interest-rate target.",
        `${term("FEDERAL FUNDS RATE","The interest rate on overnight unsecured loans of reserve balances between eligible financial institutions.")}
         ${term("TARGET RANGE","The lower and upper bounds the FOMC sets for the federal funds rate rather than naming one exact rate.")}
         <p>In its current framework, the FOMC says its <strong>primary means</strong> of changing the stance of monetary policy is changing this target range.</p>`)}

      ${step(8,"A September 2026 snapshot gives us a real example.",
        `<div class="definition-grid">
           <div class="definition-card"><h3>Target range</h3><p><strong>3.75%–4.00%</strong></p></div>
           <div class="definition-card"><h3>IORB</h3><p><strong>3.90%</strong></p></div>
           <div class="definition-card"><h3>ON RRP rate</h3><p><strong>3.75%</strong></p></div>
           <div class="definition-card"><h3>Standing repo rate</h3><p><strong>4.00%</strong></p></div>
         </div>
         <p><strong>Dated snapshot:</strong> these settings took effect September 17, 2026 after the September 16 FOMC decision. The numbers will change; the mechanism taught below is the lasting part.</p>`)}

      ${step(9,"Before the mechanics, separate four kinds of 'money.'",
        `<div class="definition-grid">
          <div class="definition-card"><h3>Currency</h3><p>Physical Federal Reserve notes and coins held by the public.</p></div>
          <div class="definition-card"><h3>Bank deposit</h3><p>The balance shown in your checking or savings account: a liability of your commercial bank to you.</p></div>
          <div class="definition-card"><h3>Bank reserve</h3><p>A balance a bank holds at a Federal Reserve Bank, used for settlement and liquidity. You cannot spend reserve balances at a grocery store.</p></div>
          <div class="definition-card"><h3>Broad money</h3><p>Measures such as M2 that combine currency with categories of deposits and other highly liquid balances used by the public.</p></div>
         </div>
         <p>This distinction prevents the classic mistake that every Fed operation is literally a truck delivering newly printed paper dollars.</p>`)}

      ${step(10,"Commercial banks create deposit money when they lend.",
        `<p>Suppose a bank approves a $10,000 loan and credits the borrower's checking account by $10,000. The bank has created a new deposit liability and a new loan asset at the same time.</p>
         <div class="primer-chain"><span>bank makes loan</span><b>→</b><span>borrower's deposit rises</span><b>→</b><span>spendable bank money rises</span></div>
         <p>The bank is constrained by capital, liquidity, risk, profitability, regulation, funding conditions, and demand for loans. The modern system is not well described as a fixed mechanical “reserve multiplier” in which every extra reserve dollar automatically becomes a fixed number of loan dollars.</p>`)}

      ${step(11,"Reserve requirements are not the current day-to-day throttle.",
        `${term("RESERVE REQUIREMENT","A rule requiring a bank to hold a specified amount of reserves relative to specified deposit liabilities.")}
         <p>The Federal Reserve reduced reserve requirement ratios to <strong>0%</strong> effective March 26, 2020, and they remain zero. So the old textbook story “the Fed changes reserve requirements to expand or contract money” is historical background, not the ordinary 2026 operating mechanism.</p>`)}

      ${step(12,"The modern operating framework uses ample reserves.",
        `${term("AMPLE RESERVES","A regime in which the banking system holds enough reserve balances that small changes in their quantity do not by themselves cause large swings in the federal funds rate.")}
         <p>The Fed still manages the quantity of reserves. But in an ample-reserves system, it primarily <strong>steers overnight rates with administered interest rates</strong> while supplying enough reserves for the system to operate smoothly.</p>`)}

      ${step(13,"The first administered rate to learn is IORB.",
        `${term("IORB","Interest on Reserve Balances: the interest rate the Federal Reserve pays eligible banks and other depository institutions on balances they hold at Federal Reserve Banks.")}
         <p>If a bank can earn 3.90% simply by leaving an eligible reserve balance at the Fed, it has little reason to lend that money overnight for substantially less, all else equal.</p>
         <div class="primer-chain"><span>Fed raises IORB</span><b>→</b><span>overnight alternatives must compete</span><b>→</b><span>money-market rates tend to rise</span></div>`)}

      ${step(14,"The overnight reverse repo facility helps put a floor under rates for other money-market players.",
        `${term("ON RRP","Overnight Reverse Repurchase Agreement facility: eligible counterparties temporarily place cash with the Federal Reserve overnight and receive securities as collateral, earning the Fed's stated offering rate.")}
         <p>Money-market funds and other eligible counterparties that cannot receive IORB gain another safe overnight alternative. That helps discourage market rates from falling far below the Fed's intended range.</p>`)}

      ${step(15,"The standing repo facility works in the other direction.",
        `${term("REPO","Repurchase agreement: one party receives cash and provides securities, agreeing to reverse the transaction later. Economically it functions like a collateralized short-term loan.")}
         ${term("STANDING REPO FACILITY","A Federal Reserve facility offering eligible counterparties overnight reserves against high-quality securities at a stated rate.")}
         <p>If short-term funding becomes unusually expensive, eligible firms can obtain funds against Treasury and agency collateral at the standing facility. That helps limit upward pressure on overnight rates.</p>`)}

      ${step(16,"Now we can see how the Fed moves the federal funds rate without ordering anyone what to charge.",
        `<div class="history-summary-chain">
          <div><b>FOMC chooses target range</b><span>The policy stance.</span></div>
          <div><b>Fed sets IORB</b><span>Gives banks a powerful overnight benchmark.</span></div>
          <div><b>Fed sets ON RRP rate</b><span>Gives many nonbank money-market counterparties a safe overnight alternative.</span></div>
          <div><b>Fed operates standing repo</b><span>Provides a backstop source of reserves against collateral.</span></div>
          <div><b>New York Fed conducts operations</b><span>Keeps the market federal funds rate inside the desired range.</span></div>
         </div>`)}

      ${step(17,"Open-market purchases really do change reserve balances.",
        `${term("OPEN MARKET OPERATION","A Federal Reserve purchase or sale of securities in financial markets for monetary-policy implementation or reserve management.")}
         <p>Suppose the Fed buys a Treasury bill. It pays by crediting reserve balances in the banking system. The Fed gains the security as an asset; reserve balances on the liability side of the Fed's balance sheet rise.</p>
         <div class="primer-chain"><span>Fed buys Treasury</span><b>→</b><span>Fed assets ↑</span><b>+</b><span>bank reserves ↑</span></div>
         <p>No printing press is required. The new reserve balance is an electronic Federal Reserve liability.</p>`)}

      ${step(18,"A sale or balance-sheet runoff can move reserves the other way.",
        `<p>If the Fed sells securities, payment ultimately reduces reserve balances. If securities mature and the Fed does not replace them, the balance sheet can also shrink as the Treasury or agency payment process removes reserves.</p>
         <div class="primer-chain"><span>Fed assets ↓</span><b>→</b><span>reserve liabilities tend to ↓</span></div>`)}

      ${step(19,"But not every Fed asset purchase is 'stimulus.'",
        `<p>In the current ample-reserves framework, the Fed also makes <strong>reserve-management purchases</strong> of short-term Treasury securities so that the quantity of reserves stays ample as the financial system grows and other Fed liabilities change.</p>
         <p>That operation expands reserve balances, but its purpose can be <strong>technical rate control</strong> rather than a decision to make monetary policy easier.</p>
         <div class="memory"><strong>Same balance-sheet direction, different policy purpose.</strong> Always ask why the purchase is being made.</div>`)}

      ${step(20,"Quantitative easing is a different, larger balance-sheet policy.",
        `${term("QUANTITATIVE EASING — QE","Large-scale Federal Reserve purchases of longer-term securities intended to ease financial conditions, especially when the short-term policy rate is near its effective lower bound.")}
         <p>QE adds reserves and increases the Fed's securities holdings. More importantly for the policy goal, buying large quantities of longer-term securities can push their yields lower, encourage investors toward other assets, and lower broader borrowing costs.</p>`)}

      ${step(21,"Quantitative tightening runs the balance sheet down.",
        `${term("QUANTITATIVE TIGHTENING — QT","A reduction in the Federal Reserve's securities holdings, commonly by allowing maturing securities to run off without full replacement and sometimes by sales.")}
         <p>QT reduces the Fed's balance sheet and reserve balances over time and can put upward pressure on longer-term yields or otherwise tighten financial conditions. The Fed still has to keep reserves ample enough for rate control in its chosen framework.</p>`)}

      ${step(22,"The discount window is a bank backstop, not the normal steering wheel.",
        `${term("DISCOUNT WINDOW","Federal Reserve lending to eligible depository institutions against collateral.")}
         ${term("PRIMARY CREDIT RATE","The interest rate charged on the Fed's primary credit loans to generally sound depository institutions.")}
         <p>The discount window helps banks meet liquidity needs and supports financial stability. It is part of the toolkit, but the FOMC's everyday policy stance is communicated mainly through the federal funds target range and implemented through the current rate-control framework.</p>`)}

      ${step(23,"Now follow a rate increase all the way to inflation.",
        `<div class="history-summary-chain">
          <div><b>1 · FOMC raises its target range</b><span>Short-term policy setting becomes tighter.</span></div>
          <div><b>2 · Administered rates rise</b><span>IORB, ON RRP, repo and related settings help pull overnight rates upward.</span></div>
          <div><b>3 · Other rates reprice</b><span>Treasury bills, bank funding, deposits, business credit, auto loans and other borrowing costs respond to varying degrees.</span></div>
          <div><b>4 · Spending and investment cool</b><span>Some purchases no longer clear their required return or monthly-payment test.</span></div>
          <div><b>5 · Demand pressure eases</b><span>Businesses face less pressure to expand output and hiring at the previous pace.</span></div>
          <div><b>6 · Labor demand can cool</b><span>Hiring and vacancies can slow; unemployment can rise.</span></div>
          <div><b>7 · Price pressure cools</b><span>With lags, broad inflation can move toward the 2% goal.</span></div>
         </div>`)}

      ${step(24,"A rate cut sends the chain in the opposite direction.",
        `<div class="primer-chain"><span>policy rate ↓</span><b>→</b><span>credit conditions ease</span><b>→</b><span>borrowing/spending/investment strengthen</span><b>→</b><span>employment demand strengthens</span></div>
         <p>That is why the same institution worries about both excessive inflation and weak employment. Tightening can cool inflation but also cool hiring; easing can support jobs but also add demand when inflation is already too high.</p>`)}

      ${step(25,"This is what people mean when they say monetary policy works with a lag.",
        `${term("POLICY LAG","The delay between a monetary-policy action and its full effects on borrowing, spending, employment, and inflation.")}
         <p>A rate change affects overnight markets immediately. A factory project, a home purchase, a hiring plan, a lease renewal, or a wage negotiation takes time. Inflation responds through many of these delayed decisions rather than at the instant of the FOMC announcement.</p>`)}

      ${step(26,"The Fed influences the money supply, but does not target a simple pile of M2 dollars.",
        `<p>This is the key modernization of the old textbook phrase <strong>“the Fed manipulates the money supply.”</strong></p>
         <p>The Fed directly controls central-bank liabilities such as reserve balances and currency issuance mechanisms, and it can expand or contract its balance sheet. It also sets the short-term interest-rate environment that changes banks' incentives, credit conditions, asset prices, spending, and deposit creation.</p>
         <p>But the FOMC's current operating target is a <strong>federal funds rate range</strong>, not a fixed quantity of M1 or M2. Broader money is jointly shaped by banks, borrowers, depositors, markets, government flows, and the Fed's policy environment.</p>`)}

      ${step(27,"Expectations are part of the mechanism too.",
        `${term("INFLATION EXPECTATIONS","Beliefs held by households, firms, and investors about future inflation.")}
         <p>If people expect 2% inflation over the long run, wage contracts, price setting, bond yields, and business planning tend to embed that expectation. The Fed therefore communicates its goal and policy path because credibility changes behavior before every loan or purchase has actually occurred.</p>`)}

      ${step(28,"The Fed cannot manufacture more oil, wheat, houses, or computer chips.",
        `<p>Monetary policy works mainly through <strong>demand and financial conditions</strong>. A supply shock can raise prices because the economy has less of something available. Raising interest rates does not create the missing commodity.</p>
         <p>What tighter policy can do is prevent overall demand and inflation expectations from adjusting upward enough to turn a one-sector shock into persistent broad inflation.</p>`)}

      ${step(29,"The Fed therefore balances two kinds of error.",
        `<div class="compare-grid">
          <div class="compare-card"><h3>Too tight</h3><p>Demand can weaken too much, hiring can slow, and unemployment can rise farther than needed.</p></div>
          <div class="compare-card green"><h3>Too easy</h3><p>Demand can remain too strong for available supply, inflation can stay high, and expectations can drift upward.</p></div>
         </div>
         <p>The FOMC describes this as pursuing maximum employment and price stability across changing economic conditions—not mechanically defending one unemployment number.</p>`)}

      ${step(30,"The whole machine in one line.",
        `<div class="primer-chain"><span>FOMC decision</span><b>→</b><span>overnight rates</span><b>→</b><span>financial conditions</span><b>→</b><span>spending & hiring</span><b>→</b><span>inflation & employment</span></div>
         <div class="memory"><strong>Core memory:</strong> The Fed does not reach into stores and set prices. It changes the price and availability of money and credit; millions of private decisions transmit that change through the economy.</div>`)}
    `;
  }

  function balanceSheet(){
    return `
      ${step(1,"A central-bank balance sheet still obeys ordinary accounting.", `${term("ASSET","Something the Federal Reserve owns or is owed, such as Treasury securities or loans to banks.")}${term("LIABILITY","Something the Federal Reserve owes or has issued, such as reserve balances or Federal Reserve notes.")}<p>Every Fed operation lands on both sides of this accounting structure.</p>`)}
      ${step(2,"A Treasury purchase expands both sides.", `<div class="table-scroll"><table><thead><tr><th>Federal Reserve</th><th>Change</th></tr></thead><tbody><tr><td>Asset: Treasury security</td><td>↑</td></tr><tr><td>Liability: reserve balance</td><td>↑</td></tr></tbody></table></div><p>The seller ultimately receives a bank deposit; the banking system receives corresponding reserve settlement. This is why people say the Fed can create reserves electronically.</p>`)}
      ${step(3,"Cash withdrawal changes the form of Fed liabilities.", `<p>If the public wants more physical currency, banks obtain Federal Reserve notes and their reserve balances fall by a corresponding amount. Currency and reserves are both Federal Reserve liabilities; the public's preference changes their mix.</p>`)}
      ${step(4,"The Treasury's account matters too.", `${term("TREASURY GENERAL ACCOUNT — TGA","The U.S. Treasury's checking account at the Federal Reserve.")}<p>Tax payments into the TGA can drain reserves from banks; Treasury spending out of the TGA can add reserves back. This is one reason the Fed manages reserve supply even when it is not changing the stance of monetary policy.</p>`)}
      ${step(5,"Reserve management is plumbing.", `<p>The level of reserves moves because of currency demand, the Treasury's balance, Fed securities holdings, repo operations, and other balance-sheet items. The New York Fed's market desk offsets or accommodates these movements so overnight rates remain controlled.</p><div class="memory"><strong>Plumbing is not the same thing as stance.</strong> A technical operation can keep the pipes full without meaning the FOMC has decided to stimulate the economy.</div>`)}
    `;
  }

  function trainer(){
    return `
      <section class="entry-section grammar-check">
        <h3>Baby-step trainer: follow the lever</h3>
        <div class="question-list">
          ${quiz("Inflation is persistently above the 2% goal and the FOMC chooses to tighten. What is the first policy variable you should expect it to change?","The target range for the federal funds rate. In the modern framework that is the FOMC's primary means of adjusting the stance of monetary policy.")}
          ${quiz("The Fed raises IORB. Why does that matter if ordinary consumers cannot hold reserve balances?","Banks can hold reserves and earn IORB. A higher safe return on reserves changes the minimum returns banks are willing to accept in overnight markets and helps pull short-term market rates upward. Those rates then transmit into broader financial conditions.")}
          ${quiz("The Fed buys a Treasury bill from the market. Does it need to print paper currency to pay for it?","No. The settlement can be made by crediting electronic reserve balances. The Fed's securities assets rise and reserve liabilities rise.")}
          ${quiz("Does a larger reserve balance force a bank to make a proportional amount of new loans?","No. Lending depends on capital, liquidity, risk, profitability, funding conditions, borrower demand, regulation, and other factors. The old fixed reserve-multiplier story is not a good description of the current ample-reserves system.")}
          ${quiz("Is 4% unemployment the Fed's official target?","No. The FOMC has a numerical 2% longer-run PCE inflation goal. It explicitly says maximum employment is not directly measurable and that specifying a fixed employment goal would not be appropriate.")}
          ${quiz("If higher rates reduce house purchases and business investment, what link in the transmission chain are you seeing?","Financial conditions are changing real spending decisions. Lower interest-sensitive demand is one route by which tighter monetary policy eventually reduces price pressure.")}
          ${quiz("The Fed buys short-term Treasury bills only to maintain an ample quantity of reserves. Must that mean the FOMC is launching QE?","No. Reserve-management purchases can be technical operations designed to keep reserves ample and preserve rate control. QE is a broader easing policy involving large-scale asset purchases intended to ease financial conditions.")}
          ${quiz("Why can fighting inflation raise unemployment?","Tighter credit and higher required returns can reduce spending and investment. Businesses then have less reason to expand production and hiring as quickly, so labor demand can weaken.")}
          ${quiz("Why does the Fed care about inflation expectations if today's CPI or PCE number is already known?","Future expectations influence contracts, wage demands, prices, interest rates, and investment decisions. Keeping long-run expectations anchored near the goal makes actual inflation easier to stabilize.")}
          ${quiz("What is the shortest accurate replacement for 'the Fed prints money to control inflation'?","The Fed changes short-term interest rates and central-bank liquidity, using administered rates and balance-sheet tools to influence credit, spending, employment, and inflation.")}
        </div>
      </section>`;
  }

  function sources(){
    return `
      <section class="entry-section history-sources">
        <h3>Sources and further reading</h3>
        <p>This trainer uses the Federal Reserve's current ample-reserves operating framework. The dated rate box reflects the September 16, 2026 FOMC decision.</p>
        <p>
          <a href="https://www.federalreserve.gov/monetarypolicy/monetary-policy-strategy-tools-and-communications-statement-on-longer-run-goals-monetary-policy-strategy-2025.htm" target="_blank" rel="noopener">Federal Reserve — 2025 Statement on Longer-Run Goals and Monetary Policy Strategy</a><br>
          <a href="https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm" target="_blank" rel="noopener">Federal Reserve — Monetary Policy: Goals and How It Works</a><br>
          <a href="https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm" target="_blank" rel="noopener">Federal Reserve — FOMC statement, September 16, 2026</a><br>
          <a href="https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm" target="_blank" rel="noopener">Federal Reserve — Implementation Note, September 16, 2026</a><br>
          <a href="https://www.federalreserve.gov/monetarypolicy/reservereq.htm" target="_blank" rel="noopener">Federal Reserve — Reserve Requirements</a><br>
          <a href="https://www.federalreserve.gov/monetarypolicy/2026-07-mpr-part2.htm" target="_blank" rel="noopener">Federal Reserve — 2026 balance-sheet and money-market developments</a>
        </p>
      </section>`;
  }

  const defaultBody = `
    <div class="entry-inner primer">
      <header class="primer-hero">
        <p class="kicker">Start here · baby steps</p>
        <h2>The Federal Reserve — from zero to the transmission mechanism</h2>
        <p class="lede">What the Fed is, what “2% inflation” actually means, why there is no official 4% unemployment target, what bank reserves really are, and exactly how a policy-rate change gets from the FOMC to borrowing, spending, jobs, and prices.</p>
        <div class="primer-chain"><span>Fed decision</span><b>→</b><span>overnight money</span><b>→</b><span>credit</span><b>→</b><span>spending & jobs</span><b>→</b><span>inflation</span></div>
      </header>
      ${fromZero()}
      ${trainer()}
      ${sources()}
    </div>`;

  const entries = [
    {
      slug:"federal-reserve-complete-primer",
      title:"Federal Reserve — Complete Baby-Step Primer",
      category:"Monetary Policy",
      short:"From the dual mandate and 2% inflation goal through IORB, repos, reserves, open-market operations, QE/QT, and the full interest-rate transmission chain.",
      keywords:"Federal Reserve Fed FOMC monetary policy inflation 2 percent unemployment maximum employment federal funds IORB reserves money supply M1 M2 repo reverse repo QE QT quantitative easing tightening interest rates",
      body:fromZero()+sources()
    },
    {
      slug:"fed-balance-sheet-money-creation",
      title:"Fed Balance Sheet & Money Creation",
      category:"Monetary Policy",
      short:"A small accounting lesson showing exactly what changes when the Fed buys a Treasury, reserves rise, currency is withdrawn, or the Treasury spends.",
      keywords:"Federal Reserve balance sheet assets liabilities reserves currency Treasury purchase TGA money creation open market operation",
      body:balanceSheet()+sources()
    },
    {
      slug:"fed-policy-trainer",
      title:"Federal Reserve — Policy Mechanism Trainer",
      category:"Monetary Policy",
      short:"Ten show-the-answer questions that force the rate → credit → spending → employment → inflation chain to become intuitive.",
      keywords:"Federal Reserve trainer quiz monetary policy rate hike rate cut inflation employment reserves IORB QE questions",
      body:trainer()+sources()
    }
  ];

  window.FEDERAL_RESERVE_CONTENT = { entries, defaultBody };
})();