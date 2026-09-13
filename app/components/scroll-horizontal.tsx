"use client"

import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import SplitTextReveal from "./split-text-reveal"
import { ShineBorder } from "@/components/ui/shine-border"

export default function ScrollHorizontal() {
    const containerRef = useRef(null)
    const editorialRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const editorialInView = useInView(editorialRef, { once: true, amount: 0.35 })
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)")
        const updateViewport = () => setIsMobile(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener("change", updateViewport)

        return () => mediaQuery.removeEventListener("change", updateViewport)
    }, [])

    const cardWidth = isMobile ? 280 : ITEM_WIDTH
    const cardGap = isMobile ? 15 : GAP
    const totalDistance = (items.length - 1) * (cardWidth + cardGap)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])
    const brushProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1])
    const brushWidth = useTransform(scrollYProgress, [0, 0.85], [0, 32])
    const highlightWidth = useTransform(scrollYProgress, [0, 0.85], [0, 5])
    const brushColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#2563eb", "#ef4444", "#facc15"],
    )

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setActiveIndex(Math.min(items.length - 1, Math.round(latest * (items.length - 1))))
    })

    return (
        <div id="example" className="overflow-x-clip">
            <div className="w-full px-5 bg-black pb-8 pt-20 sm:px-10 lg:px-12">
                <motion.div
                    className="mx-auto max-w-7xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { delayChildren: 0.1, staggerChildren: 0.12 },
                        },
                    }}
                >
                    <motion.p
                        className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[#e3e7e8]"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                    Curated stays
                    </motion.p>
                    <motion.h2
                        className="max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
                        variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                    Timeless villas for slow, beautiful living.
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-xl text-base leading-7 text-[#e3e7e8]"
                        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                    Discover serene coastal hideaways, elevated countryside escapes, and private estates designed for your best days.
                    </motion.p>
                </motion.div>
            </div>
            <div ref={containerRef} className="relative h-[300vh] bg-black motion-reduce:h-auto">
                <svg
                    className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <motion.path
                        d="M-120 -80 C 180 80, 80 330, 390 410 S 690 250, 860 520 S 1140 780, 1560 980"
                        fill="none"
                        stroke={brushColor}
                        pathLength={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ pathLength: brushProgress, strokeWidth: brushWidth }}
                    />
                    <motion.path
                        d="M-120 -80 C 180 80, 80 330, 390 410 S 690 250, 860 520 S 1140 780, 1560 980"
                        fill="none"
                        stroke={brushColor}
                        pathLength={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            pathLength: brushProgress,
                            strokeWidth: highlightWidth,
                        }}
                    />
                </svg>

                <div className="z-1 sticky top-0 flex h-screen w-full items-center justify-start overflow-visible motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-x-auto motion-reduce:py-12.5">
                    <motion.div className="flex gap-7.5 pl-[calc(50vw-200px)] will-change-transform motion-reduce:transform-none max-[600px]:gap-3.75 max-[600px]:pl-[calc(50vw-140px)]" style={{ x }}>
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative bg-slate-200 h-125 w-100 shrink-0 overflow-hidden bg-(image:--item-image) bg-cover bg-center before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_60%,var(--item-color))] before:mix-blend-multiply max-[600px]:h-87.5 max-[600px]:w-70"
                                style={
                                    {
                                        "--item-color": item.color,
                                        "--item-image": `url(${item.image})`,
                                    } as React.CSSProperties
                                }
                            >
                                {activeIndex === index && (
                                    <ShineBorder
                                        borderWidth={5}
                                        duration={4}
                                        shineColor={["#ffffff", "#17FF65", "#facc15"]}
                                        style={{ zIndex: 3 }}
                                    />
                                )}
                                <div className="absolute bottom-7.5 left-7.5 z-1">
                                    <span className="mb-2 block font-mono text-xl text-white font-semibold">0{item.id}</span>
                                    <h2 className="m-0 text-[28px] font-semibold text-white">{item.label}</h2>
                                </div>
                                
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <section ref={editorialRef} className="relative flex h-screen items-center justify-center overflow-hidden bg-[#f5f7f6] px-6 text-center">
                <div className="relative flex w-full max-w-7xl items-center justify-center">
                    <svg
                        className="pointer-events-none absolute -left-10 top-5 hidden h-75 w-55.5 -translate-y-62.5 lg:block"
                        viewBox="0 0 155 209"
                        aria-hidden="true"
                    >
                        <motion.path
                            d="M2.01544 69.1664C0.0154442 -15.8293 193.012 -24.8351 145.015 69.1664C97.0192 163.168 124.012 200.164 139.015 206.166"
                            fill="none"
                            stroke="#17FF65"
                            pathLength={1}
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: editorialInView ? 1 : 0,
                                opacity: editorialInView ? 0.63 : 0,
                            }}
                            transition={{ duration: 1.4, ease: "easeInOut" }}
                        />
                    </svg>

                    <div className="relative z-10 max-w-4xl">
                        <SplitTextReveal
                            as="h1"
                            type="words, chars"
                            stagger={0.05}
                            duration={0.5}
                            style={{
                                fontSize: "clamp(4rem, 8vw, 9rem)",
                                fontWeight: 600,
                                letterSpacing: "-0.07em",
                                lineHeight: 0.9,
                                color: "#0c1114",
                            }}
                        >
                            Villa for Holiday.
                        </SplitTextReveal>

                        <SplitTextReveal
                            as="p"
                            type="words"
                            stagger={0.08}
                            duration={0.8}
                            delay={0.5}
                            style={{
                                fontSize: "1.25rem",
                                maxWidth: "640px",
                                margin: "auto",
                                marginTop: "2rem",
                                lineHeight: 1.7,
                                color: "#4d5a5f",
                            }}
                        >
                            Thoughtful stays, sunset views, and beautifully slow mornings in the places you never want to leave.
                        </SplitTextReveal>
                    </div>

                    <svg
                        className="pointer-events-none absolute right-8 top-1/2 hidden h-45 w-107.5 translate-y-37.5 lg:block"
                        viewBox="0 0 241 101"
                        aria-hidden="true"
                    >
                        <motion.path
                            d="M214.191 98.8615C244.191 66.8727 265.178 -36.1562 159.185 39.8521C53.1914 115.86 156.191 -75.1517 1.19141 39.8483"
                            fill="none"
                            stroke="#17FF65"
                            pathLength={1}
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: editorialInView ? 1 : 0,
                                opacity: editorialInView ? 0.63 : 0,
                            }}
                            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                        />
                    </svg>
                </div>
            </section>
        </div>
    )
}

const items = [
    {
        id: 1,
        color: "var(--hue-1)",
        label: "Coastal Villa",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        color: "var(--hue-2)",
        label: "Cliff Retreat",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        color: "var(--hue-3)",
        label: "Garden Escape",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        color: "var(--hue-4)",
        label: "Sunset Hideaway",
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        color: "var(--hue-5)",
        label: "Private Estate",
        image:
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    },
]

const ITEM_WIDTH = 400
const GAP = 30
