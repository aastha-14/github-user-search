import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import UserDetails from './userDetails';
import Repos from '../Repos/repos';
import GitHubContext from '../Context/gitHub/gitHubContext';

const User= ({ match }) => {
  const gitHubContext =  useContext(GitHubContext);
  const { getUser, loading, user, repos, getUserRepos } = gitHubContext;
  useEffect(()=>{
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  console.log(user);
  const {hireable} = user;

  if(loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className="ui button primary basic">Back</Link>
        Hireable:
        {hireable ? <i className="check icon" /> : <i className="close icon" />}
        <UserDetails user={user}/>
        <Repos repos={repos}/>
      </Fragment>
    );
}

export default User;
