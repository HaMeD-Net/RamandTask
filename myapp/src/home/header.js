import { useState } from 'react';
import { Badge, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag, Input } from 'antd';
import "./home.css"



const { Search } = Input;
const onSearch = value => console.log(value);
export default function Header() {
    return (
        <header>
            <nav className="navBar">
                <Space>
                    <Tag>
                        <span>
                            Search Result:
                        </span>
                        <Badge
                            count={10}
                            className="searchCount"
                            style={{ backgroundColor: '#52c41a' }}
                        />
                    </Tag>
                </Space>
                <Space>
                    <Search placeholder="search text" onSearch={onSearch} enterButton />
                </Space>
                <div className="profile">
                    <Tag color="processing">Username: sample</Tag>
                    <Avatar icon={<UserOutlined />} />
                </div>

            </nav>
        </header>
    )
}
