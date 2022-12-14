import React, { FC, memo, ReactNode, Suspense, useEffect } from 'react'
import { useAppDispatch, useAppSelect } from '@/store'
import { shallowEqual } from 'react-redux'

import { NavLink, Outlet } from 'react-router-dom'
import { secondaryTitle } from '@/assets/json'
import { DiscoverWrapper } from '@/views/discover/style'
import { fetchRecommendAction } from '@/views/discover/c_cpns_recommend/store'

interface IDiscover {
  children?: ReactNode
}

const Discover: FC<IDiscover> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendAction())
  }, [])

  return (
    <div>
      <DiscoverWrapper>
        <div className="content">
          {secondaryTitle.map((item) => {
            return (
              <div className="item" key={item.name}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </div>
            )
          })}
        </div>
      </DiscoverWrapper>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
