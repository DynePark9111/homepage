import { Route, Routes } from "react-router-dom";
import Maintenance from "./pages/_Maintenance";
import NotFound from "./pages/_NotFound";
import styles from "./styles/App.module.scss";
import Home from "./pages/_Home";

export default function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
