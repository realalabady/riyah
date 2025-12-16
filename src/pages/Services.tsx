import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const Quote = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const serviceOptions = [
    "centralAC",
    "installation",
    "maintenance",
    "commercial",
    "residential",
    "consulting",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("quote.form.success"));
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("quote.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("quote.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("quote.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-elevated p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder={t("quote.form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.company")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                      placeholder={t("quote.form.companyPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder={t("quote.form.phonePlaceholder")}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder={t("quote.form.emailPlaceholder")}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("quote.form.service")} *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">
                      {t("quote.form.servicePlaceholder")}
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {t(`quote.serviceOptions.${option}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("quote.form.message")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder={t("quote.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full disabled:opacity-70"
                >
                  {isSubmitting
                    ? t("quote.form.submitting")
                    : t("quote.form.submit")}
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-4">
                    {isArabic ? "معلومات التواصل" : "Contact Information"}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">{t("contact.address.text")}</p>
                        <p className="text-xs text-primary-foreground/70 mt-1">
                          {t("contact.address.within")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent shrink-0" />
                      <a
                        href="tel:+966552238222"
                        className="hover:text-accent transition-colors"
                      >
                        {t("contact.phone.number")}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent shrink-0" />
                      <a
                        href="mailto:info@riyahaljleed.com"
                        className="hover:text-accent transition-colors text-sm"
                      >
                        {t("contact.email.address")}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p>{t("contact.hours.weekdays")}</p>
                        <p className="text-primary-foreground/70">
                          {t("contact.hours.weekend")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {isArabic ? "لماذا تختارنا؟" : "Why Choose Us?"}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      isArabic ? "استشارة مجانية" : "Free Consultation",
                      isArabic ? "عروض أسعار تنافسية" : "Competitive Pricing",
                      isArabic
                        ? "ضمان شامل على الخدمات"
                        : "Comprehensive Service Warranty",
                      isArabic
                        ? "فريق فني متخصص"
                        : "Specialized Technical Team",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Quote;
