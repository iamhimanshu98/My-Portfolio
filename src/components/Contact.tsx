import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";
import { contactData } from "../data/portfolioData";
import { toast } from "react-hot-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1yjuefx",
        "template_eq62b4x",
        { formData, time: new Date().toLocaleString() },
        "ToiFjDAo0f9Nv54y3"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Oops! Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-light mb-2 text-gray-800 dark:text-gray-300 transition-colors duration-300">
                GET IN TOUCH
              </h2>
              <h2 className="text-5xl font-extrabold mb-16 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                Contact.
              </h2>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                placeholder="What's your good name?"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border focus:outline-none border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-orange-500 
                focus:border-transparent transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                placeholder="What's your web address?"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-orange-500 
                focus:border-transparent transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                maxLength={320}
                placeholder="What you want to say?"
                className="scrollbar-thumb-only w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-orange-500 
                focus:border-transparent transition-colors duration-300 resize-none mb-8 overflow-y-auto"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 dark:hover:text-gray-100 font-semibold
              flex items-center justify-center gap-2 transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {contactData.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                className="flex items-center gap-3 p-1 md:p-2 bg-gray-50 dark:bg-gray-800 rounded-lg 
                text-gray-700 dark:text-gray-300 text-lg hover:text-orange-600 dark:hover:text-orange-500 
                transition-colors duration-300 group"
                target={
                  contact.name === "Email" || contact.name === "Phone"
                    ? "_self"
                    : "_blank"
                }
                rel={
                  contact.name === "Email" || contact.name === "Phone"
                    ? ""
                    : "noopener noreferrer"
                }
              >
                <span
                  className="p-3  rounded-full 
                  transition-colors duration-300"
                >
                  {contact.icon}
                </span>
                <span className="font-medium">{contact.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="pt-12 text-gray-700 dark:text-gray-300 text-center transition-colors duration-300">
        <p>
          &copy; {new Date().getFullYear()} Himanshu K. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
