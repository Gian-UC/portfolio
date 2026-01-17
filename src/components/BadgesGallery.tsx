import { useState } from 'react';
import { cv } from '../data/cv';

type BadgeCategory = 'Todas' | 'IA' | 'Back-end' | 'Cloud' | 'Front-end';

const categoryMap: Record<string, BadgeCategory[]> = {
  'Python Developer': ['IA', 'Back-end'],
  'Backend Python': ['Back-end'],
  'Fullstack Developer': ['Back-end', 'Front-end'],
  'Análise de Dados com Grafos': ['IA'],
  'Desenvolvimento .NET com GitHub Copilot': ['IA', 'Back-end'],
  'Docker Fundamentals': ['Cloud'],
  'IA na Prática na Caixa': ['IA'],
  'Código na Prática': ['Back-end'],
  'Microsoft Challenge - AI102': ['IA', 'Cloud'],
  'Angular Developer': ['Front-end'],
  'GenAI & Dados': ['IA'],
};

export function BadgesGallery() {
  const [activeFilter, setActiveFilter] = useState<BadgeCategory>('Todas');

  const trainingsWithBadges = cv.trainings.filter((t) => t.badge);

  const filteredTrainings = trainingsWithBadges.filter((training) => {
    if (activeFilter === 'Todas') return true;
    const categories = categoryMap[training.name] || [];
    return categories.includes(activeFilter);
  });

  const categories: BadgeCategory[] = ['Todas', 'IA', 'Back-end', 'Cloud', 'Front-end'];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-neon-cyan/30 to-neon-pink/30 border-2 border-neon-cyan text-neon-cyan shadow-neon'
                : 'bg-neutral-800/50 border border-neutral-700 text-neutral-300 hover:border-neon-cyan/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {filteredTrainings.map((training) => (
          <div
            key={training.name}
            className="card-neon p-3 md:p-4 flex flex-col items-center gap-2 md:gap-3 group"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 flex items-center justify-center">
              <img
                src={training.badge}
                alt={`Badge ${training.name}`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.placeholder-icon')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'placeholder-icon text-4xl md:text-5xl';
                    placeholder.textContent = '🏆';
                    parent.appendChild(placeholder);
                  }
                }}
              />
              {training.inProgress && (
                <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-neon-pink/90 text-white text-[10px] font-bold rounded">
                  Em andamento
                </div>
              )}
            </div>
            <p className="text-center text-xs font-medium text-neutral-200 line-clamp-2">
              {training.name}
            </p>
          </div>
        ))}
      </div>

      {filteredTrainings.length === 0 && (
        <p className="text-center text-neutral-400 text-sm">
          Nenhum badge encontrado para a categoria "{activeFilter}".
        </p>
      )}
    </div>
  );
}
