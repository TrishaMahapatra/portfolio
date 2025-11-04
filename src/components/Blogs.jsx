import React from 'react'
import { Element } from 'react-scroll'
import AdvImage from './AdvImage'

function Blogs() {
  return (
    <Element name='blogs' className='h-full w-full p-2 lg:p-4 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-2 lg:gap-4'>
      {
        data.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))
      }
    </Element>
  )
}

const Card = ({blog}) => {
  return (
    <div className='rounded-2xl p-2 ${blog.colorLight} shadow-2xl overflow-hidden h-fit lg:h-auto w-9/10 lg:w-auto mx-auto lg:mx-0' style={{backgroundColor: blog.coloLight}}>
      <a href={blog.link} target='_blank' className='lg:pointer-events-none'>
        <AdvImage name={blog.image} className='rounded-2xl lg:rounded-t-2xl' />
      </a>
      <div className='p-2 mt-2 hidden lg:block'>
        <h2 className='font-alice text-2xl mb-2' style={{color: blog.colorDark}}>{blog.title}</h2>
        <a href={blog.link} target='_blank' className='font-alice text-lg hover:underline' style={{color: blog.colorDark}}>{blog.link}</a>
      </div>
    </div>
  )
}

const data = [
  {
    image: "blog-1",
    coloLight: "rgba(105,157,98,0.3)",
    colorDark: "rgba(105,157,98,1)",
    title: "Stop Waiting for Investors: How Vikas Suri Built Popcorn & Co. with Just ₹6,000",
    link: 'https://d2cstories.com/stories/stop-waiting-for-investors-how-vikas-suri-built-popcorn--co-with-just-6000'
  },
  {
    image: "blog-2",
    coloLight: "rgba(8,15,138,.1)",
    colorDark: "rgba(8,15,138,1)",
    title: "Thomas Cook Is on Blinkit — But Should Your Product Be On a Quick Commerce Platform?",
    link: "https://d2cstories.com/stories/thomas-cook-is-on-blinkit--but-should-your-product-be-on-a-quick-commerce-platform"
  },
  {
    image: "blog-3",
    coloLight: "rgba(1,1,10,.1)",
    colorDark: "rgba(1,1,10,1)",
    title: "The Future of Shopping: How ChatGPT and PayPal Are Redefining eCommerce with Agentic Commerce Protocol (ACP)",
    link: 'https://d2cstories.com/stories/the-future-of-shopping-how-chatgpt-and-paypal-are-redefining-ecommerce-with-agentic-commerce-protocol-acp'
  },
]

export default Blogs