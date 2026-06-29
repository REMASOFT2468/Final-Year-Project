import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>
        <Footer />
    </>
  );
}

export default App;