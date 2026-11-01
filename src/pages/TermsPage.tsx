import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LegalLayout } from "../components/LegalLayout";

export function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — Journalize";
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalLayout title="Terms of Service" updated="November 1, 2026">
      <p>
        These terms govern your use of the Journalize mobile application and
        the website at{" "}
        <a href="https://journalize.izelabs.com">journalize.izelabs.com</a>,
        operated by Ize Labs (“we”, “us”). By downloading, accessing, or using
        Journalize, you agree to these terms.
      </p>

      <h2>1. The service</h2>
      <p>
        Journalize is an offline trading journal. It lets you log trades,
        accounts, and strategies, review a calendar and analytics, and
        optionally back up data on the device or to Google Drive. It is a
        record-keeping tool. It is not a broker, exchange, signal service, or
        investment adviser.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be able to form a binding contract and be old enough to use
        the app stores that distribute Journalize. If you use the app on behalf
        of an organization, you confirm you have authority to bind it.
      </p>

      <h2>3. Your journal</h2>
      <p>
        You own the content you enter: trades, notes, screenshots, strategies,
        and backups. You are responsible for its accuracy and for keeping
        backups you care about. Because the journal is stored on your device,
        losing the device, uninstalling the app, or skipping backups can mean
        losing data. We are not obliged to recover it.
      </p>

      <h2>4. License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable license to
        install and use Journalize on devices you own or control, in line with
        the Apple App Store or Google Play terms that apply to your download.
        You may not copy, reverse engineer, or resell the app except as
        allowed by law.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Misuse the app or attempt to disrupt it</li>
        <li>Use Journalize for unlawful activity</li>
        <li>Upload content you do not have the right to store</li>
        <li>
          Treat in-app analytics, sample data, or any figures as investment
          advice or a guarantee of results
        </li>
      </ul>

      <h2>6. No financial advice</h2>
      <p>
        Nothing in Journalize is a recommendation to buy, sell, or hold any
        instrument. Markets involve risk of loss. You are solely responsible
        for trading decisions. Past journaled performance does not predict
        future results.
      </p>

      <h2>7. Backups and Google Drive</h2>
      <p>
        Local export and optional Google Drive backup are provided as-is. Drive
        backup uses Google Sign-In and Google’s hidden app-data folder. Your
        use of Google is also governed by Google’s terms and privacy policy.
        We do not control Google’s availability. A backup may fail, be
        incomplete, or be overwritten by a later backup.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The app may use device features (photos, file sharing) and third-party
        platforms (Apple, Google). Those providers’ terms apply. We are not
        responsible for their services.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        Journalize, its name, logo, and software are owned by Ize Labs or its
        licensors. These terms do not transfer ownership to you. Your journal
        content remains yours.
      </p>

      <h2>10. Disclaimer</h2>
      <p>
        Journalize is provided “as is” and “as available”, without warranties
        of any kind, including merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the app will be
        uninterrupted, error-free, or that analytics will be complete or
        correct.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, Ize Labs and its operators will
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for lost profits, lost trades, lost data, or
        business interruption, arising from your use of Journalize. Our total
        liability for any claim relating to the app or site will not exceed
        the amount you paid us for Journalize in the twelve months before the
        claim, or ten US dollars if you paid nothing.
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You will defend and indemnify Ize Labs against claims arising from
        your journal content, your trading activity, or your breach of these
        terms.
      </p>

      <h2>13. Changes and termination</h2>
      <p>
        We may update the app or these terms. The “Last updated” date will
        change. If you do not agree, stop using Journalize and uninstall it.
        We may stop offering the app or a feature at any time.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of India, without regard to
        conflict-of-law rules. Courts in India will have exclusive
        jurisdiction, except where applicable consumer law gives you the right
        to bring a claim in your home country.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions:{" "}
        <a href="mailto:abraralhasanprogrammer@gmail.com">
          abraralhasanprogrammer@gmail.com
        </a>
        . Privacy
        practices are described at{" "}
        <Link to="/privacy">journalize.izelabs.com/privacy</Link>.
      </p>
    </LegalLayout>
  );
}
