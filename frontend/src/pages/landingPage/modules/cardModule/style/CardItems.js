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
          font-size: 40px;
          line-height: 48px;
          font-weight: 400px;
          margin-bottom: 50px;
         }

          p {
          font-size: 19px;
          line-height: 23px;
          font-weight: 400px;
         }

         ${(props) =>
           props.firstCard &&
           css`
             background-color: #7280ff;
             h4 {
               font-size: 38px;
               line-height: 40px;
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
    /* display: none; */

      h4 {
          font-size: 30px;
          line-height: 38px;
          font-weight: 400px;
          /* margin-bottom: 50px; */
         }

          p {
          font-size: 16px;
          line-height: 20px;
          /* font-weight: 400px; */
         }
     ${(props) =>
       props.firstCard &&
       css`
         background-color: #7280ff;
         h4 {
           font-size: 32px;
           line-height: 30px;
           /* margin-bottom: 65px; */
         }
       `}
  }

              @media (max-width: ${({ theme }) => theme.mobile.size320}) {
    /* display: none; */

      h4 {
          font-size: 25px;
          line-height: 30px;
          /* font-weight: 400px; */
          /* margin-bottom: 50px; */
         }

          p {
          font-size: 16px;
          line-height: 20px;
          /* font-weight: 400px; */
         }
     ${(props) =>
       props.firstCard &&
       css`
         background-color: #7280ff;
         h4 {
           font-size: 25px;
           line-height: 30px;
           /* margin-bottom: 65px; */
         }
       `}
  }
       `;
