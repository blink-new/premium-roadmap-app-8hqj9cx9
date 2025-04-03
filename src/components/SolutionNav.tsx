
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

export const SolutionNav = () => {
  const { solutions, selectedSolutionId, selectSolution } = useStore();

  return (
    <nav className="w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Solutions</h2>
      <div className="space-y-2">
        {solutions.map((solution) => (
          <button
            key={solution.id}
            onClick={() => selectSolution(solution.id)}
            className={cn(
              'w-full text-left px-4 py-2 rounded-lg transition-colors',
              'hover:bg-gray-100 dark:hover:bg-gray-700',
              selectedSolutionId === solution.id
                ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300'
            )}
          >
            {solution.name}
          </button>
        ))}
      </div>
    </nav>
  );
};