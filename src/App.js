import React from "react";

import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./layouts/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
      </Routes>
      <Routes>
        <Route path="/new-meetups" element={<NewMeetupPage />} />,
      </Routes>
      <Routes>
        <Route path="/Favorites" element={<FavoritesPage />} />,
      </Routes>
    </Layout>
  );
}

export default App;
