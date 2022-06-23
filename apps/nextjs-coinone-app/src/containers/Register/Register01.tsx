/* next */
import { FC, useState } from 'react';

/* lib */
import { Button, Form, Input, Radio } from 'antd';

/* constans */
import FORM_RULES from '@sb/core-lib/utils/formRules';
import {
  CORPORATE_REGISTER_TYPE,
  PERSONAL_REGISTER_TYPE,
} from '../../../constants/codes';

/* style */
import { cssRegisterTitle } from './Register.style';
import { MaxButton } from '../../style/common';

const Register01: FC = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState('');

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFieldsChangeType = (value: any) => {
    if (value[0].name.includes('user-type')) {
      setType(value[0].value);

      // clear inputs
      const typeArr =
        type === '법인' ? PERSONAL_REGISTER_TYPE : CORPORATE_REGISTER_TYPE;
      const clearTypes = typeArr.reduce(
        (acc, current) => ({ ...acc, [current.name]: '' }),
        {}
      );
      form.setFieldsValue({ ...clearTypes });
    }
  };

  return (
    <>
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
        onFieldsChange={onFieldsChangeType}
        autoComplete="off"
      >
        <Form.Item
          label="유저 이름"
          colon={false}
          name="username"
          rules={FORM_RULES.userNameRule as any}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="user-type"
          colon={false}
          label="가입유형"
          rules={FORM_RULES.defaultRequireRule}
        >
          <Radio.Group>
            <Radio.Button value="법인">법인</Radio.Button>
            <Radio.Button value="개인">개인</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {type === '법인' &&
          CORPORATE_REGISTER_TYPE.map((type) => (
            <Form.Item
              key={type.label}
              label={type.label}
              name={type.name}
              colon={false}
              rules={FORM_RULES.defaultRequireRule}
            >
              <Radio.Group>
                <Radio.Button value={type.option1}>{type.option1}</Radio.Button>
                <Radio.Button value={type.option2}>{type.option2}</Radio.Button>
              </Radio.Group>
            </Form.Item>
          ))}
        {type === '개인' &&
          PERSONAL_REGISTER_TYPE.map((type) => (
            <Form.Item
              key={type.label}
              label={type.label}
              name={type.name}
              colon={false}
              rules={FORM_RULES.defaultRequireRule}
            >
              <Radio.Group>
                <Radio.Button value={type.option1}>{type.option1}</Radio.Button>
                <Radio.Button value={type.option2}>{type.option2}</Radio.Button>
              </Radio.Group>
            </Form.Item>
          ))}

        <Form.Item>
          <MaxButton>
            <Button type="primary" htmlType="submit">
              이동
            </Button>
          </MaxButton>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register01;
