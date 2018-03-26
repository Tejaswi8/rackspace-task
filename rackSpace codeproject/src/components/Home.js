import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store/store';
import { getTableInfo } from '../actions/tableInfoActions';
import ReactTable from 'react-table';
// ReactTable best features are Fully customizable (JSX, templates, state, styles, callbacks)
// Client-side & Server-side pagination,Multi-sort,Filters,Pivoting & Aggregation
// Minimal design & easily themeable
// Fully controllable via optional props and callbacks//
import 'react-table/react-table.css';


class Home extends Component {
  componentDidMount() {
    store.dispatch(getTableInfo());
  }

  render() {
    console.log("printing the response ", this.props);
      const columns = [{
        Header: 'Id',
        accessor: 'id'
      }, {
        Header: 'Title',
        accessor: 'title',
      }, {
        Header: 'Details',
        accessor: 'body'
      }]

    return (
      <div>
          {this.props.tableInfo && <ReactTable
            data={this.props.tableInfo}
            columns={columns}
          />}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    tableInfo: store.tableInfo.info
  };
};

export default connect(mapStateToProps)(Home);