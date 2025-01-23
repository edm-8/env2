import Image from 'next/image'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: "Revolutionizing Data Integrity in Pharma Manufacturing",
    description: "How we helped a leading pharmaceutical company implement a state-of-the-art data integrity system, reducing compliance risks by 87% and improving operational efficiency by 35%.",
    image: "/placeholder.svg"
  },
  {
    title: "Streamlining GMP Compliance for a Biotech Startup",
    description: "Our tailored GMP compliance strategy enabled a cutting-edge biotech firm to achieve regulatory approval 6 months ahead of schedule, accelerating their time-to-market.",
    image: "/placeholder.svg"
  },
  {
    title: "Transforming Quality Management in Medical Devices",
    description: "By implementing an AI-driven quality management system, we helped a medical device manufacturer reduce quality incidents by 62% and cut audit preparation time by 75%.",
    image: "/placeholder.svg"
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-primary text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-primary-dark rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{study.title}</h2>
                <p className="text-white/80 mb-4">{study.description}</p>
                <button className="text-secondary hover:text-accent transition-colors">
                  Read Full Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

