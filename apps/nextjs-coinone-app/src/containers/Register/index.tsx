/* lib */
import { Form } from 'antd';
import type FormData from 'antd/lib/form';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';

/* next */
import type { FC } from 'react';
import { useState } from 'react';

/* style */
import { cssRegisterTitle, RegisterContentWrap } from './Register.style';

/* components */
import Register01 from './Register01';

const Index: FC = () => {
  const [form] = Form.useForm();
  const [title, setTitle] = useState('');

  const onFinish = (values: FormData) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
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
