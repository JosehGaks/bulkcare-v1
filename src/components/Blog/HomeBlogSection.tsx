import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle title={"Blog"} subtitle="Our Latest News" paragraph={""}/>

        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 4).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
