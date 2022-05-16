import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Badge, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag, Input } from 'antd';
import "./home.css"



const { Search } = Input;

export default function Header() {

    const [searchText, setSearchText] = useState(null);
    const [searchShow, setSearchShow] = useState(false);

    const dispatch = useDispatch();
    const onSearch = (value) => {
        setSearchShow(true)
        console.log("OnSearch");
        setSearchText(value);

        if (searchText) {
            dispatch({ type: "SEARCH_FILTER", payload: searchText.toLowerCase() })

        }
        else {
            dispatch({ type: "REQUEST" })
            console.log("new Request");
        }
    }
    const response = useSelector((state) => state.ResponseReducer.response)

    useEffect(() => {
        setSearchShow(false)
    }, [])

    return (

        <header>
            <nav className="navBar">
                <Space>
                    <Tag>
                        <span>
                            Search Result:
                        </span>
                        {searchShow &&
                            <Badge
                                count={response?.length}
                                className="searchCount"
                                style={{ backgroundColor: '#52c41a' }}
                            />}
                    </Tag>
                </Space>
                <Space>
                    <Search placeholder="search text" onSearch={onSearch} enterButton />
                </Space>
                <div className="profile">
                    <Tag color="processing">Username: admin</Tag>
                    <Avatar icon={<UserOutlined />} />
                </div>

            </nav>
        </header>
    )
}
