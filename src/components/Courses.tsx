'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('courses')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const featuredCourses = [
    {
      title: "Global Real Estate Investment Masterclass",
      instructor: "Dr. Stephen Akintayo",
      duration: "Multi-module course",
      price: "$50 per module",
      description: "Comprehensive real estate investment strategies across global markets including Nigeria, London, United States, and Dubai.",
      category: "Real Estate",
      image: "/images/stephen.png",
      rating: 4.8,
      students: "1,000+",
      external: true,
      url: "https://stephenakintayouniversity.com/"
    },
    {
      title: "How to Become a Millionaire Land Banker",
      instructor: "Dr. Stephen Akintayo",
      duration: "1:30 Hours",
      price: "$50",
      description: "The Mini Estate Masterclass - comprehensive program to navigate the lucrative world of land banking successfully.",
      category: "Land Banking",
      image: "/images/stephen.png",
      rating: 3.75,
      students: "500+",
      external: true,
      url: "https://stephenakintayouniversity.com/"
    },
    {
      title: "Billionaire Habits & Codes",
      instructor: "Dr. Stephen Akintayo",
      duration: "Self-paced",
      price: "Free",
      description: "Learn the mindset, goal-setting techniques, and time management skills that can elevate your personal and professional life.",
      category: "Entrepreneurship",
      image: "/images/stephen.png",
      rating: 4.5,
      students: "2,000+",
      external: true,
      url: "https://stephenakintayouniversity.com/"
    },
    {
      title: "Forex Trading Master Class",
      instructor: "Okunuga Oluwatobiloba",
      duration: "1:30 Hours",
      price: "$200",
      description: "Comprehensive forex training from mastering basics to advanced strategies and in-depth market analysis.",
      category: "Financial Market",
      image: "/images/stephen.png",
      rating: 4.0,
      students: "800+",
      external: true,
      url: "https://stephenakintayouniversity.com/"
    }
  ]

  return (
    <section id="courses" className="section-padding bg-light-blue">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-lg text-dark-blue mb-3 sm:mb-4">
            Featured Courses
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-3xl mx-auto px-4">
            Discover wealth-building strategies and investment mastery from Dr. Stephen Akintayo's 
            comprehensive course library at Stephen Akintayo University.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <Image 
                      src={course.image} 
                      alt={course.instructor}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-sky-blue text-white">
                        {course.category}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <i className="fas fa-star text-xs sm:text-sm"></i>
                        <span className="ml-1 text-xs sm:text-sm font-medium text-text-dark">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-dark-blue mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-text-dark mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-text-light mb-4">
                      <span className="flex items-center">
                        <i className="fas fa-user mr-1"></i>
                        <span className="hidden sm:inline">{course.instructor}</span>
                        <span className="sm:hidden">Dr. S. Akintayo</span>
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-users mr-1"></i>
                        {course.students}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                      <div className="text-xl sm:text-2xl font-bold text-dark-blue">
                        {course.price}
                      </div>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center w-full sm:w-auto justify-center"
                      >
                        <span>View Course</span>
                        <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Wealth Journey?
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              Join 1,033+ students who have already enrolled in Dr. Stephen Akintayo's courses 
              and are building their wealth through proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://stephenakintayouniversity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-dark-blue hover:bg-gray-100 flex items-center justify-center w-full sm:w-auto"
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Explore All Courses
                <i className="fas fa-external-link-alt ml-2 text-xs"></i>
              </a>
              <a
                href="https://stephenakintayouniversity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-blue flex items-center justify-center w-full sm:w-auto"
              >
                <i className="fas fa-crown mr-2"></i>
                Start Free Course
                <i className="fas fa-external-link-alt ml-2 text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 