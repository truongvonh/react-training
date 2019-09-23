import React, { PureComponent } from 'react';

class About extends PureComponent {

  render() {
    return <h1>This is About page with url {this.props.match.url}</h1>;
  }
}

export default About