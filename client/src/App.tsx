import { useState } from "react";
import Home from "./pages/Home";
import Resume from "./pages/resume";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      {showResume ? (
        <Resume onBack={() => setShowResume(false)} />
      ) : (
        <Home onResumeClick={() => setShowResume(true)} />
      )}
    </>
  );
}
