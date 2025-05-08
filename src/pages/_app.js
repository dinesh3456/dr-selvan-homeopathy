// pages/_app.js (modified)
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { AppointmentProvider } from "../context/AppointmentContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [pageKey, setPageKey] = useState(router.asPath);

  // Handle page transitions
  useEffect(() => {
    // Add body class on page load to prevent initial scroll
    document.body.classList.add("loading");

    // Remove the class once the page is ready
    const timer = setTimeout(() => {
      document.body.classList.remove("loading");
    }, 200);

    const handleRouteChangeStart = () => {
      setIsRouteChanging(true);
      // Prevent scroll during route changes
      document.body.classList.add("loading");
    };

    const handleRouteChangeComplete = (url) => {
      setIsRouteChanging(false);
      // Allow scroll again once complete
      document.body.classList.remove("loading");

      // Update the page key for transitions
      setPageKey(url);

      // Use non-animated scroll to top
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading");
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <AppointmentProvider>
      <div key={pageKey} className="page-transition">
        <Component {...pageProps} />
      </div>
    </AppointmentProvider>
  );
}

export default MyApp;
