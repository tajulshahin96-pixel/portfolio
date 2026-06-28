'use client';

import { useActionState, useEffect } from 'react';
import {
  submitContactForm,
  type ContactFormState,
} from '@/app/actions/contact';

const initialState: ContactFormState = {
  success: false,
  error: null,
};

export default function ContactLayout() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById(
        'contact-form'
      ) as HTMLFormElement | null;

      if (form) {
        form.reset();
      }
    }
  }, [state.success]);

  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-gap relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors">
            <span className="material-symbols-outlined text-primary mb-4 text-[32px]">
              mail
            </span>

            <h3 className="text-headline-md font-headline-md mb-2">
              Email Us
            </h3>

            <p className="text-on-surface-variant font-body-md mb-4">
              For general inquiries and partnership opportunities.
            </p>

            <a
              href="mailto:tajulshahin96@gmail.com"
              className="text-primary font-bold text-body-lg hover:underline break-all"
            >
              tajulshahin96@gmail.com
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-tertiary/30 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-4 text-[32px]">
              call
            </span>

            <h3 className="text-headline-md font-headline-md mb-2">
              Call Us
            </h3>

            <p className="text-on-surface-variant font-body-md mb-4">
              Available Monday through Friday, 9am - 6pm EST.
            </p>

            <a
              href="tel:01629105607"
              className="text-tertiary font-bold text-body-lg hover:underline break-all"
            >
              01629105607
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-secondary/30 transition-colors">
            <span className="material-symbols-outlined text-secondary mb-4 text-[32px]">
              location_on
            </span>

            <h3 className="text-headline-md font-headline-md mb-2">
              Location
            </h3>

            <p className="text-on-surface-variant font-body-md mb-4">
              Headquartered in Dhaka, Bangladesh. Serving clients globally.
            </p>

            <span className="text-secondary font-bold text-body-lg">
              Available Worldwide
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-[32px] p-6 sm:p-8 md:p-12 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-headline-lg font-headline-lg mb-8 relative z-10">
              Send a Message
            </h2>

            {state.success && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 relative z-10 flex items-center gap-3">
                <span className="material-symbols-outlined">
                  check_circle
                </span>

                <p>
                  Your message has been sent successfully! We will get back to
                  you soon.
                </p>
              </div>
            )}

            {state.error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 relative z-10 flex items-center gap-3">
                <span className="material-symbols-outlined">error</span>
                <p>{state.error}</p>
              </div>
            )}

            <form
              id="contact-form"
              action={formAction}
              className="relative z-10 flex flex-col gap-6"
            >
              {/* তোমার সব existing input field এখানে আগের মতোই থাকবে */}

              <button
                type="submit"
                disabled={isPending}
                className="primary-gradient-btn w-full py-4 rounded-xl text-white font-bold text-body-lg mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                    Sending...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}