import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ItemsProps} from "../../Data/Items/Items";
import {Button} from "../../Components/Button/Button";
import IMG1 from './img/img1.png'
import IMG2 from './img/img2.png'
import IMG3 from './img/img3.png'
import IMG4 from './img/img4.png'

export const ItemPage: React.FC<{ item?: ItemsProps }> = (props) => {
    const { item } = props;
    const [count, setCount] = useState<number>(0);
    const ref = React.useRef<HTMLInputElement>(null);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCount(parseInt(event.target.value, 10));
    };

    const isAddToCartDisabled:boolean = count > 0

    const addItem = (event: React.FormEvent) => {
        event.preventDefault();
        setCount(0)
    }
    return (
        <>
            <section>
                <div className="container relative">
                    <div className={"flex items-center justify-end gap-6 py-5 max-lg:justify-center max-sm:flex-col max-sm:py-1 max-sm:gap-1"}>
                        <p className={"text-sm"}>
                            On Sale from: {item?.price && <span className={"font-bold text-base text-red"}>{item.price} zł</span>}
                        </p>

                        <div className="max-w-32">
                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button onClick={handleDecrement} className=" bg-light-grey text-gray-600 hover:text-white hover:bg-dark-blue h-full w-20 rounded-l cursor-pointer outline-none">
                                    −
                                </button>
                                <input type="text" className="text-sm outline-none focus:outline-none text-center w-full bg-light-grey font-semibold"
                                       ref={ref}
                                       value={count}
                                       onChange={handleInputChange}
                                />
                                <button onClick={handleIncrement} className="bg-light-grey text-gray-600 hover:text-white hover:bg-dark-blue h-full w-20 rounded-r cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>

                        <Button title={"Add to Cart"} isDisabled={isAddToCartDisabled} onClick={addItem} className={'text-sm hover:bg-blue hover:text-white'}/>
                    </div>

                    <div className={"grid grid-cols-2 justify-center justify-items-center py-10 max-lg:py-3 max-lg:grid-cols-1"}>
                        <div className={"w-full"}>
                            <Tabs defaultIndex={0} selectedTabClassName={'font-bold text-black'} focusTabOnClick={false}>
                                <TabList className={"flex gap-8 text-grey py-11 absolute top-0 max-lg:static max-lg:py-3 max-lg:justify-center max-sm:text-sm"}>
                                    <Tab className={"cursor-pointer"}>
                                        About Product
                                    </Tab>

                                    <Tab className={"cursor-pointer"}>
                                        Details
                                    </Tab>

                                    <Tab className={"cursor-pointer"}>
                                        Specs
                                    </Tab>
                                </TabList>

                                <div className={"pl-10 max-w-xl max-lg:pl-2 max-lg:max-w-full"}>
                                    <TabPanel>
                                        <h2 className={"text-3xl font-medium max-sm:text-center max-sm:text-xl"}>
                                            {item?.title ? item?.title + ' ' + item?.description[0].graphic : 'Cart Title'}</h2>

                                        <Link to={"/"} className={"mt-3 block text-blue text-xs font-normal max-sm:text-sl"}>Be the first to review this product</Link>

                                        {item?.description.map((desc, index) => (
                                            <p key={index} className={"text-lg mt-6 max-w-lg text-justify max-lg:max-w-full max-lg:text-base max-sm:text-sl max-sm:mt-3"}>
                                                {desc.text ? desc.text : 'Card description'}
                                            </p>
                                        ))}

                                        <p className={"mt-6 text-xs text-black max-sm:text-center"}>Have a Question? <span><Link to={"/"} className={"text-blue"}>Contact Us</Link></span></p>
                                    </TabPanel>

                                    <TabPanel>
                                        <h2 className={"text-3xl font-medium max-sm:text-center max-sm:text-xl"}>
                                            {item?.title ? item?.title + ' ' + item?.description[0].graphic : 'Cart Title'}</h2>

                                        <Link to={"/"} className={"mt-3 block text-blue text-xs font-normal"}>Be the first to review this product</Link>

                                        {item?.description.map((desc, index) => (
                                            <ul key={index} className={"mt-6 flex flex-col gap-2 max-sm:text-sl"}>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>Procesor:</span> {desc.processor}</li>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>Pamięć RAM:</span> {desc.ram} GB {desc.typeRam}</li>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>Dysk:</span> {desc.hdd} GB {desc.typeHdd}</li>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>Karta graficzna:</span> {desc.graphic}</li>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>Karta dźwiękowa:</span> {desc.soundCard}</li>
                                                <li><span className={"underline font-medium decoration-dark-blue"}>System operacyjny:</span> {desc.OC}</li>
                                            </ul>
                                        ))}

                                        <p className={"mt-6 text-xs text-black"}>Have a Question? <span><Link to={"/"} className={"text-blue"}>Contact Us</Link></span></p>
                                    </TabPanel>

                                    <TabPanel>
                                        <h2 className={"text-3xl font-medium max-sm:text-center max-sm:text-xl"}>
                                            {item?.title ? item?.title + ' ' + item?.description[0].graphic : 'Cart Title'}</h2>

                                        <Link to={"/"} className={"mt-3 block text-blue text-xs font-normal"}>Be the first to review this product</Link>

                                        <table className={"w-full mt-6"}>
                                            <tbody>
                                                {item?.description.map((descript, index) => (
                                                <React.Fragment key={index}>
                                                    <tr className={"font-bold text-lg max-sm:text-sm"}>
                                                        <td>
                                                            Procesor
                                                        </td>
                                                    </tr>
                                                    <tr className={'text-sm max-sm:text-sl'}>
                                                        <td>Procesor:</td>
                                                        <td className={"underline"}>{descript.processor ? descript.processor : 'N/A'}</td>
                                                    </tr>

                                                    {descript.cpu?.map((desc, innerIndex) => (
                                                        <React.Fragment key={innerIndex}>
                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Liczba rdzeni:</td>
                                                                <td>{desc.core ? desc.core : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Taktowanie procesora [GHz]:</td>
                                                                <td>{desc.hz ? desc.hz : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Pamięć podręczna procesora [MB]:</td>
                                                                <td>{desc.cache ? desc.cache : 'N/A'}</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    ))}
                                                    <tr className={"font-bold text-lg max-sm:text-sm"}>
                                                        <td>Karta graficzna</td>
                                                    </tr>

                                                    <tr className={'text-sm max-sm:text-sl'}>
                                                        <td>Karta graficzna:</td>
                                                        <td className={"underline"}>{descript.graphic ? descript.graphic : 'N/A'}</td>
                                                    </tr>

                                                    {descript.graphicDescr?.map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Pamięć karty graficznej:</td>
                                                                <td>{item.memory ? item.memory + ' GB' : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Typ pamięci:</td>
                                                                <td>{item.typeMemory ? item.typeMemory : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Port:</td>
                                                                <td>{item.port ? item.port : 'N/A'}</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    ))}

                                                    <tr className={"font-bold text-lg max-sm:text-sm"}>
                                                        <td>Napędy i dyski</td>
                                                    </tr>

                                                    <tr className={'text-sm max-sm:text-sl'}>
                                                        <td>Pojemność dysku:</td>
                                                        <td>{descript.hdd ? descript.hdd + ' GB' : 'N/A'}</td>
                                                    </tr>

                                                    {descript.hddDescr?.map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Type:</td>
                                                                <td>{item.typeHdd ? item.typeHdd : 'N/A'}</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    ))}

                                                    <tr className={"font-bold text-lg max-sm:text-sm"}>
                                                        <td>Fizyczne</td>
                                                    </tr>

                                                    {descript.dimensions?.map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Wysokość:</td>
                                                                <td>{item.height ? item.height + 'cm' : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Szerokość:</td>
                                                                <td>{item.width ? item.width + 'cm' : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Głębokość:</td>
                                                                <td>{item.depth ? item.depth + 'cm' : 'N/A'}</td>
                                                            </tr>

                                                            <tr className={'text-sm max-sm:text-sl'}>
                                                                <td>Waga:</td>
                                                                <td>{item.weight ? item.weight + 'kg' : 'N/A'}</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                            </tbody>
                                        </table>

                                        <p className={"mt-6 text-xs text-black"}>Have a Question? <span><Link to={"/"} className={"text-blue"}>Contact Us</Link></span></p>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>

                        <div>
                            <img src={item?.img} alt={item?.title}/>

                            <div className={"py-6 flex gap-6 items-center justify-center max-md:py-2 max-sm:gap-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="17" viewBox="0 0 77 27" fill="none">
                                    <g clipPath="url(#clip0_50_1170)">
                                        <path d="M27.2846 10.1111L21.1213 15.5228H5.85683C4.43303 15.5209 3.05772 16.0276 1.99023 16.9472L9.68903 10.1856L9.80715 10.0834L19.4527 1.60541C21.008 0.239823 23.1915 -0.212134 25.1807 0.419786C27.17 1.05171 28.6627 2.6715 29.0967 4.669C29.5306 6.66651 28.8398 8.73825 27.2846 10.1038V10.1111Z" fill="#F15B41"/>
                                        <path d="M5.85671 11.5798C9.09128 11.5798 11.7134 9.02039 11.7134 5.86314C11.7134 2.70589 9.09128 0.146437 5.85671 0.146437C2.62214 0.146437 0 2.70589 0 5.86314C0 9.02039 2.62214 11.5798 5.85671 11.5798Z" fill="#F99D1D"/>
                                        <path d="M5.85698 15.5228C4.43317 15.5209 3.05787 16.0276 1.99038 16.9472L1.94104 16.991C-0.463624 19.102 -0.659766 22.7161 1.50295 25.0633C3.66566 27.4105 7.36825 27.6019 9.77291 25.4909L21.123 15.5243L5.85698 15.5228Z" fill="#272560"/>
                                        <path d="M21.1128 15.5272L9.76153 25.4938C8.68669 26.4373 7.29118 26.9574 5.8457 26.9534L23.3585 26.9533C26.7365 26.9006 29.1215 24.42 29.1215 21.2373C29.1215 18.0547 26.5561 15.5712 23.3585 15.5214L21.1128 15.5272Z" fill="#00B6BD"/>
                                        <path d="M37.612 22.1742C37.1244 22.1918 36.6527 22.0041 36.3175 21.6591C35.9894 21.3108 35.8145 20.8513 35.8301 20.3791C35.8255 19.9035 35.9463 19.4347 36.181 19.0174C36.3873 18.6444 36.6391 18.2969 36.931 17.9827L44.1773 10.0111H37.861C37.249 10.0111 36.811 9.80679 36.571 9.40106C36.3374 8.99347 36.2208 8.53219 36.2335 8.06565C36.2167 7.61601 36.3498 7.17314 36.613 6.80322C36.8739 6.45314 37.2986 6.25452 37.7425 6.27489H48.9021C49.3739 6.25374 49.8341 6.42145 50.1755 6.739C50.492 7.04695 50.6525 7.48479 50.6525 8.03938C50.6659 8.47125 50.5733 8.9 50.3825 9.29014C50.1994 9.63005 49.9699 9.94426 49.7001 10.2242L42.1538 18.4366H49.3041C49.7342 18.4262 50.1437 18.6159 50.4065 18.9474C50.6866 19.318 50.8279 19.7707 50.807 20.2302C50.8274 20.709 50.7095 21.1838 50.4665 21.6007C50.222 21.9816 49.7886 22.1757 49.1796 22.1757L37.612 22.1742Z" fill="#272560"/>
                                        <path d="M55.1423 22.3844C53.1563 22.3844 52.7424 21.392 52.7424 20.5601V8.41738C52.7424 7.78252 52.9389 7.26879 53.3288 6.89079C53.7188 6.51279 54.3398 6.32014 55.1768 6.32014C55.8817 6.32014 56.4397 6.4763 56.8372 6.78571C57.2347 7.09511 57.4552 7.59425 57.4552 8.23641V20.4959C57.4552 21.1628 57.2392 21.6532 56.8132 21.9553C56.3872 22.2574 55.8397 22.3844 55.1423 22.3844ZM55.1423 5.01684C54.3683 5.01684 53.7338 4.79646 53.2538 4.36154C52.7739 3.92663 52.5234 3.32679 52.5234 2.58976C52.5049 1.93636 52.7688 1.30535 53.2508 0.850085C53.7263 0.396193 54.3638 0.164139 55.1423 0.164139C55.7842 0.165501 56.4082 0.370449 56.9197 0.747923C57.4777 1.14781 57.7612 1.76954 57.7612 2.5956C57.7612 3.33262 57.5152 3.92954 57.0307 4.36884C56.5462 4.80814 55.9117 5.02122 55.1423 5.02122V5.01684Z" fill="#272560"/>
                                        <path d="M62.6326 27.0374C60.7757 27.0374 60.3827 26.0289 60.3827 25.1824V8.00583C60.3666 7.46783 60.5794 6.94722 60.9707 6.56679C61.3591 6.18879 61.9816 5.99614 62.8186 5.99614C63.3392 5.99099 63.8535 6.10709 64.3185 6.33473C64.812 6.58138 65.0685 7.06447 65.0685 7.75772C65.1685 7.64583 65.276 7.53102 65.391 7.41329C65.7062 7.10192 66.0587 6.8285 66.441 6.5989C67.37 6.03469 68.4463 5.74284 69.5413 5.75824C70.5907 5.7384 71.6302 5.9573 72.5772 6.39749C73.4439 6.81376 74.1985 7.42152 74.7807 8.17221C75.3874 8.97514 75.8303 9.88375 76.0856 10.8489C76.3776 11.9395 76.5208 13.0627 76.5116 14.1896C76.5223 15.3376 76.3575 16.4807 76.0226 17.5814C75.7267 18.5592 75.2409 19.4728 74.5917 20.2727C73.9661 21.0264 73.1733 21.6327 72.2727 22.046C71.2929 22.4832 70.2247 22.7011 69.1469 22.6838C68.4251 22.7039 67.7049 22.6053 67.0169 22.3919C66.5228 22.2289 66.0532 22.0026 65.6205 21.7191C65.3859 21.5641 65.1696 21.3845 64.9755 21.1834V25.0948C64.9755 25.7749 64.785 26.277 64.4085 26.5864C64.032 26.8958 63.4531 27.0374 62.6326 27.0374ZM68.3414 9.6492C67.8303 9.63717 67.3246 9.75327 66.8729 9.98634C66.4479 10.2208 66.0836 10.5468 65.808 10.9394C65.4983 11.3835 65.2723 11.8777 65.1405 12.3989C64.9853 13.0045 64.9092 13.6268 64.914 14.2509C64.914 15.6725 65.214 16.8123 65.814 17.6398C66.414 18.4673 67.2284 18.8541 68.3474 18.8541C69.4663 18.8541 70.2808 18.4396 70.8463 17.5858C71.4118 16.732 71.7133 15.5951 71.7133 14.2509C71.7151 13.6284 71.6365 13.0081 71.4793 12.4047C71.3475 11.8858 71.1264 11.3923 70.8253 10.9452C70.5575 10.5521 70.1977 10.2265 69.7753 9.9951C69.3358 9.76181 68.842 9.64268 68.3414 9.6492Z" fill="#272560"/>
                                    </g>
                                </svg>

                                <p className={"text-xs font-normal text-dark-blue max-sm:text-sl"}>
                                    <span className={"font-semibold"}>own</span> it now, up to 6 months interest free
                                    <Link to={'/'} className={"text-xs underline ml-1 max-sm:text-sl"}>
                                        learn more
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"bg-black text-white py-16 max-sm:py-8"}>
                <div className={"container flex flex-col justify-center items-center"}>
                    <div>
                        <h4 className={"text-4xl text-center max-sm:text-xl"}>
                            Featues
                        </h4>

                        <p className={"text-lg max-w-md text-center mt-7 max-sm:mt-2 max-sm:text-sl"}>
                            The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
                        </p>
                    </div>

                    <div className={"mt-16 grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-sm:mt-4 max-sm:gap-2"}>
                        <div className={"flex flex-col items-center"}>
                            <img src={IMG1} alt="intel"/>

                            <p className={"text-xs text-center max-w-64 max-sm:text-sl"}>
                                <span className={"font-bold"}>Intel® Core™ i7</span> processor with the upmost computing power to bring you an unparalleled gaming experience.
                            </p>
                        </div>

                        <div className={"flex flex-col items-center"}>
                            <img src={IMG2} alt="rtx"/>

                            <p className={"text-xs text-center max-w-64 max-sm:text-sl"}>
                                The new <span className={"font-bold"}>GeForce® RTX SUPER™</span> Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.
                            </p>
                        </div>

                        <div className={"flex flex-col items-center"}>
                            <img src={IMG3} alt="ssd"/>

                            <p className={"text-xs text-center max-w-64 max-sm:text-sl"}>
                                Unleash the full potential with the latest <span className={"font-bold"}>SSD technology</span>, the NVM Express. 6 times faster than traditional SATA SSD.
                            </p>
                        </div>

                        <div className={"flex flex-col items-center"}>
                            <img src={IMG4} alt="ddr4"/>

                            <p className={"text-xs text-center max-w-64 max-sm:text-sl"}>
                                Featuring the latest <span className={"font-bold"}>10th Gen Intel® Core™</span> processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
