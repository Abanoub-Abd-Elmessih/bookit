export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-black"></div>
    </div>
  );
}
