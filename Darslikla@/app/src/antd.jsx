import { ConfigProvider, theme } from "antd";

export default function AntdCustom({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "yellow",
          algorithm: theme.darkAlgorithm,
        },
        components: {
          Button: {
            colorPrimary: "red",
            borderRadius: 0,
            colorBgBase: "green",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
