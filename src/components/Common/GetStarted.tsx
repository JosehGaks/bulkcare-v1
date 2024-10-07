import Link from 'next/link'
import React from 'react'

const GetStarted = () => {
  return (
    <Link
    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
    href="/contact"
  >
    Get Started
    <span className="ml-1 duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
  )
}

export default GetStarted