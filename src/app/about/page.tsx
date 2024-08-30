"use client"

import { SocialsContainer } from "@/app/components/socials"
import { TopbarContext } from "@/app/components/topbar/topbar"
import { useContext, useEffect, useRef } from "react";

import { SKILLS_DATA } from "@/app/data/skills";

import headshot from "@/public/graphics/headshot_square.jpg"

function LeftColumn() {
	return (
		<div className="flex flex-col h-full basis-1/3 grow shrink-0 border-r-2 border-black border-solid">
			<div className="p-6">
				<h1 className="font-bold text-5xl pb-4">I am a student</h1>
				<p className="text-xl">Diploma in Applied AI & Analytics @ NYP</p>
			</div>
			<div className="shrink border-black border-solid border-t-2 border-b-2 min-h-0">
				<img className="w-full h-full object-cover" src={headshot.src} />
			</div>
			<div className="flex flex-col w-full self-end p-4">
				<SocialsContainer iconSize={54} />
			</div>
		</div>
	)
}

function MiddleColumn() {
	const hScrollContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!hScrollContainerRef.current) {
			return
		}

		const scrollUpdate = (e: WheelEvent) => {
			// e.preventDefault();
			// console.log(e.deltaY)
			// if (hScrollContainerRef.current) {
			// 	hScrollContainerRef.current.scrollLeft += e.deltaY;

			// 	// @ts-ignore
			// 	let childWidth = hScrollContainerRef.current.children[0].offsetWidth
			// 	console.log(hScrollContainerRef.current.scrollLeft, childWidth)
			// 	if (hScrollContainerRef.current.scrollLeft >= childWidth) {
			// 		let last = hScrollContainerRef.current.children[hScrollContainerRef.current.children.length -1]
			// 		let childrenHiddenCount = Math.floor(hScrollContainerRef.current.scrollLeft /childWidth)
			// 		console.log("childrenHiddenCount", childrenHiddenCount)
			// 		for (let i = 0; i < childrenHiddenCount; i++) {
			// 			last.after(hScrollContainerRef.current.children[0])
			// 		}

			// 		hScrollContainerRef.current.scrollLeft -= childWidth *childrenHiddenCount
			// 	}
			// }
		}

		hScrollContainerRef.current.addEventListener("wheel", scrollUpdate);

		return () => {
			hScrollContainerRef.current?.removeEventListener("wheel", scrollUpdate)
		}
	}, [hScrollContainerRef])

	return (
		<div className="h-full overflow-y-auto grow-0 shrink-0 min-w-0 basis-1/3 border-r-2 border-black border-solid no-scrollbar">
			<section className="overflow-x-auto border-b-2 border-black border-solid min-w-0">
				<div className="p-4">
					<h2 className="text-3xl font-bold underline decoration-dotted mb-4">What I am fluent in</h2>
					<p className="pb-2">Since young, I had a strong passion for developing things. It started off with game development on the Roblox engine, before deviating into Python to automate processes with scripts.</p>
					<p>Now, I enjoy building web applications more than ever with exciting technologies, such as Next.js or React.</p>
				</div>
				<div className="inline-block w-full h-[132px] overflow-x-clip border-black border-solid border-b-2 border-t-2">
					<div id="set" className="relative inline-block whitespace-nowrap scroll-lr h-full">
						{
							SKILLS_DATA.map((skillItem, i) => {
								return (
									<div key={i} className="inline-block w-32 box-content border-black border-solid border-r-2 last:border-r-0">
										<img className={``} src={skillItem.image.src} alt={skillItem.title} />
									</div>
								)
							})
						}
						<div className="absolute top-0 left-full inline-block whitespace-nowrap">
							{
								SKILLS_DATA.map((skillItem, i) => {
									return (
										<div key={i} className="inline-block w-32 box-content border-black border-solid border-r-2 last:border-r-0">
											<img className={``} src={skillItem.image.src} alt={skillItem.title} />
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="p-4">
					<p>As I find more time for my own hobbies, I would love to continue building impactful web applications from innovative ideas.</p>
				</div>
			</section>
			<section className="overflow-x-auto border-b-2 border-black border-solid min-w-0">
				<div className="p-4">
					<h2 className="text-3xl font-bold underline decoration-dotted mb-4">From CRUD apps, to Data visualisations, to AI</h2>
					<p className="pb-2">Moving from creating of CRUD programs and web applications with Python and Javascript respectively, I was exposed to data visualisations and journalism with the tools such as PowerBI Service and Tableau. The valuable experience taught me the core skillsets of being a data analyst - telling a story with the data.</p>
				</div>
			</section>
			<section className="overflow-x-auto border-b-2 border-black border-solid min-w-0">
				<div className="p-4">
					<h2 className="text-3xl font-bold underline decoration-dotted mb-4">Fun facts about me</h2>
					<p className="pb-2">All IT things aside, I love to spend my money guilt-free on seafood, with my favourite go-to being crabs and fish dishes.</p>
					<p className="pb-2 italic">&lt;insert-picture-of-black-pepper-crab-here&gt; 🌶️🌶️</p>
					<p>Otherwise, I </p>
				</div>
			</section>
			<section className="overflow-x-auto border-b-2 border-black border-solid min-w-0">
				<div className="p-4">
					<h2 className="text-3xl font-bold underline decoration-dotted mb-4">Reach out to me</h2>
					<p className="pb-2">I am easily reachable via email, <a href="mailto:hi@chenghock.com" className="link"	 target="_blank">hi@chenghock.com</a>.</p>
					<p className="pb-2">Alternatively, you may reach out to me on any of my social media platforms.</p>
					<SocialsContainer iconSize={32} />
				</div>
			</section>
			<section className="overflow-x-auto min-w-0">
				<div className="p-4">
					<h2 className="text-3xl font-bold underline decoration-dotted mb-4">View my works</h2>
					<p className="pb-2">On the right panel, view some of my proudest projects that saw its completion.</p>
					<p className="inline-flex items-center gap-4">View more in details here <button className="p-2 flex justify-between items-center bg-black-accent text-white rounded"><span>My works</span></button></p>
				</div>
			</section>
		</div>
	)
}

function RightColumn() {
	return (
		<div className="grow shrink min-w-0 basis-1/3">
			<div className="p-4">
				<h2 className="text-3xl font-bold">Works</h2>
			</div>
		</div>
	)
}

export default function AboutMePage() {
	const { topbarHt, setForceTopbarScrollState } = useContext(TopbarContext)

	useEffect(() => {
		if (!setForceTopbarScrollState) {
			return
		}

		setForceTopbarScrollState(true) // force .scrolled state on topbar for this page
	}, [setForceTopbarScrollState])

	return (
		// @ts-ignore
		<div className={`flex flex-row min-h-[var(--ht)] md:h-[var(--ht)] w-full justify-start`} style={{"--ht": `calc(100svh - ${topbarHt}px - 2px)`}}>
			<LeftColumn />
			<MiddleColumn />
			<RightColumn />
		</div>
	)
}