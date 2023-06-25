import { Spin } from "antd";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "./Home";
import PageA from "./PageA";
import PageB from "./PageB";

const router = createMemoryRouter([
  { path: "/", Component: Home },
  { path: "/a", Component: PageA },
  { path: "/b", Component: PageB },
]);

const whiteList = ["/", "/b"];

router.subscribe((state) => {
  let newPath = state.location.pathname;
  console.log("新路由", state);
  if (!localStorage.getItem("isLogin") && !whiteList.includes(newPath)) {
    alert("你没有登录，请先登录后查看");
    state.location.pathname = "/";
  }
})

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Spin />} />
  )
}

export default App;