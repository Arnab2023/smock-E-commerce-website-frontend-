/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Login from "./pages/Login/Login";
import DetailPage from "./pages/DetailPage/DetailPage";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import SizeModal from "./components/modal/SizeModal";
import QuantityModal from "./components/modal/QuantityModal";
import RemoveModal from "./components/modal/RemoveModal";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar/Navbar";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import PhoneSignUP from "./components/PhoneSignUp/PhoneSignUP";
import Erorr404 from "./pages/404/404";
import Women from "./pages/Women/Women";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [progress, setProgress] = useState(40);
  return (
    <>
      <Router>
        <LoadingBar
          color="#5a49e3"
          progress={progress}
          height={3.5}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<CustomNavbar />}>
            <ErrorBoundary>
              <Route index element={<Home />} />
              <Route path="men" element={<Men setProgress={setProgress} />} />
              <Route
                path="women"
                element={<Women setProgress={setProgress} />}
              />
              <Route
                path="wishlist"
                element={<Wishlist setProgress={setProgress} />}
              />
              <Route
                path="details/:productId"
                element={<DetailPage setProgress={setProgress} />}
              />
            </ErrorBoundary>
          </Route>

          <Route
            path="/login/:id"
            element={<Login setProgress={setProgress} />}
          />

          <Route path="/cart" element={<Cart setProgress={setProgress} />} />

          <Route
            path="/otp"
            element={<PhoneSignUP setProgress={setProgress} />}
          />

          <Route path="/*" element={<Erorr404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
