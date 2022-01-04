import React from "react";
import { Form, Input, Button } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
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
  toast.configure({
    position: "top-center",
    autoClose: 2500,
    draggable: true,
  });
  const [form] = Form.useForm();

  const mobileValidation = (rule, value, callback) => {
    if (value && value.length > 10) {
      callback("Mobile no should be 10 digits");
    } else if (value && value.length < 10) {
      callback("Mobile no should be 10 digits");
    } else {
      callback();
    }
  };

  const onChange = (value) => {
    // console.log("recaptcha value", value)
    form.setFieldsValue({
      recaptcha: value,
    });
  };

  const onFinish = (values) => {
    // console.log(values);

    // fetch(
    //   "https://b5jm48uid4.execute-api.ap-south-1.amazonaws.com/default/sendContactEmail",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: '{"senderEmail":"avi@gmail.com","senderName":"Avi","message":"I am asking a query","senderMobile":"8806177666","interestedIn":"I would like to make web application"}',
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    const options = {
      method: "POST",
      url: "https://b5jm48uid4.execute-api.ap-south-1.amazonaws.com/default/sendContactEmail",
      // url: process.env.NEXT_PUBLIC_AWS_SES_API,
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        senderEmail: "avi@gmail.com",
        senderName: "Avi",
        message: "I am asking a query",
        senderMobile: "8806177666",
        interestedIn: "I would like to make web application",
      }),
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Form Submited!");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="contact-form w-100 pt4-l pt3 pb4">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name="name"
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
            name="email"
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
            name="mobile"
            className="f-item"
            label="Mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
              { validator: mobileValidation },
            ]}
          >
            <Input
              className="regular-font my-input "
              placeholder="8006318818"
            />
          </Form.Item>
          <Form.Item
            name="message"
            className="comment-box-label pb0 f-item"
            label="Message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              cols={4}
              className="comment-box regular-font my-input"
              placeholder="Tell us your ideas.."
            />
          </Form.Item>

          <Form.Item
            name="recaptcha"
            className="f-item"
            rules={[
              {
                required: true,
                message: "Please verify captcha before submitting!",
              },
            ]}
          >
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item className="pt2" wrapperCol={{ ...layout.wrapperCol }}>
            <Button className="medium-font" htmlType="submit">
              Send Request
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
