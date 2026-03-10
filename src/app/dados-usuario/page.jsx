'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DadosUsuarioPage() {
  const [activeTab, setActiveTab] = useState('direitos');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSolicitacao = async (tipo) => {
    if (!email) {
      setMensagem('Por favor, insira seu email');
      return;
    }

    setLoading(true);
    try {
      // Simular envio de solicitação
      const response = await fetch('/api/dados-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tipo,
        }),
      });

      if (response.ok) {
        setMensagem(`Solicitação de ${tipo} enviada com sucesso! Você receberá um email em breve.`);
        setEmail('');
      } else {
        setMensagem('Erro ao enviar solicitação. Tente novamente.');
      }
    } catch (error) {
      setMensagem('Erro ao processar solicitação. Entre em contato: pdfix.suporte@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-slate-700">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
          Seus Dados e Direitos
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Gerenciar suas informações pessoais conforme LGPD
        </p>

        {/* Referências Legais */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Fundamentação Legal:</strong> Lei nº 13.709/2018 (LGPD) - Art. 5º (V, VI, VII), Art. 6º (I, VI), Art. 17º
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('direitos')}
            className={`px-4 py-3 font-medium transition-colors ${
              activeTab === 'direitos'
                ? 'text-violet-600 dark:text-violet-400 border-b-2 border-violet-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'
            }`}
          >
            Seus Direitos
          </button>
          <button
            onClick={() => setActiveTab('solicitar')}
            className={`px-4 py-3 font-medium transition-colors ${
              activeTab === 'solicitar'
                ? 'text-violet-600 dark:text-violet-400 border-b-2 border-violet-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'
            }`}
          >
            Fazer Solicitação
          </button>
          <button
            onClick={() => setActiveTab('dados')}
            className={`px-4 py-3 font-medium transition-colors ${
              activeTab === 'dados'
                ? 'text-violet-600 dark:text-violet-400 border-b-2 border-violet-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'
            }`}
          >
            Seus Dados
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'direitos' && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Seus Direitos Conforme LGPD
            </h2>

            {/* Detalhamento das Referências Legais */}
            <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">Fundamentação Legal - Texto Corrido:</h4>
              
              <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-4">
                <p>
                  Conforme definido no Art. 5º, inciso V da Lei Geral de Proteção de Dados (LGPD), dado pessoal é qualquer informação relacionada a pessoa natural identificada ou identificável. Na plataforma PDFix, coletamos diversos dados pessoais seus, incluindo nome completo, email, telefone, endereço, idade e perfil do LinkedIn, além de informações estruturadas em seu currículo. O Art. 5º, inciso VI, define dados pessoais sensíveis como aqueles sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, bem como dados genéticos ou biométricos; a PDFix reafirma seu compromisso de não coletar, processar ou armazenar este tipo de informação, garantindo que sua privacidade em aspectos sensíveis seja respeitada. Por fim, o Art. 5º, inciso VII, estabelece que tratamento é qualquer operação realizada com dados pessoais, tais como coleta, armazenamento, acesso, modificação, exclusão ou qualquer outra forma de processamento — todas essas operações executadas pela PDFix em relação aos seus dados são formalmente consideradas como tratamento de dados, razão pela qual são realizadas sob rigorosos protocolos de segurança e conformidade legal.
                </p>

                <p>
                  O fundamento legal para o tratamento de seus dados pessoais na PDFix está estabelecido no Art. 6º da LGPD, que enumera as bases legais admitidas. Especificamente, o inciso I deste artigo refere-se ao consentimento, entendido como manifestação livre, informada e inequívoca da sua vontade em permitir que a PDFix colete e processe seus dados pessoais — este consentimento é explicitamente obtido no momento em que você realiza o login através de sua conta Google e, posteriormente, ao aceitar os Termos de Uso da plataforma, momento em que você reconhece e consente com as práticas de tratamento aqui descritas. Complementarmente, o Art. 6º, inciso VI, estabelece a execução de contrato como base legal para tratamento de dados, permitindo que a PDFix colete e processe informações pessoais que sejam necessárias para cumprir obrigações contratuais ou preparar a celebração de um contrato com você; no contexto específico da PDFix, este fundamento legal permite a coleta de dados de currículo para gerar e fornecer o serviço de geração de documentos em PDF, o processamento de informações de pagamento para gerenciar transações via Pix, e a manutenção de seus dados para preservar a continuidade da sua conta e acesso à plataforma.
                </p>

                <p>
                  A você é garantido, conforme Art. 17º da LGPD, o direito à exclusão de dados pessoais — também denominado direito ao esquecimento — em uma série de circunstâncias específicas. Este direito pode ser exercido quando os dados pessoais não forem mais necessários para o propósito que justificou sua coleta, quando você retirar seu consentimento para o tratamento, quando você se opuser ao processamento de seus dados para fins específicos, quando os dados tiverem sido tratados de forma ilícita ou contrária à lei, ou ainda quando houver determinação de autoridade competente ou cumprimento de obrigação legal que exija a exclusão. No contexto da PDFix, você possui a faculdade de solicitar a exclusão total de sua conta de usuário, situação na qual todos os dados pessoais e profissionais associados à sua conta serão permanentemente removidos de nossos sistemas dentro de um prazo de até trinta (30) dias corridos, conforme estabelecido em nossa política de retenção de dados.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Direito de Acesso */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Direito de Acesso (Art. 18, I)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você tem o direito de solicitar uma cópia de todos os seus dados pessoais armazenados em nosso sistema.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Prazo:</strong> Responderemos em até 10 dias úteis
                </p>
              </div>

              {/* Direito de Retificação */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-2">
                  Direito de Retificação (Art. 18, II)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você pode corrigir dados pessoais imprecisos ou incompletos.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Dica:</strong> Você pode fazer isso diretamente em sua conta, no formulário de currículo
                </p>
              </div>

              {/* Direito de Exclusão */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-200 mb-2">
                  Direito de Exclusão (Art. 18, III)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você pode solicitar a exclusão permanente de seus dados pessoais.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Atenção:</strong> Isso deletará sua conta e todos os dados associados permanentemente
                </p>
              </div>

              {/* Direito de Portabilidade */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200 mb-2">
                  Direito de Portabilidade (Art. 18, V)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você pode receber seus dados em formato estruturado e portável (JSON, CSV).
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Formato:</strong> Arquivo JSON com todos os seus dados pessoais e profissionais
                </p>
              </div>

              {/* Direito de Oposição */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200 mb-2">
                  Direito de Oposição (Art. 18, VI)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você pode se opor ao processamento de seus dados para fins específicos.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Nota:</strong> Alguns dados são necessários para fornecer o serviço
                </p>
              </div>

              {/* Direito de Informação */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
                  Direito de Informação (Art. 18, IV)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Você tem direito de conhecer como e por que seus dados são processados.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Nosso compromisso:</strong> Transparência total sobre tratamento de dados
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'solicitar' && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Fazer uma Solicitação
            </h2>

            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Seu Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSolicitacao('acesso')}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {loading ? 'Processando...' : 'Solicitar Acesso aos Meus Dados'}
                </button>

                <button
                  onClick={() => handleSolicitacao('retificacao')}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {loading ? 'Processando...' : 'Solicitar Retificação'}
                </button>

                <button
                  onClick={() => handleSolicitacao('portabilidade')}
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {loading ? 'Processando...' : 'Exportar Meus Dados'}
                </button>

                <button
                  onClick={() => handleSolicitacao('exclusao')}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {loading ? 'Processando...' : 'Solicitar Exclusão de Conta'}
                </button>
              </div>

              {mensagem && (
                <div className={`p-4 rounded-lg ${
                  mensagem.includes('sucesso') 
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 text-green-800 dark:text-green-200'
                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 text-red-800 dark:text-red-200'
                }`}>
                  {mensagem}
                </div>
              )}

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                <strong>Nota:</strong> Você receberá um email de confirmação. 
                Para confirmar sua solicitação, precisaremos verificar sua identidade.
              </p>
            </div>
          </section>
        )}

        {activeTab === 'dados' && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Seus Dados Coletados
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                   Dados de Autenticação
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Email da sua conta Google</li>
                  <li>Nome da sua conta Google</li>
                  <li>Foto de perfil (se disponível)</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                   Dados Pessoais
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Nome completo</li>
                  <li>Email pessoal</li>
                  <li>Telefone</li>
                  <li>Endereço</li>
                  <li>Idade</li>
                  <li>LinkedIn URL</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                   Dados Profissionais
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Competências e habilidades</li>
                  <li>Experiências profissionais</li>
                  <li>Histórico educacional</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                   Dados de Pagamento
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Status de pagamento</li>
                  <li>Data e hora do pagamento</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Para exportar todos os seus dados em formato estruturado,</strong> use a opção `Exportar Meus Dados` acima
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Dúvidas?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Entre em contato conosco sobre privacidade e proteção de dados:
          </p>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-500">
              📧 <a href="mailto:pdfix.suporte@gmail.com" className="dark:text-gray-100 hover:underline">pdfix.suporte@gmail.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              Responderemos em até 10 dias úteis
            </p>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Link 
              href="/" 
              className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
            >
              Voltar
            </Link>
            <Link 
              href="/privacidade" 
              className="bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Ver Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
