import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <Nav className="Nav"><h3>Navigation</h3>
            <NavLinks>
                <li><StyledLink to="/Test1">Test1</StyledLink></li>
                <li><StyledLink to="/Test2">Test2</StyledLink></li>
                <li><StyledLink to="/Test3">Test3</StyledLink></li>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><HashLink smooth to={"#Test1"}>Hash1</HashLink></li>
                <li><HashLink smooth to={'#Test2'}>Hash2</HashLink></li>
                <li><HashLink smooth to={'#Test3'}>Hash3</HashLink></li>
            </NavLinks>
        </Nav>
        </Wrapper>
    );
}

export default Navigation;