import { Heart, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start">
            <Image
              src="/icons/viewr_logo.svg"
              alt="ViewR"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Leading provider of advanced security solutions for businesses and
            homes.
          </p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
            Made in India with
            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Quick Links</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li className="mt-2">
              <Link
                href="#products"
                className="hover:text-foreground transition-all duration-300"
              >
                Products
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="#solutions"
                className="hover:text-foreground transition-all duration-300"
              >
                Solutions
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="#about"
                className="hover:text-foreground transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="#testimonials"
                className="hover:text-foreground transition-all duration-300"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Contact Us</h3>
          <ul className="mt-4 text-sm text-muted-foreground space-y-3">
            <li>
              <Link
                href="mailto:help@viewr.in"
                className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>help@viewr.in</span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+919891367183"
                className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98913 67183</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://maps.app.goo.gl/bdrULHZTvYASArDQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-all duration-300 flex items-start gap-2 group"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Tower 4, DLF CORPORATE GREENS, 2114-17, Sector 74A, Gurugram,
                  Haryana 122004
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Company</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li className="">
              <Link
                href="#about"
                className="hover:text-foreground transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/privacy-policy"
                className="hover:text-foreground transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/terms-conditions"
                className="hover:text-foreground transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="#contact"
                className="hover:text-foreground transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Novalance Private Limited. All
          rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
