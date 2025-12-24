 import Home from "./pages/Home";
import Resume from "./pages/resume";

export default function App() {
  const path = window.location.pathname;

  if (path.includes("/resume")) {
    return <Resume />;
  }

  return <Home />;
}
