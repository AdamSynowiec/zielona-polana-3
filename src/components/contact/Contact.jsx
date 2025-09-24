import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/images/logo-dark.svg';

const FloatingLabelInput = ({ id, label, type = "text", isTextarea = false, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <label
        htmlFor={id}
        className={`font-poppins absolute left-1 transition-all duration-300 ${isFocused || value
          ? "top-[-10px] text-sm text-white"
          : "top-3 text-gray-500"}`}
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(value !== "")}
          className="font-poppins font-extralight w-full border-b border-white bg-transparent outline-none py-3 px-1 text-white h-32"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(value !== "")}
          className="font-poppins font-extralight w-full border-b border-white bg-transparent outline-none py-3 px-1 text-white"
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Imię i nazwisko jest wymagane.";
    if (!formData.email) {
      newErrors.email = "Email jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Podaj poprawny adres email.";
    }
    if (!formData.phone) newErrors.phone = "Telefon jest wymagany.";
    if (!formData.message) newErrors.message = "Wiadomość jest wymagana.";
    if (!formData.privacyAccepted) newErrors.privacyAccepted = "Musisz zaakceptować Politykę prywatności.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch("https://zielona-polana-3.pl/server/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSuccessMessage("Wiadomość została wysłana!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrors({ form: "Wystąpił błąd. Spróbuj ponownie później." });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt">
      <div className="relative">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="md:col-span-6 bg-[#E9E7E7]"></div>
          <div className="md:col-span-6 bg-stone-800"></div>
        </div>
        <div className="container max-w-[1596px] mx-auto md:px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#E9E7E7] flex justify-between flex-col p-6 md:py-24">
              <h2 className="font-poppins text-stone-800 text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extralight mb-6">
                Kontakt
              </h2>
              <div>
                <h4 className="font-poppins font-light mb-4 text-[#856F5B]">Dane firmowe</h4>
                <ul className="font-poppins font-extralight mb-10">
                  <li>TEC PYLNA Sp. z o. o</li>
                  <li>ul. Koło Strzelnicy 2/2,</li>
                  <li>30-219 Kraków</li>
                  <li>NIP 6772512766</li>
                  <li>KRS 0001114633</li>
                </ul>
              </div>
              <div>
                <h4 className="font-poppins font-light mb-4 text-[#856F5B]">Adres biura sprzedaży</h4>
                <ul className="font-poppins font-extralight mb-10">
                  <li>ul. Koło Strzelnicy 2/2,</li>
                  <li>30-219 Kraków</li>
                  <li>Tel: 518 451 555</li>
                  <li>Email: biuro@zielona-polana-3.pl</li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-9 bg-stone-800 flex flex-col p-6 md:py-24 md:pl-24">
              <h2 className="font-poppins text-white text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extralight mb-6">
                Napisz do nas
              </h2>
              <form onSubmit={handleSubmit} className="w-full md:w-2/3">
                <FloatingLabelInput id="name" label="Imię i nazwisko" value={formData.name} onChange={handleChange} error={errors.name} />
                <FloatingLabelInput id="email" label="Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <FloatingLabelInput id="phone" label="Telefon" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} />
                <FloatingLabelInput id="message" label="Wiadomość" isTextarea value={formData.message} onChange={handleChange} error={errors.message} />
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                />
                <label htmlFor="privacyAccepted" className="text-white pl-4">Wyrażam zgodę na przetwarzanie moich danych osobowych oraz potwierdzam, że zapoznałem się z treścią <Link to={"https://zielona-polana-3.pl/upload/zielona-polana-3.pdf"} target="_blank" className="underline hover:no-underline">Polityki prywatności</Link></label>
                {errors.privacyAccepted && (
                  <p className="text-red-500 text-sm mt-1">{errors.privacyAccepted}</p>
                )}
                {errors.form && <p className="text-red-500 text-sm mt-2">{errors.form}</p>}
                {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
                <div className="flex justify-end w-full mt-6">
                  <button type="submit" className="flex-1 md:max-w-[50%] bg-white text-black py-6 px-6 cursor-pointer font-poppins" disabled={isSubmitting}>
                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
