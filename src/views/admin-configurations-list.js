import React, { Component } from 'react';

import { Table, Button, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { withRouter } from "react-router-dom";

import Loader from '../components/loader';
import { getAllConfigurations } from '../services/configurations';

import { capitalize } from 'lodash';

const { Text } = Typography;

class AdminConfigurationsList extends Component {
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
              onClick={() => this.props.history.push(`/app/admin/configurations/${record.id}`)} 
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
    const { isLoading, newConfig } = this.state;
    return(
      <div className="admin-configurations-view">
        <h1>Administración</h1>
        <Text>Configuraciones</Text>
        <Button 
          className="add-configuration" 
          type="primary" 
          icon={<PlusOutlined />} 
          disabled={isLoading}
          onClick={() => this.props.history.push('/app/admin/configurations/new')}
        >Nueva configuración</Button>
        { isLoading ?  <Loader /> : this.renderTable()}
      </div>)
  }
}

export default withRouter(AdminConfigurationsList);