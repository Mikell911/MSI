import React from "react";

interface BannerFirmProps {
    banners?: {
        img: string;
        name: string;
        id: number;
    }[];
    className?: string,
    classNameImg?: string,
}

export const BannerFirm:React.FC<BannerFirmProps> = (props:BannerFirmProps) => {
    const {
        banners,
        className,
        classNameImg,
    } = props


    return (
        <section className={className}>
            <div className={"container"}>
                <div className={`flex flex-wrap justify-between`}>
                    {banners && banners.map(banner => (
                        <img className={classNameImg} key={banner.id} src={banner.img} alt={banner.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}