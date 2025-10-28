import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white" />
    </div>
  );
}
