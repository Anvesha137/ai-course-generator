import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex">
    {/* Left Side - Image */}
    <div className="hidden md:flex md:w-1/2 lg:w-3/5 items-center justify-center relative">
      <Image src='/LOGO.png' width={600} height={600}  />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Right Side - SignIn Form */}
    <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <SignIn className="w-full h-full" /> {/* Your existing component */}
      </div>
    </div>
  </div>
);
}