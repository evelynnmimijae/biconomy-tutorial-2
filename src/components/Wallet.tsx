import { useEffect, useRef, useState } from "react";
import {
    createSmartAccountClient,
    BiconomySmartAccountV2,
    PaymasterMode,
  } from "@biconomy/account";
  import { ethers } from "ethers";
  import { Web3Auth } from "@web3auth/modal";
  import { CHAIN_NAMESPACES } from "@web3auth/base";