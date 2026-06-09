import { useState, type FormEvent } from 'react';

import {
  contactNotes,
  inquiryForm,
  serviceOptions,
  subjectOptions,
  submitIcon,
} from '@/features/contact/data/contact-page-content';

const fieldClass =
  'min-h-14 w-full rounded-full border border-(--np-border-strong) bg-(--np-surface) px-5 text-base text-foreground outline-none transition-[background-color,border-color,box-shadow] duration-(--np-duration-fast) placeholder:text-(--np-subtle) focus:border-primary focus:ring-3 focus:ring-ring/35';

export function InquiryFormSection() {
  const [status, setStatus] = useState('');
  const SubmitIcon = submitIcon;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Thanks. Your inquiry is ready to send.');
  }

  return (
    <section className="np-container py-10 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {inquiryForm.title}
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {inquiryForm.body}
        </p>
      </div>

      <form
        className="mt-12 rounded-(--np-radius-xl) border border-(--np-border) bg-(--np-surface) p-6 sm:p-10 lg:p-14"
        onSubmit={handleSubmit}
        data-reveal="media"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <ContactField
            label="Name"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <ContactField
            label="Email"
            name="email"
            placeholder="Enter your Email"
            type="email"
            required
          />
          <ContactField
            label="Phone Number"
            name="phone"
            placeholder="Enter your Phone Number"
          />
          <ContactSelect
            label="Select Service"
            name="service"
            placeholder="Select your Service"
            options={serviceOptions}
          />
          <ContactField
            label="Company / Organization Name"
            name="company"
            placeholder="Enter Name"
          />
          <ContactSelect
            label="Subject"
            name="subject"
            placeholder="Select your Subject"
            options={subjectOptions}
          />
        </div>

        <label className="mt-8 block">
          <span className="text-base font-medium text-foreground">Message</span>
          <textarea
            className="mt-4 min-h-36 w-full resize-y rounded-lg border border-(--np-border-strong) bg-(--np-surface) px-5 py-4 text-base leading-7 text-foreground outline-none transition-[background-color,border-color,box-shadow] duration-(--np-duration-fast) placeholder:text-(--np-subtle) focus:border-primary focus:ring-3 focus:ring-ring/35"
            name="message"
            placeholder="Enter your Message"
            required
          />
        </label>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="submit"
            className="np-focus inline-flex min-h-14 items-center gap-3 rounded-full bg-primary px-7 text-base font-medium text-primary-foreground shadow-(--np-shadow-blue) transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-(--np-blue-strong) active:scale-[0.97]"
          >
            Send your Inquiry
            <SubmitIcon className="size-5" aria-hidden="true" />
          </button>
          {status ? (
            <p className="text-sm text-muted-foreground" role="status">
              {status}
            </p>
          ) : null}
        </div>
      </form>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {contactNotes.map((note) => {
          const Icon = note.icon;

          return (
            <article
              key={note.title}
              className="rounded-(--np-radius-xl) border border-(--np-border) bg-(--np-surface) p-8 sm:p-10"
              data-reveal="card"
            >
              <div className="flex items-center gap-5">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-(--np-surface-2) text-foreground">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-medium text-foreground">
                  {note.title}
                </h3>
              </div>
              <p className="mt-8 text-base leading-7 text-muted-foreground sm:text-lg">
                {note.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

type ContactFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function ContactField({
  label,
  name,
  placeholder,
  type = 'text',
  required,
}: ContactFieldProps) {
  return (
    <label className="block">
      <span className="text-base font-medium text-foreground">{label}</span>
      <input
        className={`${fieldClass} mt-4`}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </label>
  );
}

type ContactSelectProps = {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
};

function ContactSelect({
  label,
  name,
  placeholder,
  options,
}: ContactSelectProps) {
  return (
    <label className="block">
      <span className="text-base font-medium text-foreground">{label}</span>
      <select
        className={`${fieldClass} mt-4 appearance-none`}
        name={name}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
