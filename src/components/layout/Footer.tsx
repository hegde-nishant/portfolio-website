export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-white w-full">
      <div className="max-w-content mx-auto px-6 py-8">
        <p className="text-xs text-text-secondary text-center">
          © {currentYear} Nishant Hegde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
