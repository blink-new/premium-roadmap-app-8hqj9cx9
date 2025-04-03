
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { RoadmapCard as RoadmapCardType } from '../types/roadmap';
import { X } from 'lucide-react';
import { useStore } from '../store/useStore';

interface RoadmapCardProps {
  card: RoadmapCardType;
  solutionId: string;
}

export const RoadmapCard = ({ card, solutionId }: RoadmapCardProps) => {
  const { deleteCard } = useStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-900 dark:text-white">{card.title}</h3>
        <button
          onClick={() => deleteCard(solutionId, card.id)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {card.description}
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="text-gray-900 dark:text-white">{card.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${card.progress}%` }}
            />
          </div>
        </div>

        <div className="text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Section: <span className="text-gray-900 dark:text-white">{card.productSection}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Owner: <span className="text-gray-900 dark:text-white">{card.stakeholder}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-1 text-xs rounded-full"
              style={{ backgroundColor: `${tag.color}20`, color: tag.color }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};