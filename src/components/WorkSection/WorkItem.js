import React from 'react';

function WorkItem(props) {
  let auth_credentials = null;
  if (props.auth !== '') {
    auth_credentials = (
      <div>
        <h4 className='mt-1'>Login Credentials (For Demo)</h4>
        <p>{props.auth}</p>
      </div>
    );
  }

  return (
    <div className='work-item'>
      <div className='image'>
        <img
          src={process.env.PUBLIC_URL + '/img/works/' + props.image}
          alt={props.title}
          className={props.className}
        />
      </div>
      <div className='info'>
        <p className='text-muted'>RECENT WORK</p>
        <h2 className='mt-0 highlight-hover'>{props.title}</h2>
        <p>{props.description}</p>
        {auth_credentials}
        <h4 className='mt-1'>Technologies Used</h4>
        <p>{props.techs}</p>
        {props.link !== '' && (
          <a
            target='_blank'
            href={props.link}
            rel='noopener noreferrer'
            className='btn btn-md btn-primary'
          >
            {props.isDemo ? 'VIEW DEMO' : 'VIEW APP'}
          </a>
        )}
        {props.repo && (
          <a target='_blank' href={props.repo} rel='noopener noreferrer' className='btn btn-md'>
            VIEW REPO
          </a>
        )}
      </div>
    </div>
  );
}

export default WorkItem;
