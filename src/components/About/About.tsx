import React from "react";
import { FormattedMessage } from "react-intl";

export const About: React.SFC<{}> = (props) => {
    return (
        <section>
            <FormattedMessage id="about" />
        </section>
    );
};

export default About;
