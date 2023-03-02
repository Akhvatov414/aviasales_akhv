import PropTypes from 'prop-types';

import LoaderGif from '../assets/images/loader.gif';

import style from './index.module.scss';

function Loader({ isLoading }) {
  const loader =
    isLoading === 'loading' ? (
      <div className={style.loader}>
        <img src={LoaderGif} alt="Loader" />
      </div>
    ) : null;

  return <div>{loader}</div>;
}

Loader.propTypes = {
  isLoading: PropTypes.string.isRequired,
};

export default Loader;
