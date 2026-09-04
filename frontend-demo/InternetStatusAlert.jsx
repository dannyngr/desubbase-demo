import { useEffect, useState } from "react";

function InternetStatusModal() {
  const [status, setStatus] = useState(null); // "online" | "offline"
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setStatus("offline");
      setShow(true);
      /*autoHide();*/
    };

    const handleOnline = () => {
      setStatus("online");
      setShow(true);
      autoHide();
    };

    // Check on mount
    if (!navigator.onLine) {
      handleOffline();
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

const autoHide = () => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  if (!show) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
<div className={`w-[90%] max-w-sm rounded-2xl p-5 text-center shadow-lg transition-all ${status === "offline" ? "bg-red-600" : "bg-green-600"}`}
    >
  <h2 className="text-lg font-semibold text-white">{status === "offline" ? "You're currently offline" : "You're back online"}
  </h2>

<p className="mt-2 text-sm text-white/90">{status === "offline" ? "Check your internet connection." : "Connection restored successfully."}</p>

<button onClick={() => setShow(false)}
className="mt-4 rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-gray-800">Close</button></div>
</div>
);
  
}

export default InternetStatusModal;