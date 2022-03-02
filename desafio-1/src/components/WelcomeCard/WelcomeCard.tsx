import React from "react";
import styled from 'styled-components';
import gitImg from '../../assets/gitHubCard/gitHub.jpeg'
import gitIcon from '../../assets/icons/github.png';
import linkedInIcon from '../../assets/icons/linkedin.png'

const StyledCard = styled.div `
    
    .cardGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
        margin-top: 90px;
    }
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #272B33;
        width: 236px;
        height: 372px;
        box-shadow: 3px 3px 3px 2px rgba(144, 23, 104, 0.39);   
        margin: 30px 43px;
        padding: 15px;
        float: none;
    }      

    .card h2, p {
        font-size: 0.8em;
        font-weight: lighter;
        margin: 10px;              
    }

    #profilePic {
        border-radius: 50%;
        max-width: 200px;
        min-height: 200px;
        padding-bottom: 10px;
    }

    .repositorio {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 12px;
    }

    .repositorio a {
        text-decoration: none;
        font-size: 0.9em;
        margin: 10px;
    }

    #socialIconGitHub {
        width: 65px;
        height: 65px;
    }

    #socialIconLinkedIn {
        width: 50px;
        height: 50px;
    }

    @media only screen and (max-width: 600px) {
        .cardGroup {
            margin-top: 0;
            margin-bottom: 7px;
        }
    }
`;

export const WelcomeCard = () => {
    return (
        <StyledCard>
            <div className="cardGroup">
                <div className="card">
                    <div className="cardBody">
                        <img id='profilePic' src={gitImg} alt="Foto do GitHub - Kaio" />
                        <h2 className="cardTitle">
                            Desenvolvido por Kaio Henrik
                        </h2>
                        
                        <h3 className="repositorio">
                            <a href="https://github.com/kaiohenrikk/desafios-calindra" rel="noreferrer" target="_blank"><img id="socialIconGitHub" src={gitIcon} alt="Social Media Icon" /></a>
                            <a href="https://www.linkedin.com/in/kaiohenrikk/" rel="noreferrer" target="_blank"><img id="socialIconLinkedIn" src={linkedInIcon} alt="Social Media Icon" /></a>
                        </h3>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
}