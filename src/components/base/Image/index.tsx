import type { ReactElement } from 'react'
import type { ImageProps } from './types'
import { useRef, useEffect, useState } from 'react'
import StyledImg from './styled'

const LOAD_IMG_EVENT = 'loadImage'
const DEFAULT_THRESHOLD = 0.2

let observer: IntersectionObserver | null = null

const onIntersection = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT))
    }
  })
}

const Image = ({
  lazy = true,
  src,
  width,
  height,
  alt,
  mode = 'cover',
  block = false,
  placeholder,
  threshold = DEFAULT_THRESHOLD,
  ...props
}: ImageProps): ReactElement => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImg = (): void => {
      setLoaded(true)
    }

    const imgElement = imgRef.current

    if (imgElement) {
      imgElement?.addEventListener(LOAD_IMG_EVENT, handleLoadImg)
    }

    return (): void => {
      if (imgElement) {
        imgElement?.removeEventListener(LOAD_IMG_EVENT, handleLoadImg)
      }
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) {
      return
    }

    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <StyledImg
      ref={imgRef}
      alt={alt}
      block={block}
      height={height}
      mode={mode}
      src={loaded ? src : placeholder}
      width={width}
      {...props}
    />
  )
}

export default Image
