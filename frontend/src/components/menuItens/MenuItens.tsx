import useMediaQuery from '@mui/material/useMediaQuery'
import { NavLink, useLocation } from 'react-router-dom'
import { IheaderMenuItens } from '../../utils/MenuHeaderItens'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useState } from 'react'
import styled from "styled-components"

const SubItenDropdown = styled.div`
transition: max-height 0.3s ease-in-out
`;

export const MenuItens = ({ text, icon, href, sub }: IheaderMenuItens) => {
    const params = useLocation()
    const activeA = params.pathname === href ? true : false

    const [dropdown, setDropdown] = useState(false)
    const [dropdownIcon, setDropdownIcon] = useState(false)

    const LGmatches = useMediaQuery('(min-width:1024px)')

    const colorClass = activeA ? "text-secundaryColor" : "text-fontColor"
    const colorHex = activeA ? "#FF2D20" : "#C9D1D9"

    const colorClassBG = activeA ? "bg-secundaryColor" : "bg-fontColor";

    if (sub) {
        return (

            <>
                {LGmatches ? (
                    <>
                        <button onClick={() => {
                            setDropdown(!dropdown);
                            setDropdownIcon(!dropdownIcon);
                        }}
                            className={"w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between pl-8"}>
                            <div style={{ width: "24%" }} className="h-full flex">
                                {icon}
                            </div>

                            <div style={{ width: "56%" }} className="h-full flex">
                                <p className={`${colorClass} text-left font-sans font-medium text-base self-center`}>
                                    {text}
                                </p>
                            </div>

                            <div style={{ width: "16%" }} className="relative h-full flex flex-row">
                                <p className="text-left font-sans font-medium text-base self-center">
                                    <ArrowDropDownIcon className={dropdownIcon ? "rotate-180 transition-transform self-center" : "transition-transform self-center"} sx={{ color: "#FF2D20" }} />
                                </p>
                            </div>

                            <span className={`relative h-full ${colorClassBG}`} style={{ width: "4%" }}></span>

                        </button>
                        <SubItenDropdown className={dropdown ? "max-h-96 flex flex-col" : "max-h-0"}>

                            {sub.map((subItem, id) => {
                                let active = params.pathname === subItem.href ? true : false

                                const colorClass = active ? "text-secundaryColor" : "text-fontColor"
                                const colorHex = active ? "#FF2D20" : "#C9D1D9"

                                return (
                                    <NavLink key={`${id}_subMenu`} to={subItem.href} className={"w-full flex flex-row h-14 border-collapse bg-containerColor hover:bg-primaryColorHovered justify-between px-8"}>

                                        <div style={{ width: "24%" }} className="h-full flex">
                                            <FiberManualRecordIcon className="self-center" sx={{ color: colorHex }} />
                                        </div>

                                        <div style={{ width: "70%" }} className="h-full flex">
                                            <p className={`${colorClass} text-left font-sans font-medium text-base self-center`}>
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

                                <span className='relative h-full bg-secundaryColor' style={{ width: "10px" }}></span>
                            </div>
                        </button>
                        <SubItenDropdown className={dropdown ? "max-h-96 flex flex-col" : "max-h-0"}>

                            {sub.map((subItem, id) => {
                                let active = params.pathname === subItem.href ? true : false

                                const colorClass = active ? "text-secundaryColor" : "text-fontColor"
                                const colorHex = active ? "#FF2D20" : "#C9D1D9"

                                return (
                                    <NavLink key={`${id}_subMenu`} to={subItem.href} className={"w-full flex flex-col border-collapse bg-containerColor hover:bg-primaryColorHovered justify-center space-y-3 px-4 py-2"}>

                                        <div style={{ width: "100%" }} className="flex justify-center">
                                            <FiberManualRecordIcon className="self-center" sx={{ color: colorHex }} />
                                        </div>

                                        <div style={{ width: "100%" }}>
                                            <p className={`${colorClass} text-center font-sans font-medium text-[8px] self-center`}>
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
            <NavLink to={href} className={"w-full flex lg:flex-row flex-col lg:h-14 h-auto border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between lg:pl-8 lg:space-y-0 space-y-3 py-2 lg:py-0 "}>

                <div style={{ width: LGmatches ? "24%" : "100%" }} className="flex lg:justify-start justify-center">
                    {icon}
                </div>

                <div style={{ width: LGmatches ? "56%" : "100%" }} className="h-full flex lg:justify-start justify-center">
                    <p className={`${colorClass} lg:text-left text-center font-sans font-medium lg:text-base text-[8px] self-center`}>
                        {text}
                    </p>
                </div>
                <div style={{ width: LGmatches ? "16%" : "100%" }}></div>

                {LGmatches ? (
                    <span className={`relative h-full ${colorClassBG}`} style={{ width: "4%" }}></span>
                ) : (
                    <></>
                )}
            </NavLink>
        )
    }

}