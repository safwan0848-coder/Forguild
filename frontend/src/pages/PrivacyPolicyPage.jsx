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

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center gap-2 badge badge-violet mb-3 px-3 py-2">
              <i className="bi bi-shield-lock"></i> Your data
            </div>
            <h1 className="fw-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-custom mb-0">Last updated {UPDATED}</p>
          </div>

          <article className="card card-static p-4 p-md-5">
            <Section title="Who we are">
              <p className="mb-0">
                Forguild is a collaboration platform where students, developers, designers, and builders discover hackathons and form teams. This policy explains what information the product uses, why it is used, and the choices you have. Questions about privacy go to <a href="mailto:support@forguild.app" className="text-violet text-decoration-none fw-semibold">support@forguild.app</a>.
              </p>
            </Section>

            <Section title="Information you give us">
              <p className="mb-0">We collect only what you submit while using Forguild:</p>
              <ul className="mb-0">
                <li>Account details: your name, email address, password, and primary specialization.</li>
                <li>Profile details you choose to publish: professional title, bio, location, skills, and an avatar image address.</li>
                <li>Team details: team name, project description, open roles, and the join requests you send or review.</li>
                <li>Messages you send to teammates, and notifications shown in your account.</li>
                <li>Support requests, and the email you enter if you subscribe to hackathon updates.</li>
              </ul>
            </Section>

            <Section title="Information stored on your device">
              <p className="mb-0">
                Forguild stores your light or dark theme choice in this browser so the site can remember it. That value stays on your device. Forguild does not use advertising cookies and does not sell personal information.
              </p>
            </Section>

            <Section title="How we use information">
              <ul className="mb-0">
                <li>Create your account and let you sign in.</li>
                <li>Show your public profile to members who are looking for teammates.</li>
                <li>Run event discovery, saved events, teams, join requests, messages, and notifications.</li>
                <li>Send hackathon updates when you subscribe.</li>
                <li>Answer support and privacy requests.</li>
                <li>Investigate abuse and keep the service reliable.</li>
              </ul>
            </Section>

            <Section title="What other members can see">
              <p className="mb-0">
                Other members can see the profile you publish: name, title, bio, location, skills, and avatar. A team leader can see an application you send to that team. People in a conversation can see the messages in that conversation. Your password is never shown.
              </p>
            </Section>

            <Section title="Event organizers">
              <p className="mb-0">
                Forguild does not register you for hackathons and does not collect ticket payments. When you follow an event registration link, you leave Forguild and use the organizer&apos;s website. That organizer collects information under their own privacy policy. Read it before you register or pay a fee.
              </p>
            </Section>

            <Section title="When we share information">
              <p className="mb-0">We share personal information only in these cases:</p>
              <ul className="mb-0">
                <li>With other members, in the ways described above, so teams and messages can work.</li>
                <li>With providers that host or operate Forguild, and only so they can provide that service.</li>
                <li>When the law requires it, or when it is needed to protect members from harm, fraud, or abuse.</li>
                <li>When you ask us to share it.</li>
              </ul>
            </Section>

            <Section title="How long we keep it">
              <p className="mb-0">
                Account and profile information stays while your account is open. If you ask us to delete the account, we delete or de-identify that information, except a limited record we still need for safety, security, or a legal duty. A message you already sent can remain with the people who received it.
              </p>
            </Section>

            <Section title="Your choices">
              <ul className="mb-0">
                <li>Update your profile any time from My Profile.</li>
                <li>Stop hackathon emails by writing to support@forguild.app with the subject &quot;Unsubscribe&quot;.</li>
                <li>Ask for a copy of your account information, or ask us to delete the account, from the same address. Use the email on the account.</li>
                <li>Clear this site&apos;s stored data in your browser to remove the saved theme.</li>
              </ul>
            </Section>

            <Section title="Age">
              <p className="mb-0">
                Forguild is for people who are at least 16 years old. We do not knowingly collect information from anyone younger. If you believe a younger person has an account, email us and we will delete it.
              </p>
            </Section>

            <Section title="Security">
              <p className="mb-0">
                We protect account access and limit who can handle personal information. No online service can promise perfect security. Use a unique password, and do not send passwords or payment details in Forguild messages.
              </p>
            </Section>

            <Section title="Changes">
              <p className="mb-0">
                If this policy changes, the new version will be posted on this page with a new date. A significant change will also be noted in the product.
              </p>
            </Section>

            <Section title="Contact" last>
              <p className="mb-0">
                Email <a href="mailto:support@forguild.app?subject=Privacy%20request" className="text-violet text-decoration-none fw-semibold">support@forguild.app</a> with the subject &quot;Privacy request&quot;. You can also use the <Link to="/support" className="text-violet text-decoration-none fw-semibold">Support</Link> page.
              </p>
            </Section>
          </article>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 small">
            <Link to="/terms" className="text-muted-custom text-decoration-none">Terms of Service</Link>
            <Link to="/support" className="text-muted-custom text-decoration-none">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
