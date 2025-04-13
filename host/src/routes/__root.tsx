import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useUserQuery } from "@/features/queries/useUserQuery";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: user } = useUserQuery();

  useEffect(() => {
    // Allow access to landing page and login page
    if (!user?.username && !["/", "/login"].includes(location.pathname)) {
      navigate({ to: "/login" });
    }
  }, [user, navigate, location]);

  return (
    <>
      <Link to="/">Landing</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
