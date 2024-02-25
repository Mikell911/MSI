import React, {useRef, useState} from "react";
import {catalogPageProps} from "./type";
import {Accordion, AccordionItem} from "@szhsin/react-accordion";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button/Button";
import {CheckBoxGroup, CheckBoxSingle} from "../../Modules/CheckBoxGroup/CheckBoxGroup";
import {Cart} from "../../Components/Cart/Cart";
import {ItemsProps} from "../../Data/Items/Items";
import {Option, Selector} from "../../Components/Selector/Selector";
import {BannerFirm} from "../../Modules/BannerFirm/BannerFirm";
import BannerFirms from "../../Data/BannerFirm/FirmBanner";

interface IcheckedGroup {
    [T:string]: string[]
}
export const CatalogPage:React.FC<catalogPageProps> = (props) => {
    const {
        item,
        filter,
    } = props;
    const [items, setItems] = useState(item);
    const InpFrom = useRef<HTMLInputElement>(null);
    const InpTo = useRef<HTMLInputElement>(null);
    const [availableChecked, setAvailableChecked] = useState(false);
    const [sale, setSale] = useState(false);
    const [visibilitySidebar, setVisibilitySidebar] = useState(false);

    const uniqueCategories = Array.from(new Set(item?.map(cat => cat?.subcategory || "")));
    const uniqueProcessorCategories = Array.from(new Set(item?.map(cat => cat?.description[0].processor || "")));
    const uniqueRamCategories = Array.from(new Set(item?.map(cat => cat?.description[0].ram || "")));
    const uniqueTypeRamCategories = Array.from(new Set(item?.map(cat => cat?.description[0].typeRam || "")));
    const uniqueGraphicCategories = Array.from(new Set(item?.map(cat => cat?.description[0].graphic || "")));

    const checkProcessorGroupOption = {
        processor: uniqueProcessorCategories,
    }
    const checkRamGroupOption = {
        Ram: uniqueRamCategories,
    }
    const checkTypeRamGroupOption = {
        typeRam: uniqueTypeRamCategories,
    }
    const checkGraphicGroupOption = {
        graphic: uniqueGraphicCategories,
    }
    const checkGroupOption = {
        category: uniqueCategories,
    };

    const [checkedBoxByGroup, setIsCheckedBoxByGroup] = useState<IcheckedGroup>({
    });

    const option:Option[] = [
        {
            label: "Price Low - High",
            value: "priceLowToHigh"
        },
        {
            label: "Price High - Low",
            value: "priceHighToLow"
        },
        {
            label: "Model A - Z",
            value: "alphabeticalZToA"
        },
        {
            label: "Model Z - A",
            value: "alphabeticalAToZ"
        },
    ]

    const handleApplyFilters = () => {
        let filteredItems = items?.map((item) => ({ ...item }));

        if (availableChecked) {
            filteredItems = filteredItems?.filter(item => item.availability === true);
        }

        if (sale) {
            filteredItems = filteredItems?.filter(item => item.sale !== null);
        }

        if (checkedBoxByGroup.category && checkedBoxByGroup.category.length > 0) {
            filteredItems = filteredItems?.filter(item => checkedBoxByGroup.category.includes(item.subcategory));
        }

        if (checkedBoxByGroup.graphic && checkedBoxByGroup.graphic.length > 0) {
            filteredItems = filteredItems?.filter(item => {
                const graphics = Array.isArray(item.description[0].graphic) ? item.description[0].graphic : [item.description[0].graphic];
                return checkedBoxByGroup.graphic.some(selectedGraphic => graphics.includes(selectedGraphic));
            });
        }

        if (checkedBoxByGroup.ram && checkedBoxByGroup.ram.length > 0) {
            filteredItems = filteredItems?.filter(item => {
                const ram = Array.isArray(item.description[0].ram) ? item.description[0].ram : [item.description[0].ram];
                return checkedBoxByGroup.ram.some(selectedRam => ram.includes(selectedRam));
            });
        }

        if (checkedBoxByGroup.typeRam && checkedBoxByGroup.typeRam.length > 0) {
            filteredItems = filteredItems?.filter(item => {
                const typeRam = Array.isArray(item.description[0].typeRam) ? item.description[0].typeRam : [item.description[0].typeRam];
                return checkedBoxByGroup.typeRam.some(selectedTypeRam => typeRam.includes(selectedTypeRam));
            });
        }

        setItems(filteredItems);
    };

    const handleClearFilters = () => {
        setIsCheckedBoxByGroup({});
        setItems(item)
        setAvailableChecked(false)
        setSale(false)
    };

    const sortItems = (sortBy: 'priceLowToHigh' | 'priceHighToLow' | 'alphabeticalAToZ' | 'alphabeticalZToA') => {
        const sortedItems = [...items || []] as ItemsProps[];

        sortedItems.sort((a, b) => {
            switch (sortBy) {
                case 'priceLowToHigh':
                    return (a.price || 0) - (b.price || 0);
                case 'priceHighToLow':
                    return (b.price || 0) - (a.price || 0);
                case 'alphabeticalAToZ':
                    return (a.model || '').localeCompare(b.model || '');
                case 'alphabeticalZToA':
                    return (b.model || '').localeCompare(a.model || '');
                default:
                    // Default sorting, e.g., no sorting
                    return 0;
            }
        });

        setItems(sortedItems);
    };

    const handleCheckedBoxGroup = (event: React.ChangeEvent<HTMLInputElement>, nameGroup: string) => {
        setIsCheckedBoxByGroup((prevState) => {
            const updatedState = { ...prevState };

            if (event.target.checked) {
                if (updatedState[nameGroup]?.includes(event.target.value)) {
                    return prevState;
                } else {
                    updatedState[nameGroup] = [...(updatedState[nameGroup] || []), event.target.value];
                }
            } else {
                updatedState[nameGroup] = updatedState[nameGroup]?.filter(x => x !== event.target.value) || [];
            }

            return updatedState;
        });
    };

    const handleAvailabilityChange = (isChecked: boolean) => {
        setAvailableChecked(isChecked);
    }

    const handleSaleChange = (isChecked:boolean) => {
        setSale(isChecked)
    }
    const handleVisibilitySidebar = () => {
        setVisibilitySidebar(!visibilitySidebar)
    }
    const accordionClass = visibilitySidebar ? 'block fixed top-0 left-0 max-w-full max-h-full w-full z-50 bg-white' : 'hidden';

    return (
        <section className={"py-8 max-sm:py-2"}>
            <div className="container">
                <h1 className={"font-bold text-3xl max-sm:text-center"}>
                    {filter ? filter : "Catalog"}
                </h1>

                <div className={"grid grid-cols-[200px_1fr] mt-6 gap-5 max-md:grid-cols-1"}>
                    {/*sidebar*/}
                    <div>
                    <Accordion allowMultiple className={`max-w-52 h-fit border border-grey 
                    max-md:${accordionClass}`
                    }>
                        {visibilitySidebar && <div className={"flex justify-between items-center p-3"}>
                            <p>Filruj produkty</p>
                            <Button isDisabled={true} className={"border-none text-black"} onClick={handleVisibilitySidebar} title={"X"}/>
                        </div>
                        }

                        <AccordionItem
                            header={
                                <p className={"text-base font-medium hover:text-red"}>
                                    Cena
                                </p>
                            } initialEntered className={"p-2 border border-b-grey"}>
                            <div className={"flex items-center justify-center gap-2"}>
                                <Input type={'text'}
                                       placeholder={'od'}
                                       className={'py-1 px-1 text-xs rounded-none border-grey'}
                                       inputRef={InpFrom}
                                />
                                <p>
                                    -
                                </p>
                                <Input type={'text'}
                                       placeholder={'do'}
                                       className={'py-1 px-1 text-xs rounded-none border-grey'}
                                       inputRef={InpTo}
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem
                            header={
                                <p className={"text-base font-medium hover:text-red"}>
                                    Dostępność
                                </p>
                            } initialEntered className={"p-2 border border-b-grey"}>

                            <CheckBoxSingle label={'Dostępność'}
                                            id={'available'}
                                            className={'text-sl pl-2 hover:underline'}
                                            isChecked={availableChecked}
                                            onChange={handleAvailabilityChange}
                            />

                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Promocja
                            </p> } initialEntered className={"p-2 border border-b-grey"}>

                            <CheckBoxSingle
                                label={'Cena z kodem'}
                                id={'sale'}
                                className={'text-sl pl-2 hover:underline'}
                                isChecked={sale}
                                onChange={handleSaleChange}
                            />
                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Marka
                            </p>
                        } className={"p-2 border border-b-grey"}>
                            {checkGroupOption.category.map(label => (
                                <CheckBoxGroup
                                    className={'text-sl pl-2 hover:underline'}
                                    checkedBoxesByGroup={checkedBoxByGroup}
                                    id={label}
                                    key={label}
                                    nameGroup={"category"}
                                    label={label}
                                    onChange={handleCheckedBoxGroup}
                                />
                            ))}
                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Karta Graficzna
                            </p>
                        } className={"p-2 border border-b-grey"}>
                            {checkGraphicGroupOption.graphic.map(label => (
                                <CheckBoxGroup
                                    checkedBoxesByGroup={checkedBoxByGroup}
                                    className={'text-sl pl-2 hover:underline'}
                                    id={label}
                                    key={label}
                                    nameGroup={"graphic"}
                                    label={label}
                                    onChange={handleCheckedBoxGroup}
                                />
                            ))}
                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Processor
                            </p>
                        } className={"p-2 border border-b-grey"}>
                            {checkProcessorGroupOption.processor.map(label => (
                                <CheckBoxGroup
                                    checkedBoxesByGroup={checkedBoxByGroup}
                                    id={label}
                                    className={'text-sl pl-2 hover:underline'}
                                    key={label}
                                    nameGroup={"processor"}
                                    label={label}
                                    onChange={handleCheckedBoxGroup}
                                />
                            ))}
                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Pamięć RAM
                            </p>
                        } className={"p-2 border border-b-grey"}>
                            {checkRamGroupOption.Ram.map(label => (
                                <CheckBoxGroup
                                    checkedBoxesByGroup={checkedBoxByGroup}
                                    id={label}
                                    className={'text-sl pl-2'}
                                    key={label}
                                    nameGroup={"ram"}
                                    label={label}
                                    onChange={handleCheckedBoxGroup}
                                />
                            ))}
                        </AccordionItem>

                        <AccordionItem header={
                            <p className={"text-base font-medium hover:text-red"}>
                                Typ pamięć RAM
                            </p>
                        } className={"p-2 border border-b-grey"}>
                            {checkTypeRamGroupOption.typeRam.map(label => (
                                <CheckBoxGroup
                                    checkedBoxesByGroup={checkedBoxByGroup}
                                    id={label}
                                    className={'text-sl pl-2'}
                                    key={label}
                                    nameGroup={'typeRam'}
                                    label={label}
                                    onChange={handleCheckedBoxGroup}
                                />
                            ))}
                        </AccordionItem>
                        <div className={"flex items-center justify-center flex-col gap pt-5 "}>
                            <Button title={"Zastosuj filtry"} onClick={handleApplyFilters} isDisabled={true} className={"hover:bg-blue hover:text-white"} />
                            <Button title={'wyczysc filtry'}
                                    onClick={handleClearFilters}
                                    isDisabled={true}
                                    className={"border-transparent text-grey hover:bg-transparent hover:text-red hover:underline"}/>
                        </div>
                    </Accordion>

                        <BannerFirm banners={BannerFirms} classNameImg={'max-w-16'}/>
                    </div>

                    {/*row content*/}
                    <div>
                        <div className={"flex justify-between"}>
                            <Selector
                                placeholder={"Sort by:"}
                                options={option}
                                className={"w-full"}
                                onChange={(selection: Option) => sortItems(selection.value as any)}
                            />
                            <Button title={"filter"}
                                    className={"hidden max-w-52 w-full border rounded-none border-gray text-black cursor-pointer max-md:block"}
                                    isDisabled={true}
                                    onClick={handleVisibilitySidebar}
                            />
                        </div>
                        {items && items.length > 0 ? (
                            <div className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2">
                                {items.map(item => (
                                    <Cart item={item} key={item.id}/>
                                ))}
                            </div>
                        ) : (
                            <div className={"grid grid-cols-5"}>
                                <p>No items found....</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}