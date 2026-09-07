import { Fragment } from "react";

let Component1 = ({ value }) => {
    return (
        <div>
            {
                value.map((x, i) => {
                    return (
                        <Fragment key={i}>
                            <h1>{x}</h1>
                        </Fragment>
                    );
                })
            }
        </div>
    );
};

export default Component1;