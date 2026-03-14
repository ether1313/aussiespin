import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const blackjackTips = [
  'Memorize core basic-strategy decisions before increasing bet size.',
  'Always split A,A and 8,8; never split 10,10 in standard basic strategy.',
  'Use surrender when available in high-pressure matchups.',
  'Avoid insurance unless you are using accurate card counting.',
  'Choose tables with favorable rules (3:2 blackjack, dealer stands on soft 17).',
];

export default function BlackjackStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/strategy-hero/blackjack-hero.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/82" />
          </div>
          <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
            <div className="max-w-4xl bg-black/60 backdrop-blur-[1px] rounded-xl p-4 md:p-6">
              <p className="text-teal-300 text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">Strategy Guide</p>
              <h1 className="text-2xl md:text-4xl font-bold max-w-4xl">Basic Blackjack Strategy and Perfect Play Tips</h1>
              <p className="mt-4 text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed">
                Blackjack is a decision-driven game. A strong strategy chart plus solid bankroll discipline can reduce mistakes and
                make every hand more intentional. This page combines chart logic, card-counting basics, and practical play tips.
              </p>
              <p className="mt-3 text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed">
                Unlike most table games, blackjack gives you repeated decision points where correct choices have measurable long-run
                value. That is why good players spend more time learning decision quality than chasing short winning streaks.
              </p>
              <p className="mt-3 text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed">
                The goal is not to "beat every shoe". The goal is to build a repeatable process that minimizes weak actions and keeps
                your bankroll healthy across many sessions. When you do that, your results become more stable and easier to evaluate.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">How Basic Strategy Works</h2>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Think of blackjack basic strategy as an algorithm:
                <span className="font-mono"> your hand + dealer up-card = best move</span>.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Example: hard 16 vs dealer 10 is often <span className="font-semibold">Hit</span>; hard 12 vs dealer 4 is usually
                <span className="font-semibold"> Stand</span>. These choices come from simulation-based EV comparisons.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Soft Hands, Hard Hands, and Pair Logic</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Hard Hands</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hard hands have no flexible Ace value. Because bust risk rises quickly, your decisions should strongly react to the
                  dealer up-card strength and table rules.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Soft Hands</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Soft hands include an Ace counted as 11, which gives you more safety for aggressive options like doubling in
                  favorable spots.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Pair Decisions</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pair strategy is one of the biggest EV levers. Correct split decisions can outperform many small tweaks elsewhere.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Math, Edge, and Formula</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Edge Reduction</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With weak decisions, edge can climb fast. With favorable rules and proper strategy, house edge can drop near
                  <span className="font-semibold"> 0.5% </span> in many games.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Simple EV Model</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-mono">EV per hand = betSize x houseEdge</span>. If bet is AUD 10 and edge is 0.5%, long-run
                  theoretical loss is AUD 0.05 per hand before variance.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Hi-Lo Card Counting Basics</h2>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-800">Card Group</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-800">Count Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-700">2-6</td>
                    <td className="px-4 py-3 text-gray-700 font-mono">+1</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-700">7-9</td>
                    <td className="px-4 py-3 text-gray-700 font-mono">0</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-700">10-A</td>
                    <td className="px-4 py-3 text-gray-700 font-mono">-1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Running Count tracks visible card flow. True Count is
              <span className="font-mono"> running count / decks remaining</span>, used in multi-deck shoes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              Counting does not remove risk, and it requires speed plus consistency. For many players, mastering basic strategy and
              table selection first creates more reliable improvement than jumping into advanced counting too early.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Practical Tips and Discipline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {blackjackTips.map((step) => (
                <div key={step} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <p className="text-sm text-gray-700">
                    <i className="fa fa-check-circle text-teal-600 mr-2" />
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                A creative but practical training method: replay your last 20 hands and label each action as "chart-correct" or
                "emotion-driven". This habit quickly reveals where your real leaks are and helps you improve faster than just
                playing more volume.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-3">
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Can basic strategy guarantee wins?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No. It minimizes mistakes and improves long-run decisions but does not remove short-term randomness.
                </p>
              </article>
              <article className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Is a blackjack strategy chart allowed?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In most online and many live settings, yes. It is a decision aid, not a cheating tool.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
