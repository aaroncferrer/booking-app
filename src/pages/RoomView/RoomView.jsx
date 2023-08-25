import { useEffect } from 'react';
import './roomview.css'
import {FaCarAlt, FaShower, FaSwimmingPool} from 'react-icons/Fa';
import {MdOutlineOutdoorGrill} from 'react-icons/Md';

function RoomView(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <main id="room_view">
            <section className="hero_view">
                <div className="resort resort_view">
                    <p>PAVILLON CÉLESTE</p>
                    <p>PROVENCE</p>
                </div>
                <div className="hero_view_text">
                    <p>HOME  &gt;  ROOMS  &gt; FAMILY</p>
                    <p>Room Details</p>
                </div>
            </section>

            <section className="room_info">
                <article className="room_price">
                    <p>RESERVATION DATE</p>
                    <div className="room_date">
                        <div className="check_in">
                            <p>CHECK-IN</p>
                            <p>24</p>
                            <p>Aug, 2023</p>
                            <p>THURSDAY</p>
                        </div>
                        <div className="check_out">
                            <p>CHECK-OUT</p>
                            <p>25</p>
                            <p>Aug, 2023</p>
                            <p>FRIDAY</p>
                        </div>
                    </div>
                    <div className="room_guests_nights">
                        <div className="guests">
                            <p>1</p>
                            <p>GUEST/S</p>
                        </div>
                        <div className="nights">
                            <p>1</p>
                            <p>NIGHT/S</p>
                        </div>
                    </div>
                    <div className="total">
                        <p>₱5,000 / <span>TOTAL</span></p>
                    </div>
                </article>
                <article className="room_amenities_form">
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

                    <form>
                        <h2 style={{ marginTop: '2rem' }}>Customer Information</h2>
                        <div className="form_name input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div className='form_input'>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" />
                            </div>
                        </div>
                        <div className="form_contact input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" />
                            </div>
                            <div className='form_input'>
                                <label htmlFor="mobileNo">Mobile No</label>
                                <input type="text" id="lastName" />
                            </div>
                        </div>
                        <div className="form_address input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" />
                            </div>
                        </div>
                        <div className="form_address2 input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="province">Province</label>
                                <input type="text" id="province" />
                            </div>
                            <div className='form_input'>
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" />
                            </div>
                            <div className='form_input'>
                                <label htmlFor="zip">Zip</label>
                                <input type="text" id="zip" />
                            </div>
                        </div>
                        <div className="form_request input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="specialRequest">Special request</label>
                                <textarea id="specialRequest" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="form_coupon input_div " style={{ display: 'flex' }}>
                            <div className='form_input'>
                                <label htmlFor="coupon">Coupon / Discount Code</label>
                                <input type="text" id="coupon" />
                            </div>
                        </div>
                        <div className="form_coupon input_div " style={{ display: 'flex' }}>
                            <div className='form_input form_checkbox'>
                                <label>
                                    <input type="checkbox" /> Terms and Conditions
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="room_btn">CHECKOUT</button>
                        </div>
                    </form>
                </article>
            </section>
        </main>
    )
}

export default RoomView;