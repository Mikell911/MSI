import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {Button} from "../../Components/Button/Button";


interface ReviewProps {
    reviews?: {
        author?: string;
        comment?: string;
        id: number;
    }[];
    button?: string;
    className?: string;
}

export const Review:React.FC<ReviewProps> = (props:ReviewProps) => {
  const {
      reviews,
      button,
      className,
  } = props


    return (
        <section className={className}>
            <div className={"container flex justify-center"}>
                <div className={"max-w-6xl pl-28 pr-28 bg-light-grey overflow-hidden max-md:pl-5 max-md:pr-5"}>
                    <Swiper pagination={true} modules={[Pagination]} >
                        {reviews?.map((reviews, index) => (
                            <SwiperSlide className={"py-12 max-md:py-6"} key={reviews.id}>
                                <div className={"flex gap-7"}>
                                    <p className={'text-8xl max-sm:hidden'}>
                                        ‘’
                                    </p>

                                    <p className={"text-lg max-md:text-sm max-sm:text-sl"}>
                                        {reviews.comment}
                                    </p>
                                </div>

                                <p className={"text-sm text-right"}>
                                    - {reviews.author}
                                </p>

                                <Button title={button} className={'mt-5'} isDisabled={true}/>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    )
}