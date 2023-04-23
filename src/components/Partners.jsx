import companyLogos from '../utils/partnerCompaniesLogo';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    return (
        <div id="partners">
            <Marquee gradient={false} speed={60}>
                {companyLogos.logos.map((logo, index) => {
                    return <img key={index} className={`partner_img ${logo === 'company_3.png' ? 'internshala' : ''}`} src={companyLogos.basePath + logo} alt="logo" />
                })}
            </Marquee>
        </div>
    );
}

export default Partners;