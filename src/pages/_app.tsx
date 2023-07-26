import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import DataProvider from "dataContext.js";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
};

export default api.withTRPC(MyApp);
