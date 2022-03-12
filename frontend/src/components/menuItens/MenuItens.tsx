import useMediaQuery from '@mui/material/useMediaQuery'
import { NavLink, useLocation } from 'react-router-dom'
import { IheaderMenuItens } from '../../utils/MenuHeaderItens'
import { useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import './styles.css';

export const MenuListItens = ({ text, icon, href, sub, isSub }: IheaderMenuItens) => {
    /// se é o link ativo
    const params = useLocation()
    const activeA = params.pathname === href

    /// responsividade
    const LGmatches = useMediaQuery('(min-width:1024px)')

    /// dropdowns gerenciador
    const [open, setOpen] = useState(false);

    /// handle do dropdow
    const handleClick = () => {
        setOpen(!open);
    };

    let color = activeA ? '#FF2D20' : '#C9D1D9';

    return (
        <>
            <NavLink to={href}>
                <ListItemButton className={activeA && !isSub ? 'listItemAtiva' : ''} sx={{
                    pl: '32px',
                }}
                    onClick={handleClick}>
                    <ListItemIcon>
                        {icon(color)}
                    </ListItemIcon>

                     <ListItemText sx={{ color: activeA ? '#FF2D20' : '#C9D1D9', }} primary={text} />

                    {
                        sub ? (
                            open ? <ExpandLess sx={{ color: '#FF2D20' }} /> : <ExpandMore sx={{ color: '#C9D1D9' }} />
                        ) : (
                            <></>
                        )
                    }
                </ListItemButton>
            </NavLink>

            <Collapse in={open} timeout="auto" unmountOnExit sx={{
                backgroundColor: '#1d1f2b'
            }}>
                <List component="div" disablePadding>
                    {sub?.map((subItem, id) => {
                        return <MenuListItens key={id} text={subItem.text} sub={subItem.sub} href={subItem.href} isSub={true} icon={() => <LabelImportantIcon sx={{ color: activeA ? '#FF2D20' : '#C9D1D9', width: '16px' }} />} />
                    })}
                </List>
            </Collapse>
        </>
    );
}