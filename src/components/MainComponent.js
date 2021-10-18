import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import { COMMENTS } from './shared/comments';
import { PARTNERS } from './shared/partners';
import { PROMOTIONS } from './shared/promotions';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';

 
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsites={this.state.campsites.filter(c => c.featured)[0]}
          partner={this.state.partners.filter(c => c.featured)[0]}
          promotions={this.state.promotions.filter(c => c.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default Main;