import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './repoItem';

const Repos = ({repos}) => {

  const list = repos.map((repo) => {return <RepoItem repo={repo} key={repo.id}/>;});
  return (
    <div>
    <h4>Repositories</h4>
    <div className="ui segments">{list}</div>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
