import React, { useState, useContext } from 'react';
import GitHubContext from '../Context/gitHub/gitHubContext';
import AlertContext from '../Context/Alert/alertContext';

const Search = () =>{
  const gitHubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText ] = useState('');

  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if(text === ''){
      alertContext.setAlert('Enter username!', 'light');
    }else{
      gitHubContext.searchUsers(text);
      setText('');
    }
  };

return (
      <div className="search-bar ui">
        <form onSubmit={onSubmit} className="ui form">
          <div className="ui fluid icon input">
            <input
              type='text'
              placeholder="User Name"
              value={text}
              onChange={onChange} />
              <i className="search icon"></i>
            </div>
        </form>
        {gitHubContext.users.length > 0 && (<button className="ui fluid button" onClick={gitHubContext.clearUsers} style={{margin: '14px 0px 14px'}}>Clear</button>)
      }

      </div>
    );
  }

export default Search
