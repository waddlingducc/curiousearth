export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
      <p className="text-sm mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>Last updated: May 2026</p>

      <div className="space-y-8 text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Introduction</h2>
          <p>Curious Earth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Information We Collect</h2>
          <p className="mb-3"><strong className="text-foreground">Information you provide:</strong> When you contact us, subscribe to our newsletter, or submit content, we may collect your name, email address, and any other information you choose to share.</p>
          <p><strong className="text-foreground">Automatically collected information:</strong> When you visit our site, we automatically receive your IP address, browser type, device information, referring URL, and pages visited. We use cookies and similar tracking technologies to analyze trends and improve user experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide, maintain, and improve our website and content</li>
            <li>To respond to your inquiries and communicate with you</li>
            <li>To send newsletters or updates if you have opted in</li>
            <li>To analyze how visitors use our site and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Cookies and Advertising</h2>
          <p className="mb-3">We use cookies to enhance your experience on our site. Third-party advertising partners, including Google AdSense, may use cookies to serve ads based on your prior visits to our site or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the Internet.</p>
          <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "hsl(var(--primary))" }}>Google Ad Settings</a> or, for many other vendors, the <a href="http://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "hsl(var(--primary))" }}>Digital Advertising Alliance</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Sharing of Information</h2>
          <p>We do not sell, trade, or rent your personal information to others. We may share information with trusted service providers who assist us in operating our website, conducting our business, or serving you, provided they agree to keep this information confidential. We may also disclose information when required by law.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Children's Privacy</h2>
          <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Your Rights</h2>
          <p>Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information on our Contact page.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page with an updated revision date.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through our Contact page.</p>
        </section>
      </div>
    </div>
  );
}
