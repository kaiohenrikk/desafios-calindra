import React from "react";
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg';


const StyledSearchBar = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 0px 15px 0px 0px;
        box-shadow: 4px 10px 5px rgba(0, 0, 0, 0.1);
    }

    input {
        border: none;
        height: 40px;
        width: 450px;
        padding-left: 5px;
        user-select: none;
        border-radius: 10px;     
        font-size: 1em;   
    }

    input:focus {
        outline: none;
        box-shadow: none;
    }

    button {
        background-color: transparent;
        border: none;
        height: 38px;
        padding-left: 10px;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 10px;
    }    
   
    @media only screen and (max-width: 745px) {

        input {
            height: 20px;
            width: 290px;
        }
    }    

    @media only screen and (max-width: 545px) {

        input {
            height: 20px;
            width: 100px;
        }
    } 
`;

export const SearchBar = (props: any) => {

    return (         
        
        <StyledSearchBar>
            <div className="box">               

                <input 
                    type="text" 
                    placeholder="busque aqui seu produto"
                    onChange={props.onChange}
                />               
                
                <button onClick={props.onClick}>
                    <img src={SearchIcon} alt="Search Icon" />               
                </button>
            </div>  
        </StyledSearchBar>
    );
}