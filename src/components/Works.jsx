import workContributions from "../utils/workContributionsData";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const Works = () => {
    return (
        <div id="work">
            <SectionHeading title="Works" heading="Explore My Best Projects" />
            <div className="work_container">
                {workContributions.map((project, index) => {
                    return <Project key={index} project={project} />
                })}
            </div>
        </div>
    );
}

export default Works;