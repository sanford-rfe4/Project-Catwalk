import React, { useEffect, useState} from 'react';
import '../../styles/description.css'

const Description = (props: any) => {

  let { product } = props;

  let [features, setFeatures] = useState([]);
  let [slogan, setSlogan] = useState('');
  let [description, setDescription] = useState('');

  useEffect(() => {
    if (product.id !== undefined) {
      setSlogan(product.slogan)
      setFeatures(product.features);
      setDescription(product.description)
    }
  },[product]);

  return (
    <div id='description-features-container'>
      <div id='description-container'>
        <h1 id='slogan'>{slogan}</h1>
        <span id='description'>{description}</span>
      </div>
      <div id='features-container'>
        <ul id='features-list'>
          {features.map((feature: any) => {
            return <li id='feature-check'><span id='feature-list-item'><b>{feature.feature}</b>: {feature.value}</span></li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Description;