// src/pages/products/[id].js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import ComingSoonOverlay from "../../components/ui/ComingSoonOverlay";

// Product database with detailed descriptions - only the three Dr. Selvan's Naturals products
const productData = [
  {
    id: "01",
    name: "Vitamin D Plus",
    price: "₹599",
    image: "/images/vitamin-d-plus.jpg",
    gallery: ["/images/vitamin-d-plus.jpg", "/images/vitamin-d-plus.jpg"],
    shortDescription:
      "Multivitamin, Multimineral & Calcium Tablets for all age groups. Helps with healthy bones, immunity boost and increased strength.",
    description: `Vitamins are substances that our body needs to grow and develop normally. There are 13 vitamins in our body in that vitamin D is one of them. Each vitamin has respective role in the development and maintenance of our body in that vitamin D helps in absorption of calcium which is an important component of bone.

    In current world busy and competitive lifestyles have definitely reduced time to meet with standard nutritional requirements. Being busy we prefer for ready made, preserved and packed foods suitable for our engaged schedule. But such eatables may have many nutritional disadvantages leading to increased risk of health conditions.
    
    Vitamin D plus alfa plus cal, is a food dietary supplement in the form of multivitamin with a special focus on vitamin D. The tablets also contain vitamin A, vitamin B1, vitamin B2, vitamin B5, vitamin B9, vitamin B12, and vitamin D2 which help in multiple functions for maintaining health including growth and development, boosting of the immune system and increasing strength.`,
    dosage: "1 tablet once a day. Or as directed by the Dietician.",
    ingredients: [
      "Alfalfa 5mg",
      "Anise seed 5mg",
      "Calcium Citrate (3.79%) 22.75mg",
      "Vitamin C (3.49%) 18.5mg",
      "Light Magnesium Oxide (3.49%) 11.85mg",
      "Rocemary officinalic 5mg",
      "Ferrous Fumarate (47.00%) 8 mg",
      "Aloe Barbadensic 7.5 mg",
      "Vitamin B6 (70%) 1.4 mg",
      "Vitamin B3 (36.11%) 6.5 mg",
      "Vitamin E (60%) 6.5mg",
      "Fenugreek 5 mg",
      "Glutamic Acid 5.25mg",
      "L-Lysine 5mg",
      "Zinc Manomethionine (33.33%) 4 mg",
      "Vitamin B1 (35.71%) 0.5mg",
      "Vitamin B2 (31.25%) 0.5mg",
      "Vitamin B5 (0.11%) 0.7mg",
      "Vitamin B9 (32%) 64 mcg",
      "Vitamin B12 (20%) 0.2 mcg",
      "Vitamin D2 400 IU",
      "Vitamin A (53.33%) 320mcg",
      "Additional minerals and nutrients",
    ],
    benefits: [
      "Maintains healthy bone structure",
      "Boosts immunity and increases strength",
      "Helps with weak bones (Osteoporosis)",
      "Prevents rickets and vitamin D deficiency",
      "Helps with bone loss in people with hyperparathyroidism",
      "Prevents falls and fractures in people",
      "Alleviates bone pain/softening of bones (Osteomalacia)",
      "Helps with high blood pressure and high cholesterol",
      "Regulates the level of Calcium and Phosphorous in the body",
      "Prevents risk of cavities in infants, children and adolescents",
    ],
    presentation: "30 Tablets",
    storage:
      "Protect from heat, moisture & direct sunlight. Replace cap immediately after use.",
    category: "Dietary Supplement",
    badge: "Bestseller",
    attributes: ["All Age Groups", "Dietary Supplement", "No Side Effects"],
  },
  {
    id: "02",
    name: "Ortho Grade",
    price: "₹499",
    image: "/images/ortho-grade.jpg",
    gallery: ["/images/ortho-grade.jpg", "/images/ortho-grade.jpg"],
    shortDescription:
      "Ayurvedic Pain Relief Oil with powerful muscle relaxant and anti-inflammatory properties. Provides quick pain relief.",
    description: `Ortho Grade is an Ayurvedic Pain Relief Oil formulated using traditional ingredients known for their powerful muscle relaxant and anti-inflammatory properties. This carefully crafted oil provides quick pain relief for various musculoskeletal conditions.

    The natural formulation works by penetrating deep into the tissues to reduce inflammation, ease muscle tension, and alleviate pain. Regular application helps improve circulation to the affected areas, promoting healing and mobility.
    
    Ortho Grade is recommended for joint pain, muscle spasms, backache, neck pain, and sports injuries. Its natural ingredients work synergistically to provide effective relief without the side effects associated with chemical-based pain relievers.`,
    dosage:
      "Apply generously on affected areas 2-3 times daily or as directed by physician. Gently massage until absorbed.",
    ingredients: [
      "Sesame Oil",
      "Eucalyptus Oil",
      "Menthol",
      "Wintergreen Oil",
      "Camphor",
      "Castor Oil",
      "Ajwain Extract",
      "Nirgundi",
      "Rasna",
      "Ashwagandha",
      "Other Ayurvedic herbs",
    ],
    benefits: [
      "Powerful muscle relaxant",
      "Strong anti-inflammatory properties",
      "Quick pain relief",
      "Improves blood circulation",
      "Reduces joint stiffness",
      "Helps in muscle recovery after exercise",
      "Alleviates chronic pain conditions",
      "Natural formulation with no side effects",
    ],
    presentation: "100 ML",
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep tightly closed after use.",
    category: "Ayurvedic Oil",
    badge: "New",
    attributes: ["External Use Only", "Ayurvedic", "Natural Ingredients"],
  },
  {
    id: "03",
    name: "Home Remedy Cough Syrup",
    price: "₹349",
    image: "/images/cough-syrup.jpg",
    gallery: ["/images/cough-syrup.jpg", "/images/cough-syrup.jpg"],
    shortDescription:
      "Natural cough syrup effective for all kinds of cough (dry, wet, spasmodic). Provides quick relief with immune support.",
    description: `Cough is a sudden noisy expulsion of air from lungs. It is an attempt produced by our body to throw out the foreign substance like any particles or organisms residing in the respiratory tract. In our day to day while respiration we inspire all kinds of gas, dust, microbes within our respiratory system but when any of these foreign particles gets stuck within the tract leads to the production of cough through which those particles would be thrown out of the body with the large gush of wind.

    Dr. Selvan's naturals home remedy cough syrup is a safe liquid made of different natural ingredients which is usually used by various Indian homes for cold, cough and fever. The natural formulation works by soothing irritated throat tissues, reducing inflammation, and helping to expel mucus when needed.
    
    This cough syrup is effective for dry, wet, irritating or spasmodic cough of various conditions including bronchitis, asthma, and COPD. Its non-drowsy formula makes it suitable for daytime use.`,
    dosage: `Adults: 1 tablespoon every 3-4 hrs.
Children (above 8 yrs.): Half tablespoon every 3-4 hrs.
Children (below 8 yrs.): 1 teaspoon every 3-4 hrs.
Infants: 5-8 drops every 3-4 hrs.

For best results take with luke warm water.

Acute conditions: Double the amount of medicine in some luke warm water should be taken every 2 hours or as directed by the physician.`,
    ingredients: [
      "Ajwain leaf",
      "Betal leaf",
      "Tulsi",
      "Pepper",
      "Pippali",
      "Ginger",
      "Turmeric",
      "Adulsa",
      "Lavang",
      "Nigella sativa",
      "Kantkari mool",
      "Bharangi",
      "Pippali",
      "Suddh navsadhan",
    ],
    benefits: [
      "Effective for all types of cough (dry, wet, spasmodic)",
      "Quick and instant relief",
      "Non-drowsy formula",
      "Immune support",
      "Soothes sore throat",
      "Reduces chest tightness",
      "Helps expel mucus",
      "Antimicrobial and anti-inflammatory properties",
      "Made from natural ingredients",
    ],
    presentation: "100 ML",
    storage:
      "Protect from heat, moisture and direct sunlight. Replace cap immediately after use. Shake well before use.",
    category: "Cough Syrup",
    badge: "Popular",
    attributes: ["Non-Drowsy", "Natural Ingredients", "All Ages"],
  },
  {
    id: "04",
    name: "Gastrodigx Acidity Syrup",
    price: "₹399",
    image: "/images/gastrodigx-acidity-syrup.jpg",
    gallery: [
      "/images/gastrodigx-acidity-syrup.jpg",
      "/images/gastrodigx-acidity-syrup.jpg",
    ],
    shortDescription:
      "Herbal Homeopathic Acidity Syrup formulated with natural ingredients to relieve gastric acidity, indigestion and acid reflux.",
    description: `Acidity is caused by an imbalance of acid secretion and protective mechanisms in the stomach. Gastrodigx helps neutralize excess stomach acid and soothe the digestive tract using a blend of traditional herbal ingredients such as Chitrak, Harad, Vidang, Saunf, and more.

This homeopathic syrup is designed to relieve symptoms like heartburn, indigestion, gas, and bloating with natural ingredients that promote digestive health and comfort.`,
    dosage: `Adults: As directed by the physician.
Children (above 8 yrs.): As directed by the physician.
Children (below 8 yrs.): As directed by the physician.
Infants: Consult a doctor before use.`,
    ingredients: [
      "Chitrak",
      "Harad",
      "Vidang",
      "Saunf",
      "Bijora Nembu",
      "Ajmoda",
      "Jeera",
      "Gaj-pippal",
      "Kalanamak",
      "Nishoth",
      "Anar Dana",
      "Suva Beej",
      "Sounth",
      "Pudina",
      "Pippalmool",
      "Sendha Namak",
      "Ajwain",
      "Nux moschata",
      "Mentha piperta",
      "Terminalia Arjuna",
      "Carum carvi",
      "Asaefodita",
      "Zingiber off",
      "Foeniculum vulgare",
    ],
    benefits: [
      "Neutralizes excess stomach acid",
      "Relieves heartburn and indigestion",
      "Soothes acid reflux and gastric discomfort",
      "Promotes digestive health",
      "Made with natural and homeopathic ingredients",
    ],
    presentation: "100 ML",
    storage:
      "Replace cap immediately after use. Protect from heat, moisture and direct sunlight. Shake well before use.",
    category: "Homeopathic",
    badge: "New",
    attributes: ["Homeopathic", "Natural Ingredients", "All Ages"],
  },
];

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find the product based on ID
  const product = productData.find((p) => p.id === id);

  // If product not found or page is still loading
  if (!product) {
    return (
      <Layout title="Product | Dr. Selvan's Homeopathy">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-gray-200 rounded h-96"></div>
              <div className="md:w-1/2">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${product.name} | Dr. Selvan's Homeopathy`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Product overview section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Product images section */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl overflow-hidden shadow-md mb-4 p-4">
              <div className="relative aspect-square">
                <Image
                  src={product.gallery[activeImage]}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />

                {/* Main Coming Soon Overlay */}
                <ComingSoonOverlay />
              </div>
            </div>
            <div className="flex gap-4">
              {product.gallery.map((img, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />

                  {/* Thumbnail Coming Soon Overlay - using a slightly different style for thumbnails */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-accent/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-white px-1">
                      COMING SOON
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product info section */}
          <div className="md:w-1/2">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.badge === "Bestseller"
                          ? "bg-blue-100 text-blue-600"
                          : product.badge === "New"
                          ? "bg-purple-100 text-purple-600"
                          : product.badge === "Popular"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>

            {/* Attributes section */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.attributes.map((attr, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {attr}
                </span>
              ))}
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-3 py-2 rounded-l-md hover:bg-gray-300"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center py-2 border-gray-300 border-t border-b focus:ring-primary focus:border-primary"
                />
                <button
                  className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-medium hover:bg-primary-dark transition shadow-md inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="bg-accent text-white py-3 px-6 rounded-full font-medium hover:bg-accent-dark transition shadow-md inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            {/* Quick info */}
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Dosage
                    </h4>
                    <p className="text-sm text-gray-600">{product.dosage}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Presentation
                    </h4>
                    <p className="text-sm text-gray-600">
                      {product.presentation}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 4v3m6-3v3m6-3v3M5 16v3m6-3v3m6-3v3M4 8h16M4 12h16M4 16h16"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Category
                    </h4>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product details tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
              <button className="border-primary text-primary border-b-2 pb-3 px-1 inline-flex items-center text-sm font-medium">
                Description
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 border-b-2 pb-3 px-1 inline-flex items-center text-sm font-medium">
                Ingredients
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 border-b-2 pb-3 px-1 inline-flex items-center text-sm font-medium">
                Benefits
              </button>
            </nav>
          </div>

          <div className="pt-6">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <p className="whitespace-pre-line">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Key Ingredients</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {product.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="h-4 w-4 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="h-4 w-4 text-accent mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Storage information */}
        <div className="bg-blue-50 p-6 rounded-xl mb-16">
          <div className="flex items-start">
            <svg
              className="h-6 w-6 text-primary mt-0.5 mr-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Storage Information
              </h3>
              <p className="text-gray-700">{product.storage}</p>
            </div>
          </div>
        </div>

        {/* Related products section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {productData
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-blue-600 font-bold text-sm">
                      {relatedProduct.price}
                    </div>

                    {/* Coming Soon Overlay for related products */}
                    <ComingSoonOverlay />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedProduct.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

// This function gets called at build time on server-side.
export async function getStaticPaths() {
  // Generate paths for all products
  const paths = productData.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
}

// This function gets called at build time on server-side.
export async function getStaticProps({ params }) {
  // Find the product data
  const product = productData.find((p) => p.id === params.id);

  return {
    props: {
      product,
    },
  };
}
