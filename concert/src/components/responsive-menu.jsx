import "./../styles/group-dash.css";
import "./../styles/root.css";
import "./../styles/sidebar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ResChatSideBar from "./../components/res-chat-sidebar";
import React from "react";
import Sidebar from "react-sidebar";


  const mql = window.matchMedia(`(min-width: 700px)`);

  class ResMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarDocked: mql.matches,
        sidebarOpen: false
      };

      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
      this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
      this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }


  render() {
    return (
      <Sidebar
        sidebar={
          <div className="menu-bar-pos">
            <Link to="" className="close-sidebar" onClick={() => this.onSetSidebarOpen(false)}>
            <FaBars />
            </Link>
          </div>
          <ResChatSideBar />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight="true"
      >
            <div className="menu-bar-pos">
              <Link to="#" className="menu-bars" onClick={() => this.onSetSidebarOpen(true)}>
              <FaBars />
              </Link>
            </div>
      </Sidebar>
    );
  }
}

export default ResMenu;
