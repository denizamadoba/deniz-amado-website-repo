const IntroStripe = () => {
    return (
        <div id="intro" className="w-full flex pb-12 md:py-12 md:px-56 md:py-40 bg-gradient-to-b from-gray-300 to-red-100 text-gray-800 justify-center flex-col space-y-12">
             <div className="text-3xl tracking-widest flex mx-auto md:hidden">
                <img src="./deniz-logo.png" className="flex h-16" alt="logo"></img>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                <img src="./deniz-professional-2022.jpg" className="w-48 md:w-96 rounded-lg mx-auto" alt="portrait"></img>
                <div className="text-2xl leading-normal text-center md:text-left">Hello! I'm <span className="text-red-400 text-3xl">Deniz Amado</span>, a Full-Stack Software Engineer based in New York City. Below, you can read about my skills, education, and experience.
                </div>
            </div>
        </div>
    )
}
export default IntroStripe