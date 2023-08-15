import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Icons from '../../components/Icons';
import Search from '../../components/Search';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #CCC
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <Icons/>
        </HeaderContainer>
    )
}

export default Header;