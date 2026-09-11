import { useState } from 'react';
import type { Project } from '../data/projects';
import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import ProjectImage from './ProjectImage';
import styles from './Work.module.css';
import ArrowUpRight from './icons/ArrowUpRight';

type ProjectFilter = 'all' | 'frontend' | 'fullstack' | 'client';

const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'client', label: 'Client' },
];

const projectFilters: Record<string, ProjectFilter[]> = {
  luxshop: ['frontend', 'fullstack'],
  velora: ['frontend'],
  fitness: ['frontend'],
  skycast: ['frontend'],
  aghanajafi: ['client'],
  shokrzade: ['client'],
  restaurant: ['client'],
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <ProjectImage
        src={project.image}
        alt={project.imageAlt}
        fileName={project.fileName}
        hint={project.category}
        ratio="card"
      />

      <div className={styles.body}>
        <p className={`${styles.meta} mono`}>
          <span>{project.index}</span>
          <span>{project.category}</span>
        </p>

        <h3 className={styles.title}>{project.name}</h3>

        <p className={styles.desc}>{project.description}</p>

        <ul className={`${styles.tech} mono`}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Live Demo
            <ArrowUpRight className={styles.actionIcon} />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              GitHub
              <ArrowUpRight className={styles.actionIcon} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const ref = useReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) =>
          projectFilters[project.id]?.includes(activeFilter)
        );

  return (
    <section id="work" ref={ref} className={styles.work}>
      <div className={styles.head}>
        <p className="mono" style={{ color: 'var(--moss)' }}>
          03 — Selected Work
        </p>

        <h2 className={styles.heading}>Seven Selected projects.</h2>

        <p className={styles.sub}>
          Full-stack, React storefronts and live WordPress client work — each
          with a live demo.
        </p>

        <div
          className={styles.filters}
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`${styles.filter} ${
                activeFilter === filter.id ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
