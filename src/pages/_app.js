// pages/_app.js
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { AppointmentProvider } from "../context/AppointmentContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Handle page transitions
  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to top on route change
      window.scrollTo(0, 0);

      // Close any open modals or menus if needed
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppointmentProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </AppointmentProvider>
  );
}

export default MyApp;
