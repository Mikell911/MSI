import React from "react";
import Img from './img/Support.png'
import Img2 from './img/Account.png'
import Img3 from './img/Saving.png'

interface OfferProps {
    className?: string;
}

export const Offer:React.FC<OfferProps> = (props:OfferProps) => {
  const {
      className,
  } = props

    return (
        <section className={`${className} bg-light-grey`}>
            <div className={'container flex flex-wrap gap-32 items-center justify-center max-lg:gap-4'}>
                <div className={"max-w-64 flex flex-col items-center justify-center"}>
                    <img src={Img} alt="icon"/>

                    <h4 className={"mt-6 text-base font-bold text-center max-sm:text-sm"}>
                        Product Support
                    </h4>

                    <p className={"mt-3.5 text-sm font-normal text-center max-sm:text-sl"}>
                        Up to 3 years on-site warranty available for your peace of mind.
                    </p>
                </div>

                <div className={"max-w-64 flex flex-col items-center justify-center"}>
                    <img src={Img2} alt="icon"/>

                    <h4 className={"mt-6 text-base font-bold text-center max-sm:text-sm"}>
                        Personal Account
                    </h4>

                    <p className={"mt-3.5 text-sm font-normal text-center max-sm:text-sl"}>
                        With big discounts, free delivery and a dedicated support specialist.
                    </p>
                </div>

                <div className={"max-w-64 flex flex-col items-center justify-center"}>
                    <img src={Img3} alt="icon"/>

                    <h4 className={"mt-6 text-base font-bold text-center max-sm:text-sm"}>
                        Amazing Savings
                    </h4>

                    <p className={"mt-3.5 text-sm font-normal text-center max-sm:text-sl"}>
                        Up to 70% off new Products, you can be sure of the best price.
                    </p>
                </div>
            </div>
        </section>
    )
}