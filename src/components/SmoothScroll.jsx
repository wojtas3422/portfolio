// Smooth scroll from https://dev.to/ironcladdev/smooth-scrolling-with-react-framer-motion-dih <3

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SmoothScroll({ children }) {
    // Scroll progress (0 to 1) of the window
    const { scrollYProgress } = useScroll();

    // Use framer motion's useSpring() hook to smooth the scrollYProgress value
    const smoothProgress = scrollYProgress

    // The height of the content in pixels
    const [contentHeight, setContentHeight] = useState(0);

    // The value to transform the content to
    const y = useTransform(smoothProgress, v => v * -(contentHeight - window.innerHeight))

    // A reference to hold the value of the content
    const contentRef = useRef();

    // Reset the `contentHeight` value when the children change, or when the window resizes
    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight)
            }
        }

        // Call the resize handler once, initially
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef]);

    return (
        <>
            <div style={{ height: contentHeight }} />
            <motion.div
                className="scrollBody"
                style={{ y }}
                ref={contentRef}
            >
                {children}
            </motion.div>
        </>
    )
}