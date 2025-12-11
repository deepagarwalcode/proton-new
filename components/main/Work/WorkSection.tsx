import React from 'react'
import WorkCard from './WorkCard'
import SectionHeader from '../General/SectionHeader'
import FromUp from '../General/motion/FromUp'

const WorkSection = () => {
    const featuredWorks = [
        // {
        //     title: "AuditCue",
        //     subtitle: "$1.5M raised in funding",
        //     videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
        //     testimonial: "The new design perfectly captures our brand essence and resonates with our target audience.",
        //     authorName: "Gaurav Kulkarni",
        //     authorTitle: "Co-founder & CEO, AuditCue",
        //     authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        // },
        // {
        //     title: "AuditCue",
        //     subtitle: "$1.5M raised in funding",
        //     videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
        //     testimonial: "The new design perfectly captures our brand essence and resonates with our target audience.",
        //     authorName: "Gaurav Kulkarni",
        //     authorTitle: "Co-founder & CEO, AuditCue",
        //     authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        // },

          {
            title: "GrowthQuest",
            bgColor: "#1A4C95",
            subtitle: "$5M+ in client revenue",
            image: "/hero/gq.png",
            authorAvatar: "/dps/ammeil.png",
            authorName: "Ammeil Ali",
            testimonialText: "It was an amazing experience working with Deep, the attention that he gives was unparalleled.",

            authorTitle: "Founder, GrowthQuest",
            testimonialUrl: "https://fast.wistia.net/embed/iframe/qw43qj4tce",
            ctaLink: "https://www.growthquest.io"
          },
          {
            title: "Leveraged Outbound",
            bgColor: "#B23992",
            subtitle: "$1M+ in client revenue",
            image: "/hero/lo.png",
            authorAvatar: "/dps/papa.png",
            authorName: "Papa A. Sefa",
            testimonialText: "Deep himself I think probably doesn't sleep, he is extremely extremely responsive.",
            authorTitle: "Founder, Leveraged Outbound",
            testimonialUrl: "https://fast.wistia.net/embed/iframe/m85k7ggbjm",
            ctaLink: "https://www.leveragedoutbound.io"
          },
          {
            title: "Grow Surely",
            bgColor: "#9C83FE",
            subtitle: "$3M+ in client revenue",
            image: "/hero/gs.png",
            authorAvatar: "/dps/adam.png",
            testimonialText: "Communication was super easy and the website looks exactly as we planned it.",
            authorName: "Adam Rahmouni",
            authorTitle: "Co-founder, Grow Surely",
            testimonialUrl: "https://fast.wistia.net/embed/iframe/o4ig34egoz",
            ctaLink: "https://www.growsurely.com"
          },
          {
            title: "TAM To Target",
            bgColor: "#1F2129",
            subtitle: "$3.1M+ sales pipeline generated",
            image: "/hero/tam.png",
            authorAvatar: "/dps/bobby.png",
            authorName: "Bobby Offterdinger",
            testimonialText: "Deep and his team at Proton have done a phenomenal job working on our website.",
            authorTitle: "Founder, TAM To Target",
            testimonialUrl: "https://fast.wistia.net/embed/iframe/g267oaf2d5",
            ctaLink: "https://www.tamtotarget.com"
          },
    ]
  return (
    <div id="case-studies" className='py-20 px-4'>
        <div className='flex justify-center mb-12'>
          <FromUp>
            <SectionHeader tag="Our Work" title="Case Studies" />
          </FromUp>
        </div>
        <div className='flex flex-col gap-0'>
          {featuredWorks.map((work, idx) => (
            <FromUp delay={idx * 0.07} key={work.title}>
              <WorkCard {...work} authorAvatar={work.authorAvatar} ctaText={"View Website"} />
            </FromUp>
          ))}
        </div>
    </div>
  )
}

export default WorkSection