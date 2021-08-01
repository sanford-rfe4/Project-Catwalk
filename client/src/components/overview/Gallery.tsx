import React, {useState, useEffect} from 'react';
import GET from '../../../../api/GET';
import '../../styles/gallery.css'
import StyleSelector from './StyleSelector';

const Gallery = (props: any) => {

  let {product, selectedStyle, styleId, stylePhotos} = props;

  let black = 'invert(0%) sepia(93%) saturate(0%) hue-rotate(310deg) brightness(100%) contrast(102%)';
  let grey = 'invert(99%) sepia(0%) saturate(35%) hue-rotate(139deg) brightness(83%) contrast(102%)';

  let [currentStylePhoto, setCurrentStylePhoto] = useState<any>(undefined);
  let [currentStylePhotosIndex, setCurrentStylePhotosIndex] = useState(0);
  let [trimmedStylePhotos, setTrimmedStylePhotos] = useState<any>([]);
  let [trimmedStylePhotosIndex, setTrimmedStylePhotosIndex] = useState(0);
  let [startingIndex, setStartingIndex] = useState(0);
  let [endingIndex, setEndingIndex] = useState(7);

  let galleryBackgroundImage = {
    backgroundImage: `url(${currentStylePhoto})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }

  let upArrowStyle = {
    filter: startingIndex > 0 ? black : grey,
    cursor: startingIndex > 0 ? 'pointer' : 'default'
  }

  let downArrayStyle = {
    filter: stylePhotos.length > 7 && endingIndex < stylePhotos.length ? black : grey,
    cursor: stylePhotos.length > 7 && endingIndex < stylePhotos.length ? 'pointer' : 'default'
  }

  let leftArrowStyle = {
    display: currentStylePhotosIndex === 0 ? 'none' : 'block'
  }

  let righArrowStyle = {
    display: currentStylePhotosIndex === stylePhotos.length - 1 ? 'none' : 'block'
  }

  const thumbnailClick = (e: any) => {
    let url = e.target.id;
    setCurrentStylePhoto(url);

    let selectedPhoto = stylePhotos.find((photo: any) => {
      return photo.url === url
    })
    setCurrentStylePhotosIndex(stylePhotos.indexOf(selectedPhoto));
    setTrimmedStylePhotosIndex(trimmedStylePhotos.indexOf(selectedPhoto));
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

  const rightArrowClick = () => {
    if (currentStylePhotosIndex < stylePhotos.length - 1) {
      setCurrentStylePhoto(stylePhotos[currentStylePhotosIndex + 1].url);
      setCurrentStylePhotosIndex(currentStylePhotosIndex + 1);
      if (trimmedStylePhotosIndex < 6) {
        setTrimmedStylePhotosIndex(trimmedStylePhotosIndex + 1);
      } else {
        setStartingIndex(startingIndex + 1);
        setEndingIndex(endingIndex + 1);
      }
    }
  }

  const leftArrowClick = () => {
    if (currentStylePhotosIndex > 0) {
      setCurrentStylePhoto(stylePhotos[currentStylePhotosIndex - 1].url);
      setCurrentStylePhotosIndex(currentStylePhotosIndex - 1);
      if (trimmedStylePhotosIndex > 0) {
        setTrimmedStylePhotosIndex(trimmedStylePhotosIndex - 1);
      } else {
        setStartingIndex(startingIndex - 1);
        setEndingIndex(endingIndex - 1);
      }
    }
  }

  useEffect(() => {
    if (stylePhotos[0] !== undefined) {
      setCurrentStylePhoto(stylePhotos[0].url);
      setTrimmedStylePhotos(stylePhotos.slice(startingIndex, endingIndex));
    }
    console.log(stylePhotos[0]);
    console.log(stylePhotos);
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
    console.log('index', currentStylePhotosIndex);
    console.log('trimmedIndex', trimmedStylePhotosIndex);
  }, [currentStylePhoto, trimmedStylePhotos])

  useEffect(() => {
    setEndingIndex(7);
    setStartingIndex(0);
    setCurrentStylePhotosIndex(0);
    setTrimmedStylePhotosIndex(0);
  }, [selectedStyle])

  return (
    <div style={{display: 'flex'}}>
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
      <div style={galleryBackgroundImage} id='image-gallery'>
        <svg
          onClick={leftArrowClick}
          style={leftArrowStyle}
          id='left-arrow'
          className='gallery-arrow'
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 32 32">
            <path
              d="M26,22a2,2,0,0,1-1.41-.59L16,12.83,7.41,21.41a2,2,0,0,1-2.82-2.82l10-10a2,2,0,0,1,2.82,0l10,10A2,2,0,0,1,26,22Z"
            />
        </svg>
        <svg
          onClick={rightArrowClick}
          style={righArrowStyle}
          id='right-arrow'
          className='gallery-arrow'
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 32 32">
            <path
              d="M26,22a2,2,0,0,1-1.41-.59L16,12.83,7.41,21.41a2,2,0,0,1-2.82-2.82l10-10a2,2,0,0,1,2.82,0l10,10A2,2,0,0,1,26,22Z"
            />
        </svg>
      </div>
    </div>
  );
}

export default Gallery;