import React from "react";
import styled from 'styled-components';
import gitImg from '../../assets/gitHubCard/gitHub.jpeg'

const StyledCard = styled.div `
    
    .cardGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
        margin-top: 120px;
    }
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #272B33;
        width: 236px;
        height: 372px;
        box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);   
        margin: 30px 43px;
        padding: 15px;
        float: none;
        cursor: pointer;
    }      

    .card h2, p {
        font-size: 0.8em;
        font-weight: lighter;
        margin: 10px;              
    }

    img {
        border-radius: 50%;
        max-width: 200px;
        min-height: 200px;
        padding-bottom: 10px;
    }

    .repositorio a {
        text-decoration: none;
        font-size: 0.9em;
        margin: 10px;
    }
`;

export const WelcomeCard = () => {
    return (
        <StyledCard>
            <div className="cardGroup">
                <div className="card">
                    <div className="cardBody">
                        <img src={gitImg} alt="Foto do GitHub - Kaio" />
                        <h2 className="cardTitle">
                            Desenvolvido por Kaio Henrik
                        </h2>
                        
                        <h3 className="repositorio">
                            <a href="https://github.com/kaiohenrikk/desafios-calindra">Repositório :)</a>
                        </h3>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
}