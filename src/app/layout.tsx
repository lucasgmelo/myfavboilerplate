import { ConfigProvider } from "antd";

import StyledComponentsRegistry from "lib/StyledComponentsRegistry";
import AntdRegistry from "lib/AntdRegistry";

import theme from "theme/antdThemeConfig";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
