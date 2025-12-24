import Home from "./pages/Home";
import Resume from "./pages/resume";
import { useEffect, useState } from "react";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (path.endsWith("/resume")) {
    return <Resume />;
  }

  return <Home />;
}
