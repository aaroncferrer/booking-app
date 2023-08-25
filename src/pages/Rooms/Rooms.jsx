import './rooms.css';
import {BsFillTelephoneFill, BsPersonCircle} from 'react-icons/Bs';
import {AiFillMail} from 'react-icons/Ai';
import { Link } from 'react-router-dom';

function Rooms() {
    return (
        <main id='rooms'>
            <section className="hero">

                <nav className="hero_nav">
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
                </nav>
                
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

            </section>

            <section className="rooms_list">
                <article className="rooms_list_header">
                    <div className="resort">
                        <p>PAVILLON CÉLESTE</p>
                        <p>PROVENCE</p>
                    </div>
                    <h1>Experience Perfection in Accommodation</h1>
                    <p>Designed by acclaimed National Artists <span className='artist'>Victor Ferrer</span> and <span className='artist'>Armand Ferrer</span>, our hotel stands as a testament to architectural brilliance, offering you an unparalleled stay.</p>
                    <p>Join us in experiencing the allure of Manila, where the tropical beauty of the region blends seamlessly with the rich cultural tapestry. Our commitment to excellence is reflected in the fusion of refined French-inspired hospitality and the genuine, heartfelt essence of Filipino warmth.</p>
                    <p>" Your journey to a remarkable stay starts with us. "</p>
                    <div className="ceo">
                        <p>Anthony Renzo C. Ferrer</p>
                        <p>CEO</p>
                    </div>
                </article>

                <article className="room_cards">

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="room">
                        <div class="img_wrapper">
                            <img class="room_img" src="/room1.jpg" alt="Card" />
                        </div>
                        <div className="room_content">
                            <h2 className="room_title">Family Room</h2>
                            <div className="room_details">
                                <BsPersonCircle />
                                <span>2 guests</span>
                                <span>₱5,000/night</span>
                            </div>
                            <p className="room_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid quasi vel odit fuga saepe mollitia, quidem eos eum similique impedit.</p>
                            <div className="room_btn_container">
                                <Link to="/room" className="room_btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                </article>
            </section>

        </main>
    );
}

export default Rooms;
