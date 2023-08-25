import './rooms.css';
import Nav from './Nav';
import RoomCards from './RoomCards';

function Rooms() {
    return (
        <main id='rooms'>
            <section className="hero">

                <Nav />
                
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

                <RoomCards />

            </section>

        </main>
    );
}

export default Rooms;
