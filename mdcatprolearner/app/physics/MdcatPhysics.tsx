import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  FaBook, FaClock, FaRedoAlt, FaCircleNotch,
  FaBookmark, FaRegBookmark, FaMoon, FaSun, FaWater, FaPlug,
  FaSearch, FaArrowLeft, FaBars, FaTimes, FaChevronDown, FaChevronUp,
  FaChartBar, FaVectorSquare, FaWaveSquare, FaAtom, FaRadiation,
  FaBolt, FaMagnet, FaMicrochip, FaRainbow, FaRunning, FaTemperatureHigh,
  FaArrowUp, FaGraduationCap, FaFilter, FaHome, FaClipboardList, FaEdit
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MdcatQuizCTA from '../../components/MdcatQuizCTA';
import SubjectNavigationCard from "../../components/SubjectNavigationCard";
import MDCATPastPapers from '../../components/MDCATPastPapers';
import { Helmet } from 'react-helmet';

/********************
 * Constants & Types *
 ********************/
interface Topic {
  id: string;
  name: string;
  path: string;
  icon?: React.ReactNode;
}

interface TopicCategory {
  name: string;
  icon: React.ReactNode;
  topics: Topic[];
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  mechanics: {
    name: 'Mechanics',
    icon: <FaBook className="text-blue-600" />,
    topics: [
      { id: 'vectors-equilibrium', name: 'Vectors and Equilibrium', path: 'vectors', icon: <FaVectorSquare className="text-blue-600" /> },
      { id: 'force-motion', name: 'Force and Motion', path: 'force-motion', icon: <FaRunning className="text-blue-600" /> },
      { id: 'work-energy', name: 'Work and Energy', path: 'work-energy', icon: <FaBolt className="text-blue-600" /> },
      { id: 'rotational-motion', name: 'Rotational and Circular Motion', path: 'rotational-motion', icon: <FaRedoAlt className="text-blue-600" /> },
      { id: 'fluid-dynamics', name: 'Fluid Dynamics', path: 'fluid-dynamics', icon: <FaWater className="text-blue-600" /> }
    ]
  },
  thermodynamics: {
    name: 'Thermodynamics',
    icon: <FaTemperatureHigh className="text-blue-600" />,
    topics: [
      { id: 'thermodynamics', name: 'Thermodynamics', path: 'thermodynamics', icon: <FaTemperatureHigh className="text-blue-600" /> }
    ]
  },
  waves: {
    name: 'Waves and Oscillations',
    icon: <FaChartBar className="text-blue-600" />,
    topics: [
      { id: 'waves-oscillations', name: 'Waves and Oscillations', path: 'waves-oscillations', icon: <FaWaveSquare className="text-blue-600" /> }
    ]
  },
  electromagnetism: {
    name: 'Electromagnetism',
    icon: <FaMagnet className="text-blue-600" />,
    topics: [
      { id: 'electrostatics', name: 'Electrostatics', path: 'electrostatics', icon: <FaBolt className="text-blue-600" /> },
      { id: 'current-electricity', name: 'Current Electricity', path: 'current-electricity', icon: <FaPlug className="text-blue-600" /> },
      { id: 'electromagnetism', name: 'Electromagnetism', path: 'electromagnetism', icon: <FaMagnet className="text-blue-600" /> },
      { id: 'electromagnetic-induction', name: 'Electromagnetic Induction', path: 'electromagnetic-induction', icon: <FaCircleNotch className="text-blue-600" /> },
      { id: 'alternating-current', name: 'Alternating-Current', path: 'alternating-current', icon: <FaBolt className="text-blue-600" /> },
    ]
  },
  electronics: {
    name: 'Electronics',
    icon: <FaMicrochip className="text-blue-600" />,
    topics: [
      { id: 'electronics', name: 'Electronics', path: 'electronics', icon: <FaMicrochip className="text-blue-600" /> }
    ]
  },
  modernPhysics: {
    name: 'Modern Physics',
    icon: <FaAtom className="text-blue-600" />,
    topics: [
      { id: 'modern-physics', name: 'Modern Physics', path: 'modern-physics', icon: <FaAtom className="text-blue-600" /> },
      { id: 'spectra', name: 'Spectra', path: 'spectra', icon: <FaRainbow className="text-blue-600" /> },
      { id: 'nuclear-physics', name: 'Nuclear Physics', path: 'nuclear-physics', icon: <FaRadiation className="text-blue-600" /> }
    ]
  }
};

