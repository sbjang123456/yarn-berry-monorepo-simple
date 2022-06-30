/* next, lib */
import { CheckOutlined } from '@ant-design/icons';
import FORM_RULES from '@sb/core-lib/utils/form-rules';
import { Checkbox, Form, Button } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

/* constans */
import { REGISTER_AGREE_LIST } from '../../../constants/codes';

/* types, style */
import { MaxButton, LineBox } from '../../style/common';
import { cssCheckboxWrap } from './Register.style';

const Register02: FC = () => {
  const form = Form.useFormInstance();
  const [allAgree, setAllAgree] = useState(false);

  const changeAllAgree = () => {
    setAllAgree(!allAgree);
    const clearTypes = REGISTER_AGREE_LIST.reduce(
      (acc, current) => ({
        ...acc,
        [current.name]: allAgree ? undefined : true,
      }),
      {}
    );
    form.setFieldsValue({ ...clearTypes });
  };

  return (
    <>
      <LineBox onClick={changeAllAgree} allagree={allAgree}>
        <CheckOutlined />
        <b>모든 항목에 동의하기</b>
      </LineBox>
      {REGISTER_AGREE_LIST.map((agree) => (
        <Form.Item
          key={agree.name}
          name={agree.name}
          valuePropName="checked"
          rules={agree.name !== 'agree4' ? FORM_RULES.defaultRule : undefined}
          css={cssCheckboxWrap}
        >
          <Checkbox>
            {agree.label}
            <u>보기</u>
          </Checkbox>
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

export default Register02;
