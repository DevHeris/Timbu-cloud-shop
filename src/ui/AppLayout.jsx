import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
    <Header/>
    <main className="bg-purple-400">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
}

export default AppLayout;
