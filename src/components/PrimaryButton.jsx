import "./PrimaryButton.css";

function PrimaryButton({ children, disabled, loading, loadingText, type = "submit", onClick }) {
  return (
    <button
      type={type}
      className="primary-btn w-100"
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {loadingText ?? "Loading..."}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default PrimaryButton;
