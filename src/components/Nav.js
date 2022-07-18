import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <div className="w-full flex px-16 bg-gray-300 text-gray-800 justify-between b-white border-opacity-5 z-100 sticky">
            <div className="flex text-3xl tracking-widest mt-4">
                <img src="./deniz-logo.png" className="flex h-24"></img>
                {/* <span class="absolute z-100 left-7 top-8">Deniz Amado</span> */}
            </div>
            <div className="flex space-x-12 text-xl py-8">
                <Link to='/#experience' className="hover:text-red-400 hover:scale-110">Experience</Link>
                <Link to='/#skills' className="hover:text-red-400 hover:scale-110">Skills</Link>
                <Link to='/#about' className="hover:text-red-400 hover:scale-110">About</Link>
            </div>
        </div>
    )
}
export default Nav
