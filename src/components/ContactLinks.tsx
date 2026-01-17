import { cv } from '../data/cv';

export function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs sm:text-sm justify-center">
      <a
        href={`mailto:${cv.email}`}
        className="btn-neon focus:outline-none focus:ring-2 focus:ring-neon-cyan"
      >
        <span>📧</span>
        <span className="hidden sm:inline">{cv.email}</span>
        <span className="sm:hidden">Email</span>
      </a>
      <a
        href={cv.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="btn-neon btn-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
      <a
        href={cv.github}
        target="_blank"
        rel="noreferrer"
        className="btn-neon btn-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink"
      >
        <span>🐙</span>
        <span className="hidden sm:inline">GitHub</span>
      </a>
      <a
        href={cv.linkedin}
        target="_blank"
        rel="noreferrer"
        className="btn-neon btn-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink"
      >
        <span>🔗</span>
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
    </div>
  );
}
