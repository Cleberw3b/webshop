import MastercardIcon from "../../../public/assets/icons/formas de pagamento/fc-mastercard-2";
import VisaIcon from "../../../public/assets/icons/formas de pagamento/fc-visa";
import EloIcon from "../../../public/assets/icons/formas de pagamento/fc-elo";
import HipercardIcon from "../../../public/assets/icons/formas de pagamento/fc-hipercard";
import DinersClubIcon from "../../../public/assets/icons/formas de pagamento/fc-diners-club";
import AmericanExpressIcon from "../../../public/assets/icons/formas de pagamento/fc-american-express";
import "./payment-methods.scss";

const PaymentMethods = () => (
  <div className="payment-methods">
    <MastercardIcon width="47" height="30" />
    <VisaIcon width="47" height="30" />
    <EloIcon width="47" height="30" />
    <HipercardIcon width="47" height="30" />
    <DinersClubIcon width="47" height="30" />
    <AmericanExpressIcon width="47" height="30" />
  </div>
);

export default PaymentMethods;
