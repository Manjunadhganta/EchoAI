import { useNavigate } from 'react-router-dom'
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { UserButton, useClerk, useUser} from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useUser();
    const { openSignIn } = useClerk();


  return (
    <div 
        className='fixed z-5 backdrop-blur-2xl w-full px-4 py-3 flex justify-between items-center sm:px-20 xl:px-32 cursor-pointer'>
        
        {/* <img 
            src={assets.logo} alt="logo"
            className='w-32 sm:w-44'
            onClick={()=> navigate('/')}
        /> */}

        <h1 
        className='flex items-center gap-2 text-3xl font-semibold text-primary' onClick={()=> navigate('/')}>
            <BrainCircuit className='w-8 h-8'/> Echo.ai
        </h1>        

        {
            user ? <UserButton /> 
            : 
            (
                <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4'/></button>
            )
        }
    </div>
  )
}

export default Navbar
