import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  X,
  ChevronRight,
  Building2,
  CreditCard,
  Landmark,
  ShieldCheck,
} from "lucide-react";

function Modal({ onSubmit, onClose, onCancel, children }) {
  const closeModal = () => {
    document.body.style.overflow = "unset";
    onClose?.();
    onCancel?.();
  };

  const fundingOptions = [
    {
      to: "/virtualaccounts",
      title: "Virtual Bank Account",
      description: "Fund your wallet directly from your bank account",
      icon: Building2,
      iconStyle:
        "bg-blue-50 text-blue-600",
    },
    {
      to: "/monnify-checkout",
      title: "ATM Card / Transfer",
      description: "Pay securely using your card or bank transfer",
      icon: CreditCard,
      iconStyle:
        "bg-purple-50 text-purple-600",
    },
    {
      to: "/manual-funding",
      title: "Manual Bank Funding",
      description: "Make a bank transfer and submit your payment details",
      icon: Landmark,
      iconStyle:
        "bg-emerald-50 text-emerald-600",
    },
  ];

  return createPortal(
    <div
      className="
        fixed inset-0 z-[100]
        flex items-end justify-center
        bg-black/50 backdrop-blur-[2px]
        px-3 sm:px-4
        pb-3 sm:pb-5
        animate-fade-in
      "
      onClick={closeModal}
    >
      <div
        className="
          relative
          w-full max-w-md
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-2xl
          animate-slide-up
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-2xl
                  bg-blue-50 text-blue-600
                "
              >
                <Building2 size={21} strokeWidth={2.2} />
              </div>

              <div>
                <h2 className="text-[18px] font-bold tracking-tight">
                  Fund Wallet
                </h2>

                <p className="mt-0.5 text-xs font-medium text-gray-500">
                  Choose a funding method
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-gray-100
              text-gray-500
              transition
              hover:bg-gray-200
              hover:text-gray-900
              active:scale-95"
          >
            <X size={19} />
          </button>
        </div>

        {/* Funding options */}
        <div className="px-4 pb-3">
          <div className="space-y-2">
            {fundingOptions.map((option) => {
              const Icon = option.icon;

              return (
                <Link
                  key={option.to}
                  to={option.to}
                  onClick={() => {
                    document.body.style.overflow = "unset";
                    onClose?.();
                  }}
                  className="
                    group
                    flex items-center gap-3
                    rounded-2xl
                    border border-gray-100
                    bg-white
                    p-3.5
                    transition-all duration-200
                    hover:border-gray-200
                    hover:bg-gray-50
                    active:scale-[0.99]
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-2xl
                      ${option.iconStyle}
                    `}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-gray-900">
                      {option.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-gray-500">
                      {option.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-gray-50
                      text-gray-400
                      transition
                      group-hover:bg-gray-100
                      group-hover:text-gray-700
                    "
                  >
                    <ChevronRight size={17} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Security note */}
        <div className="px-5 pb-5 pt-2">
          <div
            className="
              flex items-center justify-center gap-2
              rounded-xl
              bg-gray-50
              px-3 py-2.5
              text-[11px]
              font-medium
              text-gray-500
            "
          >
            <ShieldCheck size={15} className="text-emerald-500" />
            <span>Your payment information is handled securely</span>
          </div>
        </div>

        {/* Existing children support */}
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;