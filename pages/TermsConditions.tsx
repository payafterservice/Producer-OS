
import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-6 py-40 max-w-4xl font-sans">
      <h1 className="text-4xl md:text-5xl font-black text-silver mb-12 tracking-tighter">Terms & Conditions</h1>
      <div className="prose prose-invert prose-lg max-w-none text-muted">
        <p className="italic text-sm mb-8 text-dim">Last updated: 2025-09-07</p>

        <p className="font-light leading-relaxed text-silver/70">Welcome to <strong>Producer OS Digital</strong>. By accessing or using our website and associated services, you agree to the following Terms and Conditions.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">1. Definitions</h3>
        <ul className="list-disc pl-6 space-y-2 font-light mt-4 text-silver/70">
            <li><strong>"Producer OS Digital," "We," "Us":</strong> Refers to our agency.</li>
            <li><strong>"You," "Client":</strong> Refers to the user or organization.</li>
            <li><strong>"Services":</strong> Refers to automation and AI solutions.</li>
        </ul>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">2. Website Use</h3>
        <p className="font-light leading-relaxed text-silver/70">You agree not to use the site for unlawful purposes, interfere with functionality, or copy content without permission. All content is our intellectual property.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">3. Services</h3>
        <p className="font-light leading-relaxed text-silver/70">We provide workflow design, AI development, and technical support. Specifics are outlined in separate agreements.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">4. Intellectual Property</h3>
        <p className="font-light leading-relaxed text-silver/70">Unless agreed otherwise, IP developed by us remains our property until payment. Clients receive a non-exclusive license for internal use.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">5. Limitation of Liability</h3>
        <p className="font-light leading-relaxed text-silver/70">We are not liable for indirect damages, losses from misuse, or third-party failures. Use our site at your own risk.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">6. Governing Law</h3>
        <p className="font-light leading-relaxed text-silver/70">These Terms are governed by the laws of Canada.</p>

        <h3 className="text-silver mt-12 mb-4 font-black text-xl">7. Contact</h3>
        <p className="font-light leading-relaxed text-silver/70">For questions, contact us at <span className="text-silver underline underline-offset-4">hello@produceros.com</span>.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
