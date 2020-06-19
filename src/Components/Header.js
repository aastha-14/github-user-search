import React from 'react';
import { Link } from 'react-router-dom'

const Header= () => {
    return(
      <div className="ui clearing inverted segment" style={{marginTop: '1rem'}}>
        <div className="ui right floated header">
        <Link to='/about' style={{color:'#FFF'}}>About</Link>
        </div>
        <div className="ui right floated header">
          <Link to="/" style={{color:'#FFF'}}>Home</Link>
        </div>
        <h3 className="ui left floated header">
          <i className="github icon"></i>
          <div className="content">GitHub User Search</div>
        </h3>
      </div>
    );
};

export default Header;
