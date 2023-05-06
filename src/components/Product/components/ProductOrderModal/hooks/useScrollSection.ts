import { useState, type RefObject, useRef } from 'react';

interface ScrollSectionContextData {
  activeSection: number;
  containerRef: RefObject<HTMLDivElement>;
  handleScroll: () => void;
  addSectionReference: (ref: HTMLDivElement | null) => void;
}

export function useScrollSection(): ScrollSectionContextData {
  const [activeSection, setActiveSection] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  const optionsRefs = useRef<HTMLDivElement[]>([]);

  function handleScroll() {
    const { current: container } = containerRef;

    if (!container) {
      return;
    }

    const scrollPosition = container.scrollTop;
    const containerHeight = container.offsetHeight;

    const sectionOffsets = optionsRefs.current.map(ref => ref.offsetTop);

    let currentIndex = sectionOffsets.findIndex(
      offset => offset > scrollPosition + containerHeight / 4,
    );

    if (currentIndex === -1) {
      currentIndex = sectionOffsets.length - 1;
    } else {
      currentIndex -= 1;
    }

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
    containerRef,
    addSectionReference,
    handleScroll,
  };
}
