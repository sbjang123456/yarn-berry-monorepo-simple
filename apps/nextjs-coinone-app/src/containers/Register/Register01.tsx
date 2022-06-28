/* utils */
import FORM_RULES from '@sb/core-lib/utils/form-rules';

/* lib */
import { Button, Form, Input, Radio } from 'antd';
import type { Rule } from 'antd/lib/form';

/* next */
import type { FC } from 'react';
import { useEffect, useState } from 'react';

/* constans */
import {
  CORPORATE_REGISTER_TYPE,
  PERSONAL_REGISTER_TYPE,
} from '../../../constants/codes';

/* types */
import type { IProps, IRegisterList } from '../../Interface/Register';

/* style */
import { MaxButton } from '../../style/common';
const Register01: FC<IProps> = (props) => {
  const form = Form.useFormInstance();
  const userType = Form.useWatch('user-type', form);
  const [userTypeList, setUserTypeList] = useState<IRegisterList[]>([]);

  useEffect(() => {
    // clear inputs
    const typeArr =
      userType === '법인' ? PERSONAL_REGISTER_TYPE : CORPORATE_REGISTER_TYPE;
    const clearTypes = typeArr.reduce(
      (acc, current) => ({ ...acc, [current.name]: '' }),
      {}
    );
    // set user type list
    setUserTypeList(typeArr);
    form.setFieldsValue({ ...clearTypes });
  }, [userType]);

  useEffect(() => {
    props.setTitle('본인인증을 시작합니다.<br />예상 소요시간은 10분입니다.');
  }, []);

  return (
    <>
      <Form.Item
        label="유저 이름"
        colon={false}
        name="username"
        rules={FORM_RULES.usenamerule as Rule[]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="user-type"
        colon={false}
        label="가입유형"
        rules={FORM_RULES.defaultrule}
      >
        <Radio.Group>
          <Radio.Button value="법인">법인</Radio.Button>
          <Radio.Button value="개인">개인</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {userType &&
        userTypeList.map((type) => (
          <Form.Item
            key={type.label}
            label={type.label}
            name={type.name}
            colon={false}
            rules={FORM_RULES.defaultrule}
            style={{ animation: 'showanimation 450ms ease-in-out' }}
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
