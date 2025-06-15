export const metadata = {
  title: 'Store | VB',
};

export default function PortfolioPage() {
  return (
    <section className="font[var(--font-inter)] mx-auto max-w-3xl px-6 py-12 text-[#F2F2F2]">
      <h1 className="mb-8 text-center text-4xl text-[#FFCF00]">
        Portfolio
      </h1>

      <div
        className="
          rounded-2xl
          bg-[#1A1A1A]/90     /* fundo grafite 90 % opacidade */
          p-8
          shadow-lg shadow-black/40
          backdrop-blur-md     /* vidro fosco sutil (opcional) */
          space-y-6
        "
      >
        <p className="text-center text-sm text-[#C0C0C0]">
          Aqui vou colocar minhas músicas em players
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-32 rounded-md bg-[#0F0F0F]/40" />
          <div className="h-32 rounded-md bg-[#0F0F0F]/40" />
          <div className="h-32 rounded-md bg-[#0F0F0F]/40 sm:col-span-2" />
        </div>
      </div>
    </section>
  );
}