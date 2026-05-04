const NoResult = ({ label, message }: { label: string; message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3  text-center font-grotesk text-2xl font-medium text-smoke-700 lg:col-span-8 lg:col-start-2 lg:h-96">
      <h4>There are no available {label} at the moment.</h4>
      {message ? <h4>{message}</h4> : null}
    </div>
  );
};

export default NoResult;
