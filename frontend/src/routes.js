import { lazy } from "react";

const Dashboard = lazy(() => import("./Components/Views/home/Dashboard"));
const AdminCreate = lazy(() => import("./Components/Views/Admin/CreateAdmin"));
const AdminList = lazy(() => import("./Components/Views/Admin/AdminList"));

export const Routers = [
    
    {
      path: '/dashboard',
      component: Dashboard,
      exact: true,
    },
    {
      path: '/dashboard/admin',
      component: AdminList,
      exact: true,
    },
    {
      path: '/dashboard/admin/create',
      component: AdminCreate,
    },
    {
      path: '/dashboard/admin/list',
      component: AdminList,
    },
  ];
  