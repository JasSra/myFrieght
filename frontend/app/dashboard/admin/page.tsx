"use client";
import RoutePlanner from "../../../components/maps/RoutePlanner";

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin tools</h1>
      <div>
        <h2 className="text-lg font-medium">Google Maps route planner</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Plan lanes, check distance and ETA for quick quoting and scheduling.</p>
        <div className="mt-3">
          <RoutePlanner />
        </div>
      </div>
    </div>
  );
}
