import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SurveyDone from "./pages/SurveyDone";
import SurveyPage from "./pages/SurveyPage"; // 追加
import SurevyCommentPage from "./pages/SurevyCommentPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/survey/home" element={<Home />} />
        <Route path="/survey/:companyId/:storeId" element={<SurveyPage />} /> {/* 追加 */}
        <Route path="/survey/comment/:companyId/:storeId" element={<SurevyCommentPage />} />
        <Route path="/survey/surveydone" element={<SurveyDone />} />
      </Routes>
    </Router>
  );
}

export default App;
