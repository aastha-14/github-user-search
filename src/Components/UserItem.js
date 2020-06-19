import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem =({user: { login, avatar_url, html_url}}) =>{
    return(
      <div className="five wide column">
        <div className="ui centered special card">
          <div className="ui center aligned content">
            <img
              className="ui avatar massive image"
              src={avatar_url}
              alt="avatar" />
              <a className="header">{login}</a>
          </div>
          <div className="ui center aligned extra content">
            <Link to={`/user/${login}`} className="ui button">Show Details</Link>
          </div>
        </div>
      </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
