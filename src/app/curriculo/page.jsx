import CurriculoForm from "../../components/curriculo/CurriculoForm";

export const dynamic = 'force-dynamic';

export default function CurriculoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] py-12 transition-colors duration-300">
      <CurriculoForm />
    </div>
  );
}
