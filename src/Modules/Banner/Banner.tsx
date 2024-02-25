import React from "react";
import { Link } from "react-router-dom";

interface Props {
    dayFrom: string;
    dayTo: string;
    from: string;
    to: string;
    address: string;
    tel: string;
}

const Banner: React.FC<Props> = (props: Props) => {
    const {
        dayFrom,
        dayTo,
        from,
        to,
        address,
        tel,
    } = props;

    return (
        <section className={'bg-black fixed w-full z-40 shadow-md max-sm:hidden'}>
            <div className={'container py-3 flex items-center justify-between max-lg:py-1'}>
                <div className={'flex gap-2 items-center max-lg:flex-col'}>
                    <div className={'text-xs font-semibold text-grey'}>
                        {dayFrom} - {dayTo}
                    </div>

                    <div className={'text-xs font-semibold text-white'}>
                        {from} - {to}
                    </div>
                </div>

                <div className={"flex gap-2 max-lg:flex-col max-lg:items-center"}>
                    <p className={"text-xs font-semibold text-grey"}>
                        Visit our showroom in {address}
                    </p>
                    <Link to={"/contact"} className={"text-xs font-semibold text-white underline"}>Contact Us</Link>
                </div>

                <div className={"flex gap-3.5 items-center justify-center max-lg:flex-wrap max-lg:max-w-32"}>
                    <p className={"text-xs font-semibold text-white"}>
                        Call us:
                        <a href={`tel:${tel}`} className={"text-xs font-semibold text-white hover:underline"}>{tel}</a>
                    </p>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.1051 2.27661H2.89423C2.55247 2.27661 2.27637 2.55272 2.27637 2.89447V17.1053C2.27637 17.4471 2.55247 17.7232 2.89423 17.7232H17.1051C17.4468 17.7232 17.723 17.4471 17.723 17.1053V2.89447C17.723 2.55272 17.4468 2.27661 17.1051 2.27661ZM15.321 6.78508H14.0872C13.1199 6.78508 12.9326 7.24462 12.9326 7.92041V9.40907H15.2418L14.9406 11.7396H12.9326V17.7232H10.5248V11.7415H8.51099V9.40907H10.5248V7.69064C10.5248 5.6961 11.7432 4.60905 13.5234 4.60905C14.3768 4.60905 15.1086 4.67276 15.3229 4.70173V6.78508H15.321Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.9996 7.39651C8.56601 7.39651 7.39609 8.56644 7.39609 10C7.39609 11.4336 8.56601 12.6035 9.9996 12.6035C11.4332 12.6035 12.6031 11.4336 12.6031 10C12.6031 8.56644 11.4332 7.39651 9.9996 7.39651ZM17.8082 10C17.8082 8.92191 17.818 7.85355 17.7574 6.77737C17.6969 5.52737 17.4117 4.418 16.4977 3.50394C15.5816 2.58792 14.4742 2.30472 13.2242 2.24417C12.1461 2.18363 11.0777 2.19339 10.0016 2.19339C8.92343 2.19339 7.85507 2.18363 6.7789 2.24417C5.5289 2.30472 4.41953 2.58988 3.50546 3.50394C2.58945 4.41995 2.30624 5.52737 2.2457 6.77737C2.18515 7.8555 2.19492 8.92386 2.19492 10C2.19492 11.0762 2.18515 12.1465 2.2457 13.2227C2.30624 14.4727 2.5914 15.5821 3.50546 16.4961C4.42148 17.4121 5.5289 17.6953 6.7789 17.7559C7.85703 17.8164 8.92539 17.8067 10.0016 17.8067C11.0797 17.8067 12.148 17.8164 13.2242 17.7559C14.4742 17.6953 15.5836 17.4102 16.4977 16.4961C17.4137 15.5801 17.6969 14.4727 17.7574 13.2227C17.8199 12.1465 17.8082 11.0782 17.8082 10ZM9.9996 14.0059C7.78281 14.0059 5.99375 12.2168 5.99375 10C5.99375 7.78323 7.78281 5.99417 9.9996 5.99417C12.2164 5.99417 14.0055 7.78323 14.0055 10C14.0055 12.2168 12.2164 14.0059 9.9996 14.0059ZM14.1695 6.76566C13.6519 6.76566 13.234 6.34769 13.234 5.83011C13.234 5.31253 13.6519 4.89456 14.1695 4.89456C14.6871 4.89456 15.1051 5.31253 15.1051 5.83011C15.1052 5.95301 15.0811 6.07473 15.0342 6.18831C14.9872 6.30188 14.9183 6.40508 14.8314 6.49198C14.7445 6.57889 14.6413 6.64779 14.5277 6.69476C14.4142 6.74172 14.2924 6.76581 14.1695 6.76566Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner;
