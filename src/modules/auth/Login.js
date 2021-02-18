import { Form, Input, Button, Checkbox, Row, Col, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/common/constants';

const { Title } = Typography;

const Login = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100%' }}>
      <Col xs={20} sm={16} md={6} lg={6} xl={6}>
        <Card>
          <div className='row justify-content-center align-items-center'>
            <Title level={2}>Login Form</Title>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <div className='d-flex justify-content-start align-items-center'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                <div className='pl-2'>
                  Or <Link to={ROUTES.SIGNUP}>Register now!</Link>
                </div>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;