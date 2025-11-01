// app/chemistry/ChemistryClient.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
    FaBatteryQuarter,
    FaDna,
  FaBalanceScale,
  FaCalculator,
  FaFilter,
  FaChartBar,
  FaAtom,
  FaRadiation,
  FaVectorSquare,
  FaCircleNotch,
  FaWaveSquare,
  FaMicrochip,
  FaWind,
  FaThermometerHalf,
  FaCompressAlt,
  FaExpandAlt,
  FaTemperatureLow,
  FaEquals,
  FaHashtag,
  FaBalanceScaleLeft,
  FaTint,
  FaTemperatureHigh,
  FaArrowUp,
  FaMagnet,
  FaWater,
  FaCube,
  FaSnowflake,
  FaGem,
  FaTh,
  FaBolt,
  FaExchangeAlt,
  FaVial,
  FaPhabricator,
  FaIndustry,
  FaSlidersH,
  FaListOl,
  FaMountain,
  FaTachometerAlt,
  FaFire,
  FaThermometerFull,
  FaBook,
  FaBatteryFull,
  FaGavel,
  FaBalanceScaleRight,
  FaArrowsAltH,
  FaLink,
  FaShapes,
  FaPuzzlePiece,
  FaDesktop,
  FaCompass,
  FaMobileAlt,
  FaTable,
  FaChartLine,
  FaTag,
  FaCopy,
  FaOilCan,
  FaSignature,
  FaProjectDiagram,
  FaCog,
  FaPhp,
  FaWineBottle,
  FaBoxes,
  FaHeart,
  FaPalette,
  FaGraduationCap,
  FaUserCheck,
  FaTimes,
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaArrowRight,
  FaFlask
} from 'react-icons/fa'

interface Topic {
  id: string
  name: string
  path: string
  icon: React.ReactNode
}

