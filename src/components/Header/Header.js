import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import Logo from "../Logo";

class Header extends Component {
  handlerClickCart = () => {
    this.props.onClickOpen(true);
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink to="/" activeClassName="active" className="navbar-brand">
                <Logo url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxz%0D%0Admcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzNweCIgdmlld0JveD0iMCAwIDQ1IDMzIiB2ZXJzaW9u%0D%0APSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0%0D%0AMyAoMzg5OTkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAg%0D%0APHRpdGxlPkdyb3VwIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rl%0D%0Ac2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0%0D%0AaD0iNTciIGhlaWdodD0iMzkiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEi%0D%0AIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2%0D%0AZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMz%0D%0AMy4wMDAwMDAsIC0xMTYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFu%0D%0Ac2Zvcm09InRyYW5zbGF0ZSgzMjguMDAwMDAwLCAxMTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAg%0D%0AICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgPHVz%0D%0AZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAg%0D%0AICAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAiIHhs%0D%0AaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNt%0D%0AYXNrLTIpIiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LWZhbWlseT0iQW1lcmljYW5UeXBld3Jp%0D%0AdGVyLCBBbWVyaWNhbiBUeXBld3JpdGVyIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zv%0D%0Acm09InRyYW5zbGF0ZSgtMjYuMDAwMDAwLCAtNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAg%0D%0AICAgICAgPHRleHQgaWQ9IkYiIGZvbnQtc2l6ZT0iMjgiIGxldHRlci1zcGFjaW5nPSItMC41Mzc2%0D%0AOTc0OTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjU4Ljg5Nzc5MDki%0D%0AIHk9IjM5LjI1NTIyNSIgZmlsbD0iIzk5OTk5OSI+RjwvdHNwYW4+CiAgICAgICAgICAgICAgICAg%0D%0AICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9Ik0iIGZvbnQt%0D%0Ac2l6ZT0iMzYiIGxldHRlci1zcGFjaW5nPSItMC42OTEzMjUzNjYiPgogICAgICAgICAgICAgICAg%0D%0AICAgICAgICAgICAgPHRzcGFuIHg9IjMxLjM0ODA3NiIgeT0iMzMiIGZpbGw9IiNGRkZGRkYiPk08%0D%0AL3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICAg%0D%0AICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9n%0D%0APgogICAgPC9nPgo8L3N2Zz4=" />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms" activeClassName="active">
                    Terms & Conditions
                  </NavLink>
                </li>
                <li className="space-nav">|</li>
                <li>
                  <NavLink
                    to="/all-products"
                    className="nav-category"
                    activeClassName="active"
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/seating"
                    className="nav-category"
                    activeClassName="active"
                  >
                    Seating
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/tables"
                    className="nav-category"
                    activeClassName="active"
                  >
                    Tables
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/desks"
                    className="nav-category"
                    activeClassName="active"
                  >
                    Desks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/storage"
                    className="nav-category"
                    activeClassName="active"
                  >
                    Storage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/bedroom"
                    className="nav-category"
                    activeClassName="active"
                  >
                    Bedroom
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/miscellaneous"
                    activeClassName="active"
                    className="nav-category"
                  >
                    Misc
                  </NavLink>
                </li>
                <li className="space-nav">|</li>
                <li onClick={this.handlerClickCart} className="shopping-car">
                  <img src="/images/shopping-car.png" alt="shopping-car" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
