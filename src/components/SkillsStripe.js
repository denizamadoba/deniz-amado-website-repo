import StripeTitle from './StripeTitle'

const SkillsStripe = () => {
    return (
        <div id="skills" className="z-0 w-full flex flex-col p-4 bg-gradient-to-b from-gray-300 to-red-100 text-gray-800 tracking-widest">
            {<StripeTitle title="Skills"/>}
            <div class="flex flex-col md:flex-row w-full md:space-x-8 my-16 justify-center">
                <div class="pinkShadow flex flex-col bg-white md:w-96 rounded-lg md:px-8 pt-12 pb-16 mt-4 text-center">
                    <span class="mb-4 underline italic text-xl">Programming Languages</span>
                    <ul class="space-y-4">
                       
                        <li>
                            Ruby
                        </li>
                        <li>
                            PHP
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            Java
                        </li>
                        <li>
                            Processing
                        </li>
                        <li>
                            Scheme
                        </li>
                    </ul>
                </div>
                <div class="pinkShadow flex flex-col bg-white md:w-96 rounded-lg md:px-8 pt-12 pb-4 mt-4 text-center"> 
                    <span class="mb-4 underline italic text-xl">Frameworks and Tools</span>
                    <ul class="space-y-4">
                        <li>
                            Ruby on Rails
                        </li>
                        <li>
                            Laravel
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Ember.js
                        </li>
                        <li>
                            Github
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            AWS
                        </li>
                        <li>
                            Docker
                        </li>
                        <li>
                            Jenkins
                        </li>
                        <li>
                            Jira
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SkillsStripe