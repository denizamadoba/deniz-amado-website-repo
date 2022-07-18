import { useState } from "react";
import "./../index.css";
import "./../css/Modal.css";
import ExperienceModal from './ExperienceModal'
import StripeTitle from './StripeTitle'

const ExperienceStripe = () => {
    const [isOpenMashable, setIsOpenMashable] = useState(false);
    const [isOpenBa, setIsOpenBa] = useState(false);
    const [isOpenTeamgram, setIsOpenTeamgram] = useState(false);
    const [isOpenInfoera, setIsOpenInfoera] = useState(false);
    const [isOpenBrandeis, setIsOpenBrandeis] = useState(false);
    const MashableContent = <p>
        I am currently working as a Full-Stack Software Engineer at ZiffMedia, in the Mashable team. I recently worked on the rebuild of <a href="https://mashable.com" class="text-red-400">mashable.com </a> 
         and the in-house Content Management System with a new technology stack and design. We migrated the site from Ruby on Rails to a Laravel PHP platform.
        With the new platform, we got rid of tech debt, highly increased the performance of the site, optimized our search engine visibility, made the site ADA compliant, and created a better user experience for both the site users and our CMS editors.
        <h2 class="italic mt-4">Below are some more projects I worked on at Mashable:</h2>

        <ul class="list-disc max-w-md mx-auto mt-4">
            <li>Worked on streamlining third party distributions of articles to Google AMP, Apple News and RSS Feeds</li>
            <li>Improved performance on the old Mashable site, by serving WebP images and lazy loading all media</li>
            <li>Developed a new commerce article type which pulls deals from the company’s other sites to automate the deals article process, added interface to retrieve coupon codes on deals articles</li>
            <li>Created series hub pages for live streaming events during COVID-19, ex: the Social Good Series which raise awareness on different social issues every month</li>
            <li>Worked on sponsored site takeovers and advertisement placements on the site</li>
            <li>Implemented personalized recommendation systems for articles and videos</li>
            <li>Worked with the Search Engine Optimization team to optimize the site rankings on Google by writing code to convert the content into Google’s Accelerated Mobile Pages format, by creating sitemaps and structured data for the platform</li>
            <li>Received a company award for being a fast, efficient and high quality developer and having a positive approach on projects.</li>
        </ul>
    </p>;
    const BAContent = <p>
        I worked at Blue Apron first as a Software Engineering Intern then as a Junior Software Engineer. As part of the Platform Team, I worked on the development of the in-house Warehouse Management System software, building features to increase the efficiency of the warehouse operations using Ruby on Rails, Ember.js, PostgreSQL, HTML, CSS and JavaScript.
        I added features for the warehouse employees to conduct filtered searches for inventory and to request and record counts of each product to ensure production efficiency and accuracy.
    </p>;
    const BrandeisContent = <p>
        I got my Bachelor of Science degree from Brandeis University in 2018. I studied Computer Science and Economics. I took exciting courses on web development, software entrepreneurship, mobile application development and user experience design.
        
        <div class="px-8 text-left mb-4">
            <h1>RELEVANT COURSES</h1>						
            <ul class="list-disc">
                <li>Capstone Project for Software Engineering</li>
                <li>Fundamentals of Web Technology</li>
                <li>Foundations of Data Science and Analytics</li>
                <li>Mobile Application Development</li>
                <li>Advanced Programming Techniques</li>
                <li>Software Entrepreneurship </li>
                <li>Operating Systems</li>
                <li>Data Structures and Fundamentals of Computing</li>
                <li>Development Applied Statistical Computing in R </li>
                <li>Programming in Java and C</li>
            </ul>
        </div>
      
        <div class="px-8 mx-auto text-left">
            <h1>PROJECTS</h1>
            <ul class="list-disc">
                <li>
                    <h2 class="underline"> FollowTheMusic - Capstone Project for Software Engineering</h2>
                    <ul>
                        <li>
                            A tool to help people people schedule and find spontaneous jam sessions happening nearby.
                        </li>
                        <li>
                            With a group of 4 students, we’ve developed this web application in Ruby on Rails, using ActiveRecord, the Google Maps API, AWS S3,
                        Paperclip, Ultimate Guitar API and other tools. https://github.com/follow-the-music/web-app  
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="underline">
                        PlanIt
                    </h2>
                    <ul>
                        <li>
                            Formed a team, came up with and developed the product and its business model by testing and researching on the user experience and market size using the validated learning processes of the Lean Startup Technique, as part of a Software Entrepreneurship class.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="underline">
                    Priority Messenger
                    </h2>
                    <ul>
                        <li>
                            A mobile Android messenger application which allows individuals to specify the urgency of messages they are sending and for recipients to
                            filter the messages and set the types of notifications they are receiving by urgency.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
    </p>;
    const InfoeraContent = <p>
        In the summer of 2015, I worked as a Software Development Intern at InfoEra, a software solutions company in Izmir, Turkey. I worked on developing a web application that keeps track of health and sanitary information of cattle to be used in a group of cattle farms. Took part in the needs analysis, design and development of the product.
        Developed in C# and used MS SQL Database Server, ASP.NET and the .NET Framework technologies. 
    </p>
    const TeamgramContent = <p>
        I worked as a Web Application Development Intern at Teamgram, an innovative CRM company in Istanbul, Turkey, in 2016. During my time there, I added the functionality to tag products, tasks and companies in feed posts; added filtering functionality to the tasks search using CSS, HTML, JavaScript, on the ASP.NET MVC Framework.
        I built and maintained SQL scripts, indexes, and queries for data storage and extraction in LocalDB, SQL Server.
    </p>
    return (
        <div id="experience" className="w-full flex flex-col md:px-4 py-8 bg-gradient-to-t from-gray-300 to-red-100 text-white">
            {<StripeTitle title="Experience"/>}
            <div className="flex flex-col mx-auto space-y-8 md:space-y-0 md:mx-0 md:flex-row md:space-x-8 md:h-48 justify-center my-16 text-gray-800 tracking-widest">
                    <div className="flex flex-col group w-48">
                        <button className="primaryBtn mx-auto" onClick={() => setIsOpenMashable(true)}>
                            <img src="./Mashable.png" alt="mashable-logo" className="rounded-lg"></img>
                        </button>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">MASHABLE</span>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">DEC 2018 - NOW</span>
                    </div>
                    <div className="flex flex-col group w-48">
                        <button className="primaryBtn rounded-lg mx-auto" onClick={() => setIsOpenBa(true)}>
                            <img src="./blueapronlogo.png" alt="blueapron-logo" className="rounded-lg"></img>
                        </button>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">BLUE APRON</span>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">JULY 2018 - DEC 2018</span>
                    </div>
                    <div className="flex flex-col group w-48">
                        <button className="primaryBtn rounded-lg mx-auto" onClick={() => setIsOpenTeamgram(true)}>
                                <img src="./teamgram-logo.png" alt="teamgram-logo" className="rounded-lg"></img>
                        </button>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">TEAMGRAM AT PHONOCLICK</span>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">SUMMER 2016</span>
                    </div>
                    <div className="flex flex-col group">
                        <button className="primaryBtn bg-black rounded-lg w-48" onClick={() => setIsOpenInfoera(true)}>
                            <div className="h-48 flex items-center">
                                <img src="./infoera-logo.png" alt="infoera-logo" className="w-28 mx-auto"></img>
                            </div>
                        </button>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">INFOERA SOFTWARE</span>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">SUMMER 2015</span>
                    </div>
                    <div className="flex flex-col group w-48">
                        <button className="primaryBtn mx-auto" onClick={() => setIsOpenBrandeis(true)}>
                            <img src="./brandeis-logo.png" alt="brandeis-logo" className="rounded-lg"></img>
                        </button>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">BRANDEIS UNIVERSITY</span>
                        <span className="text-center mx-auto mt-2 hidden group-hover:block">2014 - 2018</span>
                    </div>
            </div>

            {isOpenMashable && <ExperienceModal setIsOpen={setIsOpenMashable} title="Mashable" text={MashableContent}/>}
            {isOpenBa && <ExperienceModal setIsOpen={setIsOpenBa} title="Blue Apron" text={BAContent}/>}
            {isOpenTeamgram && <ExperienceModal setIsOpen={setIsOpenTeamgram}  title="TeamGram" text={TeamgramContent}/>}
            {isOpenInfoera && <ExperienceModal setIsOpen={setIsOpenInfoera} title="InfoEra" text={InfoeraContent}/>}
            {isOpenBrandeis && <ExperienceModal setIsOpen={setIsOpenBrandeis} title="Brandeis" text={BrandeisContent} />}
        </div>
    )
}
export default ExperienceStripe