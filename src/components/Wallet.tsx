import { useEffect, useRef, useState } from "react";
import {
    createSmartAccountClient,
    BiconomySmartAccountV2,
    PaymasterMode,
  } from "@biconomy/account";
  import { ethers } from "ethers";
  import { Web3Auth } from "@web3auth/modal";
  import { CHAIN_NAMESPACES } from "@web3auth/base";

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x13882",
    rpcTarget: "https://rpc-amoy.polygon.technology/",
    displayName: "Polygon Amoy",
    blockExplorer: "https://www.oklink.com/amoy/",
    ticker: "MATIC",
    tickerName: "Polygon Matic",
  };
  
  const web3auth = new Web3Auth({
    clientId: "BBsGwU6xKi4LuZDmO_xYno4dnYpr5tj0aQFA1SPh3RUjcYabvOYQzNQZeIudtLGovPtnhjJxJ89uHUE-MBudCv4",
    web3AuthNetwork: "sapphire_devnet",
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x13882",
      rpcTarget: "https://rpc-amoy.polygon.technology/",
      displayName: "Polygon Amoy",
      blockExplorer: "https://www.oklink.com/amoy/",
      ticker: "MATIC",
      tickerName: "Polygon Matic",
    },
    uiConfig: {
      appName: "Your App Name",
      mode: "dark", // light, dark, or auto
      loginMethodsOrder: ["apple", "google", "twitter"],
      logoLight: "https://yourdomain.com/light-logo.svg",
      logoDark: "https://yourdomain.com/dark-logo.svg",
      defaultLanguage: "en", // Language codes supported by Web3Auth
      loginGridCol: 3,
      primaryButton: "socialLogin", // Options: "externalLogin", "socialLogin", "emailLogin"
    },
  });
