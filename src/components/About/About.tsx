import React from "react";
import { FormattedMessage } from "react-intl";
import { withColor } from "../../hoc";

export const About: React.SFC<{}> = (props) => {
    return (
        <section>
            <FormattedMessage id="about" />
        </section>
    );
};

export default withColor(About);
