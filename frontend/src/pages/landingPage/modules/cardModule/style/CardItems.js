import styled, { css } from 'styled-components';

export const StyledCardItemsContainer = styled.div`
  width: 424px;
  height: 553px;
  padding: 19px 39px;
  text-align: center;
  color: #fff;

  img {
    width: 80px;
    margin-bottom: 50px;
  }

  h4 {
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 400px;
    margin-bottom: 50px;
  }

  p {
    font-size: 1.9rem;
    line-height: 2.3rem;
    font-weight: 400px;
 }

 ${(props) =>
   props.firstCard &&
   css`
     background-color: #7280ff;

     h4 {
       font-size: 3.8rem;
       line-height: 4rem;
       margin-bottom: 65px;
     }
   `}

  ${(props) =>
    props.secondCard &&
    css`
      background-color: #f7c8d0;
    `}

  ${(props) =>
    props.thirdCard &&
    css`
      background-color: #747477;

      img {
        width: 120px;
        margin-bottom: 65px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
   width: 100%;
   height: auto;

   h4 {
    font-weight: 400px;
  }

   p {
    font-weight: 700px;
  }
  }

   @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    img {
    width: 80px;
    margin-bottom: 50px;
  }
  }
 `;
