import useMediaQuery from '@mui/material/useMediaQuery'
import { NavLink, useLocation } from 'react-router-dom'
import { IheaderMenuItens } from '../../utils/MenuHeaderItens'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useState } from 'react'
import styled from "styled-components"
import React from 'react'

const SubItenDropdown = styled.div`
transition: max-height 0.3s ease-in-out
`;

const MenuItensNoMemorized = ({ text, icon, href, sub }: IheaderMenuItens) => {
    const params = useLocation()
    const activeA = params.pathname === href ? true : false

    const [dropdown, setDropdown] = useState(false)
    const [dropdownIcon, setDropdownIcon] = useState(false)

    const LGmatches = useMediaQuery('(min-width:1024px)')

    return (
        <div className='min-h-[20px] flex flex-row justify-between'>
            <span>
                {icon("white")}
            </span>
            <div>
                {text}
            </div>
        </div>
    );

}

export const MenuItens = React.memo(MenuItensNoMemorized);