interface TopicCategory {
  name: string
  icon: React.ReactNode
  topics: Topic[]
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  fundamentals: {
    name: 'Fundamentals of Chemistry',
    icon: <FaBalanceScale className="text-blue-600" />,
    topics: [
      { id: 'moles-avogadro', name: 'Moles and Avogadro\'s Numbers', path: 'moles-avogadro', icon: <FaBalanceScale className="text-blue-600" /> },
      { id: 'stoichiometry', name: 'Stoichiometric Calculations', path: 'stoichiometry', icon: <FaCalculator className="text-indigo-600" /> },
      { id: 'limiting-reactants', name: 'Limiting and Excess Reactants', path: 'limiting-reactants', icon: <FaFilter className="text-purple-600" /> },
      { id: 'yield', name: 'Theoretical and Percentage Yield', path: 'yield', icon: <FaChartBar className="text-teal-600" /> }
    ]
  },
  atomicStructure: {
    name: 'Atomic Structure',
    icon: <FaAtom className="text-red-600" />,
    topics: [
      { id: 'proton-discovery', name: 'Discovery of Proton', path: 'proton-discovery', icon: <FaAtom className="text-red-600" /> },
      { id: 'quantum-theory', name: 'Planck\'s Quantum Theory', path: 'quantum-theory', icon: <FaRadiation className="text-pink-600" /> },
      { id: 'quantum-numbers', name: 'Quantum Numbers', path: 'quantum-numbers', icon: <FaVectorSquare className="text-fuchsia-600" /> },
      { id: 'orbital-shapes', name: 'Shapes of Orbitals', path: 'orbital-shapes', icon: <FaCircleNotch className="text-rose-600" /> },
      { id: 'hydrogen-spectrum', name: 'Spectrum of Hydrogen', path: 'hydrogen-spectrum', icon: <FaWaveSquare className="text-amber-600" /> },
      { id: 'electronic-config', name: 'Electronic Configuration', path: 'electronic-config', icon: <FaMicrochip className="text-yellow-600" /> }
    ]
  },
  gases: {
    name: 'Gases',
    icon: <FaWind className="text-cyan-600" />,
    topics: [
      { id: 'kinetic-theory', name: 'Kinetic Molecular Theory', path: 'kinetic-theory', icon: <FaWind className="text-cyan-600" /> },
      { id: 'stp', name: 'Standard Temperature and Pressure', path: 'stp', icon: <FaThermometerHalf className="text-blue-600" /> },
      { id: 'boyles-law', name: 'Boyle\'s Law', path: 'boyles-law', icon: <FaCompressAlt className="text-indigo-600" /> },
      { id: 'charles-law', name: 'Charles\'s Law', path: 'charles-law', icon: <FaExpandAlt className="text-purple-600" /> },
      { id: 'absolute-zero', name: 'Absolute Zero', path: 'absolute-zero', icon: <FaTemperatureLow className="text-violet-600" /> },
      { id: 'ideal-gas-equation', name: 'Ideal Gas Equation', path: 'ideal-gas-equation', icon: <FaEquals className="text-fuchsia-600" /> },
      { id: 'gas-constant', name: 'Units of Gas Constant (R)', path: 'gas-constant', icon: <FaHashtag className="text-pink-600" /> },
      { id: 'real-vs-ideal', name: 'Real vs Ideal Gases', path: 'real-vs-ideal', icon: <FaBalanceScaleLeft className="text-rose-600" /> }
    ]
  },
  liquids: {
    name: 'Liquids',
    icon: <FaTint className="text-blue-600" />,
    topics: [
      { id: 'liquid-properties', name: 'Properties of Liquids', path: 'liquid-properties', icon: <FaTint className="text-blue-600" /> },
      { id: 'evaporation', name: 'Evaporation and Boiling Point', path: 'evaporation', icon: <FaTemperatureHigh className="text-orange-600" /> },
      { id: 'vapor-pressure', name: 'Vapor Pressure', path: 'vapor-pressure', icon: <FaArrowUp className="text-red-600" /> },
      { id: 'hydrogen-bonding', name: 'Hydrogen Bonding', path: 'hydrogen-bonding', icon: <FaMagnet className="text-indigo-600" /> },
      { id: 'water-anomaly', name: 'Anomalous Behavior of Water', path: 'water-anomaly', icon: <FaWater className="text-cyan-600" /> }
    ]
  },
  solids: {
    name: 'Solids',
    icon: <FaCube className="text-gray-600" />,
    topics: [
      { id: 'crystalline-solids', name: 'Crystalline Solids', path: 'crystalline-solids', icon: <FaCube className="text-gray-600" /> },
      { id: 'ionic-crystals', name: 'Factors Affecting Ionic Crystals', path: 'ionic-crystals', icon: <FaSnowflake className="text-blue-600" /> },
      { id: 'crystal-types', name: 'Ionic vs Molecular Crystals', path: 'crystal-types', icon: <FaGem className="text-purple-600" /> },
      { id: 'crystal-lattice', name: 'Crystal Lattice', path: 'crystal-lattice', icon: <FaTh className="text-indigo-600" /> },
      { id: 'lattice-energy', name: 'Lattice Energy', path: 'lattice-energy', icon: <FaBolt className="text-yellow-600" /> }
    ]
  },
  equilibrium: {
    name: 'Chemical Equilibrium',
    icon: <FaBalanceScale className="text-green-600" />,
    topics: [
      { id: 'chemical-equilibrium', name: 'Chemical Equilibrium', path: 'chemical-equilibrium', icon: <FaBalanceScale className="text-green-600" /> },
      { id: 'le-chatelier', name: 'Le Chatelier\'s Principle', path: 'le-chatelier', icon: <FaExchangeAlt className="text-teal-600" /> },
      { id: 'solubility-product', name: 'Solubility Products', path: 'solubility-product', icon: <FaVial className="text-emerald-600" /> },
      { id: 'common-ion', name: 'Common Ion Effect', path: 'common-ion', icon: <FaVial className="text-lime-600" /> },
      { id: 'buffer-solutions', name: 'Buffer Solutions', path: 'buffer-solutions', icon: <FaPhabricator className="text-green-600" /> },
      { id: 'haber-process', name: 'Haber\'s Process', path: 'haber-process', icon: <FaIndustry className="text-cyan-600" /> }
    ]
  },
  kinetics: {
    name: 'Reaction Kinetics',
    icon: <FaBolt className="text-yellow-600" />,
    topics: [
      { id: 'chemical-kinetics', name: 'Chemical Kinetics', path: 'chemical-kinetics', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'reaction-factors', name: 'Factors Affecting Reaction Rate', path: 'reaction-factors', icon: <FaSlidersH className="text-amber-600" /> },
      { id: 'reaction-order', name: 'Order of Reaction', path: 'reaction-order', icon: <FaListOl className="text-orange-600" /> },
      { id: 'activation-energy', name: 'Activation Energy', path: 'activation-energy', icon: <FaMountain className="text-red-600" /> },
      { id: 'rate-constant', name: 'Rate Constant', path: 'rate-constant', icon: <FaTachometerAlt className="text-pink-600" /> }
    ]
  },
  thermochemistry: {
    name: 'Thermochemistry',
    icon: <FaFire className="text-orange-600" />,
    topics: [
      { id: 'thermodynamics', name: 'Thermodynamics', path: 'thermodynamics', icon: <FaFire className="text-orange-600" /> },
      { id: 'exo-endothermic', name: 'Exo/Endothermic Reactions', path: 'exo-endothermic', icon: <FaThermometerFull className="text-red-600" /> },
      { id: 'energy-terms', name: 'Energy Terms', path: 'energy-terms', icon: <FaBook className="text-blue-600" /> },
      { id: 'internal-energy', name: 'Internal Energies', path: 'internal-energy', icon: <FaBatteryFull className="text-green-600" /> },
      { id: 'thermo-laws', name: 'Laws of Thermodynamics', path: 'thermo-laws', icon: <FaGavel className="text-indigo-600" /> },
      { id: 'hess-law', name: 'Hess\'s Law', path: 'hess-law', icon: <FaBalanceScaleRight className="text-purple-600" /> },
      { id: 'enthalpy', name: 'Enthalpy', path: 'enthalpy', icon: <FaArrowUp className="text-teal-600" /> }
    ]
  },
  electrochemistry: {
    name: 'Electrochemistry',
    icon: <FaBatteryFull className="text-purple-600" />,
    topics: [
      { id: 'redox-reactions', name: 'Redox Reactions', path: 'redox-reactions', icon: <FaExchangeAlt className="text-pink-600" /> },
      { id: 'oxidation-reduction', name: 'Oxidation and Reduction', path: 'oxidation-reduction', icon: <FaArrowsAltH className="text-red-600" /> },
      { id: 'balancing-equations', name: 'Balancing Chemical Equations', path: 'balancing-equations', icon: <FaBalanceScale className="text-green-600" /> },
      { id: 'standard-electrode', name: 'Standard Hydrogen Electrode', path: 'standard-electrode', icon: <FaBatteryQuarter className="text-blue-600" /> }
    ]
  },
  chemicalBonding: {
    name: 'Chemical Bonding',
    icon: <FaLink className="text-indigo-600" />,
    topics: [
      { id: 'vsepr-theory', name: 'VSEPR Theory', path: 'vsepr-theory', icon: <FaShapes className="text-purple-600" /> },
      { id: 'sigma-pi-bonds', name: 'Sigma and Pi Bonds', path: 'sigma-pi-bonds', icon: <FaLink className="text-indigo-600" /> },
      { id: 'hybridization', name: 'Hybridization', path: 'hybridization', icon: <FaPuzzlePiece className="text-blue-600" /> },
      { id: 'vsepr-application', name: 'Application of VSEPR Theory', path: 'vsepr-application', icon: <FaDesktop className="text-cyan-600" /> },
      { id: 'dipole-moment', name: 'Dipole Moment', path: 'dipole-moment', icon: <FaCompass className="text-teal-600" /> },
      { id: 'dipole-application', name: 'Application of Dipole Moment', path: 'dipole-application', icon: <FaMobileAlt className="text-green-600" /> },
      { id: 'bond-energy', name: 'Bond Energy', path: 'bond-energy', icon: <FaBolt className="text-yellow-600" /> }
    ]
  },
  blockElements: {
    name: 'S- and P-Block Elements',
    icon: <FaTable className="text-gray-600" />,
    topics: [
      { id: 'periodic-properties', name: 'Properties and Trends', path: 'periodic-properties', icon: <FaChartLine className="text-blue-600" /> },
      { id: 'element-blocks', name: 'S-, P-, D- & F-Block Elements', path: 'element-blocks', icon: <FaTable className="text-gray-600" /> },
      { id: 'group-i', name: 'Reactions of Group I Elements', path: 'group-i', icon: <FaVial className="text-red-600" /> },
      { id: 'group-ii', name: 'Reactions of Group II Elements', path: 'group-ii', icon: <FaVial className="text-orange-600" /> },
      { id: 'group-iv', name: 'Reactions of Group IV Elements', path: 'group-iv', icon: <FaVial className="text-yellow-600" /> }
    ]
  },
  transitionElements: {
    name: 'Transition Elements',
    icon: <FaMagnet className="text-rose-600" />,
    topics: [
      { id: 'electronic-structure', name: 'Electronic Structure', path: 'electronic-structure', icon: <FaMicrochip className="text-pink-600" /> }
    ]
  },
  organicFundamentals: {
    name: 'Organic Chemistry Fundamentals',
    icon: <FaFlask className="text-green-600" />,
    topics: [
      { id: 'organic-definition', name: 'Definition and Classification', path: 'organic-definition', icon: <FaBook className="text-blue-600" /> },
      { id: 'functional-groups', name: 'Functional Groups', path: 'functional-groups', icon: <FaTag className="text-indigo-600" /> },
      { id: 'isomerism', name: 'Isomerism', path: 'isomerism', icon: <FaCopy className="text-purple-600" /> }
    ]
  },
  hydrocarbons: {
    name: 'Hydrocarbons',
    icon: <FaOilCan className="text-gray-600" />,
    topics: [
      { id: 'alkanes-nomenclature', name: 'Nomenclature of Alkanes', path: 'alkanes-nomenclature', icon: <FaSignature className="text-blue-600" /> },
      { id: 'free-radical', name: 'Free Radical Mechanism', path: 'free-radical', icon: <FaRadiation className="text-red-600" /> },
      { id: 'alkenes-nomenclature', name: 'Nomenclature of Alkenes', path: 'alkenes-nomenclature', icon: <FaSignature className="text-indigo-600" /> },
      { id: 'alkenes-shapes', name: 'Shapes of Alkenes', path: 'alkenes-shapes', icon: <FaProjectDiagram className="text-purple-600" /> },
      { id: 'alkenes-reactivity', name: 'Reactivity of Alkenes', path: 'alkenes-reactivity', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'alkanes-preparation', name: 'Preparation of Alkanes', path: 'alkanes-preparation', icon: <FaCog className="text-gray-600" /> },
      { id: 'benzene-mot', name: 'MOT of Benzene', path: 'benzene-mot', icon: <FaAtom className="text-pink-600" /> },
      { id: 'resonance', name: 'Resonance and Resonance Energy', path: 'resonance', icon: <FaWaveSquare className="text-cyan-600" /> },
      { id: 'benzene-reactivity', name: 'Reactivity of Benzene', path: 'benzene-reactivity', icon: <FaBolt className="text-amber-600" /> },
      { id: 'benzene-reactions', name: 'Chemical Reactions of Benzene', path: 'benzene-reactions', icon: <FaVial className="text-orange-600" /> },
      { id: 'substituents-effect', name: 'Effect of Substituents', path: 'substituents-effect', icon: <FaArrowRight className="text-red-600" /> },
      { id: 'alkynes-nomenclature', name: 'IUPAC System of Alkynes', path: 'alkynes-nomenclature', icon: <FaSignature className="text-teal-600" /> },
      { id: 'alkynes-preparation', name: 'Preparation of Alkynes', path: 'alkynes-preparation', icon: <FaCog className="text-green-600" /> },
      { id: 'alkynes-acidity', name: 'Acidity of Alkynes', path: 'alkynes-acidity', icon: <FaPhp className="text-lime-600" /> },
      { id: 'alkynes-reactions', name: 'Reactions of Alkynes', path: 'alkynes-reactions', icon: <FaVial className="text-emerald-600" /> },
      { id: 'substitution-addition', name: 'Substitution vs Addition', path: 'substitution-addition', icon: <FaBalanceScale className="text-gray-600" /> }
    ]
  },
  alkylHalides: {
    name: 'Alkyl Halides',
    icon: <FaVial className="text-purple-600" />,
    topics: [
      { id: 'halides-nomenclature', name: 'Nomenclature', path: 'halides-nomenclature', icon: <FaSignature className="text-indigo-600" /> },
      { id: 'halides-reactivity', name: 'Structure and Reactivity', path: 'halides-reactivity', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'substitution-elimination', name: 'Substitution vs Elimination', path: 'substitution-elimination', icon: <FaExchangeAlt className="text-blue-600" /> }
    ]
  },
  alcoholsPhenols: {
    name: 'Alcohols and Phenols',
    icon: <FaWineBottle className="text-blue-600" />,
    topics: [
      { id: 'alcohols-nomenclature', name: 'Nomenclature of Alcohols', path: 'alcohols-nomenclature', icon: <FaSignature className="text-indigo-600" /> },
      { id: 'alcohols-structure', name: 'Structure of Alcohols', path: 'alcohols-structure', icon: <FaProjectDiagram className="text-purple-600" /> },
      { id: 'alcohols-reactivity', name: 'Reactivity of Alcohols', path: 'alcohols-reactivity', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'phenols-nomenclature', name: 'Nomenclature of Phenols', path: 'phenols-nomenclature', icon: <FaSignature className="text-teal-600" /> },
      { id: 'phenols-structure', name: 'Structure of Phenols', path: 'phenols-structure', icon: <FaProjectDiagram className="text-green-600" /> },
      { id: 'phenols-reactivity', name: 'Reactivity of Phenols', path: 'phenols-reactivity', icon: <FaBolt className="text-amber-600" /> },
      { id: 'alcohols-phenols', name: 'Alcohols vs Phenols', path: 'alcohols-phenols', icon: <FaBalanceScale className="text-gray-600" /> }
    ]
  },
  aldehydesKetones: {
    name: 'Aldehydes and Ketones',
    icon: <FaVial className="text-orange-600" />,
    topics: [
      { id: 'carbonyl-nomenclature', name: 'Nomenclature', path: 'carbonyl-nomenclature', icon: <FaSignature className="text-indigo-600" /> },
      { id: 'carbonyl-structure', name: 'Structure', path: 'carbonyl-structure', icon: <FaProjectDiagram className="text-purple-600" /> },
      { id: 'carbonyl-preparation', name: 'Preparation', path: 'carbonyl-preparation', icon: <FaCog className="text-blue-600" /> },
      { id: 'carbonyl-reactivity', name: 'Reactivity', path: 'carbonyl-reactivity', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'carbonyl-reactions', name: 'Reactions', path: 'carbonyl-reactions', icon: <FaVial className="text-red-600" /> }
    ]
  },
  carboxylicAcids: {
    name: 'Carboxylic Acids',
    icon: <FaVial className="text-pink-600" />,
    topics: [
      { id: 'acids-nomenclature', name: 'Nomenclature', path: 'acids-nomenclature', icon: <FaSignature className="text-indigo-600" /> },
      { id: 'acids-structure', name: 'Structure', path: 'acids-structure', icon: <FaProjectDiagram className="text-purple-600" /> },
      { id: 'acids-preparation', name: 'Preparation', path: 'acids-preparation', icon: <FaCog className="text-blue-600" /> },
      { id: 'acids-reactivity', name: 'Reactivity', path: 'acids-reactivity', icon: <FaBolt className="text-yellow-600" /> },
      { id: 'acids-conversion', name: 'Conversion of Carboxylic Acids', path: 'acids-conversion', icon: <FaExchangeAlt className="text-green-600" /> }
    ]
  },
  macromolecules: {
    name: 'Macromolecules',
    icon: <FaDna className="text-teal-600" />,
    topics: [
      { id: 'proteins-classification', name: 'Classification of Proteins', path: 'proteins-classification', icon: <FaBoxes className="text-blue-600" /> },
      { id: 'proteins-importance', name: 'Importance of Proteins', path: 'proteins-importance', icon: <FaHeart className="text-red-600" /> },
      { id: 'enzymes', name: 'Enzymes as Biocatalyst', path: 'enzymes', icon: <FaBolt className="text-yellow-600" /> }
    ]
  },
  industrialChemistry: {
    name: 'Industrial Chemistry',
    icon: <FaIndustry className="text-gray-600" />,
    topics: [
      { id: 'adhesives', name: 'Adhesives', path: 'adhesives', icon: <FaGem className="text-blue-600" /> },
      { id: 'dyes', name: 'Dyes', path: 'dyes', icon: <FaPalette className="text-purple-600" /> },
      { id: 'polymers', name: 'Polymers', path: 'polymers', icon: <FaLink className="text-indigo-600" /> }
    ]
  }
}

