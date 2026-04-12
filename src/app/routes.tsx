import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import { Licence } from "./pages/Licence";
import { Tracking } from "./pages/Tracking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,          Component: Home            },
      { path: "about",        Component: About           },
      { path: "services",     Component: Services        },
      { path: "contact",      Component: Contact         },
      { path: "careers",      Component: Careers         },
      { path: "licence",      Component: Licence         },
      { path: "tracking",     Component: Tracking        },
    ],
  },
]);