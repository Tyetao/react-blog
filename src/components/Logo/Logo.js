import React, { Component } from 'react';
import style from './logo.styl';

export default class Logo extends Component {
  render() {
    return (
      <div className={style.logo}>
        <h1 className={style['logo-h1']}>TYT'S Blog</h1>
        <p>世界很大，我真的很想去看看</p>
      </div>
    )
  }
}
