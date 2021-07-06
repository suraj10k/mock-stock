import React from 'react';

const PurchaseOverviewSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 pt-12">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">
            Loading your investments...
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default PurchaseOverviewSkeleton;