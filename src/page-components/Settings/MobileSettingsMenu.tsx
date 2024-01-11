import { Dispatch, Fragment, SetStateAction, useState } from "react"
import { FaCogs, FaFile, FaHeadphones, FaQuestion, FaUser, FaWallet, FaChevronUp, FaChevronDown } from "react-icons/fa";

interface MobileSettingsMenuProps {
    setCurrentTab: Dispatch<SetStateAction<string>>;
    setToggled: Dispatch<SetStateAction<boolean>>;
    setSubTab: Dispatch<SetStateAction<string>>;
}

const menuitem = [
    { menu: "My Profile", hasSub: false, icon: <FaUser size={14} /> },
    { menu: "My Account", hasSub: false, icon: <FaWallet size={14} /> },
    { menu: "Security Settings", hasSub: true, icon: <FaCogs size={14} />, sub: ["Change Login Password", "Change Transaction PIN", "Security Questions"] },
    { menu: "Contact Us", hasSub: false, icon: <FaHeadphones size={14} /> },
    { menu: "FAQ", hasSub: false, icon: <FaQuestion size={14} /> },
    { menu: "Terms of Use", hasSub: false, icon: <FaFile size={14} /> },
]

const MobileSettingsMenu = ({ setCurrentTab, setToggled, setSubTab }: MobileSettingsMenuProps) => {


    const [openDropDown, setOpenDropDown] = useState(false);
    const menuClick = (menu: string) => {
        setCurrentTab(menu);
        setToggled(true);
    }

    const subMenuClick = (menu: string, submenu: string) => {
        setCurrentTab(menu);
        setSubTab(submenu);
        setToggled(true);
    }

    return (
        <div className="py-2 mb-4 mt-2">
            <ul className="pl-4">
                {menuitem.map((item, i) => {
                    return item.hasSub ? (
                        <div className="mb-5" key={i}>
                            <li style={{ fontSize: "1.13em" }} className="d-flex align-items-center text-secondary-blue" onClick={() => setOpenDropDown(!openDropDown)}>
                                <div className="mr-3">{item.icon}</div>
                                <div className="mr-2">{item.menu}</div>
                                {openDropDown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                            </li >
                            <ul style={{ overflow: "hidden" }} className={`${openDropDown ? "h-auto" : "h-0"}`}>
                                {item.sub.map((sub, index) => {
                                    return <li
                                        style={{ listStyle: "none", fontSize: "0.88em" }}
                                        className="mt-3 text-primary-blue"
                                        key={index}
                                        onClick={() => subMenuClick(item.menu, sub)}
                                    >
                                        {sub}
                                    </li>
                                })}
                            </ul>
                        </div >
                    ) : (
                        <li key={i} style={{ fontSize: "1.13em" }} className="d-flex align-items-center text-secondary-blue mb-5" onClick={() => menuClick(item.menu)}>
                            <div className="mr-3">{item.icon}</div>
                            <div > {item.menu}</div >
                        </li >
                    )
                })}
            </ul >
        </div >
    )
}

export default MobileSettingsMenu;
