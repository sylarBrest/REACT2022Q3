import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { fetchData } from 'redux/searchSlice';
import { querySelector, imageTypeSelector, pageSelector, perPageSelector } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import './App.css';

export default () => {
  const dispatch = useAppDispatch();

  const query = useAppSelector(querySelector);
  const imageType = useAppSelector(imageTypeSelector);
  const page = useAppSelector(pageSelector);
  const perPage = useAppSelector(perPageSelector);

  useEffect(() => {
    dispatch(fetchData({ query, imageType, page, perPage }));
  });

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
