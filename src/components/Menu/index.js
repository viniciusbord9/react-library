import styled from 'styled-components';
import { Link } from 'react-router-dom';

const menuItems = [
    {title: 'Categories', link: '/categories'}, 
    {title: 'Favorites', link: '/favorites'}, 
    {title:'Outlet', link: '/outlet'}
];

const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 60%;
`;

const MenuItemContainer = styled.li`
    padding: 0 5%;
`

function Menu() {
    return (
        <MenuContainer>
           {menuItems.map((menuItem, index) => 
            <MenuItemContainer key={index}>
                <Link to={menuItem.link} >{menuItem.title}</Link>
            </MenuItemContainer>
           )}
        </MenuContainer>
    )
}

export default Menu;