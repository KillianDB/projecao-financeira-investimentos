import React, { Component, Fragment } from 'react';
import '../../components/UserId';
import Header from '../../components/Header';
import UserId from '../../components/UserId';

function UserScreen() {
  return (
    <Fragment>
      <Header/>
    <div className='userDiv'>
      <UserId/>
    </div>
    </Fragment>
  );
}

export default UserScreen;