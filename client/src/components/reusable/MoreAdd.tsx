import React, {useState} from 'react';
import ReviewModal from '../ratings-reviews/ReviewModal';
const MoreAdd = (props: any) => {
  const [openModal, setOpenModal] = useState(false);

  const renderMore = () => {
    if (!props.noMoreItems)
    return (<button onClick={() => {props.moreClick()}}>More {props.widget}s</button>)
  }

  const handleClose = () => {
    setOpenModal(false);
  }
  const renderModal = () => {
    if (openModal === true) {
      return (<ReviewModal productID={props.productID} handleClose={handleClose}/>)
    } else {
      return null;
    }
  }
  return (
    <React.Fragment>
      {renderMore()}
      <button
      onClick={() => {setOpenModal(true)}}>Add a {props.widget}</button>
      {renderModal()}
    </React.Fragment>
  )
}

export default MoreAdd;