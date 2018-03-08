import React from 'react';
import './share-fb.scss';

export class ShareFB extends React.Component {

  handleClick = () => {
    const sharingUrl = 'http://www.facebook.com/sharer.php?url=http://work.furnas.ru';
    window.open(sharingUrl, '_blank');
  };

  render() {
    return (
      <div className="share-fb" onClick={this.handleClick}>
      </div>
    );
  }

}
