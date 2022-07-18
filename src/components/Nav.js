import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <div className="w-full flex md:px-16 bg-gray-300 text-gray-800 justify-between b-white border-opacity-5 z-100 sticky">
            <div className="text-3xl tracking-widest mt-4 hidden md:flex">
                <img src="./deniz-logo.png" className="flex h-24" alt="logo"></img>
            </div>
            <div className="flex space-x-12 mx-auto text-2xl md:mx-0 md:text-xl py-8">
                <Link to='/#experience' className="hover:text-red-400 hover:scale-110">Experience</Link>
                <Link to='/#skills' className="hover:text-red-400 hover:scale-110">Skills</Link>
                <Link to='/#about' className="hover:text-red-400 hover:scale-110">About</Link>
            </div>
        </div>
    )
}
export default Nav
