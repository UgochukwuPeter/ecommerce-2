import './product.scss';
import { products } from '../data';
import { useState } from 'react';
import {CSSTransition} from 'react-transition-group';

const Product = () => {
  const[selectedIndex, setSelectedIndex] = useState(0);
  const  firstImg = products[0].img;
  const  secondImg  = products[0].imgSm_1;
  const  thirdImg  =  products[0].imgSm_2;
  const fourthImg =  products[0].imgSm_3;

  const images   =  [firstImg, secondImg, thirdImg, fourthImg];

  const handleImageClick =(index)=>{
    setSelectedIndex(index);
  }
  return (
    <div className='product'>
        <div className='product-wrapper'>
          <div className="left-product">
            <div  className='product-info'>
                <div className='product-slide'>
                <CSSTransition in={true} timeout={500} className="preview">
                        <img src={images[selectedIndex]} alt="" key={selectedIndex} />
                    </CSSTransition>
                   <div className="thumbnails">
                    {
                      images.map((image,index)=>(
                        <img src={image} alt="" key={index} onClick={()=>handleImageClick(index)}/>
                      ))
                    }
                   </div>

                </div>
                <div className="product-details">
                  right
                </div>
            </div>
           
          </div>
          <div className="right-product">
            right
          </div>
        </div>
    </div>
  )
}

export default Product