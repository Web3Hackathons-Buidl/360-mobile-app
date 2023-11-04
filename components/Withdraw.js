import WithdrawHeader from "./WithdrawHeader";
import WithdrawMain from "./WithdrawMain";

const Withdraw = ({ goProfileAndWithdraw }) => {
  return (
    <div>
      <WithdrawHeader goProfileAndWithdraw={goProfileAndWithdraw} />
      <WithdrawMain />
    </div>
  );
};

export default Withdraw;
