"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import styles from "./scroll-horizontal.module.css"

type GalleryItem = {
    id: number
    color: string
    label: string
    image: string
}

type GalleryItemStyle = CSSProperties & {
    "--item-color": string
    "--item-image": string
}

export default function ScrollHorizontal() {
    const containerRef = useRef<HTMLDivElement>(null)
    const galleryRef = useRef<HTMLDivElement>(null)
    const [galleryDistance, setGalleryDistance] = useState(0)

    useEffect(() => {
        const gallery = galleryRef.current
        const wrapper = gallery?.parentElement

        if (!gallery || !wrapper) return

        const updateDistance = () => {
            setGalleryDistance(Math.max(0, gallery.scrollWidth - wrapper.clientWidth))
        }

        updateDistance()
        const observer = new ResizeObserver(updateDistance)
        observer.observe(gallery)
        observer.observe(wrapper)

        return () => observer.disconnect()
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -galleryDistance])

    return (
        <div className={styles.example}>
            <section className={styles.introSection}>
                <h1>Tokyo Nights</h1>
            </section>

            <div ref={containerRef} className={styles.scrollContainer}>
                <div className={styles.stickyWrapper}>
                    <motion.div ref={galleryRef} className={styles.gallery} style={{ x }}>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={styles.galleryItem}
                                style={
                                    {
                                        "--item-color": item.color,
                                        "--item-image": `url(${item.image})`,
                                    } as GalleryItemStyle
                                }
                            >
                                <div className={styles.itemContent}>
                                    <span className={styles.itemNumber}>0{item.id}</span>
                                    <h2>{item.label}</h2>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <section className={styles.outroSection}>
                <p>This is end of section</p>
            </section>
        </div>
    )
}

const items: readonly GalleryItem[] = [
    { id: 1, color: "#f4a261", label: "Night One", image: "/photos/tokyo-shinjuku-2/image-1.jpg" },
    { id: 2, color: "#e76f51", label: "Night Two", image: "/photos/tokyo-shinjuku-2/image-2.jpg" },
    { id: 3, color: "#2a9d8f", label: "Night Three", image: "/photos/tokyo-shinjuku-2/image-3.jpg" },
    { id: 4, color: "#e9c46a", label: "Night Four", image: "/photos/tokyo-shinjuku-2/image-4.jpg" },
    { id: 5, color: "#457b9d", label: "Night Five", image: "/photos/tokyo-shinjuku-2/image-8.jpg" },
]
