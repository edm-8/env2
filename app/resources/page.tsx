import { motion } from 'framer-motion'
import { Book, FileText, Video, Download } from 'lucide-react'

const resources = [
  {
    title: "GMP Compliance Guide",
    description: "Comprehensive guide to understanding and implementing Good Manufacturing Practices.",
    icon: Book,
    link: "#"
  },
  {
    title: "Data Integrity Whitepaper",
    description: "In-depth analysis of data integrity challenges and solutions in regulated industries.",
    icon: FileText,
    link: "#"
  },
  {
    title: "Compliance Webinar Series",
    description: "Expert-led webinars covering the latest trends and best practices in regulatory compliance.",
    icon: Video,
    link: "#"
  },
  {
    title: "Validation Templates",
    description: "Downloadable templates to streamline your validation processes and documentation.",
    icon: Download,
    link: "#"
  }
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-primary text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resources
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-primary-dark rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <resource.icon className="w-8 h-8 mr-4 text-secondary" />
                <h2 className="text-xl font-semibold">{resource.title}</h2>
              </div>
              <p className="text-white/80 mb-4">{resource.description}</p>
              <a 
                href={resource.link}
                className="text-secondary hover:text-accent transition-colors inline-flex items-center"
              >
                Access Resource
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

