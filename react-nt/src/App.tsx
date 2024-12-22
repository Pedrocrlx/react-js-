import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* FOR FOOTER BE SHOWED IN ALL PAGES, AND FOOTER DONT HAVE ANY LINK */}
      <Footer />
      {/* IN CASE HAVE LINKS I HAVE TO MAKE A ROUTE TO */}
    </BrowserRouter>
  );
}

export default App;
