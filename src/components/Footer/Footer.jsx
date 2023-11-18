import React from 'react';
import cl from "./Footer.module.scss"

import IconFb from "../../../public/img/fb-ico.svg?react"
import IconTw from "../../../public/img/tw-ico.svg?react"
import IconIn from "../../../public/img/in-ico.svg?react"

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.inner}>
                    <ul className={cl.colums}>
                        <li className={cl.contacts}>
                            <h4>Contacts:</h4>
                            <ul>
                                <li>(1) 11-11-111</li>
                                <li>random.email@mail.ru</li>
                                <li>random text...</li>
                            </ul>
                        </li>
                        <li className={cl.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.678247069572!2d-0.12793636214359452!3d51.511230694229475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd8b3c4d65%3A0x63667aac15f4f7b1!2zMTIgQ3JhbmJvdXJuIFN0LCBMb25kb24gV0MySCA3QUcsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sby!4v1699734859209!5m2!1sru!2sby" width="550" height="400"></iframe>
                        </li>
                        <li>
                            <ul className={cl.social}>
                                <li><a href="#!"><IconFb /></a></li>
                                <li><a href="#!"><IconTw /></a></li>
                                <li><a href="#!"><IconIn /></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={cl.copyright}>
                    All rights reserved ©
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
