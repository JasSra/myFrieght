import React from 'react';

type Job = { id: string; reference: string; pickup: string; dropoff: string; status: string };

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">{job.reference}</h3>
        <span className="text-xs rounded bg-gray-100 dark:bg-gray-800 px-2 py-1">{job.status}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{job.pickup} → {job.dropoff}</p>
    </div>
  );
}
