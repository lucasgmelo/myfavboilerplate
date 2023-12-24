import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";

import StyledComponentsRegistry from "lib/StyledComponentsRegistry";
import AntdRegistry from "lib/AntdRegistry";

import theme from "theme/antdThemeConfig";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
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
