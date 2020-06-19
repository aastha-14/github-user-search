import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Header= () => {
    return(
      <div className="ui attached stackable inverted menu">
        <div className="ui container">
          <h3 className="ui header item" style={{padding: '5px 5px'}} >
            <i className="github icon"></i>
            <div>GitHub User Search</div>
          </h3>
          <Fragment>
            <div className="ui header right item" style={{padding: '5px 5px'}}>
            <Link to="/" style={{color:'#FFF', margin: '1rem'}}>Home</Link>
            <Link to='/about' style={{color:'#FFF'}}>About</Link>
            </div>
          </Fragment>
        </div>
      </div>
    );
};

export default Header;
