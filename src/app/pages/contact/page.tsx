"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-[120px] pb-20 px-6 sm:px-10 md:px-14 lg:px-20 text-[#F7F1E8]">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[14px] uppercase tracking-[0.4em] text-[#EDC301] mb-4"
            style={{ fontFamily: "var(--font-archivo), sans-serif" }}>
            Get in Touch
          </p>
          <h1 className="text-[48px] sm:text-[64px] lg:text-[82px] font-extrabold uppercase leading-[0.9] text-white"
            style={{ fontFamily: "var(--font-archivo), sans-serif" }}>
            Contact <span className="text-[#EDC301]">Us</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Business Info */}
          <div className="space-y-12">
            <p className="text-[18px] sm:text-[20px] text-[#CBB98C] leading-relaxed max-w-[500px]"
              style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}>
              Have a question about our menu, catering, or private events? We'd love to hear from you.
              Visit us in Brooklyn or reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C]" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>Phone</p>
                  <p className="text-[22px] font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}>718-788-5001</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C]" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>Email</p>
                  <p className="text-[22px] font-semibold text-white tracking-tight break-all" style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}>petitedumpling276@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black transition-transform group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C]" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>Location</p>
                  <p className="text-[22px] font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}>276 5th Avenue<br />Brooklyn, NY 11215</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black transition-transform group-hover:scale-110">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C]" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>Hours</p>
                  <p className="text-[22px] font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}>Open 7 Days<br />11:30AM – 9:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#EDC301]/10 to-transparent blur-2xl rounded-[40px] opacity-50" />
            <form className="relative bg-[#111111] border border-white/10 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C] ml-1">Full Name</label>
                  <input
                    type="text" id="name" required
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#EDC301]/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C] ml-1">Email Address</label>
                  <input
                    type="email" id="email" required
                    placeholder="Enter your email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#EDC301]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C] ml-1">Subject</label>
                <input
                  type="text" id="subject"
                  placeholder="What is this about?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#EDC301]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[12px] uppercase tracking-[0.2em] text-[#CBB98C] ml-1">Message</label>
                <textarea
                  id="message" required rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#EDC301]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EDC301] hover:bg-[#FFD700] text-black font-bold py-5 rounded-xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest text-[14px]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
