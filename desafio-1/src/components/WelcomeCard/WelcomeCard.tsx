import React from "react";
import styled from 'styled-components';
import gitImg from '../../assets/gitHubCard/gitHub.jpeg'

const StyledCard = styled.div `
    
    .cardGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
    }
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: white;
        width: 236px;
        height: 372px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);   
        margin: 30px 43px;
        padding: 15px;
        float: none;
        cursor: pointer;
    }      

    .card h2, p {
        font-size: 71%;
        font-weight: lighter;
        margin-bottom: 20px;              
    }

    .score {
        margin-bottom: 20px;
    }

    img {
        max-width: 200px;
        min-height: 200px;
    }
`;

export const WelcomeCard = (props: any) => {
    return (
        <StyledCard>
            <div className="cardGroup">
                <div className="card">
                    <div className="cardBody">
                        <img src={gitImg} alt="Foto do GitHub - Kaio" />
                        <h2 className="cardTitle">
                            Sup, guys! Esse desafio foi realizado por mim :)
                        </h2>
                        
                        <h3 className="repositorio">
                            <a href="#">Clica aqui pra ver o repositório!</a>
                        </h3>

                        <div className="socialMedia">

                        </div>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
}