import React from 'react';
import { PopularReadCard } from './PopularReadCard';
import {
  StyledPopularReadsCardWrapper,
  StyledPopularReadsContainer,
} from './style/PopularReads';

export const PopularReads = () => {
  return (
    <StyledPopularReadsContainer>
      <h2>Popular Reads</h2>
      <StyledPopularReadsCardWrapper>
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-4.png' alt='' />}
          header='Things suck with consistence practice'
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-5.png' alt='' />}
          header='How to be bad ass developer in two month'
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-6.png' alt='' />}
          header='Using double diamond method in UX process'
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-7.png' alt='' />}
          header='How to develop a good reading habit'
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-8.png' alt='' />}
          header='How to be bad ass developer in two month '
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
        <PopularReadCard
          title='Writer queen'
          pic={<img src='/svgs/img-9.png' alt='' />}
          header='web3 and the metaverse'
          description='The practice roadmap for techies in 21st century'
          time='5 min Read'
          date='July 28'
        />
      </StyledPopularReadsCardWrapper>
    </StyledPopularReadsContainer>
  );
};
