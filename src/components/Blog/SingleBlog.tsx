"use client";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronsRight } from "lucide-react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  return (
    <>
      <div className="relative mt-4  group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-50 rounded-md  overflow-hidden">
          <Image
            src={
              coverImage!
            }
            alt={title!}
            width={500}
            height={500}
            className="h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <div className="p-4 space-y-1  transition-all duration-300 ">
          <span className="text-sm">{format(new Date(date), 'MMMM dd, yyyy')}</span>
          <h1 className="text-lg font-medium capitalize ">
            {title}
          </h1>
          <Link
            href={`/blogs/${slug}`}
            className="bg-primary w-fit text-base dark:text-black rounded-md text-white font-normal p-2 flex justify-center "
          >
            Read Story
            <span className="relative">
              <ChevronRight className="group-hover:opacity-0 opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300 " />
              <ChevronsRight className="absolute top-0 group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 " />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;


