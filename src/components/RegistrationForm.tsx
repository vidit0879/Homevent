import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    stream: "",
    college: "",
    isFinalYear: false,
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, phone, stream, college, isFinalYear, consent } = form;

    if (!name || !email || !phone || !stream || !college) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (!isFinalYear) {
      toast.error("Only final-year students can register");
      setLoading(false);
      return;
    }

    if (!consent) {
      toast.error("Please agree to the privacy policy");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");

      toast.success("Registration successful! We'll be in touch soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        stream: "",
        college: "",
        isFinalYear: false,
        consent: false,
      });
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration-form" className="bg-[#F8F8F8] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0549B8] mb-4">Register for the Summit</h2>
          <p className="text-[#2e3034] text-base sm:text-lg max-w-2xl mx-auto">
            Fill out this form if you're a final-year student interested in joining us!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-lg" data-aos="fade-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0549B8] font-medium mb-2">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 focus:outline-none focus:border-[#0549B8]"
                />
              </div>

              <div>
                <label className="block text-[#0549B8] font-medium mb-2">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 focus:outline-none focus:border-[#0549B8]"
                />
              </div>

              <div>
                <label className="block text-[#0549B8] font-medium mb-2">Phone Number*</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 focus:outline-none focus:border-[#0549B8]"
                />
              </div>

              <div>
                <label className="block text-[#0549B8] font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 focus:outline-none focus:border-[#0549B8]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0549B8] font-medium mb-2">Stream*</label>
                <select
                  name="stream"
                  value={form.stream}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 bg-white focus:outline-none focus:border-[#0549B8]"
                >
                  <option value="">Select your stream</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="management">Management</option>
                  <option value="law">Law</option>
                  <option value="actuarial-science">Actuarial Science</option>
                  <option value="quantitative-finance">Quantitative Finance</option>
                  <option value="general-finance">General Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0549B8] font-medium mb-2">College/University*</label>
                <input
                  type="text"
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                  placeholder="Your college name"
                  className="w-full px-4 py-3 rounded-xl border border-[#0549B8]/20 focus:outline-none focus:border-[#0549B8]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="finalYear"
                name="isFinalYear"
                checked={form.isFinalYear}
                onChange={handleChange}
                className="h-5 w-5 accent-[#0549B8]"
              />
              <label htmlFor="finalYear" className="text-[#0549B8] text-sm">
                I confirm I'm a final-year student*
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="h-5 w-5 accent-[#0549B8]"
              />
              <label htmlFor="consent" className="text-[#0549B8] text-sm">
                I agree to the privacy policy and consent to data processing*
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#0549B8] text-white px-6 py-3 rounded-xl hover:bg-[#0549B8]/90 transition-all w-full sm:w-auto"
            >
              {loading ? "Submitting..." : "Join the Summit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
