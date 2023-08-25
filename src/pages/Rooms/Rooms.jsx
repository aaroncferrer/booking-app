import './rooms.css';
import {BsFillTelephoneFill} from 'react-icons/Bs';
import {AiFillMail} from 'react-icons/Ai';

function Rooms() {
    return (
        <main id='rooms'>
            <div className="hero">

                <div className="hero_nav">
                    <div className="left_nav">
                        <p>PAVILLON CÉLESTE</p>
                        <p>PROVENCE</p>
                    </div>
                    <div className="center_nav">
                        <p className='center_nav_item'>EN</p>
                        <BsFillTelephoneFill className='center_nav_item' />
                        <AiFillMail className='center_nav_item' />
                        <p className='center_nav_item'>NEWSLETTER</p>
                        <p className='center_nav_item'>ABOUT</p>
                    </div>
                    <div className="right_nav">
                        <button className='book_btn'>BOOK NOW</button>
                    </div>
                </div>
                
                <div className="hero_text">
                    <h2>REDEFINED COMFORT</h2>
                    <p>
                        Discover a seamless blend of refined comfort and modern style at our hotel. From thoughtfully designed accommodations to attentive service, we prioritize your ease and relaxation.
                    </p>
                </div>

                <div className="hero_booking">
                    <div className="dropdown">
                        <span className="dropdown_label">Check-In</span>
                        <select name="" class="dropdown_select">
                            <option disabled selected>Select Check-In Date</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <span className="dropdown_label">Check-Out</span>
                        <select name="" class="dropdown_select">
                            <option disabled selected>Select Check-Out Date</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <span className="dropdown_label">Rooms</span>
                        <select name="" class="dropdown_select">
                            <option disabled selected>Select Number of Rooms</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <span className="dropdown_label">Guests</span>
                        <select name="" class="dropdown_select">
                            <option disabled selected>Select Number of Guests</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <span className="dropdown_label hidden">Hidden</span>
                        <button className='check_btn'>Check Availability</button>
                    </div>

                </div>

                <div className="hero_footer">
                    <p>CCP Complex, Roxas Blvd, Pasay, 1300 Metro Manila</p>
                </div>

            </div>
        </main>
    );
}

export default Rooms;
