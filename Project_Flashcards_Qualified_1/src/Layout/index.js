import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import HomePage from "../components/pages/HomePage";
import DeckPage from "../components/pages/DeckPage";
import StudyPage from "../components/pages/StudyPage";
import CreateDeckPage from "../components/pages/CreateDeckPage";
import CreateCardPage from "../components/pages/CreateCardPage"
import NotFound from "./NotFound";
import EditDeckPage from "../components/pages/EditDeckPage";
import EditCardPage from "../components/pages/EditCardPage";

function Layout() {
  return (
    <>
      <Header />
      
      <div className="container">
      
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <HomePage />
          </Route>
           <Route exact={true} path="/decks/new" >
            <CreateDeckPage />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckPage />
          </Route>
          <Route exact={true} path="/decks/:deckId/study" >
            <StudyPage />
          </Route>
          <Route exact={true} path="/decks/:deckId/edit" >
            <EditDeckPage />
          </Route>
          <Route exact={true} path="/decks/:deckId/cards/:cardId/edit" >
            <EditCardPage />
          </Route>
          <Route exact={true} path="/decks/:deckId/cards/new" >
            <CreateCardPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
