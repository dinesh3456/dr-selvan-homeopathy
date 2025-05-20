import React from "react";
import Layout from "../components/layout/Layout";
import PalliativeCareSection from "../components/home/PalliativeCareSection";

const PalliativeCarePage = () => {
  return (
    <Layout title="Palliative Care | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Palliative <span className="text-primary">Care</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Compassionate support when you need it most"
            </p>
          </div>
        </div>
      </div>

      {/* Introductory Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Is <span className="text-primary">Palliative Care?</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            According to
            {" "}
            <a
              href="https://palliativeorg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              palliativeorg.com
            </a>
            , palliative care is specialized medical care for people living with
            serious illness. It focuses on relieving symptoms and stress so both
            patients and their families can enjoy the best possible quality of
            life.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This care is provided by a team of doctors, nurses, and other
            specialists who work together with a patient's regular physicians to
            offer an extra layer of support at any stage of illness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Services often include pain and symptom management, help navigating
            treatment options, and emotional or spiritual support for everyone
            involved.
          </p>
        </section>
      </div>

      <PalliativeCareSection />
    </Layout>
  );
};

export default PalliativeCarePage;
