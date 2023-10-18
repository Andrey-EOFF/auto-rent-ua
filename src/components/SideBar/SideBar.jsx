import React from "react";
import { Section, SideBarNav, SidebarLink } from "./SideBar.styled";

export default function SideBar() {
  return (
    <Section>
      <SideBarNav>
        <ul>
          <li>
            <SidebarLink to="/">Home</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/catalog">Catalog</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/favorites">Favorites</SidebarLink>
          </li>
        </ul>
      </SideBarNav>
    </Section>
  );
}
