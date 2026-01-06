import Home from "./pages/Home";
import Resume from "./pages/resume";
import { Navbar } from "./components/Navbar";

export default function App() {
  const isResume = window.location.hash === "#resume";

  return (
    <>
      <Navbar />
      {isResume ? <Resume /> : <Home />}
    </>
  );
}
