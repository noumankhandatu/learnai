import type { Metadata } from "next";
import AssessmentForm from "@/components/assessment-form";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | LEARNAI",
  description: "Take our comprehensive AI training assessment designed for non-technical professionals.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <nav className="mb-12">
          <img src="/LEARNAI.png" alt="" className="w-full lg:w-[200px] " />
        </nav>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Career with AI</h2>
          <p className="text-gray-600 mb-6">
            Join our comprehensive AI training program designed for non-technical professionals. Gain the skills you need to thrive in the AI era.
          </p>
          <p className="text-blue-600 font-medium">Take Free Assessment</p>
        </div>

        <AssessmentForm />
      </div>
    </main>
  );
}
