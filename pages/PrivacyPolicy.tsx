import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-40 max-w-4xl font-sans">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter">Privacy Policy</h1>
      <div className="prose prose-invert prose-lg max-w-none text-muted">
        <p className="italic text-sm mb-8 text-dim">Last updated: 2025-09-07</p>
        
        <p className="font-light leading-relaxed">Producer OS Digital ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with us.</p>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">1. Who We Are</h3>
        <p className="font-light leading-relaxed">Producer OS Digital is a software automation agency offering AI and workflow solutions. We operate out of Canada and serve clients globally.</p>
        <p className="mt-4 font-light">If you have any questions about this policy, contact us at: <span className="text-white underline underline-offset-4">hello@produceros.com</span></p>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">2. What Data We Collect</h3>
        <p className="font-light leading-relaxed">When you visit our website or contact us, we may collect:</p>
        <ul className="list-disc pl-6 space-y-2 font-light mt-4">
            <li><strong>Automatically Collected Data:</strong> IP address, Browser type, Device type, Pages visited.</li>
            <li><strong>Information You Provide:</strong> Your name, email, or phone number if you contact us.</li>
        </ul>
        <p className="mt-4 font-light">We do not knowingly collect data from children under 13.</p>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">3. Why We Collect Your Data</h3>
        <ul className="list-disc pl-6 space-y-2 font-light mt-4">
            <li>Understand how visitors use our website</li>
            <li>Improve site performance and content</li>
            <li>Respond to inquiries and communication</li>
            <li>Deliver requested services to clients</li>
            <li>Meet legal obligations</li>
        </ul>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">4. Legal Basis for Processing (GDPR)</h3>
        <p className="font-light leading-relaxed">If you are located in the EU or EEA, we process your data based on:</p>
        <ul className="list-disc pl-6 space-y-2 font-light mt-4">
            <li><strong>Consent:</strong> When you voluntarily contact us.</li>
            <li><strong>Legitimate interest:</strong> To improve our site.</li>
            <li><strong>Contractual necessity:</strong> To fulfill obligations.</li>
        </ul>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">5. Cookies & Tracking</h3>
        <p className="font-light leading-relaxed">We use cookies to analyze site usage and improve experience. You can disable cookies in your browser settings.</p>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">6. Data Sharing</h3>
        <p className="font-light leading-relaxed">We do <strong>not</strong> sell your data. We may share data with trusted service providers (e.g., hosting) or legal bodies if required.</p>

        <h3 className="text-white mt-12 mb-4 font-black text-xl">7. Your Rights</h3>
        <p className="font-light leading-relaxed">You have the right to access, correct, delete, or restrict processing of your personal data. Contact us to exercise these rights.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;