import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const strategyChartRows = [
  { betType: 'Banker', houseEdge: '1.06%', payout: '1:1 minus 5% commission', recommendation: 'Primary long-run option' },
  { betType: 'Player', houseEdge: '1.24%', payout: '1:1', recommendation: 'Good no-commission alternative' },
  { betType: 'Tie', houseEdge: '14.36%', payout: '8:1 or 9:1', recommendation: 'High variance, use sparingly' },
  { betType: 'Banker Pair', houseEdge: '10.36%', payout: '11:1', recommendation: 'Generally avoid for core play' },
  { betType: 'Player Pair', houseEdge: '10.36%', payout: '11:1', recommendation: 'Generally avoid for core play' },
];

const baccaratSystems = [
  {
    title: 'Martingale System',
    summary:
      'Double your stake after each loss and reset after a win. The idea is to recover previous losses with one winning hand.',
    example: 'AUD 10 -> lose -> AUD 20 -> lose -> AUD 40 -> win -> reset to AUD 10.',
    pros: 'Easy to understand and fast to execute.',
    cons: 'Can escalate too quickly during losing streaks and run into table limits.',
  },
  {
    title: 'Paroli (Reverse Martingale)',
    summary:
      'Increase stake after wins, not losses. This tries to maximize short hot streaks while keeping downside moderate.',
    example: 'AUD 10 -> win -> AUD 20 -> win -> AUD 40 -> lose -> reset to AUD 10.',
    pros: 'Lower risk of runaway loss than classic Martingale.',
    cons: 'One loss can erase recent streak gains.',
  },
  {
    title: 'Fibonacci Progression',
    summary:
      'Uses a slower sequence approach (1, 1, 2, 3, 5, 8...) for stake size changes, usually on Banker or Player bets.',
    example: 'Losses move forward in sequence, wins move back two steps.',
    pros: 'Smoother growth than strict doubling systems.',
    cons: 'Still vulnerable to long loss runs and patience fatigue.',
  },
  {
    title: 'Flat Betting',
    summary:
      'Always bet the same unit size regardless of previous outcomes. Best for stability and emotional control.',
    example: 'Every hand = AUD 10 on Banker or Player, no progression.',
    pros: 'Simple, predictable, bankroll-friendly.',
    cons: 'Does not amplify winning streaks aggressively.',
  },
  {
    title: '1-3-2-6 Sequence',
    summary:
      'A structured progression designed to capture short winning runs while capping downside when a loss appears.',
    example: 'Unit 10 -> 10, 30, 20, 60. Any loss resets sequence to first step.',
    pros: 'Disciplined and objective sequence-based control.',
    cons: 'Requires multiple consecutive wins to complete full cycle.',
  },
];

const baccaratGuide = [
  {
    title: 'Prioritize Banker in Standard Tables',
    detail: 'Banker usually carries the smallest house edge. Over many sessions, this single habit often improves decision quality the most.',
  },
  {
    title: 'Use Player as Your Secondary Option',
    detail: 'Player bet is clean 1:1 without commission and works as a reasonable alternative when you prefer simpler payout accounting.',
  },
  {
    title: 'Treat Tie as Occasional Entertainment',
    detail: 'Tie payouts look attractive but carry high edge and high volatility. Avoid building your main system around Tie.',
  },
  {
    title: 'Apply Unit-Based Bankroll Control',
    detail: 'Use fixed units (for example 1% of bankroll per base stake). Unit sizing stabilizes risk and prevents emotional over-betting.',
  },
];

const baccaratFaq = [
  {
    q: 'Is there a sure-win baccarat formula?',
    a: 'No. There is no guaranteed winning formula. Effective baccarat strategy is about reducing mistakes, choosing lower-edge bets, and managing bankroll consistently.',
  },
  {
    q: 'What is usually the best bet in baccarat?',
    a: 'On standard rules, Banker is usually the strongest long-run option despite commission. Player is the next best practical choice.',
  },
  {
    q: 'Is card counting useful in baccarat?',
    a: 'Usually far less impactful than in blackjack. Most environments use frequent shuffling and many decks, which limits count-based advantages.',
  },
];

