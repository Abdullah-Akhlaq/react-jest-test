import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <div
          className="d-flex justify-center align-center"
          style={{ height: "80vh" }}
        >
          {/* <Spin indicator={antIcon} /> */}
          Loading...
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
const MainLayout = Loadable(lazy(() => import("./layout/mainlayout")));
const CounterPage = Loadable(lazy(() => import("./components/counter")));
const LandingPage = Loadable(lazy(() => import("./components/landingPage")));
const UserPage = Loadable(lazy(() => import("./components/user-list/user-list")));


export const routes = [
  { path: "/", element: <Navigate to="home" /> },
  // {
  //   path: "sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   path: "sign-up",
  //   element: <SignUp />,
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },

      {
        path: "counter",
        element: <CounterPage />,
      },
      {
        path: "userList",
        element: <UserPage />,
      },
    ],
  },
];
