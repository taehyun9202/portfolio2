import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./utils/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import MySkillsPage from "./pages/MySkillsPage";
import WorkPage from "./pages/WorkPage";
function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* <AnimationPresence exitBeforeEnter> */}
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/skill" element={<MySkillsPage />} />
          <Route exact path="/work" element={<WorkPage />} />
        </Routes>
        {/* </AnimationPresence> */}
      </ThemeProvider>
    </>
  );
}

export default App;
