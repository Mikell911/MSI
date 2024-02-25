import Img from './img/1.jpg'
import Img2 from './img/2.jpg'
import Img3 from './img/3.jpg'
import Img4 from './img/4.jpg'
import Img5 from './img/5.jpg'

export interface ItemsProps {
    id: number;
    img: string;
    title: string;
    category: string;
    subcategory: string;
    model: string;
    description: [
        {
            text?: string;
            processor?: string;
            ram?: string;
            typeRam?: string;
            hdd?: string;
            typeHdd?: string;
            graphic?: string;
            OC?: string;
            soundCard?: string;
            cpu?: [
                {
                    core?: string;
                    cache?: string;
                    hz?: string;
                }
            ];
            graphicDescr?: [
                {
                    memory?: string;
                    typeMemory?: string;
                    port?: string;
                }
            ];
            hddDescr?: [
                {
                    typeHdd?: string;
                }
            ];
            dimensions?: [
                {
                    width?: string;
                    height?: string;
                    depth?: string;
                    weight?: string;
                }
            ]
        }
    ];
    price: number;
    sale?: number | null;
    rating: number;
    availability: boolean;
}

const Items: ItemsProps[] = [
    {
        id: 1,
        img: `${Img}`,
        title: 'Acer',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Predator Orion 3000 PO3-640',
        description: [
            {
                text: 'Graj, streamuj, edytuj — rób wszystko — z procesorem Intel Core i5-12400F 12. generacji i kartą graficzną NVIDIA GeForce GTX 1660 Super na zawołanie. Do tego dochodzi nawet do 16 GB pamięci DDR4 3200 MHz, dysk SSD PCIe NVMe o pojemności do 2 TB i mnóstwo miejsca na dodatkową pamięć masową na opcjonalnym dodatkowym dysku twardym. Możesz zbudować swoją potęge z Orion 3000.',
                processor: 'Intel Core i5-12400F',
                ram: '16',
                typeRam: 'DDR4',
                hdd: '512',
                graphic: 'NVIDIA GeForce GTX 1660 Super',
                OC: 'Windows 11 Home',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '6',
                        cache: '18',
                        hz: '2.5 - 4.4',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '6',
                        typeMemory: 'DDR6',
                        port: 'HDMI, DisplayPort',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '38.5',
                        height: '17.5',
                        depth: '37.7',
                        weight: '10',
                    }
                ],
            }
        ],
        price: 3299,
        sale: null,
        rating: 4.4,
        availability: true,
    },
    {
        id: 2,
        img: `${Img2}`,
        title: 'MSI MAG',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Infinite S3 13NUC5-1013EU',
        description: [
            {
                text: 'MSI MAG Infinite S3 13NUC5-1013EU to komputer zaprojektowany z myślą o graczach, który łączy moc procesora Intel 13. generacji z wydajnością karty graficznej NVIDIA, tworząc maszynę do eksplorowania wirtualnych światów i wbijania rankingu. Jeśli myślisz przyszłościowo, to ten model jest świetnym rozwiązaniem, gdyż zapewnia łatwy dostęp do podzespołów oraz opcję rozbudowy pamięci masowej czy modernizację karty graficznej, aby zawsze dotrzymywał kroku aktualnym standardom w świecie gier.',
                processor: 'Intel Core i5-13400F',
                ram: '16',
                typeRam: 'DDR5',
                hdd: '1000',
                graphic: 'NVIDIA GeForce RTX 4060',
                OC: 'Windows 11 Home',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '10',
                        cache: '20',
                        hz: '2.5 - 4.6',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '8',
                        typeMemory: 'DDR5',
                        port: 'DisplayPort',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'M2',
                    }
                ],
                dimensions: [
                    {
                        width: '17.38',
                        height: '40.71',
                        depth: '44.7',
                        weight: '7.73',
                    }
                ],
            }
        ],
        price: 4999,
        sale: null,
        rating: 4.4,
        availability: true,
    },
    {
        id: 3,
        img: `${Img3}`,
        title: 'Apple',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Mac Mini',
        description: [
            {
                text: 'Komputer APPLE Mac Mini zaskoczy Cię swoimi możliwościami. Układ scalony zawarty w czipie M2 sprawia, że to prawdziwy tytan pracy, któremu niestraszne będzie żadne zadanie. Zwiększona wydajność 8-rdzeniowego CPU pozwoli Ci wykonywać każde zadanie błyskawicznie, a 10-rdzeniowy GPU perfekcyjnie sprawdzi się podczas tworzenia najbardziej skomplikowanych obrazów. Strumienie wideo w jakości 4K i 8K ProRes możesz bez przeszkód obsługiwać dzięki megawydajnemu silnikowi multimedialnemu. Możesz też robić wszystkie te rzeczy naraz - to nie problem dla 8 GB zunifikowanej pamięci RAM.',
                processor: 'Apple M2',
                ram: '8',
                typeRam: 'DDR4',
                hdd: '256',
                graphic: 'Apple M2',
                OC: 'macOS Ventura',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '8',
                        cache: '',
                        hz: '',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '10 rdzeni',
                        typeMemory: '',
                        port: 'DisplayPort, HDMI',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '19.7',
                        height: '3.58',
                        depth: '19.7',
                        weight: '1.18',
                    }
                ],
            }
        ],
        price: 3299,
        sale: null,
        rating: 4.4,
        availability: true,
    },
    {
        id: 4,
        img: `${Img4}`,
        title: 'MAD DOG',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'MD12100F-PPI1V1',
        description: [
            {
                text: 'Komputer MAD DOG MD12100F-PPI1V1 oferuje starannie dobrane podzespoły, które razem tworzą doskonałej jakości sprzęt, który dostarczy zarówno odpowiedniej mocy do gier, jak i niezawodności podczas codziennego domowego użytkowania. Sprzęt po złożeniu przechodzi testy pod kątem wydajności, stabilności, bezpieczeństwa i jakości. Staramy się dostarczyć sprzęt wydajny, bezpieczny i profesjonalny.',
                processor: 'Intel Core i3-12100F',
                ram: '16',
                typeRam: 'DDR4',
                hdd: '1000 GB SSD',
                graphic: 'NVIDIA GeForce RTX 4060',
                OC: 'Realtek ALC897',
                soundCard: 'Brak',
                cpu: [
                    {
                        core: '4',
                        cache: '12',
                        hz: '3.3 - 4.3',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '8',
                        typeMemory: 'DDR4',
                        port: 'DisplayPort, HDMI',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '23.1',
                        height: '45',
                        depth: '46.3',
                        weight: '15.00',
                    }
                ],
            }
        ],
        price: 3699,
        sale: 3499,
        rating: 4.4,
        availability: true,
    },
    {
        id: 5,
        img: `${Img5}`,
        title: 'Lenovo',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Legion T5 26IRB8',
        description: [
            {
                text: 'Oto rewolucyjny LENOVO Legion T5 z procesorem Intel Core i5-13400F, wiodącą architekturą hybrydową i innowacyjnymi funkcjami! Uzyskaj najwyższą jakość gier, przesyłaj strumieniowo, twórz i rywalizuj na szczytowym poziomie. Dzięki procesorom Intel Cor™ 13. generacji rozgrywka staje się nowym doznaniem, dając Ci moc, abyś mógł zrealizować prawie wszystko.',
                processor: 'Intel Core i5-13400F',
                ram: '32',
                typeRam: 'DDR5',
                hdd: '1000',
                graphic: 'NVIDIA GeForce RTX 4060',
                OC: 'Windows 11 Home',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '10',
                        cache: '20',
                        hz: '2.5 - 4.6',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '8',
                        typeMemory: 'DDR6',
                        port: '',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '20.5',
                        height: '42.59',
                        depth: '39.69',
                        weight: '14',
                    }
                ],
            }
        ],
        price: 5499,
        sale: null,
        rating: 4.4,
        availability: false,
    },
    {
        id: 6,
        img: `${Img4}`,
        title: 'Samsung',
        category: 'Computer',
        subcategory: 'laptop',
        model: 'BQ500FX-I02DR',
        description: [
            {
                text: 'Dedykowany graczom MAD DOG BQ500FX-I02DR CS2 Reflex Edition to komputer do wbijania wyższych rankingów i eksplorowania wirtualnych światów. Ta konfiguracja wyposażona w podzespoły od renomowanych producentów gwarantuje wyjątkową wydajność i niezawodność. Podświetlenie RGB zarówno podzespołów, jak i obudowy, dodaje urządzeniu unikalnego stylu. Możesz też mieć pewność, że komputer będzie działał niezawodnie, gdyż po złożeniu przechodzi testy pod kątem wydajności, stabilności, bezpieczeństwa i jakości.',
                processor: 'Intel Core i5-13400F',
                ram: '32',
                typeRam: 'DDR4',
                hdd: '1000',
                graphic: 'NVIDIA GeForce RTX 4060 Ti',
                OC: 'Brak',
                soundCard: 'Realtek ALC897',
                cpu: [
                    {
                        core: '10',
                        cache: '20',
                        hz: '2.5 - 4.6',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '16',
                        typeMemory: 'DDR6',
                        port: 'DisplayPort',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '23.2',
                        height: '44.3',
                        depth: '45',
                        weight: '16.2',
                    }
                ],
            }
        ],
        price: 6199,
        sale: null,
        rating: 4.4,
        availability: false,
    },
    {
        id: 7,
        img: `${Img3}`,
        title: 'HP',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Victus 15L TG02-0793nw',
        description: [
            {
                text: 'Postaw na wszechstronność z komputerem gamingowym Victus. Komputer HP Victus 15L TG02-0793nw R7-5700G 16GB RAM 512GB SSD Radeon RX6600XT Windows 11 Home to bardzo wydajna jednostka komputerowa, która zapewni Ci dostęp do wszystkich najważniejszych funkcji, umożliwiając wygodną pracę i rozrywkę na odpowiednim poziomie.',
                processor: 'AMD Ryzen 7 5700G',
                ram: '16',
                typeRam: 'DDR4',
                hdd: '512',
                graphic: 'AMD Radeon RX 6600 XT',
                OC: 'Windows 11 Home',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '8',
                        cache: '16',
                        hz: '3.8 - 4.6',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '8',
                        typeMemory: 'DDR4',
                        port: 'DisplayPort',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '15.5',
                        height: '33.7',
                        depth: '29.73',
                        weight: '6.31',
                    }
                ],
            }
        ],
        price: 4099,
        sale: null,
        rating: 4.4,
        availability: false,
    },
    {
        id: 8,
        img: `${Img2}`,
        title: 'ASUS',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'ExpertCenter D700SD',
        description: [
            {
                text: 'ASUS ExpertCenter D700SD to idealne rozwiązanie dla firm typu small-business, które potrzebują wydajnego i niezawodnego sprzętu komputerowego. Dzięki wszechstronnej konstrukcji, kompaktowej formie oraz możliwości wymiany komponentów, komputer ten doskonale sprawdza się w różnych przestrzeniach roboczych i scenariuszach zastosowań.',
                processor: 'Intel Core i5-12400',
                ram: '8',
                typeRam: 'DDR4',
                hdd: '256',
                graphic: 'Intel UHD Graphics 730',
                OC: 'Windows 11 Professional',
                soundCard: 'Tak',
                cpu: [
                    {
                        core: '6',
                        cache: '18',
                        hz: '2.5 - 4.4',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '',
                        typeMemory: '',
                        port: '',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'SSD',
                    }
                ],
                dimensions: [
                    {
                        width: '9.5',
                        height: '34',
                        depth: '29.2',
                        weight: '5',
                    }
                ],
            }
        ],
        price: 2799,
        sale: 2599,
        rating: 4.4,
        availability: true,
    },
    {
        id: 9,
        img: `${Img}`,
        title: 'ACER',
        category: 'Computer',
        subcategory: 'desktop',
        model: 'Nitro N50-640',
        description: [
            {
                text: 'Wykonany z czarnego metalu z ognistymi akcentami komputer ACER Nitro N50-640 ma wszystko, czego potrzebujesz do grania w doskonałym klatkażu i bez opóźnień. Graj, przesyłaj strumieniowo i projektuj jak profesjonalista. Podstawę stanowi wielordzeniowy procesor Intel Core i5-12400F o częstotliwości taktowania od 2.5 do 4.4 GHz. Inwestując w jednostkę, otrzymasz także dużo miejsca do przechowywania informacji. Zyskasz możliwość korzystania z szybkiego dysku SSD oraz pojemnej pamięci RAM. Poznaj najważniejsze zalety komputera i zapewnij sobie wspaniałe wrażenia.',
                processor: 'Intel Core i5-12400F',
                ram: '16',
                typeRam: 'DDR4',
                hdd: '512',
                graphic: 'NVIDIA GeForce GTX 1660 Super',
                OC: 'Windows 11 Home',
                soundCard: 'Zintegrowana',
                cpu: [
                    {
                        core: '6',
                        cache: '18',
                        hz: '2.5 - 4.4',
                    }
                ],
                graphicDescr: [
                    {
                        memory: '16',
                        typeMemory: '',
                        port: 'DisplayPort',
                    }
                ],
                hddDescr: [
                    {
                        typeHdd: 'M2',
                    }
                ],
                dimensions: [
                    {
                        width: '17.5',
                        height: '39.2',
                        depth: '38.6',
                        weight: '7.00',
                    }
                ],
            }
        ],
        price: 3249,
        sale: 3099,
        rating: 3.9,
        availability: true,
    },
]

export default Items
