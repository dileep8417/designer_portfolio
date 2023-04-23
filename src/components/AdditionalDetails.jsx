import statisticalData from "../utils/statisticalData";
import SectionHeading from "./SectionHeading";

const AdditionalDetails = () => {
    return (
        <div id="additional_details">
            <SectionHeading title="Numbers Matter!" heading="Here are some stats in my journey so far" styles={{maxWidth: "100%"}} />
            <div className="number_container">
                {statisticalData.map((data, index) => {
                    return (
                        <div key={index} className="number_card">
                            <div className="value">{data.number}</div>
                            <div className="title">{data.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdditionalDetails;