import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import { useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Nav currentPage={currentPage} />
      <main>
        <MainPage currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}
