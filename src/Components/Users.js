import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import GitHubContext from '../Context/gitHub/gitHubContext';


const Users = () =>{
  const gitHubContext = useContext(GitHubContext);

  const { loading, users } = gitHubContext;

  if(loading) {
    return <Spinner />
  } else {
    return(
      <div className="ui grid container" style={{marginTop: '1rem'}}>
        { users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}

      </div>
    );
  }
}

export default Users;
