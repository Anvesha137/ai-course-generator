import React from 'react'
import Image from 'next/image';
// import { Button } from '@/components/ui/button';

const Header = () => {
return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
            <Image src={'/sLOGO.png'} alt="Logo" width={150} height={150} />
            {/* <Button style={{ backgroundColor: 'oklch(45.7% .24 277.023)', color: 'white' }}>Get Started</Button> */}
    </div>
)   
}

export default Header;