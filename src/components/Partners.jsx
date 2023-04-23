import SlogDigital from '../assets/images/partners/company_1.png';
import AdsGoat from '../assets/images/partners/company_2.png';
import Internshala from '../assets/images/partners/company_3.png';
import LTMindtree from '../assets/images/partners/company_4.png';
import Lithan from '../assets/images/partners/company_5.png';
import Lalasa from '../assets/images/partners/company_6.png';
import Raha from '../assets/images/partners/company_7.png';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    return (
        <div id="partners">
            <Marquee gradient={false} speed={100}>
                <img className='partner_img' src={LTMindtree} alt="" />
                <img className='partner_img' src={AdsGoat} alt="" />
                <img className='partner_img' src={Lithan} alt="" />
                <img className='partner_img' src={Lalasa} alt="" />
                <img className='partner_img' src={SlogDigital} alt="" />
                <img className='partner_img internshala' src={Internshala} alt="" />
                <img className='partner_img' src={Raha} alt="" />
            </Marquee>
        </div>
    );
}

export default Partners;