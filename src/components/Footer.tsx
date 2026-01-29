const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto text-center">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Jumpei Takei. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
