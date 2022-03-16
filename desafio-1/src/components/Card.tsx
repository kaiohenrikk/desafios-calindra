import React from "react";
import styled from 'styled-components';
import GoldenStar from '../assets/icons/golden-star.png';
import EmptyStar from '../assets/icons/empty-star.png';
import AmericanasCard from '../assets/logos/americanas-logo.png'

const StyledCard = styled.div`
    
    .cardGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 9px;
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
        font-size: 80%;
    }

    .score img {
        width: 8%;
        height: 8%;
    }

    img {
        margin-left: 5px;
        width: 200px;
        height: 200px;
    }
`;


export const Card = (props: any) => {
    const defaultStar = [EmptyStar, EmptyStar, EmptyStar, EmptyStar, EmptyStar];
    return (
        <StyledCard>
            <div className="cardGroup">
                <div
                    className="card"
                    key={props.id}
                >
                    <div className="cardBody">
                        <img src={AmericanasCard} alt={props.title} />
                        <h2 className="cardTitle">
                            {props.title}
                        </h2>
                        <div className="score">
                            {defaultStar.map((star, key) => {
                                if (key < props.score[0]) {
                                    return <img key={key} src={GoldenStar} alt='Ratings' />
                                }
                                return <img key={key} src={star} alt='Ratings' />
                            })}
                            ({props.clicks})
                        </div>
                        <h3 className="cardScore">
                            Score: {props.rate}
                        </h3>
                        <p>
                            visite o site das Lojas Americanas para mais informações (:
                        </p>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
}