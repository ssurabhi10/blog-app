import React from 'react';
import { Icon } from 'antd';
import { ROUTES_NAMES as R } from '../../containers/App/constants';

export const MENU_LIST = [
    {
        key: 'a1',
        title: (
            <span>
                <Icon type="appstore" />
                <span>Dashboard</span>
            </span>
        ),
        subMenuList: [
            {
                key: '1',
                title: 'Latest Posts',
                targetUrl: R.DASHBOARD
            },
        ]
    },
    {
        key: 'a2',
        title: (
            <span>
                <Icon type="appstore" />
                <span>Categories</span>
            </span>
        ),
        subMenuList: [
            {
                key: '3',
                title: 'Available Categories',
                targetUrl: R.CATEGORIES
            }
        ]
    },
    {
        key: 'a3',
        title: (
            <span>
                <Icon type="appstore" />
                <span>Tags</span>
            </span>
        ),
        subMenuList: [
            {
                key: '4',
                title: 'Top Tags',
                targetUrl: R.TAGS
            }
        ]
    }
];