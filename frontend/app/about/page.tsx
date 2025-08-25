export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">About Freight Fleet</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">We’re a Brisbane‑based operator focused on predictable, professional support for enterprise freight teams. Our promise: competitive, compliant, on‑time.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Safety first</h3>
          <p className="mt-2">NHVR and CoR compliance, fatigue management, site inductions and PPE as required.</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Operators who care</h3>
          <p className="mt-2">Experienced dispatch and drivers who understand the realities on the ground.</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Clear communication</h3>
          <p className="mt-2">No surprises. We keep you informed and escalate early if windows are at risk.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="font-semibold">Our story</h3>
        <ul className="mt-3 text-sm space-y-2">
          <li><span className="font-medium">2022:</span> Launched in Brisbane servicing SEQ corridors.</li>
          <li><span className="font-medium">2023:</span> Expanded fleet and added NSW/VIC lanes.</li>
          <li><span className="font-medium">2024:</span> Introduced live tracking and improved reporting.</li>
        </ul>
      </div>
    </div>
  );
}
