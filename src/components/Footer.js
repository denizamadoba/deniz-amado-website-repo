import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="w-full flex px-16 py-8 bg-gray-300 text-gray-800 text-xl">
            <div className="flex w-full justify-between">
                <span>Deniz Amado</span>
                
                <div className="flex space-x-12">
                    <Link to='/#experience'>Experience</Link>
                    <Link to='/#skills'>Skills</Link>
                    <Link to='/#about'>About</Link>
                    <a href="https://www.linkedin.com/in/denizamado/">
                            <img src="./linkedin.png" width="25" height="25" alt="linkedin-logo"></img>
                    </a>
                    <a href="https://github.com/denizamadoba">
                        <img src="./github.png" width="25" height="25" alt="github-logo"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer