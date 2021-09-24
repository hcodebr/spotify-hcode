import styled from "styled-components";

const FooterComponent = styled.footer`
    height: 95px;
    width: 100vw;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        color: #fff;
        margin: 0;
    }
`;

// export default Footer;

export default function Footer() {

    return (
        <FooterComponent>
            <h2>Desenvolvido por Hcode Treinamentos</h2>
        </FooterComponent>
    );

}