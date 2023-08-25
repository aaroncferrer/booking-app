import {BsPersonCircle} from 'react-icons/Bs';
import { Link } from 'react-router-dom';

function RoomCards(){
    return(
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
    )
}

export default RoomCards;