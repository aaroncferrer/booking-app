function RoomForm(){
    return(
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
    )
}

export default RoomForm;