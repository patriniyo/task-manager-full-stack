const Alert = ({
  message,
  success,
  closeAlertWithX,
}) => {
  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 p-4 max-w-sm rounded-md ${
        success
          ? "bg-green-100 border-green-500 text-green-800"
          : "bg-gray-100 border-gray-500 text-gray-800"
      } border-2`}
    >
      <span>{message}</span>
      <span
        className="cursor-pointer ml-2"
        onClick={closeAlertWithX}
      >
        &#10005;
      </span>
    </div>
  );
};

export default Alert;
