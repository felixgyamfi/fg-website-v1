import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";


export const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
`;

export const Nav = styled.div`
    display: flex;
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;

    li {
        margin: 0 10px;
    }
`;

export const StyledLink = styled(Link)`

`;

function Navigation() {
    return (
        <Wrapper>
        <Nav><h3>Navigation</h3>
            <NavLinks>
                <li><AnchorLink smooth to={"#Test1"}>Hash1</AnchorLink></li>
                <li><AnchorLink smooth to={'#Test2'}>Hash2</AnchorLink></li>
                <li><AnchorLink smooth to={'#Test3'}>Hash3</AnchorLink></li>
            </NavLinks>
        </Nav>
        </Wrapper>
    );
}

export default Navigation;