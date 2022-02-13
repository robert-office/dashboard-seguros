import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { IheaderMenuItens } from '../../utils/MenuHeaderItens';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
                {LGmatches ? (
                    <>
                        <button onClick={() => {
                            setDropdown(!dropdown);
                            setDropdownIcon(!dropdownIcon);
                        }}
                            className={"w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between px-8"}>
                            <div style={{ width: "24%"  }} className="h-full flex">
                                {icon}
                            </div>

                            <div style={{ width: "70%" }} className="h-full flex">
                                <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                                    {text}
                                </p>
                            </div>

                            <div style={{ width: "6%" }} className="h-full flex">
                                <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                                    <ArrowDropDownIcon className={dropdownIcon ? "rotate-180 transition-transform self-center" : "transition-transform self-center"} sx={{ color: "#FF2D20" }} />
                                </p>
                            </div>
                        </button>
                        <SubItenDropdown className={dropdown ? "max-h-96 flex flex-col" : "max-h-0"}>

                            {sub.map((subItem, id) => {
                                return (
                                    <NavLink key={`${id}_subMenu`} to={subItem.href} className={"w-full flex flex-row h-14 border-collapse bg-containerColor hover:bg-primaryColorHovered justify-between px-8"}>

                                        <div style={{ width: "24%" }} className="h-full flex">
                                            <FiberManualRecordIcon className="self-center" sx={{ color: "#FF2D20" }}/>
                                        </div>

                                        <div style={{ width: "70%" }} className="h-full flex">
                                            <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                                                {subItem.text}
                                            </p>
                                        </div>

                                        <div style={{ width: "6%" }} className="h-full flex">

                                        </div>
                                    </NavLink>
                                )
                            })}
                        </SubItenDropdown>
                    </>
                ) : (
                    <>
                        <button onClick={() => {
                            setDropdown(!dropdown);
                            setDropdownIcon(!dropdownIcon);
                        }}
                            className={"w-full flex flex-col space-y-3 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-center px-4 py-2"}>
                            <div style={{ width: "100%" }} className="flex justify-center">
                                {icon}
                            </div>

                            <div style={{ width: "100%" }}>
                                <p className="text-fontColor text-center font-sans font-medium text-[8px] self-center">
                                    {text}
                                </p>
                            </div>

                            <div style={{ width: "100%" }}>
                                <p className="text-fontColor text-center font-sans font-medium text-[8px] self-center">
                                    <ArrowDropDownIcon className={dropdownIcon ? "rotate-180 transition-transform self-center" : "transition-transform self-center"} sx={{ color: "#FF2D20" }} />
                                </p>
                            </div>
                        </button>
                        <SubItenDropdown className={dropdown ? "max-h-96 flex flex-col" : "max-h-0"}>

                            {sub.map((subItem, id) => {
                                return (
                                    <NavLink key={`${id}_subMenu`} to={subItem.href} className={"w-full flex flex-col border-collapse bg-containerColor hover:bg-primaryColorHovered justify-center space-y-3 px-4 py-2"}>

                                        <div style={{ width: "100%" }} className="flex justify-center">
                                            <FiberManualRecordIcon className="self-center" sx={{ color: "#FF2D20" }}/>
                                        </div>

                                        <div style={{ width: "100%" }}>
                                            <p className="text-fontColor text-center font-sans font-medium text-[8px] self-center">
                                                {subItem.text}
                                            </p>
                                        </div>

                                        <div style={{ width: "100%" }}>

                                        </div>
                                    </NavLink>
                                )
                            })}
                        </SubItenDropdown>
                    </>
                )}
            </>
        )
    }
    else {
        return (
            <NavLink to={href} className={"w-full flex flex-col lg:flex-row lg:h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between lg:px-8 px-4 lg:py-0  py-2 space-y-3"}>

                <div style={{ width: LGmatches ? "24%" : "100%" }} className="flex lg:justify-start justify-center">
                    {icon}
                </div>

                <div style={{ width: LGmatches ? "70%" : "100%" }}>
                    <p className="text-fontColor lg:text-left text-center font-sans font-medium lg:text-base text-[8px] self-center">
                        {text}
                    </p>
                </div>

                <div style={{ width: LGmatches ? "6%" : "100%" }}>

                </div>
            </NavLink>
        )
    }

}