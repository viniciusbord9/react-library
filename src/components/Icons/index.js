import styled from 'styled-components';
import cart from '../../assets/images/sacola.svg';
import profile from '../../assets/images/perfil.svg';

const IconsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 20%;
`

const IconContainer = styled.li`
    flex: column;
    list-style: none;
    flex-basis: 50%;

    a {
        color: transparent;
        display: block;
        height: 35px;
        padding: 0 5px;
    }
    
    a.cart {
        background: url(${cart}) 0 0 no-repeat;
    }
    
    a.profile {
        background: url(${profile}) 0 0 no-repeat;
    }
`;


const menuIcons = [{action: '#', className: 'cart', label: 'Cart'}, {action: '#', className: 'profile', label: 'Profile'}]

function Icons() {
    return (
        <IconsContainer>
        {menuIcons.map((menuIcon, index) => 
            <IconContainer key={index}>
                <a className={menuIcon.className} href={menuIcon.action}>{menuIcon.label}</a>
            </IconContainer>
        )}
        </IconsContainer>
    )
}

export default Icons;