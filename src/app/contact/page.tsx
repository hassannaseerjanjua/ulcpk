import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Universal Label Company",
  description:
    "Get in touch with Universal Label Company (Pvt.) LTD for quotes, samples, or any inquiries about our label printing services.",
};

const ContactPage = () => {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you. Get in touch with our experts for a customized quote or sample request."
        backgroundImage="/hero-bg.png"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info Side */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold text-secondary mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our team is ready to assist you with any questions about our
                    products or services. Reach out to us via any of the
                    following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">
                        Visit Our Office
                      </h4>
                      <p className="text-gray-500">
                        123 Industrial Area, Phase II, Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">
                        Call Us
                      </h4>
                      <p className="text-gray-500">+92 300 1234567</p>
                      <p className="text-gray-500">+92 21 3456789</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">
                        Email Us
                      </h4>
                      <p className="text-gray-500">info@ulcpk.com</p>
                      <p className="text-gray-500">sales@ulcpk.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">
                        Working Hours
                      </h4>
                      <p className="text-gray-500">
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Link would go here */}
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-2/3">
              <div className="bg-primary/30 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-secondary/5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-1 bg-secondary-light rounded-full"></div>
                  <span className="font-bold text-secondary tracking-widest uppercase text-sm">
                    Send us a message
                  </span>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Subject
                    </label>
                    <select className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Quote Request</option>
                      <option>Sample Request</option>
                      <option>Order Tracking</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="bg-secondary hover:bg-secondary-light text-white w-full md:w-auto px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-secondary/20 group">
                    Send Message{" "}
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231934.35928682896!2d66.9150645620958!3d24.898862890532298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0660293eb7%3A0xad6a519395f72f1c!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714800000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default ContactPage;
