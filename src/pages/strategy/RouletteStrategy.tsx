import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const bestStrategies = [
  {
    title: 'James Bond Strategy',
    body: 'A classic 3-bet layout that covers large parts of the table in one spin. Useful for players who want action quickly, but it requires a larger unit size.',
  },
  {
    title: 'Paroli Strategy',
    body: 'A positive progression: increase after wins, reset after a short streak. This keeps upside potential while reducing runaway loss cycles.',
  },
  {
    title: 'Fibonacci Strategy',
    body: 'Uses number sequence progression on even-money bets. Better for controlled sessions than aggressive martingale-style doubling.',
  },
  {
    title: "D'Alembert Strategy",
    body: 'Increase by one unit after a loss, decrease by one unit after a win. A simple low-volatility method for beginners.',
  },
];

const practicalTips = [
  'Choose European or French roulette where possible; lower edge than American double-zero.',
  'Use outside bets for longer sessions and lower variance (red/black, odd/even, high/low).',
  'Set stop-loss and take-profit before the first spin and follow them strictly.',
  'Treat every strategy as bankroll management, not a guaranteed winning system.',
  'Take short breaks every 20-30 minutes to keep decisions objective.',
];

const faq = [
  {
    q: 'What is the most successful roulette strategy?',
    a: 'There is no perfect strategy that guarantees profit. The best practical approach is combining low-edge roulette type selection with disciplined bankroll rules.',
  },
  {
    q: 'Can I win every spin with a strategy?',
    a: 'No. Roulette outcomes are independent and random each spin. Strategy helps manage risk and session length, not remove variance.',
  },
  {
    q: 'Should beginners use inside or outside bets?',
    a: 'Beginners usually benefit from outside bets first because hit frequency is higher and session volatility is lower.',
  },
];

export default function RouletteStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/strategy-hero/roulette-hero.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
            <p className="text-teal-300 text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">Strategy Guide</p>
            <h1 className="text-2xl md:text-4xl font-bold max-w-4xl">Best Roulette Strategy and Tips to Win Smarter</h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              A smart roulette strategy improves decision quality, not luck itself. This guide covers popular systems, bankroll
              algorithms, and practical tips so you can play with more control and less emotional betting.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              Think of roulette strategy as a framework for <span className="font-semibold">how</span> you bet, not a promise of
              guaranteed profit. The wheel is random, but your process does not have to be random. When you define your table
              selection, stake size, and exit plan before the first spin, you turn a reactive game into a structured session.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              Players who enjoy roulette long-term usually focus on three pillars: lower house edge tables, stable unit sizing,
              and strict emotional discipline. Those three habits will not eliminate variance, but they do reduce unforced errors.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Introduction to Roulette Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">House Edge</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  European roulette edge is around <span className="font-semibold">2.70%</span>, while American roulette is
                  <span className="font-semibold"> 5.26%</span> because of 00. Choosing table type is your first strategy decision.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Expected Value (EV)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Formula: <span className="font-mono">EV = (P(win) x win) - (P(loss) x loss)</span>. Strategy helps reduce poor
                  decisions, but random variance still drives short-term outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">How to Choose the Right Roulette Strategy</h2>
            <div className="space-y-4">
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">1) Match strategy to bankroll size</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If your bankroll is limited, non-aggressive systems are usually better because they preserve session time. If your
                  bankroll is larger, you can test progressive ideas, but table limits still cap recovery systems. In practice, many
                  players overestimate how long an aggressive progression can survive during a losing sequence.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">2) Match strategy to player style</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Some players prefer frequent smaller hits and calmer variance; others enjoy occasional high-payout attempts. There
                  is no universal best strategy for all personalities. The better approach is selecting one method you can follow
                  consistently instead of switching systems after every short streak.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">3) Match strategy to table conditions</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Table minimums, maximums, and wheel type can make or break a strategy. A method that looks good on paper may fail
                  quickly if the minimum bet is too high or if your progression hits the table cap too early. Always check rules
                  first, then decide whether the strategy is still viable.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Best Roulette Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestStrategies.map((tip) => (
                <article key={tip.title} className="rounded-lg border border-gray-200 bg-white p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Bankroll Formula and Practical Tips</h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5">
              <p className="text-sm md:text-base text-amber-900 leading-relaxed">
                Base unit method: <span className="font-mono">unit = bankroll / 100</span>. Example: bankroll AUD 500 = 1 unit AUD 5.
                Keep each spin at 1-2 units and stop if you lose 20 units or win 15 units.
              </p>
            </div>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Why this works in real sessions: the formula prevents oversized bets after emotional losses and naturally scales
                down risk for smaller budgets. Over many sessions, disciplined unit sizing usually matters more than choosing a
                complex progression system.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                A practical routine is: decide units before play, record every 10 spins, and pause if your decision quality drops.
                These process habits are boring by design, and that is exactly why they are effective.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              {practicalTips.map((tip) => (
                <div key={tip} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-sm text-gray-700">
                    <i className="fa fa-check-circle text-teal-600 mr-2" />
                    {tip}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-teal-200 bg-teal-50 p-4">
              <p className="text-sm text-teal-900 leading-relaxed">
                Want deeper numbers and payout math? Read the dedicated guide:
                <Link to="/roulette-odds" className="font-semibold underline ml-1">
                  Roulette Odds and Payouts
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-3">
              {faq.map((item) => (
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
