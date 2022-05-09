import { useEffect } from "react";
import { Purchases } from "../utils/facebook/facebookPixelEvent";

const Success = () => {
  useEffect(() => {
    Purchases();
  }, []);

  return (
    <div>
      <h1>Payment Was Successful</h1>
    </div>
  );
};
export default Success;
