import React, { Fragment } from 'react';

const userDetails = ({user})=>{
  const {name, bio, blog, avatar_url, location, followers, following, followers_url, public_repos, email, public_gists, html_url} = user;
  return(
    <Fragment>
      <div className="ui two column doubling stackable grid container" style={{marginTop: '1rem'}}>
        <div className="column">
          {avatar_url && (<img src={avatar_url} alt="avatar" className="ui centered circular small image"/>)}
        </div>
        <div className="middle aligned column">
          {name && (<h3>{name}</h3>)}
          {location && (<div style={{margin: '0px 0px 14px'}}>
            <i className="map marker alternate icon" />
            {location}
          </div>)}
          {blog && (<div style={{margin: '0px 0px 14px'}}>
            <i className="linkify icon" />
            <a href="#" style={{margin: '0px 0px 14px', teaxtDecoration: 'none'}}>{blog}</a>
          </div>)}
          {email && (<div><i className="envelope icon" />
          <a href='#' style={{margin: '0px 0px 14px', teaxtDecoration: 'none'}}>
          {email}</a></div>)}
          {bio && (<div style={{margin: '0px 0px 14px'}}>
            <h4 style={{margin: '14px 0px 0px'}}>Bio</h4>
            {bio}
          </div>)}
          <a href={html_url} className="ui button secondary" style={{margin: '14px 0px 0px'}}>Visit GitHub Profile</a>
        </div>
      </div>
      <div className="ui one column doubling stackable grid container" style={{marginTop: '1rem'}}>
        <div className="column">
          <div className="ui labeled button" style={{margin: '10px 10px 10px'}}>
            <div className="ui red button">Followers</div>
            <div className="ui basic red left pointing label">{followers}</div>
          </div>
          <div className="ui labeled button" style={{margin: '10px 10px 10px'}}>
            <div className="ui blue button">Following</div>
            <div className="ui basic blue left pointing label">{following}</div>
          </div>
          <div className="ui labeled button" style={{margin: '10px 10px 10px'}}>
            <div className="ui green button">Repos</div>
            <div className="ui basic green left pointing label">{public_repos}</div>
          </div>
          <div className="ui labeled button" style={{margin: '10px 10px 10px'}}>
            <div className="ui grey button ">Gists</div>
            <div className="ui basic grey left pointing label">{public_gists}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default userDetails;
