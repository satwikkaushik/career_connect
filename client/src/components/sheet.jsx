import * as React from "react";
import { cn } from "../../lib/utils";

export function Sheet({ open, onOpenChange, children }) {
  return open ? (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex">
      <div className="w-64 bg-gray-900 p-4">{children}</div>
      <div className="flex-1" onClick={() => onOpenChange(false)} />
    </div>
  ) : null;
}
