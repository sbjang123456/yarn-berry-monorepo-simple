/* lib */
import { Form } from 'antd';
import type FormData from 'antd/lib/form';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';

/* next */
import type { FC } from 'react';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { registerStep, registerDataObj } from 'states';
import { REGISTER_TITLE } from '../../../constants/codes';

/* components , style */
import { cssRegisterTitle, RegisterContentWrap } from './Register.style';
import Register01 from './Register01';
import Register02 from './Register02';

const Index: FC = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useRecoilState(registerStep);
  const [registerData, setRegisterData] = useRecoilState(registerDataObj);

  const onFinish = (values: FormData) => {
    setStep(step + 1);
    setRegisterData({ ...registerData, ...values });
    console.log('Success:', { ...registerData, ...values });
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Failed:', errorInfo);
  };

  const registerComponents = useMemo(() => {
    switch (step) {
      case 1:
        return <Register01 />;
      case 2:
        return <Register02 />;
    }
  }, [step]);

  return (
    <RegisterContentWrap>
      <div css={cssRegisterTitle}>
        <div
          dangerouslySetInnerHTML={{
            __html: REGISTER_TITLE[`step${step}`],
          }}
        ></div>
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {registerComponents}
      </Form>
    </RegisterContentWrap>
  );
};

export default Index;
