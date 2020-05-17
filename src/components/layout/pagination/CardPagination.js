import React from 'react';
import { PageSelector } from './style';

export const CardPagination = (props) => {
  let { totalPages, selectedPage } = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPagesIndication = pages.map((page) => (
    <span onClick={selectedPage} key={page} id={page} className="pages"></span>
  ));

  return (
    <PageSelector>
      <div className="paginationDots">{renderPagesIndication}</div>
    </PageSelector>
  );
};
