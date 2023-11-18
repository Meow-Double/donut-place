import React from 'react';

import cl from "./Info.module.scss";

const Info = () => {
    return (
        <div className={cl.content}>
            <h2 className={cl.title}>About the company</h2>
            <div className={cl.info}>
                <div className={cl.text}>
                    <p>Our company was founded in 1998. At that time, technology was not so highly developed, but despite this, we managed to break into the global market. Now, we are presenting a large-scale production of confectionery products - doughnuts. </p>
                    <p>We're based in London. This is where our main office and facility is located. More than 20,000 stores and private entrepreneurs cooperate with us. Dount place is the leading company at the moment, and occupies the level of the world trade in the sphere of food and confectionery products.</p>
                </div>
                <div>
                    <div className={cl.decor}>
                        <img src="./img/about-donut.png" alt="donut" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
