// Reads every markdown file in src/content/projects/ at build time.
// Adding a project = adding a .md file there. Nothing else to declare.
const modules = import.meta.glob('./content/projects/*.md', { eager: true });

export const projects = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    frontmatter: mod.frontmatter,
    Content: mod.Content, // the markdown body, as a component
  }))
  .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));

export const mainProjects = projects.filter((p) => !p.frontmatter.minor);
export const otherWorks = projects.filter((p) => p.frontmatter.minor);
