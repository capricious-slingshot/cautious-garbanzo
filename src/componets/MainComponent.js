import React, { Component } from 'react';
import Directory from './DirectoryComponet';
import { CAMPSITES } from './shared/campsites';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  // onCampsiteSelect(campsiteId) {
  //   this.setState({selectedCampsite: campsiteId});
  // }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
