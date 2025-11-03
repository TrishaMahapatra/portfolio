import React from 'react'
import { TiTick } from "react-icons/ti";
import { FaDotCircle } from "react-icons/fa";
import { Element } from 'react-scroll';

function About() {
  return (
    <Element name='about' className='bg-amber-100 w-full py-3 lg:py-5'>
        <h1 className='text-center font-alice text-4xl lg:text-6xl'>About me</h1>
        <div className='flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-14 mt-8 lg:mt-15 pb-10 lg:pb-20'>
            <Card title={"Education"}>
                {
                    educations.map((education, index) => (
                        <EducationItems key={index} course={education.course} university={education.university} year={education.year} />
                    ))
                }
            </Card>
            <Card title={"Skills"}>
                {
                    skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))
                }
            </Card>
            <Card title={"Experience"}>
                {
                    experiences.map((experience, index) => (
                        <EducationItems key={index} course={experience.title} university={experience.company} year={experience.year} />
                    ))
                }
            </Card>
        </div>
    </Element>
  )
}

function Card({children, title}) {
    return (
        <div className='bg-amber-400 p-4 pt-10 lg:pt-15 rounded-lg w-72 relative'>
            <div className=' bg-[#393a3f] w-3/4 p-2 lg:p-3 rounded-lg text-xl lg:text-2xl font-bold text-white absolute -top-1 -rotate-6 lg:-rotate-8 flex items-center gap-2'>
                <FaDotCircle size={16} />
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}

function EducationItems({course, university, year}) {
    return (
        <div className='flex mt-5'>
            <div className='mt-1'>
                <TiTick size={24} />
            </div>
            <div>
                <h3 className='font-alice text-xl underline'>{course}</h3>
                <p className='font-alice text-lg'>{university}</p>
                <p className='font-alice '>{year}</p>
            </div>
        </div>
    )
}

function Skill({ skill }) {
    return (
        <div className='flex mt-5'>
            <div className='mt-1'>
                <TiTick size={24} />
            </div>
            <div>
                <h3 className='font-alice text-xl'>{skill}</h3>
            </div>
        </div>
    )
}

const educations = [
    {
        course: "Master of English",
        university: "Vidyasagar University",
        year: "2011-2013",
    },
    {
        course: "Bachelor of English",
        university: "Calcutta University",
        year: "2008-2011",
    },
    {
        course: "Post Graduate Diploma In MassCommunication",
        university: "Jadavpur University",
        year: "2012 - 2013",
    },
]

const skills = [
    'Infographic Creation',
    'Carousel Design',
    'Social Media Graphics',
    'Content Research & Writing'
]

const experiences = [
    {
        title: "Freelance content creator",
        company: "BlueHorse Software",
        year: "April ‘24 - February ‘ 25"
    }
]

export default About