import Img from './img/1.png'
import Img2 from './img/2.png'
import Img3 from './img/3.png'
import Img4 from './img/4.png'
import Img5 from './img/5.png'
import Img6 from './img/6.png'
import Img7 from './img/7.png'


export interface FirmBanner {
    id: number;
    img: string;
    name: string;
}


const BannerFirms: FirmBanner[] = [
    {
        id: 1,
        img: Img,
        name: "gigabyte",
    },
    {
        id: 2,
        img: Img2,
        name: "hp",
    },
    {
        id: 3,
        img: Img3,
        name: "adata",
    },
    {
        id: 4,
        img: Img4,
        name: "tt",
    },
    {
        id: 5,
        img: Img5,
        name: "razer",
    },
    {
        id: 6,
        img: Img6,
        name: "msi",
    },
    {
        id: 7,
        img: Img7,
        name: "roccat",
    },
]

export default BannerFirms;