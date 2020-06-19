import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem =({user: { login, avatar_url, html_url}}) =>{
    return(

      <div className="ui centerd cards" style={{margin: "0.5rem 0.5rem 0.5rem 0.5rem"}}>
        <div className="ui card" >
          <div className="ui center aligned content">
            <img
              className="ui avatar massive image"
              src={avatar_url}
              alt="avatar" />
              <div className="description"><a className="ui header">{login}</a></div>
          </div>
          <div className="ui center aligned extra content">
            <Link to={`/user/${login}`} className="ui fluid button">Show Details</Link>
          </div>
        </div>
      </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
