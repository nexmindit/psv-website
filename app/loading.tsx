export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-[#D4AF37]"></div>
        <div className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">Loading...</div>
      </div>
    </div>
  );
}