export default function ChemistryClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [showWarning, setShowWarning] = useState(false)

  // Show warning popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryKey)) {
        newSet.delete(categoryKey)
      } else {
        newSet.add(categoryKey)
      }
      return newSet
    })
  }

  const subjectLinks = [
    { name: 'Biology', href: '/biology', color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Physics', href: '/physics', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'English', href: '/english', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Logical Reasoning', href: '/logical-reasoning', color: 'bg-orange-500 hover:bg-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <FaBars className="w-5 h-5" />
              </button>
              <Link href="/" className="flex items-center space-x-2">
                <FaGraduationCap className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">ProLearner</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/signin" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-80 bg-white border-r border-gray-200 transform
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto max-h-screen
        `}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Chemistry Topics</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {Object.entries(TOPIC_CATEGORIES).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <span className="font-medium text-gray-900 text-sm">{category.name}</span>
                    </div>
                    {expandedCategories.has(key) ? (
                      <FaChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <FaChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </button>

                  {expandedCategories.has(key) && (
                    <div className="px-4 pb-3 space-y-2">
                      {category.topics.map((topic) => (
                        <Link
                          key={topic.id}
                          href={`/chemistry/${topic.path}`}
                          className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {topic.icon}
                          <span>{topic.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 mb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Chemistry</h1>
              <p className="text-xl text-blue-100 mb-6">
                Master chemical principles from atomic structure to organic compounds. 
                Comprehensive coverage for MDCAT success with practical applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaBook className="w-5 h-5" />
                  <span>20 Comprehensive Chapters</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaChartLine className="w-5 h-5" />
                  <span>200+ Detailed Topics</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaUserCheck className="w-5 h-5" />
                  <span>Practical Applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Navigation */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Subjects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subjectLinks.map((subject) => (
                <Link
                  key={subject.name}
                  href={subject.href}
                  className={`${subject.color} text-white p-4 rounded-lg text-center font-semibold transition-colors shadow-md hover:shadow-lg`}
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaBook className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">20</p>
                  <p className="text-gray-600">Chapters</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">200+</p>
                  <p className="text-gray-600">Topics</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaChartLine className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1500+</p>
                  <p className="text-gray-600">Practice Questions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Chapters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Chapters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TOPIC_CATEGORIES).slice(0, 6).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    {category.icon}
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.topics.length} topics covering essential concepts
                  </p>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Explore Topics →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ProLearner</h3>
              <p className="text-gray-400">
                Your complete MDCAT preparation platform with expert guidance and comprehensive resources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/chemistry" className="hover:text-white">Chemistry</Link></li>
                <li><Link href="/biology" className="hover:text-white">Biology</Link></li>
                <li><Link href="/physics" className="hover:text-white">Physics</Link></li>
                <li><Link href="/english" className="hover:text-white">English</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">Email: support@mdcatprolearner.com</p>
              <p className="text-gray-400">WhatsApp: +92 307 0169442</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProLearner. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Warning Popup */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserCheck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-600 mb-6">
                Pro Users are requested not to share your login credentials with anyone. 
                Violation may result in permanent blocking of your Pro status without notice.
              </p>
              <button
                onClick={() => setShowWarning(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}