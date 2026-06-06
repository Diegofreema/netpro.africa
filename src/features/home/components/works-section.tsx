import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { ProjectCard } from '@/features/home/components/project-card';
import { projects } from '@/features/home/data/landing-page-content';

export function WorksSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          title="Works"
          description="Selected projects show how strategy, design, and implementation come together across different industries and product needs."
        />
        <div className="np-reveal-stagger grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} data-reveal="media">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
