import React from 'react';
import HeaderBar from '../../HeaderBar/js/HeaderBar.js';
import NavigationMenu from '../../NavigationMenu/js/NavigationMenu.js';

export default class AdminPanel extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <HeaderBar />
        <NavigationMenu />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Brigad admin panel</h1>
          </section>
          <section className="content">
          </section>
        </div>
      </div>
    );
  }
}
