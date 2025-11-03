import { Element } from "react-scroll"

function Services() {
  return (
    <Element name="services" className='bg-slate-100 w-full py-3 lg:py-5'>
        <h1 className='text-center font-alice text-4xl lg:text-6xl'>Services</h1>
        <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 lg:gap-14 mt-8 lg:mt-15 pb-10 lg:pb-20'>
            {
                items.map(item => (
                    <Card title={item.title} subTitle={item.subTitle} icon={item.icon} />
                ))
            }
        </div>
    </Element>
  )
}

function Card({icon, title, subTitle}) {
    return (
        <div className='bg-[#393a3f] p-1 rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl w-7/8 lg:w-3/7 h-fit lg:h-50 relative flex'>
            <div className="bg-white rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl w-2/5 shrink-0 overflow-hidden">
                <img src={icon} alt="" srcset="" className="h-full w-full object-contain" />
            </div>
            <div className="p-2 lg:p-5">
                <h3 className="font-alice text-xl lg:text-3xl text-amber-400 pb-1 lg:pb-3">{title}</h3>
                <h4 className=" text-white">{subTitle}</h4>
            </div>
        </div>
    )
}

const items = [
    {
        icon: "/portfolio/infographic.png",
        title: "Infographic Design",
        subTitle: "Simplifying information into visuals"
    },
    {
        icon: "//portfoliocarousel.png",
        title: "Carousel Design",
        subTitle: "Creating engaging multi-slide"
    },
    {
        icon: "/portfolio/social media.png",
        title: "Social Media Graphics",
        subTitle: "Designing attractive posts"
    },
    {
        icon: "/portfolio/content research.png",
        title: "Content Research & Creation",
        subTitle: "Researching and writing content as needed"
    },
]

export default Services