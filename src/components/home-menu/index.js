import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: "File",
        icon: "pi pi-fw pi-file",
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-power-off",
      },
    ];
  }

  render() {
    return (
      <Menubar model={this.items}>
        <InputText placeholder="Search" type="text" />
        <Button
          label="Logout"
          icon="pi pi-power-off"
          style={{ marginLeft: 4 }}
        />
      </Menubar>
    );
  }
}

export default HomeMenu;
