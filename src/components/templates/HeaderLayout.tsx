import React, { FC, ReactNode } from 'react'
import Header from '../organisms/layout/Header'
import { Outlet } from 'react-router-dom'

const HeaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HeaderLayout