/* next */
import { FC, useState } from 'react';

/* components */
import Register01 from './Register01';

/* lib */
import { Form } from 'antd';

/* style */
import { cssRegisterTitle, RegisterContentWrap } from './Register.style';

const Index: FC = () => {
  const [form] = Form.useForm();
  const [title, setTitle] = useState('');

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <RegisterContentWrap>
      <div css={cssRegisterTitle}>
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Register01 setTitle={(value: string) => setTitle(value)} />
      </Form>
    </RegisterContentWrap>
  );
};

export default Index;
