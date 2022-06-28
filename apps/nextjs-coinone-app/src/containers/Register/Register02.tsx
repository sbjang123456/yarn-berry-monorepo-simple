/* next, lib */
import { CheckOutlined } from '@ant-design/icons';
import FORM_RULES from '@sb/core-lib/utils/form-rules';
import { Checkbox, Form, Button } from 'antd';
import type { FC } from 'react';
import { useState, useEffect } from 'react';

/* constans */
import { REGISTER_AGREE_LIST } from '../../../constants/codes';

/* style */
import type { IProps } from '../../Interface/Register';
import { MaxButton, FlexBetweenBox, LineBox } from '../../style/common';

/* types */

const Register02: FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();
  const [allAgree, setAllAgree] = useState(false);

  const changeAllAgree = () => {
    setAllAgree(!allAgree);
    const clearTypes = REGISTER_AGREE_LIST.reduce(
      (acc, current) => ({ ...acc, [current.name]: !allAgree }),
      {}
    );
    form.setFieldsValue({ ...clearTypes });
  };

  useEffect(() => {
    props.setTitle('약관에 동의해 주세요.');
  }, []);

  return (
    <>
      <LineBox
        onClick={changeAllAgree}
        css={allAgree && { borderColor: '#1772f8' }}
      >
        <CheckOutlined
          style={allAgree ? { color: '#1772f8' } : { color: '#000' }}
        />
        <b>모든 항목에 동의하기</b>
      </LineBox>
      {REGISTER_AGREE_LIST.map((agree) => (
        <Form.Item
          shouldUpdate
          key={agree.name}
          name={agree.name}
          valuePropName="checked"
          rules={agree.name !== 'agree4' ? FORM_RULES.defaultrule : undefined}
        >
          <FlexBetweenBox>
            <Checkbox>{agree.label}</Checkbox>
            <u>보기</u>
          </FlexBetweenBox>
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
