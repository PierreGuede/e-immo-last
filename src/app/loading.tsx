export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed inset-0 flex items-center justify-center z-[100] bg-white min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">Loading your content...</div>
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-dashed animate-spin" />
      </div>
    </div>
    )
  }