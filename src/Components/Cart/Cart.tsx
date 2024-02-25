import React from "react";
import {Star} from "../Star/Star";
import {Link} from "react-router-dom";
import {ItemsProps} from "../../Data/Items/Items";


export const Cart:React.FC<{ item?: ItemsProps }> = (props) => {
    const {
        item,
    } = props


    return (
        <div className={"max-w-60 relative"}>
            <div className={'px-5 max-md:p-0'}>
                <div className={'p-2 flex gap-1.5 items-center max-sm:p-0'}>
                    {item?.availability ?
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                <circle cx="5.5" cy="5" r="5" fill="#78A962"/>
                                <path d="M7.5 4L4.98404 7L3.5 5.27853" stroke="white" strokeLinecap="round"/>
                            </svg>

                            <p className={'text-sl font-normal text-green max-md:text-sl'}>
                                in stock
                            </p>
                        </>
                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                <circle cx="5.5" cy="5" r="5" fill="#C94D3F"/>
                                <path d="M6.17669 5.85626L6.52669 5.50626C6.57383 5.4597 6.63347 5.42783 6.69838 5.41452C6.76328 5.4012 6.83065 5.40702 6.89231 5.43126L7.31888 5.60157C7.38119 5.62686 7.43462 5.67004 7.47244 5.72565C7.51025 5.78126 7.53076 5.84682 7.53138 5.91407V6.69532C7.53101 6.74107 7.5214 6.78627 7.50311 6.8282C7.48481 6.87013 7.45823 6.90793 7.42494 6.93931C7.39166 6.9707 7.35237 6.99502 7.30944 7.01083C7.2665 7.02663 7.22082 7.03358 7.17513 7.03126C4.18607 6.84532 3.58294 4.31407 3.46888 3.34532C3.46358 3.29775 3.46842 3.24959 3.48307 3.20402C3.49772 3.15846 3.52186 3.11651 3.55389 3.08093C3.58592 3.04536 3.62511 3.01698 3.6689 2.99764C3.71269 2.97831 3.76007 2.96846 3.80794 2.96876H4.56263C4.62997 2.96896 4.69572 2.9893 4.75141 3.02717C4.8071 3.06504 4.85018 3.1187 4.87513 3.18126L5.04544 3.60782C5.07048 3.66924 5.07687 3.73667 5.06381 3.8017C5.05075 3.86672 5.01882 3.92646 4.972 3.97344L4.622 4.32344C4.622 4.32344 4.82356 5.68751 6.17669 5.85626Z" fill="white"/>
                            </svg>

                            <p className={'text-sl font-normal text-red max-md:text-sl'}>
                                check availability
                            </p>
                        </>
                    }
                </div>

                <div className={'flex justify-center items-center'}>
                    <Link to={`/${item?.category}/${item?.subcategory}/${item?.model}`}><img src={item?.img} alt={item?.title || "Product Image"} className={'max-w-36 cursor-pointer max-sm:max-w-24 max-sm:text-xs'} /></Link>
                </div>

                <div className={"mt-2.5"}>
                    <Star reviews={item?.rating} />
                </div>

                {item?.title && (
                    <Link to={`/${item?.category}/${item?.subcategory}/${item?.model}`}>
                        <h3 className={'mt-2 text-sm font-normal cursor-pointer hover:text-blue hover:underline max-sm:text-sl max-sm:text-center'}>
                        <span className={"font-bold"}>{item.title}</span> {item.model}
                    </h3></Link>
                )}

                <div className={"flex items-center justify-between px-5"}>
                    {item?.price && (
                        <p className={`text-lg font-semibold max-sm:text-sl ${item.sale ? "line-through text-grey text-sm" : "text-red"}`}>
                            {item.price} zł
                        </p>
                    )}

                    {item?.sale !== null && (
                        <p className="text-lg text-red font-semibold max-sm:text-sl">
                            {item?.sale} zł
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}