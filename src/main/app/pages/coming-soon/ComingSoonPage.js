import React from 'react';
import './coming-soon.scss'

export class ComingSoonPage extends React.Component {

  render() {
    return (
      <div className="bgimg">
        <div className="topleft">
          <p>Work</p>
        </div>
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr/>
          <p>Most exciting things</p>
        </div>
        <div className="bottomleft">
          <p>Try this page later. We are working on it.</p>
        </div>
      </div>
    );
  }
}
