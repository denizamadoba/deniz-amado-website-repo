const IntroStripe = () => {
    return (
        <div id="intro" className="w-full flex px-56 py-40 bg-gradient-to-b from-gray-300 to-red-100 text-gray-800 justify-center flex-col space-y-12">
            <div className="flex flex-row items-center space-x-8">
                <img src="./deniz-professional-2022.jpg" className="w-96 rounded-lg mx-auto" alt="portrait"></img>
                <div className="text-2xl leading-normal text-left">Hello! I'm <span className="text-red-400 text-3xl">Deniz Amado</span>, a Full-Stack Software Engineer based in New York City. Below, you can read about my skills, education, and experience.
                </div>
            </div>
        </div>
    )
}
export default IntroStripe