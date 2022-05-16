import { useDispatch, useSelector } from "react-redux";

import { Table, Tag, Modal, Input, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { EditOutlined } from "@ant-design/icons"
import "./table.css"

const { TextArea } = Input;

const DataTable = () => {

    // const [res, setRes] = useState();
    const [isEditing, setIsEditing] = useState(false)
    const [editing, setEditing] = useState(null)

    const dispatch = useDispatch();
    const { response, request } = useSelector((state) => state.ResponseReducer);


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            );
            const res = await result.json();

            dispatch({
                type: "RESPONSE",
                payload: res
            })
        };
        fetchData();
        console.log('table rerendered')
    }, [request])

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
            title: 'BODY',
            dataIndex: 'body',
            key: 'body',

        },
        {
            title: 'ACTION',
            key: 'edit',
            render: record =>
                <Tag
                    className='editIcon'
                    style={{ color: "#118e11", fontSize: 17 }}
                >
                    {<EditOutlined onClick={() => handleEdit(record)} />}
                </Tag >,
        },

    ];

    const handleEdit = (record) => {
        setIsEditing(true);
        setEditing({ ...record });
    }

    const resetEditing = () => {

        setIsEditing(false);
        setEditing(null);
    }

    const data = response;
    return (<main>
        {
            data?.length !== 0 ?

                <Table columns={columns} dataSource={data} />
                :
                <Spin size="large" style={{ marginTop: "15%" }} />

        }
        <Modal
            title="Edit Table Data"
            visible={isEditing}
            onCancel={() => resetEditing()}
            onOk={() => {
                dispatch({ type: "OK_MODAL", payload: editing })
                // setRes(pre => {
                //     return pre.map(item => {
                //         if (item.id === editing.id)
                //             return editing;
                //         else
                //             return item
                //     })
                // })
                resetEditing();
            }}
            okText="Save"
        >

            <Input
                value={editing?.title}
                onChange={(e) => {
                    setEditing(pre => {
                        return { ...pre, title: e.target.value }
                    })
                }} />
            <TextArea
                rows={4}
                value={editing?.body}
                onChange={(e) => {
                    setEditing(pre => {
                        return { ...pre, body: e.target.value }
                    })
                }} />

        </Modal>
    </main>)
}

export default DataTable
