import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
