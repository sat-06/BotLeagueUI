import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompetitionsEvents from './components/CompetitionsEvents';
import PathToLeague from './components/PathToLeague';
import WhatIsBotleague from './components/WhatIsBotleague';
import Categories from './components/Categories';
import Disciplines from './components/Disciplines';
import WhyRegister from './components/WhyRegister';
import JoinEcosystem from './components/JoinEcosystem';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <CompetitionsEvents />
        <PathToLeague />
        <WhatIsBotleague />
        <Categories />
        <Disciplines />
        <WhyRegister />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
