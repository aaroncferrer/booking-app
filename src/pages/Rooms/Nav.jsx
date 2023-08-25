import {BsFillTelephoneFill} from 'react-icons/Bs';
import {AiFillMail} from 'react-icons/Ai';

function Nav(){
    return(
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
    )
}

export default Nav;