import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CasinoList from '../home/components/CasinoList';

type Provider = {
  name: string;
  slug: string;
  description: string;
  strengths: string[];
  topTitles: string[];
  logoSrc: string;
  gameListImageSrc: string;
};

const providers: Provider[] = [
  {
    name: 'JILI',
    slug: 'jili',
    description:
      'JILI Games has rapidly emerged as a dynamic and innovative game provider in the online casino industry of Southeast Asia, with a notable presence in Thailand, Japan, and South Korea. The provider offers a diverse portfolio of over 150 games, including slots, table games, bingo, and their uniquely popular fishing games.\n\nTheir slots are known for engaging themes and unique features. For instance, "Golden Empire" is a high-volatility slot that takes players on an adventure through ancient civilizations, offering 32,400 winning lines, expansive bonus features, and multipliers. "Jungle King," on the other hand, is a medium-volatility game that provides free spins and interactive bonus rounds, appealing to a wide range of players.\n\nIn the fishing game category, "Mega Fishing" has gained popularity for its immersive gameplay, cash rebate options, and powerful weapons, allowing players to compete for big catches and prizes.\n\nRecognizing the global reach of online gaming, JILI Games supports multiple languages and currencies. Through their joint linking jackpot system, players worldwide share the common goal of pursuing super prizes, fostering more interactions and heightened excitement.',
    strengths: [
      '10+ certifications',
      'Supports over 50 currencies',
      'HTML technology powered',
      'Games available in 20+ languages',
      'Features 15+ fishing games',
      'BMM Testlabs-certified',
      'Gamification tool - GiftCode and SpinBonus',
    ],
    topTitles: ['Super Ace', 'Boxing King', 'Night City', 'Circus Joker 4096', 'Fortune Coins 2', 'Posedon', 'Party Night', 'Hot Chilli'],
    logoSrc: '/providers/jili/logo.png',
    gameListImageSrc: '/providers/jili/game-list.png',
  },
  {
    name: 'BOOONGO',
    slug: 'booongo',
    description:
      'Booongo, founded in the year 2015 is a popular developer of HD video slots that are free-to-play. Booongo creates slots for the online gambling market as well. Booongo has its headquarters in Curacao with other offices established in Ukraine and Taiwan. Booongo is a young company which entered into the online gambling market 5 years ago, but it has been creating some excellent thematic casino slots, which have increased its popularity. This game studio develops video slots in 2D and 3D animations, with stunning graphics and attractive gameplay.  They follow the rules and standards defined by the regulatory organizations.',
    strengths: ['Robust and reliable gaming software', 'Exceptional back-office features', 'Gorgeous graphics', 'Games generate higher profits', 'Unique and engaging gameplay'],
    topTitles: ['Sun of Egypt 5', 'Coin Strike', 'Maya Lock', 'Coin Express', 'Space Coins', 'Super Hot Chili', 'Power Crown', 'Coin Volcano', 'Pirate Chest', 'Power Sun'],
    logoSrc: '/providers/booongo/logo.svg',
    gameListImageSrc: '/providers/booongo/game-list.png',
  },
  {
    name: 'JDB',
    slug: 'jdb',
    description:
      'Established in 2010, JDB Gaming is an online software development company specialising in creating online casino games. It is mainly oriented toward the Chinese, Brazilian, Thai, Vietnamese, and Philippine markets, and it is also prevalent in Malaysia. Headquartered in Vietnam, the company was initially named JDB168 but rebranded into JDB Gaming. It follows the “Just Do The Best” principle to make sure that every game meets its high standards. The company delivers over 150 GLI-certified casino products and API solutions. JDB Gaming creates games with high RTP scores, modern designs, and engaging features. The provider offers a wide range of gaming series, from slots and bingo to fish shooting, card, and arcade games, so players can expect all-rounded online entertainment.',
    strengths: ['Over 150 slot, arcade, bingo, card, and fish shooting games', 'Many games feature RTP of over 96%', 'Most slot titles have multipliers and bonus games', 'Risk management', 'Big data analysis', 'Customisable interface'],
    topTitles: ['Birds Party', 'GoLaiFu', 'Golden Disco', 'Double Wilds', 'Lucky Diamond', 'Lantern Wealth', 'Maya Gold Crazy', 'Blossom of Wealth', 'Lucky Pearl'],
    logoSrc: '/providers/jdb/logo.png',
    gameListImageSrc: '/providers/jdb/game-list.png',
  },
  {
    name: 'CQ9',
    slug: 'cq9',
    description:
      'CQ9 Gaming made a name for themselves on the Asian continent and are currently looking to expand into European and American markets. However, that might be a tad difficult for now as they are only licensed by Curacao. Once they acquire more licenses, players won’t encounter any difficulties while playing their games, regardless of where they are located. Their titles run on HTML5 game engine, meaning that you can access them either via desktop or mobile devices, such as your phone or tablet, even if the casino doesn’t have a dedicated mobile app. When it comes to CQ9 Gaming and their software, their package includes more than 100 different games. Out of those, 98 are video slots. Considering the fact that they are still developing titles exclusively for the Asian market, most of their video slots come with distinct Asian themes and resemble Asian culture. CQ9’s video slots are diverse and include all major features that one would expect to find in modern-day video slots, such as multipliers, wilds, and free spins. While they offer a great selection of video slots, CQ9 Gaming has no table or live games in their repertoire. They do, however, have games which don’t fit the standard package. One of those titles is Paradise — a multiplayer fishing game that allows up to four players to play simultaneously in a co-op, trying to get to the high multiplier boss. Their games are audited by an independent company, which ensures their fairness. Moreover, they don’t have just any license, but the one issued by Gaming Labs International (GLI). GLI is one of the most prestigious license issuers out there and the official supervisor of more than 400 gambling institutes.',
    strengths: ['HTML5 games', 'Excellent variety of video slots', 'Curacao license', 'One of the biggest software providers for Asian market', 'Gaming Laboratories International certified'],
    topTitles: ['Rave Jump 2', 'Fire Chibi', 'Wing Chun', 'Move N Jump', 'Wolf Moon', 'Jump High 2', 'Acrobatics', 'Mafia', 'Night City'],
    logoSrc: '/providers/cq9/logo.png',
    gameListImageSrc: '/providers/cq9/game-list.png',
  },
  {
    name: 'YGR',
    slug: 'ygr',
    description:
      'YGR Games (YesGetRich) is an innovative, Asian-based online casino game provider founded in 2019 and owned by the YGR Group. The company quickly gained attention by releasing a range of titles that year and earned its official GLI certification in 2022. YGR Games operates under a core philosophy centred around vitality and creativity and blends cutting-edge technology with inventive game development and product design. Initially focused on video slots, YGR Games has expanded its portfolio to include various other game types, such as fishing games, arcade games, and scratchcards. These offerings have found homes in over 1,170 online casinos across the globe. The titles of YGR Games are available in 11 languages and over 100 currencies, which allows players to enjoy them in many parts of the world. While the company has primarily focused on serving the Asian market, its games are now available to operators in Africa, America, and Europe. This extensive international reach and its commitment to innovation position YGR Games as a promising industry leader.',
    strengths: ['GLI-certified provider', '80+ games released in five years', 'HTML technology powered', 'Games available in 11 languages and more than 100 currencies', 'Company recognised in 400+ jurisdictions worldwide', 'Less loading time, packed with smaller file'],
    topTitles: ['Super Neko', 'Maya Golden City 4', 'Gallop To Rich', 'Dragon Bowl', 'Candy Lubi', 'Boom Bird', 'Golden Dragon', 'LoongFaLe'],
    logoSrc: '/providers/ygr/logo.jpg',
    gameListImageSrc: '/providers/ygr/game-list.png',
  },
  {
    name: 'HABANERO',
    slug: 'habanero',
    description:
      'Habanero is a European provider that is constantly expanding its reach as a young but very successful provider of gaming content, based in Manila, Sofia and Johannesburg. It started its way to great achievements in 2012, targeting Asia markets; after reaching tremendous success there — Habanero became one of the TOP-4 best providers for Asian markets, thus the company decided to move West. First destination was CIS and Western European countries, and in 2018 the company is planning to conquer the markets of Western Europe! Habanero Software Habanero is undoubtedly one of the best software providers in the entire online gambling industry. They are offering over 100 games and hundreds of bonus features and jackpots to millions of players around the world. Although most of their customers are based in Asia, the company is successfully operating across other continents as well. The most amazing thing about them is how relatively new they are on the market. Many companies have been trying to become relevant for years, but to no avail. There are many requirements providers need to meet to get to the top of the industry, but the most crucial ones are business to business relationships, game quality and variety, generosity with bonuses, and fairness. Habanero, of course, met all of those requirements a long time ago. They are now simply maintaining their level of relevance whilst attempting to enter as many markets as possible. Some of their most popular releases are:',
    strengths: ['Unique style', 'Among the best in Asia', 'Bonus features', 'Jackpots', 'Good player retention'],
    topTitles: ['Hot Hot Fruit', 'Happy Ape', 'Fa Cai Shen', 'Slime Party', 'Disco Beats', 'Koi Gate', 'Mount Mazuma', 'Colossal Gems', 'Space Fortune'],
    logoSrc: '/providers/habanero/logo.svg',
    gameListImageSrc: '/providers/habanero/game-list.png',
  },
  {
    name: 'MICROGAMING',
    slug: 'microgaming',
    description:
      'Microgaming is a legendary gaming provider. It was the first to start creating online slots and offer them to the first online casino in the world. For over 30 years of experience it has produced over 850 products, their number ever growing, and to collect prestigious awards in different categories. It is also famous with its progressive jackpots and record winnings. All this and many other advantages have brought Microgaming recognition and success in the world of igaming. The company started its operations back in 1994 in the Isle of Man and has quickly gained popularity among gamblers. The first online casino in the world, InterCasino, used the software provided by the Microgaming brand in 1996. The success, however, may not be easily maintained. Therefore, Microgaming regularly works on improving the company’s games and on keeping a decent reputation. To date, more than 450 brands from all over the world are integrated into the Microgaming platform. Microgaming is present in the biggest regulated jurisdictions in the world. It is currently live in 20 regulated markets, with many more to come in the future. Another evident approach to content creation that Microgaming has incorporated is the integration of small-scale independent software development studios. By incorporating these studios, Microgaming has managed to corral the creative flows of each of these studios under its patronage and let them improve Microgaming’s portfolio. So far, Microgaming has integrated 12 studios. The company produces video slots, tables games, live dealer games, and is particularly well-known for its huge progressive jackpot titles, the most famous being Mega Moolah. Other than that, Microgaming has developed casino games for wearable devices and released titles featuring virtual reality. In 2024, Microgaming rebranded into Apricot Investments and moved its headquarters to Douglass, the Isle of Man. The reason behind renaming to Apricot Investments was the intention to open up new business areas and further expand the brand presence. The company CEO, Stephen Fisk, announced the company would soon offer even more online games of chance. Apricot will particularly focus on optimising game mechanics to diversify the game portfolio. Nowadays, Apricot works a lot on supporting different causes, including various charities (especially in the Isle of Man), students with financial barriers, climate change initiatives, and promoting sustainable practices to create a plastic-free planet. Moreover, the company developed the PlayItForward scheme in 2014, which is the award-winning CRS program demonstrating the company commitment to the planet Earth. Apricot proudly states that the company invested more than 2.5 billion euros in such initiatives over the last decade.',
    strengths: ['The biggest slots portfolio in the industry', 'Progressive jackpots', 'Player safety', 'Great bonuses and free spins', 'Releases up to 4 games per month', 'Award-winning provider'],
    topTitles: ['Mayan Boost', 'Pocket Ace', 'Lucky Rainbow Rush', 'Treasure Gems', '10000 Fortunes', 'Luck of the Devil', 'Sugar Mania 8000', 'Money On Reels', 'Cash Blitz'],
    logoSrc: '/providers/microgaming/logo.webp',
    gameListImageSrc: '/providers/microgaming/game-list.png',
  },
];

