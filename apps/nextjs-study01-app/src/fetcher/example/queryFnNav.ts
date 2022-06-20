import type { MenuProps } from 'antd';

export const queryFnNav =
  (arrNav: string[], timeout = 3000) =>
  () =>
    new Promise<MenuProps['items']>((resolve) => {
      setTimeout(() => {
        resolve(
          ['1', '2', '3'].map((key) => ({
            key,
            label: `nav ${key}`,
          }))
        );
      }, timeout);
    });
