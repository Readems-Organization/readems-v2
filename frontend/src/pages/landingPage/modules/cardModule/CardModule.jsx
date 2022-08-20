import React from 'react';
// import coins from 'svgs/coins'
import { CardItems } from './CardItems';
import {
  StyledCardContainer,
  StyledCardModuleContainer,
} from './style/CardModule';
export const CardModule = () => {
  return (
    <StyledCardModuleContainer>
      <CardItems
        icon={<img src='/svgs/coins.svg' />}
        header='Monetize and share amazing content'
        description='We offer a platform where you can share amazing content and improve your creativity while getting paid.'
        firstCard
      />
      <CardItems
        icon={<img src='/svgs/team.svg' />}
        header='Build a community with like minds'
        description='Meet and interact with people who share the same interests as you through our online community. You can join for free.'
        secondCard
      />
      <CardItems
        icon={<img src='/svgs/Frame.svg' />}
        header='Get rewarded for reading'
        description='Track your reading habits in real-time with leaderboards, receive reward tokens and personalized scorecards for achievements and milestones.'
        thirdCard
      />
    </StyledCardModuleContainer>
  );
};
