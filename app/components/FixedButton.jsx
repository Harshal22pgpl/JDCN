// components/FixedButtons.js

import Link from "next/link";

const FixedButtons = () => {
  return (
    <div className="fixed bottom-4  flex flex-col animate-pulse gap-4">
      <Link href="/contact">
        <button
          href="#_"
          class="relative px-5 py-2 font-medium text-white group"
        >
          <span class="absolute inset-0 max-w-full max-h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-400 group-hover:bg-green-300 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 max-w-full max-h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-500 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
          <span class="absolute bottom-0 left-0 hidden max-w-10 max-h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden max-w-10 max-max-h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span class="relative"> Contact Support</span>
        </button>
      </Link>
      <Link href="/admissions">
        <button
          href="#_"
          class="relative px-5 py-2 font-medium text-white group"
        >
          <span class="absolute inset-0 max-w-full max-h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-400 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 max-w-full max-h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-500 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span class="absolute bottom-0 left-0 hidden max-w-10 max-h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden max-w-10 max-h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span class="relative"> Admission Enquiry</span>
        </button>
      </Link>
    </div>
  );
};

export default FixedButtons;
