import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "./features/authentication/LoginForm";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Navigate replace to="home" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
