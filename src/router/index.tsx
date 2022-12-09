import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover/discover'))
const Mine = lazy(() => import('@/views/mine/mine'))
const Download = lazy(() => import('@/views/download/download'))
const Focus = lazy(() => import('@/views/focus/focus'))

const Recommend = lazy(
  () => import('@/views/discover/c_cpns_recommend/recommedn')
)
const Ranking = lazy(() => import('@/views/discover/c_cpns_ranking/ranking'))
const DjRadio = lazy(() => import('@/views/discover/c_cpns_djradio/djradio'))
const Sons = lazy(() => import('@/views/discover/c_cpns_sons/c_cpns_sons'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/djradio', element: <DjRadio /> },
      { path: '/discover/sons', element: <Sons /> }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
