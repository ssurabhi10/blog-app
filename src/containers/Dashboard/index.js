import React from 'react';
import { Table } from 'antd';
import './style.less';

const Dashboard = (props) => {

  const columns = [
    {
      title: 'Thumbnail',
      width: '25%',
      // dataIndex: 'compositeResponse.draftResponse.name',
      key: 'thumbnail',
    },
    {
      title: 'Title',
      width: '25%',
      // dataIndex: 'compositeResponse.draftResponse.name',
      key: 'title',
    },
    {
      title: 'Excerpt',
      width: '25%',
      // dataIndex: 'compositeResponse.draftResponse.name',
      key: 'excerpt',
    },
    {
      title: 'Time',
      width: '25%',
      // dataIndex: 'compositeResponse.draftResponse.name',
      key: 'time',
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        style={{ backgroundColor: 'white' }}
        pagination={false}
        bordered
        dataSource={[]}
      />
    </div>
  );
};

export default Dashboard;
