// @ts-strict-ignore
import appleTouchIcon from "@assets/favicons/apple-touch-icon.png";
import favicon from "@assets/favicons/favicon.ico";
import safariPinnedTab from "@assets/favicons/safari-pinned-tab.svg";
import { useUser } from "@dashboard/auth";
import { ShopInfoQuery, useShopInfoQuery } from "@dashboard/graphql";
import React from "react";
import Helmet from "react-helmet";

type ShopContext = ShopInfoQuery["shop"];

export const ShopContext = React.createContext<ShopContext>(undefined);

export const ShopProvider: React.FC = ({ children }) => {
  const { authenticated, user } = useUser();
  const { data } = useShopInfoQuery({
    skip: !authenticated || !user,
  });

  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/ico" href={favicon} />
        <link rel="mask-icon" href={safariPinnedTab} />
      </Helmet>
      <ShopContext.Provider value={data ? data.shop : undefined}>
        {children}
      </ShopContext.Provider>
    </>
  );
};

export const Shop = ShopContext.Consumer;
export default Shop;
