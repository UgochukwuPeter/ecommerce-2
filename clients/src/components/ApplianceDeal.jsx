import { Link } from 'react-router-dom';
import { phoneCategory } from '../data';
import './appliance.scss';

const ApplianceDeal = () => {
  return (
    <div className='appliance'>
         <h1>Best Appliance Deals</h1>
        <div className='appliance-wrapper'>
            {
                phoneCategory.map((item)=>(
                    <Link to={`/products/${item.cat}`} className='link phone-cat'>
                    <div className='content'>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    </Link>
                    
                ))
            }
            
        </div>
    </div>
  )
}

export default ApplianceDeal