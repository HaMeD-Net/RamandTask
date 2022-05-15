import { Table, Tag } from 'antd';
import { useEffect, useState } from 'react';

const DataTable = () => {

    const [res, setRes] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                'https://jsonplaceholder.typicode.com/todos',
            );
            const response = await result.json();

            setRes(response);
        };

        fetchData();

    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'COMPLETED',
            dataIndex: 'completed',
            key: 'completed',
            render: text =>
                <Tag>{String(text)}</Tag>,
        },

    ];

    const data = res;
    return (<>
        <Table columns={columns} dataSource={data} />;
    </>)
}

export default DataTable
