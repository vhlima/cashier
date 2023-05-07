import { useMobileDetector } from '@/hooks';
import { useState, type RefObject, useRef } from 'react';

interface ScrollSectionContextData {
  activeSection: number;
  containerRef: RefObject<HTMLDivElement>;
  referenceContainerRef: RefObject<HTMLDivElement>;
  handleScroll: () => void;
  addSectionReference: (ref: HTMLDivElement | null) => void;
}

export function useScrollSection(): ScrollSectionContextData {
  const [activeSection, setActiveSection] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  const referenceContainerRef = useRef<HTMLDivElement>(null);

  const optionsRefs = useRef<HTMLDivElement[]>([]);

  const { isMobile } = useMobileDetector();

  // console.log(`is mobile? ${isMobile}`);

  function handleScroll() {
    const { current: container } = containerRef;

    if (!container) {
      return;
    }

    const { current: referenceContainer } = referenceContainerRef;

    if (!referenceContainer) {
      return;
    }

    const scrollPosition = container.scrollTop;
    const containerHeight = container.offsetHeight;

    // console.log(
    //   `CONTAINER scroll position: ${container.scrollTop} | container height: ${container.offsetHeight} | offset top: ${container.offsetTop}`,
    // );
    // console.log(
    //   `REFERENCE scroll position: ${referenceContainer.scrollTop} | offset top: ${referenceContainer.offsetTop}`,
    // );
    // console.log(
    //   `ALGO COUNT: ${referenceContainer.offsetTop - container.scrollTop}`,
    // );

    const sectionOffsets = optionsRefs.current.map(ref => ref.offsetTop);

    let currentIndex = sectionOffsets.findIndex(offset =>
      !isMobile
        ? offset > scrollPosition + containerHeight / 6
        : offset >
          (referenceContainer.offsetTop > container.scrollTop
            ? 0
            : +(referenceContainer.offsetTop - container.scrollTop)),
    );

    // console.log(`offsets: ${JSON.stringify(sectionOffsets)}`);

    if (currentIndex === -1) {
      currentIndex = sectionOffsets.length - 1;
    } else {
      currentIndex -= 1;
    }

    // console.log(`current index? ${currentIndex}`);

    setActiveSection(currentIndex);
  }

  function addSectionReference(ref: HTMLDivElement | null) {
    if (!ref || optionsRefs.current.includes(ref)) {
      return;
    }

    optionsRefs.current.push(ref);
  }

  return {
    activeSection,
    referenceContainerRef,
    containerRef,
    addSectionReference,
    handleScroll,
  };
}
