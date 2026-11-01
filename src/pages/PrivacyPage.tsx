import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LegalLayout } from "../components/LegalLayout";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — Journalize";
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalLayout title="Privacy Policy" updated="November 1, 2026">
      <p>
        Journalize is operated by Ize Labs (“we”, “us”). This policy explains
        what information the Journalize mobile app and website collect, how it
        is used, and the choices you have. Journalize is built to keep your
        trading journal on your device.
      </p>

      <h2>1. A short version</h2>
      <p>
        Your trades, accounts, notes, screenshots, and analytics stay on your
        phone unless you choose to export a backup or back up to Google Drive.
        We do not run ads, sell your data, or require a Journalize account.
      </p>

      <h2>2. Information stored on your device</h2>
      <p>
        When you use the app, the following is saved locally in an on-device
        SQLite database and, where relevant, in the device file system:
      </p>
      <ul>
        <li>Trading accounts, balances, brokers, and archive status</li>
        <li>
          Trades: pair, direction, prices, lots, dates, P&amp;L, tags, notes,
          strategy rules, and attached screenshots
        </li>
        <li>Strategies and rule checklists</li>
        <li>App settings such as theme and calendar preferences</li>
      </ul>
      <p>
        Screenshots you attach are stored as files on the device. The app may
        ask for photo library or camera access only so you can import or attach
        images. We cannot see those photos unless you later include them in a
        backup you create.
      </p>

      <h2>3. Information we do not collect</h2>
      <p>Journalize does not collect analytics, advertising IDs, crash beacons, or marketing profiles. We do not operate a Journalize user account or cloud journal of your trades.</p>

      <h2>4. Optional Google Drive backup</h2>
      <p>
        If you connect Google Drive, you sign in with Google. The app requests
        only the Drive app-data scope
        (<code>https://www.googleapis.com/auth/drive.appdata</code>). That lets
        Journalize store a single hidden backup file (
        <code>journalize-backup.tjbackup</code>) in Google’s per-app folder. The
        file is overwritten on each backup. We do not ask for access to the rest
        of your Drive.
      </p>
      <p>
        Google receives the information required to sign you in and store that
        file, under{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google’s Privacy Policy
        </a>
        . You can disconnect Google in Settings. Disconnecting stops new
        backups; you can also remove Journalize’s app-data from your Google
        account.
      </p>

      <h2>5. Local export and restore</h2>
      <p>
        You can export a backup file from the app and share or store it yourself.
        Anyone with that file can restore your journal. Keep exports private.
        Restore replaces the journal on the device with the backup contents.
      </p>

      <h2>6. Website</h2>
      <p>
        The marketing site at{" "}
        <a href="https://journalize.izelabs.com">journalize.izelabs.com</a> is
        informational. It does not host your trades. Standard server or hosting
        logs (such as IP address and browser type) may be created by the host
        when you visit a page.
      </p>

      <h2>7. How we use information</h2>
      <p>On-device data is used only to provide the journal, calendar, accounts, analytics, and backup features you ask for. Google account data is used only to create, replace, or restore your optional Drive backup.</p>

      <h2>8. Sharing</h2>
      <p>
        We do not sell your personal information. We do not share journal
        contents with third parties. Optional processors you choose to use
        include Google (sign-in and Drive app-data) and Apple or Google as the
        app store for the app itself.
      </p>

      <h2>9. Retention and deletion</h2>
      <p>
        Local data remains until you delete trades, accounts, or the app.
        Uninstalling Journalize removes the on-device database and images.
        Drive backups remain in your Google app-data folder until you
        disconnect and remove them, or until Google deletes them under your
        account settings. Exported files remain wherever you saved them.
      </p>

      <h2>10. Children</h2>
      <p>
        Journalize is not directed at children under 13, and we do not
        knowingly collect their personal information.
      </p>

      <h2>11. Your choices</h2>
      <ul>
        <li>Use the app fully offline without connecting Google</li>
        <li>Refuse photo access; you can still type trades manually</li>
        <li>Export, restore, or delete data from Settings</li>
        <li>Disconnect Google Drive at any time</li>
      </ul>

      <h2>12. International users</h2>
      <p>
        If you enable Drive backup, Google may process that backup in the
        regions where Google operates. Local journal data does not leave the
        device unless you export it or back it up.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may update this policy. The “Last updated” date at the top will
        change. Continued use of the app or site after an update means you
        accept the revised policy.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about privacy:{" "}
        <a href="mailto:abraralhasanprogrammer@gmail.com">
          abraralhasanprogrammer@gmail.com
        </a>
        . Related terms are at{" "}
        <Link to="/terms">journalize.izelabs.com/terms</Link>.
      </p>
    </LegalLayout>
  );
}
