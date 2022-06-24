/* next */
import { FC, useEffect } from 'react';

/* lib */
import { Button, Form, Input, Radio } from 'antd';

/* constans */
import FORM_RULES from '@sb/core-lib/utils/formRules';
import {
  CORPORATE_REGISTER_TYPE,
  PERSONAL_REGISTER_TYPE,
} from '../../../constants/codes';

/* style */
import { MaxButton } from '../../style/common';

const Register01: FC = () => {
  const form = Form.useFormInstance();
  const userType = Form.useWatch('user-type', form);

  useEffect(() => {
    // clear inputs
    const typeArr =
      userType === '법인' ? PERSONAL_REGISTER_TYPE : CORPORATE_REGISTER_TYPE;
    const clearTypes = typeArr.reduce(
      (acc, current) => ({ ...acc, [current.name]: '' }),
      {}
    );
    form.setFieldsValue({ ...clearTypes });
  }, [userType]);

  return (
    <>
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
      {userType === '법인' &&
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
      {userType === '개인' &&
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
    </>
  );
};

export default Register01;
