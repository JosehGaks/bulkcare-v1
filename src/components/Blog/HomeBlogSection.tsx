import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="py-20 bg-transparent lg:py-20 relative">
            <img
        className="absolute inset-x-0 -top-20 opacity-25 "
        src={
          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
        }
        width={1000}
        height={1000}
        alt="back bg"
      />
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
