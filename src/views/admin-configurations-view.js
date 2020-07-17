import React, { Component } from 'react';

import { Table, Button, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import Loader from '../components/loader';
import { getAllConfigurations } from '../services/configurations';

import { capitalize } from 'lodash';

const { Text } = Typography;

class AdminConfigurationView extends Component {
  constructor(props) {
    super(props);
    this.tableHeaders = [
      {
        title: 'Alto',
        dataIndex: 'height',
        key: 'height',
        sorter: (a, b) => parseInt(a.height) - parseInt(b.height),
        render: (text) => <span>{`${text} cm`}</span>
      },
      {
        title: 'Ancho',
        dataIndex: 'width',
        key: 'width',
        sorter: (a, b) => parseInt(a.width) - parseInt(b.width),
        render: (text) => <span>{`${text} cm`}</span>
      },
      {
        title: 'Orientación',
        dataIndex: 'orientation',
        key: 'orientation',
        render: (text) => <span>{capitalize(text)}</span>
      },
      {
        title: 'Cantidad de fotos',
        dataIndex: 'photos_quantity',
        key: 'photos_quantity',
        render: (text) => <span>{parseInt(text) > 0 ? text : '-'}</span>,
      },
      {
        title: 'Tipo',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <span>{capitalize(text)}</span>,
        sorter: (a, b) => a.type.length - b.type.length,
      },
      {
        title: 'Acciones',
        key: 'edit',
        fixed: 'right',
        width: 200,
        render: (text, record) =>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              type="link" 
              icon={<EditOutlined />}
              onClick={() => {
                this.setState({
                  docToEdit:record,
                  editDoc: true,
                })
              }} 
            />
            <Button 
              type="link" 
              icon={<DeleteOutlined />} 
              danger
              onClick={() => {
                this.setState({
                  docToDelete: record,
                  deleteDoc:true,
                })
              }}
            />
          </div> 
      },
    ]
    this.state = {
      isLoading: true,
      data: null,
      docToDelete: null,
      docToEdit: null,
      editDoc: false,
      deleteDoc: false,
    };
  }

  componentDidMount() {
    getAllConfigurations()
      .then(response => {
        this.setState({
          data: response,
          isLoading: false,
        })
      });
  }

  handleDelete() {

  }

  handleEdit() {

  }

  renderTable() {
    const { data } = this.state;
    return <Table dataSource={data} columns={this.tableHeaders} />;;
  }

  render() {
    const { isLoading } = this.state;
    return(
      <div className="admin-configurations-view">
        <h1>Administración</h1>
        <Text>Configuraciones</Text>
        { isLoading ?  <Loader /> : this.renderTable()}
      </div>)
  }
}

export default AdminConfigurationView;