export default function BaccaratStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/strategy-hero/baccarat-hero.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
            <p className="text-teal-300 text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">Strategy Guide</p>
            <h1 className="text-2xl md:text-4xl font-bold max-w-4xl">Basic Baccarat Strategy - Tips, Systems, and Smart Play</h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              Baccarat is easy to learn, but strong results usually come from structure, discipline, and understanding where the
              math is favorable. This guide explains why strategy matters, which bets are efficient, and how to choose systems
              without overcomplicating the game.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              The objective is not to predict cards perfectly. The objective is to make repeatable decisions: reduce high-edge bets,
              protect bankroll in downswings, and stay calm when variance creates short streaks in either direction.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              If you are new, start with simple rules and a fixed session plan. If you are experienced, this page can help you
              compare progression systems and choose a method that fits your tolerance for risk.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why Baccarat Strategy Is Important</h2>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Baccarat outcomes are random hand by hand, but your betting behavior is fully controllable. Strategy improves this
                controllable part: what you bet, how much you bet, and when you stop. Those decisions directly influence loss speed,
                session stability, and overall experience.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                A common mistake is chasing large payouts through high-edge bet types. Strong players do the opposite: they prefer
                mathematically efficient options and accept that growth is usually gradual. Over the long run, avoiding bad bets is
                often more important than finding "magic" bets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Baccarat Strategy Chart</h2>
            <div className="rounded-lg border border-gray-200 overflow-x-auto bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Bet Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">House Edge</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Payout</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {strategyChartRows.map((row) => (
                    <tr key={row.betType} className="border-t border-gray-200">
                      <td className="px-4 py-3 text-gray-700">{row.betType}</td>
                      <td className="px-4 py-3 text-gray-700">{row.houseEdge}</td>
                      <td className="px-4 py-3 text-gray-700">{row.payout}</td>
                      <td className="px-4 py-3 text-gray-700">{row.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              The chart is intentionally simple: if your priority is long-run efficiency, Banker and Player dominate most practical
              plans. Tie and Pair side bets can still be fun occasionally, but they are usually poor as core strategy anchors.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Probability Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Banker</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Win chance is slightly higher than Player. Typical house edge is around <span className="font-semibold">1.06%</span>.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Player</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Solid alternative with house edge near <span className="font-semibold">1.24%</span> in standard rules.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Tie</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  High payout but poor long-run expectation. Use sparingly, not as your core strategy.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Best Baccarat Systems and Features</h2>
            <div className="space-y-4 mb-6">
              {baccaratSystems.map((system) => (
                <article key={system.title} className="rounded-lg border border-gray-200 bg-white p-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{system.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{system.summary}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    <span className="font-semibold text-gray-800">Example:</span> {system.example}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">Pros:</span> {system.pros}
                    <br />
                    <span className="font-semibold text-gray-800">Cons:</span> {system.cons}
                  </p>
                </article>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Algorithmic Thinking for Baccarat</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 md:p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Keep it simple. You can use a repeatable model:
              </p>
              <p className="text-sm text-gray-700 font-mono bg-gray-50 border border-gray-200 rounded px-3 py-2">
                If bankroll stable -&gt; bet Banker (1 unit)
                <br />
                If down 3 units -&gt; pause 10 minutes
                <br />
                If up 5 units -&gt; lock profit and reduce to 0.5 unit
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                This process keeps decisions objective and limits tilt-driven bets.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                You can customize thresholds by risk level. Conservative players can use stop-loss at 10 units; aggressive players
                may allow 20 units. What matters most is that limits are set before play and not modified impulsively.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Practical Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {baccaratGuide.map((item) => (
                <article key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Session Routine That Works</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Start each session with a fixed objective: entertainment with controlled risk. Set unit size, session length, stop
                points, and preferred bet type in advance. Record results honestly. This converts baccarat from impulsive betting
                into a repeatable decision process.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-3">
              {baccaratFaq.map((item) => (
                <article key={item.q} className="rounded-lg border border-gray-200 bg-white p-4">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
