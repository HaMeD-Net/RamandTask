import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./login.css";


const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        if (values.username === 'admin' && values.password === 'admin')
            navigate('/home')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div id="form-container">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    className='remember'
                    name="remember"
                    valuePropName="checked"


                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    className='submit'
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default Login;

