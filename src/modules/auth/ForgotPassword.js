import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Spin } from 'antd';
import { get } from 'lodash'
import { apiInstance } from 'src/helpers/api';

const ForgotPasswordForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Forgot Password Form"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
            form.resetFields();
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input the valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ForgotPasswordModal = (props) => {
  const { visibleForgotPasswordForm, setVisibleForgotPasswordForm } = props;
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    // console.log('Received values of form: ', values);
    try {
      const { email, password } = values;
      setLoading(true);
      const res = await apiInstance('post', '/auth/forgot-password', { email, password });
      // const data = get(res, 'data');
      // console.log('Data: ', data);
      setLoading(false);
    } catch (error) {
      setLoading(false)
    } finally {
      setVisibleForgotPasswordForm(false);
    }
  };

  return (
    <div>
      <Spin spinning={loading}>
        <ForgotPasswordForm
          visible={visibleForgotPasswordForm}
          onCreate={onSubmit}
          onCancel={() => {
            setVisibleForgotPasswordForm(false);
          }}
        />
      </Spin>
    </div>
  );
};

export default ForgotPasswordModal