import { Page2 } from "../Page2";
import { QueryParameter } from "../QueryParameter";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  },
  {
    path: "/:id",
    exact: false,
    children: <QueryParameter />
  }
];
