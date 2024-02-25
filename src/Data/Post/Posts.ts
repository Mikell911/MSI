import Img from './img/1.jpg'
import Img2 from './img/2.jpg'
import Img3 from './img/3.jpg'
import Img4 from './img/4.jpg'
import Img5 from './img/5.jpg'
import Img6 from './img/6.jpg'
import Img7 from './img/7.jpg'
import Img8 from './img/8.jpg'
import Img9 from './img/9.jpg'
export interface Post {
    id: number;
    img: string;
    nameImg: string;
    description: string;
    date: string;
}

const Posts: Post[] = [
    {
        id: 1,
        img: Img,
        nameImg: "laptop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 2,
        img: Img2,
        nameImg: "desktop",
        description: "As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...",
        date: "01.09.2020",
    },
    {
        id: 3,
        img: Img3,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 4,
        img: Img4,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 5,
        img: Img5,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 6,
        img: Img6,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 7,
        img: Img7,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 8,
        img: Img8,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },
    {
        id: 9,
        img: Img9,
        nameImg: "desktop",
        description: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: "01.09.2020",
    },

]

export default Posts;
