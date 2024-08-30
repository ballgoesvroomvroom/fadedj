"use client";

import { usePathname } from "next/navigation";
import { Context, createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import "./topbar.css"

import arrow_pointer from "@/public/icons/thick_arrow.svg"

export const INITIAL_TOPBAR_HT = 56

export const TopbarContext: Context<{topbarHt: number, setTopbarHt?: Dispatch<SetStateAction<number>>}> = createContext({ topbarHt: INITIAL_TOPBAR_HT })

export function TopbarContextProviderWrapper({ children, forceScrollState }: { children: React.ReactNode, forceScrollState?: boolean }) {
  const [topbarHt, setTopbarHt] = useState(INITIAL_TOPBAR_HT);
  return (
    <TopbarContext.Provider value={{
      topbarHt, setTopbarHt
    }}>
      <TopbarComponent forceScrollState={forceScrollState ?? false } />
      {children}
    </TopbarContext.Provider>
  )
}

function TopbarComponent({ forceScrollState }: { forceScrollState: boolean }) {
  const topbarRef = useRef<HTMLDivElement>(null)
  const { topbarHt, setTopbarHt } = useContext(TopbarContext)

  const pathName = usePathname();

  useEffect(() => {
    if (!topbarRef.current || !setTopbarHt) {
      return
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setTopbarHt(entry.contentRect.height)
      }
    })

    resizeObserver.observe(topbarRef.current)
    return () => resizeObserver.disconnect();
  }, [])

  let topbarScrolled = true
  if (!forceScrollState) {
    // dynamic .scrolled state (depending on scrollY)
    let [topbarScrolled, setTopbarScrolled] = useState(false)
    useEffect(() => {
      const windowScrollUpdate = () => {
        if (!topbarRef.current) {
          return
        }

        setTopbarScrolled(window.scrollY > 0)
      }

      window.addEventListener("scroll", windowScrollUpdate)
      setTopbarScrolled(window.scrollY > 0)

      return () => window.removeEventListener("scroll", windowScrollUpdate)
    }, [topbarScrolled])
  }

  return (
    <div ref={topbarRef} id="topbar-window" className={`flex justify-between items-stetch bg-primary sticky top-0 z-50 border-solid border-black [&.scrolled]:border-b ${topbarScrolled === true || forceScrollState ? "scrolled" : ""} duration-100 ease-in-out`} style={{transitionProperty: "border-bottom-color"}}>
      <a href="/"><p className="p-2 px-4 md:p-4 md:px-8 font-bold">CHONG CHENG HOCK</p></a>
      <nav className="basis-1/2 max-w-80 flex justify-between">
        <a href="/about" className={`relative ${pathName === "/about" ? "active" : ""} p-2 md:p-4 hacus:font-bold flex justify-center items-center`}><p>About</p><img src={arrow_pointer.src} className="hidden absolute bottom-0 left-1/2 w-3 h-3 rotate-180 -translate-x-1/2" /></a>
        <a href="/works" className={`relative ${pathName === "/works" ? "active" : ""} p-2 md:p-4 hacus:font-bold flex justify-center items-center`}><p>Works</p><img src={arrow_pointer.src} className="hidden absolute bottom-0 left-1/2 w-3 h-3 rotate-180 -translate-x-1/2" /></a>
        <a href="/contact" className={`relative ${pathName === "/contact" ? "active" : ""} p-2 md:p-4 hacus:font-bold flex justify-center items-center`}><p>Contact</p><img src={arrow_pointer.src} className="hidden absolute bottom-0 left-1/2 w-3 h-3 rotate-180 -translate-x-1/2" /></a>
      </nav>
    </div>
  );
}