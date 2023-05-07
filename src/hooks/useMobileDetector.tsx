import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

interface MobileDetectorContextData {
  isMobile: boolean;
}

const MobileDetectorContext = createContext({} as MobileDetectorContextData);

export const MobileDetectorContextProvider: React.FC<
  PropsWithChildren
> = props => {
  const { children } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the media query to target mobile devices based on your requirements

    // Update the state based on the initial match
    setIsMobile(mediaQuery.matches);

    // Add a listener to detect changes in the media query
    const handleMediaQueryChange = (event: { matches: boolean }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <MobileDetectorContext.Provider value={{ isMobile }}>
      {children}
    </MobileDetectorContext.Provider>
  );
};

export function useMobileDetector(): MobileDetectorContextData {
  const context = useContext(MobileDetectorContext);

  if (!context) {
    throw new Error('useMobileDetector must be used within an provider');
  }

  return context;
}
