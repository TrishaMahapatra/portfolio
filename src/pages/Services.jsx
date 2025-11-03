import { Element } from "react-scroll"

function Services() {
  return (
    <Element name="services" className='bg-slate-100 w-full py-5'>
        <h1 className='text-center font-alice text-6xl'>Services</h1>
        <div className='flex flex-wrap justify-center gap-14 mt-15 pb-20'>
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
        <div className='bg-[#393a3f] p-1 rounded-tl-3xl rounded-br-3xl w-3/7 h-50 relative flex'>
            <div className="bg-white rounded-tl-3xl rounded-br-3xl w-2/5 h-full shrink-0 overflow-hidden">
                <img src={icon} alt="" srcset="" className="h-full w-full object-contain" />
            </div>
            <div className="p-5">
                <h3 className="font-alice text-3xl text-amber-400 pb-3">{title}</h3>
                <h4 className=" text-white">{subTitle}</h4>
            </div>
        </div>
    )
}

const items = [
    {
        icon: "/infographic.png",
        title: "Infographic Design",
        subTitle: "Simplifying information into visuals"
    },
    {
        icon: "/carousel.png",
        title: "Carousel Design",
        subTitle: "Creating engaging multi-slide"
    },
    {
        icon: "/social media.png",
        title: "Social Media Graphics",
        subTitle: "Designing attractive posts"
    },
    {
        icon: "/content research.png",
        title: "Content Research & Creation",
        subTitle: "Researching and writing content as needed"
    },
]

export default Services