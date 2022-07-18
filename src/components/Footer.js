import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="w-full flex md:px-16 py-8 bg-gray-300 text-gray-800 text-3xl md:text-xl">
            <div className="flex flex-col md:flex-row w-full justify-between text-center md:text-left">
                <span>Deniz Amado</span>
                
                <div className="flex flex-col space-y-4 mt-8 md:mt-0 md:flex-row md:space-y-0 md:space-x-12">
                    <Link to='/#experience'>Experience</Link>
                    <Link to='/#skills'>Skills</Link>
                    <Link to='/#about'>About</Link>
                    <a href="https://www.linkedin.com/in/denizamado/" className="mx-auto md:mx-0">
                            <img src="./linkedin.png" className="w-10 h-10 md:w-6 md:h-6" alt="linkedin-logo"></img>
                    </a>
                    <a href="https://github.com/denizamadoba" className="mx-auto md:mx-0">
                        <img src="./github.png" className="w-10 h-10 md:w-6 md:h-6" alt="github-logo"></img>
                    </a>
                   
                </div>
            </div>
        </div>
    )
}
export default Footer