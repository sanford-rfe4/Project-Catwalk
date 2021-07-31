import React, {useState, useEffect} from 'react';
import GET from '../../../../api/GET';
import '../../styles/gallery.css'

const Gallery = (props: any) => {

  let {product, selectedStyle, styleId, stylePhotos} = props;

  let [currentStylePhoto, setCurrentStylePhoto] = useState<any>(undefined);
  let [trimmedStylePhotos, setTrimmedStylePhotos] = useState([]);
  let [startingIndex, setStartingIndex] = useState(0);
  let [endingIndex, setEndingIndex] = useState(7);

  let galleryBackgroundImage = {
    backgroundImage: `url(${currentStylePhoto})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }

  let upArrowStyle = {
    filter: startingIndex > 0 ?
    'invert(0%) sepia(93%) saturate(0%) hue-rotate(310deg) brightness(100%) contrast(102%)' :
    'invert(99%) sepia(0%) saturate(35%) hue-rotate(139deg) brightness(83%) contrast(102%)'
  }

  let downArrayStyle = {
    filter: stylePhotos.length > 7 && endingIndex < stylePhotos.length ?
    'invert(0%) sepia(93%) saturate(0%) hue-rotate(310deg) brightness(100%) contrast(102%)' :
    'invert(99%) sepia(0%) saturate(35%) hue-rotate(139deg) brightness(83%) contrast(102%)'
  }

  const thumbnailClick = (e: any) => {
    let url = e.target.id;
    setCurrentStylePhoto(url);
  }

  const upArrowClick = () => {
    if (stylePhotos.length > 7 && startingIndex > 0) {
      setStartingIndex(startingIndex - 1);
      setEndingIndex(endingIndex - 1);
    }
  }

  const downArrowClick = () => {
    if (stylePhotos.length > 7 && endingIndex < stylePhotos.length) {
      setStartingIndex(startingIndex + 1);
      setEndingIndex(endingIndex + 1);
    }
  }

  useEffect(() => {
    if (stylePhotos[0] !== undefined) {
      setCurrentStylePhoto(stylePhotos[0].url);
      setTrimmedStylePhotos(stylePhotos.slice(startingIndex, endingIndex));
    }
    console.log(stylePhotos[0]);
  }, [stylePhotos])

  useEffect(() => {
    if (trimmedStylePhotos.length > 0) {
      setTrimmedStylePhotos(stylePhotos.slice(startingIndex, endingIndex));
    }
  }, [startingIndex, endingIndex]);

  useEffect(() => {
    if (currentStylePhoto !== undefined) {

      let allThumbnails = document.getElementsByClassName('underline');
      for (let i = 0; i < allThumbnails.length; i++) {
        allThumbnails[i].classList.remove('underlined-thick');
      }

      let thumbnail = document.getElementsByClassName(`${currentStylePhoto}`);
      thumbnail[0]?.classList.add('underlined-thick');
    }
  }, [currentStylePhoto, trimmedStylePhotos])

  useEffect(() => {
    setEndingIndex(7);
    setStartingIndex(0);
  }, [selectedStyle])

  return (
    <div style={galleryBackgroundImage} id='image-gallery'>
      <div id='image-carousel'>
        <img
          className='arrow'
          style={upArrowStyle}
          id='up-arrow'
          src='client/assets/images/gallery/up-arrow.svg'
          onClick={upArrowClick}>
        </img>
        {trimmedStylePhotos.map((photo: any, index: any) => {
          return (
            <div key={index} className='thumbnail-container'>
              <img
                onClick={thumbnailClick}
                id={photo.url}
                className="gallery-thumbnail"
                src={photo.thumbnail_url}>
              </img>
              <hr className={`${photo.url} underline`}></hr>
            </div>
          );
        })}
        <img
          className='arrow'
          style={downArrayStyle}
          id='down-arrow'
          src='client/assets/images/gallery/up-arrow.svg'
          onClick={downArrowClick}>
        </img>
      </div>
    </div>
  );
}

export default Gallery;