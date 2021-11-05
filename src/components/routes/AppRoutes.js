import React from "react";
import { Switch, Route } from "react-router-dom";
import MusicDetails from "../views/music-details/MusicDetails";
import Music from "../views/music/Music";
import NotFound from "../views/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Music} />
      <Route path="/music/:musicId" component={MusicDetails} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
