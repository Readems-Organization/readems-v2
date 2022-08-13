/* eslint-disable no-tabs */
import React from 'react';

export const Search = ({ width, height }) => (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width={width}
    height={height}
    enableBackground='new 0 0 95.098 95.098'
    xmlSpace='preserve'
    viewBox='0 0 24 24'
  >
    <path d='M21.53 20.47l-3.66-3.66A8.98 8.98 0 0020 11a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z' />
  </svg>
);

Search.defaultProps = {
  // fill: '#fff',
  width: '60',
  height: '60',
};

export default Search;
