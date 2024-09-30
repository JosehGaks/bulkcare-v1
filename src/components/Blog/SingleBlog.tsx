"use client";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  return (
    <div className="max-w-xs w-full group/card">
      <Link
      href={`/blogs/${slug}`}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        )}
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-70"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt={title!}
            src={coverImage!}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Josegaks
            </p>
            <p className="text-sm text-gray-400">{format(new Date(date), "dd MMM yyyy")}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          {excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleBlog;


