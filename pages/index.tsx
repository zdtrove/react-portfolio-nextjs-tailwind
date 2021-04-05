// import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { motion } from 'framer-motion'
import { GetServerSidePropsContext } from 'next'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'


const About = ({ endpoint }) => {
    console.log(endpoint)
    return (
        <motion.div 
            variants={routeAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit"
            className='flex flex-col px-6 pt-1'
        >
            <h5 className="my-3 text-base font-medium">
                I am currently pursuing B.Tech Degree(Final Year) in Computer Science
                Engineering from Academy of Technology. I have 3+ years of experience in
                Web Development and I have a Youtube Channel where I teach Full Stack
                Web Development
            </h5>
            <div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                <h4 className="my-3 text-xl font-bold tracking-wide">what I Offer</h4>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="grid gap-6 my-3 lg:grid-cols-2">
                    {services.map((service, i) => (
                        <motion.div 
                            variants={fadeInUp}
                            key={i} 
                            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // calculation
    // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
    // const data = await res.json()
    // console.log(data)

    return {
        props: {
            endpoint: process.env.VERCEL_URL
        }
    }
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//     // calculation
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//     console.log('SERVER', services)

//     return {
//         props: {
//             services: data.services
//         }
//     }
// }