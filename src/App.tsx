import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StickerContextProvider } from "./contexts/StickersContext";
import { CheckoutPurchase } from "./pages/CheckoutPurchase";
import { Purchase } from "./pages/Purchase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StickerContextProvider>
          <Routes>
            <Route path="/" element={<Purchase />} />
            <Route path="/checkout" element={<CheckoutPurchase />} />
          </Routes>
        </StickerContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
