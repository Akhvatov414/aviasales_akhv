import React from 'react';

import LoaderGif from '../assets/images/loader.gif';

import style from './index.module.scss';

const Loader = ({ isLoading }) => {
  const loader =
    isLoading === 'loading' ? (
      <div className={style.loader}>
        <img src={LoaderGif} />
      </div>
    ) : null;

  return <>{loader}</>;
};

export default Loader;
