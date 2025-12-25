export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-platinum-border-dark mt-section bg-platinum-bg-dark">
      <div className="max-w-content mx-auto px-6 py-8">
        <p className="text-xs text-platinum-text-muted text-center font-medium">
          © {currentYear} Nishant Hegde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
