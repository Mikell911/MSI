import React from "react";
import Img from '../../img/error.png'
import {Link} from "react-router-dom";

const ErrorPage:React.FC = () => {
    return (
        <section>
            <div className={'container relative'}>
                <div className={'pt-48 pb-72 max-w-xs max-lg:pt-7 max-lg:pb-7 max-lg:max-w-full'}>
                    <h2 className={'text-5xl font-bold max-lg:text-center'}>Oops....</h2>
                    <p className={'mt-3.5 text-3xl font-normal max-lg:text-center'}>Page  not found</p>
                    <img src={Img} alt="error" className={'absolute right-0 top-0 max-w-screen-sm max-lg:max-w-full max-lg:static'}/>
                    <p className={"mt-4 text-base max-lg:text-center"}>This Page does`t exist or was removed! We suggest you  back to home.</p>
                    <Link to={'/'}
                          className={'max-lg:w-full block mt-14 py-3 px-10 bg-blue text-white text-center w-fit' +
                              'rounded-md border border-transparent hover:text-blue hover:bg-white hover:border-blue'}>
                        Back to home
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default ErrorPage