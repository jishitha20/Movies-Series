import React, { Fragment } from 'react';

const Layout = (props) => {
  return (
    <Fragment>
        <header>
        </header>
        <main>
          {props.children}
        </main>
        <footer>

        </footer>
    </Fragment>
  )
}

export default Layout;