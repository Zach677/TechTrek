import * as stylex from '@stylexjs/stylex'

import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import { projects, type Project, type ProjectStatus } from '../../data/projects'

const styles = stylex.create({
  main: {
    maxWidth: '42rem',
  },
  title: {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 'clamp(2.5rem, 6.5vw, 4rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    margin: '2rem 0 0.75rem',
    color: colors.heading,
  },
  lede: {
    margin: '0 0 3rem',
    maxWidth: '34rem',
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.secondary,
    fontStyle: 'italic',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  card: {
    paddingBlock: '1.5rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.separatorSoft,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  name: {
    fontFamily: fonts.serif,
    fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
    fontWeight: 500,
    lineHeight: 1.25,
    color: colors.heading,
    margin: 0,
  },
  meta: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'baseline',
    flexShrink: 0,
  },
  oneLiner: {
    marginTop: '0.45rem',
    marginBottom: 0,
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.body,
    maxWidth: '36rem',
  },
  tags: {
    marginTop: '0.75rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem 0.85rem',
  },
  links: {
    marginTop: '0.85rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem 1.25rem',
  },
  link: {
    fontSize: typeScale.copy14,
    lineHeight: typeScale.copy14Lh,
    color: colors.body,
  },
})

const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: 'active',
  paused: 'paused',
  archive: 'archive',
}

function ProjectCard({ project }: { project: Project }) {
  const isPrivate = project.visibility === 'private'

  return (
    <li {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.cardTop)}>
        <h2 {...stylex.props(styles.name)}>{project.name}</h2>
        <div {...stylex.props(styles.meta)}>
          <span {...stylex.props(shared.regLabel)}>
            {STATUS_LABEL[project.status]}
          </span>
          {isPrivate ? (
            <span {...stylex.props(shared.regLabel)}>private</span>
          ) : null}
        </div>
      </div>
      <p {...stylex.props(styles.oneLiner)}>{project.oneLiner}</p>
      {project.tags.length > 0 ? (
        <div {...stylex.props(styles.tags)}>
          {project.tags.map((tag) => (
            <span key={tag} {...stylex.props(shared.regLabel)}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {project.links.length > 0 ? (
        <div {...stylex.props(styles.links)}>
          {project.links.map((link) =>
            link.url.startsWith('/') ? (
              <a
                key={link.label}
                href={link.url}
                {...stylex.props(shared.inkLink, styles.link)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                {...stylex.props(shared.inkLink, styles.link)}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      ) : null}
    </li>
  )
}

export default function ProjectsPage() {
  return (
    <main {...stylex.props(styles.main)}>
      <h1 {...stylex.props(styles.title)}>Projects</h1>
      <p {...stylex.props(styles.lede)}>
        Things I build and maintain — cards with external links only. Draft
        copy; edit freely.
      </p>
      <ul {...stylex.props(styles.list)}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </main>
  )
}
