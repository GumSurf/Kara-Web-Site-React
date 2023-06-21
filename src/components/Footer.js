import LOGO from '../assets/LogoBlackAndWhite.png'

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={LOGO} alt="Logo page web" />
            <h2 className='kasa-copyright'>© 2020 Kasa. All rights reserved</h2>
        </div>
    )
}

export default Footer