import React from "react";
import {Section} from "./aboutUsData";

interface Props {
    title: string;
    aboutUsData: Section[];
}


export const AboutUs: React.FC<Props> = (props: Props) => {
    const { title, aboutUsData } = props;

    return (
        <main>
            <section className={'py-5'}>
                <div className={'container'}>
                    <h2 className={'text-3xl font-semibold'}>
                        {title}
                    </h2>
                </div>
            </section>
            {aboutUsData.map(({ title, content, image, svg }, index) => (
                <div
                    key={index}
                    className={
                        (index % 2 === 0 ? 'bg-black' : '')
                    }
                >
                    <div className={'container py-40 px-32 flex flex-row' + (index % 2 === 0 ? '-reverse' : '') + ' justify-between items-center max-lg:flex-col max-lg:py-10 max-lg:px-3'}>
                        <div className={'flex flex-col gap-8 max-w-lg max-lg:max-w-full max-lg:gap-4 max-lg:items-center'}>
                            <div className={'flex gap-6 max-lg:items-center'}>
                                {svg && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: svg,
                                        }}
                                    />
                                )}
                                <h3
                                    className={`${
                                        index % 2 === 0
                                            ? 'text-5xl text-white'
                                            : 'text-4xl text-black'
                                    } max-lg:text-2xl`}
                                >
                                    {title}
                                </h3>
                            </div>

                            {content.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className={`${
                                        index % 2 === 0 ? 'text-white' : ''
                                    } max-lg:text-xs max-lg:text-center`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {image && (
                            // eslint-disable-next-line jsx-a11y/img-redundant-alt
                            <img
                                src={image}
                                alt="photo"
                                className={'max-w-md max-h-96 max-lg:max-w-full max-lg:mt-3'}
                            />
                        )}
                    </div>
                </div>
            ))}
        </main>
    )
}