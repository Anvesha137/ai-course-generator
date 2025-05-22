import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex">
    {/* Left Side - Image */}
    <div className="hidden md:block md:w-1/2 lg:w-3/5 relative">
      <Image src='/knowledge.png' width={1000} height={1000}  />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Optional text overlay */}
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h2 className="text-4xl font-bold mb-2">KnowVal</h2>
        <p className="text-xl">MiileStone 1 </p>
      </div>
    </div>

    {/* Right Side - SignIn Form */}
    <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <SignIn /> {/* Your existing component */}
      </div>
    </div>
  </div>
);
}