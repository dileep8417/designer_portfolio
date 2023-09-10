import {HomeLogos} from '../utils/partnerCompaniesLogo';


const Partners = () => {
    return (
        <div id="partners">
            <div>
                {HomeLogos.logos.map((logo, index) => {
                    let className = logo === 'company_3.png' ? 'internshala' : '';
                    className = logo === 'company_8.png' ? 'auro' : className;
                    return <img key={index} className={`partner_img ${className}`} src={HomeLogos.basePath + logo} alt="logo" />
                })}
            </div>
        </div>
    );
}

export default Partners;