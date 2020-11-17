import React, { useState } from 'react';
import './SideMenu.css';

interface ISideMenuProps {
    visible: boolean,
    onMenuClick?: (src: string) => void
}

interface ISideMenuElement {
    title: string,
    src: string
}

const SideMenuElementList: ISideMenuElement[] = [
    { title: "1차시 2020-10-11 [오전반]", src: "https://www.youtube.com/embed/gB1Y2J2vC2E"},
    { title: "1차시 2020-10-11 [오후반]", src: "https://www.youtube.com/embed/p5q8_7KL9aY"},
    { title: "2차시 2020-10-18 [오전반]", src: "https://www.youtube.com/embed/EhrWQKdeiD8"},
    { title: "2차시 2020-10-18 [오후반]", src: "https://www.youtube.com/embed/eeFGKmHLdGI"},
];

const SideMenu: React.FC<ISideMenuProps> = (props: ISideMenuProps) => {
    const [selectedItem, setselectedItem] = useState<number>(-1);

    const urlFactors: string[] = window.location.href.split('/');
    return (
        <div className="lecture-movie-side-menu" style={props.visible ? {} : { display: "none" }}>
            {SideMenuElementList.map((value: ISideMenuElement, index: number) => {
                return (
                    <div className={selectedItem === index ? "lecture-movie-side-menu-element-selected" : "lecture-movie-side-menu-element"}
                        key={index} onClick={() => {
                            setselectedItem(index);
                            if (props.onMenuClick) {
                                props.onMenuClick(value.src);
                            }
                        }}>
                        <img src={urlFactors[0] + "//" + urlFactors[2] + "/image/optimized/dronia-edu/page-dronia-12.svg"} alt="Movie Icon" />
                        <div className="lecture-movie-side-menu-element-title">{value.title}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default SideMenu;