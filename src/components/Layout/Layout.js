import React, { Fragment } from 'react';
import MainNavigation from '../MainNavigation';
import { ToastContainer } from 'react-toastify';


const Layout = (props) => {
  return (
    <Fragment>
        <header>
            <MainNavigation></MainNavigation>
        </header>
        <main>
            <ToastContainer/>
            {props.children}
        </main>
        <footer>
        </footer>
    </Fragment>
  )
}

export default Layout;