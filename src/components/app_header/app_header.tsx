import React, { memo, FC, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { AppHeaderWrapper } from '@/components/app_header/style'
import { NavLink, useLocation } from 'react-router-dom'
import { pathJson } from '@/assets/json'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IAppHeader {
  children?: ReactNode
}

const AppHeader: FC<IAppHeader> = () => {
  const [pathName, setPathName] = useState('/discover/recommend')

  const Location = useLocation()
  useEffect(() => {
    setPathName(Location.pathname)
  })
  return (
    <AppHeaderWrapper>
      <div className="app_header">
        <div className="app_header_left">
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          {pathJson.map((item) => {
            if (item.type === 'router') {
              return (
                <div key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'icon text ' : 'text '
                    }
                  >
                    {item.name}
                    {item.path === pathName && (
                      <div className="icon ">icon</div>
                    )}
                  </NavLink>
                </div>
              )
            } else if (item.type === 'link') {
              return (
                <div key={item.name}>
                  <a className="text" href={item.path}>
                    {item.name}{' '}
                  </a>
                </div>
              )
            }
          })}
        </div>
        <div className="app_header_right">
          <Input
            style={{ width: '40%', borderRadius: '15px' }}
            placeholder="查询/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="item creation">创作者中心</div>
          <div className="item">登录</div>
        </div>
      </div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
