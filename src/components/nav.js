import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const NavItem = (props) => {
    return (
        <NavItemWrapper active={props.active} whileTap={{ scale: .9 }}>
            {props.title}
        </NavItemWrapper>
    )
}

export const Nav = (props) => {
    return (
        <NavWrapper
        >
            <Logo><h3>Control</h3></Logo>
            <NavItems>
                <NavItem title="Dashboard" />
                <Divider />
                <NavLabel>Events</NavLabel>
                <NavItem title="Events" />
                <NavItem title="Scheduling" />
                <Divider />
                <NavLabel>People</NavLabel>
                <NavItem title="Social Media" />
                <NavItem title="Sites & Users" />
                <NavItem title="Contacts" />
                <NavItem active title="Organizations" />
                <Divider />
                <NavLabel>Other</NavLabel>
                <NavItem title="Encoder Profiles" />
                <NavItem title="Search Contacts" />
                <NavItem title="HardWare" />
            </NavItems>
        </NavWrapper>
    )
}

const NavWrapper = styled(motion.div) `
    background: #F4F5F6;
    position: relative;
    width: 216px;
    flex-shrink: 0;

`

const NavItems = styled.ul`
padding: 16px 16px 32px 16px;
    list-style: none;
`

const NavItemWrapper = styled(motion.li) `
    padding: 8px;
    padding-left: 24px;
    margin-top: 2px;
    border-radius: 24px;
    white-space: nowrap;

    ${props => props.active && css`
        background: #1A61CB;
        box-shadow: 0px 0px 0px 5px rgba(44, 99, 99, 0.11);
        color: #fff;

        :hover {
            background: #1A61CB !important;
            box-shadow: 0px 0px 0px 5px rgba(44, 99, 99, 0.11);
            color: #fff;
        }
  `}

    :hover {
        background: #E1E8F3;
    }
    
`

const Logo = styled.div`
    height: 68px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    padding-left: 24px;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    margin-top: 12px;
    margin-bottom: 12px;
`

const NavLabel = styled.h5`
    opacity: .6;
    margin: 5px;
    padding-left: 16px;
`
