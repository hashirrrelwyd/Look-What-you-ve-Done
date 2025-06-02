import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import "./App.css"
import CustomCursor from "./components/Common/CustomCursor";

export default function App() {
  return (
    <>
    <CustomCursor/>
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </>
  );
}
