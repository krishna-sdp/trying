import React from "react";
import {
  Form, Input, Button, Upload,
  Select,
} from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


const normFile = (e, any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function MyForm() {
  const onFinish = (values) => {
    // console.log(values);
  };

  return (
    <div>
      <div className="contact-form w-100 pb5 pa3">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name={["user", "name"]}
            className="f-item"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              className="regular-font my-input "
              placeholder="John Appleseed"
            />
          </Form.Item>

          <Form.Item
            name={["user", "email"]}
            className="f-item"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              className="regular-font my-input "
              placeholder="John.appleseed@gmail.com"
            />
          </Form.Item>

          <Form.Item
            name={["user", "mobile"]}
            className="f-item"
            label="Mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
            ]}
          >
            <Input
              className="regular-font my-input "
              placeholder="8006318818"
            />
          </Form.Item>

          <Form.Item
            name={["user", "location"]}
            className="f-item"
            label="Location(City)"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              className="regular-font my-input "
              placeholder="Mumbai (Maharashtra)"
            />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Resume/CV *
        "
            className="f-item  " 
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              {/* <Button icon={<UploadOutlined />}>Click to upload</Button> */}
              <a className="attach-resume regular-font pt2 "> <img src="/assets/images/career/attach-pin.svg"
                style={
                  {
                    width: '30px',
                    height: '20px',
                    rotate: '270',
                  }}
              /> Attach Resume</a>
            </Upload>
          </Form.Item>


          {/* <Form.Item 
           label="Resume/CV *">
            <a className="attach-resume regular-font"> <img src="/assets/images/career/attach-pin.svg"
             style={
               {width: '30px',
                height: '20px',
                rotate: '270',
            }}
            /> Attach Resume</a>
          </Form.Item> */}

          <Form.Item
            className="pt4 regular-font"
            wrapperCol={{ ...layout.wrapperCol }}
          >
            <Button htmlType="submit">Submit Application</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
