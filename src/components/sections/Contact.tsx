import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Copy,
  Check,
  Eye,
  Shield,
  Github,
  Linkedin,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ToastMessage } from '@/components/ui/Toast';

interface ContactProps {
  onShowToast: (toast: Omit<ToastMessage, 'id'>) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Phone obfuscation against web scrapers
  const rawPhone = portfolioData.contact.phone; // e.g. "+91 8098163319"
  const maskedPhone = '+91 ••••• ••319';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    onShowToast({
      type: 'success',
      message: 'Email address copied to clipboard!',
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleRevealPhone = () => {
    setPhoneRevealed(true);
    onShowToast({
      type: 'info',
      message: 'Phone number revealed for direct call.',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Post to Formspree endpoint or fallback
      const response = await fetch(portfolioData.contact.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
        }),
      });

      if (response.ok) {
        onShowToast({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback email client trigger if Formspree key isn't activated yet
        window.location.href = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
          formData.subject || 'Inquiry from Portfolio'
        )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;

        onShowToast({
          type: 'info',
          message: 'Opening your default email client to send message...',
        });
      }
    } catch {
      // In case of network error, launch mailto
      window.location.href = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
        formData.subject || 'Inquiry from Portfolio'
      )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;

      onShowToast({
        type: 'info',
        message: 'Opening mail client to complete sending.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 07. GET IN TOUCH"
          title="Let's build something scalable together"
          subtitle="Open for full-time engineering roles, high-impact consulting, or technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info & Privacy Safeguards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email with copy button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Direct Email</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors break-all"
                >
                  {portfolioData.contact.email}
                </a>
              </div>

              {/* Scraper-protected Phone Number with click-to-reveal */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    <span>Phone (Anti-Scraper Protected)</span>
                  </span>
                  {!phoneRevealed && (
                    <button
                      onClick={handleRevealPhone}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Reveal</span>
                    </button>
                  )}
                </div>

                {phoneRevealed ? (
                  <a
                    href={`tel:${rawPhone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-2 font-mono"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{rawPhone}</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-slate-500">{maskedPhone}</span>
                    <button
                      onClick={handleRevealPhone}
                      className="px-2.5 py-1 text-xs rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/20"
                    >
                      Click to Reveal
                    </button>
                  </div>
                )}
              </div>

              {/* Location & Turnaround Time */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{portfolioData.contact.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{portfolioData.contact.typicalReplyTime}</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 text-xs font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below or email me directly at{' '}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-emerald-500 hover:underline"
                >
                  {portfolioData.contact.email}
                </a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Opportunity / Technical Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Hariharan, I came across your profile and would love to discuss an engineering role with our team..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  leftIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto px-8"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
