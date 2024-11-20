import React from 'react';
import style from '../style/Links.module.css';
import { NavLink } from 'react-router-dom';

function Links() {
  return (
    <div className={style.div}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? style.button + ' ' + style.active : style.button
        }
      >
        Feed
      </NavLink>
      <NavLink
        to='/post'
        className={({ isActive }) =>
          isActive ? style.button + ' ' + style.active : style.button
        }
      >
        Post
      </NavLink>
    </div>
  );
}

export default Links;
