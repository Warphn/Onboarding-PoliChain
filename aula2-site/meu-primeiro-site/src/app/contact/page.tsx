export const metadata = {
  title: 'Contact | VB',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-lg px-6 py-12 text-[#F2F2F2]">
      <h1 className="mb-6 text-4xl font-semibold text-[#FFCF00]">Contact</h1>
      <p className="mb-4 text-sm text-[#C0C0C0]">
        Send me your feedback or any questions
      </p>
      <textarea
        rows={8}
        placeholder="Write here your message..."
        className="w-full rounded-md bg-[#1A1A1A] p-4 outline-none focus:ring-2 focus:ring-[#FFCF00]/60"
      />

      <button
        type="button"
        className="mt-4 rounded-md border border-[#FFCF00] px-6 py-2 text-base font-medium transition-colors hover:bg-[#FFCF00]/70"
      >
        Send
      </button>
    </section>
  );
}
