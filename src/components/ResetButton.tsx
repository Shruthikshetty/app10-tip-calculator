export default function ResetButton({onReset}:ResetButtonProps) {
  return (
    <button
      type="button"
      className="bg-gray-700 px-4 rounded-lg transition hover:bg-gray-600 "
      onClick={onReset}
    >
      reset
    </button>
  );
}

type ResetButtonProps ={
  onReset : ()=> void
}
