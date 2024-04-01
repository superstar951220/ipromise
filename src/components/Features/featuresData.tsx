import { Feature } from "@/types/feature";
import Image from 'next/image'

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/website.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "Web systems",
    paragraph:
      "Responsive Web Design, Cloud Computing, Microservices Architecture, Search Engine Optimization (SEO), Analytics and Reporting features.",
  },
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/mobile.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "Mobile Apps",
    paragraph:
      "Cloud-Based Services, Augmented Reality (AR) and Virtual Reality (VR), Mobile Payment Integration, Push Notifications and In-App Messaging, Mobile Security Measures.",
  },
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/ecommerce.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "E-commerce Platform",
    paragraph:
      "Product Information Management (PIM), Omni-channel Retailing, Payment Gateway Integration, Inventory Management Systems.",
  },
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/video.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "Video conference",
    paragraph:
      "Content Delivery Networks (CDNs), Digital Rights Management (DRM), Video Analytics and Insights, Multi-Platform Support.",
  },
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/ai.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "AI and machine learning",
    paragraph:
      "Enabling to unlock valuable insights from data, automate repetitive tasks, improve decision-making processes, and deliver personalized experiences to customers.",
  },
  {
    id: 1,
    icon: (
      <Image className="w-16 h-16" src="/images/features/cloud_backup_restore.svg" width={540} height={405} alt="Web systems" />
    ),
    title: "Cloud Service platform",
    paragraph:
      "Maximize reach, optimize costs, enhance participant experience, and stay ahead in a rapidly evolving business landscape.",
  },
];
export default featuresData;
