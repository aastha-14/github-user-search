import React, {useContext} from 'react';
import AlertContext from '../Context/Alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return(
    alert !== null && (
      <div className="ui negative message">
        <i className="close icon"></i>
        {alert.msg}
      </div>
    )
  )
}

export default Alert;
