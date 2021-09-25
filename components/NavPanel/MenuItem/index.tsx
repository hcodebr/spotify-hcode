import styled from 'styled-components';
import Add from "../../icons/Add";
import Favorite from "../../icons/Favorite";
import Home from "../../icons/Home";
import Library from "../../icons/Library";
import Podcast from "../../icons/Podcast";
import Search from "../../icons/Search";

const itens = [
    {
        id: 1,
        text: "Início",
        image: <Home />,
    },
    {
        id: 2,
        text: "Buscar",
        image: <Search />,
    },
    {
        id: 3,
        text: "Sua Biblioteca",
        image: <Library />,
    },
    {
        id: 4,
        text: "Criar playlist",
        image: <Add />,
    },
    {
        id: 5,
        text: "Músicas Curtidas",
        image: <Favorite />,
    },
    {
        id: 6,
        text: "Seus episódios",
        image: <Podcast />,
    },
];
const Wrap = styled.ul`
    list-style: none;
    > li {
        line-height: 40px;
        display: flex;
        align-items:center;
    }
    > li > svg {
        margin-right: 20px;
    }
    li:nth-child(3){
        margin-bottom: 30px;
    }

`
const MenuItem = ()=>{
    return <Wrap>
         {itens.map((item)=>(
             <li key={item.id}>
                 {item.image} {item.text}
             </li>
         ))}   
    </Wrap>
}

export default MenuItem;