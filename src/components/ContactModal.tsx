import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('AI Agents & OS Automation');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields before sending.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            id="contact-modal-title"
            className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight"
          >
            Connect With King Jethro
          </h2>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close contact modal"
            className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-6">
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={PROFILE_INFO.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            X (@IamKingJethro)
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={PROFILE_INFO.sponsorsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Sponsor
          </a>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="w-14 h-14 text-[#D7E2EA]" />
            <h3 className="text-xl font-semibold uppercase tracking-wide">
              Message Sent to King Jethro
            </h3>
            <p className="text-sm font-light text-[#D7E2EA]/80 max-w-sm leading-relaxed">
              Thanks, {name}! King Jethro will review your {service} inquiry and
              reply to <span className="font-medium text-white">{email}</span>{' '}
              shortly.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-4 rounded-full border-2 border-[#D7E2EA] px-8 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {error && (
              <p
                role="alert"
                className="text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-xl px-4 py-2.5"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70"
              >
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70"
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@studio.com"
                className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-service"
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70"
              >
                Focus Area
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] focus:border-[#D7E2EA] focus:outline-none"
              >
                <option value="AI Agents & OS Automation">
                  01 — AI Agents &amp; OS Automation
                </option>
                <option value="Systems & Dev Tooling">
                  02 — Systems &amp; Dev Tooling
                </option>
                <option value="3D Web & Spatial Graphics">
                  03 — 3D Web &amp; Spatial Graphics
                </option>
                <option value="Bug Bounty & Offensive Security">
                  04 — Bug Bounty &amp; Offensive Security
                </option>
                <option value="Native Android & ML Systems">
                  05 — Native Android &amp; ML Systems
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70"
              >
                Project Brief *
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell King Jethro about your systems, AI tooling, 3D web, or security project..."
                className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow:
                  '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid #FFFFFF',
                outlineOffset: '-3px',
              }}
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
