import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import {postCountSorting} from '../../utils/sortingFun';
import './style.less';

const Categories = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => { 
    getResponse();
  }, []);

  const getResponse = async () => {
    try {
      const {data} = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories');
      data.categories.sort(postCountSorting);
      setData(data && data.categories ? data.categories : []);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  }

  const columns = [
    {
      title: 'ID',
      width: '25%',
      dataIndex: 'ID',
      key: 'ID',
    },
    {
      title: 'Name',
      width: '25%',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      width: '25%',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Post count',
      width: '25%',
      dataIndex: 'post_count',
      key: 'post_count',
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        style={{ backgroundColor: 'white' }}
        pagination={false}
        bordered
        dataSource={data}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Categories;
