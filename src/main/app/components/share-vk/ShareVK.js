import React from 'react';
import './share-vk.scss';

export class ShareVK extends React.Component {

  handleClick = () => {
    const sharingUrl = 'http://vk.com/share.php?url=http://work.furnas.ru';
    window.open(sharingUrl, '_blank');
  };

  render() {
    return (
      <div className="share-vk" onClick={this.handleClick}>
      </div>
    );    
  }

}
