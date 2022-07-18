import StripeTitle from './StripeTitle'

const AboutStripe = () => {
    return (
        <div id="about" className="w-full flex flex-col py-4 md:px-56 bg-gradient-to-t from-gray-300 to-red-100 text-black leading-normal">
            {<StripeTitle title="About"/>}
            <p className="pinkShadow bg-red-200 rounded-lg p-8 mt-16 mb-16 md:mb-32 text-2xl leading-relaxed tracking-wide mx-4 md:mx-0">
                Throughout my education at Brandeis University and career as a Full-Stack Software Engineer in
                New York City, I worked towards building innovative products that create change in people’s lives by
                bringing them together. Whether it’s by cooking delicious food, collaborating for artistic creation, or
                having important conversations about women’s equality, the common thread for me has always been
                enabling human connection! I love creating user experiences and solving problems that have social and
                cultural impact.
            </p>
        </div>
    )
}
export default AboutStripe