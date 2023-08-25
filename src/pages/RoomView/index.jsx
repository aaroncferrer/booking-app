import { useEffect } from 'react';
import './roomview.css'
import Amenities from './Amenties';
import RoomForm from './RoomForm';

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
                    <Amenities />
                    <RoomForm />
                </article>
            </section>
        </main>
    )
}

export default RoomView;