import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Projects from './components/Projects';
import Archive from './components/Archive';
import Contact from './components/Contact';
import Footer from './Footer';

class App extends Component {
  static defaultProps = {
      externalLinks: [
          {
              link: "https://github.com/1-2-3-4",
              displayName: "GitHub",
              iconClass: "github"
          },
          {
              link: "https://www.linkedin.com/in/nicole-kuprienko-3954b760",
              displayName: "LinkedIn",
              iconClass: "linkedin"
          }
      ]
  }

  render() {
    return (
      <div className="App">
        <Header />
          <BrowserRouter>
            <div>
              <Nav location={ window.location.pathname } />
              <Switch>
                <Route exact path="/" component={ Projects } />
                <Route exact path="/projects" component={ Projects } />
                <Route exact path="/archive" component={ Archive } />
                <Route exact path="/contact" render={(props) => <Contact externalLinks={ this.props.externalLinks } />} />
                <Route exact path="/demos/email-popup.html" />} />
              </Switch>
            </div>
          </BrowserRouter>
        <Footer externalLinks={ this.props.externalLinks } />
      </div>       
    );
  }
}

export default App;
