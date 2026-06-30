




import { useState } from 'react';
import { motion } from 'framer-motion';
// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';
// Pages
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Membership from './pages/Membership';
import Service from './pages/Service';
import Contacts from './pages/Contacts';
import News from './pages/News';

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('home');



  const sections = ['home', 'fleet', 'membership', 'service', 'contacts', 'news'];

  const index = sections.indexOf(activeSection);



  const handleNavigate = (section) => {

    setIsMenuOpen(false);

    setActiveSection(section);

  };



  return (

    <main className="relative w-screen h-screen overflow-hidden bg-black text-white">

      {/* Persistent UI elements */}

      <Navbar

        isMenuOpen={isMenuOpen}

        onMenuClick={() => setIsMenuOpen(true)}

        onNavigate={handleNavigate}

      />

      <Menu

        isOpen={isMenuOpen}

        setIsOpen={setIsMenuOpen}

        onNavigate={handleNavigate}

      />



      {/* Horizontal Slider Engine */}

      <motion.div

        animate={{ x: `-${index * 100}vw` }}

        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}

        className="flex h-screen"

        style={{ width: `${sections.length * 100}vw` }}

      >

        {/* Each slide is strictly scoped to its own full-screen container */}
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <Home />
        </div>
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <Fleet isActive={activeSection === 'fleet'} onClose={() => setActiveSection('home')} />
        </div>
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <Membership isActive={activeSection === 'membership'} onClose={() => setActiveSection('home')} />
        </div>
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <Service />
        </div>
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <Contacts />
        </div>
        <div className="w-screen h-screen shrink-0 overflow-y-auto">
          <News />
        </div>

      </motion.div>

    </main>

  );

} 