import { useEffect, useMemo, useState } from 'react';
import { cv } from './data/cv';
import { Section } from './components/Section';
import { ContactLinks } from './components/ContactLinks';
import { Carousel } from './components/Carousel';
import { ThemeToggle } from './components/ThemeToggle';
import { BadgesGallery } from './components/BadgesGallery';

function App() {
  const stackHighlights = useMemo(
    () => cv.skills.stackPrincipal.slice(0, 5),
    [],
  );

  return (
    <main className="min-h-dvh">
      <header className="container py-6 md:py-10">
        <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neon-gradient font-display animate-glow flex flex-col sm:flex-row flex-wrap items-center gap-2 justify-center">
              <span>{cv.name}</span>
              <span className="text-base sm:text-lg md:text-xl text-neutral-300 font-semibold">– Desenvolvedor Back End</span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-neon-pink font-medium">{cv.updatedAt}</p>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-2 justify-center">
              {stackHighlights.map((tech) => (
                <span key={tech} className="badge-tech text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <ContactLinks />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Carousel>
        <Section title="Resumo" subtitle="Quem sou, onde atuo e o que estou construindo agora" centered>
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2 mx-auto max-w-5xl items-start">
            <div className="space-y-3 md:space-y-4 text-neutral-200">
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">{cv.summary}</p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 list-disc pl-5">
                <li>Foco em back-end e soluções com IA generativa para aumentar produtividade e automação.</li>
                <li>Experiência prática com microserviços, mensageria, autenticação e observabilidade.</li>
                <li>Projetos mão na massa: HospitalHub (.NET 8, RabbitMQ, Redis, Keycloak, Ocelot, OpenTelemetry).</li>
                <li>Aberto a remoto ou híbrido em SP; pronto para squads ágeis.</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {['.NET 8', 'Python', 'React', 'Docker', 'RabbitMQ', 'Redis', 'OpenTelemetry', 'Keycloak'].map((item) => (
                  <span key={item} className="badge-tech text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-2 md:gap-3 grid-cols-1 sm:grid-cols-2">
              <div className="card-neon p-3 md:p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-neutral-400">Atual</span>
                <span className="text-base md:text-lg font-semibold text-neon-cyan">Starter – GFT Technologies</span>
                <span className="text-xs text-neutral-400">2025 até atualmente</span>
              </div>
              <div className="card-neon p-3 md:p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-neutral-400">Atuação</span>
                <span className="text-base md:text-lg font-semibold text-neon-cyan">Back-end / Full Stack</span>
                <span className="text-xs text-neutral-400">.NET, Python, React</span>
              </div>
              <div className="card-neon p-3 md:p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-neutral-400">Infra & Observabilidade</span>
                <span className="text-base md:text-lg font-semibold text-neon-cyan">Docker & Telemetria</span>
                <span className="text-xs text-neutral-400">RabbitMQ, Redis, OTel, Jaeger</span>
              </div>
              <div className="card-neon p-3 md:p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-neutral-400">IA na prática</span>
                <span className="text-base md:text-lg font-semibold text-neon-cyan">Copilots & LLMs</span>
                <span className="text-xs text-neutral-400">OpenAI, GitHub Copilot, Automação</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Projetos" subtitle="Principais trabalhos e iniciativas">
          {cv.projects.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {cv.projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          ) : (
            <div className="card-neon p-6 text-sm text-neutral-300">
              Nenhum projeto cadastrado ainda. Edite o arquivo src/data/cv.ts e
              adicione entradas no campo <span className="font-semibold text-neon-cyan">projects</span> para aparecerem aqui.
            </div>
          )}
        </Section>

        <Section title="Habilidades Técnicas">
          <div className="grid gap-6 md:grid-cols-2">
            <SkillGroup title="Stack Principal" items={cv.skills.stackPrincipal} />
            <SkillGroup title="IA & Automação" items={cv.skills.iaAutomacao} />
            <SkillGroup title="Bancos de Dados & Cache" items={cv.skills.databases} />
            <SkillGroup title="DevOps, Infraestrutura & Observabilidade" items={cv.skills.devopsInfra} />
            <SkillGroup title="Ferramentas do Dia a Dia" items={cv.skills.ferramentas} />
          </div>
        </Section>

        <Section title="Experiência Profissional">
          <ul className="space-y-4">
            {cv.experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`} className="card-neon p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-neon-cyan">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-neon-pink font-medium">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-400">{exp.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-neutral-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Formação Acadêmica" subtitle="Base sólida para engenharia de software e sistemas">
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <article className="card-neon p-6 flex flex-col gap-3">
              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-400">Curso</p>
                <h3 className="text-xl font-semibold text-neon-cyan">{cv.education.degree}</h3>
                <p className="text-sm text-neutral-300">{cv.education.institution}</p>
                <p className="text-xs text-neutral-500">Previsão de término: {cv.education.endYear}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-300">
                <li>Fundamentos de computação, algoritmos, arquitetura e redes.</li>
                <li>Ênfase em desenvolvimento de software e integração de sistemas.</li>
                <li>Projetos práticos combinando back-end, APIs e observabilidade.</li>
              </ul>
            </article>
            <aside className="card-neon p-6 flex flex-col gap-3">
              <p className="text-sm uppercase tracking-wide text-neutral-400">Foco atual</p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2"><span className="text-neon-cyan">•</span> Engenharia de software em .NET/Python.</li>
                <li className="flex items-start gap-2"><span className="text-neon-cyan">•</span> Cloud, conteinerização e mensageria.</li>
                <li className="flex items-start gap-2"><span className="text-neon-cyan">•</span> Observabilidade, segurança e APIs escaláveis.</li>
              </ul>
            </aside>
          </div>
        </Section>

        <Section title="Treinamentos" subtitle="Cursos e certificações em andamento">
          <TrainingList items={cv.trainings} />
        </Section>

        <Section title="Galeria de Badges" subtitle="Certificados e cursos conquistados">
          <BadgesGallery />
        </Section>

        <Section title="Certificados">
          <List items={cv.certifications} />
        </Section>

        <Section title="Idiomas" subtitle="Comunicação e alcance global">
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-neon p-4 flex items-start gap-3">
              <span className="text-3xl">🇧🇷</span>
              <div>
                <h3 className="font-semibold text-neon-cyan text-sm md:text-base">Português</h3>
                <p className="text-xs md:text-sm text-neutral-300">Nativo</p>
              </div>
            </div>
            <div className="card-neon p-4 flex items-start gap-3">
              <span className="text-3xl">🇺🇸</span>
              <div>
                <h3 className="font-semibold text-neon-cyan text-sm md:text-base">Inglês</h3>
                <p className="text-xs md:text-sm text-neutral-300">Intermediário/Avançado (B2 – Leitura)</p>
                <p className="text-xs md:text-sm text-neutral-300">Básico (A1 – Conversação)</p>
              </div>
            </div>
            <div className="card-neon p-4 flex items-start gap-3">
              <span className="text-3xl">🇪🇸</span>
              <div>
                <h3 className="font-semibold text-neon-cyan text-sm md:text-base">Espanhol</h3>
                <p className="text-xs md:text-sm text-neutral-300">Básico (A2)</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Contato" subtitle="Vamos conversar e construir algo incrível">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div className="card-neon p-4 md:p-6 flex flex-col gap-3 md:gap-4">
              <p className="text-neutral-200 text-xs sm:text-sm md:text-base">
                Vamos falar sobre projetos back-end, full stack ou IA. Me chame por e-mail, WhatsApp ou envie uma mensagem pelo formulário.
              </p>
              <ContactLinks />
            </div>
            <form
              className="card-neon p-4 md:p-6 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = (data.get('name') || '').toString();
                const email = (data.get('email') || '').toString();
                const message = (data.get('message') || '').toString();
                const subject = encodeURIComponent(`Contato pelo portfolio – ${name}`);
                const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
                window.location.href = `mailto:${cv.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="text-xs text-neutral-400">Nome</label>
                <input name="name" required className="input-neon mt-1 text-sm" placeholder="Seu nome" />
              </div>
              <div>
                <label className="text-xs text-neutral-400">Email</label>
                <input type="email" name="email" required className="input-neon mt-1 text-sm" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-xs text-neutral-400">Mensagem</label>
                <textarea name="message" required className="input-neon mt-1 h-24 md:h-28 text-sm" placeholder="Como posso ajudar?" />
              </div>
              <button className="btn-neon btn-neon-pink mt-2 text-sm" aria-label="Enviar mensagem">Enviar</button>
            </form>
          </div>
        </Section>
      </Carousel>

      <footer className="container py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {cv.name}
      </footer>

      <BackToTop />
    </main>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-neon-pink mb-3">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="badge-tech">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="card-neon p-4 text-sm text-neutral-200">
          {item}
        </li>
      ))}
    </ul>
  );
}

function TrainingList({ items }: { items: { name: string; badge: string; inProgress?: boolean }[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.name} className="card-neon p-4 flex flex-col items-center text-center gap-3 group hover:scale-105 transition-transform">
          <div className="w-24 h-24 flex items-center justify-center rounded-lg overflow-hidden bg-neutral-800/50 border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all">
            <img 
              src={item.badge} 
              alt={item.name} 
              loading="lazy"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-4xl">🎓</div>
          </div>
          <div className="flex-1 flex flex-col">
            <h4 className="text-xs font-medium text-neutral-200 leading-tight">{item.name}</h4>
            {item.inProgress && (
              <span className="mt-2 inline-block text-[10px] px-2 py-1 rounded-full bg-neon-pink/20 text-neon-pink border border-neon-pink/30 animate-pulse-slow">
                Em andamento
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: { title: string; description: string; tech: string[]; links?: { github?: string; demo?: string } } }) {
  return (
    <article className="card-neon p-6">
      <header className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-neon-cyan">{project.title}</h3>
        <div className="flex gap-2">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir repositório GitHub de ${project.title}`}
              className="text-xs text-neon-pink hover:text-neon-cyan font-medium transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir demonstração do projeto ${project.title}`}
              className="text-xs text-neon-pink hover:text-neon-cyan font-medium transition-colors"
            >
              Demo ↗
            </a>
          )}
        </div>
      </header>
      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{project.description}</p>
      {project.tech?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="badge-tech">{t}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Voltar ao topo"
      className="btn-neon fixed bottom-6 right-6 z-30 shadow-neon-cyan"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑ Topo
    </button>
  );
}

export default App
