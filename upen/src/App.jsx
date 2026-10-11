import React from 'react';
;
import LandingPage from "./Components/LandingPage";
function App() {
  return (
    // min-h-screen aur flex flex-col footer ko hamesha bottom par rakhta hai
    <div className="min-h-screen flex flex-col bg-slate-50">
      <LandingPage />
    </div>
  );
}

export default App;