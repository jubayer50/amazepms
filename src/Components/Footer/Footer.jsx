"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* ================= Background Video ================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      >
        {/* video will be added */}
        <source src="/videos/footer-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#00194C]/90" />

      {/* Blue Glow */}

      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0055FF]/20 blur-[130px]" />

      {/* ================= Content ================= */}

      <div className="relative z-10">
        {/* CTA */}

        <div className="mx-auto max-w-330 px-3 pt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-14 text-center">
            <h2 className="text-4xl font-bold">
              Ready to Simplify Property Management?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Manage residents, maintenance, billing, and visitors from one
              modern platform built for efficiency.
            </p>

            <Button className="mt-8 rounded-md bg-[#0055FF] px-8 text-white">
              Book a Demo
              <HiOutlineArrowRight className="ml-2 text-lg" />
            </Button>
          </div>
        </div>

        {/* Main Footer */}

        <div className="mx-auto mt-20 max-w-330 px-3 pb-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Company */}

            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold">
                Amaze<span className="text-[#4D8DFF]">PMS</span>
              </h3>

              <p className="mt-5 max-w-md leading-8 text-slate-300">
                A modern property management platform that simplifies
                operations, enhances resident experience, and helps property
                managers stay organized.
              </p>

              <div className="mt-8 flex gap-3">
                {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-[#0055FF]"
                    >
                      <Icon />
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Company */}

            <div>
              <h4 className="mb-5 text-lg font-semibold">Company</h4>

              <ul className="space-y-3 text-slate-300">
                <li>
                  <Link href="#">Home</Link>
                </li>

                <li>
                  <Link href="#">Features</Link>
                </li>

                <li>
                  <Link href="#">Contact</Link>
                </li>

                <li>
                  <Link href="#">Book Demo</Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}

            <div>
              <h4 className="mb-5 text-lg font-semibold">Solutions</h4>

              <ul className="space-y-3 text-slate-300">
                <li>Resident Portal</li>

                <li>Visitor Management</li>

                <li>Maintenance</li>

                <li>Analytics</li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h4 className="mb-5 text-lg font-semibold">Contact</h4>

              <ul className="space-y-3 text-slate-300">
                <li>hello@amazepms.com</li>

                <li>+1 (800) 123-4567</li>

                <li>New York, USA</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row">
            <p>© 2026 Amaze PMS. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>

              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
