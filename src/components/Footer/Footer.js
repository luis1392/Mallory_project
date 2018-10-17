import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import LittleMenuFooter from "../LittleMenuFooter";
import Logo from "../Logo";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <Logo
            style="img-footer"
            url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxz%0D%0Admcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzNweCIgdmlld0JveD0iMCAwIDQ1IDMzIiB2ZXJzaW9u%0D%0APSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0%0D%0AMyAoMzg5OTkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAg%0D%0APHRpdGxlPkdyb3VwIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rl%0D%0Ac2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0%0D%0AaD0iNTciIGhlaWdodD0iMzkiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEi%0D%0AIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2%0D%0AZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEx%0D%0AOTAuMDAwMDAwLCAtMjY3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJh%0D%0AbnNmb3JtPSJ0cmFuc2xhdGUoMTE4NS4wMDAwMDAsIDI2NS4wMDAwMDApIj4KICAgICAgICAgICAg%0D%0AICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8%0D%0AdXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgog%0D%0AICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMCIg%0D%0AeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8ZyBtYXNrPSJ1cmwo%0D%0AI21hc2stMikiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtZmFtaWx5PSJBbWVyaWNhblR5cGV3%0D%0Acml0ZXIsIEFtZXJpY2FuIFR5cGV3cml0ZXIiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5z%0D%0AZm9ybT0idHJhbnNsYXRlKC0yNi4wMDAwMDAsIC02LjAwMDAwMCkiPgogICAgICAgICAgICAgICAg%0D%0AICAgICAgICA8dGV4dCBpZD0iRiIgZm9udC1zaXplPSIyOCIgbGV0dGVyLXNwYWNpbmc9Ii0wLjUz%0D%0ANzY5NzQ5NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0iNTguODk3Nzkw%0D%0AOSIgeT0iMzkuMjU1MjI1IiBmaWxsPSIjOTk5OTk5Ij5GPC90c3Bhbj4KICAgICAgICAgICAgICAg%0D%0AICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0iTSIgZm9u%0D%0AdC1zaXplPSIzNiIgbGV0dGVyLXNwYWNpbmc9Ii0wLjY5MTMyNTM2NiI+CiAgICAgICAgICAgICAg%0D%0AICAgICAgICAgICAgICA8dHNwYW4geD0iMzEuMzQ4MDc2IiB5PSIzMyIgZmlsbD0iIzI4MjkyOSI+%0D%0ATTwvdHNwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgICAg%0D%0AICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8%0D%0AL2c+CiAgICA8L2c+Cjwvc3ZnPg=="
          />
        </div>
        <div className="col-md-8 col-md-offset-2">
          <LittleMenuFooter>
            <p className="title-sub-footer">Company</p>
            <Link to="/about" className="link-footer">
              About
            </Link>

            <Link to="#" className="link-footer">
              Press
            </Link>

            <Link to="terms" className="link-footer">
              Terms & Conditions
            </Link>
          </LittleMenuFooter>

          <LittleMenuFooter>
            <p className="title-sub-footer">Categories</p>
            <Link to="/category/seating" className="link-footer">
              Seating
            </Link>
            <Link to="/category/tables" className="link-footer">
              Tables
            </Link>
            <Link to="/category/miscellaneous" className="link-footer">
              Misc
            </Link>
          </LittleMenuFooter>
          <LittleMenuFooter>
            <p className="title-sub-footer">Social</p>
            <p>Social Media</p>
          </LittleMenuFooter>
        </div>
      </footer>
    );
  }
}

export default Footer;
