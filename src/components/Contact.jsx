import socialMediaLinks from "../utils/socialMediaData";

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact_section_title">Projects in mind?</div>
            <div className="contact_heading">Let’s create an amazing project together!</div>
            <a href={socialMediaLinks[2].link} id="email_btn">Email Now</a>
            <div id="message_me_txt">If you’d like to know more about any of my work or would like to see more projects, just drop me a message.</div>
            <div className="links">
                {socialMediaLinks.map((socialMedia, index) => {
                    return <a key={index} target="_blank" href={socialMedia.link} className="social_media_link">{socialMedia.name}</a>
                })}
            </div>
        </div>
    );
}

export default Contact;