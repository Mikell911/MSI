import Img from "./img/first.png"
import Img2 from "./img/second.png"
import Img3 from "./img/thith.png"
import Img4 from "./img/four.png"
import Img5 from "./img/fifty.png"

export interface Section {
    title: string;
    content: string[];
    image: string;
    svg: string;
}

const aboutUsData: Section[] = [
    {
        title: 'A Family That Keeps On Growing',
        content: [
            'We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.',
            'Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.'
        ],
        image: Img,
        svg: '',
    },
    {
        title: 'Shop.com',
        content: [
            'Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.',
        ],
        image: Img2,
        svg: '<svg width="61" height="50" viewBox="0 0 61 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M55 25C55 11.1929 43.8071 0 30 0C16.1929 0 5 11.1929 5 25C5 38.8071 16.1929 50 30 50H55V25Z" fill="#0156FF"/>\n' +
            '<path d="M30.165 10.1053L18.1543 17.2925V26.1383L30.165 33.3254L39.7999 27.7968V30.4229L30.165 36.2279L18.1543 28.9026V32.0815L30.165 39.1305L42.1757 32.0815V23.2358L32.5407 28.9026V26.1383L42.1757 20.3332V17.2925L30.165 10.1053Z" fill="white"/>\n' +
            '</svg>',
    },
    {
        title: 'Now You\'re In Safe Hands',
        content: [
            'Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',
            '*Performance compared to i7-9700. Specs varies by model',
        ],
        image: Img3,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">\n' +
            '<path d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50H50V25Z" fill="#0156FF"/>' +
            '<path d="M25.6475 18.0413C21.0349 11.1641 11.6992 14.9106 11.6992 22.4021C11.6992 28.0276 24.4979 36.8275 25.6475 37.9717C26.8049 36.8275 38.9671 28.0276 38.9671 22.4021C38.9671 14.9674 30.2687 11.1641 25.6475 18.0413Z" fill="white"/>' +
            '</svg>',
        },
    {
        title: 'The Highest Quality of Products',
        content: [
            'We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.e.',
        ],
        image: Img4,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">' +
            '<path d="M50 25.5C50 11.6929 38.8071 0.5 25 0.5C11.1929 0.5 0 11.6929 0 25.5C0 39.3071 11.1929 50.5 25 50.5H50V25.5Z" fill="#0156FF"/>' +
            '<path d="M23.8918 13.5128C24.2416 12.7146 25.374 12.7146 25.7237 13.5128L28.9109 20.7872C29.056 21.1183 29.3685 21.3453 29.7283 21.381L37.6315 22.1643C38.4987 22.2503 38.8486 23.3272 38.1975 23.9065L32.2642 29.1857C31.9941 29.426 31.8747 29.7933 31.952 30.1465L33.6492 37.9049C33.8354 38.7563 32.9193 39.4219 32.1672 38.9817L25.3129 34.97C25.0009 34.7874 24.6146 34.7874 24.3027 34.97L17.4484 38.9817C16.6962 39.4219 15.7801 38.7563 15.9664 37.9049L17.6636 30.1465C17.7408 29.7933 17.6215 29.426 17.3514 29.1857L11.418 23.9065C10.7669 23.3272 11.1168 22.2503 11.9841 22.1643L19.8873 21.381C20.247 21.3453 20.5595 21.1183 20.7046 20.7872L23.8918 13.5128Z" fill="white"/>' +
            '</svg>',
    },
    {
        title: 'We Deliver to Any Regions',
        content: [
            'We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.',
        ],
        image: Img5,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">' +
        '<path d="M50 25.8962C50 12.0891 38.8071 0.89624 25 0.89624C11.1929 0.89624 0 12.0891 0 25.8962C0 39.7034 11.1929 50.8962 25 50.8962H50V25.8962Z" fill="#0156FF"/>' +
        '<path d="M13.3516 15.7473C12.6405 15.7473 11.9585 16.0298 11.4557 16.5326C10.9529 17.0354 10.6704 17.7174 10.6704 18.4285V33.1749H13.3516C13.3516 34.2415 13.7753 35.2645 14.5295 36.0187C15.2837 36.7729 16.3067 37.1966 17.3733 37.1966C18.44 37.1966 19.4629 36.7729 20.2171 36.0187C20.9714 35.2645 21.3951 34.2415 21.3951 33.1749H29.4386C29.4386 34.2415 29.8623 35.2645 30.6165 36.0187C31.3707 36.7729 32.3937 37.1966 33.4603 37.1966C34.527 37.1966 35.5499 36.7729 36.3041 36.0187C37.0584 35.2645 37.4821 34.2415 37.4821 33.1749H40.1632V26.472L36.1415 21.1096H32.1197V15.7473H13.3516ZM32.1197 23.1205H35.4712L38.1122 26.472H32.1197V23.1205ZM17.3733 31.164C17.9066 31.164 18.4181 31.3759 18.7952 31.753C19.1723 32.1301 19.3842 32.6416 19.3842 33.1749C19.3842 33.7082 19.1723 34.2197 18.7952 34.5968C18.4181 34.9739 17.9066 35.1858 17.3733 35.1858C16.84 35.1858 16.3285 34.9739 15.9514 34.5968C15.5743 34.2197 15.3625 33.7082 15.3625 33.1749C15.3625 32.6416 15.5743 32.1301 15.9514 31.753C16.3285 31.3759 16.84 31.164 17.3733 31.164ZM33.4603 31.164C33.9936 31.164 34.5051 31.3759 34.8822 31.753C35.2593 32.1301 35.4712 32.6416 35.4712 33.1749C35.4712 33.7082 35.2593 34.2197 34.8822 34.5968C34.5051 34.9739 33.9936 35.1858 33.4603 35.1858C32.927 35.1858 32.4155 34.9739 32.0384 34.5968C31.6613 34.2197 31.4495 33.7082 31.4495 33.1749C31.4495 32.6416 31.6613 32.1301 32.0384 31.753C32.4155 31.3759 32.927 31.164 33.4603 31.164Z" fill="white"/>' +
        '</svg>'
    },
]

export default aboutUsData