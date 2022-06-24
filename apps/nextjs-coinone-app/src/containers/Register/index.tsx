/* next */
import { FC } from 'react';

/* components */
import Register01 from './Register01';

/* lib */
import { Form } from 'antd';

/* style */
import { cssRegisterTitle, RegisterContentWrap } from './Register.style';

const Index: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <RegisterContentWrap>
      <div css={cssRegisterTitle}>
        본인인증을 시작합니다. <br />
        예상 소요시간은 10분입니다.
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Register01 />
      </Form>
    </RegisterContentWrap>
  );
};

export default Index;
