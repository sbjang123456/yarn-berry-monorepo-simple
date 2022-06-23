interface Irule {
  field?: string;
  fullField?: string;
  message?: string;
  required?: true;
  type?: string;
  validator?: () => void;
}

export default {
  defaultRequireRule: [
    {
      required: true,
      message: '필수값입니다.',
    },
  ],
  userNameRule: [
    {
      required: true,
      message: '유저 이름은 필수값입니다. 2자 이상 입력해주세요',
      validator: async (rule: Irule, value: string) => {
        if (value.length < 2) {
          throw new Error('Something wrong!');
        }
      },
    },
  ],
};
