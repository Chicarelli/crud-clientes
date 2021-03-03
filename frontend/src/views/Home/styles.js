import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

    background: #282828;
    width: 100%;
    min-height: 100vh;

   
`;

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    jutify-content: center;

    h1{
        padding: 10px;
        padding-top: 30px;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Alfa Slab One', cursive;
        font-size: 3rem;
        letter-spacing: .4rem;
    }

    span{
        position: relative;
        top: -15px;
        left: -5px;
        margin: auto;
        width: 350px;
        border-top: 7px solid black;
        border-radius: 10px;
    }

    @media screen and (max-width: 1000px){
        h1{
            letter-spacing: .2rem;
        }

        span{
            width: 300px;
        }
    }

    @media screen and (max-width: 400px){
        h1{
            letter-spacing: 0rem;
            font-size: 2.2rem;
        }

        span{
            width: 215px;
        }
    }

`;