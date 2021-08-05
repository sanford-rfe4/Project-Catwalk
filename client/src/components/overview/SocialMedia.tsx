import React from 'react';
import '../../styles/social-media.css';

const SocialMedia = () => {
  return (
    <div id='social-media-buttons'>
      <div
        className="fb-share-button social-media-button"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-layout="button"
        data-size="small">
          <a target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore">
              Share
          </a>
      </div>

      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button social-media-button"
        data-show-count="false">
        Tweet
      </a>

      <a className='social-media-button' href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"></a>
    </div>
  );
}

export default SocialMedia;