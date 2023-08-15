import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LogoContainer = styled.div`
    flex-basis: 10%;
`

function Logo() {
    return (
        <LogoContainer>
            <Link to="/">
                <img src={logo} alt='Library' />
                <p>Library</p>
            </Link>
        </LogoContainer>
    )
}

export default Logo;