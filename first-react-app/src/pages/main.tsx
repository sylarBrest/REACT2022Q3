import React from 'react';
import Title from 'components/Main/Title';
import SearchBar from 'components/Main/SearchBar';

const MainPage = () => {
  return (
    <div className="container">
      <Title pageTitle="Main page" />
      <SearchBar />
    </div>
  );
};

export default MainPage;
