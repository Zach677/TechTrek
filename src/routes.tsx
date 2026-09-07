import { lazy } from 'react'
import { type RouteObject } from 'react-router'

import RootLayout from './pages/layout'
import NotFound from './pages/not-found'
import ErrorBoundary from './pages/error'
import type { RouteObjectWithMetadata } from './metadata/types'

const RootPage = lazy(() => import('./pages/index'))
const ProjectsPage = lazy(() => import('./pages/projects'))
const AboutPage = lazy(() => import('./pages/about'))
const NowPage = lazy(() => import('./pages/now'))
const MitoriPrivacyPage = lazy(() => import('./pages/mitori-privacy'))

const routes: RouteObject[] = [
  {
    Component: RootLayout,
    ErrorBoundary,
    children: [
      {
        index: true,
        Component: RootPage,
        metadata: {
          title: 'zaxh',
          description:
            "Zach's personal hub — projects, about, and what I'm doing now.",
          url: 'https://zaxh.org',
        },
      } as RouteObjectWithMetadata,
      {
        path: 'projects',
        Component: ProjectsPage,
        metadata: {
          title: 'Projects',
          description: 'Things Zach builds and maintains.',
          url: 'https://zaxh.org/projects',
        },
      } as RouteObjectWithMetadata,
      {
        path: 'about',
        Component: AboutPage,
        metadata: {
          title: 'About',
          description: 'About Zach — contact, friends, and a few devices.',
          url: 'https://zaxh.org/about',
        },
      } as RouteObjectWithMetadata,
      {
        path: 'now',
        Component: NowPage,
        metadata: {
          title: 'Now',
          description: "What Zach is doing these days.",
          url: 'https://zaxh.org/now',
        },
      } as RouteObjectWithMetadata,
      {
        path: 'mitori/privacy',
        Component: MitoriPrivacyPage,
        metadata: {
          title: 'Mitori Privacy Policy',
          description:
            'How Mitori handles Apple ID credentials, account data, network requests, and website analytics.',
          url: 'https://zaxh.org/mitori/privacy',
        },
      } as RouteObjectWithMetadata,
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]

export default routes
