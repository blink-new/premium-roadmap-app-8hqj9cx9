
import { useStore } from '../store/useStore';
import { Moon, Sun } from 'lucide-react';

export const RoadmapHeader = () => {
  const { solutions, selectedSolutionId, isDarkMode, toggleDarkMode } = useStore();
  const selectedSolution = solutions.find((s) => s.id === selectedSolutionId);

  if (!selectedSolution) return null;

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedSolution.name}
          </h1>
          <div className="space-y-2">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Mission</h3>
              <p className="text-gray-900 dark:text-white">{selectedSolution.mission}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Vision</h3>
              <p className="text-gray-900 dark:text-white">{selectedSolution.vision}</p>
            </div>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};