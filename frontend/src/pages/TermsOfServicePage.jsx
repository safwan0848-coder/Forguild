import React from 'react';
import { Link } from 'react-router-dom';

const UPDATED = 'November 27, 2026';

function Section({ title, children, last = false }) {
  return (
    <section className={last ? '' : 'mb-4 pb-4 border-bottom border-glass'}>
      <h2 className="h5 fw-bold mb-3">{title}</h2>
      <div className="text-muted-custom d-flex flex-column gap-3">{children}</div>
    </section>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center gap-2 badge badge-violet mb-3 px-3 py-2">
              <i className="bi bi-file-earmark-text"></i> The agreement
            </div>
            <h1 className="fw-bold mb-2">Terms of Service</h1>
            <p className="text-muted-custom mb-0">Last updated {UPDATED}</p>
          </div>

          <article className="card card-static p-4 p-md-5">
            <Section title="Agreement">
              <p className="mb-0">
                These terms are the agreement between you and Forguild. By creating an account or using the site, you agree to them and to the <Link to="/privacy" className="text-violet text-decoration-none fw-semibold">Privacy Policy</Link>. If you do not agree, do not use Forguild.
              </p>
            </Section>

            <Section title="The service">
              <p className="mb-0">
                Forguild helps you discover hackathons and other building events, save events, publish a profile, create teams, apply to teams, and message teammates. The tagline is simple: build together, grow together.
              </p>
              <p className="mb-0">
                Forguild does not host event registration, sell tickets, or pay prizes. Dates, rules, fees, eligibility, and prizes belong to the organizer. Confirm them on the organizer&apos;s site before you rely on a listing.
              </p>
            </Section>

            <Section title="Accounts">
              <ul className="mb-0">
                <li>You must be at least 16 years old.</li>
                <li>Use your own name and an email address you can access.</li>
                <li>You are responsible for activity under your account and for keeping the password private.</li>
                <li>Tell us at support@forguild.app if you think someone else is using your account.</li>
                <li>Do not create an account for another person without their permission.</li>
              </ul>
            </Section>

            <Section title="Your content">
              <p className="mb-0">
                You keep ownership of the profile text, team descriptions, messages, and other content you post. You give Forguild permission to host and display that content so the service can run, including showing it to other members. That permission ends when you delete the content or close the account, except copies other members already received and short-lived backups.
              </p>
              <p className="mb-0">
                You promise that you have the right to post the content, and that it does not break the law or someone else&apos;s rights.
              </p>
            </Section>

            <Section title="Teams">
              <p className="mb-0">
                Team leaders decide who joins. An application is a request, not a guaranteed place. Describe your skills and availability honestly. A team page is for finding collaborators. It is not a job offer, an employment contract, or a promise of pay, equity, or a prize.
              </p>
            </Section>

            <Section title="Acceptable use">
              <p className="mb-0">Do not:</p>
              <ul className="mb-0">
                <li>Harass, threaten, or discriminate against another member.</li>
                <li>Post scams, malware, or event information you know is false.</li>
                <li>Impersonate a person, a team, or an event organizer.</li>
                <li>Share someone else&apos;s private information without permission.</li>
                <li>Send spam, or scrape, overload, or try to break the service.</li>
                <li>Use Forguild for anything illegal.</li>
              </ul>
              <p className="mb-0">
                We may remove content or suspend an account that breaks these rules.
              </p>
            </Section>

            <Section title="Messages">
              <p className="mb-0">
                Use messages to coordinate on events and projects. Do not use them to harass members or to advertise. We may review a reported message when that is needed to enforce these terms or the law.
              </p>
            </Section>

            <Section title="Other sites">
              <p className="mb-0">
                Links to organizer sites and to services such as GitHub, LinkedIn, or Discord leave Forguild. Those sites have their own terms and privacy rules. Forguild is not responsible for their content, fees, or decisions, including whether you are accepted to an event.
              </p>
            </Section>

            <Section title="Forguild's property">
              <p className="mb-0">
                The Forguild name, logo, and the design of this product belong to Forguild. You may not copy the brand to offer a competing service. Event names and organizer marks belong to their owners.
              </p>
            </Section>

            <Section title="Disclaimers">
              <p className="mb-0">
                Forguild is provided as available. We do not guarantee that every listing is complete, that a teammate will finish a project, that a team will win a prize, or that the site will be uninterrupted. Listings can change when an organizer changes them.
              </p>
            </Section>

            <Section title="Limits on liability">
              <p className="mb-0">
                To the fullest extent the law allows, Forguild is not liable for indirect damages or for lost profits, lost prizes, or event fees arising from your use of the site or from an event run by someone else. If we are found liable, the total liability for a claim is limited to the greater of the amount you paid Forguild in the previous 12 months or 100 US dollars. Forguild does not currently charge a membership fee. Some places do not allow these limits. Where that is the case, the limits apply only as far as the law allows.
              </p>
            </Section>

            <Section title="Ending use">
              <p className="mb-0">
                You may stop using Forguild at any time and ask us to delete your account from the <Link to="/support" className="text-violet text-decoration-none fw-semibold">Support</Link> page. We may suspend or close an account that breaks these terms, and we may discontinue the service. The sections on content, disclaimers, and liability still apply after an account closes.
              </p>
            </Section>

            <Section title="Changes">
              <p className="mb-0">
                We may update these terms by posting the new version on this page and changing the date. If you keep using Forguild after the update, the new terms apply. If you do not agree, stop using the service and ask us to delete your account.
              </p>
            </Section>

            <Section title="Contact" last>
              <p className="mb-0">
                Questions about these terms: <a href="mailto:support@forguild.app?subject=Terms%20question" className="text-violet text-decoration-none fw-semibold">support@forguild.app</a>.
              </p>
            </Section>
          </article>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 small">
            <Link to="/privacy" className="text-muted-custom text-decoration-none">Privacy Policy</Link>
            <Link to="/support" className="text-muted-custom text-decoration-none">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
