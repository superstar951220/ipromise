import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ipromise",
  description: "This is Contact Page for Ipromise",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Ipromise"
        description="Thank you for your interest in Ipromise! We look forward to contact you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
