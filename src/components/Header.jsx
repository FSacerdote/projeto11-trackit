import styled from "styled-components";
import profile from "../assets/profile.png";
import logo from "../assets/trackIt.png";
import { useContext } from "react";
import { Contexto } from "../components/Contexto";

export default function Header(){

    const {user} = useContext(Contexto);

    return(
        <Top>
            <img src={logo} alt="logo" />
            <ProfilePicture src={user.image} alt="profilePicture" />
        </Top>
    );
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position:fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const ProfilePicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 30px;
`;