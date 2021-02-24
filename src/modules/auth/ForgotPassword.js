import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

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
            form.resetFields();
            onCreate(values);
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
  const { visibleForgotPasswordForm, setVisibleForgotPasswordForm } = props
  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
    // const { email, password } = values    
    // setLoading(true)
    // const res = await apiInstance('post', '/auth/signin', { email, password })
    // setLoading(false)
    // const data = get(res, 'data')
    // console.log('Data: ', data)
    setVisibleForgotPasswordForm(false);
  };

  return (
    <div>
      <ForgotPasswordForm
        visible={visibleForgotPasswordForm}
        onCreate={onSubmit}
        onCancel={() => {
          setVisibleForgotPasswordForm(false);
        }}
      />
    </div>
  );
};

export default ForgotPasswordModal