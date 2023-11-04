import { Decommas } from "@decommas/sdk";

const decommas = new Decommas();
const getVitalikERC20Balances = async () => {
  const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // any address

  const tokens = await decommas.address.getTokens({ address });
  console.log(tokens);
};
getVitalikERC20Balances();
