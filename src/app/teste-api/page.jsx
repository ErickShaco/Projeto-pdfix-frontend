'use client';

import { useState } from 'react';
import { competenciasAPI, experienciasAPI, formacaoAPI, dadosPessoaisAPI } from '@/lib/api';

export default function TesteAPIPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const addLog = (message, type = 'info') => {
    const colors = {
      info: 'text-blue-600',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-yellow-600'
    };
    
    setLogs(prev => [...prev, { 
      message, 
      type,
      color: colors[type],
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const testarConexao = async () => {
    setLogs([]);
    setLoading(true);
    
    const usuario_id = localStorage.getItem('usuario_id');
    
    if (!usuario_id) {
      addLog('❌ Erro: usuario_id não encontrado no localStorage', 'error');
      addLog('💡 Definindo usuario_id automaticamente...', 'warning');
      const newId = 'test-user-' + Date.now();
      localStorage.setItem('usuario_id', newId);
      addLog(`✅ Usuario ID definido: ${newId}`, 'success');
    } else {
      addLog(`✅ Usuario ID encontrado: ${usuario_id}`, 'success');
    }

    addLog('-----------------------------------', 'info');

    // Teste 1: Criar Dados Pessoais
    try {
      addLog('📝 Teste 1: Criar Dados Pessoais...', 'info');
      const dadosPessoais = await dadosPessoaisAPI.criar({
        usuario_id: localStorage.getItem('usuario_id'),
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 99999-9999',
        endereco: 'São Paulo, SP',
        idade: 28,
        linkedin_url: 'https://linkedin.com/in/joaosilva'
      });
      addLog(`✅ Dados Pessoais criados: ${JSON.stringify(dadosPessoais.data, null, 2)}`, 'success');
    } catch (error) {
      addLog(`❌ Erro ao criar dados pessoais: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 2: Buscar Dados Pessoais
    try {
      addLog('📋 Teste 2: Buscar Dados Pessoais...', 'info');
      const dadosPessoais = await dadosPessoaisAPI.buscarPorUsuario(localStorage.getItem('usuario_id'));
      addLog(`✅ Dados encontrados: ${JSON.stringify(dadosPessoais.data, null, 2)}`, 'success');
    } catch (error) {
      addLog(`❌ Erro ao buscar dados pessoais: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 3: Criar Competência
    try {
      addLog('📝 Teste 3: Criar Competência...', 'info');
      const competencia = await competenciasAPI.criar({
        usuario_id: localStorage.getItem('usuario_id'),
        nome_competencia: 'React.js',
        categoria: 'Frontend',
        nivel_proficiencia: 'Avançado',
        descricao: 'Framework para desenvolvimento web'
      });
      addLog(`✅ Competência criada: ${JSON.stringify(competencia.data, null, 2)}`, 'success');
    } catch (error) {
      addLog(`❌ Erro ao criar competência: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 4: Listar Competências
    try {
      addLog('📋 Teste 4: Listar Competências...', 'info');
      const competencias = await competenciasAPI.listar();
      addLog(`✅ Total de competências: ${competencias.data?.length || 0}`, 'success');
      addLog(`📊 Dados: ${JSON.stringify(competencias.data, null, 2)}`, 'info');
    } catch (error) {
      addLog(`❌ Erro ao listar competências: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 5: Criar Experiência
    try {
      addLog('📝 Teste 5: Criar Experiência...', 'info');
      const experiencia = await experienciasAPI.criar({
        usuario_id: localStorage.getItem('usuario_id'),
        titulo_cargo: 'Desenvolvedor Full Stack',
        empresa: 'Tech Company',
        localidade: 'São Paulo, SP',
        data_inicio: '2023-01-01',
        data_fim: null,
        atual: true,
        sobre: 'Desenvolvimento de aplicações web'
      });
      addLog(`✅ Experiência criada: ${JSON.stringify(experiencia.data, null, 2)}`, 'success');
    } catch (error) {
      addLog(`❌ Erro ao criar experiência: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 6: Listar Experiências
    try {
      addLog('📋 Teste 6: Listar Experiências...', 'info');
      const experiencias = await experienciasAPI.listar();
      addLog(`✅ Total de experiências: ${experiencias.data?.length || 0}`, 'success');
      addLog(`📊 Dados: ${JSON.stringify(experiencias.data, null, 2)}`, 'info');
    } catch (error) {
      addLog(`❌ Erro ao listar experiências: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 7: Criar Formação
    try {
      addLog('📝 Teste 7: Criar Formação...', 'info');
      const formacao = await formacaoAPI.criar({
        usuario_id: localStorage.getItem('usuario_id'),
        instituicao: 'Universidade Federal',
        curso: 'Ciência da Computação',
        nivel: 'Bacharelado',
        area_estudo: 'Tecnologia da Informação',
        data_inicio: '2019-01-01',
        data_fim: '2023-12-31',
        concluido: true,
        descricao: 'Graduação completa'
      });
      addLog(`✅ Formação criada: ${JSON.stringify(formacao.data, null, 2)}`, 'success');
    } catch (error) {
      addLog(`❌ Erro ao criar formação: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');

    // Teste 8: Listar Formações
    try {
      addLog('📋 Teste 8: Listar Formações...', 'info');
      const formacoes = await formacaoAPI.listar();
      addLog(`✅ Total de formações: ${formacoes.data?.length || 0}`, 'success');
      addLog(`📊 Dados: ${JSON.stringify(formacoes.data, null, 2)}`, 'info');
    } catch (error) {
      addLog(`❌ Erro ao listar formações: ${error.response?.data?.mensagem || error.message}`, 'error');
    }

    addLog('-----------------------------------', 'info');
    addLog('🎉 Testes concluídos!', 'success');
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-slate-700">
          <h1 className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
            🧪 Teste de Conexão API
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Frontend ↔ Backend
          </p>

          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">ℹ️ Informações</h2>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Backend: <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">http://localhost:3001/api</code></li>
              <li>• Usuario ID: <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
                {typeof window !== 'undefined' ? localStorage.getItem('usuario_id') || 'não definido' : 'carregando...'}
              </code></li>
            </ul>
          </div>

          <button
            onClick={testarConexao}
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 mb-6"
          >
            {loading ? '⏳ Executando testes...' : '🚀 Iniciar Testes'}
          </button>

          {logs.length > 0 && (
            <div className="bg-slate-950 rounded-xl p-6 overflow-auto max-h-[600px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-green-400 font-mono font-semibold">$ Console</h3>
                <button
                  onClick={() => setLogs([])}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Limpar
                </button>
              </div>
              <div className="space-y-2 font-mono text-sm">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-gray-500 text-xs">{log.timestamp}</span>
                    <pre className={`${log.color} flex-1 whitespace-pre-wrap break-words`}>
                      {log.message}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href="/curriculo"
            className="text-violet-600 dark:text-violet-400 hover:underline"
          >
            ← Voltar para Criar Currículo
          </a>
        </div>
      </div>
    </main>
  );
}