type CategoryKey = keyof typeof TOPIC_CATEGORIES;

/*****************
 * UI Subcomponents
 *****************/
interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: Topic | null;
  currentProgress: number;
  onProgressUpdate: (progress: number) => void;
}

const ProgressModal: React.FC<ProgressModalProps> = ({ 
  isOpen, 
  onClose, 
  topic, 
  currentProgress, 
  onProgressUpdate 
}) => {
  const [progress, setProgress] = useState(currentProgress);
  
  useEffect(() => {
    setProgress(currentProgress);
  }, [currentProgress]);

  if (!isOpen || !topic) return null;

  const handleSave = () => {
    onProgressUpdate(progress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Update Progress for {topic.name}
        </h3>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300">Progress: {progress}%</span>
            <button 
              onClick={() => setProgress(100)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Mark as Complete
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Progress
          </button>
        </div>
      </div>
    </div>
  );
};

interface TopicItemProps {
  topic: Topic;
  progress?: number;
  bookmarked?: boolean;
  category: CategoryKey;
  onBookmarkToggle: (id: string, e: React.MouseEvent) => void;
  onProgressUpdate: (id: string, value: number, e: React.MouseEvent) => void;
  onTopicSelect: (id: string) => void;
  activeTopic: string;
  onOpenProgressModal: (topic: Topic) => void;
}

const TopicItem: React.FC<TopicItemProps> = React.memo(({ 
  topic, 
  progress = 0, 
  bookmarked = false, 
  category, 
  onBookmarkToggle, 
  onProgressUpdate,
  onTopicSelect, 
  activeTopic,
  onOpenProgressModal
}) => {
  const progressColor = progress >= 75 ? 'bg-green-500' : progress >= 25 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <li className={`relative group overflow-hidden rounded-lg mb-2 transition-all duration-200 ${
      progress === 100 ? 'border-l-4 border-green-500' : 'border-l-4 border-transparent'
    } ${activeTopic === topic.id 
        ? 'bg-blue-50 dark:bg-blue-900/20' 
        : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
    }`}>
      <div className={`absolute top-0 left-0 h-full ${progressColor} transition-all duration-500 opacity-20`} style={{ width: `${progress}%` }} aria-hidden="true"/>
      <div className="flex items-center justify-between p-3 relative z-10 text-gray-800 dark:text-gray-200">
        <Link 
          to={`/physics/${topic.path}`} 
          className="flex items-center truncate flex-1"
          onClick={() => onTopicSelect(topic.id)}
        >
          <div className="flex items-center truncate">
            <span className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0">
              {topic.icon || TOPIC_CATEGORIES[category].icon}
            </span>
            <span className="font-medium truncate">
              {topic.name}
            </span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-2 ml-2">
          {progress > 0 && (
            <button 
              className="text-xs font-semibold flex-shrink-0 bg-white dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onClick={(e) => onOpenProgressModal(topic)}
              title="Update progress"
            >
              {progress}%
            </button>
          )}
          
          <button 
            className={`p-1.5 rounded-full transition-all ${
              bookmarked ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-400 hover:text-yellow-400'
            }`}
            onClick={(e) => onBookmarkToggle(topic.id, e)}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this topic'}
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          
          <button 
            className="p-1.5 text-gray-400 hover:text-blue-500 rounded-full transition-colors"
            onClick={(e) => onOpenProgressModal(topic)}
            aria-label="Update progress"
          >
            <FaEdit size={14} />
          </button>
        </div>
      </div>
    </li>
  );
});
TopicItem.displayName = 'TopicItem';

/*****************
 * CTA Component *
 *****************/
const StudyPlanCTA: React.FC = () => (
  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-xl p-6 text-white shadow-lg h-full">
    <div className="flex items-start mb-4">
      <div className="bg-white/20 p-3 rounded-full mr-4">
        <FaGraduationCap className="text-2xl" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">Personalized Study Plan</h3>
        <p className="opacity-90 text-sm">Get a customized study schedule based on your strengths</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-white/10 p-3 rounded-lg">
        <div className="text-2xl font-bold mb-1">15+</div>
        <div className="text-xs opacity-90">Weeks Plan</div>
      </div>
      <div className="bg-white/10 p-3 rounded-lg">
        <div className="text-2xl font-bold mb-1">98%</div>
        <div className="text-xs opacity-90">Success Rate</div>
      </div>
    </div>
    <button className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-4 rounded-lg transition-colors">
      Create My Plan
    </button>
  </div>
);

/*****************
 * Error Boundary *
 *****************/
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error): ErrorBoundaryState { 
    return { hasError: true, error }; 
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { 
    console.error('ErrorBoundary caught an error:', error, errorInfo); 
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200">
          <h3 className="font-bold mb-2">Something went wrong</h3>
          <p className="text-sm">We encountered an error while loading this section. Please try refreshing the page.</p>
          {this.state.error && (
            <details className="mt-2 text-xs">
              <summary>Error details</summary>
              <pre>{this.state.error.message}</pre>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

/****************
 * Structured Data for SEO
 ****************/
const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Physics MDCAT Preparation",
    "description": "Comprehensive physics study materials for MDCAT preparation with topic-wise content, progress tracking, and practice questions.",
    "provider": {
      "@type": "Organization",
      "name": "MDCAT Prep",
      "sameAs": "https://yourwebsite.com"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

/****************
 * Main Component
 ****************/
const PhysicsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // UI State
  const [activeTopic, setActiveTopic] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  const [bookmarkedTopics, setBookmarkedTopics] = useState<string[]>([]);
  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [blink, setBlink] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [sidebarHeight, setSidebarHeight] = useState<string>('calc(100vh - 4rem)');
  const [progressModalOpen, setProgressModalOpen] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const [expandedCategories, setExpandedCategories] = useState<Record<CategoryKey, boolean>>(
    Object.keys(TOPIC_CATEGORIES).reduce((acc, key) => {
      acc[key as CategoryKey] = true;
      return acc;
    }, {} as Record<CategoryKey, boolean>)
  );

  /**************
   * Persistency
   **************/
  useEffect(() => {
    try {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedTopics') || '[]');
      const savedProgress = JSON.parse(localStorage.getItem('topicProgress') || '{}');
      setDarkMode(savedDarkMode);
      setBookmarkedTopics(Array.isArray(savedBookmarks) ? savedBookmarks : []);
      setTopicProgress(savedProgress && typeof savedProgress === 'object' ? savedProgress : {});
      if (savedDarkMode) document.documentElement.classList.add('dark');
    } catch (error) {
      console.error('Error loading saved preferences:', error);
    }
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('darkMode', String(darkMode)); } catch {}
  }, [darkMode]);

  // Adjust sidebar height on mobile to account for header
  useEffect(() => {
    const updateSidebarHeight = () => {
      if (window.innerWidth < 1024) {
        // On mobile, account for the header height
        setSidebarHeight('calc(100vh - 4rem)');
      } else {
        // On desktop, full height
        setSidebarHeight('100vh');
      }
    };

    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);
    return () => window.removeEventListener('resize', updateSidebarHeight);
  }, []);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blinking effect until interaction
  useEffect(() => {
    if (userInteracted) return;
    const interval = setInterval(() => setBlink(prev => !prev), 2000);
    return () => clearInterval(interval);
  }, [userInteracted]);

  /***********
   * Handlers
   ***********/
  const handleBackNavigation = useCallback(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    else if (location.key !== 'default') navigate(-1);
    else navigate('/');
  }, [mobileMenuOpen, location.key, navigate]);

  const toggleDarkMode = useCallback(() => setDarkMode((m) => !m), []);

  const toggleBookmark = useCallback((id: string, e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setBookmarkedTopics(prev => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      try { localStorage.setItem('bookmarkedTopics', JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const updateProgress = useCallback((id: string, value: number, e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setTopicProgress(prev => {
      const updated = { ...prev, [id]: value };
      try { localStorage.setItem('topicProgress', JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const handleProgressUpdate = useCallback((progress: number) => {
    if (selectedTopic) {
      setTopicProgress(prev => {
        const updated = { ...prev, [selectedTopic.id]: progress };
        try { localStorage.setItem('topicProgress', JSON.stringify(updated)); } catch {}
        return updated;
      });
    }
  }, [selectedTopic]);

  const openProgressModal = useCallback((topic: Topic) => {
    setSelectedTopic(topic);
    setProgressModalOpen(true);
  }, []);

  const closeProgressModal = useCallback(() => {
    setProgressModalOpen(false);
    setSelectedTopic(null);
  }, []);

  const toggleCategory = useCallback((cat: CategoryKey) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  }, []);

  const handleTopicSelect = useCallback((id: string) => { 
    setActiveTopic(id); 
    setMobileMenuOpen(false); 
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  /*******************
   * Derived / Memos *
   *******************/
  const overallProgress = useMemo(() => {
    const allTopics = Object.values(TOPIC_CATEGORIES).flatMap(c => c.topics);
    const totalProgress = Object.values(topicProgress).reduce((sum, val) => sum + (val || 0), 0);
    return allTopics.length ? Math.round((totalProgress / (allTopics.length * 100)) * 100) : 0;
  }, [topicProgress]);

  const topicsCovered = useMemo(() => {
    return Object.values(topicProgress).filter(p => p > 0).length;
  }, [topicProgress]);

  const totalTopics = useMemo(() => {
    return Object.values(TOPIC_CATEGORIES).flatMap(c => c.topics).length;
  }, []);

  const filteredTopicsByCategory = useMemo(() => {
    return Object.entries(TOPIC_CATEGORIES)
      .reduce((result, [category, { topics, ...rest }]) => {
        const filtered = topics.filter(topic => {
          const matchesSearch = topic.name.toLowerCase().includes(searchQuery.toLowerCase());
          const isCompleted = (topicProgress[topic.id] || 0) === 100;
          return matchesSearch && (!showCompleted || isCompleted);
        });
        
        if (filtered.length > 0) {
          result[category as CategoryKey] = { ...rest, topics: filtered };
        }
        return result;
      }, {} as Record<CategoryKey, TopicCategory>);
  }, [searchQuery, showCompleted, topicProgress]);

  /********
   * Render
   ********/
  return (
    <>
      {/* SEO Metadata and Structured Data */}
      <Helmet>
        <title>Physics Study Materials | MDCAT Preparation</title>
        <meta 
          name="description" 
          content="Master physics for MDCAT with our comprehensive study materials. Topic-wise content, progress tracking, practice questions, and past papers for effective preparation." 
        />
        <meta name="keywords" content="MDCAT, Physics, Medical Entry Test, Medical College Admission, Physics Preparation, Past Papers, MCQs" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Physics Study Materials | MDCAT Preparation" />
        <meta property="og:description" content="Comprehensive physics study materials for MDCAT preparation with practice questions and past papers." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Physics Study Materials | MDCAT Preparation" />
        <meta property="twitter:description" content="Comprehensive physics study materials for MDCAT preparation with practice questions and past papers." />
        
        <StructuredData />
      </Helmet>

      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        {/* Progress Modal */}
        <ProgressModal
          isOpen={progressModalOpen}
          onClose={closeProgressModal}
          topic={selectedTopic}
          currentProgress={selectedTopic ? topicProgress[selectedTopic.id] || 0 : 0}
          onProgressUpdate={handleProgressUpdate}
        />

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm z-40 sticky top-0">
          <button 
            className={`p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              blink ? 'animate-pulse' : ''
            }`}
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setUserInteracted(true); }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Physics</h1>
          <button className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>

        <div className="flex flex-col lg:flex-row pt-16 lg:pt-0">
          {/* Sidebar - Fixed mobile positioning issue */}
          <aside 
            className={`fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-800 shadow-lg z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ height: sidebarHeight, top: '4rem' }}
          >
            <div className="h-full flex flex-col overflow-y-auto">
              {/* Sidebar Header */}
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold flex items-center text-gray-800 dark:text-white">
                    <FaBook className="mr-2 text-blue-600" /> 
                    Physics
                    <span className="ml-2 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                      {overallProgress}%
                    </span>
                  </h3>
                  <div className="text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full text-xs">
                    {bookmarkedTopics.length} <FaBookmark className="inline" />
                  </div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative mb-3">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="search"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search physics topics"
                  />
                </div>
                <button 
                  className={`w-full flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    showCompleted 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setShowCompleted(!showCompleted)}
                  aria-pressed={showCompleted}
                >
                  <FaFilter className="mr-2" />
                  <span>{showCompleted ? 'Show All' : 'Show Completed'}</span>
                </button>
              </div>

              {/* Categories with Scrollbar */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
                <div className="h-full overflow-y-auto">
                  <ErrorBoundary fallback={<div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">Error loading topics. Please try again.</div>}>
                    {Object.entries(filteredTopicsByCategory).map(([category, { name, icon, topics }]) => (
                      <div className="mb-4" key={category}>
                        <button 
                          className="w-full flex items-center justify-between p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg"
                          onClick={() => toggleCategory(category as CategoryKey)}
                          aria-expanded={expandedCategories[category as CategoryKey]}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 text-blue-600">{icon}</span>
                            <span className="font-medium">{name}</span>
                          </div>
                          {expandedCategories[category as CategoryKey] ? 
                            <FaChevronUp className="text-gray-400 text-xs" /> : 
                            <FaChevronDown className="text-gray-400 text-xs" />
                          }
                        </button>
                        {expandedCategories[category as CategoryKey] && (
                          <ul className="mt-2 space-y-1">
                            {topics.map(topic => (
                              <TopicItem
                                key={topic.id}
                                topic={topic}
                                progress={topicProgress[topic.id] || 0}
                                bookmarked={bookmarkedTopics.includes(topic.id)}
                                category={category as CategoryKey}
                                onBookmarkToggle={toggleBookmark}
                                onProgressUpdate={updateProgress}
                                onTopicSelect={handleTopicSelect}
                                activeTopic={activeTopic}
                                onOpenProgressModal={openProgressModal}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4 lg:ml-0">
            <div className="max-w-6xl mx-auto">
              {/* Desktop Header */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <button 
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm"
                  onClick={handleBackNavigation}
                  aria-label="Go back"
                >
                  <FaArrowLeft className="mr-2" /> Back to Dashboard
                </button>
                <div className="flex items-center space-x-4">
                  <Link to="/" className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition" aria-label="Home">
                    <FaHome size={18} />
                  </Link>
                  <button className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                    {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                  </button>
                </div>
              </div>

              {/* Welcome Section */}
              <ErrorBoundary>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Physics Study Materials
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Master physics concepts with structured lessons, practice questions, and progress tracking.
                  </p>
                </div>
              </ErrorBoundary>
              
              {/* Main Content Grid - Enhanced Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <ErrorBoundary>
                  <SubjectNavigationCard 
                    currentSubject="physics"
                    className="h-full"
                  />
                </ErrorBoundary>
                <ErrorBoundary>
                  <StudyPlanCTA />
                </ErrorBoundary>
              </div>

              {/* Quiz CTA Section */}
              <div className="mb-6">
                <ErrorBoundary>
                  <MdcatQuizCTA
                    title="Ready for the"
                    highlight="MDCAT Mock Test?"
                    description="Test your preparation with a full-length MDCAT mock test. Get instant results, detailed explanations, and track your progress like never before!"
                    buttonLabel="Start Full Mock Test"
                    buttonLink="/full-mock-test"
                  />
                </ErrorBoundary>
              </div>

              {/* MDCAT Past Papers Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
                <ErrorBoundary>
                  <MDCATPastPapers />
                </ErrorBoundary>
              </div>

              {/* Progress Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <FaBook className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Topics Covered</h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {topicsCovered}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">out of {totalTopics}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <FaGraduationCap className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Overall Progress</h3>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {overallProgress}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
                    <FaBookmark className="text-2xl text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Bookmarked</h3>
                  <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                    {bookmarkedTopics.length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Important topics</p>
                </div>
              </div>

              {/* Quick Actions Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link 
                    to="/physics/quiz" 
                    className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-3">
                      <FaClipboardList className="text-xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-blue-700 dark:text-blue-300">Take Quiz</span>
                  </Link>

                  <Link 
                    to="/physics/practice" 
                    className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-3">
                      <FaRedoAlt className="text-xl text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-medium text-green-700 dark:text-green-300">Practice Questions</span>
                  </Link>

                  <Link 
                    to="/physics/formulas" 
                    className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-3">
                      <FaAtom className="text-xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium text-purple-700 dark:text-purple-300">Formulas Sheet</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className={`fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300 z-50 ${
            showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </>
  );
};

export default React.memo(PhysicsPage);