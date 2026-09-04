import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

const BalanceCard = ({ balance }) => {
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/balance`)
      .then(res => setShowBalance(res.data.showBalance === 1))
      .catch(err => console.error(err));
  }, []);

  const toggleBalance = () => {
    const newValue = !showBalance;
    setShowBalance(newValue);

    axios.post(`${import.meta.env.VITE_API_URL}/api/balance`, { 
      showBalance: newValue ? 1 : 0 
    })
    .catch(err => console.error(err));
  };

  return (
<div className="flex items-center gap-3 p-2 bg-transparent rounded-xl text-white mx-auto">
  <div className="font-bold">
    {showBalance ? `₦${balance.toLocaleString()}` : "******"}
  </div>

  <button onClick={toggleBalance} className="text-white/90">
    {showBalance ? <FiEyeOff size={22} /> : <FiEye size={22} />}
  </button>
</div>
  );
};

export default BalanceCard;