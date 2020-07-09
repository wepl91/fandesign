import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { withRouter } from "react-router-dom";

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: 'Contacto',
        icon: 'pi pi-users',
        command: () => props.history.push('contact')
      },
      {
        label: 'Redes sociales',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Instagram',
            command: () => {},
          },
          {
            label: 'Facebook',
            command: () => {},
          },
        ]
      },
      {
        label: "Tu cuadro",
        icon: "pi pi-shopping-cart",
        command: () => props.history.push('your-painting')
      },
    ];
  }

  render() {
    return (
      <Menubar model={this.items}>
        <Button
          icon="pi pi-power-off"
          style={{ marginLeft: 4 }}
        />
      </Menubar>
    );
  }
}

export default withRouter(HomeMenu);
