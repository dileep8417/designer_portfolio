import companyLogos from '../utils/partnerCompaniesLogo';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    return (
        <div id="partners">
            <Marquee gradient={false} speed={60}>
                {companyLogos.map((logo, index) => {
                    <img key={index} className='partner_img' src={logo} alt="logo" />
                })}
            </Marquee>
        </div>
    );
}

export default Partners;