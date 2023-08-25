import {FaCarAlt, FaShower, FaSwimmingPool} from 'react-icons/Fa';
import {MdOutlineOutdoorGrill} from 'react-icons/Md';

function Amenities(){
    return(
        <div className="amenities">
            <h1>Family Room</h1>
            <h6>50m<sup>2</sup> / Beachfront / 2 guests</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, illo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, illo. Suscipit, delectus voluptate laborum officia quia ullam dolorem consequuntur exercitationem neque molestias, perspiciatis ratione alias nemo magnam perferendis. Asperiores, magnam.</p>
            <h4>Inclusives:</h4>
            <div className="inclusives">
                <div className="inclusive">
                    <FaSwimmingPool className='inclusive_icon' />
                    <p>Swimming Pool</p>
                </div>
                <div className="inclusive">
                    <FaShower className='inclusive_icon' />
                    <p>Shower Heater</p>
                </div>
                <div className="inclusive">
                    <FaCarAlt className='inclusive_icon' />
                    <p>Car Park</p>
                </div>
                <div className="inclusive">
                    <MdOutlineOutdoorGrill className='inclusive_icon' />
                    <p>Griller</p>
                </div>
            </div>
        </div>
    )
}

export default Amenities;