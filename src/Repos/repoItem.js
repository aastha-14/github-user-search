import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="ui segment">
      <h5 ><a href={repo.html_url} style={{color:'black'}}>{repo.name}</a></h5>
    </div>
  );
}

RepoItem.propTypes ={
  repo: PropTypes.array.isRequired
}
export default RepoItem;
