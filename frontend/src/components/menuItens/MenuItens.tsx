import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { IheaderMenuItens } from '../../utils/MenuHeaderItens';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import styled from "styled-components";

const SubItenDropdown = styled.div`
transition: max-height 0.5s ease-in-out;
`;

export const MenuItens = ({ text, icon, href, sub }: IheaderMenuItens) => {
    const [dropdown, setDropdown] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState(false);

    const LGmatches = useMediaQuery('(min-width:1024px)');

    if (sub) {
        return (
            <>
                <button onClick={() => {
                    setDropdown(!dropdown);
                    setDropdownIcon(!dropdownIcon);
                }}
                    className={"w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between px-8"}>
                    <div style={{ width: LGmatches ? "24%" : "100%" }} className="h-full flex">
                        {icon}
                    </div>

                    <div style={{ width: "70%" }} className="h-full hidden lg:flex">
                        <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                            {text}
                        </p>
                    </div>

                    <div style={{ width: "6%" }} className="h-full hidden lg:flex">
                        <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                            <ArrowDropDownIcon className={ dropdownIcon ? "rotate-180 transition-transform self-center" : "transition-transform self-center"} sx={{ color: "#C9D1D9" }} />
                        </p>
                    </div>
                </button>
                <SubItenDropdown className={dropdown ? "max-h-96 flex flex-col" : "max-h-0"}>

                    {sub.map((subItem, id) => {
                        return (
                            <NavLink key={`${id}_subMenu`} to={subItem.href} className={"w-full flex flex-row h-14 border-collapse bg-containerColor hover:bg-primaryColorHovered justify-between px-8"}>

                                <div style={{ width: LGmatches ? "24%" : "100%" }} className="h-full flex">
                                    {!LGmatches ? subItem.icon : ""}
                                </div>

                                <div style={{ width: "70%" }} className="h-full hidden lg:flex">
                                    <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                                        {subItem.text}
                                    </p>
                                </div>

                                <div style={{ width: "6%" }} className="h-full hidden lg:flex">

                                </div>
                            </NavLink>
                        )
                    })}
                </SubItenDropdown>
            </>
        )
    }
    else {
        return (
            <NavLink to={href} className={(nav) => nav.isActive ? "w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between px-8" : "w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between px-8"}>

                <div style={{ width: LGmatches ? "24%" : "100%" }} className="h-full flex">
                    {icon}
                </div>

                <div style={{ width: "70%" }} className="h-full hidden lg:flex">
                    <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                        {text}
                    </p>
                </div>

                <div style={{ width: "6%" }} className="h-full hidden lg:flex">

                </div>
            </NavLink>
        )
    }

}