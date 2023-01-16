import { Route, Routes } from "react-router-dom";
import Maintenance from "./pages/_Maintenance";
import NotFound from "./pages/_NotFound";
import styles from "./styles/App.module.scss";
import Home from "./pages/_Home";
import Background from "./components/Background";
import Loading from "./components/Loading";

export default function App() {
  return (
    <div className={styles.App}>
      <Background />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
