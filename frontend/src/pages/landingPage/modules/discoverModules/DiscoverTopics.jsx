import React from 'react';
import { StyledDiscoverTopicsContainer } from './style/DiscoverTopics';

export const DiscoverTopics = ({ animation }) => {
  return (
    <StyledDiscoverTopicsContainer animate={animation}>
      <li>Comic</li>
      <li>Non-fiction</li>
      <li>Fiction</li>
      <li>Sci-fi</li>
      <li>Romance</li>
      <li>Memoir</li>
      <li>Thriller</li>
      <li>History</li>
      <li>Adventure</li>
      <li>Poetry</li>
      <li>Horror</li>
      <li>Crime</li>
      <li>Fantasy</li>
      <li>Culture</li>
    </StyledDiscoverTopicsContainer>
  );
};