const evaluationPoints = [
  'Game quality and portfolio diversity',
  'Mobile compatibility and performance',
  'Security, RNG fairness, and compliance standards',
  'Innovation in bonus mechanics and gameplay systems',
  'Long-term reliability and product update cadence',
];

export default function SoftwareProvider() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.25),transparent_45%)] pointer-events-none" />
          <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
            <p className="text-teal-300 text-xs md:text-sm font-semibold tracking-wide uppercase mb-3">Software Providers</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl">
              Best Casino Software Providers in Australia
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
              This page introduces major software providers used by online casinos. We focus on practical factors that matter
              to players: game quality, stability, fair mechanics, and mobile experience. Below, you can compare JILI, BOOONGO,
              JDB, CQ9 Gaming, YGR, HABANERO, and Micrograming in one place.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs md:text-sm">
              <i className="fa fa-calendar-o text-teal-300" />
              <span>Updated: March 2026</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-10 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">What Defines a Top Provider</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {evaluationPoints.map((point) => (
                <div key={point} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-sm text-gray-700">
                    <i className="fa fa-check-circle text-teal-600 mr-2" />
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Provider Overview</h2>
            <div className="space-y-4">
              {providers.map((provider) => (
                <article key={provider.name} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 md:p-6">
                  <div className="mb-4">
                    <img
                      src={provider.logoSrc}
                      alt={`${provider.name} logo`}
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{provider.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key strengths</h4>
                      <ul className="space-y-1.5">
                        {provider.strengths.map((item) => (
                          <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                            <i className="fa fa-angle-right text-teal-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular titles</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.topTitles.map((title) => (
                          <span key={title} className="text-xs bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-full">
                            {title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Game list preview</h4>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                      <img
                        src={provider.gameListImageSrc}
                        alt={`${provider.name} game list`}
                        className="w-full h-auto rounded-md object-cover"
                      />
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-8 md:py-10 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">How to Choose Software You Can Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">1) Check licensing and audits</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prefer providers and casino platforms with visible compliance, independent testing, and transparent fairness standards.
                </p>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">2) Review portfolio depth</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A good provider offers variety: classic slots, modern features, and different volatility profiles for different player styles.
                </p>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">3) Test mobile performance</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mobile optimization is essential. Games should load quickly and keep UI quality stable across screen sizes.
                </p>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">4) Track update frequency</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Regular releases and maintenance are signs of an active provider with long-term support and healthy roadmap execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="provider-recommendation-casino" className="bg-white py-8 md:py-10 border-t border-gray-100">
          <div className="container mx-auto px-4">
          </div>
          <CasinoList searchQuery="" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
