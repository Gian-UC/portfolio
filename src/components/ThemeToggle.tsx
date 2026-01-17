import { useEffect, useState } from 'react';

function getInitialTheme(): 'dark' | 'light' {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="btn-neon"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Alternar tema"
      title={theme === 'dark' ? 'Tema escuro' : 'Tema claro'}
    >
      {theme === 'dark' ? '🌙 Escuro' : '☀️ Claro'}
    </button>
  );
}
