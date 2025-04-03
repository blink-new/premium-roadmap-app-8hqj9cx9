
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { Status } from '../types/roadmap';
import { useStore } from '../store/useStore';
import { RoadmapCard } from './RoadmapCard';

const STATUSES: Status[] = ['now', 'next', 'later'];

const STATUS_LABELS: Record<Status, string> = {
  now: 'Now',
  next: 'Next',
  later: 'Later',
};

export const RoadmapBoard = () => {
  const { solutions, selectedSolutionId, moveCard } = useStore();
  const selectedSolution = solutions.find((s) => s.id === selectedSolutionId);

  if (!selectedSolution) return null;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const status = over.id as Status;
    moveCard(selectedSolution.id, active.id as string, status);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex-1 grid grid-cols-3 gap-6 p-6">
        {STATUSES.map((status) => (
          <div key={status} className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {STATUS_LABELS[status]}
            </h2>
            <div className="space-y-4">
              {selectedSolution.cards
                .filter((card) => card.status === status)
                .map((card) => (
                  <RoadmapCard
                    key={card.id}
                    card={card}
                    solutionId={selectedSolution.id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </DndContext>
  );
};