
import { useEffect } from 'react';
import { SolutionNav } from './components/SolutionNav';
import { RoadmapHeader } from './components/RoadmapHeader';
import { RoadmapBoard } from './components/RoadmapBoard';
import { useStore } from './store/useStore';

function App() {
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="h-screen flex bg-gray-50 dark:bg-gray-900">
      <SolutionNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <RoadmapHeader />
        <RoadmapBoard />
      </div>
    </div>
  );
}

export default App;