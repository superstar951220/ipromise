import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ipromise Members",
  description: "This is member's page",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Ipromise Members"
        description="Honored to work alongside such talented and passionate individuals at Ipromise. Every day, we're pushing the boundaries of what's possible in the digital world."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>         
        </div>
      </section>
    </>
  );
};

export default Blog;
