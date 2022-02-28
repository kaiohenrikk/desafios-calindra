import React from "react";
import styled from 'styled-components';
import { getImg } from "../../models/ImgProductsMapping";
import { getPrices } from "../../models/PricesProductsMapping";
import GoldenStar from '../../assets/icons/golden-star.png';
import EmptyStar from '../../assets/icons/empty-star.png';

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
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .score img {
        width: 8%;
        height: 8%;
    }

    img {
        max-width: 200px;
        height: 200px;
    }
`;


export const Card = (props: any) => {
    
    return (
        <StyledCard>
            <div className="cardGroup">
                <div className="card">
                    <div className="cardBody">
                        <img src={getImg(props.id)} alt={props.title} />
                        <h2 className="cardTitle">
                            {props.title}
                        </h2>
                        <div className="score">
                            <img src={GoldenStar} alt= 'Ratings' /> ({props.clicks})
                        </div>
                        <h3 className="cardPrice">
                            R${getPrices(props.prices)}
                        </h3>
                        <p>
                            em {props.times}x no cartão de crédito
                        </p>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
}