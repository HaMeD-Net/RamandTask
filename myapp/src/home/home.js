import "./home.css"
import { Badge, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Input } from 'antd';
import DataTable from '../table/table'



const { Search } = Input;
const onSearch = value => console.log(value);

const Home = () => {
    return <>
        <header>
            <nav className="navBar">
                <Space>
                    <Badge
                        count={10}
                        className="searchCount"
                        style={{ backgroundColor: '#52c41a' }}
                    />
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
        <main>
            <DataTable />
        </main>
    </>
}
export default Home;