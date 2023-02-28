import React from 'react';
import { Alert } from 'antd';
import PropTypes from 'prop-types';

import style from './index.module.scss';

const Alerts = ({ errorLoading, ticketList }) => {
  const errorMessage =
    errorLoading === 'error' ? (
      <Alert
        className={style.error}
        type="error"
        message={
          <>
            <h2>Ошибка!!!</h2>
            <span>Проверьте ваше интернет соединение</span>
          </>
        }
      />
    ) : null;

  const noData =
    ticketList === 0 && errorLoading !== 'loading' ? (
      <Alert
        className={style.warning}
        type="warning"
        message={
          <>
            <h2>По вашему запросу ничего не найдено</h2>
            <span>Уточните, пожалуйста, критерии поиска</span>
          </>
        }
      />
    ) : null;

  return (
    <div className={style.alertWrapper}>
      {errorMessage}
      {noData}
    </div>
  );
};

Alerts.propTypes = {
  errorLoading: PropTypes.string,
  ticketList: PropTypes.number,
};

export default Alerts;
