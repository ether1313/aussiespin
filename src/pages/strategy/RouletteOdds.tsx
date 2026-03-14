import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const payoutRows = [
  { bet: 'Single Number', covered: 1, payout: '35:1', usProb: '2.63%', euProb: '2.70%' },
  { bet: 'Split', covered: 2, payout: '17:1', usProb: '5.26%', euProb: '5.41%' },
  { bet: 'Street', covered: 3, payout: '11:1', usProb: '7.89%', euProb: '8.11%' },
  { bet: 'Corner', covered: 4, payout: '8:1', usProb: '10.53%', euProb: '10.81%' },
  { bet: 'Six Line', covered: 6, payout: '5:1', usProb: '15.79%', euProb: '16.22%' },
  { bet: 'Column / Dozen', covered: 12, payout: '2:1', usProb: '31.58%', euProb: '32.43%' },
  { bet: 'Red/Black, Odd/Even, High/Low', covered: 18, payout: '1:1', usProb: '47.37%', euProb: '48.65%' },
];

export default function RouletteOdds() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <p className="text-teal-300 text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">Roulette Guide</p>
            <h1 className="text-2xl md:text-4xl font-bold max-w-4xl">Roulette Odds and Payouts Guide</h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              Understanding roulette odds helps you pick better bets and manage bankroll with confidence. This page explains
              payout formulas, probabilities, and practical tips for both European and American roulette.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              Many players focus only on payout numbers, but real value comes from combining payout with hit frequency and table
              edge. A 35:1 payout looks exciting, yet it behaves very differently from 1:1 outside bets in terms of volatility and
              bankroll pressure.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              If you understand the relationship between probability, payout, and house advantage, your betting choices become
              clearer and more intentional. That is the purpose of this guide.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">How Roulette Payout Works</h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900 leading-relaxed">
                Quick formula:
                <span className="font-mono"> payout odds ~= (total pockets / covered pockets) - 1</span>. Real casino payouts are set
                slightly lower than pure probability, which creates the house edge.
              </p>
            </div>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Example: in American roulette there are 38 pockets. A single-number bet has true odds of 37:1, but the common payout
                is 35:1. That difference is not random; it is exactly where the casino edge comes from.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                The same principle applies across other bet types. As coverage increases, hit rate improves but payout ratio drops.
                Your strategy should balance those two dimensions based on bankroll and risk preference.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Roulette Payout and Probability Table</h2>
            <div className="rounded-lg border border-gray-200 overflow-x-auto bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Bet Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Numbers Covered</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Payout</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">American Odds</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">European Odds</th>
                  </tr>
                </thead>
                <tbody>
                  {payoutRows.map((row) => (
                    <tr key={row.bet} className="border-t border-gray-200">
                      <td className="px-4 py-3 text-gray-700">{row.bet}</td>
                      <td className="px-4 py-3 text-gray-700">{row.covered}</td>
                      <td className="px-4 py-3 text-gray-700 font-mono">{row.payout}</td>
                      <td className="px-4 py-3 text-gray-700">{row.usProb}</td>
                      <td className="px-4 py-3 text-gray-700">{row.euProb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Tips to Improve Value Per Session</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Prefer EU/French Wheels</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lower house edge means more efficient bankroll usage and better long-session survivability.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Mix Inside and Outside Intelligently</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Use outside bets for consistency and occasional inside bets for upside instead of all-in volatility.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Calculate Unit Size First</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Keep unit size around 1% of bankroll and avoid doubling systems beyond table limits.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Track Time and Emotion</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most big mistakes happen under tilt. Time-box sessions and pause after losing streaks.
                </p>
              </article>
            </div>
            <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">A Better Decision Routine</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before each session, decide three numbers in advance: your unit size, maximum loss, and profit lock point. During
                play, avoid changing them unless there is a clear external reason. This routine removes most impulsive decisions and
                keeps your odds strategy aligned with bankroll protection.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                In short: strong roulette decisions are less about predicting where the ball lands, and more about choosing bet
                structures that keep you in control while variance does its job.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
