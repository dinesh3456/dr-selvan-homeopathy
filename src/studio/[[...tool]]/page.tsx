/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// Replace with this:
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Content management for Dr. Selvan's Homeopathy",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
