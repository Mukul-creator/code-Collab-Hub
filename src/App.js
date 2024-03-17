import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompilerPage from "./Pages/Compiler";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/compiler" element={<CompilerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
