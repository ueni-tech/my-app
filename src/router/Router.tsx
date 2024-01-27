import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import HeaderLayout from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="/home/user_management" element={<UserManagement />} />
        <Route path="/home/setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
});